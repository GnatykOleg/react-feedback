import {
  Section,
  Statistics,
  FeedbackOptions,
  Notification,
} from './components';
import React, { Component } from 'react';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // onLeaveFeedback = ({ target: { name, value } }) => {
  //   // console.log(state);
  //   this.setState(prevState => ({
  //     [name]: Number(value) + 1,
  //   }));
  // };

  onLeaveFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };
  // prevStateGood = () => {
  //   this.setState(prevState => {
  //     return { good: prevState.good + 1 };
  //   });
  // };
  // prevStateNeutral = () => {
  //   this.setState(prevState => {
  //     return { neutral: prevState.neutral + 1 };
  //   });
  // };
  // prevStateBad = () => {
  //   this.setState(prevState => {
  //     return { bad: prevState.bad + 1 };
  //   });
  // };

  countTotalFeedback = () => {
    const { bad, good, neutral } = this.state;
    return good + bad + neutral;
  };
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Math.round((good / this.countTotalFeedback()) * 100);
  };

  render() {
    const { bad, good, neutral } = this.state;
    const options = Object.keys(this.state);
    return (
      <div>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={
              options
              // {
              // // good,
              // // neutral,
              // // bad,
              // }
            }
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() !== 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}
