(function () {
  "use strict";

  const CART_KEY = "na_cart_v1";
  const ORDERS_KEY = "na_orders_v1";
  const CHANNEL_NAME = "nusantara_avian_realtime_v1";

  const daftarAyamHias = [
    {
      id: "appenzeller-spitzhauben",
      nama: "Appenzeller Spitzhauben",
      gambar: "ayam/Appenzeller_Spitzhauben_chicken_…_af2cc71d.jpg",
      kategori: "Ras Jambul Eropa",
      asal: "Swiss",
      deskripsi: "Ayam ras pegunungan Alpen dengan jambul runcing ke depan dan pola bulu bintik hitam-putih yang kontras.",
      usia: "Dewasa (7 Bln)",
      status: "Tersedia",
      hargaNum: 1750000,
      harga: "Rp 1.750.000",
      satuan: "/ ekor"
    },
    {
      id: "ayam-pelung-cianjur",
      nama: "Ayam Pelung Cianjur",
      gambar: "ayam/Ayam_Pelung_chicken_standing_f7756c4a.jpg",
      kategori: "Ras Suara Merdu",
      asal: "Indonesia",
      deskripsi: "Ayam hias asli Jawa Barat yang tersohor karena postur tegap dan suara kokoknya yang panjang serta beralun merdu.",
      usia: "Dewasa (10 Bln)",
      status: "Tersedia",
      hargaNum: 1600000,
      harga: "Rp 1.600.000",
      satuan: "/ ekor"
    },
    {
      id: "ayam-serama-kontes",
      nama: "Ayam Serama Kontes",
      gambar: "ayam/Ayam_Serama_chicken_standing_ba8f9659.jpg",
      kategori: "Ras Mini",
      asal: "Malaysia",
      deskripsi: "Ayam terkecil di dunia dengan gaya berdiri tegak, dada membusung ke depan, dan sayap turun menyentuh tanah.",
      usia: "Siap Kontes",
      status: "Tersedia",
      hargaNum: 1850000,
      harga: "Rp 1.850.000",
      satuan: "/ ekor"
    },
    {
      id: "ayam-cemani-hitam",
      nama: "Ayam Cemani Hitam",
      gambar: "ayam/Black_chicken_standing_on_backdrop_4228c0c0.jpg",
      kategori: "Ras Eksotis Lokal",
      asal: "Indonesia",
      deskripsi: "Ayam berwarna hitam pekat menyeluruh dari bulu, paruh, jengger, hingga kaki. Sangat dicari oleh kolektor unggas.",
      usia: "Dewasa (8 Bln)",
      status: "Tersedia",
      hargaNum: 2500000,
      harga: "Rp 2.500.000",
      satuan: "/ ekor"
    },
    {
      id: "ayam-brahma",
      nama: "Ayam Brahma",
      gambar: "ayam/Brahma_chicken_standing_on_backdrop_fe1221f3.jpg",
      kategori: "Ras Raksasa",
      asal: "India / AS",
      deskripsi: "Dikenal sebagai raja segala ayam karena ukuran tubuhnya yang masif dan bulu tebal yang menyelimuti kaki.",
      usia: "Remaja (6 Bln)",
      status: "Tersedia",
      hargaNum: 1450000,
      harga: "Rp 1.450.000",
      satuan: "/ pasang"
    },
    {
      id: "ayam-hias-klasik",
      nama: "Ayam Hias Klasik",
      gambar: "ayam/Chicken_standing_on_gray_studio_be7f3653.jpg",
      kategori: "Ras Klasik",
      asal: "Eropa",
      deskripsi: "Ayam berpostur proporsional dengan kilau bulu rapi dan jengger merah cerah, cocok sebagai penghias pekarangan.",
      usia: "Dewasa (7 Bln)",
      status: "Tersedia",
      hargaNum: 750000,
      harga: "Rp 750.000",
      satuan: "/ ekor"
    },
    {
      id: "ayam-cochin",
      nama: "Ayam Cochin",
      gambar: "ayam/Cochin_chicken_standing_on_backdrop_905aa861.jpg",
      kategori: "Ras Bulu Lebat",
      asal: "Tiongkok",
      deskripsi: "Berbentuk bulat menggemaskan dengan bulu sangat tebal dan halus hingga menutupi cakar. Berwatak tenang dan jinak.",
      usia: "Dewasa (8 Bln)",
      status: "Tersedia",
      hargaNum: 1300000,
      harga: "Rp 1.300.000",
      satuan: "/ pasang"
    },
    {
      id: "ayam-crevecoeur",
      nama: "Ayam Crevecoeur",
      gambar: "ayam/Crevecoeur_chicken_standing_on_b…_36de6414.jpg",
      kategori: "Ras Jambul Antik",
      asal: "Prancis",
      deskripsi: "Ras tua asal Normandia dengan bulu hitam berkilau kehijauan, jambul lebat, dan jengger berbentuk huruf V.",
      usia: "Dewasa (8 Bln)",
      status: "Stok Terbatas",
      hargaNum: 1900000,
      harga: "Rp 1.900.000",
      satuan: "/ ekor"
    },
    {
      id: "ayam-frizzle-walik",
      nama: "Ayam Frizzle (Walik)",
      gambar: "ayam/Frizzle_chicken_standing_on_back…_ed36e7e8.jpg",
      kategori: "Ras Bulu Unik",
      asal: "Asia",
      deskripsi: "Memiliki keunikan genetik berupa helai bulu yang melengkung terbalik ke arah luar menyerupai kelopak bunga.",
      usia: "Dewasa (6 Bln)",
      status: "Tersedia",
      hargaNum: 850000,
      harga: "Rp 850.000",
      satuan: "/ ekor"
    },
    {
      id: "ayam-hamburg",
      nama: "Ayam Hamburg",
      gambar: "ayam/Hamburg_chicken_standing_on_back…_de2f0001.jpg",
      kategori: "Ras Hias Eropa",
      asal: "Belanda",
      deskripsi: "Bertubuh ramping elegan dengan corak bulu tutul teratur, jengger mawar, serta cuping telinga berwarna putih bersih.",
      usia: "Dewasa (7 Bln)",
      status: "Tersedia",
      hargaNum: 1150000,
      harga: "Rp 1.150.000",
      satuan: "/ ekor"
    },
    {
      id: "ayam-houdan",
      nama: "Ayam Houdan",
      gambar: "ayam/Houdan_chicken_standing_on_backdrop_fb39032b.jpg",
      kategori: "Ras Jambul",
      asal: "Prancis",
      deskripsi: "Berasal dari Prancis dengan ciri khas jambul kepala besar, janggut bulu, pola tutul hitam-putih, dan lima jari kaki.",
      usia: "Dewasa (7 Bln)",
      status: "Stok Terbatas",
      hargaNum: 1650000,
      harga: "Rp 1.650.000",
      satuan: "/ ekor"
    },
    {
      id: "japanese-bantam-chabo",
      nama: "Japanese Bantam (Chabo)",
      gambar: "ayam/Japanese_Bantam_chicken_standing_6a88c6fb.jpg",
      kategori: "Ras Mini",
      asal: "Jepang",
      deskripsi: "Ayam kate berkaki sangat pendek dengan ekor tegak menjulang tinggi hampir menyentuh bagian belakang kepala.",
      usia: "Dewasa (6 Bln)",
      status: "Tersedia",
      hargaNum: 900000,
      harga: "Rp 900.000",
      satuan: "/ pasang"
    },
    {
      id: "ayam-la-fleche",
      nama: "Ayam La Fleche",
      gambar: "ayam/La_Fleche_chicken_standing_5fbf721d.jpg",
      kategori: "Ras Eksotis",
      asal: "Prancis",
      deskripsi: "Terkenal dengan jengger tanduk ganda unik di atas kepala serta bulu hitam pekat mengilap yang tampak gagah.",
      usia: "Dewasa (8 Bln)",
      status: "Pre-Order",
      hargaNum: 2100000,
      harga: "Rp 2.100.000",
      satuan: "/ ekor"
    },
    {
      id: "ayam-marans",
      nama: "Ayam Marans",
      gambar: "ayam/Marans_chicken_standing_on_backdrop_28b52463.jpg",
      kategori: "Ras Dwi-Fungsi Hias",
      asal: "Prancis",
      deskripsi: "Memiliki bulu gelap dengan aksen tembaga di leher. Terkenal pula sebagai penghasil telur bercangkang cokelat tua.",
      usia: "Dewasa (7 Bln)",
      status: "Tersedia",
      hargaNum: 1100000,
      harga: "Rp 1.100.000",
      satuan: "/ ekor"
    },
    {
      id: "modern-game-bantam",
      nama: "Modern Game Bantam",
      gambar: "ayam/Modern_Game_Bantam_chicken_standing_9685a430.jpg",
      kategori: "Ras Mini Tegap",
      asal: "Inggris",
      deskripsi: "Ayam hias mini berkaki jenjang sangat panjang dan tubuh ramping tegak. Sangat populer di arena pameran unggas.",
      usia: "Dewasa (7 Bln)",
      status: "Tersedia",
      hargaNum: 1250000,
      harga: "Rp 1.250.000",
      satuan: "/ ekor"
    },
    {
      id: "ayam-onagadori",
      nama: "Ayam Onagadori",
      gambar: "ayam/Onagadori_chicken_standing_on_fa…_83a2c9fa.jpg",
      kategori: "Ras Ekor Panjang",
      asal: "Jepang",
      deskripsi: "Ras pusaka Jepang yang bulu ekornya dapat tumbuh memanjang terus-menerus hingga melampaui satu setengah meter.",
      usia: "Remaja (6 Bln)",
      status: "Stok Terbatas",
      hargaNum: 3200000,
      harga: "Rp 3.200.000",
      satuan: "/ ekor"
    },
    {
      id: "ayam-orpington",
      nama: "Ayam Orpington",
      gambar: "ayam/Orpington_chicken_standing_on_ba…_8b96f05b.jpg",
      kategori: "Ras Bulu Tebal",
      asal: "Inggris",
      deskripsi: "Berbadan lebar dengan bulu lembut mengembang, berpenampilan tenang dan bersahabat untuk dipelihara di halaman.",
      usia: "Dewasa (7 Bln)",
      status: "Tersedia",
      hargaNum: 1350000,
      harga: "Rp 1.350.000",
      satuan: "/ pasang"
    },
    {
      id: "ayam-pekin-bantam",
      nama: "Ayam Pekin Bantam",
      gambar: "ayam/Pekin_Bantam_chicken_standing_on…_c1134d13.jpg",
      kategori: "Ras Mini",
      asal: "Tiongkok",
      deskripsi: "Versi mini dari Cochin dengan bentuk tubuh bulat pendek dan bulu kaki lebat yang menyembunyikan cakarnya.",
      usia: "Dewasa (6 Bln)",
      status: "Tersedia",
      hargaNum: 850000,
      harga: "Rp 850.000",
      satuan: "/ pasang"
    },
    {
      id: "ayam-phoenix",
      nama: "Ayam Phoenix",
      gambar: "ayam/Phoenix_chicken_standing_on_back…_5ef1bb52.jpg",
      kategori: "Ras Ekor Panjang",
      asal: "Jerman",
      deskripsi: "Hasil pengembangan ras Onagadori di Eropa dengan ekor panjang menjuntai anggun dan warna bulu keemasan atau perak.",
      usia: "Dewasa (8 Bln)",
      status: "Tersedia",
      hargaNum: 2200000,
      harga: "Rp 2.200.000",
      satuan: "/ ekor"
    },
    {
      id: "ayam-poland-polish",
      nama: "Ayam Poland (Polish)",
      gambar: "ayam/Polish_chicken_standing_in_studio_a593227c.jpg",
      kategori: "Ras Jambul",
      asal: "Belanda",
      deskripsi: "Memiliki mahkota bulu bundar yang sangat lebat di atas kepala hingga menutupi mata, menjadikannya tampil nyentrik.",
      usia: "Dewasa (7 Bln)",
      status: "Tersedia",
      hargaNum: 950000,
      harga: "Rp 950.000",
      satuan: "/ ekor"
    },
    {
      id: "rosecomb-bantam",
      nama: "Rosecomb Bantam",
      gambar: "ayam/Rosecomb_Bantam_chicken_standing_c63c8542.jpg",
      kategori: "Ras Mini Kontes",
      asal: "Inggris",
      deskripsi: "Ayam mini berjengger mawar rapi dengan cuping telinga putih mencolok serta bulu ekor melengkung lebar.",
      usia: "Dewasa (7 Bln)",
      status: "Tersedia",
      hargaNum: 1050000,
      harga: "Rp 1.050.000",
      satuan: "/ ekor"
    },
    {
      id: "ayam-sebright",
      nama: "Ayam Sebright (Kate Batik)",
      gambar: "ayam/Sebright_chicken_standing_in_studio_71a4eca2.jpg",
      kategori: "Ras Mini",
      asal: "Inggris",
      deskripsi: "Setiap helai bulunya berbingkai garis hitam tegas menyerupai ukiran batik. Salah satu ayam kate paling populer.",
      usia: "Dewasa (6 Bln)",
      status: "Tersedia",
      hargaNum: 700000,
      harga: "Rp 700.000",
      satuan: "/ pasang"
    },
    {
      id: "ayam-silkie-kapas",
      nama: "Ayam Silkie (Kapas)",
      gambar: "ayam/Silkie_chicken_standing_on_backdrop_15c26f09.jpg",
      kategori: "Ras Bulu Halus",
      asal: "Tiongkok",
      deskripsi: "Memiliki tekstur bulu selembut sutra atau kapas, kulit kebiruan, dan jambul empuk di kepala. Sangat ramah pada anak-anak.",
      usia: "Dewasa (6 Bln)",
      status: "Tersedia",
      hargaNum: 800000,
      harga: "Rp 800.000",
      satuan: "/ pasang"
    },
    {
      id: "ayam-sultan",
      nama: "Ayam Sultan",
      gambar: "ayam/Sultan_chicken_standing_on_backdrop_01b74826.jpg",
      kategori: "Ras Istana",
      asal: "Turki",
      deskripsi: "Dahulu dipelihara di taman istana Ottoman. Berbulu putih bersih dengan jambul, janggut, bulu kaki lebat, dan lima jari.",
      usia: "Dewasa (8 Bln)",
      status: "Stok Terbatas",
      hargaNum: 2400000,
      harga: "Rp 2.400.000",
      satuan: "/ ekor"
    },
    {
      id: "ayam-sumatra",
      nama: "Ayam Sumatra",
      gambar: "ayam/Sumatra_chicken_standing_on_back…_a787cc5c.jpg",
      kategori: "Ras Eksotis Lokal",
      asal: "Indonesia",
      deskripsi: "Ayam asli Pulau Sumatra berbulu hitam kehijauan metalik, ekor panjang melengkung rendah, dan tatapan mata tajam.",
      usia: "Dewasa (8 Bln)",
      status: "Tersedia",
      hargaNum: 1950000,
      harga: "Rp 1.950.000",
      satuan: "/ ekor"
    },
    {
      id: "ayam-sussex",
      nama: "Ayam Sussex",
      gambar: "ayam/Sussex_chicken_standing_on_backdrop_4bb3b530.jpg",
      kategori: "Ras Hias Eropa",
      asal: "Inggris",
      deskripsi: "Ayam klasik Inggris dengan pola bulu kontras di bagian leher dan ekor. Mudah beradaptasi dan berpostur gagah.",
      usia: "Dewasa (7 Bln)",
      status: "Tersedia",
      hargaNum: 1100000,
      harga: "Rp 1.100.000",
      satuan: "/ pasang"
    },
    {
      id: "ayam-vorwerk",
      nama: "Ayam Vorwerk",
      gambar: "ayam/Vorwerk_chicken_standing_on_back…_4668ca3b.jpg",
      kategori: "Ras Hias Eropa",
      asal: "Jerman",
      deskripsi: "Memiliki kombinasi warna mencolok antara kepala serta ekor hitam pekat dengan badan berwarna kuning keemasan.",
      usia: "Dewasa (7 Bln)",
      status: "Tersedia",
      hargaNum: 1350000,
      harga: "Rp 1.350.000",
      satuan: "/ ekor"
    },
    {
      id: "ayam-wyandotte",
      nama: "Ayam Wyandotte",
      gambar: "ayam/Wyandotte_chicken_standing_on_ba…_cebf4e21.jpg",
      kategori: "Ras Corak Laced",
      asal: "Amerika Serikat",
      deskripsi: "Berbadan membulat dengan pola bulu berbingkai rapi dan jengger mawar yang manis. Sangat digemari di kontes kecantikan unggas.",
      usia: "Dewasa (7 Bln)",
      status: "Tersedia",
      hargaNum: 1250000,
      harga: "Rp 1.250.000",
      satuan: "/ pasang"
    },
    {
      id: "ayam-yokohama",
      nama: "Ayam Yokohama",
      gambar: "ayam/Yokohama_chicken_standing_in_studio_70630eb0.jpg",
      kategori: "Ras Ekor Panjang",
      asal: "Jepang / Jerman",
      deskripsi: "Berbulu putih bersih atau merah pelana dengan ekor panjang menjuntai lembut dan jengger kacang yang rapi.",
      usia: "Dewasa (8 Bln)",
      status: "Stok Terbatas",
      hargaNum: 2300000,
      harga: "Rp 2.300.000",
      satuan: "/ ekor"
    }
  ];

  let channel = null;
  if (typeof BroadcastChannel !== "undefined") {
    try {
      channel = new BroadcastChannel(CHANNEL_NAME);
    } catch (_) {
      channel = null;
    }
  }

  function broadcastEvent(type, payload) {
    if (channel) {
      try {
        channel.postMessage({ type, payload, ts: Date.now() });
      } catch (_) {}
    }
  }

  function onRealtimeUpdate(callback) {
    window.addEventListener("storage", function (e) {
      if (e.key === ORDERS_KEY || e.key === CART_KEY) {
        callback({ source: "storage", key: e.key });
      }
    });
    if (channel) {
      channel.addEventListener("message", function (e) {
        callback({ source: "broadcast", data: e.data });
      });
    }
  }

  function formatRupiah(amount) {
    const num = Number(amount) || 0;
    return "Rp " + num.toLocaleString("id-ID");
  }

  function formatWaktu(isoString) {
    if (!isoString) return "-";
    const d = new Date(isoString);
    return d.toLocaleString("id-ID", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });
  }

  function escapeHtml(str) {
    return String(str || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  // Cart API
  function getCart() {
    try {
      const raw = localStorage.getItem(CART_KEY);
      const parsed = raw ? JSON.parse(raw) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch (_) {
      return [];
    }
  }

  function saveCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    broadcastEvent("CART_UPDATED", { count: getCartCount() });
    updateNavBadge();
  }

  function getProductById(id) {
    return daftarAyamHias.find(function (item) {
      return item.id === id;
    });
  }

  function addToCart(productId, qty) {
    const product = getProductById(productId);
    if (!product) return null;
    const addQty = Math.max(1, parseInt(qty, 10) || 1);
    const cart = getCart();
    const existing = cart.find(function (c) {
      return c.id === productId;
    });
    if (existing) {
      existing.qty += addQty;
    } else {
      cart.push({
        id: product.id,
        nama: product.nama,
        gambar: product.gambar,
        satuan: product.satuan,
        hargaNum: product.hargaNum,
        qty: addQty
      });
    }
    saveCart(cart);
    return cart;
  }

  function updateCartQty(productId, newQty) {
    const qty = parseInt(newQty, 10);
    if (isNaN(qty) || qty < 1) {
      return removeFromCart(productId);
    }
    const cart = getCart();
    const item = cart.find(function (c) {
      return c.id === productId;
    });
    if (item) {
      item.qty = Math.min(99, qty);
      saveCart(cart);
    }
    return cart;
  }

  function removeFromCart(productId) {
    const cart = getCart().filter(function (c) {
      return c.id !== productId;
    });
    saveCart(cart);
    return cart;
  }

  function clearCart() {
    saveCart([]);
  }

  function getCartCount() {
    return getCart().reduce(function (sum, item) {
      return sum + (parseInt(item.qty, 10) || 0);
    }, 0);
  }

  function getCartTotals(shippingCost) {
    const cart = getCart();
    const subtotal = cart.reduce(function (sum, item) {
      return sum + item.hargaNum * item.qty;
    }, 0);
    const ongkir = cart.length > 0 ? (typeof shippingCost === "number" ? shippingCost : 50000) : 0;
    const grandTotal = subtotal + ongkir;
    return { subtotal, ongkir, grandTotal };
  }

  // Orders API
  function getOrders() {
    try {
      const raw = localStorage.getItem(ORDERS_KEY);
      const parsed = raw ? JSON.parse(raw) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch (_) {
      return [];
    }
  }

  function saveOrders(orders) {
    localStorage.setItem(ORDERS_KEY, JSON.stringify(orders));
  }

  function getOrderById(orderId) {
    return getOrders().find(function (o) {
      return o.id === orderId;
    });
  }

  function generateOrderId() {
    const now = new Date();
    const y = now.getFullYear();
    const m = String(now.getMonth() + 1).padStart(2, "0");
    const d = String(now.getDate()).padStart(2, "0");
    const rand = Math.floor(1000 + Math.random() * 9000);
    return "INV-NA-" + y + m + d + "-" + rand;
  }

  function createOrder(customer, shippingMethod) {
    const cart = getCart();
    if (cart.length === 0) return null;

    const ongkir = shippingMethod === "pickup" ? 0 : 50000;
    const totals = getCartTotals(ongkir);
    const orderId = generateOrderId();
    const nowIso = new Date().toISOString();

    const order = {
      id: orderId,
      createdAt: nowIso,
      paidAt: null,
      rejectedAt: null,
      status: "PENDING", // PENDING | PAID | REJECTED
      paymentMethod: "QRIS",
      qrisRef: "QRIS" + Date.now().toString().slice(-8),
      approvalRef: null,
      shippingMethod: shippingMethod === "pickup" ? "Ambil di Kandang (Bogor)" : "Kurir Khusus Unggas",
      customer: {
        nama: customer.nama,
        telepon: customer.telepon,
        alamat: customer.alamat,
        kota: customer.kota,
        catatan: customer.catatan || ""
      },
      items: cart.map(function (c) {
        return {
          id: c.id,
          nama: c.nama,
          gambar: c.gambar,
          satuan: c.satuan,
          hargaNum: c.hargaNum,
          qty: c.qty,
          subtotal: c.hargaNum * c.qty
        };
      }),
      subtotal: totals.subtotal,
      ongkir: totals.ongkir,
      grandTotal: totals.grandTotal
    };

    const orders = getOrders();
    orders.unshift(order);
    saveOrders(orders);
    clearCart();
    broadcastEvent("ORDER_CREATED", { orderId: order.id });
    return order;
  }

  function updateOrderStatus(orderId, newStatus) {
    const orders = getOrders();
    const order = orders.find(function (o) {
      return o.id === orderId;
    });
    if (!order) return null;

    order.status = newStatus;
    if (newStatus === "PAID") {
      order.paidAt = new Date().toISOString();
      order.approvalRef = "APR-" + Math.random().toString(36).substring(2, 8).toUpperCase();
    } else if (newStatus === "REJECTED") {
      order.rejectedAt = new Date().toISOString();
    }
    saveOrders(orders);
    broadcastEvent("ORDER_STATUS_CHANGED", { orderId: order.id, status: newStatus });
    return order;
  }

  // Status badge HTML helper
  function renderStatusBadge(status) {
    if (status === "PAID") {
      return '<span class="status-badge status-paid">&#10003; Paid / Lunas</span>';
    }
    if (status === "REJECTED") {
      return '<span class="status-badge status-rejected">&#10005; Ditolak</span>';
    }
    return '<span class="status-badge status-pending"><span class="pulse-dot"></span> Menunggu Bayar</span>';
  }

  // Deterministic Dummy QRIS SVG Generator (Pure JS, zero libraries)
  function generateDummyQrisSvg(seedText) {
    const size = 25;
    const cell = 8;
    const quiet = 16;
    const totalPx = size * cell + quiet * 2;

    // Simple deterministic hash PRNG
    let hash = 2166136261;
    const text = String(seedText || "NUSANTARA-AVIAN-QRIS");
    for (let i = 0; i < text.length; i++) {
      hash ^= text.charCodeAt(i);
      hash = Math.imul(hash, 16777619);
    }
    function nextBit() {
      hash ^= hash << 13;
      hash ^= hash >>> 17;
      hash ^= hash << 5;
      return (hash >>> 0) % 2 === 1;
    }

    const grid = Array.from({ length: size }, function () {
      return Array(size).fill(false);
    });
    const reserved = Array.from({ length: size }, function () {
      return Array(size).fill(false);
    });

    function placeFinder(r0, c0) {
      for (let r = -1; r <= 7; r++) {
        for (let c = -1; c <= 7; c++) {
          const rr = r0 + r;
          const cc = c0 + c;
          if (rr < 0 || rr >= size || cc < 0 || cc >= size) continue;
          reserved[rr][cc] = true;
          const inOuter = r >= 0 && r <= 6 && c >= 0 && c <= 6;
          const onBorder = r === 0 || r === 6 || c === 0 || c === 6;
          const inInner = r >= 2 && r <= 4 && c >= 2 && c <= 4;
          grid[rr][cc] = inOuter && (onBorder || inInner);
        }
      }
    }

    function placeAlignment(r0, c0) {
      for (let r = -2; r <= 2; r++) {
        for (let c = -2; c <= 2; c++) {
          const rr = r0 + r;
          const cc = c0 + c;
          reserved[rr][cc] = true;
          grid[rr][cc] = Math.abs(r) === 2 || Math.abs(c) === 2 || (r === 0 && c === 0);
        }
      }
    }

    placeFinder(0, 0);
    placeFinder(0, size - 7);
    placeFinder(size - 7, 0);
    placeAlignment(size - 7, size - 7);

    // Timing patterns
    for (let i = 8; i < size - 8; i++) {
      reserved[6][i] = true;
      reserved[i][6] = true;
      grid[6][i] = i % 2 === 0;
      grid[i][6] = i % 2 === 0;
    }

    // Center badge reserve (5x5)
    for (let r = 10; r <= 14; r++) {
      for (let c = 10; c <= 14; c++) {
        reserved[r][c] = true;
        grid[r][c] = false;
      }
    }

    // Fill data cells
    for (let r = 0; r < size; r++) {
      for (let c = 0; c < size; c++) {
        if (!reserved[r][c]) {
          grid[r][c] = nextBit();
        }
      }
    }

    let rects = "";
    for (let r = 0; r < size; r++) {
      for (let c = 0; c < size; c++) {
        if (grid[r][c]) {
          const x = quiet + c * cell;
          const y = quiet + r * cell;
          rects += '<rect x="' + x + '" y="' + y + '" width="' + cell + '" height="' + cell + '" fill="#1c1917"/>';
        }
      }
    }

    const cx = totalPx / 2;
    const cy = totalPx / 2;

    return (
      '<svg xmlns="http://www.w3.org/2000/svg" width="' + totalPx + '" height="' + totalPx + '" viewBox="0 0 ' + totalPx + " " + totalPx + '" role="img" aria-label="Kode QRIS Dummy">' +
      '<rect width="100%" height="100%" fill="#ffffff"/>' +
      rects +
      '<rect x="' + (cx - 24) + '" y="' + (cy - 13) + '" width="48" height="26" rx="4" fill="#ffffff" stroke="#1c1917" stroke-width="1.5"/>' +
      '<text x="' + cx + '" y="' + (cy + 4) + '" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#1c1917">QRIS</text>' +
      "</svg>"
    );
  }

  // Shared Topbar
  function renderTopbar(activePage) {
    const holder = document.getElementById("site-topbar");
    if (!holder) return;

    const count = getCartCount();
    holder.innerHTML =
      '<nav class="topbar">' +
      '  <div class="topbar-inner">' +
      '    <a href="index.html" class="topbar-brand">Nusantara Avian <span>Store</span></a>' +
      '    <div class="topbar-nav">' +
      '      <a href="index.html" class="nav-link ' + (activePage === "katalog" ? "active" : "") + '">Katalog</a>' +
      '      <a href="cart.html" class="nav-link ' + (activePage === "cart" ? "active" : "") + '">Keranjang <span class="cart-badge" id="nav-cart-count">' + count + "</span></a>" +
      '      <a href="history.html" class="nav-link ' + (activePage === "history" ? "active" : "") + '">Riwayat Transaksi</a>' +
      "    </div>" +
      "  </div>" +
      "</nav>";
  }

  function updateNavBadge() {
    const badge = document.getElementById("nav-cart-count");
    if (badge) {
      badge.textContent = String(getCartCount());
    }
  }

  // Toast helper
  let toastTimer = null;
  function showToast(message) {
    let el = document.getElementById("na-toast");
    if (!el) {
      el = document.createElement("div");
      el.id = "na-toast";
      el.className = "toast";
      document.body.appendChild(el);
    }
    el.textContent = message;
    el.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      el.classList.remove("show");
    }, 2400);
  }

  // Keep nav badge synced across tabs
  onRealtimeUpdate(function () {
    updateNavBadge();
  });

  window.NAStore = {
    daftarAyamHias: daftarAyamHias,
    formatRupiah: formatRupiah,
    formatWaktu: formatWaktu,
    escapeHtml: escapeHtml,
    getCart: getCart,
    addToCart: addToCart,
    updateCartQty: updateCartQty,
    removeFromCart: removeFromCart,
    clearCart: clearCart,
    getCartCount: getCartCount,
    getCartTotals: getCartTotals,
    getOrders: getOrders,
    getOrderById: getOrderById,
    createOrder: createOrder,
    updateOrderStatus: updateOrderStatus,
    renderStatusBadge: renderStatusBadge,
    generateDummyQrisSvg: generateDummyQrisSvg,
    renderTopbar: renderTopbar,
    updateNavBadge: updateNavBadge,
    showToast: showToast,
    onRealtimeUpdate: onRealtimeUpdate
  };
})();
