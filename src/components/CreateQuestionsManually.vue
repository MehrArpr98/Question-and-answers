<template>
  <div>
    <br><br><br>

    <div id="showChoices" v-if="showChoices">
      <br><br>
      <div>
        <label class="size">Select Category : &nbsp;&nbsp;&nbsp; </label>
        <b-form-select
            id="ratio"
            v-model="defultCategory"
            :options="categories"
            class="size borderRadius"
        >
        </b-form-select>
      </div>

      <br>

      <div>
        <label class="size" for="number">Number of Questions : &nbsp;&nbsp;&nbsp; </label>
        <input
            v-model="choicedNum"
            lable="Number of Questions"
            id="number"
            type="number"
            min="5"
            max="20"
            class="size borderRadius"
        >
      </div>

      <br>

      <div>
        <label class="size">Select Difficulty : &nbsp;&nbsp;&nbsp; </label>
        <b-form-select
            id="ratio"
            v-model="defultDifficulty"
            :options="difficulties"
            class="size borderRadius"
        >
        </b-form-select>
      </div>

      <br><br>

      <b-button
          @click="
          makeLink();
          getInformationOpentdb();
          forLoad();
          passEventToLoading();
          showDismissibleAlertToggel();
          makeAlertText();
          toggleShowChoices();"
          class="var size2"
          variant="warning"
      >create
      </b-button>

      <br><br>
    </div>

    <Loading
        v-if="!showChoices"
        :clickedForLoad="clickedForLoad"
        v-show="clickedForLoad"
        :dismissCountDown="dismissCountDown"
        :dismissSecs="dismissSecs"
        :countDownChanged="countDownChanged"
        :showDismissibleAlert="showDismissibleAlert"
        :passEventToLoading="passEventToLoading"
        :showDismissibleAlertToggel="showDismissibleAlertToggel"
        :makeAlertText="makeAlertText"
        :alertText="alertText"
        :toggleShowChoices="toggleShowChoices"
        :showChoices="showChoices"
        :passEvent="passEvent"
    />
  </div>
</template>

<script>
import Loading from './Loading.vue'

export default {
  props:{
    clickedOnMake:Boolean,
  },
  components:{
    Loading,
  },
  data(){
    return{
      defultCategory: '0',
      defultDifficulty:'0',
      choicedNum:5,
      link:'',
      clickedForLoad:false,
      clickedOnStart:false,
      dismissSecs: 5,
      dismissCountDown: 0,
      showDismissibleAlert:false,
      showChoices:true,
      alertText:"",
      categories: [
        { text: 'Any Category', value: '0' },
        { text: 'Art', value: '25' },
        { text: 'Book', value: '10' },
        { text: 'Celebrities', value: '26' },
        { text: 'Film', value: '11' },
        { text: 'History', value: '23' },
        { text: 'Music', value: '12' },
        { text: 'Sports', value: '21' },
        { text: 'Video Games', value: '15' },
      ],
      difficulties: [
        { text: 'Any Difficulty', value: '0' },
        { text: 'Easy', value: 'easy' },
        { text: 'Medium', value: 'medium' },
        { text: 'Hard', value: 'hard' }
      ],

    }
  },
  methods:{
    choiceCategory:function(){
      let a;
      for (a=0; a< this.categories.length; a++){
        if(this.categories[a].value==this.defultCategory){
          return this.categories[a];
        }
      }
    },
    choiceDifficulty:function(){
      let a;
      for (a=0; a< this.difficulties.length; a++){
        if(this.difficulties[a].value==this.defultDifficulty){
          return this.difficulties[a];
        }
      }
    },
    makeLink:function(){
      let link="https://opentdb.com/api.php?amount="+ parseInt(this.choicedNum);
      if(this.choiceCategory().value!='0'){
        link=link+"&category="+this.choiceCategory().value;
      }
      if(this.choiceDifficulty().value!='0'){
        link=link+"&difficulty="+this.choiceDifficulty().value;
      }
      this.link = link+"&type=multiple"
    },
    getInformationOpentdb: function(){
      fetch(this.link, {method:'get'
      }).then((response)=>{return response.json()
      }).then((result)=>{this.questionslist=result.results;
      });
    },

    passEvent(){
      this.clickedOnStart=true;
      this.clickedOnMake=!this.clickedOnStart;
      this.clickedOnMake=false;
      this.$emit('updatePage',this.questionslist,this.clickedOnStart,this.choicedNum)
    },
    forLoad(){
      this.clickedForLoad=true;
      this.dismissCountDown = this.dismissSecs
    },
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
      this.passEventToLoading();
    },
    passEventToLoading(){
      if(this.dismissCountDown=='0'){
        this.showDismissibleAlert=true;
      }
    },
    showDismissibleAlertToggel(){
      this.showDismissibleAlert=false;
    },
    makeAlertText(){
      let text="You asked "+this.choicedNum+" "+this.choiceDifficulty().text+ " questions about "+this.choiceCategory().text+" ."+" Are you ready? ";
      this.alertText=text;
    },
    toggleShowChoices(){
      this.showChoices=!this.showChoices;
    },

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#showChoices{
  border: black;
  border: 2px solid;
  border-radius: .5rem;
  outline: 2px solid rgb(255,193,7);
  background-color: rgb(223,255,255);
}

.size{
  font-size:1.7vw;
}

.size2{
  font-size:2vw;
}

.borderRadius{
  border-radius: .2rem;
}

</style>
