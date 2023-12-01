'use client';
import { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Link, Typography } from '@mui/material';

interface Release {
  id: number;
  name: string;
  body: string;
  published_at: string;
  html_url: string;
}

const Releases = () => {
  const [releases, setReleases] = useState<Release[]>([]);

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
    <div style={{ margin: '20px' }}>
      <h1 style={{ marginBottom: '20px' }}>Pelican Releases</h1>
      <TableContainer component={Paper} style={{ maxWidth: '1000px', margin: '20px' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="subtitle1" fontWeight="bold">Version</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle1" fontWeight="bold">Changes</Typography>
              </TableCell>
              <TableCell style={{ width: '200px' }}>
                <Typography variant="subtitle1" fontWeight="bold">Published At</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {releases.map((release) => (
              <TableRow key={release.id}>
                <TableCell>
                  <Link href={release.html_url} target="_blank">{release.name}</Link>
                </TableCell>
                <TableCell>
                  <ul>
                    {truncateChanges(release.body).split('*').map((item, index) => {
                      if (index !== 0 && item.trim() !== '') {
                        const pullRequestLink = item.split('by')[1]?.trim().split('in')[0]?.trim();
                        return (
                          <li key={index}>
                            <Link href={pullRequestLink} target="_blank">{item.trim()}</Link>
                          </li>
                        );
                      }
                      return null;
                    })}
                  </ul>
                </TableCell>
                <TableCell>
                  <Typography variant="body1">{formatDate(release.published_at)}</Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Releases;