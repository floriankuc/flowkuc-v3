import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import { config } from 'dotenv';
// https://astro.build/config
import replace  from '@rollup/plugin-replace'

const configToReplace = {};
for (const [key, v] of Object.entries(config().parsed)) {
  configToReplace[`process.env.${key}`] = `'${v}'`;
}

export default defineConfig({
	integrations: [svelte()],
	vite: {
    // Example: Add custom vite plugins directly to your Astro project
    plugins: [
			replace({
				include: ["src/**/*.ts", "src/**/*.svelte"],
				preventAssignment: true,
				values: configToReplace,
			}),
		],
  }
});
