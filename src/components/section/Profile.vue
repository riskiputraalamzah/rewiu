<template>
  <section id="profile" class="overflow-hidden pb-5 mb-5">
    <div class="container">
      <div class="one">
        <div class="space-for-hero-content">
          <div
            class="row align-items-center gy-5 justify-content-center flex-row-reverse"
          >
            <div class="col-lg-7 col-md-10 text-center">
              <div class="display-3 title">
                <span class="border-bottom-radius"> What's Rewiu ? </span>
              </div>

              <img
                src="/assets/question.png"
                alt=""
                class="img-fluid d-lg-none d-block"
              />

              <div class="fs-5 mt-lg-5 mt-0 description">
                <b class="fs-1 lh-1">Rewiu</b> is Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Neque esse sequi officia ipsum
                cum. Iure dolorem dolore reiciendis at omnis labore sed iusto
                quasi rerum, dignissimos exercitationem laborum repellat quidem
                facilis, laudantium dicta vero repudiandae. Quas aliquid
                veritatis eius voluptatem natus architecto quos modi quo
                delectus, doloremque temporibus! Aliquam, ipsum.
              </div>
            </div>
            <div class="col-lg-5 d-lg-block d-none">
              <div class="p-5">
                <img src="/assets/question.png" alt="" class="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="two mt-5 pt-5">
        <div class="row">
          <div class="col-12">
            <div class="display-3 title border-left-primary-color">
              Why must choose Rewiu ?
            </div>
          </div>
        </div>

        <div class="row g-5 justify-content-center mt-4">
          <div class="col-lg-4 col-sm-6 col-10">
            <div class="card shadow border-0">
              <div class="card-body p-4 text-center">
                <i class="fas fa-handshake display-2 primary-color"></i>
                <div class="fs-3 fw-semibold mt-2">Trusted</div>
                <div class="mt-2 opacity-75">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dicta, facere?
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6 col-10">
            <div class="card shadow border-0">
              <div class="card-body p-4 text-center">
                <i class="fas fa-grin-stars display-2 primary-color"></i>
                <div class="fs-3 fw-semibold mt-2">Best Seller</div>
                <div class="mt-2 opacity-75">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dicta, facere?
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6 col-10">
            <div class="card shadow border-0">
              <div class="card-body p-4 text-center">
                <i class="fas fa-certificate display-2 primary-color"></i>
                <div class="fs-3 fw-semibold mt-2">Verified BPOM</div>
                <div class="mt-2 opacity-75">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dicta, facere?
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
.space-for-hero-content {
  margin-top: 15rem;
}

#profile .title {
  font-family: var(--fontHeader);
  font-weight: bold;
}
</style>
