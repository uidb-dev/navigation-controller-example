import React, { useState } from 'react';
import Navigator from 'mobile-navigation-controller';//old version
// import Navigator from 'navigation-controller'; //new version
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import './App.css';
const App = (props) => {

  const [nowPage, setNowPage] = useState("");
  const [navigatorRef,setNavigatorRef] = useState(null);
  const menuClick = (e, goToPage) => {
    if (navigatorRef) {
      navigatorRef.changePage(goToPage);
      document.getElementsByClassName("active")[0].className = "";
      e.currentTarget.className = "active";
    }
  }
  return (
    <Navigator
      onRef={ref => ( setNavigatorRef(ref))}  
      myApp={this}
      onChangePage={page => {
        setNowPage(page);
      }}
    >
      <Step1 key="step1" levelPage={1} navigatorRef={navigatorRef} />
      <Step2 key="step2" levelPage={2} navigatorRef={navigatorRef} />
      <Step3 key="step3" levelPage={3} navigatorRef={navigatorRef} animationPageOut= "fadeOutLeft" animatioPageIn="fadeInRight" />
    </Navigator>
  );

}
export default App;
