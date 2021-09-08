<template>
  <div class="footer-wrapper">
      <div class="address-info">WE ARE LOCATED AT: <br><br>
          50 West Wilmot St, Unit 4 <br>
        Richmond Hill, ON, CA L4B 1M5
      </div>
      <div class="copyright">
      &copy; Toronto Alcohols Inc. 2020 All Rights Reserved.
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    .footer-wrapper{
        width:100%;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        background-color: rgb(0, 0, 2);
        padding: 4rem 0rem 3rem;
        align-items: center;
    }
    .address-info{
        color: white;
        padding: 2rem;
        font-size: 1.2rem;
        background-color: rgb(20, 20, 20);
    }
    .copyright {
        color: white;
        padding: 1rem 2rem;
    }
</style>