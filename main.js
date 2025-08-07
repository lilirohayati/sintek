const hamburger = document.querySelector('.hamburger');
const dropdownMenu = document.querySelector('.dropdown-menu');
const track = document.querySelector('.carousel-track');
const slides = document.querySelectorAll('.carousel');
const produk = [
  { nama: "Minimalist Button-up Blouse", hargaAsli: 900000, hargaDiskon: 500000, gambar: "images/model1.png" },
  { nama: "Oversize Denim Shirt", hargaAsli: 800000, hargaDiskon: 650000, gambar: "images/model2.png" },
  { nama: "Sharp Collar Button-up Shirt", hargaAsli: 900000, hargaDiskon:  500000, gambar: "images/model3.png" },
  { nama: "Gathered Puff Sleeve Blouse", hargaAsli: 850000, hargaDiskon: 500000, gambar: "images/model4.png" },
  { nama: "Minimalist Knit Pullover", hargaAsli: 780000, hargaDiskon: 500000, gambar: "images/model5.png" },
  { nama: "Striped Oversized Shirt", hargaAsli: 700000, hargaDiskon: 450000, gambar: "images/model6.png" },
  { nama: "Puff Sleeve Corset-Style", hargaAsli: 900000, hargaDiskon: 550000, gambar: "images/model7.png" },
  { nama: "Pocket Front Shirt", hargaAsli: 900000, hargaDiskon: 500000, gambar: "images/model8.png" },
  { nama: "Wrap Tie Blazer", hargaAsli: 700000, hargaDiskon: 450000, gambar: "images/model9.png" },
  { nama: "Wrap Tier Blazer", hargaAsli: 700000, hargaDiskon: 450000, gambar: "images/model10.png" },
  { nama: "Sailor Collar Pintuck Blouse", hargaAsli: 900000, hargaDiskon: 550000, gambar: "images/model11.png" },
  { nama: "Colllares Sheer Blouse", hargaAsli: 400000, hargaDiskon: 350000, gambar: "images/model12.png" },
  { nama: "Scarf Collar Blouse", hargaAsli: 890000, hargaDiskon: 600000, gambar: "images/model13.png" },
  { nama: "Drawstring Waist Blouse", hargaAsli: 765000, hargaDiskon: 600000, gambar: "images/model1.png" },
  { nama: "Sheer White Button-up Shirt", hargaAsli: 697000, hargaDiskon: 450000, gambar: "images/model15.png" },
];
let currentSlide = 0;

document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    duration: 1000, // durasi animasi dalam ms
    once: false,      // animasi hanya muncul sekali saat scroll
    mirror: true
  });
});

hamburger.addEventListener('click', () => {
  dropdownMenu.classList.toggle('show');
});

function moveToSlide(index) {
    currentSlide = index;
    const slideWidth = slides[0].offsetWidth;
    track.style.transform = `translateX(-${slideWidth * currentSlide}px)`;
}

// Geser otomatis tiap 4 detik
setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    moveToSlide(currentSlide);
}, 3500);

function showProducts(jumlah = 5) {
  const container = document.getElementById("product-list");
  if (!container) return;
  container.innerHTML = "";
  produk.slice(0, jumlah).forEach(p => {
    container.innerHTML += `
      <a href="detail.html?id=${produk.indexOf(p)}" class="card">
    <img src="${p.gambar}" alt="${p.nama}">
    <h3>${p.nama}</h3>
    <p class="harga-asli">
      ${p.hargaAsli.toLocaleString("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 2 })}
    </p>
    <p class="harga-diskon">
      ${p.hargaDiskon.toLocaleString("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 2 })}
    </p>
  </a>
    `;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  showProducts(5);
});