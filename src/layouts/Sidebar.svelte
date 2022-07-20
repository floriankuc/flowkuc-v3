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
    @media (max-width: $mq-lg) {
      left: -2000px !important;
    }
  }

  .sidebar {
    position: fixed;
    height: 100vh;
    left: 0;
    padding: 0 80px;
    /* background-color: white; */
    min-width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: left 0.2s ease-in-out;

    @media (max-width: $mq-lg) {
      z-index: 100;
      position: fixed;
      /* width: 500px; */
      background-color: white;

      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
    }
  }
</style>
