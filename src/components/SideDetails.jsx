import axios from "axios";
import { useEffect, useState } from "react"

const SideDetails = ({detailId, setShowDetails}) => {
    const [details, setDetails] = useState(null)

    useEffect(()=>{

        // istek atarken kullandığımız ayarları tanımlama
        const options = {
            method: 'GET',
            url: 'https://flight-radar1.p.rapidapi.com/flights/detail',
            params: {flight: detailId},
            headers: {
              'X-RapidAPI-Key': 'b8717b5f54msh9dbff07f172799dp1f2ba0jsn0e27d418320d',
              'X-RapidAPI-Host': 'flight-radar1.p.rapidapi.com'
            }
          };
          axios.request(options)
          .then((res)=> setDetails(res.data))
    }, [detailId])

    console.log(details)
  return (
    <>
    <div className="detail">
        <div className="detail-inner">
        <p className="close-icon">
            <span onClick={()=>{setShowDetails(false)}}>X</span>
        </p>
        {detailId}
            <h2>Uçak Detay Bilgisi</h2>
        </div>
    </div>
    </>
  )
}

export default SideDetails
