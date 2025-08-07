const produk = [
  {
    nama: "Minimalist Button-up Blouse",
    hargaAsli: 900000,
    hargaDiskon: 500000,
    gambar: "images/model1.png",
    deskripsi: "Blus coklat hangat berdesain feminin dengan siluet santai dan kerah mandarin (shanghai collar) yang memberikan sentuhan modern dan elegan. Lengan puff tipis memberikan volume manis, sempurna untuk gaya chic yang effortless. Bahan rayon blend membuat blus ini ringan, jatuh, dan nyaman dipakai seharian.",
    detail: [
      { label: "Bahan", value: "Rayon-polyster blend" },
      { label: "Kerah", value: "Mandarin / shanghai" },
      { label: "Kancing", value: "Full button down dengan warna senada" },
      { label: "Lengan", value: "Panjang puff dengan kancing manset kecil" },
      { label: "Fit", value: "Semi loose" }
    ],
    tabelUkuran: "images/size-chart3.png"
  },
  {
    nama: "Oversize Denim Shirt",
    hargaAsli: 800000,
    hargaDiskon: 650000,
    gambar: "images/model2.png",
    deskripsi: "Tampil effortless dengan kemeja denim oversized ini! Dibuat dari bahan denim ringan yang nyaman dipakai seharian, desainnya yang longgar memberi kesan santai namun tetap stylish. Dilengkapi dengan dua kantong depan yang fungsional serta detail kancing full di bagian depan, kemeja ini cocok dipadukan dengan celana kulot, jeans, atau rok favoritmu.",
    detail: [
      { label: "Bahan", value: "Denim ringan" },
      { label: "Warna", value: "Biru denim" },
      { label: "Model", value: "Oversize fit" },
      { label: "", value: "Lengan panjang dengan manset kancing" },
      { label: "", value: "Dua kantong depan" },
      { label: "", value: "Kancing depan full" },
    ],
    tabelUkuran: "images/size-chart3.png"
  },
  {
    nama: "Sharp Collar Button-up Shirt",
    hargaAsli: 900000,
    hargaDiskon: 500000,
    gambar: "images/model3.png",
    deskripsi: "Kemeja putih lengan panjang dengan potongan loose fit, memberikan kesan minimalis namun tetap tegas. Dihiasi dengan detail garis jahitan hitam kontras pada kerah, kancing, dan saku dada, menciptakan nuansa clean dan profesional. Terbuat dari bahan katun linen premium yang breathable dan nyaman dikenakan sepanjang hari. Cocok untuk gaya semi-formal maupun kasual.",
    detail: [
      { label: "Bahan", value: "100% Linen katun" },
      { label: "Kerah", value: "Klasik tajam" },
      { label: "Kancing", value: "Hitam pekat" },
      { label: "", value: "Saku dada dekoratif" },
      { label: "Lengan", value: "Panjang dengan kancing diujung manset" },
      { label: "Fit", value: "Loose / relaxed" }
    ],
    tabelUkuran: "images/size-chart3.png"
  },
  {
    nama: "Gathered Puff Sleeve Blouse",
    hargaAsli: 850000,
    hargaDiskon: 500000,
    gambar: "images/model4.png",
    deskripsi: "Elegan, feminin, dan penuh karakter-blus ini tampil mencuri perhatian lewat detail lengan puff dan kerutan lembut di bahu. Siluet longgar dengan potongan manis membuatnya nyaman dikenakan seharian tanpa mengorbankan gaya. Warnanya yang kalem menjadikannya pilihan tepat untuk tampilan yang effortless namun tetap elegan. Cocok digunakan saat menghadiri acara semi-formal, dinner romantis, atau sekaar tampil cantik saat hangout bersama teman.",
    detail: [
      { label: "Bahan", value: "Rayon silky, lembut dan jatuh alami" },
      { label: "Detail", value: "Lengan puff dengan manset, kerutan halus dibagian atas" }
    ],
    tabelUkuran: "images/size-chart3.png"
  },
  {
    nama: "Minimalist Knit Pullover",
    hargaAsli: 780000,
    hargaDiskon: 500000,
    gambar: "images/model5.png",
    deskripsi: "Basic piece yang wajib dimiliki setiap wardrobe modern! Sweater rajut ini hadir dengan potongan sederhana dan warna netral yang timeless. Teksturnya lernbut di kulit, hangat namun tidak berat-ideal untuk cuaca sejuk atau ruangan ber-AC. Potongannya yang relaxed memberikan kenyamanan ekstra, menjadikannya teman setia untuk hari-hari sibuk atau santai di akhir pekan.",
    detail: [
      { label: "Bahan", value: "Premium knit cotton, tidak gatal dan lentur" },
      { label: "Detail", value: "Leher bulat, lengan panjang, potongan loose" }
    ],
    tabelUkuran: "images/size-chart3.png"
  },
  {
    nama: "Striped Oversized Shirt",
    hargaAsli: 700000,
    hargaDiskon: 450000,
    gambar: "images/model6.png",
    deskripsi: "Tampil bold tapi tetap rapi dengan Striped Oversized Shirt ini. Desain garis-garis klasik diberi sentuhan modern lewat potongan oversized dan tambahan dasi matching yang bisa dilepas pasang sesuai mood kamu. Kemeja ini memberi kesan edgy namun tetap chic, menjadikannya pilihan ideal untuk tampil beda ke kampus, ke kantor kreatif, atau sekadar ngopi sore. Bahannya adem dan nyaman dipakai seharian.",
    detail: [
      { label: "Motif", value: "Striped (garis vertikal)" },
      { label: "Kerah", value: "Klasik (shirt collar)" },
      { label: "Lengan", value: "Panjang dengan manset kancing" },
      { label: "Bahan", value: "Katun blend atau poliester ringan, nyaman dan tidak kaku" },
      { label: "Potongan", value: "Oversize fit, loose dibadan" },
      { label: "Kantong", value: "1 kantong dada matching pattern" },
      { label: "Gaya", value: "Kasual, streetwear, korean-style" },
    ],
    tabelUkuran: "images/size-chart3.png"
  },
  {
    nama: "Puff Sleeve Corset-Style",
    hargaAsli: 900000,
    hargaDiskon: 550000,
    gambar: "images/model7.png",
    deskripsi: "Perpaduan antara gaya klasik dan siluet feminin yang memukau. Blus ini memiliki desain lengan puff dan potongan bagian pinggang yang menyerupai korset, menciptakan lekuk tubuh secara natural tanpa terasa ketat. Kancing depan tersembunyi menjaga tampilan tetap clean dan elegan. Cocok untuk kamu yang ingin tampil menonjol tanpa berlebihan, baik untuk acara resmi maupun santai.",
    detail: [
      { label: "Bahan", value: "Rayon blend, jatuh dan sejuk dikulit" },
      { label: "Detail", value: "Lengan volume puff, waist shaping, kerah bulat" }
    ],
    tabelUkuran: "images/size-chart3.png"
  },
  {
    nama: "Pocket Front Shirt",
    hargaAsli: 900000,
    hargaDiskon: 500000,
    gambar: "images/model8.png",
    deskripsi: "Tampil elegan dan profesional dengan blouse soft sage berdesain modern ini. Dilengkapi dua kantong depan dan potongan kerah lebar ala sailor collar, blouse ini menghadirkan kesan smart casual yang chic dan modis.",
    detail: [
      { label: "Model", value: "Blouse wanita lengan panjang" },
      { label: "Bahan", value: "Katun rayon premium" },
      { label: "Kancing", value: "Full kancing depan" }
    ],
    tabelUkuran: "images/size-chart3.png"
  },
  {
    nama: "Wrap Tie Blazer",
    hargaAsli: 700000,
    hargaDiskon: 450000,
    gambar: "images/model9.png",
    deskripsi: "Tampil elegan dan profesional dengan blouse soft sage berdesain modern ini. Dilengkapi dua kantong depan dan potongan kerah lebar ala sailor collar, blouse ini menghadirkan kesan smart casual yang chic dan modis.",
    detail: [
      { label: "Model", value: "Blouse wanita lengan panjang" },
      { label: "Bahan", value: "Katun rayon premium" },
      { label: "Kancing", value: "Full kancing depan" }
    ],
    tabelUkuran: "images/size-chart3.png"
  },
  {
    nama: "Wrap Tier Blazer",
    hargaAsli: 700000,
    hargaDiskon: 450000,
    gambar: "images/model10.png",
    deskripsi: "Tampil chic dan profesional dengan wrap blazer bergaya kontemporer ini. Desainnya yang unik dengan potongan asimetri dan tali serut samping memberikan kesan modern namun tetap elegan. Terbuat dari bahan berkualitas yang ringan dan jatuh sempurna, blazer ini cocok dikenakan untuk berbagai kesempatan dari kegiatan kantor hingga acara kasual stylish.",
    detail: [
      { label: "Bahan", value: "Sheer chiffon atau katun transparan - ringan & flowy" },
      { label: "Model", value: "Long sleeve , kerah bulat (round neck), full kancing depan " },
      { label: "Kancing", value: "Warna senada, berukuran kecil, elegan" },
      { label: "Potongan", value: "Longgar (loose fit) dengan bagian bawah berbentuk V mengarah ke samping"},
      { label: "Ukuran", value: "All size fit to L"}
    ],
    tabelUkuran: "images/size-chart3.png"
  },
  {
    nama: "Sailor Collar Pintuck Blouse",
    hargaAsli: 900000,
    hargaDiskon: 550000,
    gambar: "images/model11.png",
    deskripsi: "Blouse wanita berdesain manis dan elegan ini menonjolkan kesan feminin klasik melalui kerah bulat (peter pan collar) yang lembut. Terbuat dari bahan katun berkualitas, blouse ini nyaman dikenakan dan memiliki potongan yang fit di bagian pinggang sehingga membentuk siluet tubuh dengan indah.",
    detail: [
      { label: "Bahan", value: "Katun premium (ringan,adem,dan menyerap keringat)" },
      { label: "Kerah", value: "Peter pan collar (kerah bulat klasik)" },
      { label: "Lengan", value: "Panjang dengan manset kancing" },
      { label: "Kancing", value: "Full button-down dibagian depan" },
      { label: "Potongan", value: "Slim fit dengan jahitan princess cut didepan untuk efek pinggang ramping"},
      { label: "Gaya", value: "Feminim, rapi, dan timeless"}
    ],
    tabelUkuran: "images/size-chart3.png"
  },
  {
    nama: "Colllares Sheer Blouse",
    hargaAsli: 400000,
    hargaDiskon: 350000,
    gambar: "images/model12.png",
    deskripsi: "Blouse sheer elegan ini hadir dengan tampilan simpel namun classy! Terbuat dari bahan ringan dan transparan, memberikan kesan feminin yang anggun sekaligus stylish. Cocok dipakai untuk daily wear, ke kampus, hingga office look.",
    detail: [
      { label: "Bahan", value: "Sheer chiffon atau katun transparan - ringan & flowy" },
      { label: "Model", value: "Long sleeve, kerah bulat (round neck), full kancing depan" },
      { label: "Kancing", value: "Warna senada, berukuran kecil, elegan" },
      { label: "Potongan", value: "Longgar (loose fit) dengan bagian bawah berbentuk V mengarah ke samping"},
      { label: "Ukuran", value: "All size fit to L"}
    ],
    tabelUkuran: "images/size-chart3.png"
  },
  {
    nama: "Scarf Collar Blouse",
    hargaAsli: 890000,
    hargaDiskon: 600000,
    gambar: "images/model13.png",
    deskripsi: "Tampil anggun dan menawan dengan blouse wanita berdesain elegan ini. Didesain dengan sentuhan klasik modern, blouse ini memiliki detail kerah syal (scarf collar) yang menjuntai ke depan, memberikan aksen feminin sekaligus formal. Terbuat dari bahan yang ringan dan bernapas, blouse ini nyaman dikenakan sepanjang hari.",
    detail: [
      { label: "Model", value: "Blouse wanita lengan panjang" },
      { label: "Desain", value: "Kerah lebar dengan pita panjang(scraf collar) dibagiaan leher" },
      { label: "Bahan", value: "Katun rayon premium atau linen blend(ringan dan tidak menerawang)" },
      { label: "Potongan", value: "Reguler fit dengan sedikit puff dibagian bahu" },
      { label: "Lengan", value: "Panjang dengan kerut halus dipundak" },
      { label: "Panjang lengan", value: "3/4 (dengan lipatan manis diujung" },
      { label: "Kancing", value: "Full kancing depan (bisa dipakaai sebagai outer" },
      { label: "Kancing", value: "Full kancing depan" }
    ],
    tabelUkuran: "images/size-chart3.png"
  },
  {
    nama: "Drawstring Waist Blouse",
    hargaAsli: 765000,
    hargaDiskon: 600000,
    gambar: "images/model1.png",
    deskripsi: "Tampil manis dan modis dengan blouse serut elegan ini! Desainnya yang unik dengan detail tali serut di bagian pinggang memberikan siluet ramping dan feminin, cocok untuk kamu yang ingin terlihat anggun namun tetap nyaman.",
    detail: [
      { label: "Bahan", value: "Katun premium - ringan,adem, dan tidak mudah kusut" },
      { label: "Model", value: "Kancing depan, kerah klasik, lengan balon panjang" },
      { label: "Tali serut dipinggang (adjustable)" },
      { label: "Manset lengan elastis"},
      { label: "Potongan loose diatas, ramping dibagian pinggang"}
    ],
    tabelUkuran: "images/size-chart3.png"
  },
  {
    nama: "Sheer White Button-up Shirt",
    hargaAsli: 697000,
    hargaDiskon: 450000,
    gambar: "images/model15.png",
    deskripsi: "Tampil elegan dan simpel dengan blouse putih bergaya minimalis ini! Terbuat dari bahan sheer yang ringan dan adem, cocok untuk kamu yang ingin tampil chic tanpa ribet. Desain oversized memberikan kenyamanan ekstra, dengan potongan asimetris yang stylish dan kerah klasik untuk tampilan lebih rapi.",
    detail: [
      { label: "Bahan", value: "Sheer katun/organza ringan, adem dan jatuh" },
      { label: "Panjang lengan", value: "3/4 (dengan lipatan manis diujung)"},
      { label: "Kancing", value: "Full kancing depan" },
      { label: "Model", value: "Oversize casual, hem bawah lebih panjang" }
    ],
    tabelUkuran: "images/size-chart3.png"
  },
];

