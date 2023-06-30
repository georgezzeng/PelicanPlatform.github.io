'use client'

import ExportedImage from "next-image-export-optimizer";
import githubMark from "../../public/static/images/github-mark.png"
import {useState, useEffect} from "react";
import styles from "../../app/page.module.css"
import {Poppins} from "next/font/google";

import PelicanLogo from "../../public/static/images/PelicanPlatformLogo_Icon.png"
import {Typography} from "@mui/material";

export const Header = () => {

    let [scrolledTop, setScrolledTop] = useState(true);

    useEffect(() => {
        setScrolledTop(window.scrollY < 50);
        addEventListener("scroll", (event) => {
            setScrolledTop(window.scrollY < 50);
        });
    }, [] )

    return (
        <div className={`${styles.header} ${scrolledTop ? styles.headerScrolled : ""}`} style={{display: "flex", justifyContent:"space-between", padding:"1rem", position:"fixed", zIndex:"1", width: "100%", overflow: "hidden"}}>
            <div style={{display:"flex"}}>
                <Typography variant={"h5"} my={"auto"}>Pelican Platform</Typography>
            </div>
            <div>
                <a href={"https://github.com/PelicanPlatform"}>
                    <ExportedImage
                        src={githubMark}
                        alt={"Github Mark"}
                        height={32}
                    />
                </a>
            </div>
        </div>
    )
}