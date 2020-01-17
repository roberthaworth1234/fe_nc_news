import React, { Component } from "react";
import * as api from "./api";
import ErrorDisplay from "./ErrorDisplay";

export default class Voting extends Component {
  state = {
    votes: null,
    voteChange: 0,
    err: {}
  };
  componentDidMount() {
    const { votes } = this.props;
    this.setState({ votes: votes });
  }
  render() {
    const { id } = this.props;
    const { votes, voteChange, err } = this.state;
    if (err.status) return <ErrorDisplay err={err} />;
    return (
      <div>
        Votes {votes}
        <button
          disabled={voteChange === 1 ? true : null}
          className="specialButtonUp"
          onClick={() => {
            this.handleVotes(id, 1);
          }}
        >
          <span role="img" aria-label="up vote">
            ⬆️
          </span>
        </button>
        <button
          disabled={voteChange === -1 ? true : null}
          className="specialButtonDown"
          onClick={() => {
            this.handleVotes(id, -1);
          }}
        >
          <span role="img" aria-label="down vote">
            ⬇️
          </span>
        </button>
      </div>
    );
  }
  handleVotes(id, direction) {
    const { votes, topic } = this.props;
    this.setState(currentState => {
      return {
        votes: currentState.votes + direction || votes + direction,
        voteChange: currentState.voteChange + direction
      };
    });
    api
      .changeVotes(id, direction, topic)
      .then(res => {})
      .catch(({ response }) => {
        if (response)
          this.setState({
            err: {
              status: response.status,
              msg: response.data.msg
            }
          });
      });
  }
}
