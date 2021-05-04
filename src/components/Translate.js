import React, { useState } from 'react';
import Convert from './Convert';
import TranslateDropdown from './TranslateDropdown';

const options = [
  {
    label: 'Japanese',
    value: 'ja'
  },
  {
    label: 'Korean',
    value: 'ko'
  },
  {
    label: 'English',
    value: 'en'
  },
  {
    label: 'Spanish',
    value: 'es'
  },
  {
    label: 'Italian',
    value: 'it'
  },
  {
    label: 'Portuguese',
    value: 'pt'
  },
  {
    label: 'Chinese',
    value: 'zh'
  },
]


const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState('')

  return (
    <div>
      <div className="ui form" style={{marginTop:"30px"}}>
        <div className="field">
          <label>Enter Text</label>
          <input value={text} onChange={(e) => setText(e.target.value)} />
        </div>
      </div>
      <TranslateDropdown
        label="Select Language"
        selected={language}
        onSelectedChange={setLanguage}
        options={options}
      />
      <hr/>
      <h3 className="ui header">Output</h3>
      <Convert text={text} language={language}/>
    </div>
  )
}

export default Translate
