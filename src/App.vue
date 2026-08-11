<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container">
        <router-link to="/" class="navbar-brand"> Contact Book </router-link>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navMenu">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link to="/" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/add" class="nav-link">Add Contact</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <main class="py-4">
      <router-view />
    </main>
  </div>
</template>

<script>
export default {};
</script>

<style>
body {
  background-color: #f8f9fa;
}
main {
  min-height: calc(100vh - 70px);
}
</style>
