import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Graph from './componants/graph.jsx';
import Routed from './Router';
import { useEffect, useState } from 'react';

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
        <Route exact path="/" element={<Navigate exact to="/login" />} />
				<Route exact path="/login" element={<Routed/>} >
					<Route path="login/graph" element={<Graph/>} />{" "}
					
			  </Route>
        </Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
