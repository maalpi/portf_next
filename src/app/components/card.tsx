"use client";

import React, { PropsWithChildren, useState } from "react";
import Particles from "./particles";
import { CardLink, StyledCard, StyledParticles } from "./styles/cardStyled";

export const Card: React.FC<PropsWithChildren<{ href: string }>> = ({ children, href }) => {
    const [isHovered, setIsHovered] = useState(false);

    return(
        <StyledCard onMouseEnter={() => setIsHovered(true)}
             onMouseLeave={() => setIsHovered(false)}>
            
            {isHovered && <StyledParticles quantity={100} />}
            <CardLink href={href} target="_blank">
                {children}
            </CardLink>

        </StyledCard>
    );
};