import './App.css'
import Userview from "./Features/users/userview"
import IcecreamView from "./Features/icecream/icecreamview"
import CakeView from "./Features/cake/cakeview"

function App() {

  return (
    <div className="App">
    <Userview />
    <CakeView />
    <IcecreamView />
    </div>
  )
}

export default App
