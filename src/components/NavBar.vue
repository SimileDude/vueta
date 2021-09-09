<template>
  <nav class="nav-bar" :class="{ 'scrolled-nav': scrolledNav }">
    <router-link :to="{ name: 'Home' }" class="header-logo">
      <!-- <img
        src="@/assets/toronto_alcohols_white_logo.svg"
        alt="Toronto_Alcohols_logo"
      /> -->
    <img style="height: 4rem" 
    src="@/assets/toronto_alcohols_white_logo.svg" 
    onerror="this.src='@/assets/toronto_alcohols_white_logo.png'; this.onerror=null;">
    </router-link>
    
    <div class="header-menu" v-show="!mobile">
      <router-link :to="{ name: 'Ethanol' }" class="nav-links all-menu-links"
        >ETHANOL</router-link
      >
      <router-link :to="{ name: 'Health' }" class="nav-links all-menu-links"
        >HEALTH</router-link
      >
      <router-link
        :to="{ name: 'Cosmetics' }"
        class="cosmetics-link nav-links all-menu-links"
        >COSMETICS</router-link
      >
      <div class="header-menu-right" v-show="!mobile">
        <router-link
          :to="{ name: 'Contact' }"
          class="all-menu-links contact-link"
          >CONTACT</router-link
        >
      </div>
      <div class="header-menu-right" v-show="!mobile">
        <router-link
          :to="{ name: 'Contact' }"
          class="all-menu-links contact-link"
          >CONTACT</router-link
        >
      </div>
    </div>

    <div class="icon-wrapper">
      <img
        src="@/assets/menu-bars.svg"
        class="icon"
        @click="toggleMobileNav"
        v-show="mobile"
        :class="{ 'icon-active': mobileNav }"
      />
    </div>
    

    <transition name="mobile-nav">
      <div class="dropdown-nav" v-show="mobileNav" @click="toggleMobileNav">
        <router-link :to="{ name: 'Ethanol' }" class="dropdown-nav-links"
          >ETHANOL</router-link
        >
        <router-link :to="{ name: 'Health' }" class="dropdown-nav-links"
          >HEALTH</router-link
        >
        <router-link :to="{ name: 'Cosmetics' }" class="dropdown-nav-links"
          >COSMETICS</router-link
        >
        <router-link :to="{ name: 'Contact' }" class="dropdown-nav-links"
          >CONTACT</router-link
        >
      </div>
    </transition>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      scrolledNav: null,
      mobile: null,
      mobileNav: null,
      windowWidth: null,
    };
  },
  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
  methods: {
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },

    updateScroll() {
      const scrolledPosition = window.scrollY;
      if (scrolledPosition > 50) {
        this.scrolledNav = true;
        return;
      }
      this.scrolledNav = false;
    },

    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 750) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
    },
  },
};
</script>

<style scoped>
/* NAV BAR STYLES */
.nav-bar {
  display: flex;
  height: 4rem;
  justify-content: center;
  align-items: center;
  background: #21382e;
  color: white;
  padding-right: 15px;
  border-bottom: 1rem;
  width: 100%;
  box-sizing: border-box;
}

.header-menu {
  display: flex;
  height: 100%;
  min-width: 20rem;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
  /* margin: auto 10%; */
}
.all-menu-links {
  box-sizing: border-box;
  color: white;
  text-decoration: none;
  font-size: 0.95em;
  font-weight: 500;
  justify-content: center;
  margin-right: 5rem;
  margin: 0;
}

.all-menu-links.router-link-exact-active {
  border-bottom: 4px solid #74c4a1; /*rgb(196, 230, 241); */
  border-radius: 3px;
  color: white;
  font-weight: 900;
}

.contact-link {
  justify-self: flex-end;
}
.header-logo {
  display: flex;
  height: 4em;
  width: auto;
  margin-left: 1rem;
  padding-right: 6rem;
}

.header-menu-right {
  display: flex;
}
.icon-wrapper {
  display: flex;
  position: absolute;
  align-items: center;
  top: 0;
  right: 2rem;
  height: 100%;
}
.icon {
  color: white;
  cursor: pointer;
  font-size: 1.5rem;
  transition: 0.8s ease all;
  width: 2rem;

}

.icon-active {
  transform: rotate(180deg);
}

.dropdown-nav {
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 100%;
  max-width: 250px;
  height: 100%;
  background-color: #fff;
  top: 0;
  left: 0;
  padding: 2rem 1rem 2rem 2rem;
  -webkit-box-shadow: 0px 10px 13px -7px #000000,
    5px 3px 10px -1px rgba(0, 0, 0, 0.08);
  box-shadow: 0px 10px 13px -7px #000000, 5px 3px 10px -1px rgba(0, 0, 0, 0.08);
}
.dropdown-nav .dropdown-nav-links {
  padding-bottom: 1rem;
  color: #000;
  box-sizing: border-box;
  text-decoration: none;
  font-weight: 400;
}
.dropdown-nav-links.router-link-exact-active {
  color: rgb(33, 56, 46);
  font-weight: 900;
}
.scrolled-nav {
  background-color: #1d1d1f;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rbga(0, 0, 0, 0.06);
}
.mobile-nav-enter-active,
.mobile-nav-leave-active {
  transition: 1s ease all;
}

.mobile-nav-enter-from,
.mobile-nav-leave-to {
  transform: translateX(-250px);
}
.mobile-nav-enter-to {
  transform: translateX(0);
}

@media screen and (max-width: 550px) {
  .nav-bar {
    display: flex;
    justify-content: flex-start;
  }
  .header-logo {
    justify-self: flex-start;
  }
}

@media (min-width: 900px) {
  body {
    background-color: black;
  }
  .nav-bar {
    display: flex;
    justify-content: center;
  }
  .header-menu {
    display: flex;
    max-width: 700px;
    justify-content: flex-end;
  }
  .all-menu-links {
    margin: 0 2rem;
  }
}
</style>