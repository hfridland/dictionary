import { useSelector } from 'react-redux'
import { selectSearch } from '../../../features/search/search-slide'
import SrHeader from './SrHeader'
import SrMeaning from './SrMeaning'
import { RootState } from 'store'
import { ResData } from 'types'

const SearchRes = () => {
  function findAudio(resData: ResData): string {
    if (!result) return ''
    for (let phonetic of resData.phonetics) {
      if (phonetic.audio) {
        return phonetic.audio
      }
    }
    return ''
  }

  const { status, error, result } = useSelector((state: RootState) =>
    selectSearch(state)
  )

  const audio = result ? findAudio(result) : ''

  console.log('result', result)

  return (
    <>
      {status === 'loading' && <div className="loading">Loading...</div>}
      {error !== null && <div className="requestError">{error}</div>}
      {result !== null && error === null && (
        <div>
          <SrHeader
            word={result.word}
            phonetic={result.phonetic}
            audio={audio}
          />
          {result.meanings.map((meaning, index) => (
            <SrMeaning
              key={index}
              partOfSpeech={meaning.partOfSpeech}
              definitions={meaning.definitions}
              synonyms={meaning.synonyms}
              antonyms={meaning.antonyms}
            />
          ))}
        </div>
      )}
    </>
  )
}

export default SearchRes
