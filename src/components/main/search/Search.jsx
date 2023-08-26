import search from './icon-search.svg'
import { useSearch } from './use-Search'

const Search = () => {
    const {style, focusHandler, blurHandler, keyUpHandler, searchHandler, searchString, setSearchString, error} = useSearch()

    return (
        <>
            <section className="search" style={style}>
                <div className='input'>
                    <input
                        className='input'
                        type="text"
                        placeholder='Search for any word...'
                        onFocus={focusHandler}
                        onBlur={blurHandler}
                        value={searchString}
                        onChange={e => setSearchString(e.target.value)}
                        onKeyUp={e => keyUpHandler(e)}
                        />
                    <img src={search} alt='search' onClick={searchHandler} />
                </div>
            </section>
            {error && <p className='error'>Whoops, can’t be empty...</p>}
        </>
    )
}

export default Search