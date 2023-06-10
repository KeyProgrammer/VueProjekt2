<template>
  <main class="content">
    <div class="container-top" v-html="$t('Project.MvcDescription')">
    </div>

    <h1 v-html="$t('Project.TitleOfProject')"></h1>
    <div class="errorText" v-html="errorMessage"></div>
    <div class="form">
      <input :placeholder="$t('Project.placeHolderText')" v-model="ElementToAdd.text" name="todo" @keyup.enter="addElement"  :class="{ 'form-input': !error, 'error': error }">
      
      <button @click="addElement"><i class="fa fa-plus" aria-hidden="true"></i></button>
    </div>
    <ul>
      <li :id='element.id' v-for="element in toDoList">
        <!-- checkBox -->
        <input v-if="!element.isEditing" type="checkbox" v-model="element.complete" @click="toggleTodo(element.id)">

        <span v-if="!element.isEditing">
          <p v-if="element.complete">
            <s>{{ element.text }}</s>
          </p>
          <p v-else>{{ element.text }}</p>
        </span>
        <input v-else name="editInput" type="text" v-model="element.text" @blur="stopEditing(element)"
          @keyup.enter="stopEditing(element)">
        <div class="buttons">
          <button v-if="!element.isEditing" @click="startEditing(element)"><i class="fas fa-edit"></i></button>
          <button v-else @click="stopEditing(element)"><i class="fa fa-check" aria-hidden="true"></i></button>
          <button v-if="!element.isEditing" @click="deleteToDoListElement(element.id)"><i
              class="fas fa-trash"></i></button>
          <button v-else @click="stopEditing(element)"><i class="fa-solid fa-ban fa-sm"></i>
          </button>
        </div>
      </li>
    </ul>
  </main>
</template>
<script>
import axios from 'axios';

export default {
  name: 'Project',
  data() {
    return {
      toDoList: [],
      listElementObject: {
        text: '',
        complete: '',
      },
      curretInputText: '',
      ElementToAdd: {
        text: ''
      },
      errorMessage: '',
      error: false
    }
  },
  methods: {
    loadListElement: function () {
      console.log("Pobrieranie Elementów z REST API")
      axios.get("https://render-app-appi.onrender.com/todo")
        .then(response => {
          if (response.status === 200) {
            let backendData = response.data;
            this.toDoList = backendData.map((toDoElement) => {
              return {
                ...toDoElement,  // zachowaj istniejące właściwości obiektu
                isEditing: false
              }
            })
          }
        })
    },

    deleteToDoListElement: function (ElementId) {
      axios.delete(`https://render-app-appi.onrender.com/todo/${ElementId}`)
        .then(response => {
          if (response.status === 200) {
            this.loadListElement();
          }
        })
    },

    updateToDoListElement: function (ListElement) {
      axios.put(`https://render-app-appi.onrender.com/todo/${ListElement.id}`, ListElement)
        .then(response => {
          if (response.status === 200) {
            this.loadListElement();
            console.log("Wysłano do bazy danych (zaktualizowano element)");
          }
        })
    },

    addToDoListElement: function (ElementToAdd) {
      axios.post("https://render-app-appi.onrender.com/todo", ElementToAdd)
        .then(response => {
          if (response.status === 200) {
            this.loadListElement();
            console.log("Wysłano do bazy danych (Dodano element)");
          }
        })
    },

    addElement: function () {
      console.log(this.ElementToAdd.text)
      this.ElementToAdd.text = this.ElementToAdd.text.trim()
      if (this.ElementToAdd.text === '') {
        this.errorMessage = this.$t('Project.errorMessage')
        this.error=true
      } else {
        this.errorMessage = ""
        this.addToDoListElement(this.ElementToAdd)
        this.ElementToAdd.text = ''
        this.error=false
      }
    },

    

    toggleTodo: function (ElementId) {
      // Edytowanie listy (wprowadzanie zmian)
      this.toDoList = this.toDoList.map((toDoElement) => {
        if (toDoElement.id === ElementId) {
          return {
            ...toDoElement,  // zachowaj istniejące właściwości obiektu
            complete: !toDoElement.complete
          }
        }
        return { ...toDoElement }
      })
      // Dodstarczanie obiektu do BackEndu
      const ChangedElement = this.toDoList.filter(toDoElement => (toDoElement.id === ElementId))
      this.updateToDoListElement(Object.assign(this.listElementObject, ChangedElement[0]))
      console.log("Dokonano aktualizacji elementu (Zadanie zrobione)");
    },

    startEditing: function (element) {
      this.curretInputText = element.text
      element.isEditing = true;

      this.$nextTick(() => {
        const inputElement = document.querySelector('input[name="editInput"]');
        if (inputElement) {
          inputElement.focus();
        }
      });
    },

    stopEditing: function (element) {
      element.isEditing = false

      if (element.text === '' || element.text === this.curretInputText) {
        element.text = this.curretInputText
      } else {
        // Dodstarczanie obiektu do BackEndu
        const ChangedElement = this.toDoList.filter(toDoElement => (toDoElement.id === element.id))
        this.updateToDoListElement(Object.assign(this.listElementObject, ChangedElement[0]))
        console.log("Dokonano aktualizacji elementu (Edytuj treść)");
      }
    }
  },
  mounted() {
    this.loadListElement()
  }
}
</script>

