import React, { Component } from "react";
import "./myStyles.css";

class IndexSheet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      score: 20,
      highscore: 0,
      message: "Start Guessing....",
      value: "",
      secretNumber: Math.trunc(Math.random() * 20) + 1,
      number: "?",
      bgColor: "",
      wdth: "",
    };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  handleCheck = () => {
    if (!Number(this.state.value)) {
      this.setState({
        message: "⛔ No Number Entered!",
      });
    } else if (Number(this.state.value) === this.state.secretNumber) {
      this.setState({
        message: "🎉 Correct Number",
        number: this.state.secretNumber,
        bgColor: "#60b347",
        wdth: "30rem",
      });

      if (this.state.score > this.state.highscore) {
        this.setState({
          highscore: this.state.score,
        });
      }
    } else if (Number(this.state.value) !== this.state.secretNumber) {
      if (this.state.score > 1) {
        this.setState({
          message:
            Number(this.state.value) > this.state.secretNumber
              ? "Number is too High"
              : "Number is too Low",
          score: this.state.score - 1,
        });
      } else {
        this.setState({
          message: "You Lost the Game",
          score: 0,
        });
      }
    }
  };

  handleAgain = () => {
    this.setState({
      highscore: this.state.score,
      secretNumber: Math.trunc(Math.random() * 20) + 1,
      message: "Start Guessing....",
      value: "",
      score: 20,
      number: "?",
      bgColor: "",
      wdth: "",
    });
  };

  render() {
    return (
      // <div style={{ backgroundColor: this.state.bgColor }}>
      <>
        <div
          style={{
            backgroundColor: this.state.bgColor,
          }}
        >
          <div className="header">
            <button className="btn again" onClick={this.handleAgain}>
              Again!
            </button>
            <p className="between">(Between 1 and 20)</p>
          </div>

          <div>
            <h1>Guess My Number!</h1>
            <div
              className="number"
              style={{
                width: this.state.wdth,
              }}
            >
              {this.state.number}
            </div>
          </div>

          <main>
            <section className="left">
              <input
                type="number"
                className="guess"
                value={this.state.value}
                onChange={this.handleChange}
              />
              <button className="btn check" onClick={this.handleCheck}>
                Check!
              </button>
            </section>
            <section className="right">
              <p className="message">{this.state.message}</p>
              <p className="label-score">
                💯 Score: <span className="score"> {this.state.score} </span>
              </p>
              <p className="label-highscore">
                🥇 Highscore:{" "}
                <span className="highscore"> {this.state.highscore} </span>
              </p>
            </section>
          </main>
        </div>
      </>
    );
  }
}

export default IndexSheet;
