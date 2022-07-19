<script lang="ts">
  import { pagelinks } from "../../public/config/links";
  import Link from "./Link.svelte";
</script>

<aside>
  <ul>
    {#each pagelinks as link}
      <li id={link.id} class="pagelinks-list">
        <Link url={link.url} target={link.target} title={link.title} />
      </li>
    {/each}
  </ul>
</aside>

<style lang="scss">
  @import "../styles/global.scss";
  .pagelinks-list {
    margin: 100px 0;
  }
</style>
