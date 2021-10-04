import React, {useState} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import ColorList from './ColorList';
import ColorForm from './ColorForm';
import Color from './Color';


const Routes = () => {
  const initialColors = [
    {name: 'blue', hex: '#343aeb'},
    {name: 'green', hex: '#257515'},
    {name: 'orange', hex: '#e38f12'}
  ];

  const [colors, setColors] = useState(initialColors);

  const addColor = (colorObj) => {
    console.log(colorObj)
    setColors([...colors, colorObj]);
  }

  return (
    <Switch>
      <Route exact path="/colors" >
        <ColorList colors={colors}/>
      </Route>
      <Route exact path="/colors/new" >
        <ColorForm addColor={addColor}/>
      </Route>
      <Route exact path="/colors/:color" >
        <Color colors={colors}/>
      </Route>
      <Redirect to="/colors" />
    </Switch>
  )
}


export default Routes;