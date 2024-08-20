'use client'

import React from "react";

import { IoLogoFirebase } from "react-icons/io5";
import { SiTypescript, SiJavascript, SiEspressif, SiCoursera, SiVite, SiOpenai, SiMysql, SiJupyter, SiPandas, SiNumpy } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { FaReact, FaNode, FaPython, FaSpotify } from "react-icons/fa";
import { Navigation } from "../components/nav";
import { CardProject } from "../components/cardProjects";
import { FullScreenContainer, GridContainer, Subtitle, Paragrafo } from "./styled";

const reactTopo = [
	{
        icons: [FaPython, FaReact],
		href: "https://www.linkedin.com/in/mateus-pierre-96799218a/",
		title: "Transcrição de video",
		disc: "extensão que criei para transcrever vídeos do YouTube. Utilizei Python (Flask) para desenvolver a API que recebe a URL do vídeo, realiza a transcrição e retorna o texto em formato .txt. Para a extensão do Chrome, usei React + Vite.",
		color: `rgba(0, 114, 177, 0.6)`,
	},
	{
        icons: [RiNextjsFill, SiTypescript],
		href: "https://github.com/maalpi",
		title: "mateuspierre.tech",
		disc: "Next.js e Typescript",
		color: "rgba(255, 255, 255, 0.6)",
	},
];

const reactTree = [
	{
        icons: [FaReact, SiTypescript, FaSpotify ],
		href: "mailto:pierremateus81@gmail.com",
		title: "Discofy",
		disc: "React, Typescript e SpotifyApi",
		color: "rgba(219, 68, 55, 0.6)",
	},
	{
        icons: [FaReact,SiJavascript, SiEspressif, SiCoursera ],
		href: "https://www.linkedin.com/in/mateus-pierre-96799218a/",
		title: "Secure Access Control",
		disc: "React Native, C, ESPRESSIF e ESP32",
		color: `rgba(0, 114, 177, 0.6)`,
	},
	{
        icons: [FaReact, SiJavascript, IoLogoFirebase ],
		href: "https://www.linkedin.com/in/mateus-pierre-96799218a/",
		title: "Olho D'água das onças",
		disc: "React Native, Javascript and Firebase",
		color: `rgba(0, 114, 177, 0.6)`,
	},
];

const projGeral = [
    {
        icons: [FaReact, SiVite, SiTypescript ],
		href: "https://www.linkedin.com/in/mateus-pierre-96799218a/",
		title: "Chat WebSocket",
		disc: "React+Vite e Typescript ",
		color: `rgba(0, 114, 177, 0.6)`,
	},
    {
        icons: [FaReact, SiJavascript],
		href: "https://www.linkedin.com/in/mateus-pierre-96799218a/",
		title: "Portfolio Antigo",
		disc: "React and Javascript",
		color: `rgba(0, 114, 177, 0.6)`,
	},
    {
        icons: [FaReact, SiJavascript, SiOpenai],
		href: "https://www.linkedin.com/in/mateus-pierre-96799218a/",
		title: "Receitas GPT",
		disc: "React Native e OpenIA",
		color: `rgba(0, 114, 177, 0.6)`,
	},
    {
        icons: [SiJavascript, FaNode, IoLogoFirebase ],
		href: "https://www.linkedin.com/in/mateus-pierre-96799218a/",
		title: "Node & Firebase - CRUD",
		disc: "Javascript",
		color: `rgba(0, 114, 177, 0.6)`,
	},
    {
        icons: [FaReact, SiJavascript,SiMysql  ],
		href: "https://www.linkedin.com/in/mateus-pierre-96799218a/",
		title: "Gerenciamento Escolar",
		disc: "React, Javascript and MySQL",
		color: `rgba(0, 114, 177, 0.6)`,
	},
    {
        icons: [FaPython, SiPandas, SiNumpy ,SiJupyter ],
		href: "https://www.linkedin.com/in/mateus-pierre-96799218a/",
		title: "Hipoteses Copa do mundo edfefefeffsdfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
		disc: "Python, Pandas, matplot e Numpy",
		color: `rgba(0, 114, 177, 0.6)`,
	},
    {
        icons: [FaPython, SiPandas, SiNumpy ,SiJupyter ],
	    href: "https://www.linkedin.com/in/mateus-pierre-96799218a/",
		title: "Analise Crimes",
		disc: "Python, Pandas, matplot e Numpy",
		color: `rgba(0, 114, 177, 0.6)`,
	},
    {
        icons: [FaPython, SiPandas, SiNumpy ,SiJupyter ],
	    href: "https://www.linkedin.com/in/mateus-pierre-96799218a/",
		title: "Analisandp notas escolares",
		disc: "Python, Pandas, matplot e Numpy",
		color: `rgba(0, 114, 177, 0.6)`,
	},
    {
        icons: [FaPython, SiPandas, SiNumpy ,SiJupyter ],
	    href: "https://www.linkedin.com/in/mateus-pierre-96799218a/",
		title: "Durações dos filmes",
		disc: "Python, Pandas, matplot e Numpy",
		color: `rgba(0, 114, 177, 0.6)`,
	},
];

export default function Contato() {
    return (
        <>
        <Navigation/>
        <FullScreenContainer>
            
            <Subtitle>Projetos</Subtitle>
            <Paragrafo>Últimos projetos feitos</Paragrafo>
            <hr style={{width:'1270px', background:'rgba(80,80,80,0.5)', height: '0.1px', border:'none', margin:'1.5rem'}}/>
                <GridContainer>
                    {reactTopo.map((s) => (
                        <CardProject href={s.href} title={s.title} disc={s.disc}>
                            <div style={{ display: 'flex', gap: '10px', alignSelf:'flex-start', margin:'1rem 0', color:'rgba(102,102,102,0.9)' }}>
                                {s.icons.map((Icon, index) => (
                                <Icon key={index} size={24} />
                                ))}
                            </div>
                        </CardProject>
                    ))}
                </GridContainer>

                <GridContainer>
                    {reactTree.map((s) => (
                        <CardProject href={s.href} title={s.title} disc={s.disc}>
                            <div style={{ display: 'flex', gap: '10px', alignSelf:'flex-start', margin:'1rem 0', color:'rgba(102,102,102,0.9)' }}>
                                {s.icons.map((Icon, index) => (
                                <Icon key={index} size={24} />
                                ))}
                            </div>
                        </CardProject>
                    ))}
                </GridContainer>
                <hr style={{width:'1270px', background:'rgba(80,80,80,0.5)', height: '0.1px', border:'none', margin:'2.5rem 0 1rem 0'}}/>
            <Paragrafo>Projetos mais antigos</Paragrafo>
                <GridContainer>
                    {projGeral.map((s) => (
                        <CardProject href={s.href} title={s.title} disc={s.disc}>
                            <div style={{ display: 'flex', gap: '10px', alignSelf:'flex-start', margin:'1rem 0', color:'rgba(102,102,102,0.9)' }}>
                                {s.icons.map((Icon, index) => (
                                <Icon key={index} size={24} />
                                ))}
                            </div>
                        </CardProject>
                    ))}
                </GridContainer>
        </FullScreenContainer>
        </>
    )
}