import './App.css'
import Playground from './components/playground.jsx'
import Nav from './components/nav.jsx'
import Footer from './components/footer.jsx'

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
