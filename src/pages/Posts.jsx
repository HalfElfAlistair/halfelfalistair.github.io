import { Content } from '../components/Content';
import { Heading } from '../components/Heading';
import figmaScreenshot1 from '../images/figma-screenshot-1.png';
export const Posts = () => {
    const articles = [
        {
            title: "Website Redesign",
            id: "website-redesign",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam elementum in massa ut aliquam. Proin sodales luctus lacus quis commodo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam elementum in massa ut aliquam. Proin sodales luctus lacus quis commodo.",
            image: figmaScreenshot1,
            alt: "Lorem ipsum dolor sit amet",
            links: [
                `https://halfelfalistair.github.io/posts/website-redesign`
            ]
        }
    ]
    const articlesCount = articles.length;
    const articleIDs = articles.map(article => article.id);

    return (
        <main className="posts">
            <Heading heading="Posts" />
            {articles.map((article, i) => {
                const { id } = article;
                return (
                    <Content
                        key={id}
                        parent="Posts"
                        content={article}
                        contentIDs={articleIDs}
                        contentIndex={i}
                        contentsCount={articlesCount}
                        id={id}
                    />
                )
            })}
        </main>
    )
}