import { Metadata } from "next";

type Props = {
    params: {
        blogId: string;
    }
}

export const generateMetadata = ({ params }: Props): Metadata => {
    return {
        title: `Blog ${params?.blogId}`
    }
};

export default function BlogPost({ params }: Props) {
    return (
        <h3>Blog Post: {params?.blogId}</h3>
    )
}