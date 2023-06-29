'use client'

import Image from "next/image";
import {BackgroundPage} from "@/components/Background";
import {Box, Container, Grid, Typography} from '@mui/material';
import hero from '../public/static/images/pelican-hero.png'
import {Poppins} from 'next/font/google'
import ArrowRight from "@/components/svg/arrowright";
import styles from "./page.module.css"

import pelicanDiagram from "../public/static/images/pelican-concept-map.png"

import Link from "next/link";

const poppins = Poppins({
    subsets: ['latin'], style: ['normal'], weight: ['300', '400', '600']
})

export default function Home() {
    return (
        <main>
            <BackgroundPage image={hero}/>
            <Container maxWidth={"xl"}>
                <Box sx={{paddingTop: "4rem", paddingBottom: "10rem"}}>
                    <Grid container spacing={2}>
                        <Grid item xs={5} sx={{display: "flex", flexDirection: "column"}}>
                            <Box sx={{marginTop: "auto", marginBottom: "auto"}}>
                                <h3 className={poppins.className} style={{fontSize: "2rem", fontWeight: "600"}}>Software
                                    Designed to</h3>
                                <h1 className={poppins.className} style={{fontSize: "2.6rem", fontWeight: "600"}}>Make
                                    Data Distribution Easy</h1>
                                <h3 className={poppins.className}
                                    style={{fontSize: "1.5rem", fontWeight: "400"}}>Functional and Dependable for
                                    Consumers</h3>
                                <h3 className={poppins.className} style={{fontSize: "1.5rem", fontWeight: "400"}}>Robust
                                    and Maintaiable for Providers</h3>
                            </Box>
                        </Grid>
                        <Grid item xs={7}>
                            <Image style={{width: "100%", height: "auto"}} src={pelicanDiagram}
                                   alt={"Sky level diagram of Pelican"} width={1000} quality={100}/>
                        </Grid>
                    </Grid>
                </Box>
                <Box sx={{position: "relative"}}>
                    <Box sx={{position: "absolute", top: "-6rem"}}>
                        <Grid container>
                            <Grid item xs={10} sx={{margin: "auto"}}>
                                <Box className={poppins.className} style={{position: "relative", borderRadius: "1rem", padding: "3rem", fontSize: "24px", fontWeight: "300", backgroundColor: "#CFE4FF", textAlign: "center"}}>
                                    <p>
                                        The Pelican Platform is designed to meet the needs of data providers and consumers
                                        in the age of “Big Data”. <b>Our Mission?</b> Provide a platform that makes deploying data
                                        easy and accessing this data easier via well documented APIs and client tools.
                                    </p>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>




            <Box sx={{backgroundColor: "#F5F5F5", paddingTop: "10rem", paddingBottom: "4rem"}}>
                <Container maxWidth={"xl"}>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Box sx={{borderRadius: "1rem", overflow: "hidden"}}>
                                <iframe width="100%" height="500px" frameBorder="0" allow="fullscreen"
                                        src="https://map.opensciencegrid.org/map/iframe?view=OpenScienceDataFederation&navigation=0#45.737115,-90.140436|2"></iframe>
                            </Box>
                        </Grid>
                        <Grid item xs={6} sx={{display: "flex"}}>
                            <Box sx={{paddingBottom:"1rem", paddingTop:"1rem", display: "flex", flexDirection: "column"}}>
                                <Typography className={poppins.className} variant={"h4"} sx={{paddingBottom: "1.5rem"}}>The Open Science Data Federation</Typography>
                                <Box sx={{fontSize:"1.5rem", fontWeight: "300", display: "flex", flexDirection: "column", flexGrow: "1"}}>
                                    <Box>
                                        <Box sx={{paddingBottom: "1rem"}}>
                                            Backed by the Pelican Platform, the Open Science Data Federation (OSDF) is an OSG service hosting data origins and caches across the globe.
                                        </Box>
                                        <Box>
                                            Integrated with other OSG services such as the OSPool, the OSDF facilitates the distributed nature of a national compute pool. In addition to the performance improvements, purpose built plugins for HTCondor make it easy for researchers to harness these caches.
                                        </Box>
                                    </Box>
                                    <Box sx={{marginTop: "auto", fontWeight: "400"}}>
                                        <Box sx={{color: "#0885ff"}}>
                                            <Link href={"https://osg-htc.org/services/osdf.html"}>Learn More <ArrowRight height={20} width={24} fill={"currentColor"}/></Link>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </main>)
}