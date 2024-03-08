// src/app/release/[...slug]/page.tsx
'use client'
import { Container, Typography, Divider } from "@mui/material";
import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { GitHubReleaseData } from "../../../utils/github"; // Assuming this is correctly defined



// Render the release data using Material UI components and React Markdown for markdown content
const Page = ({ params }: { params: { slug: string[] } }) => {
  const apiUrl = `https://api.github.com/repos/PelicanPlatform/pelican/releases/tags/${params.slug}`;
  const [releaseData, setReleaseData] = useState<GitHubReleaseData | null>(null);
  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setReleaseData(data))
      .catch((error) => console.error("Failed to fetch release data", error));
  }, [apiUrl]);
  return (
    <Container sx={{
      marginTop: "2rem",
      marginBottom: "2rem",
    }}>
      <Typography variant="h2" component="h1">
        {params.slug}
      </Typography>
      <Divider />
      <Markdown 
        rehypePlugins={[rehypeRaw]}
        components={{
          h1: ({node, children}) => <Typography variant={"h3"}>{children}</Typography>,
          h2: ({node, children}) => <Typography variant={"h4"}>{children}</Typography>,
          h3: ({node, children}) => <Typography variant={"h5"}>{children}</Typography>,
          h4: ({node, children}) => <Typography variant={"h6"}>{children}</Typography>,
          h5: ({node, children}) => <Typography variant={"h6"}>{children}</Typography>,
          h6: ({node, children}) => <Typography variant={"h6"}>{children}</Typography>,
          p: ({node, children}) => <Typography variant={"body1"}>{children}</Typography>,
          a: ({children, href}) => <a style={{color: "#0885ff"}} href={href}>{children}</a>,
        }}
      >
        {releaseData?.body || ""}
      </Markdown>
    </Container>
  );
};

export default Page;
