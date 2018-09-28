import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import styled, { css } from 'styled-components';

import pic from '../../public/react-sc.png';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-size: 3em;
  }
`;

const BackgroundImage = styled.div`
    display: none;
  ${props => props.image && css `
    display: block;
    background-color: #393D3F;
    height: 400px;
    width: 100%;
  `}
  img {
    display: block;
    border: 10px solid #263238;
    margin: auto;
  }
`;

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Container>
          <BackgroundImage image>
            <img src={pic} alt="Picture"/>
          </BackgroundImage>
          <h1>Hello React!</h1>
        </Container>
      </React.Fragment>
    );
  }
}

export default hot(module)(App);