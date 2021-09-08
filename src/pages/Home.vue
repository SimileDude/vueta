<template>
  <div class="home">
    <!-- <section class="hero"> -->
      <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
      <!-- <a href="#distillery-section" class="down-arrow">kgjkgjgjV</a> -->
      <section class="hero-section" id="hero-section">
        <img
          src="../assets/downtown_toronto.jpeg"
          alt="Downtown Toronto"
          class="hero-image images"
          loading="lazy"
          decode="async"
        />
      </section>
      <div class="hero-text-wrapper">
        <h1 class="hero-title">
          Manufacturing. Quality. <br />
          Goods.
        </h1>
        <h2 class="hero-sub-title">
          We make and bottle beverage, health and beauty.
        </h2>
      </div>
      <div class="animation-container">
        <div class="dot animated"></div>
        <div class="dot centered"></div>
      </div>
      <!-- <div class="images hero-image" role="img" aria-label="Downtown Toronto"> -->
      <router-link :to="{ name: 'Contact' }" class="btn-container">
        <button class="cta-btn button-light">GET IN TOUCH</button>
      </router-link>
      <!-- <router-link :to="{ hash: '#health' }" class="down-arrow">
        <div class="btn"> 
      </div>
      </router-link> -->
    <!-- </section> -->
    <section class="distillery-section ">
      <img
        src="../assets/Ethanol_distillery_equipment.png"
        alt=""
        class="images"
        id="distillery"
        loading="lazy"
        decode="async"
      />
      <div class=" health-image" alt="Health section"></div>
    </section>
    <section class="health-section" id="health">
      <img
        src="../assets/BACKGROUND800px.jpg"
        alt=""
        class="images left-slant"
        loading="lazy"
        decode="async"
      />
    </section>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  margin: 0;
  box-sizing: border-box;
  overflow: hidden;
  min-height: 800px;
}
.hero-image {
  /* position: relative; */
  box-sizing: border-box;
  object-fit: cover;
}
.images {
  box-sizing: border-box;
  width: 100vw;
  height: 90vh;
  object-fit: cover;
  /* clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%); */

  /* mask-image: linear-gradient(to bottom, transparent 10%, black); */
  /* mask-image: linear-gradient(rgba(1,1,1,0.9), transparent); */
}
section{
  margin-bottom: 0.2rem;
}
.hero-image {
  filter: blur(0);
  -webkit-filter: blur(0) saturate(30%);
  clip-path: none;
}

.distillery-section {
}

.hero-text-wrapper {
  position: absolute;
  top: 20%;
  left: 50%;
  background-color: rgba(0, 0, 0, 0.8);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  padding: 2rem 2rem;
  border-radius: 0.5rem;
  margin-top: 5rem;
  /* width: 40rem; */
  border: 6px solid rgba(33,56,46,0.6);
}
.hero-title {
  color: #f5f6f1;
  text-transform: uppercase;
  margin-bottom: 2rem;
  line-height: 3rem;
  word-spacing: 1.3rem;
  font-size: 3rem;
}
.hero-sub-title {
  color: #f5f6f1;
  font-size: 1.05rem;
}
.animation-container {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  filter: blur(15px) contrast(30);
  /* background: #f2f2f2; */
}
.dot {
  position: absolute;
  width: 8rem;
  height: 8rem;
  top: 80%;
  left: 50%;
  margin-top: -4rem;
  margin-left: -4rem;
  transform: translate(0%, 0%) rotate(0deg);
  transform-origin: center;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 4rem;
  box-shadow: 0 0 0 1rem #f2f2f2;
}
.animated {
  animation: moveLeftToRight 4s ease-in-out infinite;
}
@keyframes moveLeftToRight {
  0% {
    transform: translateX(0%) rotate(0deg);
    transform-origin: center;
  }
  25% {
    transform: translateX(-150%) rotate(0deg);
    transform-origin: center;
  }
  75% {
    transform: translateX(150%) rotate(0deg);
    transform-origin: center;
  }
  100% {
    transform: translateX(0%) rotate(0deg);
    transform-origin: center;
  }
}

.cta-btn {
  margin: 0;
  position: absolute;
  top: 80%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  z-index: 3;
  background-color: rgba(0, 0, 0, 0.6);
}

@media screen and (max-width: 550px) {
  .hero-text-wrapper {
    padding: 2rem 2rem;
    border-radius: 0.5rem;
    margin-top: 5rem;
    /* width: 40rem; */
  }
  .hero-title {
    text-transform: uppercase;
    line-height: 2.5rem;
    word-spacing: 1rem;
    font-size: 2rem;
  }
}
</style>

