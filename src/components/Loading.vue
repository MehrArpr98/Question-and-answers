<template>
  <div>
<br>
    <b-alert
        :show="dismissCountDown"
        variant="white"
        @dismiss-count-down="this.countDownChanged"
    ><h2>Please Wait...</h2>
      <br>
      <b-progress
          variant="warning"
          :max="dismissSecs"
          :value="dismissCountDown"
          height="6px"
      ></b-progress>
    </b-alert>

    <b-alert id="alertText" class="d-flex" v-model="showDismissibleAlert">
      <p class="font">{{this.alertText}}

      </p>
      <b-button
          @click="showDismissibleAlertToggel(); passEvent();"
          variant="success"
          class="m-1 font"
      >Yes,Let's Start
      </b-button>
      <b-button
          @click="
          showDismissibleAlertToggel();
          toggleShowChoices();"
          variant="danger"
          class="m-1 font"
      >No,want to change
      </b-button>
    </b-alert>


  </div>
</template>

<script>
export default {
  props:{
    clickedForLoad:Boolean,
    dismissSecs: Number,
    dismissCountDown: Number,
    countDownChanged:Function,
    showDismissibleAlert:Boolean,
    passEventToLoading:Function,
    showDismissibleAlertToggel:Function,
    alertText:String,
    makeAlertText:Function,
    toggleShowChoices:Function,
    showChoices:Boolean,
    passEvent:Function
  },

}
</script>

<style scoped>
#alertText{
  background-color: rgb(223,255,255);
  align-items: center;
}
.font{
  font-size:1.5vw;
}
h2{
  font-size:3vw;
}
</style>