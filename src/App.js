import React, { useState, useEffect } from 'react';
import './style.css';
import InputOutput from './Components/InputOutput/InputOutput';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';

let count = 0;

export default function App() {
  const [all, setAll] = useState([]);
  const [text, setText] = useState('');
  const [color, setColor] = useState('black');

  function itemClicked(e, newText, newColor, index) {
    setText(newText);
    setColor(newColor);

    let newAll = [];
     for (let i = 0; i < all.length; i++) {
       const item = all[i];
       
       if (item.key !== index) {   
        newAll = newAll.concat(item);  
        //newAll.push(all[i]);
       console.log(item.key)
       }
     }
     setAll(newAll);
  }

 // let newAll = [];
    // for (let i = 0; i < all.length; i++) {
    //   const item = all[i];
    //   if (item.key !== index) {
    //     console.log(item);
    //     newAll = newAll.concat(item);
    //   }
    // }
    // setAll(newAll);



  function savePressed(newText, newColor) {
    const textStyles = {
      color: color,
      top: '50px',
      display: 'block',
    };

    const index = count.toString();
    count++;
    setAll(
      all.concat(
        <li
          key={index}
          style={textStyles}
          onClick={(e) => itemClicked(e, newText, newColor, index)}
        >
          {text}
        </li>
      )
    );
  }

  return (
    <div>
      <Navbar />
      <Sidebar all={all} />
      <InputOutput
        savePressed={savePressed}
        color={color}
        setColor={setColor}
        text={text}
        setText={setText}
      />
    </div>
  );
}
