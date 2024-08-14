"use client";

import { Github, Mail, Linkedin } from "lucide-react";
import { FullScreenContainer } from "../pageStyle";
import {CardFooter, Image, Button} from "@nextui-org/react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import Link from "next/link";

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
            <h1>Pagina Contato</h1>
            {socials.map((s) => (
                <Card>
                    <Link href={s.href}>
                        <span>{s.icon}</span>
                        <span>{s.handle}</span>
                        <span>{s.label}</span>
                    </Link>
                </Card>
            ))}
        </FullScreenContainer>
    );}