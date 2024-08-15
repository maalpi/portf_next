"use client";

import { Github, Mail, Linkedin } from "lucide-react";
import { FullScreenContainer } from "../pageStyle";
import {CardFooter, Image, Button} from "@nextui-org/react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import Link from "next/link";
import {StyledCard, SpanCard, SpanIcon} from "./styed";

const socials = [
	{
		icon: <Linkedin size={20} />,
		href: "https://www.linkedin.com/in/mateus-pierre-96799218a/",
		label: "Linkedin",
		handle: "Mateus Pierre",
	},
	{
		icon: <Mail size={20} />,
		href: "mailto:pierremateus81@gmail.com",
		label: "Email",
		handle: "pierremateus81@gmail.com",
	},
	{
		icon: <Github size={20} />,
		href: "https://github.com/maalpi",
		label: "Github",
		handle: "maalpi",
	},
];

export default function Contato() {
	return (
        <FullScreenContainer>
            <Navigation/>
			<StyledCard>
				{socials.map((s) => (
					<Card href={s.href}>
						<SpanIcon>{s.icon}</SpanIcon>
						<SpanCard><strong>{s.handle}</strong></SpanCard>
						<SpanCard>{s.label}</SpanCard>
					</Card>
				))}
			</StyledCard>
        </FullScreenContainer>
    );}