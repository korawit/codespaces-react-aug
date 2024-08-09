import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Hello from './Hello';
import Counter from './Counter';
import Form from './Form';
import Posts from './Posts';
import Shop from './Shop';
import Cat from './Cat';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <div>
      <ul>
        <li><Link to="/">Shop</Link></li>
        <li><Link to="/counter">Counter</Link></li>
        <li><Link to="/bmi">BMI</Link></li>
        <li><Link to="/posts/1">Post id 1</Link></li>
        <li><Link to="/posts/2">Post id 2</Link></li>
        <li><Link to="/posts/3/korawit">Post id 3 korawit</Link></li>
        <li><Link to="/posts?fname=korawit&lname=orkphol">Post korawit orkphol</Link></li>
      </ul>
    </div>
    <Routes>
      <Route path="/" element={<Cat/>}/>
      <Route path="/counter" element={<Counter/>}/>
      <Route path="/bmi" element={<Form/>}/>
      <Route path="/posts" element={<Posts/>}/>
      <Route path="/posts/:id" element={<Posts/>}/>
      <Route path="/posts/:id/:name" element={<Posts/>}/>
    </Routes>
  </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
