export const SkillsCard = ({ heading, skills }) => {
    return (
        <div className="skills-card">
            <div className="skills-card-heading-container">
                <div className="heading-bullet" />
                <h3>{heading}</h3>
            </div>

            <div className="skills-container">
                {skills.map((skill, i) => {
                    return (
                        <div key={i} className="skill">
                            <p>{skill}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}