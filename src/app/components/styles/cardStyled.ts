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

export const StyledCard = styled.div`
    position: relative;
    width: 400px; 
    height: 425px;
    margin-right: 1rem;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.5);
    overflow: hidden;
    cursor: pointer;
    animation: ${fadeIn} 1.5s ease-in-out;
    transition: all 400ms ease;
    
    &:hover{
        border: 2px solid rgba(255, 255, 255, 0.7);
        background: linear-gradient(to top left, black, rgba(74, 85, 104, 0.1), black);
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