const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  stories: [
    '../src/components/**/*.stories.mdx',
    '../src/components/**/*.stories.@(js|jsx|ts|tsx)',
  ],

  addons: ['@storybook/addon-essentials', '@storybook/addon-links'],
  babel: async (options) => ({
    ...options,
    plugins: [...options.plugins, require.resolve('@babel/plugin-transform-react-jsx')],
  }),
  webpackFinal: async (config) => {
    config.resolve.modules = [...(config.resolve.modules || []), path.resolve(__dirname, '../src')];

    config.resolve.plugins = [...(config.resolve.plugins || []), new TsconfigPathsPlugin()];

    return config;
  },
};
