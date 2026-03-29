import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Nas from './components/Nas'
import Habib from './components/Habib'
import Patrick from './components/Patrick'

function App() {

  return (
    <div>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Frontend Course Practice</h1>
          <p style={{ marginBottom: "12px" }}>Member registration through pull request from github.</p>
        </div>
       
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <p className="member">1st Member:</p>
          
        </div>
        <div id="social">
          <p className="member">2nd Member:</p>
          
        </div>
      </section>

       <section id="next-steps">
        <div id="docs">
          <p className="member">3rd Member:</p>
          
        </div>
        <div id="social">
          <Patrick/>    
        </div>
      </section>

       <section id="next-steps">
        <div id="docs">
           <Habib/>
          
        </div>
        <div id="social">
          <Nas/>
          
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer">
        <h2 style={{
            marginTop : "24px"
        }}>
          Footer</h2>
      </section>
    </div>
  )
}

export default App
