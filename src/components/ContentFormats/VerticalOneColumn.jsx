export const VerticalOneColumn = ({ image, alt, heading, textContent }) => {
    return (
        <section className="vertical-one-column">
            <div className="vertical-one-column-img-container">
                <img src={image} alt={alt} />
            </div>
            <div className="vertical-one-column-heading-container">
                <h2>{heading}</h2>
            </div>
            <div className="vertical-one-column-text-container">
                {textContent.map((text, i) => {
                    return (
                        <p key={i}>{text}</p>
                    )
                })}
            </div>
        </section>
    )
}