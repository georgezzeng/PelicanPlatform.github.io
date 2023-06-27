'use client'

import Image from "next/image";
import {BackgroundPage} from "@/components/Background";
import {Box, Container, Grid} from '@mui/material';
import hero from '../public/static/images/pelican-hero.png'
import { Poppins } from 'next/font/google'
import styles from "./page.module.css"

import pelicanDiagram from "../public/static/images/pelican-diagram.png"

const poppins = Poppins({
    subsets: ['latin'],
    style: ['normal'],
    weight: ['400', '700']
})

export default function Home() {
  return (
    <main>
        <BackgroundPage image={hero}/>
        <Container sx={{ paddingTop: "2rem"}}>
            <Box sx={{backdropFilter: "blur(3px)", padding:"1rem;", borderRadius: "2rem;"}}>
                <Grid  container spacing={2}>
                    <Grid item xs={8} sx={{display: "flex", flexDirection: "column"}}>
                        <Box sx={{marginTop: "auto", marginBottom: "auto"}}>
                            <h3 style={{fontSize: "2rem"}}>Software Solutions for </h3>
                            <h1 style={{fontSize: "4rem", marginTop: "-.7rem"}}>Distributing Data</h1>
                            <h3 style={{fontSize: "1.5rem", fontWeight: "400"}}>Designed to be scalable, fault tolerant,<br/> and easy to deploy</h3>
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <Image style={{width: "100%", height:"auto"}} src={pelicanDiagram} alt={"Sky level diagram of Pelican"} width={600} quality={100}/>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{borderRadius: "1rem", marginTop: "2rem;", padding: "1rem", backgroundColor: "rgb(231, 235, 240)"}}>
                <h1 style={{textAlign:"center"}}>Bringing Data Closer to Users</h1>
                <p>Test</p>
            </Box>
        </Container>
    </main>
  )
}
