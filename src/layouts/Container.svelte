<script lang="ts">
  // import Cursor from "../../public/assets/blog/icons/cursor.astro";
</script>

<div class="container">
  <!-- <div class="svgdiv"> -->
  <div class="content">
    <slot />
  </div>
</div>

<!-- <Cursor /> -->
<style lang="scss">
  @import "../styles/variables.scss";

  .content {
    z-index: 2;
    color: white;
    width: 60%;
    margin-top: 100px;
    /* margin: 300px; */

    @media (max-width: $mq-lg) {
      margin: 0;
      width: 100%;
    }
  }

  .svgdiv {
    // position: absolute;
    // opacity: .5;
    // background-color: aquamarine;
    // overflow: hidden;
    //              background-image: url('../../public/assets/blog/icons/3D (Nautical) Star.svg');
    //              background-repeat: no-repeat;
    //   background-size: cover;
    //   background-position: top -400px right -400px;
    // width: 100%;
    // height: 100px;

    // z-index: 9999;
    &::after {
      position: fixed;
      content: "";
      background-image: url("../../assets/blog/icons/3D (Nautical) Star.svg");
      background-repeat: no-repeat;
      background-size: cover;
      background-position: top -400px right -400px;
    }
  }

  .content {
    position: relative;
    height: fit-content;
    max-height: 90%;
    background-color: black;
    padding: 70px;
    // z-index: 10000;

    @media (max-width: $mq-lg) {
      height: 100%;
    }
  }

  .container {
    display: flex;
    position: relative;
    margin-left: 500px;
    max-height: 100vh;
    justify-content: center;
    /* align-items: center; */
    /* padding: 0 10% 0 20%; */
    /* opacity: 0.6; */
    /* background-color: pink; */
    // position: relative;
    width: 100%;

    @media (max-width: $mq-lg) {
      margin-left: 0;
      padding: 0;

      &::after {
        left: 0;
        clip-path: none;
      }

      &::before {
        left: 0;
        clip-path: none;
      }
    }

    &::after {
      z-index: 100;
      content: "";
      position: fixed;
      left: 400px;
      width: 100%;
      height: 100%;
      background-color: $color-black;
      clip-path: polygon(12% 0, 14% 0, 8% 80%, 2% 100%, 0 100%);

      @media (max-width: $mq-lg) {
        width: 0;
        height: 0;
        left: 0;
        clip-path: none;
      }
    }

    &::before {
      z-index: -102;
      content: "";
      position: fixed;
      left: 400px;
      width: calc(100% + 100px);
      height: 100%;
      background-color: $color-yellow;
      clip-path: polygon(12% 0%, 100% 0, 100% 100%, 0% 100%);
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 8 8'%3E%3Cg fill='black' fill-opacity='0.3'%3E%3Cpath fill-rule='evenodd' d='M0 0h4v4H0V0zm4 4h4v4H4V4z'/%3E%3C/g%3E%3C/svg%3E");

      @media (max-width: $mq-lg) {
        // width: 0;
        // height: 0;
        left: 0;
        background-color: black;
        clip-path: none;
      }
    }
  }
</style>
