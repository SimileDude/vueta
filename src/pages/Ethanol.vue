<template>
  <div class="page-wrapper">
    <SmallPageHeader
      industryTitle="Contract Distilling Services"
      industrySubTitle="Ethanol"
      industryHeaderText="Our facility is equiped with a 5,000 L still (one of the largest in the 
                          Greater Toronto Area) and state-of-the-art equipment.  We can help you 
                          regardless of your stage in the journey."
      headerImageUrl="fermentation-tanks.webp"
      headerImageAlt="alcohol"
    />
      <!-- headerImageUrl="alcohol-beverages-small.jpeg" -->
    <div class="ethanol-services-wrapper">
      <div class="ethanol-services">
        We contract manufacture (or "co-pack") for dozens of companies that view our distillery as an extension of
        their own businesses.  Our experiences can help you avoid common
        pitfalls along your journey. Here are some
        of the services we can offer for your beverage or spirit needs:
        <br /><br />
        <ul>
          <li>
            Bulk Neutral Spirits (NS) and Neutral Grain Spirits (NGS), including
            organic and Non-GMO Bottling and canning service
          </li>
          <li>Consulting on tax, licensing, and regulation</li>
          <li>Becoming your LCBO agency</li>
          <li>
            Product development and formulation services distributing your
            products
          </li>
        </ul>
        <br />
        <p>
          All the alcohol we make is food-grade or higher (eg., organic). We can
          help demystify getting into the LCBO, distributing to other Provinces
          across Canada, and getting your product into international markets.
        </p>
      </div>
    </div>
    <CTABox />
  </div>
</template>

<script>
import SmallPageHeader from "../components/SmallPageHeader.vue";
import CTABox from "../components/CTABox.vue";

export default {
  name: "Ethanol",
  components: {
    SmallPageHeader,
    CTABox,
  },
};
</script>

<style scoped>
.ethanol-services-wrapper {
  display: flex;
  justify-content: center;
  background: rgb(0, 0, 0);
  background: url("../assets/strip-background-mesh-wallpaper-preview.webp")
    no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-color: rgba(0, 0, 0, 0.8);
  background-blend-mode: overlay;
  background-size: cover;
  color: white;
  padding: 4em 0;
}
.ethanol-services,
li,
p {
  max-width: 60ch;
  color: inherit;
  font-size: 1.5rem;
  line-height: 2.5rem;
  color: white;
}
.menu-icon{
  width: 30px;
}
@media screen and (max-width: 768px) {
  .ethanol-services,
  li,
  p {
    max-width: 50ch;
    color: inherit;
    line-height: 2.5rem;
    color: white;
    padding: 0 2rem;
  }
  
}

</style>