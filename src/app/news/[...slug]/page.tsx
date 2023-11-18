import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import {Box, Container, Typography} from "@mui/material";
import Balancer from "react-wrap-balancer";

import {getArticles, filterArticles, getArticle} from "@/utils/articles";
import StyledBlock from "@/components/StyledBlock";
import {Article} from "@/components/Article";

export async function generateStaticParams() {
	const articles = await getArticles("CHTC", "Articles", "main")
	return filterArticles(articles, "pelican", "news")
}

async function getMarkdownFile(slug: string[]){
	return getArticle("CHTC", "Articles", slug.join("-") + ".md", "main")
}

export default async function Page({ params }: { params: { slug: string[] } }) {
	const markdownData = await getMarkdownFile(params.slug)

	return (
		<Article {...markdownData} />
	)
}