<script lang="ts">
  import "../styles/global.scss";
  import Menu from "../components/Menu.svelte";
  import Container from "./Container.svelte";
  import Sidebar from "./Sidebar.svelte";
  // import BaseHead from '../components/BaseHead.astro';
  // import Star from '../../public/assets/blog/icons/star.astro';
  import Bmenu from "../components/Bmenu.svelte";
  import { fade } from "svelte/transition";
  import { writable } from "svelte/store";

  export const open = writable(true);

  function toggle() {
    open.update((open) => !open);
  }
</script>

<!-- <BaseHead title={test2} description={"ds"} permalink={"link"} /> -->

<!-- BIND in children! -->
<div class="layout">
  <Bmenu client:load {toggle} {open} />
  <Sidebar client:load {open}>
    <Menu />
  </Sidebar>
  <Container>
    <!--     
    <div class="svgdiv">
      <Star/>
  </div> -->
    <slot />
  </Container>
</div>

<style lang="scss">
  .layout {
    display: flex;
    height: 100vh;
    /* flex-wrap: wrap; */
    align-items: stretch;
    width: 100%;
  }

  // .svgdiv {
  //     position: absolute;
  //     opacity: .5;
  //     background-color: aquamarine;
  //     overflow: hidden;
  //     width: 100%;
  //     height: 100%;
  //     // z-index: 9999;
  // }
</style>
