//This file willlook at our src index.js file and any omports in that file and then bundle all of that code into
//a single bundle file

//code copied from tutorial's github website: https://github.com/iamshaunjp/Getting-Started-with-Firebase-9/blob/lesson-2/webpack.config.js

const path = require('path')

module.exports = {  //module.exports is an object with different properties that represent the configuration of the webpack
  mode: 'development',  //production or development
  entry: './src/index.js',  
  //specify the path to which where we want webpath to initoally look for javascript source file
  
  output: {     //another object
    path: path.resolve(__dirname, 'dist'),  //path name of the the directory where we want webpack's output
    //__dirname goes to the current directory and then the 'dist' goes to the dist folder and puts the output file mentioned below in that folder.
    filename: 'bundle.js'   //filename for output file
  },
  watch: true   

}