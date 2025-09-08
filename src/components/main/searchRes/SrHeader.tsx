import { useEffect, useRef } from 'react'
import iconPlay from './icon-play.svg'

interface SrHeaderProps {
  word: string
  phonetic: string
  audio: string
}

const SrHeader = ({ word, phonetic, audio }: SrHeaderProps) => {
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    audioRef.current?.load()
  }, [audio])

  const playHandler = () => {
    audioRef.current?.play()
  }

  return (
    <>
      <audio ref={audioRef}>
        <source src={audio} />
      </audio>

      <div className="sr-header">
        <div className="sr-word-phonetic">
          <h1 className="sr-word">{word}</h1>
          <div className="sr-phonetic">{phonetic}</div>
        </div>
        <div className="right">
          <div className="sr-audio">
            <img src={iconPlay} alt="Play" onClick={playHandler} />
            {/* {audio} */}
          </div>
        </div>
      </div>
    </>
  )
}

export default SrHeader
