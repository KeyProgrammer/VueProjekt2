<template>
  <main class="content">
    <div class="container-top">
      <div class="left">
        <div class="center" v-html="$t('About.usDescription')">
        </div>
      </div>
      <div class="right">
        <img src="../images/grafika_do-_infografiki.png" alt="left_image">
      </div>
      <div class="div3" v-html="$t('About.metodologyDescription')">
      </div>
    </div>
    <div class="container-bottom">
      <div class="text" v-html="$t('About.howWeWorkDescription')">
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'Offert',
};
</script>

<style lang="css" scoped>
.content {
  position: relative;
  margin-bottom: 150px;
}


.container-top {
  display: flex;
  flex-wrap: wrap;
  margin: 30px 0;
  background-color: #f5f5f5;
  padding-left: 10%;
  padding-right: 10%;
  padding-top: 30px;
  position: relative;
  justify-content: center;
  box-shadow: 1px 8px 27px -11px rgba(32, 32, 37, 1);


}

.container-bottom {
  display: flex;
  flex-wrap: wrap;
  margin: 20px 0;
}

:deep(.container-bottom ul li) {
  list-style-type: none;
  text-align: left;

}


:deep(.container-bottom ul li:before) {
  color: rgb(0, 0, 97);
  content: "\25AA";
  font-size: 1.7em;
  padding-right: 0.25em;
  position: relative;
  top: .12em;



}

main {
  width: 100%;
  transform: translate(-50%);
  position: relative;
  left: 50%;
}

:deep(.left) {
  flex-basis: 40%;
  padding-right: 10px;
  font-size: 20px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

:deep(.container-top p,)
:deep(.container-bottom p) {
  font-size: 18.5px;
}

:deep(.container-top h1):deep(.container-bottom h1) {
  font-size: 35px;
  padding-bottom: 10px;
  font-weight: 700;
  padding-top: 10px;

}

:deep(.container-top h2),
:deep(.container-bottom h2) {
  font-size: 25px;
  font-weight: 200;
  padding-bottom: 10px;
  padding-top: 10px;

}

:deep(.container-top h3),
:deep(.container-bottom h3) {
  font-size: 22px;
  font-weight: 200;
  padding-bottom: 10px;
  padding-top: 10px;

}


:deep(.right) {
  flex-basis: 35%;
  font-size: 18.5px;
}

.right img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

:deep(.div3) {
  flex-basis: 100%;
  font-size: 18.5px;
  padding: 30px;
  background-color: #f5f5f5;
  position: relative;
  left: 50%;
  transform: translate(-50%);
}

:deep(.div3 p) {
  text-align: justify;
}

:deep(.text) {
  flex-basis: 100%;
  font-size: 18.5px;
  text-align: justify;
  text-align-last: left;
  padding: 20px 15% 20px 15%;
}

@media only screen and (max-width: 1120px) {

  .container-top img {
    width: 50%;
    min-width: 320px
  }

  .container-top {
    flex-direction: column;
    align-items: center;
  }

  :deep(.left) {
    margin-bottom: 20px;
    text-align: left;
    align-items: center;
  }

  :deep(.right) {
    text-align: center;
  }
}

@media only screen and (max-width:400px) {
  .container-top img {
    width: 50%;
    min-width: 270px
  }
}
</style>