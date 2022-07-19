<script lang="ts">
  export let color = "#FF3E00";
  export let unit = "px";
  export let duration = "2.1s";
  export let size = "60";
  let rgba: string;
  export const range = (size, startAt = 0) =>
    [...Array(size).keys()].map((i) => i + startAt);
</script>

<div class="bar" />

<style>
  .bar {
    position: absolute;
    top: 50%;
    left: 50%;
    height: 20px;
    width: 200px;
    margin-top: -10px; /* half the height */
    margin-left: -100px; /* half the width */
    border-radius: 20px;

    background-image: -moz-linear-gradient(
      -45deg,
      #ff9a1a 25%,
      rgba(255, 154, 26, 0) 25%,
      rgba(255, 154, 26, 0) 50%,
      #ff9a1a 50%,
      #ff9a1a 75%,
      rgba(255, 154, 26, 0) 75%
    );

    background-color: #d3d3d3;
    background-size: 50px 50px;
    border: 1px solid #ff9a1a;
    border-bottom-color: #e68100;
    -webkit-box-shadow: inset 0 10px 0 rgba(255, 255, 255, 0.2);
    box-shadow: inset 0 10px 0 rgba(255, 255, 255, 0.2);
    -webkit-animation: move 2s linear infinite;
    -moz-animation: move 2s linear infinite;
    -ms-animation: move 2s linear infinite;
    animation: move 2s linear infinite;
  }

  /**
 * The ::before element creates the darker box around the loading bar itself.
 */

  .bar::before {
    content: " ";
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    background-color: #000;
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    -webkit-box-shadow: 0 1px 0 rgba(255, 255, 255, 0.03),
      inset 0 1px 0 rgba(0, 0, 0, 0.1);
    box-shadow: 0 1px 0 rgba(255, 255, 255, 0.03),
      inset 0 1px 0 rgba(0, 0, 0, 0.1);
    z-index: -1;
  }

  /**
 * Animate the stripes.
 */

  @-webkit-keyframes move {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 50px 50px;
    }
  }

  @-moz-keyframes move {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 50px 50px;
    }
  }

  @-ms-keyframes move {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 50px 50px;
    }
  }

  @-webkit-keyframes move {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 50px 50px;
    }
  }
</style>
