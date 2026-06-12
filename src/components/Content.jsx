import { ArrowDown } from '../icons/ArrowDown';
import { ArrowUp } from '../icons/ArrowUp';
import { ContentCard } from './ContentCard';
export const Content = ({ parent, content, contentIDs, contentIndex, contentsCount, id }) => {
    const { title, description, image, alt, links } = content;

    const topLevel = contentIndex === 0;

    return (
        <section key={id} id={id} className="content flex-center">
            {/* <div className={topLevel ? "title-container flex-center" : "arrow-container arrow-up-container flex-center"}>
                {!topLevel ? (
                    <a href={`#${contentIDs[contentIndex - 1]}`}>
                        <ArrowUp fillColour="#F8F8FF" />
                    </a>
                ) : (
                    <h1>{parent}</h1>
                )}
            </div> */}
            <div className="barrier" />

            <ContentCard
                parent={parent}
                title={title}
                description={description}
                image={image}
                alt={alt}
                links={links}
            />

            {/* <div className="arrow-container flex-center">
                {contentIndex < contentsCount - 1 && (
                    <a href={`#${contentIDs[contentIndex + 1]}`}>
                        <ArrowDown fillColour="#F8F8FF" />
                    </a>
                )}
            </div> */}
            <div className="barrier" />
        </section>
    )
}