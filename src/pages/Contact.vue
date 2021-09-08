<template>
  <section class="header-wrapper">
    <h1 class="contact-title">CONTACT US</h1>
    <h3 class="contact-sub-title">
      One of our representatives will get back to you right away.
    </h3>
  </section>
  <section class="contact-wrapper">
    <img class="info" src="../assets/info.svg" alt="info" 
      loading="lazy"
      decode="async"/>
      <div class="form-desc">Or fill out the form: </div>
    <form
      id="my-form"
      action="https://formspree.io/f/xvoddgrr"
      method="POST"
      class="form"
      @submit="handleSubmit"
    >
      <label for="first_name">First Name</label>
      <input
        type="text"
        name="first_name"
        id="first_name"
        placeholder=""
        required
      />
      <label for="last_name">Last Name</label>
      <input
        type="text"
        name="last_name"
        id="last_name"
        placeholder=""
        required
      />
      <label for="email">Email</label>
      <input type="email" name="email" id="email" placeholder="" required />
      <label for="subject">Subject</label>
      <input type="text" name="subject" id="subject" placeholder="" />
      <label for="message">Message</label>
      <textarea
        name="message"
        id="message"
        cols="30"
        rows="4"
        placeholder="Please type your message here"
      ></textarea>
      <button type="submit" class="button-black-background">Submit</button>
    </form>
    <div class="right-side">
        <!-- <button @click="handleClick" style="color: black;">click me</button> -->
    </div>
  </section>
  <section id="success">
      
  </section>
</template>

<script>

export default {
  name: "Contact",
  methods: {
    handleSubmit() {
      console.log("Clicked");
    }
  },

};
</script>

<style scoped>
.header-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
h1 {
  padding-top: 100px;
  font-weight: 900;
  font-size: 3em;
  letter-spacing: 0.07em;
  line-height: 1em;
}
h2 {
  padding: 1rem;
}
h3 {
  padding: 30px 0;
}
.form-desc{
  font-size: 1.2rem;
  margin-bottom: 1rem;
  font-weight: 500;
}
.contact-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-left: 1em;
}
.info {
  max-width: 270px;
  /* max-height: 400px; */
  width: 100%;
  margin-left: 4em;
  margin-bottom: 2em;
}
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  /* width: 33%; */
  /* margin-right: auto; */
}
.right-side {
  max-width: 33%;
}
input,
textarea,
button {
  margin-bottom: 30px;
  width: 250px;
  font-size: 0.9em;
  padding-left: 2em;
}

input:focus,
textarea:focus {
  background-color: rgb(248, 247, 246);
  border-color: rgb(71, 70, 70);
  outline: none;
}

label {
  font-weight: 100;
  margin-bottom: 2px;
  width: 250px;
}
button {
  width: 250px;
}
button:hover {
  background-color: rgb(151, 209, 14);
  border-color: rgb(126, 173, 16);
  color: black;
}

@media (max-width: 450px) {
 
  .header-wrapper {
    margin-left: 2em;
  }
}
</style>