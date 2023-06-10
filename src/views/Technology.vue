<template>
  <main class="content">
    <div class="container">
      <div class="select">
        <select name="format" id="format" @change="changeContentInDiv($event.target.value)">
          <option class="implementation" value="Offert.container-content.implementationContent">
            {{ $t('Offert.menuOptions.implementationOption') }}
          </option>
          <option class="consultation" value="Offert.container-content.consultationContent">
            {{ $t('Offert.menuOptions.consultationOption') }}
          </option>
          <option class="analytics" value="Offert.container-content.analyticsContent">
            {{ $t('Offert.menuOptions.analyticsOption') }}
          </option>
          <option class="uxDesign" value="Offert.container-content.uxDesignContent">
            {{ $t('Offert.menuOptions.uxDesignOption') }}
          </option>
        </select>
      </div>
      <div class="menu-mini-container">
        <ul class="mini_menu">
          <li :class="{ active: jsonDivContentNameVariable === 'Offert.container-content.implementationContent' }"
              @click="changeContentInDiv('Offert.container-content.implementationContent')">
            <a>{{ $t('Offert.menuOptions.implementationOption') }}</a>
          </li>
          <li :class="{ active: jsonDivContentNameVariable === 'Offert.container-content.consultationContent' }"
              @click="changeContentInDiv('Offert.container-content.consultationContent')">
            <a>{{ $t('Offert.menuOptions.consultationOption') }}</a>
          </li>
          <li :class="{ active: jsonDivContentNameVariable === 'Offert.container-content.analyticsContent' }"
              @click="changeContentInDiv('Offert.container-content.analyticsContent')">
            <a>{{ $t('Offert.menuOptions.analyticsOption') }}</a>
          </li>
          <li :class="{ active: jsonDivContentNameVariable === 'Offert.container-content.uxDesignContent' }"
              @click="changeContentInDiv('Offert.container-content.uxDesignContent')">
            <a>{{ $t('Offert.menuOptions.uxDesignOption') }}</a>
          </li>
        </ul>
      </div>
      <div class="container-content">
        <!-- <div :class="{ 'fade-in': showText }" v-html="$t(jsonDivContentNameVariable)"></div> -->
        <p  v-html="$t(jsonDivContentNameVariable)"></p>
      </div>
    </div> 
  </main>
</template>

<script>
export default {
  name: 'Offert',
  data() {
    return {
      jsonDivContentNameVariable: 'Offert.container-content.implementationContent',
      showText: false,
    };
  },
  methods: {
    changeContentInDiv(contentName) {
      this.jsonDivContentNameVariable = contentName;
    },
  },
  watch: {
    jsonDivContentNameVariable(newValue, oldValue) {
      this.showText = false; // Ukryj tekst przed zmianą
      setTimeout(() => {
        this.$nextTick(() => {
          this.showText = true; // Wyświetl tekst po zmianie z opóźnieniem
        });
      }, 0);
    },
  },
  mounted() {
    this.$nextTick(() => {
      // Podświetlenie pierwszego elementu po załadowaniu strony
      const firstOption = document.querySelector('.mini_menu li:first-child');
      firstOption.classList.add('active');
    });
  },
};
</script>

<style lang="css" scoped>
.fade-in {
  animation: fade-in 0.5s ease;
}



@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

:deep(.container-content h1){
  padding-bottom: 15px;
  padding-top: 10px;
}

:deep(.container-content h1:first-child){
  padding-bottom: 15px;
  padding-top: 0;
}
.content {
  margin-bottom: 150px;
  height: auto;
}

.container {
  display: flex;
  width: 90%;
  margin: 20px auto;
}

.mini_menu li {
  padding-bottom: 10px;
  text-transform: uppercase;
  list-style-type: none;}


ul {
  position: sticky;
  top: 20px;
}

.h1:first-child {
  padding-top: 0;
  margin-top: 0;
}

 h1{
  padding-top: 15px;
  color:red;
}

.mini_menu li:hover,
.mini_menu li.active {
  cursor: pointer;
  color: #2c15ff;
}

.mini_menu li:focus {
  color: #2c15ff;
}

.select {
  display: none;
}

.menu-mini-container {
  float: left;
  width: 25%;
  padding-right: 10px;
  font-size: 20px;
}

.container-content {
  width: 75%;
  float: left;
  font-size: 18.5px;
  text-align: justify;
}

@media only screen and (max-width: 1120px) {
  .menu-mini-container {
    display: none;
    width: 100%;
  }

  .container-content {
    width: 100%;
    font-size: 17.5px;
  }

  .container {
    flex-direction: column;
  }

  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    appearance: none;
    outline: 0;
    box-shadow: none;
    border: 2px solid black;
    background: #ffffff;
    background-image: none;
    flex: 1;
    padding: 0 0.5em;
    color: #000000;
    cursor: pointer;
    font-size: 1em;
    font-family: 'Open Sans', sans-serif;
  }

  select::-ms-expand {
    display: none;
  }

  .select {
    position: relative;
    display: flex;
    width: 90%;
    height: 3em;
    line-height: 3;
    background: #5c6664;
    overflow: hidden;
    border-radius: 0.25em;
    margin: 0 auto;
    margin-bottom: 30px;
    color: white;
  }

  .select::after {
    content: '\25BC';
    position: absolute;
    top: 0;
    right: 0;
    padding: 0 1em;
    background: #132e6c;
    cursor: pointer;
    pointer-events: none;
    transition: 0.25s all ease;
  }

  .select:hover::after {
    color: #06cc00;
  }
}
</style>

