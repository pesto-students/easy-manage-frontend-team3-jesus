import './App.css'
import Modal from 'react-modal'
import AppRouter from './AppRouter/AppRouter'

Modal.setAppElement('#root')
function App() {
  return (
    <div className='App'>
      <AppRouter />
    </div>
  )
}

export default App
