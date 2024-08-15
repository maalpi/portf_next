"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { HeaderContainer, HeaderContent, StyledLink, ArrowLink } from "./styles/navStyled";

export const Navigation: React.FC = () => {
    return (
        <HeaderContainer>
            <HeaderContent>
                <div style={{ display: "flex", gap: "2rem" }}>
                    <StyledLink href="/projects">Projects</StyledLink>
                    <StyledLink href="/contact">Contact</StyledLink>
                </div>

                <ArrowLink href="/">
                    <ArrowLeft />
                </ArrowLink>
            </HeaderContent>
        </HeaderContainer>
    );
};