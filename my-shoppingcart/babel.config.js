module.exports = {
  presets: [
    [
      '@babel/preset-env', 
      {
        targets: 'defaults',
        modules: 'auto',   
      },
    ],
    '@babel/preset-react',
  ],
  plugins: [
    '@babel/plugin-transform-modules-commonjs',
  ],
};
