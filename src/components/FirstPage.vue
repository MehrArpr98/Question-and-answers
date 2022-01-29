<template>
  <div>
    <br>

    <div class="mt-3">
      <h1 class="mt-3">Test yourself!!!</h1>
    </div>

    <br>

    <div class="row mt-3">
      <div id="left" class="col-1">
        <b-icon icon="question" font-scale="4" rotate="45" variant="warning"></b-icon>
        <b-icon icon="question" font-scale="3.5" animation="fade" rotate="-25"></b-icon>
        <b-icon icon="question" font-scale="2.5"></b-icon>
        <b-icon icon="question" font-scale="3.5" rotate="30" variant="warning"></b-icon>
        <b-icon icon="question" font-scale="3" rotate="-30" animation="fade"></b-icon>
        <b-icon icon="question" font-scale="4" rotate="45" variant="warning"></b-icon>
        <b-icon icon="question" font-scale="3.5" animation="fade" rotate="-25"></b-icon>
      </div>

      <div class="row col-10">
        <h6>Here you can test your information in different areas</h6>
        <b-container class="bv-example-row col-8">
          <b-row>
            <b-col>
              <ul>
                <li>We can choose categories such as art, sports, history, ...</li>
                <li>You can choose the number of questions.</li>
                <li>You can also choose the difficulty of the questions.</li>
              </ul>
              <br>
              <p id="p">Click the button at the top right
                <b-icon
                    icon="arrow-up-right"
                    font-scale="1"
                    animation="cylon-vertical" >
                </b-icon>
                to get started. Good luck!!
              </p>
            </b-col>
          </b-row>
        </b-container>
      </div>

      <div id="right" class="col-1">
        <b-icon icon="question" font-scale="3" rotate="-45"></b-icon>
        <b-icon icon="question" font-scale="3.5" animation="fade" variant="warning" rotate="25"></b-icon>
        <b-icon icon="question" font-scale="2.5"></b-icon>
        <b-icon icon="question" font-scale="3.5" rotate="-25"></b-icon>
        <b-icon icon="question" font-scale="4" rotate="45" animation="fade" variant="warning"></b-icon>
        <b-icon icon="question" font-scale="3" rotate="-45"></b-icon>
        <b-icon icon="question" font-scale="3.5" animation="fade" variant="warning" rotate="25"></b-icon>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h1{
  animation: shake 1s;
  animation-iteration-count: infinite;
  font-size:5vw;
  text-align: center;
  color: rgb(255,193,7);
}
h1:hover {
  color: rgba(208,156,0,0.5);
  cursor: pointer;
}
li,#p{
  font-size:2vw;
}
h6{
  text-align: center;
  font-size:3vw;
}
#left{
  text-align: center;
  font-size:1.5vw;
}
#right{
  font-size:1.5vw;
}

@keyframes shake {
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
}
</style>
