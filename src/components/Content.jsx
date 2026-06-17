import { ArrowDown } from '../icons/ArrowDown';
import { ArrowUp } from '../icons/ArrowUp';
import { ContentCard } from './ContentCard';
export const Content = ({ parent, content, contentIDs, contentIndex, contentsCount, id }) => {
    const { title, description, image, alt, links } = content;

    const topLevel = contentIndex === 0;

    return (
        <section key={id} id={id} className="content flex-center">
            <div className="barrier" />
            <ContentCard
                parent={parent}
                title={title}
                description={description}
                image={image}
                alt={alt}
                links={links}
            />
            <div className="barrier" />
        </section>
    )
}