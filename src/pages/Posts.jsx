import { Content } from '../components/Content';
import { Heading } from '../components/Heading';
import figmaScreenshot1 from '../images/figma-screenshot-1.png';
export const Posts = () => {
    const articles = [
        {
            title: "Website Redesign",
            id: "website-redesign",
            description: "An article explaining the redesign process for this site, where I learned to use Figma as an exploration and guidance tool.",
            image: figmaScreenshot1,
            alt: "An image of some empty design layouts for my site, from figma.",
            links: [
                `https://halfelfalistair.netlify.app/posts/website-redesign-with-figma`
            ]
        }
    ]
    const articlesCount = articles.length;
    const articleIDs = articles.map(article => article.id);

    return (
        <main className="posts">
            <Heading heading="Posts" />
            <section className="cards-Layout">
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
            </section>
        </main>
    )
}