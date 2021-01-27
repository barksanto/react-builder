import React from 'react'

const charComponent = (props) => {
  const style = {
    display: 'inline-block',
    padding: '16px',
    textAlign: 'center',
    margin: '16px',
    border: '1px solid black'
  }

  // let charArray = [];
  // if (props.chars) {
  //   charArray = props.chars.split('');
  //   // console.log(charArray)
  // }
  // let eachThing = null
  // if (charArray.length > 0) {
  //   eachThing = charArray.map((element, index) => {
  //     return <li onClick={props.delete(index)} key={index} style={style}>{element}</li>
  //   })
  // }
  return (
    <div style={style}>
      {/* <ul>
        {eachThing}
      </ul> */}
      {props.character}
    </div>
  )

}

export default charComponent;