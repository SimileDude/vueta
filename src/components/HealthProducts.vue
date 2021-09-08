<template>
  <section class="industry-products">
    <h1 class="product-h1">SOLUTIONS.</h1>

    <img
      class="hydrogen-peroxide-img odd left image container"
      src="../assets/product_hydrogen_peroxide_3_perc.webp"
      alt="hydrogen peroxide bottle 3% v/v"
      loading="lazy"
      decode="async"
    />

    <div class="hydrogen-peroxide-info odd right info container">
      <div class="product-sub">3% v/v</div>
      <div class="product-name">HYDROGEN PEROXIDE</div>
      <hr />
      <div class="product-desc">
        Top quality hydrogen peroxide. Normal screw cap.
        Size can be customized. Endless applications.
      </div>
    </div>
    <img
      class="hydrogen-peroxide-spray-img even right image container"
      src="../assets/product_hydrogen_peroxide_spray_3_perc.webp"
      alt="hydrogen peroxide spray bottle 3% v/v"
      loading="lazy"
      decode="async"
    />
    <div class="hydrogen-peroxide-spray-info even left info container">
      <div class="product-sub">3% v/v</div>
      <div class="product-name">HYDROGEN PEROXIDE SPRAY</div>
      <hr />
      <div class="product-desc">
        Top quality hydrogen peroxide. Spray cap. 30ml size great for portability or travel.
        Size can be customized. Endless applications for hydrogen peroxide.
      </div>
    </div>

    <img
      class="rubbing-alcohol-img odd left image container"
      src="../assets/rubbing_alcohol.webp"
      alt="hydrogen peroxide 3% v/v"
      loading="lazy"
      decode="async"
    />
    <div class="rubbing-alcohol-info odd right info container">
      <div class="product-sub">USP Grade</div>
      <div class="product-name">RUBBING ALCOHOL</div>
      <hr />
      <div class="product-desc">
        Choose your concentration, from 50% to 95% ethanol or isopropyl alcohol.
        Can be made in various sizes from 30 ml to 4 litre jugs. Kills germs and
        harmful bacteria.
      </div>
    </div>
  </section>
</template>

<script>
</script>

<style scoped>
.industry-products {
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr 22rem 22rem 1fr;
  /* grid-template-rows: minmax(25rem, auto); */
  grid-template-rows: repeat(3, 25rem);
  gap: 4rem 2rem;
  background-image: url("../assets/strip-background-mesh-wallpaper-preview.webp");
  background-color: rgba(0, 0, 0, 0.7);
  background-blend-mode: overlay;
  padding-top: 4em;
  color: white;
  padding-bottom: 8em;
  grid-template-areas:
    "product-h1 hydrogen-peroxide-img hydrogen-peroxide-info ."
    "product-h1 hydrogen-peroxide-spray-info hydrogen-peroxide-spray-img ."
    "product-h1 rubbing-alcohol-img rubbing-alcohol-info .";
}
.container {
  max-width: 100%;
  max-height: 100%;
}

.info {
  align-self: flex-end;
  margin-bottom: 4rem;
  color: white;
    background-color: rgb(20, 20, 20);
    padding: 2rem;
}
.hydrogen-peroxide-img {
  grid-area: hydrogen-peroxide-img;
  /* border:1px solid white; */
}
.hydrogen-peroxide-info {
  grid-area: hydrogen-peroxide-info;
  /* border:1px solid white; */
}
.hydrogen-peroxide-spray-img {
  grid-area: hydrogen-peroxide-spray-img;
  /* border:1px solid white; */
}
.hydrogen-peroxide-spray-info {
  grid-area: hydrogen-peroxide-spray-info;
  /* border:1px solid white; */
}
.rubbing-alcohol-img {
  /* align-self: flex-start; */
  grid-area: rubbing-alcohol-img;
  /* border:1px solid white; */
}
.rubbing-alcohol-info {
  grid-area: rubbing-alcohol-info;
  /* border:1px solid white; */
}

.left {
  text-align: right;
  justify-self: end;
}
.product-h1 {
  box-sizing: border-box;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  font-size: 6em;
  color: #6f6c6c;
  opacity: 0.25;
  justify-self: center;
}

.product-sub {
  font-weight: 200;
  font-style: italic;
  padding-top: 30px;
  color: white;
}

.product-name {
  font-weight: 500;
  font-size: 1.2em;
  padding-bottom: 20px;
  color: white;
}

.product-desc {
  font-weight: 100;
  line-height: 1.7rem;
  padding-top: 20px;
  color: white;
}

@media screen and (max-width: 768px) {
  .industry-products {
    box-sizing: border-box;
    display: block;
    padding: 4rem 2rem;
    margin: 0;
    width: 100%;
  }
  .product-h1 {
    box-sizing: border-box;
    writing-mode: horizontal-tb;
    font-size: 4em;
    color: #6f6c6c;
    opacity: 0.8;
    text-align: center;
    padding: 0 4rem 4rem 4rem;
  }
  .image {
    width: 100%;
    height: 20rem;
    object-fit: contain;
    margin-left: auto;
    margin-right: auto;
  }
  .left {
    text-align: left;
    justify-self: end;
  }
  .info{
    margin-bottom: 5rem;
  }
}

@media screen and (max-width: 950px) and (min-width: 769px) {
  .product-h1 {
    display: none;
  }
}
</style>