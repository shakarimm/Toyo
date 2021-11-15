<template>
<div class="first-page">
    <div class="container">
      <div class="top">
        <a class="logo" href="">
          <img class="logo-img" src="@/images/logo.png" alt="" />
        </a>
        <h1 class="title">Склад <br> автозапчастей</h1>
      </div>
        <p class="quote">Все запчасти  в одном месте!</p>
      <nav class="menu">
        <ul class="menu__list">
          <li class="menu__list-item">
            <a class="menu__list-link" href="#">Написать в WhatsApp</a>
            <!-- <router-link tag="menu__list-link" to="/">Написать в WhatsApp</router-link> -->
          </li>
          <li class="menu__list-item">
            <a class="menu__list-link" href="tel:+77055897079">Позвонить</a>
            <!-- <router-link tag="menu__list-link" to="/">Позвонить</router-link> -->
          </li>
          <li class="menu__list-item">
            <!-- <a class="menu__list-link" href="#">Рассчитать рассрочку</a> -->
            <router-link tag="menu__list-link" :to="{ name: 'SecondPage' }">Рассчитать рассрочку</router-link>
          </li>
          <li class="menu__list-item">
            <a class="menu__list-link" href="https://toyo.kz" target="_blank">Перейти на сайт Toyo.kz</a>
            <!-- <router-link tag="menu__list-link" to="/">Перейти на сайт Toyo.kz</router-link> -->
          </li>
        </ul>
      </nav>
    </div>
  </div>  
</template>

<script>
export default {

}
</script>

<style>
@media (min-width: 320px) {
  .container {
    padding: 52px 16px;
  }
  .top{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 21px;
    margin-bottom: 42px;
  }
  .title{
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 23px;
    color: #0D335D;
    margin-left: 10px;
  }
  .logo{
    position: relative;
  }
  .logo::after{
    content: '';
    position: absolute;
    border: 1px solid #0D335D;
    height: 84px;
    top: 8px;
  }
  .quote{
    text-align: center;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    color: #0D335D;
    margin-bottom: 60px;
    font-family: "Montserrat", sans-serif;
  }
  .menu__list-item{
    background: #15B154;
    border-radius: 8px;
    margin-bottom: 18px;
    padding: 16px 77px 16px 26px;
    font-style: normal;
    font-size: 20px;
    line-height: 23px;
    color: #FFFFFF;
    position: relative;
  }
  .menu__list-item:nth-child(2){
    background: #216992;
  }
  .menu__list-item:nth-child(3){
    background: #1541B1;
  }
  .menu__list-item:nth-child(4){
    background: #0D335D;
  }
  .menu__list-item::after{
    content: '';
    position: absolute;
    background-image: url(../images/icons/arrow-right.svg);
    height: 14px;
    width: 8px;
    right: 20px;
    top: 20px;
  }
}
</style>