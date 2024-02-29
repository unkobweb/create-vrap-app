import reactLogo from './assets/react.svg'
import adonisjsLogo from './assets/adonisjs.svg'
import viteLogo from '/vite.svg'
import postgreSQLLogo from './assets/postgresql.png'
import wrapGif from './assets/wrap.webp'
import './App.css'

function App() {
  return (
    <>
      <h1>VRAP Stack</h1>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://adonisjs.com/" target="_blank">
          <img src={adonisjsLogo} className="logo adonisjs" alt="AdonisJS logo" />
        </a>
        <a href="https://www.postgresql.org/" target="_blank">
          <img src={postgreSQLLogo} className="logo postgresql" alt="PostgreSQL logo" />
        </a>
      </div>
      <h1>Vite + React + AdonisJS + PostgreSQL</h1>
      <a href="https://www.postgresql.org/" target="_blank">
        <img src={wrapGif} className="logo" alt="React logo" />
      </a>
      <div className="card">
        <p className="read-the-docs">
          My ingredients, your project.
        </p>
      </div>
    </>
  )
}

export default App
