<template>
  <section id="hero-content">
    <div class="container">
      <div class="space-top"></div>
      <div class="row gy-5 justify-content-center position-relative">
        <div class="col-lg-6">
          <div class="display-1 text-lg-start text-center title">
            Rewiu Skincare
          </div>
          <div
            class="fs-5 mt-4 text-md-start text-center opacity-75 fw-light subtitle"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            expedita consequuntur cum quo veritatis exercitationem nihil sint
            modi, dolores quam?
          </div>

          <div
            class="mt-5 d-flex align-items-center justify-content-lg-start justify-content-center flex-sm-row flex-column"
          >
            <button class="rounded-pill fs-5 btn-primary-color btn shadow">
              Get Product
            </button>
            <button
              class="btn-outline-primary-color ms-sm-4 ms-0 mt-4 mt-sm-0 fs-5 rounded-pill btn shadow"
            >
              What's Rewiu ?
            </button>
          </div>
        </div>
        <div class="col-lg-6 col-sm-8">
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
  margin-top: 11rem;
}
.img-hero-content {
  position: relative;
  /* overflow: hidden; */
  width: 100%;

  height: 100%;
  /* background-color: red; */
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
  transform: translate(150px, 100px);
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
  font-family: var(--fontHeader) !important;
  font-weight: bold;
  /* color: var(--primaryColor); */
}
#hero-content button {
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
  background-attachment: fixed;
  opacity: 0.1;
  background-image: url(/assets/circle-bg.png);
}
@media (max-width: 569px) {
  .img-hero-content::after {
    transform: translate(60px, 30px);
  }
}
</style>
