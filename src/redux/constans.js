export const options = {
    method: 'GET',
    url: 'https://flight-radar1.p.rapidapi.com/flights/list-in-boundary',
    params: {
      bl_lat: '37.036472',
      bl_lng: '27.425467',
      tr_lat: '41.11295',
      tr_lng: '42.70228',
      limit: '300'
    },
    headers: {
      'X-RapidAPI-Key': 'b8717b5f54msh9dbff07f172799dp1f2ba0jsn0e27d418320d',
      'X-RapidAPI-Host': 'flight-radar1.p.rapidapi.com'
    }
  };