import "./App.css"
import Cakecontainer from "./cakecontainer"
import IcecreamContainer from "./icecreamcontainer"
import Cakecontainerwithhooks from "./cakecontainerwithhooks"
import Newcakecontainer from "./newcakecontainer"
import Itemcontainer from "./itemcontainer"
import Fetchusers from "./fetchusers"
import Test from "./test"
import store from "./reduxstore/store"
import { Provider } from "react-redux"
 
function App () {
  return (
    <Provider store={store}>
      <div className="App">
{/* <Cakecontainer />
<IcecreamContainer />
<Cakecontainerwithhooks />
<Newcakecontainer />
<Itemcontainer />
<Itemcontainer cake /> */}
<Fetchusers />
<Test />
      </div>
    </Provider>
  )
};



export default App