import React, { useState } from 'react'
import Dropdown from './components/Dropdown';
// import Search from './components/Search';

// const items = [
//   {
//     title: 'What is React?',
//     content: 'React is a front end javascript framework',
//   },
//   {
//     title: 'Why use React?',
//     content: 'React is a favorite JS library among engineers',
//   },
//   {
//     title: 'How do you use React?',
//     content: 'You use React by creating components',
//   }
// ];

const options = [
  {
    label: 'The Main Color is Red',
    value: 'red',
  },
  {
    label: 'The Second Color is Green',
    value: 'green',
  },
  {
    label:'The Third Color is Skyblue',
    value: 'blue',
  }
];


const App = () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(false);
  const label = showDropdown ? 'X Close Content' : 'Open Content'
  return (
    <div className="ui container" style={{marginTop: "10px"}}>
      <button onClick={() => setShowDropdown(!showDropdown)}>{label}</button>
      {showDropdown ?
        <div>
          <Dropdown
            selected={selected}
            onSelectedChange={setSelected}
            options={options}
          />
        </div> : null
      }
    </div>
  )
}

export default App
