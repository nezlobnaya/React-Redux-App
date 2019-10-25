import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { fetchData } from './actions'
import ImageList from './components/ImageList/ImageList'
import styled from 'styled-components'

import './App.css';

const Intro = styled.div`
  height:80vh;
  width:100vh;
  display:flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  background-color: rgb(52, 210, 235);
  border-radius:50%;
  margin: 30px auto;
  `;

  const Button = styled.button`
  border: 1px dotted rgb(97, 93, 93);
    border-radius: 10px;
    font-family : sans-serif;
    font-size   : 100%;
    padding      : 15px 10px 5px 5px;
    font         : bold .6em sans-serif;
    border       : 2px solid #333;
    border-radius: 5px;
    background   : none;
    cursor       : pointer;
    background-color: rgb(222, 250, 246);
    box-shadow: 10px 10px 5px grey;
  `

function App() {
  const state = useSelector(state => state)
  const dispatch = useDispatch()
  console.log('State', state)
  return (
    <div className="App">
      <Intro>
          <h1>TEN FRAGMENTS</h1> <p>from the collections of the <a href="https://www.harvardartmuseums.org">Harvard Art Museums</a>.</p>
        <Button onClick={() => dispatch(fetchData())}>
          {state.isLoading ? (
            'Loading'
          ) : (
            <h2>Get the Images!</h2>
          )}
        </Button>
      </Intro>
      <ImageList />
    </div>
  );
}

export default App