import React from 'react'
import ReactDOM from 'react-dom'

class Mother extends React.Component {
  render() {
    return (
      <div>
        <h1>JSX component</h1>
        <p>this prints a paragraph</p>
      </div>
    )
  }
}

ReactDOM.render(<Mother />, document.getElementById('container'))
