import { defineNuxtModule, addPlugin, createResolver } from '@nuxt/kit'

export default defineNuxtModule({
	meta: {
		compatibility: {
			nuxt: '^3.0.0'
		}
	},
	setup(options, nuxt) {
		const { resolve } = createResolver(import.meta.url)

		addPlugin(resolve(nuxt.options.rootDir, 'node_modules/nuxt3/plugins/progress.client.mjs'))
	}
})
