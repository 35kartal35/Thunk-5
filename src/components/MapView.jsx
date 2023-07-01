import {
  MapContainer,
  TileLayer,
  useMap,
  Marker,
  Popup
} from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import { useSelector } from 'react-redux'
import Leaflet from "leaflet"
import icon from "../assets/plane-,con.png"
import { useState } from 'react'
import SideDetails from './SideDetails'

const MapView = () => {
  const state = useSelector((store)=>store.reducer);
  const [showDetails, setShowDetails] = useState(false);
  const [detailId, setDetailId] = useState(null)
  const planeIcon = Leaflet.icon({
    iconUrl: icon,
    iconSize: [45, 45]

  })

  //detay butonuna tıklanınca çalışır

  const handleClick = (id) => {
    // id yi state te tutuyoruz
    setDetailId(id);
    // kenarda pencere aç
    setShowDetails(true);
  }
    
  return (
    <div>
      <h3>{state.flights.length} Uçak Bulundu</h3>
     <MapContainer 
     center={[39.0919307,34.1120601]} 
     zoom={7} 
     scrollWheelZoom={true}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  {state.flights.map((flight)=>(<Marker position={[flight.lat, flight.lng]} icon={planeIcon}>
    <Popup>
     <div className='popup'>
      <span> Kod: {flight.code}

      </span>
      <button onClick={()=> handleClick(flight.id)}>Detay</button>

     </div>
    </Popup>
  </Marker>))}
  
  
</MapContainer>

{/*Eğerki detay göster true ise ekrana detay bileşeni bas*/

}
{showDetails && <SideDetails detailId={detailId} setShowDetails={setShowDetails}/>}
    </div>
  )
}

export default MapView
