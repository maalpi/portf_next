import styled, { keyframes } from 'styled-components';
import Link from "next/link";
import Particles from '../particles';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const StyledPrincipal = styled.div`
    position: relative;
    width: 847px; 
    height: 325px;

    padding-left: 5rem; /* Adiciona espaço à esquerda */
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: left;
    background-color: rgba(0, 0, 0, 0.5);
    overflow: hidden;
    cursor: pointer;
    animation: ${fadeIn} 1.5s ease-in-out;
    transition: all 400ms ease;
    font-family: sans-serif;
    &:hover{
        border: 2px solid rgba(255, 255, 255, 0.7);
    }

    @media (max-width: 640px) { 
        width: 350px;
        height: 100px;
        margin-right: 0;
    }

    @media (max-width: 768px) { 
        width: 350px;
        height: 160px; 
        margin-right: 0;
    }
`;

export const StyledCard = styled.div`
    position: relative;
    font-family: sans-serif;
    width: 400px; 
    height: 225px;
    margin-right: 1rem;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: left;
    background-color: rgba(0, 0, 0, 0.5);
    overflow: hidden;
    cursor: pointer;
    animation: ${fadeIn} 1.5s ease-in-out;
    transition: all 400ms ease;

    &:hover{
        border: 2px solid rgba(255, 255, 255, 0.7);
    }

    @media (max-width: 640px) { 
        width: 350px;
        height: 100px;
        margin-right: 0;
    }

    @media (max-width: 768px) { 
        width: 350px;
        height: 160px; 
        margin-right: 0;
    }
`;

export const Title = styled.h2`
    align-self: flex-start;
    width: 250px;
    text-align: left;
    font-size: 1.4rem;
    color: #efefec;
`

export const Parg = styled.p`
    align-self: flex-start;
    text-align: left;
    font-size: 1rem;
    color: #efefec;
`

export const CardLink = styled(Link)`
    color: white;
    text-decoration: none;
    font-size: 18px;
    z-index: 1; 
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const StyledParticles = styled(Particles)`
  position: absolute;
  inset: 0; 
  animation: ${fadeIn} 0.4s ease-in-out;
`;