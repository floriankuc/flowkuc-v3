<script lang="ts">
import ListItem from "./ListItem.svelte";


  interface ListProps<T> {
    id: string;
    name: string;
  }

  interface ProjectType {
  id: string;
  name: string;
  description: string;
  topics?: string[];
  html_url?: string;
  homepage?: string;
}

 export let items: ListProps<ProjectType>[];
</script>

<ul>
  {#each items as item(item.id)}
  <ListItem name={item.name}/>
{/each}
</ul>