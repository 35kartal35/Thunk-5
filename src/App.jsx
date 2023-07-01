import { useState } from 'react'
import ListView from './components/ListView'
import MapView from './components/MapView'


function App() {
  const [showMapView, setShowMapView] = useState(true)

  return (
    <>
      <div className='view-buttons'>
        <button onClick={()=>setShowMapView(true)}>Harita Görünümü</button>
        <button onClick={()=>setShowMapView(false)}>Liste Görünümü</button>

      </div>
      {showMapView ? <MapView/>  : <ListView/>}
    </>
  )
}

export default App
