<script lang="ts">
  export let title: string;
  export let target: string;
  export let url: string;
</script>

<a href={url} {target}>
  {title}
</a>

<style lang="scss">
  @import "../styles/global.scss";
  a {
    font-family: Earwig;
    font-size: 100px;
    text-decoration: none;
    color: black;
    line-height: 1;
    letter-spacing: -8px;
    position: relative;
    z-index: 1;
    display: inline-block;

    &:hover {
      color: $color-red;
      transition: 0.05s ease-in-out;

      &::before {
        /* background-color: lime; */
        transition: 0.05s ease-in-out;
      }
    }

    &::before {
      z-index: -2;
      position: absolute;
      content: "";
      top: 0;
      left: -50px;
      width: calc(130% + 100px);
      height: calc(100% + 40px);
      background-color: black;
      clip-path: polygon(5% 0, 80% 5%, 77% 80%, 10% 85%);
    }

    &::after {
      z-index: -1;
      position: absolute;
      content: "";
      top: 0;
      left: -50px;
      width: calc(130% + 90px);
      height: calc(100% + 16px);
      background-color: white;
      clip-path: polygon(8% 5%, 80% 15%, 77% 85%, 12% 95%);
    }
  }
</style>
