import React from 'react'

const validationComponent = (props) => {
  let length = props.inputVal;
  let statement = null;
  if (length > 5) {
    statement = 'text is long enough';
  } else {
    statement = 'text too short';
  }

  return (
    <div className="Person">
      <p>{props.inputVal}</p>
      <p>{statement}</p>
    </div>
  )
}

export default validationComponent;

