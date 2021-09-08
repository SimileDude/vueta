<template>
  <NavBar class="nav-style"/>
  <router-view />
  <Footer class="footer-style" />
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    NavBar,
    Footer,
  },
};
</script>


<style>
* {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 1rem;
  line-height: 1.6rem;
  font-weight: 100;
  margin: 0;
  box-sizing: border-box;
  color: #1d1d1f;
}

h1 {
  font-weight: 900;
  font-size: 2em;
}
h2 {
  font-weight: 500;
  font-size: 1.5em;
}
h3 {
  font-weight: 100;
  font-size: 1.2em;
}
p {
  font-weight: 100;
  font-size: 1em;
}
button {
  border: 2px solid black;
  border-radius: 25px;
  background-color: transparent;
  color: black;
  font-size: 0.8rem;
  padding: 8px 35px;
  text-transform: uppercase;
  border-width: 2px;
  border-color: black;
  cursor: pointer;
  font-weight: 500;
}
button:hover {

}

.button-dark {
  border-color: white;
  background-color: black;
  color: white;
}
.button-light {
  color: white;
  border-color: white;
}

input,
textarea {
  border-radius: 25px;
  padding: 8px 10px;
  border-color: black;
  border-width: 2px;
}
.nav-style{
  position: -webkit-sticky;
  position: sticky;
  top: 0px;
  z-index:10;
}
.footer-style {
}
</style>
