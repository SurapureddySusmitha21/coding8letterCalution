// Write your code here.
import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {searchInput: ''}

  onClick = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const lengthOf = searchInput.length

    return (
      <div className="bg-container">
        <div className="container">
          <div className="calculate-container">
            <h1 className="heading">Calculate the letters you enter</h1>
            <label className="paragraph" htmlFor="inputValue">
              Enter the phrase
            </label>
            <br />
            <input
              type="text"
              id="inputValue"
              className="letter-input"
              value={searchInput}
              onChange={this.onClick}
              placeholder="Enter The Phrase"
            />
            <br />
            <p type="button" className="button">
              No.of letters: {lengthOf}
            </p>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            className="image-url"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}
export default LettersCalculator
