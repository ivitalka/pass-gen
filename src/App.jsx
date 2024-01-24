import './App.scss'
import React, {useEffect, useState} from "react";
import {InputBox} from "./components/InputBox";
import {PassLength} from "./components/PassLength";
import {PassIndicator} from "./components/PassIndicator";
import {Option} from "./components/Option";
import {characters} from "./utils";

function App() {

    const [lowercase, setLowercase] = useState(true)
    const [uppercase, setUppercase] = useState(true)
    const [numbers, setNumbers] = useState(false)
    const [symbols, setSymbols] = useState(false)
    const [duplicate, setDuplicate] = useState(false)
    const [spaces, setSpaces] = useState(false)

    const [length, setLength] = useState(15)
    const [value, setValue] = useState('')


    const generatePass = () => {
        let staticPassword = ''
        let randomPassword = ''
        if (lowercase) {
            staticPassword += characters.lowercase
        } if (uppercase) {
            staticPassword +=characters.uppercase
        } if (numbers) {
            staticPassword +=characters.numbers
        } if (symbols) {
            staticPassword += characters.symbols
        } if (spaces) {
            staticPassword = `  ${staticPassword}  `
        }
        for (let i = 0; i < length; i++) {
            let randomChar = staticPassword[Math.floor(Math.random() * staticPassword.length)]
            if (duplicate) {
                !randomPassword.includes(randomChar) || randomChar === '' ? randomPassword += randomChar : i--
            } else {
                randomPassword += randomChar
            }
        }
        setValue(randomPassword)
    }

    useEffect(() => {
        generatePass()
    }, [lowercase, uppercase, numbers, symbols, duplicate, spaces, length])

    return (
        <div className="container">
          <h2>Pass Generator</h2>
          <div className="wrapper">
             <InputBox value={value}/>
            <PassIndicator value={length}/>
                <PassLength length={length} setLength={setLength}/>
              <div className="pass-settings">
                  <label>Password Settings</label>
                  <ul className="options">
                      <Option id={'lowercase'} state={lowercase} setState={setLowercase}>Lowercase (a-z)</Option>
                      <Option id={'uppercase'} state={uppercase} setState={setUppercase}>Uppercase (A-Z)</Option>
                      <Option id={'numbers'} state={numbers} setState={setNumbers}>Numbers (0-9)</Option>
                      <Option id={'symbols'} state={symbols} setState={setSymbols}>Symbols (!-$^+)</Option>
                      <Option id={'exc-duplicate'} state={duplicate} setState={setDuplicate}>Exclude Duplicate</Option>
                      <Option id={'spaces'} state={spaces} setState={setSpaces}>Include Spaces</Option>
                  </ul>
              </div>
              <button className="generate-btn" onClick={() => generatePass()}>Generate Password</button>
          </div>
      </div>
  )
}

export default App