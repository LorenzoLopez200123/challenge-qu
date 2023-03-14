<template>
  <div class="header__container">
    <img src="/logo.png" alt="logo" width="140" height="64" />
  </div>
</template>
<script setup lang="ts"></script>
<style lang="scss">
.header__container {
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #121212;
  z-index: 3;
  padding-block: 0.5rem;
}
</style>
