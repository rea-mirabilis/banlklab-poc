import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

const config = {
  preprocess: preprocess(),
  kit: {
    adapter: adapter({
      pages: 'docs',
      assets: 'docs',
      fallback: null
    }),
    prerender: {
      entries: ['*'],
      handleMissingId: 'ignore'
    }
  }
};

export default config;
