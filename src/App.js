import Navbar from './components/NavBar/navBar'
import Intro from './components/Intro/intro'
import WhatDo from './components/WhatDo/whatDo';
import Skills from './components/skills/skills';
import Contact from './components/contact/contact';
import Email from './components/email/email';
import Footer from './components/Footer/footer';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <WhatDo/>
      <Skills/>
      <Contact/>
      <Email/>
      <Footer/>
    </div>
  );
}

export default App;
