const whatsappMessage =
  'Halo, saya tertarik dengan penginapan apartmen di Jogja, bisakah Anda beri info lebih lanjut?'

const links = [
  {
    id: 'admin-1',
    title: 'Admin 1',
    url: `https://wa.me/6282326813926?text=${encodeURIComponent(whatsappMessage)}`,
    icon: '/icons/whatsapp.png',
    menuIcon: '/icons/whatsapp-remove.png',
  },
  {
    id: 'admin-2',
    title: 'Admin 2',
    url: `https://wa.me/6285870797386?text=${encodeURIComponent(whatsappMessage)}`,
    icon: '/icons/whatsapp.png',
    menuIcon: '/icons/whatsapp-remove.png',
  },
  {
    id: 'agoda-vivo',
    title: 'Agoda Vivo Apartment',
    url: 'https://www.agoda.com/id-id/vivo-apartment-by-luxury-room/hotel/yogyakarta-id.html?site_id=1932641&tag=6f1ff232-279c-401c-8c95-82e54ebac874&gad_source=1&gad_campaignid=22023957088&gbraid=0AAAAA9_WXQr0Pj8jnHIaZEfkhcPCOKkYq&gclid=Cj0KCQjwh4TVBhCWARIsAG0czmrcjklJ4OMNWEZIchOlRUSyvn_71U37WEXO9wSWbK15LGOa_RU4cF4aAo_YEALw_wcB',
    icon: '/icons/agoda.png',
    menuIcon: '/icons/agoda-remove.png',
  },
  {
    id: 'agoda-barsa',
    title: 'Agoda Barsa City',
    url: 'https://www.agoda.com/id-id/barsa-city-by-luxury-room/hotel/yogyakarta-id.html?cid=1844104&ds=PyxF1LRwHoRoAaeK',
    icon: '/icons/agoda.png',
    menuIcon: '/icons/agoda-remove.png',
  },
  {
    id: 'tiket-barsa',
    title: 'Tiket Barsa City',
    url: 'https://www.tiket.com/homes/indonesia/barsa-city-by-luxury-room-801001736937044384?checkin=2025-01-18&checkout=2025-01-19&room=1&adult=1',
    icon: '/icons/tiket.png',
    menuIcon: '/icons/tiket-remove.png',
  },
  {
    id: 'traveloka-barsa',
    title: 'Traveloka Barsa City',
    url: 'https://www.traveloka.com/hotel/indonesia/luxury-room-9000005469552?contexts=%7B%22sourceHotelDetail%22:%22SHARE_BUTTON%22%7D&spec=20-11-2024.21-11-2024.1.1.HOTEL.9000005469552.Luxury%20Room.2&force-app=false',
    icon: '/icons/traveloka.jpeg',
    menuIcon: '/icons/traveloka-remove.png',
  },
]

export default links