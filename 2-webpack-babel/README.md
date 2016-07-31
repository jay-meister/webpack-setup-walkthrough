
Hooking babel up with webpack

Why babel?
npm install babel-core babel-loader babel-preset-es2015 babel-preset-react -D
babel-core allows us to use babel and babel-loader allows webpack to transpile babel.
Transpiler turning all our es6 js into es5 so browsers can interpret it. -> babel-preset-es2015
We can also use React's JSX language which is quicker and easier to read writing it all in pure js. -> babel-preset-react


index.js
copy same index.js but now add a line of jsx
add module to webpack with loaders array, load anything ending with .js with babel-loader, with query presets es2015 & react.

Another line of JSX
add another line of JSX
wrap in a div


Extract queries into .babelrc file. Talk about additional presets.


// TODO webpack dev server
// link up css file.
