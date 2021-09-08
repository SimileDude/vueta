<template>
  <section class="cta-box">
    <div class="cta-title">
      <h1>CAN I WHITE LABEL?</h1>

      <router-link :to="{ name: 'Contact' }" class="btn-container">
        <button class="button-light">LET'S CHAT</button>
      </router-link>
    </div>
    <p class="cta-text">
      Yes! Since we are the manufacturer, you can use our in-house products with
      your label on the bottle. We even have formulations which you can build a
      brand around. The possibilities are endless. Get in touch to learn more.
    </p>
  </section>
</template>

<script>
export default {};
</script>
    
<style scoped>
.cta-box {
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  color: white;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(80, 79, 79, 1) 100%
  );
  padding: 4rem 2rem;
  margin: 0;
  width: 100%;
}

.cta-title {
  /* max-width: 45%; */
  color: white;
  
}

.cta-title h1 {
  color: white;
  min-width: 20ch;
}

.cta-title button {
  margin-top: 20px;
}

.cta-text {
  max-width: 60ch;
  color: white;
  padding: 0rem 1rem;
  font-size: 1.3rem;
}

@media screen and (max-width: 768px) {
  .cta-box {
    display: block;
    width: 100%;
    text-align: center;
    border: 1px solid white;
  }
  .cta-title {
    max-width: 100%;
    color: white;
    line-height: 4rem;
  }
  .cta-title button {
    margin: 2rem 0;
  }
  .cta-text {
    max-width: 100%;
    color: white;
    text-align: justify;
    padding: 0 2rem;
  }
}
</style>