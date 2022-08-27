import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import mapping from './RouterMapping'
import './scss/index.scss'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				{Object.keys(mapping).map((url:string, k:number) => (
					<Route 
						key={k} 
						path={url} 
						element={(
							<Layout>
								{mapping[`${url}`]}
							</Layout>
						)}
					/>
				))}
			</Routes>
		</BrowserRouter>
	);
}

export default App;
