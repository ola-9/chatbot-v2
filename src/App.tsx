import { useState } from 'react';
import state from './state';


function App() {
  
  const start = state.find((item) => {
    return item.id === 'welcome'
  });
  const [currState, setCurrState] = useState(start);
  const [messages, setMessages] = useState([start?.message])


  const handleClick = (nextState) => {
    // console.log(nextState);
    const res = state.find((item) => item.id === nextState);
    setMessages([...messages, res?.message]);
    // console.log(res);
    setCurrState(res);
  }

  return (
    <>
      <div>
        {messages.map((item) => (
          <p>{ item}</p>
        ))}
        {currState.buttons.map((btn) => (
          <button
            onClick={() => handleClick(btn.next_state_id)}
          >
            {btn.text}
          </button>
        ))}

      </div>
    </>
  )
}

export default App
