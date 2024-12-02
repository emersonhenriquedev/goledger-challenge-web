import { useState, useEffect } from 'react'
import { httpClient } from './services/axios';
import './App.css'

function App() {
  const [assets, setAssets] = useState([]);

  useEffect(() => {
    const getAssets = async () => {
      try {
        const response = await httpClient.get('/query/getSchema');
        console.log(response.data);
      } catch(error) {
        console.log(error);
      }
    }
    getAssets();
  },[]);

  return (
    <>

    </>
  )
}

export default App
