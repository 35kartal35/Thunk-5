import { useState } from 'react'
import ListView from './components/ListView'
import MapView from './components/MapView'


function App() {
  const [showMapView, setShowMapView] = useState(true)

  return (
    <>
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
