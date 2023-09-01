// rollup.config.js

export default {
    // ... other Rollup configuration options ...
  
    output: {
      dir: 'dist', // Your output directory (dist in your case)
      // ... other output options ...
    },
    build: {
      chunkSizeWarningLimit: 1000, // Set your desired limit here
    },
  };
  