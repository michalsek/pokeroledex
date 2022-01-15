module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            navigation: './navigation',
            components: './components',
            containers: './containers',
            constants: './constants',
            screens: './screens',
            context: './context',
            assets: './assets',
            hooks: './hooks',
          },
        },
      ],
    ],
  };
};
