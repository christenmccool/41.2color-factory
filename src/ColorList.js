import React from 'react';
import './ColorList.css';
import {Link} from 'react-router-dom';

const ColorList = ({colors}) => {
  const renderColorLinks = () => (
    colors.map(color => <Link to={`colors/${color.name}`} key={color.hex}>{color.name}</Link>)
  )

  return (
    <div className="ColorList">
      <div className="ColorList-top">
        <h3>Welcome to the Color Factory.</h3>
        <Link to="/colors/new" className="ColorList-addBtn">Add a color</Link>
      </div>

      <div className="ColorList-main">
        <h3>Please select a color.</h3>
        {renderColorLinks()}
      </div>
    </div>
  )
}

export default ColorList;