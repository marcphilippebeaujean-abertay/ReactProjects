import React, { Component } from "react";
// test
const quotes = [
  "Get busy living or get busy dying. - Stephen King",
  "The first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself. - Mark Caine",
  "Those who dare to fail miserably can achieve greatly. - John F. Kennedy",
  "It's over, I have the high ground! - Obi Wan Kenobi",
  "Am I the only one who cares about the rules?! - Donny"
];

class QuoteRendererComponent extends Component {
  constructor() {
    super();

    this.state = {
      quote: "Generate a new big rig quote!",
      imageUrl: "https://picsum.photos/200"
    };

    this.generateNewQuote = this.generateNewQuote.bind(this);
  }

  generateNewQuote() {
    this.setState({
      quote: quotes[Math.floor(Math.random() * quotes.length)]
    });
  }

  render() {
    return (
      <div id="main-body">
        <div id="main-header">
          <h1>Random Quote Generator</h1>
        </div>
        <div id="quote-render-block">
          <h2 id="quote-display" className="m-2">
            {this.state.quote}
          </h2>
          <button
            id="randomiser-btn"
            onClick={this.generateNewQuote}
            className="btn btn-secondary btn-sm"
          >
            Generate Quote
          </button>
        </div>
      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <QuoteRendererComponent />;
  }
}

export default App;
