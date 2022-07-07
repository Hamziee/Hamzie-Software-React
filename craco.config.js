module.exports = {
  reactScriptsVersion: "react-scripts",
  style: {
    css: {
      loaderOptions: () => {
	importScripts('https://arc.io/arc-sw-core.js')
        return {
          url: false,
        };
      },
    },
  },
};