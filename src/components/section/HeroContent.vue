<script setup>
import { ref, onMounted } from "vue";
const background = ref(null);

onMounted(() => {
  let oldScroll = 0;
  window.addEventListener("scroll", function () {
    let scroll = window.scrollY;

    if (scroll < 300) {
      // setTimeout(() => {
      background.value.style.setProperty("--translateY", "-" + scroll + "px");
      // console.log("yes");
      // }, 50);
    }
  });
});
</script>
<template>
  <section id="hero-content" ref="background">
    <div class="container">
      <div class="space-top"></div>
      <div class="row gy-5 justify-content-center position-relative">
        <div class="col-lg-7">
          <div class="display-2 mt-4 text-lg-start text-center title">
            The New and Best beauty products
          </div>
          <div
            class="fs-5 mt-5 text-md-start text-center opacity-75 fw-bold subtitle"
          >
            Rewiu Skincare, suatu produk kecantikan terbaru dan terbaik dengan
            harga yang sangat terjangkau namun dapat memberikan hasil yang
            sangat memuaskan
          </div>

          <div
            class="mt-5 d-flex align-items-center justify-content-lg-start justify-content-center flex-sm-row flex-column"
          >
            <a
              href="https://api.whatsapp.com/send?phone=6282293600855&text=Hai,%20I%20Want%20to%20get%20products%20of%20Rewiu!!!"
              target="_blank"
              class="rounded-pill fs-5 btn-primary-color button-hero-content btn shadow"
            >
              Get Products
            </a>
            <button
              @click="this.toProfile"
              class="btn-outline-primary-color ms-sm-4 ms-0 mt-4 mt-sm-0 fs-5 button-hero-content rounded-pill btn shadow"
            >
              What's Rewiu ?
            </button>
          </div>
        </div>
        <div class="col-lg-5 col-sm-8 col-10">
          <div class="img-hero-content ps-lg-5 ps-0">
            <div class="parent-woman w-75">
              <img src="/images/woman.png" alt="" class="w-100" />
            </div>
            <img src="/images/hero-content-1-tp.png" alt="" class="product" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.space-top {
  margin-top: 8rem;
}
.img-hero-content {
  position: relative;

  width: 100%;
}
.img-hero-content .parent-woman {
  z-index: 2;
  position: relative;
}
.img-hero-content::after {
  z-index: 1;
  content: "";
  width: 75%;
  inset: 0;
  border-radius: 5%;
  transform: translate(150px, 80px);
  top: 10px;
  position: absolute;
  height: 100%;
  border: 3px dashed black;
}
.img-hero-content .parent-woman {
  overflow: hidden;

  border-radius: 5%;
}
.img-hero-content .product {
  position: absolute;
  z-index: 3;
  bottom: -150px;
  right: 0;
}
#hero-content .title {
  /* font-family: var(--fontHeader) !important; */
  font-weight: bold;
  /* color: var(--primaryColor); */
}
#hero-content .button-hero-content {
  padding: 1rem 2rem;
}
#hero-content {
  position: relative;
}
#hero-content::before {
  content: "";
  inset: -50px 0 -200px 0;
  /* background-color: red; */
  position: absolute;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  /* background-attachment: fixed; */
  opacity: 0.2;
  background-image: url(/assets/circle-bg.png);
  transform: translateY(var(--translateY, 0));
  transition: all 1s linear;
}
@media (max-width: 569px) {
  .img-hero-content::after {
    transform: translate(60px, 40px);
  }
  /* #hero-content .button-hero-content {
    padding: 0.5rem 1rem;
  } */
  .img-hero-content .product {
    width: 40%;
    right: 50px;
  }
  #hero-content::before {
    background-image: url(/assets/circle-bg-mobile.png);
  }
}
</style>
