<template>
  <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
    <div class="container">
      <a class="navbar-brand" href="#">
        <img src="/assets/logo-white.png" alt="logo-brand" width="120" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link class="nav-link" active-class="active" to="/"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" @click.prevent="this.toProfile" href="#"
              >About</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Products</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contacts</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar .nav-link.active {
  font-weight: 600;
  color: white;
  opacity: 1;
}
.navbar .nav-link {
  color: white;
  opacity: 0.8;
}

.navbar {
  background-color: var(--primaryColor);
}
</style>
