const navigationRoutes = (isLoggedIn) =>
  [
    {
      title: "Beranda",
      path: "/",
    },
    {
      title: "Komunitas",
      path: "/komunitas",
    },
    {
      title: "Tentang Kami",
      path: "/tentang-kami",
    },
    {
      title: "Kontak",
      path: "/kontak",
    },
    !isLoggedIn && {
      title: "Daftar",
      path: "/daftar",
    },
    !isLoggedIn && {
      title: "Masuk",
      path: "/masuk",
    },
  ].filter(Boolean);

export { navigationRoutes };
