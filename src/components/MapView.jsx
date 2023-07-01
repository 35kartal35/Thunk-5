import {
  MapContainer,
  TileLayer,
  useMap,
  Marker,
  Popup
} from 'react-leaflet'
import "leaflet/dist/leaflet.css"

const MapView = () => {
  return (
    <div>
      <h3>Harita Görünümü</h3>
     <MapContainer 
     center={[51.505, -0.09]} 
     zoom={13} 
     scrollWheelZoom={true}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[51.505, -0.09]}>
    <Popup>
     Selamlar deneme yapıyorum
    </Popup>
  </Marker>
  
</MapContainer>
    </div>
  )
}

export default MapView
