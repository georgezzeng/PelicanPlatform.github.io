import { Presentation } from "@/components/Presentation"; // Adjust the path as needed
import { getPresentations } from "@/utils/presentations"; // Ensure path is correct
import { Box, Container, Typography } from "@mui/material";

async function getPresentationBySlug(slug: string[]) {
    const presentations = await getPresentations();
    return presentations.find(
        (presentation) =>
            presentation.slug.join("-") === slug.join("-")
    );
}

export default async function Page({ params }: { params: { slug: string[] } }) {
    const presentation = await getPresentationBySlug(params.slug);

    if (!presentation) {
        return (
            <Container>
                <Box textAlign="center" pt={6}>
                    <Typography variant="h3">Presentation Not Found</Typography>
                </Box>
            </Container>
        );
    }

    return (
        <Presentation
            title={presentation.title}
            description={presentation.description}
            authors={presentation.authors}
            published_date={presentation.published_date}
            path={presentation.path} // Pass the public HTML URL
            thumb={presentation.thumb}
        />
    );
}
