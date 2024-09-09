<template>
  <nav class="navbar navbar-expand-md bg-body-tertiary shadow">
    <div class="container">
      <a class="navbar-brand" href="#">
        <img
          width="50px"
          src="https://www.tomntoms.com/assets/logo-ec2c5c29.png"
          alt=""
        />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link">HOME</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/cafeMap" class="nav-link">CAFE</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/user" class="nav-link">USER</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup></script>

<style lang="scss" scoped></style>
