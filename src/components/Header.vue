<template>
  <div>
    <b-navbar class="p-2" toggleable type="dark" variant="dark">
      <b-navbar-brand
          id="navbarBrand"
          @click="firstPage"
          href="#">
        <b-icon
            icon="question-octagon"
            variant="info"
            font-scale="1.5"
        >
        </b-icon>Questions & Answers
      </b-navbar-brand>

      <b-navbar-nav class="ml-auto">
          <div>
            <b-button
                id="buttonFont"
                v-on:click="passEvent();"
                variant="outline-info"
                class="mb-1 d-flex"
            >
              <b-icon
                  icon="wrench"
                  aria-hidden="true">
              </b-icon> create your own questions
            </b-button>
          </div>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {
  props:{
    clickedOnMake: Boolean,
    clickedOnlogo: Boolean,
    clickedOnStart:Boolean,
    clickedOnSubmit:Boolean,

  },
  methods:{
    passEvent(){
      this.clickedOnMake=true;
      this.clickedOnlogo=true;
      this.clickedOnStart=false;
      this.clickedOnSubmit=false;
      this.$emit('updatePage',this.clickedOnMake,this.clickedOnlogo,this.clickedOnStart,this.clickedOnSubmit)

    },
    firstPage(){
      this.clickedOnlogo=false;
      this.clickedOnMake=false;
      this.clickedOnStart=false;
      this.clickedOnSubmit=false;
      this.$emit('updatePage2',this.clickedOnlogo,this.clickedOnMake,this.clickedOnStart,this.clickedOnSubmit)

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#navbarBrand{
  font-size:2vw;
  display: flex;
}
#buttonFont{
  font-size:1.5vw;
}

</style>
