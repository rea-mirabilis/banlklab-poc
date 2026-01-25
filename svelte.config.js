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
    paths: {
      base: '/banlklab-poc'
    },
    prerender: {
      entries: ['*'],
      handleMissingId: 'ignore'
    }
  }
};

export default config;
