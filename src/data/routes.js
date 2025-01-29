const navigationRoutes = (isLoggedIn) =>
  [
    {
      title: "Beranda",
      path: "/",
    },
    {
      title: "Tentang Kami",
      path: "/tentang-kami",
    },
    {
      title: "Kontak",
      path: "/kontak",
    },
    {
      title: "Donasi",
      path: "/donasi",
    },
    isLoggedIn
      ? {
          title: "Profil",
          path: "/profil",
        }
      : {
          title: "Masuk",
          path: "/masuk",
        },
    !isLoggedIn && {
      title: "Daftar",
      path: "/daftar",
    },
  ].filter(Boolean);

export { navigationRoutes };
