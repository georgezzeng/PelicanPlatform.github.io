import {getTree, getPaths, getRawFile} from "./github"
import fs from "fs";
import matter from "gray-matter";

type website = "htcondor" | "path" | "osg" | "chtc" | "pelican"
type presentation_type = "presentations";

interface Image {
    path: string;
    alt: string;
}

export interface Presentation {
    id: number;
    title: string;
    description: string;
    authors: string;
    published_date: string;
    link: string;
    thumb: string;
    type: presentation_type;
    publish_on: website[];
    image: Image;
    excerpt: string;
}

export interface BackendPresentation extends Presentation {
    slug: string[];
    path: string;
}

export async function getPresentations(): Promise<BackendPresentation[]> {
    try {
        const response = await fetch(
            "https://api.figshare.com/v2/collections/6881710/articles"
        );

        if (!response.ok) {
            throw new Error(`Failed to fetch Figshare articles: ${response.statusText}`);
        }

        const articles = await response.json();
        console.log("Presentations fetched from Figshare:", articles);

        return articles.map((article: any) => {
            return {
                id: article.id,
                path: article.url_public_html || article.url,
                slug: article.title
                    .toLowerCase()
                    .replace(/[\s:/()]+/g, "-")
                    .split("/"),
                published_date: article.published_date || "Unknown date",
                description: article.description || "No description available.",
                title: article.title,
                authors: article.authors?.map((author: any) => author.full_name).join(", ") || "",
                link: article.url_public_html || article.url,
                thumb: article.thumb || "",
                publish_on: ["pelican"],
                type: "presentations",
                image: {
                    path: article.thumb || "",
                    alt: article.title,
                },
                excerpt: (article.description || "No description available.").slice(0, 150) + "...",
            };
        });
    } catch (error) {
        console.error("Error fetching presentations from Figshare:", error);
        return [];
    }
}