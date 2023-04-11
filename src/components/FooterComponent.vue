<!-- eslint-disable max-len -->
<template>
  <footer class="footer">
    <div class="footer-top-menu">
      <div class="footer-options">
        <ul>
          <li>
            <p><router-link to="/offert" class="footer-option">Oferta</router-link></p>
          </li>
          <li>
            <p><router-link to="/technology" class="footer-option">Technologie</router-link>
            </p>
          </li>
          <li>
            <p><router-link to="/about" class="footer-option">O Nas</router-link></p>
          </li>
          <li>
            <p><router-link to="/career" class="footer-option">Kariera</router-link></p>
          </li>
          <li>
            <p><router-link to="/contact" class="footer-option">Kontakt</router-link></p>
          </li>
        </ul>
      </div>
      <div class="footer-top">
        <button @click="topFunction"></button>
      </div>

      <div class="footer-bottom">
        <p>Copyright 2023 KeyPrograms One Sp. z o.o. (Ostrowski Patryk)</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  methods: {
    topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
  },
};
</script>

<style lang="css" scoped>
.footer-bottom {
  width: 100%;
  height: 50px;
  padding: 15px;
}

.footer-bottom p {
  font-size: 22px;
  text-align: center;
}

.footer-top-menu {
  padding-top: 10px;
  width: 100%;
  height: 50px;
}

.footer-options {
  width: 90%;
  height: 100%;
  float: left;
}

.footer-top {
  width: 10%;
  height: 100%;
  float: left;
  padding-right: 20px;
}

button {
  float: right;
  background-image: url(../images/arrow.png);
  background-size: cover;
  background-color: black;
  width: 30px;
  height: 30px;
  border: none;
}

.footer ul li {
  display: inline-block;
}

.footer a.footer-option {
  color: white;
  font-size: 22px;
  padding: 15px 15px;
}

.footer a.footer-option:hover {
  color: rgb(92, 92, 230);
  transition: 0.3s;
}

.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 110px;
  background-color: black;
  color: whitesmoke;
}
@media(max-width: 900px) {
  button {
    height: 40px;
    width: 40px;
  }
  .footer-options {
    display: none;
  }

  .footer-bottom {
    float: left;
  }

  .footer-bottom p {
    font-size: 17px;
  }

  .footer-top {
    float: left;
    width: 55%;
  }
}</style>
