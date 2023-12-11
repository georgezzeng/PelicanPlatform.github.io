import {Box, Container, Grid} from '@mui/material';
import {team} from "./team.json"
import {LeaderCard, StaffCard} from "./cards";

export default function Page() {

	const leadership = team.filter((member) => member.leadership ?? false )
	const staff = team.filter((member) => !member.leadership ?? false )

	return (
			<Box pt={6}>
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