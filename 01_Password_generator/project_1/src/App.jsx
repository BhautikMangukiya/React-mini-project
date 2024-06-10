import { useState, useCallback, useEffect, useRef} from "react";

function App() {
  const [length, setlength] = useState(8); // hooks
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [CharAllowed, setcharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // useRef hook to reference the input field for password
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    // Function to generate a password

    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    // If numbers are allowed, include them in the character set
    if (numberAllowed) str += "0123456789";     
    
    // If special characters are allowed, include them in the character set
    if (CharAllowed) str += "!@#$%&*";            

    // If special characters are allowed, include them in the character set
    for (let i = 1; i <= length; i++) {           
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    // Update the password state 
    setPassword(pass); 
  }, [length, numberAllowed, CharAllowed,  setPassword ]);  //  Dependencies

  // useEffect to run the password generator whenever the dependencies change
  useEffect(()=> {
    passwordGenerator() 
  }, [length, numberAllowed, CharAllowed, passwordGenerator])


  // Function to copy the password to the clipboard
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,20);
    window.navigator.clipboard.writeText(password)
  },[password])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className="text-white text-center my-3">Password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          
        {/* Input field to display the generated password */}
          <input
            type="text"
            value={password}          // Generator password  pass
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
            ref={passwordRef} 
          />

          <button 
            onClick={copyPasswordToClipboard}
            className="outline-none bg-blue-600 text-white px-3 py-0.5 shrink-0">
            Copy
          </button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={5}
              max={20}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setlength(e.target.value);
              }}
            />
            <label>length: {length}</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">numbers</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
             type="checkbox" 
             defaultChecked={CharAllowed}
             id="characterInput"
             onChange={()=> {
              setcharAllowed((prev) => !prev);
             }}
            />

            <label htmlFor="characterInput">characters</label>
          </div>

        </div>
      </div>
    </>
  ); 
}

export default App;
