import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Graph from './componants/graph.jsx';
import Routed from './Router';
import { useEffect, useState } from 'react';
import Areagraph from './componants/Areagraph';

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
					<Route path="/Homepage/graph" element={<Areagraph/>} />
			  </Route>
        </Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
