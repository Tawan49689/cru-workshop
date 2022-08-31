import React, { Fragment } from 'react'
import Hello from './components/Form'

const App = () => {
  const name = "Tuu";
  const numb = 5;
  const color = "#121577";
  const [showContent, setShowContent] = useState(false)
  const [count,setCount] = useState(0)
  useEffect(() => {
    alert("hello")
  })//ถ้าไม่กำหนด dependency arrays จะทำคำสั่งทุกการเปลี่ยนแปลง
  //useEffect(() => {

  return (
    <Fragment>
      <button
        onClick={() => {setShowContent(!showContent)
          console.log(showContent);
        }}
        style={{ marginTop: 16 }}
        >
          show/hide
          </button>
      <Hello color={color}/>
      <h1 style={{backgroundColor:"red"}}>{name}</h1>
      <h1>{numb}</h1>
    </Fragment>
  )
}

export default App