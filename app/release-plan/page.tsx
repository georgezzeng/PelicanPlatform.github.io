import { Box, Container, Typography, Divider, Paper, Table, TableCell, TableRow, TableBody } from "@mui/material";

export default function Page() {
    const RELEASE_SCHEDULE = {
        release_name: "7.9.0",
        pre_release_date: "2024-06-06",
        release_date: "2024-06-13",
    }
    
    return( 
        <Box pt={4}>
            <Container maxWidth={"md"}>
                <Typography variant="h3" sx={{fontWeight: "600"}}>Pelican Release Plan</Typography>
                <Divider sx={{marginBottom:"1em"}}/>
                <Typography variant="body1" component="p">
                    Pelican makes approximately monthly feature releases containing all the latest work of the development team.
                <br/> <br/>
                    On the first Thursday of the month, the Pelican will release a pre-release version. 
                    This can be identified as version `X.Y.Z*` such as `7.6.0`. 
                    This version will then be tested by the integration team and a feature release will occur once their approval is obtained, 
                    ideally a week later. Further patches to that release will be backported as needed if significant bugs are found and will 
                    increment the release number accordingly (e.g. `7.6.1`.)
                </Typography>
                <Paper sx={{padding: "1em", marginTop: "1em", backgroundColor: 'rgba(207, 228, 255)'}}>
                    <Typography variant="h4">Next Release: {RELEASE_SCHEDULE.release_name}</Typography>
                    <Divider sx={{marginBottom:"1em"}}/>
                    <Table sx={{display:"flex"}}>
                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    <Typography variant="h6" fontWeight="bold">
                                        Pre-release:
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography variant="h6" align="left">
                                        {RELEASE_SCHEDULE.pre_release_date}
                                    </Typography>
                                </TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell>
                                    <Typography variant="h6" fontWeight="bold">
                                        Release:
                                    </Typography>    
                                </TableCell>
                                <TableCell>
                                    <Typography variant="h6">
                                        {RELEASE_SCHEDULE.release_date}
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Paper>
            </Container>
        </Box>
    );
}
