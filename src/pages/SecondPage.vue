<template>
  <div class="second-page" @submit.prevent>
    <div class="container">
      <h3 class="secondpage__title">Калькулятор рассрочки</h3>
      
      <form class="form">
        <label class="form__label">Сумма рассрочки</label>
        <div class="input">
          <input
            class="form__input"
            @change="testOne"
            v-model="priceStr"
            v-money="money"
          />
        </div>
        <label class="form__label">Срок</label>
        <div class="select">
          <select 
            class="form__select"
            v-model.number="month"
            @click="calcPayment"
            @change="showComplete"
          >
            <option value="" disabled selected style="display: none">
              Укажите срок
            </option>
            <option value="1">1 мес</option>
            <option value="2">2 мес</option>
            <option value="3">3 мес</option>
            <option value="4">4 мес</option>
            <option value="5">5 мес</option>
            <option value="6">6 мес</option>
            <option value="7">7 мес</option>
            <option value="8">8 мес</option>
            <option value="9">9 мес</option>
            <option value="10">10 мес</option>
            <option value="11">11 мес</option>
            <option value="12">12 мес</option>
          </select>
        </div>
        <label class="form__label">Ежемеcячный платеж</label>
        <div class="input">
          <input class="form__input" 
            type="text"
            v-model="calc"
            v-money="result"
            @change="!showComplete"
          />
        </div>
        <p class="completed" 
          v-if="completed"
          >Заполните данные
        </p>
        <button
          v-if="isComplete"
          class="form__button"
          @click="$router.push('third')"
          >Подать заявку
        </button>
        <button
          v-if="!isComplete"
          class="form__button"
          @click="showComplete"
          >Подать заявку
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import {VMoney} from "v-money";

export default {
  data() {
    return {
      completed:false,
      priceStr:'',
      price: '', 
      month: '',
      calc: '',
      money: {
        decimal: ",",
        thousands: " ",
        prefix: " ",
        suffix: " тг",
        precision: '',
      },
      result: {
        decimal: ",",
        thousands: " ",
        prefix: " ",
        suffix: " тг",
        precision: '',
      },
    }
  },
  methods:{
    showComplete(){
      if(this.price == 0 || this.month ==''){
        this.completed = true
      } 
      else {
        this.completed = false
      }
    },
    testOne () {
      this.price = parseInt(this.priceStr.replace( / /g, ""))
    },
    calcPayment() {
      if(this.price != 0 && this.month !=''){
     this.calc = this.price / this.month
     this.calc = Math.round(this.calc)
      }
    },
  },
  directives: {
    money: VMoney,
  },
  computed: {
    isComplete () {
      return this.price && this.month && this.calc
  }
}
};
</script>

<style scoped>
/* .container{
  padding: 52px 16px;
} */
.secondpage__title {
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  margin-bottom: 12px;
  font-family: "Montserrat", sans-serif;
}

.form {
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  padding: 32px 12px;
}
.form__label {
  display: inline-block;
  margin-bottom: 10px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
}
.form__input,
.form__select {
  border: 1px solid #dedede;
  border-radius: 8px;
  padding: 16px 26px;
  margin-bottom: 8px;
  min-width: 323px;
  background: #ffffff;
}
.form__input,
.form__select {
  font-family: "Roboto";
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: #5d5b5b;
}

.select {
  position: relative;
}
.select::after {
  content: "";
  display: block;
  background-image: url(../images/icons/arrow-down.svg);
  width: 15px;
  height: 8px;
  position: absolute;
  top: 45%;
  right: 10px;
  z-index: 1;
}
.input {
  position: relative;
}
.input::after {
  content: "";
  display: block;
  background-image: url(../images/icons/tenge-2.png);
  width: 11px;
  height: 15px;
  position: absolute;
  top: 45%;
  right: 10px;
  z-index: 1;
}
.form__select,
.form__input {
  -webkit-appearance: none;
  appearance: none;
  display: block;
  width: 100%;
}

.form__button {
  display: block;
  padding: 12px 98px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  color: #ffffff;
  background: #0d335d;
  border: 1px solid #dedede;
  border-radius: 8px;
  min-width: 323px;
  margin-top: 36px;
  margin-bottom: 20px;
}
.completed{
  text-align: center;
  text-transform: uppercase;
  color: red;
}
</style>