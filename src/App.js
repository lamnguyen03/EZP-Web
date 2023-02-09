import React from 'react';
import HeaderHomepage from "./components/HeaderHomepage";
import FooterHomepage from  "./components/FooterHomepage"
import AboutUsPage from "./components/AboutUsPage";
function App() {
  return (
    <div>
        <HeaderHomepage/>
        <AboutUsPage/>
        <FooterHomepage/>
    </div>
  );
}

export default App;
