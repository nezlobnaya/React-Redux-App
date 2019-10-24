import React from 'react';
import { connect } from 'react-redux'
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
  background-color: rgb(222, 250, 246);
  border: 3px solid #020;
  padding: 20px 40px;
  margin-top: 30px;
  border-radius:20px;
  `

function App(props) {
  return (
    <div className="App">
      <Intro>
        <h1>TEN FRAGMENTS</h1> <p>from the collections of the <a href="https://www.harvardartmuseums.org">Harvard Art Museums</a>.</p>
      <Button onClick={props.fetchData}>
        {props.isLoading ? (
          'Loading'
        ) : (
          'Generate'
        )}
      </Button>
      </Intro>
      <ImageList objects={props.objects} />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    objects: state.objects,
    error: state.error
  };
}

export default connect(
  mapStateToProps,
  { fetchData }
)(App)