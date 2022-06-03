import React,{useEffect,createContext,useReducer,useContext} from 'react'
import {BrowserRouter,Route,Switch,useHistory} from 'react-router-dom'
import { Home } from './components/home';
import { Signin } from './components/signin';
import { Signup } from './components/signup';
import {reducer,intialState} from './reducers/userReducer'
import { AddPost } from './components/addpost';


export const UserContext = createContext()

const Routing = ()=>{
  const history = useHistory()
  const {state,dispatch} = useContext(UserContext)
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("user"))
    if(user){
      dispatch({type:"USER",payload:user})
    }else{
      if(!history.location.pathname.startsWith('/reset')&&!history.location.pathname.startsWith('/signup'))
      history.push('/signin')
    }
  },[])
  return(
    <Switch>
    <Route exact path = "/">
      <Home />
    </Route>
    <Route path = "/signin">
      <Signin />
    </Route>
    <Route path = "/signup">
      <Signup />
    </Route>
    <Route path = "/addpost">
      <AddPost/>
    </Route>
    </Switch>
  )
}

function App() {
  const [state,dispatch] = useReducer(reducer,intialState)
  return (
    <UserContext.Provider value={{state,dispatch}}>
    <BrowserRouter>
    {/* <Navbar /> */}
    <Routing />
    </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
