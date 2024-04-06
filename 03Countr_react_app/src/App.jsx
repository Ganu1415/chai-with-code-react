import { useState } from "react"

function App() {
  const [count, setCount] = useState(0)
  const addCount = () => {
    setCount(count + 1)
  }
  const removeCount = () => {
    if (count >= 1) {
      setCount(count - 1)
    }
  }
  return (
    <>
      <div style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center"
      }}>
        <h1>Rahul</h1>

        <p>{count}</p>
        <div style={{ display: "flex", padding: "12px 24px" }}>
          <button onClick={addCount}>Add Count</button>
          <button onClick={removeCount}>Remove Count</button>
        </div>
      </div >
    </>
  )
}

export default App
