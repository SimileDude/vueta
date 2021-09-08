<template>
  <SmallPageHeader
    industryTitle="First-Aid"
    industrySubTitle="Reliable. Affordable."
    industryHeaderText="Our first-aid products are quality-sourced and locally produced.
                You can use our TAVitals brand, or your own label."
    headerImageUrl="first_aid_symbol.webp"
    headerImageAlt="first aid products"
  />
  <HealthProducts />
  <CTABox />
</template>

<script>
import SmallPageHeader from "../components/SmallPageHeader.vue";
import HealthProducts from "../components/HealthProducts.vue";
import CTABox from "../components/CTABox.vue";

export default {
  name: "Health",
  components: {
    SmallPageHeader,
    HealthProducts,
    CTABox,
  },
};
</script>

<style>
</style>

