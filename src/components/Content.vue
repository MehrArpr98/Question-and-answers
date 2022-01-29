<template>
  <div>
    <b-jumbotron id="jumbotron" v-if="!clickedOnSubmit">
      <h2 class="font3">Question : {{this.index+1}} /{{this.choicedNum}}</h2>
      <p class="font1-7 marginLeft5">{{ currentQuestion.question}}</p>
      <hr class="my-4">

      <br>

      <h3 class="font3">Answers:</h3>
      <b-form-group class="font1-7">
        <b-form-radio-group class="font1-7 marginLeft5">
          <b-form-radio v-model="selected" value="0">{{ answerslist[0] }}</b-form-radio>
          <b-form-radio v-model="selected" value="1">{{ answerslist[1] }}</b-form-radio>
          <b-form-radio v-model="selected" value="2">{{ answerslist[2] }}</b-form-radio>
          <b-form-radio v-model="selected" value="3">{{ answerslist[3] }}</b-form-radio>
        </b-form-radio-group>
      </b-form-group>

      <br>

      <b-button
          class="font1-7 marginLeft5"
          id="nextButton"
          v-on:click="next(); correctOrNot();"
          :disabled="this.index>(this.choicedNum -1)"
          href="#">
          next
      </b-button>
      <b-button
          class="font1-7 right"
          id="submitButton"
          v-on:click="showResult();changeWithSubmit();"
          href="#">
          Submit
      </b-button>


    </b-jumbotron>

    <b-alert
        v-if="clickedOnSubmit"
        :show="true"
        id="alertText">

      <div class="d-flex">
        <h3 class="font2-5 endText">{{this.endText}} !!!</h3>
        <div class="font2-5 right">
          <b-icon
              v-if="endText=='High'"
              icon="emoji-sunglasses"
              variant="warning"
              font-scale="2.5"
              animation="cylon"
          ></b-icon>
          <b-icon
              v-if="endText=='Average'"
              icon="emoji-heart-eyes"
              variant="warning"
              font-scale="2.5"
              animation="cylon"
          ></b-icon>
          <b-icon
              v-if="endText=='Low'"
              icon="emoji-smile"
              variant="warning"
              font-scale="2.5"
              animation="cylon"
          ></b-icon>
          <b-icon
              v-if="endText=='Very low'"
              icon="emoji-frown"
              variant="warning"
              font-scale="2.5"
              animation="cylon"
          ></b-icon>
        </div>


      </div>

      <p class="font2">you answered {{this.counter}} questions from {{this.choicedNum}} question correctly.</p>

    </b-alert>
  </div>
</template>

<script>
export default {
  props: {
    currentQuestion: Object,
    index: Number,
    next: Function,
    choicedNum: Number,
    changeWithSubmit:Function,
    clickedOnSubmit:Boolean,

  },
  data() {
    return {
      answerslist: [],
      correctAnswer:'',
      selected:'',
      counter:0,
      icon:'',
      endText:'',

    }
  },

  methods: {
    makeAnswerslist: function () {
      var answerslist = [];
      for (let i = 0; i < 3; i++) {
        answerslist.push(this.currentQuestion.incorrect_answers[i]);
      }
      this.correctAnswer=this.currentQuestion.correct_answer;
      answerslist.push(this.currentQuestion.correct_answer);
      this.answerslist = answerslist.sort();
    },

    correctOrNot(){
      if(this.correctAnswer==(this.answerslist[this.selected])){
        this.counter++;
      }
      this.selected='';
    },
    showResult(){

      if(this.counter>=(this.choicedNum * 0.8)){
        this.endText="High";
        this.icon="emoji-sunglasses"
      }
      else if(this.counter<(this.choicedNum * 0.8) & this.counter>=(this.choicedNum * 0.6)){
        this.endText="Average";
        this.icon="emoji-heart-eyes"

      }
      else if(this.counter<(this.choicedNum * 0.6) & this.counter>=(this.choicedNum * 0.4)){
        this.endText="Low";
        this.icon="emoji-smile";
      }
      else{
        this.endText="Very low";
        this.icon="emoji-frown";
      }

    },

  },
  mounted() {
    this.makeAnswerslist();
  },
  watch: {
    currentQuestion: function() {
      this.makeAnswerslist();
    },

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#nextButton{
  background-color: rgb(105,188,206);
}
#submitButton{
  background-color: rgb(255,193,7);
}
#jumbotron{
  background-color: rgb(223,255,255);
  border: 1px solid;
  border-radius: .5rem;
  padding: 7px;
}
#alertText{
  background-color: rgb(223,255,255);
  align-items: center;
}
.font3{
  font-size:3vw;
}
.font1-7{
  font-size:1.7vw;
}
.font2-5{
  font-size:2.5vw;
}
.font2{
  font-size:2vw;
}
.right{
  float: right;
}
.endText{
  float: left;
  padding: 3%;
}
.marginLeft5{
  margin-left: 5%;
}

</style>

