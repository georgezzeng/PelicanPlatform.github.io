import {getPresentations} from "@/utils/presentations";


export default async function Page({ params }: { params: { slug: string[] } }) {
    const presentations = await getPresentations();

    console.log(" presentations", presentations)
    return (
        <>
            <h1> presentations page</h1>
        </>

    )
}