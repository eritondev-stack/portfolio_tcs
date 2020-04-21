<template>
  <div class="box">
    <Lottie
      path="./data.json"
      :loop="loop"
      :autoPlay="true"
      :speed="1"
      @AnimControl="setAnimController"
    />
    <button class="btn btn-success" @click="stop()">Stop</button>
    <button class="btn btn-primary ml-3" @click="play()">Play</button>
  </div>
</template>

<script>
import Lottie from "./components/Lottie";
export default {
  components: {
    Lottie
  },
  data() {
    return {
      loop: true,
      anim: null
    };
  },
  methods: {
    setAnimController(anim) {
      /* eslint-disable */

      console.log(anim);
      this.anim = anim;
    },
    stop() {
      this.anim.pause();
    },
    play() {
      this.anim.play();
    }
  }
};
</script>

<style>
.box {
  width: 500px;
  height: 500px;
  background-color: #ff6363;
}
</style>
