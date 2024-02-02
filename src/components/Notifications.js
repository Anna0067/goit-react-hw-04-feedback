import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const Notification = ({ message }) => {
  useEffect(() => {
    return () => {};
  }, []);

  return <p>{message}</p>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
