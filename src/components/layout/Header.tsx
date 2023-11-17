'use client'

import ExportedImage from "next-image-export-optimizer";
import githubMark from "../../public/static/images/github-mark.png"
import {useState, useEffect, useRef} from "react";
import {Grid, Box, Container, Divider, Menu, MenuItem, Button, Popper, Grow, Paper, ClickAwayListener, MenuList} from "@mui/material";
import styles from "../../app/page.module.css"
import {Poppins} from "next/font/google";
import Link from "next/link";

import PelicanLogo from "../../public/static/images/PelicanPlatformLogo_Icon.png"
import {Typography} from "@mui/material";

export const Header = () => {

	let [scrolledTop, setScrolledTop] = useState(true);

	useEffect(() => {
		setScrolledTop(window.scrollY < 50);
		addEventListener("scroll", (event) => {
			setScrolledTop(window.scrollY < 50);
		});
	}, [])

	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
	  setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
	  setAnchorEl(null);
	};

	return (
		<div className={`${styles.header} ${scrolledTop ? styles.headerScrolled : ""}`} style={{
			display: "flex",
			justifyContent: "space-between",
			padding: "1rem",
			position: "fixed",
			zIndex: "1",
			width: "100%",
			overflow: "hidden"
		}}>
			<Box display={"flex"}>
				<Link href={"/"}>
					<Box style={{display: "flex"}}>
						<ExportedImage src={PelicanLogo} alt={"Pelican Logo"} height={36}/>
						<Typography variant={"h5"} pl={1} my={"auto"}>Pelican Platform</Typography>
					</Box>
				</Link>
				<Link href={"/"} style={{display: "flex"}}
					id="about-button"
					aria-controls={open ? 'about-menu' : undefined}
					aria-haspopup="true"
					aria-expanded={open ? 'true' : undefined}
				>
					<Typography my={"auto"} pl={2} lineHeight={1} variant={"h6"} onClick={handleClick}>About</Typography>
				</Link>
				<Menu
					id="about-menu"
					anchorEl={anchorEl}
					open={open}
					onClose={handleClose}
					MenuListProps={{
					'aria-labelledby': 'about-button',
					}}
				>
					<MenuItem onClick={handleClose}>Whats Pelican?</MenuItem>
					<MenuItem onClick={handleClose}>Contact</MenuItem>
				</Menu>
				<Link href={"/team"} style={{display: "flex"}}>
					<Typography my={"auto"} pl={2} lineHeight={1} variant={"h6"}>Team</Typography>
				</Link>
			</Box>

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