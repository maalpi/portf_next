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
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 0.5rem;
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
    color: #666666;

    &:hover{
        border: 1px solid rgba(255, 255, 255, 0.7);
        color: white;
        background: linear-gradient(to top left, black, rgba(74, 85, 104, 0.2), black);
    }

    @media (max-width: 768px) { 
        width: 340px;
        height: 325px; 
    }
`;

export const StyledCard = styled.div`
    position: relative;
    font-family: sans-serif;
    width: 400px; 
    height: 255px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: left;
    background-color: rgba(0, 0, 0, 0.5);
    overflow: hidden;
    cursor: pointer;
    color: #666666;
    animation: ${fadeIn} 1.5s ease-in-out;
    transition: all 400ms ease;

    &:hover{
        border: 1px solid rgba(255, 255, 255, 0.7);
        color: white;
        background: linear-gradient(to top left, black, rgba(74, 85, 104, 0.2), black);
    }

    @media (max-width: 640px) { 
        width: 350px;
        height: 100px;

    }

    @media (max-width: 768px) { 
        width: 340px;
        height: 160px; 

    }
`;

export const Title = styled.h2`
    align-self: flex-start;
    max-width: 340px;
    max-height: 200px;
    text-align: left;
    font-size: 1.8rem;
    color: #efefec;
    font-family: 'Roboto';
    margin-right: 10vh;
    padding: 0px 30px;

`

export const Parg = styled.p`
    align-self: flex-start;
    text-align: left;
    font-size: 1rem;
    font-family: 'Roboto';
    padding: 0px 30px ;
`

export const Botao = styled.p`
    align-self: flex-start;
    text-align: left;
    font-size: 1rem;
    font-family: 'Roboto';
    padding: 30px;
    max-width: 700px;
    margin-top: 25vh;
    position: absolute;

    @media (max-width: 640px) { 
        display: none;
    }

    @media (max-width: 768px) { 
        display: none; 
    }
`

export const CardLink = styled(Link)`
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