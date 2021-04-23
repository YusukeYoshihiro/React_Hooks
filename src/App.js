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
    label: 'The Color Red',
    value: 'red',
  },
  {
    label: 'The Color Green',
    value: 'green',
  },
  {
    label: 'A Shade of Blue',
    value: 'blue',
  }
];


const App = () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true)
  return (
    <div className="ui container">
      <button onClick={() => setShowDropdown(!showDropdown)}>Toggle Button</button>
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
