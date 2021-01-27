import React from 'react'

const validationComponent = (props) => {
  let length = props.inputLength;
  let statement = 'text too short';
  if (length > 5) {
    statement = 'text is long enough';
  }

  return (
    <div className="Person">
      <p>{props.inputLength}</p>
      <p>{statement}</p>
    </div>
  )
}

export default validationComponent;

