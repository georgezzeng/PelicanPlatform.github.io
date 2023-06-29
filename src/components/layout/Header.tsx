'use client'

import ExportedImage from "next-image-export-optimizer";
import githubMark from "../../public/static/images/github-mark.png"
import {useState, useEffect} from "react";
import styles from "../../app/page.module.css"
import {Poppins} from "next/font/google";

import PelicanLogo from "../../public/static/images/PelicanPlatformLogo_Icon.png"

const poppins = Poppins({
    subsets: ['latin'],
    style: ['normal'],
    weight: ['400']
})

export const Header = () => {

    let [scrolledTop, setScrolledTop] = useState(true);

    useEffect(() => {
        setScrolledTop(window.scrollY < 50);
        addEventListener("scroll", (event) => {
            setScrolledTop(window.scrollY < 50);
        });
    }, [] )

    return (
        <div className={`${styles.header} ${scrolledTop ? styles.headerScrolled : ""} ${poppins.className}`} style={{display: "flex", justifyContent:"space-between", padding:"1rem", position:"fixed", zIndex:"1", width: "100%", overflow: "hidden"}}>
            <div style={{display:"flex"}}>
                <h2 style={{margin:"auto"}}>Pelican Platform</h2>
            </div>
            <div>
                <a href={"https://github.com/PelicanPlatform"}>
                    <ExportedImage
                        src={githubMark}
                        alt={"Github Mark"}
                        height={40}
                    />
                </a>
            </div>
        </div>
    )
}