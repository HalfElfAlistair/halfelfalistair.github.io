export const ProjectCard = ({ id, path, title, image, imageAlt }) => {
    return (
        <div className="project-box" id={id}>
            <a href={`https://github.com/HalfElfAlistair/${path}.git`} target="_blank" rel="noopener" className="project-tile">
                <p>{title}</p>
                <img src={image} alt={imageAlt} />
            </a>
        </div>
    )
}