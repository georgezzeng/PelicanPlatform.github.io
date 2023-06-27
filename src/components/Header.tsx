'use client'

import Image from "next/image";
import githubMark from "../public/static/images/github-mark.png"
import {useState, useEffect} from "react";
import styles from "../app/page.module.css"
import {Poppins} from "next/font/google";

const poppins = Poppins({
    subsets: ['latin'],
    style: ['normal'],
    weight: ['400']
})

export const Header = () => {

    let [scrolledTop, setScrolledTop] = useState(true);

    useEffect(() => {
        addEventListener("scroll", (event) => {
            setScrolledTop(window.scrollY < 50);
        });
    }, [] )

    return (
        <div className={`${styles.header} ${scrolledTop ? styles.headerScrolled : ""} ${poppins.className}`} style={{display: "flex", justifyContent:"space-between", padding:"1rem", position:"fixed", width: "100%", overflow: "hidden"}}>
            <div style={{display:"flex"}}>
                <h2 style={{margin:"auto"}}>Pelican Platform</h2>
            </div>
            <div>
                <a href={"https://github.com/PelicanPlatform"}>
                    <Image
                        src={githubMark}
                        alt={"Github Mark"}
                        height={40}
                    />
                </a>
            </div>
        </div>
    )
}