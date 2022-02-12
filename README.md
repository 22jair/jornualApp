## DEPLOYED IN NETLYFY
  * https://22jairllljournalapp.netlify.app/

## TECHNOLOGIES
  ### REACT JS 
    * MAIN LIBRARY
  ### REDUX AND REDUX-THUNK
    * Global state
  ### FIREBASE v.8.10.0
    * Auth with Mail and Google Auth
    * Database NoSql
  ### STYLES
    * SASS for design
    * "Sweetalert2", "Animate.css" and "font-awesome" for a better experiance
  ### CLOUDINARY 
    * Storage pictures


* Problem with MiniCssExtractPlugin
  got to: node_modules\react-scripts\config\webpack.config.js
  * change this line of code 
    const MiniCssExtractPlugin = require('mini-css-extract-plugin').default;
  * solution, remove ".default": 
    const MiniCssExtractPlugin = require('mini-css-extract-plugin');

