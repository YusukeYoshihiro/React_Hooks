import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
  const [term, setTerm] = useState('programming');
  const [debounceTerm, setDebounceTerm] = useState(term);
  const [results, setResults] = useState([]);
  // console.log(results);

  // Implement timer for typing characters as debounce 
  useEffect(() => {
    const timerId = setTimeout(()=>{
      setDebounceTerm(term)
    }, 1000)
    return () => {
      clearTimeout(timerId)
    };
  }, [term])

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: debounceTerm,
        }
      });
      setResults(data.query.search);
    };
    search();
  }, [debounceTerm])
  

  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">
            {result.title}
          </div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    )
  })


  return (
    <div className="ui container">
      <div className="ui form">
        <div className="field">
          <label className="sr_only">Enter Search Term</label>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="input"
            placeholder="Enter Search Term" />
        </div>
      </div>
      <div className="ui celled list">
        {renderedResults}
      </div>
    </div>
  )
}

export default Search
