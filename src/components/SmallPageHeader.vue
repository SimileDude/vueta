<template>
  <header class="header-wrapper">
    <div class="header">
      <h1 class="industry-title">
        {{ industryTitle }}
      </h1>
      <h2 class="industry-sub-title">
        {{ industrySubTitle }}
      </h2>
      <h3 class="industry-header-text">
        {{ industryHeaderText }}
      </h3>
    </div>
    <img
      class="header-image"
      :src="require(`../assets/${headerImageUrl}`)"
      alt="{{headerImageAlt}}"
    />
  </header>
</template>

<script>
export default {
  name: "SmallPageHeader",
  props: {
    industryTitle: String,
    industrySubTitle: String,
    industryHeaderText: String,
    headerImageUrl: String,
    headerImageAlt: String,
  },
};
</script>

<style scoped>
.header-wrapper {
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  background-color: black;

  min-height: 60vh;
}

.header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* padding-right: 1rem; */
  box-sizing: border-box;
  min-width: 50vw;
  padding-left: 5%;
}

.header h1 {
  padding: 3rem 1rem;
  font-size: 5rem;
  line-height: 5rem;
  max-width: 60rem;
  color: #f5f6f1;
}
.header h2 {
  padding: 1rem;
  color: #f5f6f1;
}
.header h3 {
  padding: 1rem;
  max-width: 60ch;
  line-height: 2rem;
  color: #f5f6f1;
}

.header-image {
  box-sizing: border-box;
  overflow: hidden;
  max-height: 60vh;
  object-fit: cover;
  opacity:70%;
}

@media screen and (max-width: 870px) {
  .header-wrapper {
    /* flex-direction: row; */
    display: block;
    padding: 0;
  }
  .header {
    padding-top: 2rem;
  }
  .header h1 {
    padding: 3rem 1rem;
  }
  .header h2 {
    padding: 1rem 1rem;
  }
  .header h3 {
    padding: 1rem 1rem;
  }
  .header-image {
    width: 100%;
    object-fit: cover;
    margin-left: auto;
    margin-right: auto;
    /* max-width: 100vw; */
  }
}
</style>