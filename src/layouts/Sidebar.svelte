<script lang="ts">
  import { Writable } from "svelte/store";

  import Bmenu from "../components/Bmenu.svelte";
  import Footer from "../components/Footer.svelte";

  import { fade } from "svelte/transition";

  export let open: Writable<boolean>;
  console.log("open in sidebar", $open);
</script>

<div class={`${$open ? "open" : ""} sidebar`} transition:fade>
  <slot />
  <Footer />
</div>

<style lang="scss">
  @import "../styles/variables.scss";

  .open {
    left: -500px;
    position: absolute;
    top: 0;
  }

  .sidebar {
    height: 100vh;
    padding: 0 80px;
    // display: none;
    /* background-color: lightblue; */
    min-width: 500px;
    /* position: absolute;
    top: 0; */
    /* left: -500px; */
    // flex-basis: 20rem;
    //   flex-grow: 1;

    @media (min-width: $mq-lg) {
      position: fixed;
      width: 500px;
      left: 0;
      // width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    @media (min-width: $mq-xxxl) {
      // width: 25%;
    }
  }
</style>
