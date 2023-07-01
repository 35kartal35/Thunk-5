import { useState } from 'react'
import ListView from './components/ListView'
import MapView from './components/MapView'
import Header from './components/Header'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getFlightData } from './redux/flightSlice'

function App() {
  const [showMapView, setShowMapView] = useState(true) 
  const dispatch = useDispatch() 

  useEffect(()=>{

    //veri çek ve stora aktar
    dispatch(getFlightData());
  }, [])

  return (
    <>
      <Header/>
      <div className='view-buttons'>
        <button className={`${showMapView && 'active'}`}
        onClick={()=>setShowMapView(true)}>
          Harita Görünümü
          </button>
        <button className={`${!showMapView && 'active'}`}
        onClick={()=>setShowMapView(false)}>
          Liste Görünümü
          </button>

      </div>
      {/* hangi birleşeni göstereceğimize karar veriyoruz*/}
      {showMapView ? <MapView/>  : <ListView/>}
    </>
  )
}

export default App
