import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Error from './components/Error';
import News from './components/News';
import {createBrowserRouter,RouterProvider,} from 'react-router-dom';
import Home from './Home';
import Insight from './components/insight';
import SingleCurrency from './components/singleCurrency';
import { NewsProvider } from './contexts/newsontext';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement:<Error/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'coin/:cryptoId',
        element:<SingleCurrency/>
      },
      {
        path:'news',
        element:<NewsProvider><News/></NewsProvider>
      },
      {
        path:'insight',
        element:<Insight/>

      },
      {
        path:'*',
        element:<Error/>

      }
    ]
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
