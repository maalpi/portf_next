import styled, { keyframes } from 'styled-components';
import Particles from "./components/particles";
import Link from 'next/link';

// Definindo as animações
const glow = keyframes`
  0% { opacity: 0; }
  50% { opacity: 1; }
  100% { opacity: 0; }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

// Estilizando o componente
export const FullScreenContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: linear-gradient(to top left, black, rgba(74, 85, 104, 0.2), black);
`;

export const StyledNav = styled.nav`
  margin-bottom: 2rem ;
  animation: ${fadeIn} 1.5s ease-in-out;
`;

// Estilização da lista
export const StyledUl = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

// Estilização do Link
export const StyledLink = styled(Link)`
  font-size: 0.875rem; /* Equivale a text-sm */
  color: #666666; 
  transition: color 0.5s;

  &:hover {
    color: #efefec; /* Equivale a text-zinc-300 */
  }
`;

export const Container = styled.div`
   display: none;
    width: 100vw;
    height: 1px;
    background: linear-gradient(to right, rgba(74, 85, 104, 0) 0%, rgba(74, 85, 104, 0.5) 50%, rgba(74, 85, 104, 0) 100%);


  @media (min-width: 768px) {
    display: block;
    animation: ${glow} 1.5s infinite, ${fadeLeft} 1s forwards;
  }
`;

export const StyledParticles = styled(Particles)`
  position: absolute;
  inset: 0; // Equivalente a top: 0; right: 0; bottom: 0; left: 0;
  z-index: -10;
  animation: ${fadeIn} 1.5s ease-in-out;
`;

const animateTitle = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10%);
  }
  100% {
    transform: translateY(0);
  }
`;

export const StyledTitle = styled.h1`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');

  padding: 0.875rem 0.125rem; /* Equivale a py-3.5 px-0.5 */
  z-index: 10;
  font-size: 5.25rem; /* Base text size, ajustada abaixo com media queries */
  color: #efefec;
  transition-duration: 1000ms;
  background-color: white;
  cursor: default;
  font-family: 'YourFontDisplay', sans-serif; /* Ajuste para sua fonte */
  white-space: nowrap;
  background-clip: text;
  -webkit-background-clip: text;
  font-family: "Roboto", sans-serif;
  
  /* Adicionando animação */
  animation: ${animateTitle} 1.5s ease-in-out infinite;

  /* Text sizes for different screen sizes */
  @media (max-width: 640px) { /* sm:text-6xl */
    font-size: 2.75rem;
  }

  @media (max-width: 768px) { /* md:text-9xl */
    font-size: 3.25rem;
  }
`;