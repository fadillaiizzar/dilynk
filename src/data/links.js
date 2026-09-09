const whatsappMessage =
  'Halo, saya tertarik dengan penginapan apartemen di Jogja, bisakah Anda beri info lebih lanjut?'

const links = [
  {
    id: 'admin-1',
    title: 'Admin 1',
    url: `https://wa.me/6285713685277?text=${encodeURIComponent(whatsappMessage)}`,
    icon: '/icons/whatsapp.png',
  },
  {
    id: 'admin-2',
    title: 'Admin 2',
    url: `https://wa.me/6285713685277?text=${encodeURIComponent(whatsappMessage)}`,
    icon: '/icons/whatsapp.png',
  },
  {
    id: 'agoda-vivo',
    title: 'Agoda Vivo',
    url: 'LINK_AGODA_VIVO',
    icon: '/icons/agoda.png',
  },
  {
    id: 'agoda-barsa',
    title: 'Agoda Barsa',
    url: 'LINK_AGODA_BARSA',
    icon: '/icons/agoda.png',
  },
  {
    id: 'tiket-barsa',
    title: 'Tiket Barsa',
    url: 'LINK_TIKET_BARSA',
    icon: '/icons/tiket.png',
  },
  {
    id: 'traveloka-barsa',
    title: 'Traveloka Barsa',
    url: 'LINK_TRAVELOKA_BARSA',
    icon: '/icons/traveloka.jpeg',
  },
]

export default links