
Webpack dev server

Copy previous directory

create directory called public
place index.html into it
change path of output in webpack config to ./public/

check that it still bundles and works ok
install webpack-dev-server globally
add --content-base ./public/ to 'dev' script

check localhost:8080
make a change, refresh

install dev dependency react-hotloader
add --hot --inline to dev script

adding css
<link rel="stylesheet" type="text/css" href="style.css">
add css file in public


Using path module:
path: path.resolve(__dirname, 'public')
