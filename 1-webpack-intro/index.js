var React = require('react')
var ReactDOM = require('react-dom')

var Mother = React.createClass(
  { render: function() {
      return React.createElement("h1", null, "Hello brother component");
    }
  }
);

var motherElement = React.createElement(Mother)

ReactDOM.render(motherElement, document.getElementById('container'))
