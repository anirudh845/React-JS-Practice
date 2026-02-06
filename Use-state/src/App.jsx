import { useState } from "react"


const App = () => {
  const [isVisible, setIsVisible] = useState(true)
  return (
    <div>
      {isVisible && <h2>Hello React!!</h2>}

      <button onClick={() => {
        setIsVisible(!isVisible)
      }}>
        {isVisible ? "Hide" : "Show"}
      </button>
    </div>
  )
}

export default App
