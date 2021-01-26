import React from 'react'

const charComponent = (props) => {
  // const style = {}

  let charArray = [];
  if (props.chars) {
    charArray = props.chars.split('');
    console.log(charArray)
  }
  let eachThing = null
  if (charArray.length > 0) {
    eachThing = charArray.map((element) => {
      return <p>{element}</p>
    })
  }
  return (
    <div>
      {eachThing}
    </div>
  )

}

export default charComponent;