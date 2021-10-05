import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import "./ColorForm.css"

const ColorForm = ({addColor}) => {
  const initialForm = {
    name: "",
    hex: ""
  }

  const [formObj, setFormObj] = useState(initialForm);
  const history = useHistory();

  const onChange = (evt) => {
    const {name, value} = evt.target;
    setFormObj({...formObj, [name]:value}) 
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    addColor(formObj);
    setFormObj(initialForm);
    history.push("/colors")
  }

  return (    
    <div className="ColorForm">
      <form className="ColorForm-form" onSubmit={handleSubmit}>
        <div className="ColorForm-field">
          <label htmlFor="name">Color Name</label>
          <input type="text"  name="name" id="name" value={formObj.name} onChange={onChange} required/>
        </div>

        <div className="ColorForm-field">
          <label htmlFor="hex">Color Value</label>
          <input type="color" name="hex" id="hex" value={formObj.hex} onChange={onChange}/>
        </div>

        <button className="ColorForm-addBtn">Add this color</button>
      </form>
      <Link to="/colors">Go back</Link>
    </div>
  )
}

export default ColorForm;