<style scoped>


:deep(.error){
  display: inline-block;
  padding: .5rem 1rem;
  font-size: 1rem;
  border: 2px solid red;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}
.container-top {
  display: flex;
  flex-wrap: wrap;
  margin: 30px 0;
  background-color: #f5f5f5;
  padding: 30px;
  position: relative;
  justify-content: center;
  box-shadow: 0 8px 27px -11px rgba(32, 32, 37, 1);
}

:deep(.container-top p) {
  font-size: 18.5px;
  line-height: 1.5;
  color: #393939;
  margin-bottom: 10px;
  text-align: center;
}

:deep(.container-top p) {
  margin-bottom: 0;
  animation: fade-in 1s ease-in-out;

}

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes slide-up {
  0% {
    transform: translateY(50px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

.content {
  min-width: 320px;
  padding-bottom: 50px;
  margin-bottom: 150px;
}


.form {
  margin-top: 2px;
  display: flex;
  margin-bottom: 20px;
  width: 100%;
  justify-content: center;
}


.form input {
  width: 80%;
  height: 50px;
}


.buttons {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}

:deep(.errorText) {
  width: 100%;
  text-align: center;
  color: red;
  font-size: 12px;
  font-family: Arial, Helvetica, sans-serif;
  padding-top: 20px;
}



[type="text"],
button, .form-input {
  display: inline-block;
  padding: .5rem 1rem;
  font-size: 1rem;
  border: 2px solid #132e6c;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}

button {
  cursor: pointer;
  background-color: #4f6db3;
  color: white;
  margin: 0 .5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: 0.1s;
}


button:hover {
  background-color: #132e6c;
}

[type="text"] {
  width: 100%;

}

[type="text"]:active,
[type="text"]:focus {
  outline: 0;
  border: 2px solid #4f6db3;
}

[type="checkbox"] {
  margin-right: 1rem;
  width: 20px;
  height: 20px;
}

:deep(h1) {
  padding-top: 30px;
  color: #132e6c;
  text-transform: uppercase;
  text-align: center;
  justify-content: center;
  font-weight: 900;
  border-bottom: 5px solid #132e6c;
  font-family: Arial, Helvetica, sans-serif;
  width: 90%;
  left: 50%;
  position: relative;
  transform: translate(-50%);
}

:deep(ul) {
  padding: 0;
}

:deep(.todo-list p) {
  color: #132e6c;
  font-weight: 900;
  text-align: center;

}

:deep(li:last-child) {
  margin-bottom: 0;
}

:deep(li) {
  display: flex;
  align-items: center;
  padding: 2px;
  padding-left: 10px;
  margin-bottom: 1rem;
  background: rgba(212, 216, 225, 0.538);
  border-radius: 4px;
  width: 80%;
  position: relative;
  left: 50%;
  transform: translate(-50%);
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  justify-content: center;


}

:deep(span p) {
  margin: 0;
  padding: 10px;
}

:deep(li span s) {
  text-decoration: line-through;
  color:#00000079;
}

:deep(li span) {
  display: inline-block;
  flex: auto;
  min-width: 50px;
  word-wrap: break-word;
  border-radius: 4px;
  border: 2px solid transparent;
  justify-self: left;
}

li span:focus {
  outline: 0;
  border: 2px solid #1c242e;
  background: rgba(179, 207, 255, 0.52)
}

@media only screen and (max-width:420px) {
  .buttons {
    display: flex;
    flex-direction: column;
    min-width: 70px;
    max-width: 70px;
  }
}
</style>