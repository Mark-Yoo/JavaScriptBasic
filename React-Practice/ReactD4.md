# React Day 04
- webpack.config.js
```
const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'eval', // hidden-source-map

  entry: {
    app: './client',
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env, '@babel/preset-react'],
        plugins: [],
      }
    }],
  },
  output: {
    filename: app.js,
    path: path.join(__dirname, 'dist'),
  },
};
```
- 각 프로젝트의 설정값은 재활용이 가능하므로 한 번 설정하는 방법을 배워두면 이후에는 create-app-react를 사용할 필요가 없어질 수 있다.

- plugin들의 모음이 preset이다.

- babel을 이용한다고 하더라고 구버전 브라우저로 갈수록 속도가 느려지고 컨버팅이 어려워진다.
  - babel에는 이를 이용하기 위한 버전 선택과 각 나라별 브라우저별 사용자를 구별하여 설정할 수 있게 되어있다. (꿀팁)

- state의 분류를 항상 유의할 것

- value와 onchange는 세트, onchange가 아니라면 defaultvalue