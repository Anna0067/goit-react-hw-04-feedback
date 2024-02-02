import React, { useState, useEffect } from 'react';
import FeedbackOptions from './FeedbackOption';
import Statistics from './Statistics';
import Section from './Sections';
import Notification from './Notifications';

const countTotalFeedback = feedback => {
  const { good, neutral, bad } = feedback;
  return good + neutral + bad;
};

const App = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const handleFeedback = type => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [type]: prevFeedback[type] + 1,
    }));
  };

  const countPositiveFeedbackPercentage = () => {
    const { good } = feedback;
    const totalFeedback = countTotalFeedback(feedback);
    return totalFeedback === 0 ? 0 : Math.round((good / totalFeedback) * 100);
  };

  useEffect(() => {
    document.title = `Feedback App - Total: ${countTotalFeedback(feedback)}`;
  }, [feedback]);

  const totalFeedback = countTotalFeedback(feedback);
  const positivePercentage = countPositiveFeedbackPercentage();

  return (
    <div>
      <Section title="Give Feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleFeedback}
        />
      </Section>
      <Section title="Statistics">
        {totalFeedback === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={totalFeedback}
            positivePercentage={positivePercentage}
          />
        )}
      </Section>
    </div>
  );
};

export default App;
