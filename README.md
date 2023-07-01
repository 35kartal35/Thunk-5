# Kütüphaneler

-leaflet
-react-leaflet
-react-redux
-@reduxjs/toolkit
-axios
-thunk (toolkitin yanında gelicek)

# Kaynaklar

# Yapılacaklar

- Liste görünümü için `ListView.jsx` dosyası oluştur.
- Harita görünümü için `MapView.jsx` dosyası oluştur.
- `App.jsx` içerisinde bu iki görünüm arası geçişi sağlayacak butonu tasarla.
- MapView.jsx içerisine harita kurulumunu yap
- toolkit ile store kurulumunu yap.
- Uygulama ekrana geldiği anda Apiden türkiye üzerinde uçan uçak verilerini çek ve store a aktar.
- Bize dizi içerisinde dizi geliyor: Elimde olan : [
  [123446, dasjbhbdkjfdg, 14.45461, 45.55655]
  ]

- Elde etmek istediğim : [
  {
  id: "123123"
  code: "hsdf456"
  lat: "14.123"
  lng: 56.1234
  }
  ]
  -- uçaklar dizisi içerisindeki dizilerin enlem boylam id kuyrukkodu değerlerini al ve bu değerlerle bir obje oluştur.(map ile)
- `MapView.jsx` sayfasında store da tutulan uçuşlar(plane) herbir obje için ekrana bir tane imleç bas
- marker a position olarak obje içerisindeki lat ve lng değerlerini ver.
- haritanın merkezini Ankara yap.
- Popup içerisindeki Detay butonuna tıklanınca ``SideDetail.jsx` bileşenini ekrana bas ve bileşen hangi detayı gösterilecekse onu aktar.
- Prop olarak gelen uçağın id değerlerini al ve bununla beraber api ye istek at..
