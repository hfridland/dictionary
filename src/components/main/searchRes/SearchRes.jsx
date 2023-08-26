import { useSelector } from "react-redux";
import { selectSearch } from "../../../features/search/search-slide";
import SrHeader from "./SrHeader";
import SrMeaning from "./SrMeaning";

const SearchRes = () => {

    function findAudio() {
        if (!result) return ''
        for(let srItem of result) {
            for(let phonetic of srItem.phonetics) {
                if (phonetic.audio) return phonetic.audio
            }
        }
        return ''
    }

    const { status, error, result } = useSelector(state => selectSearch(state));
    const audio = findAudio()

    return (
        <>
            {status === 'loading' && <div className="loading">Loading...</div>}
            {error !== null && <div className="requestError">{error.message}</div> }
            {result !== null && error === null && (
            <div>
                <SrHeader word={result[0].word} phonetic={result[0].phonetic} audio={audio} />
                {result[0].meanings.map((meaning, index) =>
                    <SrMeaning
                        key={index}
                        partOfSpeech={meaning.partOfSpeech}
                        definitions={meaning.definitions}
                        synonyms={meaning.synonyms}
                        antonyms={meaning.antonyms}
                        />)}
            </div>
            )}
        </>
    )
}

export default SearchRes