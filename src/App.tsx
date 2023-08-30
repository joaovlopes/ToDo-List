// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import { Header } from './components/Header/Header'
import { NewTask } from './components/NewTask/NewTask'
import { Tasks } from './components/Tasks/Tasks'
 
import styles from './App.module.scss'

import './global.scss'

function App() {

  return (
   <div className={styles.container}>
      <Header/>
      <NewTask />
   </div>
  )
}

export default App
