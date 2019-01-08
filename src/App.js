import React, { Component, lazy, Suspense } from 'react';
import logo from './logo.svg';
import './App.css';
//import MobilePage from "./MobilePage";
import PageLoad from "./PageLoader";
//const Pageloader = lazy(() => import('./PageLoader'));
const Mobilepage = lazy(() =>
 import('./MobilePage'));


class App extends Component {
  render() {
    return (
      <div>
        <Suspense fallback={PageLoad}>
          <Mobilepage />
        </Suspense>
      </div>


    );
  }
}

export default App;
