const SrMeaning = props => {
    const {partOfSpeech, definitions, synonyms, antonyms} = props

    return (
        <div className="sr-meaning">
            <div className="sr-part-of-speech">
                {partOfSpeech}
                <div className="line-container">
                    <div className="line"></div>
                </div>
            </div>
            <div className="part-header">Meaning</div>
            <ul className="definitions">
                {definitions.map((definition, index) => <li key={index}><p>{definition.definition}</p></li>)}
            </ul>
            {synonyms.length > 0 && (
                <div className="synonyms">
                    <div className="part-header">Synonyms</div>
                    <div className="synonyms-data">{synonyms.join(' ')}</div>
                </div>
            )}
            {antonyms.length > 0 && (
                <div className="synonyms">
                    <div className="part-header">Antonyms</div>
                    <div className="synonyms-data">{antonyms.join(' ')}</div>
                </div>
            )}
        </div>
    )

}

export default SrMeaning