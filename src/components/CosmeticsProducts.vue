<template>
  <section class="industry-products">
    <h1 class="product-h1">SOLUTIONS.</h1>

    <img
      class="makeup-remover-img odd left image container"
      src="../assets/makeup_remover.png"
      alt="makeup remover for waterproof makeup"
      loading="lazy"
      decode="async"
    />

    <div class="makeup-remover-info odd right info container">
      <div class="product-sub">Gentle. Effective.</div>
      <div class="product-name">MAKEUP REMOVER</div>
      <hr />
      <div class="product-desc">
        Wipe away tough build-up, waterproof makeup Gentle on skin. Made for
        daily use.
      </div>
    </div>
    <img
      class="nail-polish-remover-acetone-img even right image container"
      src="../assets/nail_polish_remover_acetone.webp"
      alt="acetone nail polish remover"
      loading="lazy"
      decode="async"
    />
    <div class="nail-polish-remover-acetone-info even left info container">
      <div class="product-sub">Acetone</div>
      <div class="product-name">NAIL POLISH REMOVER</div>
      <hr />
      <div class="product-desc">
        Acetone. Salon-strength. <br />
        Bleach & Chlorine-free. <br />
        200 ml. Other sizes possible.
      </div>
    </div>

    <img
      class="nail-polish-remover-non-acetone-img odd left image container"
      src="../assets/non_acetone_nail_polish_remover.webp"
      alt="acetone-free nail polish remover"
      loading="lazy"
      decode="async"
    />

    <div class="nail-polish-remover-non-acetone-info odd right info container">
      <div class="product-sub">Acetone-free</div>
      <div class="product-name">NAIL POLISH REMOVER</div>
      <hr />
      <div class="product-desc">
        Non-acetone version. <br />
        Bleach & Chlorine-free. <br />
        200 ml. Other sizes possible.
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.industry-products {
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr 22rem 22rem 1fr;
  grid-template-rows: repeat(3, 25rem);
  gap: 4rem 2rem;
  background-image: url("../assets/strip-background-mesh-wallpaper-preview.webp");
  background-color: rgba(0, 0, 0, 0.7);
  background-blend-mode: overlay;
  padding-top: 4em;
  color: white;
  padding-bottom: 6em;
  grid-template-areas:
    "product-h1 makeup-remover-img makeup-remover-info ."
    "product-h1 nail-polish-remover-info nail-polish-remover-img ."
    "product-h1 nail-polish-remover-non-acetone-img nail-polish-remover-non-acetone-info .";
}

.container {
  /* max-width: 100%;
    max-height: 100%; */
}
.info {
  align-self: flex-end;
  background-color: rgb(20, 20, 20);
  padding: 2rem;
  margin-bottom: 4rem;
}
.makeup-remover-img {
  grid-area: makeup-remover-img;
  /* border:1px solid white; */
}
.makeup-remover-info {
  grid-area: makeup-remover-info;
  /* border:1px solid white; */
}
.nail-polish-remover-acetone-img {
  grid-area: nail-polish-remover-img;
  /* border:1px solid white; */
}
.nail-polish-remover-acetone-info {
  grid-area: nail-polish-remover-info;
  /* border:1px solid white; */
}
.nail-polish-remover-non-acetone-img {
  grid-area: nail-polish-remover-non-acetone-img;
  /* border:1px solid white; */
}
.nail-polish-remover-non-acetone-info {
  grid-area: nail-polish-remover-non-acetone-info;
  /* border:1px solid white; */
}

.left {
  text-align: end;
  justify-self: end;
}
.product-h1 {
  writing-mode: vertical-rl;
  text-orientation: mixed;
  font-size: 6em;
  color: #6f6c6c;
  opacity: 0.2;
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
.image {
  height: 22rem;
  align-self: end;
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
    max-height: 20rem;
    object-fit: contain;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1rem;
  }
  .info {
    margin-bottom: 5rem;
  }
  .left {
    text-align: left;
    justify-self: end;
  }
}

@media screen and (max-width: 950px) and (min-width: 769px) {
  .product-h1 {
    display: none;
  }
}
</style>