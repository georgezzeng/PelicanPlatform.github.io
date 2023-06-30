'use client'

import ExportedImage from "next-image-export-optimizer";
import {Grid, Box, Container} from "@mui/material";

import chtcLogo from "../../public/static/images/CHTC_Logo.svg"
import morgridgeLogo from "../../public/static/images/Morgridge_Logo.png"
import Link from "next/link";

const Footer = () => {

    return (
        <Container maxWidth={"xl"}>
            <Box sx={{paddingTop: "2rem", paddingBottom: "2rem"}}>
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
            </Box>
        </Container>
    )
}

export default Footer;