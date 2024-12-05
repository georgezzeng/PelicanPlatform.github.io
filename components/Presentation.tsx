import {Box, Container, Typography} from "@mui/material";
import Link from "next/link";
import Balancer from "react-wrap-balancer";

interface PresentationCardProps {
    href: string;
    presentation: PresentationProps;
}

export interface PresentationProps {
    title: string;
    description: string;
    authors: string;
    published_date: string;
    path: string;
    thumb: string;
    excerpt: string;
    image: {
        path: string;
        alt: string;
    };
}


export const PresentationCard = ({ href, presentation }: PresentationCardProps) => {

    const cardStyle = {
        transition: "box-shadow 0.2s",
        boxShadow: "grey 1px 1px 3px",
        "&:hover": { boxShadow: "grey 1px 1px 6px" },
        borderRadius: 4,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        height: "100%",
    };

    return (
        <Box sx={cardStyle}>
            <Link href={href}>
                <Box>
                    <img
                        style={{
                            width: "100%",
                            height: "200px",
                            objectFit: "cover",
                        }}
                        src={presentation.thumb}
                        alt={presentation.image.alt}
                    />
                </Box>
                <Box p={2} display="flex" flexDirection="column" flexGrow={1}>
                    <Typography
                        variant="h6"
                        sx={{ fontWeight: "bold", marginBottom: 1 }}
                    >
                        {presentation.title}
                    </Typography>
                    {/*<Typography*/}
                    {/*    variant="body2"*/}
                    {/*    color="textSecondary"*/}
                    {/*    sx={{ marginBottom: 2 }}*/}
                    {/*>*/}
                    {/*    By {presentation.authors}*/}
                    {/*</Typography>*/}
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        sx={{ marginBottom: 2 }}
                    >
                        Posted on {new Date(presentation.published_date).toLocaleDateString()}
                    </Typography>
                    {/*<Typography*/}
                    {/*    variant="body2"*/}
                    {/*    color="textSecondary"*/}
                    {/*    sx={{*/}
                    {/*        marginBottom: "auto",*/}
                    {/*    }}*/}
                    {/*>*/}
                    {/*    {presentation.excerpt}*/}
                    {/*</Typography>*/}
                </Box>
            </Link>
        </Box>
    );
};


export const Presentation = ({
                                 title,
                                 description,
                                 authors,
                                 published_date,
                                 path,
                                 thumb,
                             }: PresentationProps) => {
    return (
        <Container maxWidth="md">
            <Box pt={6}>
                <Box textAlign="center" pb={2}>
                    <Typography variant="h3">
                        <Balancer>{title}</Balancer>
                    </Typography>
                    <Box
                        height="1rem"
                        borderRadius="10px"
                        bgcolor="primary.main"
                        mt={2}
                    />
                    <Box pt={1}>
                        {/*<Typography variant="h5">By {authors}</Typography>*/}
                        <Typography variant="h5">
                            Published on {new Date(published_date).toLocaleDateString()}
                        </Typography>
                    </Box>
                </Box>

                <Box
                    mt={4}
                    sx={{
                        position: "relative",
                        overflow: "hidden",
                        paddingTop: "56.25%", // 16:9 aspect ratio
                    }}
                >
                    <iframe
                        src={`${path}/embed`}
                        title="Interactive Presentation Viewer"
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            border: "none",
                        }}
                        allowFullScreen
                    ></iframe>
                </Box>

                {/*<Box pt={4}>*/}
                {/*    <Typography variant="body1" sx={{ lineHeight: 1.6 }}>*/}
                {/*        {description}*/}
                {/*    </Typography>*/}
                {/*</Box>*/}

                <Box pt={4} display="flex" justifyContent="center">
                    <Typography variant="h6" >
                        <a
                            href={path}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "#0885ff" }}
                        >
                            View on Figshare
                        </a>
                    </Typography>
                </Box>
            </Box>
        </Container>
    );
};