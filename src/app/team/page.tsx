'use client'

import ExportedImage from "next-image-export-optimizer";
import {BackgroundPage} from "@/components/Background";
import {Box, Container, Grid, Typography, Stack, Chip} from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import hero from '../public/static/images/pelican-hero.png'
import {Poppins} from 'next/font/google'
import ArrowRight from "@/components/svg/arrowright";
import styles from "../page.module.css"
import type { InferGetStaticPropsType, GetStaticProps } from 'next'

import {team} from "./team.json"
import {LeaderCard, StaffCard} from "./cards";

import Link from "next/link";


export default function Page() {

	const leadership = team.filter((member) => member.leadership ?? false )
	const staff = team.filter((member) => !member.leadership ?? false )

	console.log(team)
	return (
			<Box>
				<Container maxWidth={"xl"}>
					<Grid container justifyContent={"center"}>
						<Grid item xs={12} sm={6} lg={5}>
							<LeaderCard {...leadership[0]} />
						</Grid>
					</Grid>
					<Grid container justifyContent={"center"}>
						{
							leadership.slice(1,3).map((member) => {
								return (
										<Grid key={member.name} item xs={12} sm={6} lg={5}>
											<LeaderCard {...member} />
										</Grid>
								)
							})
						}
					</Grid>
					<Grid container justifyContent={"center"}>
						{
							staff.map((member) => <StaffCard key={member.name} {...member} />)
						}
					</Grid>
				</Container>
			</Box>
	)
}