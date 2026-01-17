import { useState } from 'react'
import Logo from '/logo-svg.svg'
import './App.css'
import Playground from './components/playground.jsx'
import Nav from './components/nav.jsx'
import Footer from './components/footer.jsx'
import Sec_controls from './components/sec-controls.jsx'
import Banner from './components/banner.jsx'
import Canvas from './components/canvas.jsx'
import Controls from './components/controls.jsx'
import Results from './components/results.jsx'
import StatusBar from './components/statusbar.jsx'

function App() {


  return (

    <>
      <div className="app">

        {/* Nav /  header bar  */}
        <Nav />

        <main className="content">

          {/* Playground / Main area */}
          <Playground />

        </main>

        {/* Footer bar */}
        <Footer />

      </div>
    </>


  )
}

export default App
