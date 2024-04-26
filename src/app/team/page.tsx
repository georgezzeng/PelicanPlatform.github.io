import {Box, Container, Grid} from '@mui/material';
import {LeaderCard, StaffCard} from "./cards";
import React from 'react';
import { loadStaffData } from '../../utils/loadStaffData';

  
export default function Page() {
	const team = loadStaffData();
	const promoted = 
		team.filter((member) => ( member.promoted ?? false ) && member.organizations.includes("pelican") )
			.sort((a, b) => (a.pelican?.weight || 0) - (b.pelican?.weight || 0));
	const staff = 
		team.filter((member) => (!member.promoted ?? false) && member.organizations.includes("pelican") )
			.sort((a, b) => (a.pelican?.weight || 0) - (b.pelican?.weight || 0));

	return (
		<Box pt={6}>
			<Container maxWidth={"xl"}>
				<Grid container justifyContent={"center"}>
					<Grid item xs={12} sm={6} lg={5}>
						<LeaderCard {...promoted[0]} />
					</Grid>
				</Grid>
				<Grid container justifyContent={"center"}>
					{promoted.slice(1, 3).map((member) => {
						return (
							<Grid key={member.name} item xs={12} sm={6} lg={5}>
								<LeaderCard {...member} />
							</Grid>
						);
					})}
				</Grid>
				<Grid container justifyContent={"center"}>
					{staff.map((member) => (
						<StaffCard key={member.name} {...member} />
					))}
				</Grid>
			</Container>
		</Box>
	);
}