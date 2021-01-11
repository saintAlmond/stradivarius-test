import React from 'react';
import styled, { css } from 'styled-components';
import { 
  CarrouselProvider, 
  Slider, 
  Slide,
  ButtonNext,
  ButtonBack,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
// import Carrousel from './components/Carrousel';

const PageContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items:center;
  `

function App() {
  return (
    <PageContainer className="App">
      <SliderWrapper>
        
      </SliderWrapper>
    </PageContainer>
  );
}

export default App;
