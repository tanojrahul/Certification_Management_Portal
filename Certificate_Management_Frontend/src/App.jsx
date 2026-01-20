import './App.css'
import Button from './components/button'
import Login from './components/Login'
import { FaArrowRight } from 'react-icons/fa'
import Textfield from './components/Textfield'
function App() {
  return (
    <>
    {/* // <Login /> */}
    <Button
  text="Submit Certificate"
  icon={<FaArrowRight />}
  iconPosition="right"
  width="100%"
  height="50px"
/>,
<Textfield 
label="Username"
value=""
onChange={() => {}}
placeholder="Enter your username"
/>
    </>
  )
}

export default App
