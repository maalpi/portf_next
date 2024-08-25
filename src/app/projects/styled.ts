
import styled from 'styled-components';

export const FullScreenContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: auto;
  overflow: hidden;
  background: linear-gradient(to top left, black, rgba(74, 85, 104, 0.2), black);
  /* background: rgba(255,255,255, 0.2); */
`;

export const Subtitle = styled.h2`
    animation: fade-up 0.5s ease;
    margin-top: 7%;
    margin-left: 13.5%;
    color: #efefec;
    font-size: 1.8rem;
    font-family: sans-serif;
    align-self: flex-start;
    text-align: left;

    @media (max-width: 768px) { 
      margin-top: 20%
    }
`

export const Paragrafo = styled.p`
    align-self: flex-start;
    text-align: left;
    margin-left: 13.5%;
    padding: 1rem 0;
    color: #666666;
    font-family: sans-serif;
`
// Componente estilizado usando styled-components
export const GridContainer = styled.div`
  margin: 0.5rem 0; 
  display: grid;
  width: 100%;
  max-width: 1280px; 
  animation: fade-up 0.5s ease; 
  grid-template-columns: repeat(1, 1fr);
  gap: .75rem; 
  padding-left: 0.75rem;

  @media (min-width: 768px) { 
    grid-template-columns: repeat(3, 1fr);
    padding: 0 1.25rem; 
  }

  @media (min-width: 1280px) { 
    padding: 0;
  }
`;
