import React, { useEffect } from 'react';
import { Header } from './components/Header/Header';
import { AuthPage } from './components/AuthPage/AuthPage';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { $auth, setAuth, setUsername } from './context/auth';
import { useStore } from 'effector-react';
import { $alert } from './context/alert';
import { Alert } from './components/Alert/Alert';
import { CostsPage } from './components/CostsPage/CostsPage';
import { getAuthDataFromLS, removeUser } from './utils/auth';


function App() {
  const isLoggedIn = useStore($auth);
  const alert =  useStore($alert);
  useEffect (() => {
    const auth = getAuthDataFromLS();
    if (!auth){
      removeUser();
    } else{
      setAuth(true);
      setUsername(auth.username);
    }
  })
  return (
    <div className="App">
    <Header />
    {alert.alertText && <Alert props={alert} />}
    <Router>
      <Routes>
        <Route path='/' element = {isLoggedIn ? <Navigate to = {'/budgets'}/> : <Navigate to ='login'/>}/>
        <Route path='/registration' element = { isLoggedIn ? <Navigate to = {'/budgets'}/> : <AuthPage type = 'registration'/>}/>
        <Route path='/login' element = { isLoggedIn ? <Navigate to = {'/budgets'}/> : <AuthPage type = 'login'/>}/>
        <Route path='/budgets' element = {isLoggedIn ? <CostsPage/> : <Navigate to = {'/login'}/> }/>
      </Routes>
    </Router>
   
    </div>
  );
}

export default App;
