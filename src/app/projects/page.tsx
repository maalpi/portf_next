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
		href: "https://www.linkedin.com/posts/mateus-pierre-96799218a_essa-%C3%A9-para-quem-sempre-quis-anotar-tudo-activity-7228569247923245056-nB4e?utm_source=share&utm_medium=member_desktop",
		title: "Transcrição de video",
		disc: "extensão chrome para transcrever vídeos do YouTube. Utilizei Python (Flask) para desenvolver a API que recebe a URL do vídeo, realiza a transcrição e retorna o texto em formato .txt para a extensão do Chrome, usei React + Vite.",
		color: `rgba(0, 114, 177, 0.6)`,
	},
	{
        icons: [RiNextjsFill, SiTypescript],
		href: "https://github.com/maalpi/portf_next",
		title: "mateuspierre.tech",
		disc: "Repositorio do meu portfolio em Next.js, esse que você está vendo",
		color: "rgba(255, 255, 255, 0.6)",
	},
	
];

const reactTree = [
	{
        icons: [FaReact, SiTypescript, FaSpotify ],
		href: "https://discofy.netlify.app/",
		title: "Discofy",
		disc: "Criação de uma contracapa de CD com as musicas mais ouvidas do seu spotify nos ultimos meses, foi feito consumindo a API do Spotify.",
		color: "rgba(219, 68, 55, 0.6)",
	},
	{
        icons: [FaReact,SiJavascript, SiEspressif, SiCoursera ],
		href: "https://github.com/jhonatangopereira/Secure-Access-Control",
		title: "Secure Access Control",
		disc: "Criação de um mecanismo de controle de acesso via bluetooth, onde um usuario utiliza um aplicativo para destrancar a tranca de uma porta.",
		color: `rgba(0, 114, 177, 0.6)`,
	},
	{
        icons: [FaReact, SiJavascript, IoLogoFirebase ],
		href: "https://play.google.com/store/apps/details?id=com.projetoambiental&hl=pt-br",
		title: "Olho D'água das onças",
		disc: "Aplicativo móvel da Reserva Ambiental Olho D'água das Onças localizada em Picui, foi feito utilizando React Native",
		color: `rgba(0, 114, 177, 0.6)`,
	},
];

