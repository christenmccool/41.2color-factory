import React, {useState, useEffect} from 'react';
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

  const useLocalStorage = (key, value) => {

    const initalData = JSON.parse(localStorage.getItem(key)) || value;
    const [data, setData] = useState(initalData);

    useEffect(() => {
      localStorage.setItem(key, JSON.stringify(data));
    }, [key, data]);
    
    return [data, setData];
  }

  const [colors, setColors] = useLocalStorage('colors', initialColors);

  const addColor = (colorObj) => {
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