"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Particles from "./components/particles";
import {  Container, FullScreenContainer, StyledParticles, 
          StyledTitle, StyledNav, StyledUl,
          StyledLink } from "./pageStyle";

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
        <StyledTitle>mateus pierre</StyledTitle>
      {/* <Container/> */}
    </FullScreenContainer>
  );
}
