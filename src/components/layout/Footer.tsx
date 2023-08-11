'use client'

import ExportedImage from "next-image-export-optimizer";
import {Grid, Box, Container, Divider} from "@mui/material";

import chtcLogo from "../../public/static/images/CHTC_Logo.svg"
import morgridgeLogo from "../../public/static/images/Morgridge_Logo.png"
import Link from "next/link";

const Footer = () => {

    return (
        <>
            <Box mt={1} sx={{paddingTop: "2rem", paddingBottom: "2rem"}}>
                <Container maxWidth={"xl"}>
                    <Grid container sx={{display: "flex", justifyContent: "center"}} spacing={2}>
                        <Grid item>
                            <Link href={"https://chtc.cs.wisc.edu"}>
                                <ExportedImage src={chtcLogo} alt={"CHTC Logo"} height={40}/>
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href={"https://morgridge.org"}>
                                <ExportedImage src={morgridgeLogo} alt={"Morgridge Logo"} height={40}/>
                            </Link>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Box sx={{backgroundColor:"#F5F5F5"}} py={1}>
                <Container maxWidth={"xl"}>
                    <Grid container justifyContent={"center"}>
                        <Grid item>
                            <Link href={"./branding"}>Branding</Link>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    )
}

export default Footer;