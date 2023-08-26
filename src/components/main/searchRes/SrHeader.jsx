import { useEffect, useRef } from 'react'
import iconPlay from './icon-play.svg'

const SrHeader = props => {
    const audioRef = useRef()
    const {word, phonetic, audio} = props

    useEffect(() => {
        audioRef.current.load()
    }, [audio])

    const playHandler = () => {
        audioRef.current.play()
    }

    return (
        <>
            <audio ref={audioRef}>
                <source src={audio} />
            </audio>

            <div className="sr-header">
                <div className="sr-word-phonetic">
                    <div className="sr-word">{word}</div>
                    <div className="sr-phonetic">{phonetic}</div>
                </div>
                <div className='right'>
                    <div className="sr-audio">
                        <img src={iconPlay} alt='Play' onClick={playHandler} />
                        {/* {audio} */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default SrHeader