import {Box, Container, Typography} from "@mui/material";
import Link from "next/link";
import Balancer from "react-wrap-balancer";

interface PresentationCardProps {
    href: string;
    presentation: {
        title: string;
        excerpt: string;
        authors: string;
        published_date: string;
        image: {
            path: string;
            alt: string;
        };
    };
}

interface PresentationProps {
    title: string,
    description: string,
    authors: string,
    published_date: string,
    link: string,
    image: {
        path: string;
        alt: string;
    }
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
                        src={presentation.image.path}
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
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        sx={{ marginBottom: 2 }}
                    >
                        By {presentation.authors}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        sx={{ marginBottom: 2 }}
                    >
                        {presentation.published_date}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        sx={{
                            marginBottom: "auto",
                        }}
                    >
                        {presentation.excerpt}
                    </Typography>
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
                                 link,
                                 image,}: PresentationProps) => {
    return (
        <Container maxWidth="md">
            <Box pt={6}>
                {/* Title */}
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
                        <Typography variant="h5">By {authors}</Typography>
                        <Typography variant="h5">
                            Published on {published_date}
                        </Typography>
                    </Box>
                </Box>

                {/* Image */}
                <Box pt={4}>
                    <img
                        style={{
                            maxWidth: "100%",
                            height: "auto",
                            borderRadius: "8px",
                        }}
                        src={image.path}
                        alt={image.alt}
                    />
                </Box>

                {/* Description */}
                <Box pt={4}>
                    <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
                        {description}
                    </Typography>
                </Box>

                {/* External Link */}
                <Box pt={4}>
                    <Typography variant="h6">
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "#0885ff" }}
                        >
                            View Full Presentation
                        </a>
                    </Typography>
                </Box>
            </Box>
        </Container>
    );
};
