import ExportedImage from "next-image-export-optimizer";
import {BackgroundPage} from "@/components/Background";
import {Box, Container, Grid, Typography, Paper, Stack, Chip} from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import hero from '../public/static/images/pelican-hero.png'
import {Poppins} from 'next/font/google'
import ArrowRight from "@/components/svg/arrowright";
import styles from "../page.module.css"


import Link from "next/link";

interface LeaderCardProps {
	name: string,
	title: string,
	image: string,
	institution: string,
}

export function LeaderCard({name, title, image, institution}: LeaderCardProps) {
	return (
			<Grid container spacing={2} justifyContent={"center"} mb={2}>
				<Grid item xs={7} sm={6} md={5}>
					<Paper sx={{
						padding: 2,
						borderRadius: "50%",
						bgcolor: "primary.light",
					}}>
						<Box sx={{position: "relative", aspectRatio: 1}}>
							<ExportedImage
									src={image}
									alt={name}
									objectFit={"cover"}
									fill={true}
									style={{
										borderRadius: "1rem",
									}}
							/>
						</Box>
					</Paper>
				</Grid>

				<Grid item sx={{pl: 1, display: "flex", flexDirection:"column"}}>
					<Box sx={{m: "auto"}}>
						<Typography variant={"h5"}  color={"primary.dark"}>{name}</Typography>
						<Typography variant={"body1"}>{title}</Typography>
						<Typography variant={"body1"}>{institution}</Typography>
					</Box>
				</Grid>
			</Grid>
	)
}

export function StaffCard({name, title, image, institution}: LeaderCardProps) {
	return (
			<Box sx={{
				borderRadius: "1rem",
				padding: "1rem",
				backgroundColor: "white",
				height: "100%",
				display: "flex",
				flexDirection: "row",
			}}>
				<Paper sx={{
					padding: 1,
					borderRadius: "1rem",
					bgcolor: "primary.light",
				}}>
					<ExportedImage
							src={image}
							alt={name}
							height={150}
							width={150}
							style={{
								borderRadius: "1rem",
							}}
					/>
				</Paper>

				<Box sx={{pl: 1, display: "flex", flexDirection:"column"}}>
					<Box sx={{m: "auto"}}>
						<Typography variant={"h5"} color={"primary.dark"}>{name}</Typography>
						<Typography variant={"subtitle1"}>{title}</Typography>
						<Typography variant={"subtitle1"} lineHeight={1.4}>{institution}</Typography>
					</Box>
				</Box>
			</Box>
	)
}