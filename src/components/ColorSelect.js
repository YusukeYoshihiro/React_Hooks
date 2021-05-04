import React,{useState} from 'react';
import ColorDropdown from './ColorDropdown'

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

const ColorSelect = () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(false);
  const label = showDropdown ? 'X Close Content' : 'Open Content'
  return (
    <div className="ui container" style={{marginTop: "10px"}}>
      <button onClick={() => setShowDropdown(!showDropdown)}>{label}</button>
      {showDropdown ?
        <div>
          <ColorDropdown
            selected={selected}
            onSelectedChange={setSelected}
            options={options}
          />
        </div> : null
      }
    </div>
  )
}

export default ColorSelect






