
import './App.css'
import AppRouter from './Router/appRouter'
import { Toaster } from 'react-hot-toast';
function App() {
  return (
    <>
     <AppRouter/>
     <Toaster position="top-right" reverseOrder={false}/>
    </>
  )
}

export default App
