import React from 'react';
import {BrowserRouter, Router} from 'react-router-dom'
import Routers from './routes';
import axios from 'axios';

import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
  <BrowserRouter>
   <Routers /> 
  </BrowserRouter>
  <GlobalStyle />
  </>
)

export default App;
