'use client'

import ExportedImage from "next-image-export-optimizer";
import {BackgroundPage} from "@/components/Background";
import {Box, Container, Grid, Typography} from '@mui/material';
import hero from '../public/static/images/pelican-hero.png'
import {Poppins} from 'next/font/google'
import ArrowRight from "@/components/svg/arrowright";
import styles from "./page.module.css"

import pelicanDiagram from "../public/static/images/pelican-concept-map_Realistic.png"

import Link from "next/link";

export default function Home() {
    return (
        <main className={styles.main}>
            <BackgroundPage image={hero}/>
            <Container maxWidth={"xl"}>
                <Box sx={{paddingTop: "4rem", paddingBottom: "10rem"}}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} lg={7} xl={6} sx={{display: "flex", flexDirection: "column"}}>
                            <Box sx={{marginTop: "auto", marginBottom: "auto"}}>
                                <Typography variant={"h4"} sx={{fontWeight: "600", textAlign: { xs:"center", lg: "left"}}}>Software Designed to</Typography>
                                <Typography variant={"h3"} sx={{fontWeight: "600", textAlign: { xs:"center", lg: "left"}}}>Make Data Distribution Easy</Typography>
                                <Typography variant={"h6"} sx={{fontWeight: "400", textAlign: { xs:"center", lg: "left"}}}>Functional and Dependable for Consumers</Typography>
                                <Typography variant={"h6"} sx={{fontWeight: "400", textAlign: { xs:"center", lg: "left"}}}>Robust and Maintainable for Providers</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={6} lg={5} xl={6} sx={{display: {lg: "block", xs: "none"}}}>
                            <ExportedImage style={{width: "100%", height: "auto"}} src={pelicanDiagram}
                                   alt={"Sky level diagram of Pelican"} width={1000}/>
                        </Grid>
                    </Grid>
                </Box>
                <Box sx={{position: "relative"}}>
                    <Box sx={{position: "absolute", top: {xs:"-6rem", sm:"-4rem", md:"-5rem", lg:"-6rem"}}}>
                        <Grid container>
                            <Grid item xs={12} lg={10} sx={{margin: "auto"}}>
                                <Box sx={{
                                    position: "relative",
                                    borderRadius: "1rem",
                                    padding: {xs:"1rem", lg:"3rem"},
                                    backgroundColor: "primary.light",
                                    textAlign: "center"
                                }}>
                                    <Typography
                                        variant={"h6"}
                                    >
                                        The Pelican Platform is designed to meet the needs of data providers and consumers
                                        in the age of “Big Data”. <b>Our Mission?</b> Provide a platform that makes deploying data
                                        easy and accessing this data easier via well documented APIs and client tools.
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>




            <Box sx={{backgroundColor: "#F5F5F5", paddingTop: {xs: "11rem", sm: "8rem", md:"6rem", lg: "10rem"}, paddingBottom: "4rem"}}>
                <Container maxWidth={"xl"}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <Box sx={{borderRadius: "1rem", overflow: "hidden"}}>
                                <iframe width="100%" height="500px" frameBorder="0" allow="fullscreen"
                                        src="https://map.opensciencegrid.org/map/iframe?view=OpenScienceDataFederation&navigation=0#45.737115,-90.140436|2"></iframe>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6} sx={{display: "flex"}}>
                            <Box sx={{paddingBottom:"1rem", paddingTop:"1rem", display: "flex", flexDirection: "column"}}>
                                <Typography variant={"h4"} sx={{paddingBottom: "1.5rem"}}>The Open Science Data Federation</Typography>
                                <Box sx={{display: "flex", flexDirection: "column", flexGrow: "1"}}>
                                    <Box>
                                        <Typography variant={"body1"} sx={{paddingBottom: "1rem"}}>
                                            Backed by the Pelican Platform, the Open Science Data Federation (OSDF) is an OSG service hosting data origins and caches across the globe.
                                        </Typography>
                                        <Typography variant={"body1"}>
                                            Integrated with other OSG services such as the OSPool, the OSDF facilitates the distributed nature of a national compute pool. In addition to the performance improvements, purpose built plugins for HTCondor make it easy for researchers to harness these caches.
                                        </Typography>
                                    </Box>
                                    <Box sx={{marginTop: "auto", paddingTop: "2rem", fontWeight: "300"}}>
                                        <Box sx={{color: "#0885ff"}}>
                                            <Link href={"https://osg-htc.org/services/osdf.html"}>
                                                <Typography variant={"h6"} sx={{display: "inline", paddingRight: ".2rem"}}>
                                                    Learn More
                                                </Typography>
                                                <ArrowRight height={18} width={24} fill={"currentColor"}/>
                                            </Link>
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