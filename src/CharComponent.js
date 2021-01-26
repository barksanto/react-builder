import React from 'react'

const charComponent = (props) => {
  let charArray = null;
  if (props.chars){
    charArray = props.chars.split('');
    console.log(charArray)
  }

  return (
    <div>
      
    </div>
  )
}

export default charComponent;