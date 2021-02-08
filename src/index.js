import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router, Switch,Route} from "react-router-dom";
import Header from './components/Header';
import Header2 from './components/Header2';
import Categories from "./components/categories";
import CategoriesContextProvider from "./Global/CategoriesContext";
import Jambo from "./components/jambo";
import Footer from "./components/footer";
import Sale from "./components/sale";
import ProductImages from "./components/ProductImages";
import Cart from "./components/cart";
import Check from "./components/Check";
import NotFound from "./components/NotFound";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
      <CategoriesContextProvider>
          <Router>
              <Header />
              <Header2 />
              <Switch>
                  <Route path="/"exact component={Categories}/>
                  <Route path="/sale" exact component={Sale}/>
                  <Route path="/Product_Images" exact component={ProductImages} />
                  <Route path="/Add_to_cart" exact component={Cart} />
                  <Route path="/check" exact component={Check} />
                  <Route component={NotFound}/>
              </Switch>
          </Router>
      <Jambo />
      <Footer />
    </CategoriesContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
