<template>
  <div class="page-wrapper">
    <SmallPageHeader
      industryTitle="Cosmetics"
      industrySubTitle="Efficacy. Hydrating."
      industryHeaderText="Customers know what they want.  
                Our line of cosmetics is effective, reliable, 
                looks great and very affordable."
      headerImageUrl="beauty_woman_leaves.webp"
      headerImageAlt="Cosmetics products"
    />
    <CosmeticsProducts />
    <CTABox />
  </div>
</template>

<script>
import SmallPageHeader from "../components/SmallPageHeader.vue";
import CosmeticsProducts from "../components/CosmeticsProducts.vue";
import CTABox from "../components/CTABox.vue";

export default {
  name: "Cosmetics",
  components: {
    SmallPageHeader,
    CosmeticsProducts,
    CTABox,
  },
};
</script>

<style>

</style>