const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const p = produk[id];
const container = document.getElementById("detail-container");

if (p) {
  const detailHTML = p.detail.map(item => {
  const label = item.label || "";
  const value = item.value || "";
  if (!label && !value) return ""; // jika dua-duanya kosong, skip
  if (!label) return `<li>${value}</li>`;
  if (!value) return `<li>${label}</li>`;
  return `<li>${label}: ${value}</li>`;
}).join("");


  container.innerHTML = `
    <div class="gambar">
      <img src="${p.gambar}" alt="${p.nama}">
    </div>

    <div class="harga-group">
      <p class="harga-asli">${p.hargaAsli.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}</p>
      <div class="harga">${p.hargaDiskon.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}</div>
    </div>

    <h2>${p.nama}</h2>

    <div class="btn-group-vertical">
      <button class="add-to-cart">Add to cart</button>
      <button class="order-phone">Order by phone</button>
    </div>

    <div class="deskripsi">
    <p>${p.deskripsi}</p>
    </div>
    <h4>Detail Produk:</h4>
    <ul>${detailHTML}</ul>
    

    <h4>Panduan Ukuran:</h4>
    <div class="tabel-ukuran">
      <img  src="${p.tabelUkuran}" alt="Tabel Ukuran">
    </div>
  `;
} else {
  container.innerHTML = "<p>Produk tidak ditemukan.</p>";
}
