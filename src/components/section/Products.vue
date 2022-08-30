<script setup>
const data = [
  {
    src: "/images/hero-content-1-tp.png",
    title: "Facial Wash",
    manfaat:
      "Mengangkat sel kulit mati, membersihkan kotoran/debu dan sisa makeup serta membantu mencerahkan kulit wajah",
    bahanPembuatan:
      "cocamide DEA, fragrance, glycerin, proplene glycol, aqua, disodium EDTA, glycol distearate, lauryl betaine,sodium chioride, sodium laureth sulfate, DMDM Hydantoin",
    caraPakai: [
      "Cuci tangan terlebih dahulu",
      "Basuh wajah dengan air, tuangkan rewiu facial wash secukupnya di tangan",
      "Gosok secara berlahan hingga berbusa, usapkan rewiu facial wash keseluruh wajah & leher hingga rata dengan berikan sedikit pijatan",
      "Dapat didiamkan selama 2-3 menit ataulangsung dibilas dengan air hingga bersih",
      "Gunakan rewiu facial wash setiap kali mandi atau saat membersihkan kulit wajah untuk mendapatkan hasil yang memuaskan",
    ],
    informasiTerkait: "<p>POM : NA18171202872</p> <p>Exp : 070724 21182019</p>",
  },
  {
    src: "/assets/produk/toner.png",
    title: "Toner",
    manfaat:
      "Membersihkan kotoran dan sisa makeup serta mengoptimalkan pembersihan wajah yang kurang maksimal ketika mencuci wajah. Toner mempunyai formula dengan kandungan alpha arbutin bermanfaat untuk membantu mencerahkan kulit. Selain itu terdapat kandungan licorice root extract dan salicylic acid sebagai anti bakteri dan anti flamasi yaitu membantu membersihkan pori-pori yang tersumbat dan membantu menyembuhkan jerawat yang membandel.",
    bahanPembuatan:
      "licorice root extract HS2511G, salicylic acid, alcohol, aqua, arbutin, glycolic acid.",
    caraPakai: [
      "Tuangkan secukupnya toner pada kapas",
      "Lalu usapkan perlahan pada wajah dan leher",
      "Gunakan toner setelah menggunakan facial wash pada pagi dan malam hari secara rutin untuk lebih memaksimalkan pembersihan wajah ",
    ],
    informasiTerkait: "<p>POM : NA18131201997</p> <p>Exp : 270923 2085021</p>",
  },
  {
    src: "/assets/produk/day-cream.png",
    title: "Day Cream",
    manfaat:
      "Mengandung ekstrak licorice dan bahan anti UV yang dapat melindungi kulit dari paparan sinar matahari dan mudah diserap kulit. Melindungi kulit dari polusi serta zat berbahaya lainnya",
    bahanPembuatan:
      "Aqua, stearic acid, Licorice Extract, Glycerine, Cetyl Alcohol, Isopropyl myristate, octlyl methoxycinnamate, benzophenone, glycol distrate, triethanolamine, lanonin, BHT, titanium dioxide, fragrance, methylparaben, aloe barbadensis, lanosterol esters, beeswax, CI 19140.",
    caraPakai: [
      "Setelah selesai memakai perawatan kulit anda, oleskan day cream untuk setiap bagian yang sering terkena sinar matahari seperti wajah, leher, lengan dan kaki",
    ],
    informasiTerkait: "<p>POM : NA18200107171</p> <p>Exp : 070723 2159003</p>",
  },
  {
    src: "/assets/produk/night-cream.png",
    title: "Night Cream",
    manfaat:
      "Menutrisi dan memperbaiki struktur kulit, mengencangkan wajah, mencerahkan dan meratakan warnanya bekerja maksimal pada malam hari dengan penambahan extra brightening complex",
    bahanPembuatan:
      "Aqua, stearic acid, Licorice Extract, Glycerine, Cetyl Alcohol, Isopropyl myristate, octlyl methoxycinnamate, benzophenone, glycol distrate, triethanolamine, lanonin, BHT, titanium dioxide, fragrance, methylparaben, aloe barbadensis, lanosterol esters, beeswax, CI 19140",
    caraPakai: [
      "Setelah selesai memakai perawatan kulit anda, oleskan night cream untuk setiap bagian yang sering terkena sinar matahari seperti wajah, leher, lengan dan kaki.",
    ],
    informasiTerkait: "<p>POM : NA18200107172</p> <p>Exp : 070723 21279003</p>",
  },
];
</script>
<template>
  <section id="products">
    <div class="container py-5">
      <div class="display-3 font-header fw-bold text-center">
        <span class="border-bottom-radius">Products of Rewiu </span>
      </div>

      <div class="accordion accordion-flush mt-5" id="accordionFlushExample">
        <div
          class="accordion-item bg-transparent"
          v-for="(item, i) in data"
          :key="i"
        >
          <h2 class="accordion-header" :id="'heading-' + i">
            <button
              :class="[
                'accordion-button',
                'border-0',
                'fs-2',
                'roboto-slab',
                'bg-transparent',
                i == 0 ? '' : 'collapsed',
              ]"
              type="button"
              data-bs-toggle="collapse"
              :data-bs-target="'#collapse-' + i"
              :aria-expanded="i == 0 ? 'true' : 'false'"
              :aria-controls="'collapse-' + i"
            >
              {{ item.title }}
            </button>
          </h2>
          <div
            :id="'collapse-' + i"
            :class="['accordion-collapse', 'collapse', i == 0 ? 'show' : '']"
            :aria-labelledby="'heading-' + i"
          >
            <div class="accordion-body pb-5">
              <div class="row gy-5">
                <div class="col-md-5 text-center col-lg-4 col-12">
                  <img :src="item.src" alt="image-product" class="img-fluid" />
                </div>
                <div class="col-md-7 col-lg-8 col-12">
                  <div><strong>Manfaat</strong> : {{ item.manfaat }}</div>
                  <div class="mt-4">
                    <strong>Petunjuk Penggunaan</strong> :
<div v-if="item.caraPakai.length > 1">
                    <ol type="1">
                      <li
                        class="py-1"
                        v-for="(list, listI) in item.caraPakai"
                        :key="listI"
                        v-text="list"
                      ></li>

                    </ol>
</div>
<div v-else class="isi-informasi-terkait">
{{item.caraPakai[0]}}
</div>


                  </div>
                  <div class="mt-4">
                    <strong>Informasi Terkait Produk</strong>
                    <div
                      class="isi-informasi-terkait"
                      v-html="item.informasiTerkait"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
#products {
  position: relative;
}
#products .container {
  position: relative;
  z-index: 2;
}
#products::before {
  content: "";
  inset: 0;
  /* background-color: red; */
  position: absolute;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  opacity: 0.2;
  background-image: url(/assets/blob-1.png);
}
.isi-informasi-terkait {
  padding: 1rem 0 0 1rem;
}

.accordion-button:focus {
  border: 0 !important;
  box-shadow: none;
}
.accordion-button {
  color: black !important;
  box-shadow: none !important;
}
@media (max-width: 569px) {
  #products::before {
    background-image: url(/assets/blob-1-mobile.png);
  }
}
</style>
