<template>
  <div>

    <Header
        :clickedOnMake="clickedOnMake"
        :clickedOnlog="clickedOnlogo"
        @updatePage="updateFromHeader"
        @updatePage2="firstPageOrNot"
    />

    <FirstPage
        v-if="(!this.clickedOnlogo | (!this.clickedOnMake & !this.clickedOnStart))"
    />

    <br><br>

    <b-container
        id="createQuestionsManuallyClickedOnMakeContainer"
        v-if="clickedOnMake"
        class="bv-example-row col-8 border-1">
      <b-row>
        <b-col>
          <CreateQuestionsManually
              @updatePage="updateFromCreateQuestionsManually"
              :clickedOnMake="clickedOnMake"
          />
        </b-col>
      </b-row>
    </b-container>

    <b-container v-if="this.clickedOnStart"
                 class="bv-example-row col-8">
      <b-row>
        <b-col>
          <Content
              :currentQuestion="questionslist[index]"
              :index="index"
              :next="next"
              :choicedNum="choicedNum"
              :changeWithSubmit="changeWithSubmit"
              :clickedOnSubmit="clickedOnSubmit"
          />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Content from './components/Content.vue'
import CreateQuestionsManually from './components/CreateQuestionsManually.vue'
import FirstPage from "./components/FirstPage";


export default {
  name: 'App',
  components: {
    FirstPage,
    Content,
    Header,
    CreateQuestionsManually
  },
  data(){
    return{
      questionslist:[],
      index : 0,
      choicedNum:0,
      clickedOnMake:false,
      clickedOnStart:false,
      clickedOnlogo:false,
      clickedOnSubmit:false
    }
  },
  methods:{
    next:function(){
      if(this.index<(this.choicedNum-1)){
        this.index++;
      }
    },
    updateFromCreateQuestionsManually(list,bool1,num) {
      this.questionslist=list;
      this.clickedOnStart=bool1;
      this.clickedOnMake=false;
      this.choicedNum=num;

    },
    updateFromHeader(bool1,bool2,bool3,bool4) {
      this.clickedOnMake=bool1;
      this.clickedOnlogo=bool2;
      this.clickedOnStart= bool3;
      this.clickedOnSubmit= bool4;
      this.index=0;
    },
    firstPageOrNot(bool1,bool2,bool3,bool4) {
      this.clickedOnlogo=bool1;
      this.clickedOnMake=bool2;
      this.clickedOnStart= bool3;
      this.clickedOnSubmit= bool4;
      this.index=0;
    },
    changeWithSubmit(){
      this.clickedOnSubmit=true;
      this.index=0;
    },
  },


}
</script>

<style>
body{
  background-color: rgb(105,188,206);
}
#createQuestionsManuallyClickedOnMakeContainer{
  text-align: center;
}
</style>
