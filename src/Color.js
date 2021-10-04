import React from 'react';
import './Color.css'
import {useParams, Link, Redirect} from 'react-router-dom'

const Color = ({colors}) => {
  const {color} = useParams();
  const colorObj = colors.find(ele => ele.name === color);

  if (colorObj) {
    const backgroundColor = {backgroundColor: colorObj.hex}

    return (
      <div className="Color" style={backgroundColor}>
        <h1>{`This is ${color}`}</h1>
        <Link to="/colors">Go back</Link>
      </div>
    )
  } else {
    return <Redirect to="/colors" />
  }
}

export default Color;

