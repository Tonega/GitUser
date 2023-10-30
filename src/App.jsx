import './App.css'
import FetchUser from './FetchUser'
import Header from './components/Header'


function App() {
  return (
    <>
    <div className="container">
    <Header title="Github Search App" desc="Search For Any User On Github"/>
    <FetchUser/>  
    </div>
    </>
  )
}

export default App