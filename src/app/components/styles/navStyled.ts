import styled, { keyframes } from 'styled-components';
import Link from 'next/link';

export const HeaderContainer = styled.header`
    position: fixed;
    width: 100%;
    inset: 0 auto auto 0;
    top: 0;
    z-index: 50;
    backdrop-filter: blur(10px);
    transition: all 0.2s ease;
    border-bottom: 1px solid transparent;
`;

export const HeaderContent = styled.div`
    max-width: 1300px;
    margin: 0 auto;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem; 
`;

export const StyledLink = styled(Link)`
    color: #a1a1aa; 
    transition: color 0.2s ease;
    font-family: sans-serif;

    &:hover {
        color: #e4e4e7; 
    }
`;

export const ArrowLink = styled(StyledLink)`
    color: #a1a1aa; 
    float: left;

    &:hover {
        color: #e4e4e7; 
    }

    svg {
        width: 1.5rem; 
        height: 1.5rem; 
    }
`;