import styled, { keyframes } from 'styled-components';

export const StyledCard = styled.div`
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
`

export const SpanCard = styled.span`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');

    font-size: 1.5rem;
    margin-bottom: 2.5rem;
    font-family: "Roboto",sans-serif;

    @media (max-width: 640px) { 
        font-size: 1.2rem;

    }

    @media (max-width: 768px) { 
        font-size: 1.2rem;

    }
`

export const SpanIcon = styled.span`
    position: relative;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3rem; 
    height: 3rem; 
    font-size: 0.875rem; 
    transition: all 1s ease; 
    border: 1px solid #71717a; 
    border-radius: 9999px; 
    color: #a1a1aa;
    background-color: #18181b; 
    margin-bottom: 3.5rem;

    &:hover {
        color: #ffffff; 
        background-color: #18181b; 
        border-color: #e4e4e7; 
    }
`