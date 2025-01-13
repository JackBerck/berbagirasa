const posts = [
  {
    id: 1,
    title: "Pizza sisa semalam bisa jadi sarapan yang nikmat",
    category: "Makanan",
    location: "Jakarta, Indonesia",
    content:
      "Pizza sisa semalam mungkin terdengar aneh, tetapi sebenarnya bisa jadi sarapan yang nikmat. Jika Anda memiliki pizza sisa semalam, Anda bisa memanaskannya di oven atau microwave. Jika Anda ingin membuatnya lebih sehat, Anda bisa menambahkan sayuran segar atau buah-buahan. Jadi, jangan ragu untuk menikmati pizza sisa semalam sebagai sarapan yang nikmat! Anda bisa mengambilnya langsung ke sini daripada mubazir.",
    images: ["/img/posts/grand-astrea-96.jpg", "/img/posts/grand-astrea-96.jpg"],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.373886722157!2d106.8274373147691!3d-6.175392995514985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f433f7b8e0d3%3A0x1a2d3b3b9f8d8d1e!2sMonumen%20Nasional!5e0!3m2!1sid!2sid!4v1627812613524!5m2!1sid!2sid",
    createdAt: "2021-08-01T00:00:00.000Z",
    author: {
      id: 1,
      username: "Amar Faiz",
      image: "/img/users/cesar-rincon.jpg",
      phone: "08123456789",
    },
  },
  {
    id: 2,
    title: "Berbagi Nasi Bungkus untuk Sarapan",
    category: "Makanan",
    location: "Bandung, Indonesia",
    content:
      "Nasi bungkus adalah makanan yang praktis dan lezat untuk sarapan. Jika Anda memiliki nasi bungkus lebih, Anda bisa membagikannya kepada orang-orang yang membutuhkan. Nasi bungkus bisa diisi dengan berbagai macam lauk seperti ayam, telur, dan sayuran. Mari berbagi nasi bungkus untuk sarapan yang lebih baik!",
    images: ["/img/posts/grand-astrea-96.jpg", "/img/posts/grand-astrea-96.jpg"],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.373886722157!2d106.8274373147691!3d-6.175392995514985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f433f7b8e0d3%3A0x1a2d3b3b9f8d8d1e!2sMonumen%20Nasional!5e0!3m2!1sid!2sid!4v1627812613524!5m2!1sid!2sid",
    createdAt: "2021-08-02T00:00:00.000Z",
    author: {
      id: 2,
      username: "Budi Santoso",
      image: "/img/users/cesar-rincon.jpg",
      phone: "08123456780",
    },
  },
  {
    id: 3,
    title: "Donasi Pakaian Bekas Layak Pakai",
    category: "Pakaian",
    location: "Surabaya, Indonesia",
    content:
      "Pakaian bekas yang masih layak pakai bisa sangat bermanfaat bagi mereka yang membutuhkan. Jika Anda memiliki pakaian yang sudah tidak terpakai, Anda bisa mendonasikannya. Pastikan pakaian dalam kondisi bersih dan rapi sebelum didonasikan. Mari berbagi pakaian bekas layak pakai untuk membantu sesama!",
    images: ["/img/posts/grand-astrea-96.jpg", "/img/posts/grand-astrea-96.jpg"],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.373886722157!2d106.8274373147691!3d-6.175392995514985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f433f7b8e0d3%3A0x1a2d3b3b9f8d8d1e!2sMonumen%20Nasional!5e0!3m2!1sid!2sid!4v1627812613524!5m2!1sid!2sid",
    createdAt: "2021-08-03T00:00:00.000Z",
    author: {
      id: 3,
      username: "Citra Dewi",
      image: "/img/users/cesar-rincon.jpg",
      phone: "08123456781",
    },
  },
  {
    id: 4,
    title: "Berbagi Minuman Segar di Hari Panas",
    category: "Minuman",
    location: "Yogyakarta, Indonesia",
    content:
      "Di hari yang panas, minuman segar bisa sangat menyegarkan. Jika Anda memiliki minuman segar lebih, Anda bisa membagikannya kepada orang-orang di sekitar Anda. Minuman segar seperti es teh, es jeruk, atau jus buah bisa menjadi pilihan yang tepat. Mari berbagi minuman segar di hari panas untuk menyegarkan hari mereka!",
    images: ["/img/posts/grand-astrea-96.jpg", "/img/posts/grand-astrea-96.jpg"],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.373886722157!2d106.8274373147691!3d-6.175392995514985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f433f7b8e0d3%3A0x1a2d3b3b9f8d8d1e!2sMonumen%20Nasional!5e0!3m2!1sid!2sid!4v1627812613524!5m2!1sid!2sid",
    createdAt: "2021-08-04T00:00:00.000Z",
    author: {
      id: 4,
      username: "Dewi Lestari",
      image: "/img/users/cesar-rincon.jpg",
      phone: "08123456782",
    },
  },
  {
    id: 5,
    title: "Berbagi Buku Bacaan untuk Anak-anak",
    category: "Barang",
    location: "Semarang, Indonesia",
    content:
      "Buku bacaan bisa menjadi sumber pengetahuan dan hiburan bagi anak-anak. Jika Anda memiliki buku bacaan yang sudah tidak terpakai, Anda bisa membagikannya kepada anak-anak yang membutuhkan. Buku bacaan seperti cerita anak, komik, atau buku pelajaran bisa sangat bermanfaat. Mari berbagi buku bacaan untuk anak-anak!",
    images: ["/img/posts/grand-astrea-96.jpg", "/img/posts/grand-astrea-96.jpg"],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.373886722157!2d106.8274373147691!3d-6.175392995514985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f433f7b8e0d3%3A0x1a2d3b3b9f8d8d1e!2sMonumen%20Nasional!5e0!3m2!1sid!2sid!4v1627812613524!5m2!1sid!2sid",
    createdAt: "2021-08-05T00:00:00.000Z",
    author: {
      id: 5,
      username: "Eko Prasetyo",
      image: "/img/users/cesar-rincon.jpg",
      phone: "08123456783",
    },
  },
  {
    id: 6,
    title: "Berbagi Makanan Ringan untuk Anak-anak",
    category: "Makanan",
    location: "Medan, Indonesia",
    content:
      "Makanan ringan seperti biskuit, kue, atau keripik bisa menjadi camilan yang menyenangkan bagi anak-anak. Jika Anda memiliki makanan ringan lebih, Anda bisa membagikannya kepada anak-anak di sekitar Anda. Pastikan makanan dalam kondisi baik dan belum kadaluarsa. Mari berbagi makanan ringan untuk anak-anak!",
    images: ["/img/posts/grand-astrea-96.jpg", "/img/posts/grand-astrea-96.jpg"],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.373886722157!2d106.8274373147691!3d-6.175392995514985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f433f7b8e0d3%3A0x1a2d3b3b9f8d8d1e!2sMonumen%20Nasional!5e0!3m2!1sid!2sid!4v1627812613524!5m2!1sid!2sid",
    createdAt: "2021-08-06T00:00:00.000Z",
    author: {
      id: 6,
      username: "Fajar Nugroho",
      image: "/img/users/cesar-rincon.jpg",
      phone: "08123456784",
    },
  },
  {
    id: 7,
    title: "Donasi Mainan Bekas untuk Anak-anak",
    category: "Barang",
    location: "Makassar, Indonesia",
    content:
      "Mainan bekas yang masih layak pakai bisa menjadi sumber kebahagiaan bagi anak-anak. Jika Anda memiliki mainan yang sudah tidak terpakai, Anda bisa mendonasikannya. Pastikan mainan dalam kondisi baik dan aman untuk digunakan. Mari berbagi mainan bekas untuk anak-anak!",
    images: ["/img/posts/grand-astrea-96.jpg", "/img/posts/grand-astrea-96.jpg"],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.373886722157!2d106.8274373147691!3d-6.175392995514985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f433f7b8e0d3%3A0x1a2d3b3b9f8d8d1e!2sMonumen%20Nasional!5e0!3m2!1sid!2sid!4v1627812613524!5m2!1sid!2sid",
    createdAt: "2021-08-07T00:00:00.000Z",
    author: {
      id: 7,
      username: "Gita Permata",
      image: "/img/users/cesar-rincon.jpg",
      phone: "08123456785",
    },
  },
  {
    id: 8,
    title: "Berbagi Sayuran Segar dari Kebun",
    category: "Makanan",
    location: "Bali, Indonesia",
    content:
      "Sayuran segar dari kebun bisa menjadi sumber nutrisi yang baik bagi keluarga. Jika Anda memiliki sayuran segar lebih, Anda bisa membagikannya kepada tetangga atau orang-orang di sekitar Anda. Sayuran seperti bayam, kangkung, atau tomat bisa menjadi pilihan yang baik. Mari berbagi sayuran segar dari kebun!",
    images: ["/img/posts/grand-astrea-96.jpg", "/img/posts/grand-astrea-96.jpg"],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.373886722157!2d106.8274373147691!3d-6.175392995514985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f433f7b8e0d3%3A0x1a2d3b3b9f8d8d1e!2sMonumen%20Nasional!5e0!3m2!1sid!2sid!4v1627812613524!5m2!1sid!2sid",
    createdAt: "2021-08-08T00:00:00.000Z",
    author: {
      id: 8,
      username: "Hadi Wijaya",
      image: "/img/users/cesar-rincon.jpg",
      phone: "08123456786",
    },
  },
  {
    id: 9,
    title: "Berbagi Peralatan Sekolah untuk Anak-anak",
    category: "Barang",
    location: "Malang, Indonesia",
    content:
      "Peralatan sekolah seperti buku tulis, pensil, dan penghapus bisa sangat bermanfaat bagi anak-anak yang membutuhkan. Jika Anda memiliki peralatan sekolah lebih, Anda bisa membagikannya kepada anak-anak di sekitar Anda. Pastikan peralatan dalam kondisi baik dan siap digunakan. Mari berbagi peralatan sekolah untuk anak-anak!",
    images: ["/img/posts/grand-astrea-96.jpg", "/img/posts/grand-astrea-96.jpg"],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.373886722157!2d106.8274373147691!3d-6.175392995514985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f433f7b8e0d3%3A0x1a2d3b3b9f8d8d1e!2sMonumen%20Nasional!5e0!3m2!1sid!2sid!4v1627812613524!5m2!1sid!2sid",
    createdAt: "2021-08-09T00:00:00.000Z",
    author: {
      id: 9,
      username: "Indra Saputra",
      image: "/img/users/cesar-rincon.jpg",
      phone: "08123456787",
    },
  },
  {
    id: 10,
    title: "Berbagi Makanan untuk Berbuka Puasa",
    category: "Makanan",
    location: "Palembang, Indonesia",
    content:
      "Berbuka puasa adalah momen yang dinanti-nanti. Jika Anda memiliki makanan lebih, Anda bisa membagikannya kepada orang-orang yang berpuasa. Makanan seperti kurma, kolak, atau nasi bungkus bisa menjadi pilihan yang baik. Mari berbagi makanan untuk berbuka puasa dan menyebarkan kebahagiaan!",
    images: ["/img/posts/grand-astrea-96.jpg", "/img/posts/grand-astrea-96.jpg"],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.373886722157!2d106.8274373147691!3d-6.175392995514985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f433f7b8e0d3%3A0x1a2d3b3b9f8d8d1e!2sMonumen%20Nasional!5e0!3m2!1sid!2sid!4v1627812613524!5m2!1sid!2sid",
    createdAt: "2021-08-10T00:00:00.000Z",
    author: {
      id: 10,
      username: "Joko Susilo",
      image: "/img/users/cesar-rincon.jpg",
      phone: "08123456788",
    },
  },
];

export { posts };
