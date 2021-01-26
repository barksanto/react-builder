import React from 'react'

const validationComponent = (props) => {
  let length = props.inputVal;
  let statement = null;
  if (length > 5) {
    statement = 'text is long enough';
  } else {
    statement = 'text too short';
  }
  console.log(statement)
  return (
    <div className="Person">
      <p>{props.inputVal}</p>
    </div>
  )
}

export default validationComponent;

