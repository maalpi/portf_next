"use client"

import { TypeAnimation } from 'react-type-animation';
import {  Container, FullScreenContainer, StyledParticles, 
          StyledTitle, StyledNav, StyledUl,
          StyledLink, StyledTypeAnimation } from "./pageStyle";

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  return (
    <FullScreenContainer>
      <StyledNav>
      <StyledUl>
        {navigation.map((item) => (
          <StyledLink key={item.href} href={item.href}>
            {item.name}
          </StyledLink>
        ))}
      </StyledUl>
    </StyledNav>
      {/* <Container/> */}
        <StyledParticles quantity={600}/>
        <StyledTitle>Mateus Pierre</StyledTitle>
      {/* <Container/> */}
      <StyledTypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Bem-vindo ao meu portfólio. Sou um desenvolvedor Back-End',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Bem-vindo ao meu portfólio. Sou um desenvolvedor Front-End',
        1000,
        'Bem-vindo ao meu portfólio. Sou um desenvolvedor Full-Stack',
        1000
      ]}
      wrapper="span"
      speed={40}
      repeat={0}
    />
    </FullScreenContainer>
  );
}