const projGeral = [
	{
        icons: [FaReact, SiJavascript, SiOpenai],
		href: "https://www.youtube.com/watch?v=_thNb8ocdCU",
		title: "Receitas GPT",
		disc: "Aplicativo móvel que gera a receita de algum prato de acordo com os ingredientes que tem na sua casa, foi feito consumindo a api OpenIA",
		color: `rgba(0, 114, 177, 0.6)`,
	},
    {
        icons: [FaReact, SiVite, SiTypescript ],
		href: "https://www.linkedin.com/posts/mateus-pierre-96799218a_ol%C3%A1-pessoal-estou-passando-para-compartilhar-activity-7205996335999655936-jb7S?utm_source=share&utm_medium=member_desktop",
		title: "Chat WebSocket",
		disc: "Live chat, mini chat feito para estudar o funcionamento de websocket",
		color: `rgba(0, 114, 177, 0.6)`,
	},
    {
        icons: [FaReact, SiJavascript],
		href: "https://github.com/maalpi/portfolio",
		title: "Portfolio Antigo",
		disc: "Repositorio do meu antigo portfólio feito usando React.js",
		color: `rgba(0, 114, 177, 0.6)`,
	},
    {
        icons: [FaReact, SiJavascript, SiOpenai],
		href: "https://github.com/maalpi/Scraper-Amazon",
		title: "Scraper Amazon",
		disc: "Scraping do site da Amazon. Basicamente um API que pega as informações de acordo com o código do produto na amazon.",
		color: `rgba(0, 114, 177, 0.6)`,
	},
    {
        icons: [SiJavascript, FaNode, IoLogoFirebase ],
		href: "https://www.linkedin.com/posts/mateus-pierre-96799218a_ol%C3%A1-pessoal-quero-compartilhar-com-voc%C3%AAs-activity-7152749370776432641-pvim?utm_source=share&utm_medium=member_desktop",
		title: "Node & Firebase - CRUD",
		disc: "Back-end para se conectar a um banco de dados FireStore do Firebase, CRUD do BD.",
		color: `rgba(0, 114, 177, 0.6)`,
	},
    {
        icons: [FaReact, SiJavascript,SiMysql  ],
		href: "https://github.com/maalpi/Projeto-Escola",
		title: "Gerenciamento Escolar",
		disc: "Sistema de gerenciamento de alunos de uma escola, meu primeiro projeto com Redux e validação de Token",
		color: `rgba(0, 114, 177, 0.6)`,
	},
    {
        icons: [FaPython, SiPandas, SiNumpy ,SiJupyter ],
		href: "https://github.com/maalpi/HipoteseFutebol",
		title: "Hipoteses Copa do mundo",
		disc: "Gerando hipoteses através do python, analisando partidas de futebol da copa do mundo feminina e masculina",
		color: `rgba(0, 114, 177, 0.6)`,
	},
    {
        icons: [FaPython, SiPandas, SiNumpy ,SiJupyter ],
	    href: "https://github.com/maalpi/Analise-Crimes",
		title: "Analise Crimes",
		disc: "Analisando os dados de crimes cometidos na cidade de Los Angeles",
		color: `rgba(0, 114, 177, 0.6)`,
	},
    {
        icons: [FaPython, SiPandas, SiNumpy ,SiJupyter ],
	    href: "https://github.com/maalpi/Manipulando-Notas-Escolas/tree/main",
		title: "Analisando notas escolares",
		disc: "Projeto para analisar e gerar conclusoes sobre as notas das escolas do EUA no examme SATs",
		color: `rgba(0, 114, 177, 0.6)`,
	},
    {
        icons: [FaPython, SiPandas, SiNumpy ,SiJupyter ],
	    href: "https://github.com/maalpi/Netflix-Filmes-Duracao",
		title: "Durações dos filmes",
		disc: "Projeto para analisar se os filmes estão ficando menores em duração de acordo com o percorrer dos anos. Usando os dados dos filmes presentes na Netflix.",
		color: `rgba(0, 114, 177, 0.6)`,
	},
];

export default function Contato() {
    return (
        <>
        <FullScreenContainer>
			<Navigation/>
            <Subtitle>Projetos</Subtitle>
            <Paragrafo>Últimos projetos feitos</Paragrafo>
            <hr style={{width:'1270px', background:'rgba(80,80,80,0.5)', height: '0.1px', border:'none', margin:'1.5rem'}}/>
                <GridContainer>
                    {reactTopo.map((s) => (
                        <CardProject href={s.href} title={s.title} disc={s.disc}>
                            <div style={{ display: 'flex', gap: '15px', alignSelf:'flex-start', margin:'1rem 0', padding: '0px 30px'}}>
                                {s.icons.map((Icon, index) => (
                                <Icon key={index} size={28} />
                                ))}
                            </div>
                        </CardProject>
                    ))}
                </GridContainer>

                <GridContainer>
                    {reactTree.map((s) => (
                        <CardProject href={s.href} title={s.title} disc={s.disc}>
                            <div style={{ display: 'flex', gap: '15px', alignSelf:'flex-start', margin:'1rem 0', padding: '0px 30px' }}>
                                {s.icons.map((Icon, index) => (
                                <Icon key={index} size={28} />
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
                            <div style={{ display: 'flex', gap: '15px', alignSelf:'flex-start', margin:'1rem 0', padding: '0px 30px' }}>
                                {s.icons.map((Icon, index) => (
                                <Icon key={index} size={28} />
                                ))}
                            </div>
                        </CardProject>
                    ))}
                </GridContainer>
        </FullScreenContainer>
        </>
    )
}