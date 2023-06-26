import React from 'react';
import Statistics from 'components/statistics/statistics';

class FeedbackOptions extends React.Component {
    static defaultProps = {
        initialGoodValue: 0,
        initialNeutralValue: 0,
        initialBadValue: 0,
    }
    static propTypes = {

    }

  state = {
    goodValue: this.props.initialGoodValue,
    neutralValue: this.props.initialNeutralValue,
    badValue: this.props.initialBadValue,
  };

  onLeaveGoodFeedback = () => {
    this.setState(prevState => {
      return {
        goodValue: prevState.goodValue + 1,
      };
    });
  };

  onLeaveNeuturalFeedback = () => {
    this.setState(prevState => {
      return {
        neutralValue: prevState.neutralValue + 1,
      };
    });
  };

  onLeaveBadFeedback = () => {
    this.setState(prevState => {
      return {
        badValue: prevState.badValue + 1,
      };
    });
  };


  render() {
    return (
      <div>
        <ul>
          <li>
            <button type="button" onClick={this.onLeaveGoodFeedback}>
              Good
            </button>
          </li>
          <li>
            <button type="button" onClick={this.onLeaveNeuturalFeedback}>
              Neutural
            </button>
          </li>
          <li>
            <button type="button" onClick={this.onLeaveBadFeedback}>
              Bad
            </button>
          </li>
            </ul>
            <h2>Statistics:</h2>
        <Statistics
          good={this.state.goodValue}
          neutral={this.state.neutralValue}
          bad={this.state.badValue}
        />
      </div>
    );
  }
}


export default FeedbackOptions;