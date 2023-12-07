'use client';
import { useEffect, useState } from 'react';
import { Container, Paper, Link, Typography } from '@mui/material';
import ArrowRight from '@/components/svg/arrowright';

interface Release {
  id: number;
  name: string;
  body: string;
  published_at: string;
  html_url: string;
}

const Releases = () => {
  const [releases, setReleases] = useState<Release[]>([]);
  const [latestRelease, setLatestRelease] = useState<Release>();

  useEffect(() => {
    const fetchReleases = async () => {
      try {
        const response = await fetch('https://api.github.com/repos/PelicanPlatform/pelican/releases');
        const data = await response.json();
        setReleases(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching releases:', error);
      }
    };
    fetchReleases();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const formattedDate = `${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()}`;
    return formattedDate;
  };

  const truncateChanges = (changes: string) => {
    const maxLength = 250;
    if (changes.length <= maxLength) {
      return changes;
    }
    return changes.substring(0, maxLength) + "... Click on release to read more";
  };

  return (
    <Paper elevation={3} style={{backgroundColor:"primary.main"}}>
      {Array.isArray(releases) && (
        <Container style={{ display: 'flex', flexDirection: 'column'}}>
          {releases.slice(0, 4).map((release) => (
            <div key={release.id} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop:"1.1em"}}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <Typography variant="h4" fontWeight="bold" align="left">
                  <Link href={release.html_url} target="_blank" underline="hover" color="inherit">
                    Release
                  </Link>
                </Typography>
                <Typography variant="body1" align="left" fontStyle="italic" color="gray">
                  {formatDate(release.published_at)}
                </Typography>
              </div>
              <Typography variant="h3" fontWeight="bold" align="right">
                <Link href={release.html_url} target="_blank" underline="hover">
                  {release.name}
                </Link>
              </Typography>
            </div>
          ))}
        </Container>
      )}
      <Link href={"https://github.com/PelicanPlatform/pelican/releases"} style={{margin:"1em"}} underline='hover' color="inherit">
          <Typography variant={"h6"} sx={{display: "inline", paddingRight: ".2rem"}}>
              See More
          </Typography>
          <ArrowRight height={18} width={24} fill={"currentColor"}/>
      </Link>
    </Paper>
  );
  };

export default Releases;