import React, { useRef } from 'react'

const App = () => {
  const [state,setState] = useState(0);

  const inputRef = useRef(null);
  

  const handleClick = () => {
 //console.log(inputRef.current.value);
 inputRef.current.focus();
  }

  const handleChange = () =>{
    inputRef.current.value = "Hello world";
    setState(state + 1);
  }
  console.log('rendering component');
  return (
    <div>
      <input
      type="text"
      ref={inputRef}/>
      <button onClick={handleClick}>Foucs Input</button>
      <button onClick={handleChange}>Change Value</button>
    </div>
  )
}

export default App;
