<template>
  <div class="thanks-page">
    <div class="container">
      <h2 class="thanks-page__title">Спасибо!</h2>
      <p class="thanks-page__descr">
        Ваша заявка принята! В ближайшее время с Вами свяжется наш специалист!
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container{
  padding: 275px 30px;
}

.thanks-page__title{
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 42px;
  text-align: center;
  margin-bottom: 12px;
}
.thanks-page__descr{
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  color: #5D5B5B;
}
</style>