export const KnowledgeCard = ({ boxNumber, items }) => {
    return (
        <div className="KST" id={`knowledge_box_${boxNumber}`}>
            <ul>
                {items.map((item, i) => {
                    return <li key={`box${boxNumber}Item${i}`}>{item}</li>
                })}
            </ul>
        </div>
    )
}