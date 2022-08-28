<template>
  <section id="profile" class="overflow-hidden">
    <div class="container">
      <div class="one">
        <div class="space-for-hero-content">
          <div
            class="row align-items-center gy-5 justify-content-center flex-row-reverse"
          >
            <div class="col-lg-7 col-md-10 text-center">
              <div class="display-1 title primary-color">
                <span> What's Rewiu ? </span>
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
          <div class="col-md-10 col-lg-8">
            <div class="display-1 title">Why must choose Rewiu ?</div>
          </div>
        </div>

        <div class="row g-5 justify-content-center mt-5">
          <div class="col-lg-4 col-sm-6 col-10">
            <div class="card shadow-">
              <div class="card-body text-center">
                <i class="fas fa-handshake display-2 primary-color"></i>
                <div class="fs-1 fw-semibold mt-2">Trusted</div>
                <div class="mt-2 opacity-75">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dicta, facere?
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6 col-10">
            <div class="card shadow-">
              <div class="card-body text-center">
                <i class="fas fa-grin-stars display-2 primary-color"></i>
                <div class="fs-1 fw-semibold mt-2">Best Seller</div>
                <div class="mt-2 opacity-75">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dicta, facere?
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6 col-10">
            <div class="card shadow-">
              <div class="card-body text-center">
                <i class="fas fa-certificate display-2 primary-color"></i>
                <div class="fs-1 fw-semibold mt-2">Verified BPOM</div>
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

#profile .title span {
  position: relative;
}
#profile .title {
  font-family: var(--fontHeader);
  font-weight: bold;
}
#profile .title span::after {
  content: "";
  position: absolute;
  bottom: -5px;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  height: 6px;
  border-radius: 50%;
  background-color: var(--primaryColor);
}
#profile .two .title {
  padding-left: 1.5rem;
  border-radius: 10px;
  border-left: 8px solid var(--primaryColor);
}
</style>
