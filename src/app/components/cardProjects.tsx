"use client";

import React, { PropsWithChildren, useState } from "react";
import Particles from "./particles";
import { CardLink, StyledCard, StyledPrincipal, Parg, Title } from "./styles/cardProjects";

export const CardProject: React.FC<PropsWithChildren<{ href: string, title: string, disc: string}>> = ({ children, href, title, disc }) => {
    const [isHovered, setIsHovered] = useState(false);

    return(
        <>
        {title === "Transcrição de video" ? ( 
            <StyledPrincipal onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}>
                <CardLink href={href} target="_blank">
                    <Title>{title}</Title>
                    {children}
                    <Parg>{disc}</Parg>
                </CardLink>

            </StyledPrincipal>
        ) : (
            <StyledCard onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{
                    height: title === "mateuspierre.tech" ? "325px;" : "225px"
                  }}>
                <CardLink href={href} target="_blank">
                    <Title>{title}</Title>
                    {children}
                    <Parg>{disc}</Parg>
                </CardLink>

            </StyledCard>
        )
        }
        </>
    );
};