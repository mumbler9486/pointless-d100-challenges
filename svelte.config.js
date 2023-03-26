import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';
const prod = process.env.NODE_ENV === 'production';

console.log('Environment:', process.env.NODE_ENV);
/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess({
		postcss: true
	}),

	kit: {
		paths: {
			base: ''
		},
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: 'index.html'
		}),
		alias: {
			src: 'src/*',
			lib: 'src/lib'
		}
	}
};

export default config;
