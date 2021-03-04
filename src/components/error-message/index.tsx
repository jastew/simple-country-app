import React from "react";

interface ErrorMessageProps {
  error: boolean;
}

const ErrorMessage = (props: ErrorMessageProps) => {
  const { error } = props;
  if (error) {
    return <div>There was an issue fetching data</div>;
  }
  return null;
};

export default ErrorMessage;
