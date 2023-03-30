import React from 'react'
import { AuthProvider } from './SRC/Context/AuthContext';
import AppNav from './SRC/Navigation/AppNav';

const App = () => {
  return (
    <AuthProvider >
    <AppNav />
    </AuthProvider>
      
  )
}

export default App
