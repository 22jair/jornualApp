NODE
14.15.0

there is a error with the MINI CSS EXTRAC PLUGIN (fixed with this library)
npm i -D --save-exact mini-css-extract-plugin@2.4.5

<!-- Got a error, when i was trying to build this app -->
## Problem with MiniCssExtractPlugin
got to: node_modules\react-scripts\config\webpack.config.js

* change this line of code 
  const MiniCssExtractPlugin = require('mini-css-extract-plugin').default;
* solution, remove ".default": 
  const MiniCssExtractPlugin = require('mini-css-extract-plugin');

## Deploy github pages
https://www.udemy.com/course/react-cero-experto/learn/lecture/19761990#content