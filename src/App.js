import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Graph from './componants/graph.jsx';
import Routed from './Router';
import { useEffect, useState } from 'react';
import ComponentPart from '../src/componants/ComponentPart'
import Areagraph from './componants/Areagraph';

import ComponentPart from './componants/ComponentPart';
import Home from './componants/home';

import Login from './componants/login';
import Signin from './componants/signIn';


function App() {
  const [sessionState, setSessionState] = useState({
		userID: null,
		userEmail: null,
		active: null,
		userName: null,
		userImage: null
	})
  return (
		<>
			<BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Navigate exact to="/Homepage" />} />
				<Route exact path="/Homepage" element={<Routed/>} >
				<Route path="/Homepage/home" element={<Home/>} />
					<Route path="/Homepage/graph" element={<Graph/>} />

					<Route path="/Homepage/stocks" element={<ComponentPart/>} />
					<Route path="/Homepage/login" element={<Login/>} />
					<Route path="/Homepage/signin" element={<Signin/>} />

			  </Route>
        </Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
