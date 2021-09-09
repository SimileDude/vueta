<template>
  <div class="home">
    <section class="hero-section" id="hero-section">
        <img
          src="../assets/downtown_toronto.webp"
          alt="Downtown Toronto"
          class="hero-image images"
          loading="lazy"
          decode="async"
        >
      </section>
      <div class="hero-text-wrapper">
        <h1 class="hero-title">
          Manufacturing. Quality. 
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
  box-sizing: border-box;
  object-fit: cover;
}
.images {
  box-sizing: border-box;
  width: 100vw;
  height: calc(100vh - 4rem);
  object-fit: cover;
}
section{
  margin-bottom: 0.2rem;
}
.hero-image {
  filter: blur(0);
  -webkit-filter: blur(0) saturate(30%);
  clip-path: none;
}


.hero-text-wrapper {
  box-sizing: border-box;
  /* max-width: 95%; */
  position: absolute;
  top: 20%;
  left: 50%;
  background-color: rgba(0, 0, 0, 0.8);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  padding: 2rem 2rem;
  border-radius: 0.5rem;
  margin-top: 5rem;
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
/* .animation-container {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  filter: blur(15px) contrast(30);
<<<<<<< HEAD
} */
=======
}
>>>>>>> cd9b079fb81d6843b8511f116562763f09d260c2
/* .dot {
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
} */
<<<<<<< HEAD
/* @keyframes moveLeftToRight {
=======
@keyframes moveLeftToRight {
>>>>>>> cd9b079fb81d6843b8511f116562763f09d260c2
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
} */

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
.cta-btn:hover{
  background-color: white;
  color: black;
}

@media screen and (max-width: 550px) {
  .home{
    min-height: 300px;
  }
  .hero-text-wrapper {
    padding: 2rem 2rem;
    border-radius: 0.5rem;
    margin-top: 5rem;
  }
  .hero-title {
    text-transform: uppercase;
    line-height: 2.5rem;
    word-spacing: 1rem;
    font-size: 2rem;
  }
}
@media screen and (max-width: 380px) {
  .hero-title{
    font-size: 1.5rem;
    line-height: 1.5rem;
  }
}
</style>

