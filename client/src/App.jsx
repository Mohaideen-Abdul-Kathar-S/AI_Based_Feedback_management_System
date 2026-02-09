import { useState } from 'react'
import './App.css'
import Footer from './components/Footer';
import CoordinatorDhashboard from './screens/CoordinatorDhashboard';
function App() {


  return (
    <>
     <CoordinatorDhashboard />
     <Footer Roll="Coordinator"/>
    </>
  )
}

export default App
