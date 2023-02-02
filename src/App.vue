<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;600&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <NavHeader/>
  <router-view/>
  <ContactFooter/>
</template>

<script>
import NavHeader from './components/NavHeader.vue'
import ContactFooter from './components/ContactFooter.vue'

export default {
  name: 'App',
  components: {
    NavHeader,
    ContactFooter
  }
}
</script>

<style>
body {
  font-family: 'Raleway', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
}
.mg-25{
  margin: 28vh 0 28vh 0;
}
.mg-10{
  margin: 10vh 0 10vh 0;
}
.sd{
  box-shadow: 12px 14px 19px rgba(0, 0, 0, 0.18);
}
.ol{
  box-shadow:
  0 0 0 5px white,
  0 0 0 10px #0D6EFD;
}
.wrapper {
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
}
nav {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  border-radius: 0.4rem;
}
nav .logo {
  font-weight: 700;
}
nav ul {
  list-style: none;
  display: flex;
  gap: 2rem;
}
nav a {
  text-decoration: none;
}
nav #toggle,
nav label {
  display: none;
}

@media (max-width: 40.625em) {
  .logo {
    max-width: 75%;
  }
  .menu {
    background-color: #f8f9fa;
    border-radius: 10px;
    width: 100%;
    height: 0;
    overflow: hidden;
  }
  nav ul {
    flex-direction: column;
    align-items: center;
    gap: 0;
  }
  nav .m1{
    border-bottom: 1px solid grey;
  }
  nav label {
    display: inline-flex;
    cursor: pointer;
  }
  nav #toggle:checked ~ .menu {
    height: 100%;
  }
}
</style>
