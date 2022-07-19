<script lang="ts">
  import emailjs from "@emailjs/browser";

  console.log(process.env.VITE_USER_ID);
  console.log(process.env.VITE_TEMPLATE_ID);
  console.log(process.env.VITE_SERVICE_ID);
  // console.log(process.env.VITE_USER_ID);
  // console.log(process.env.VITE_TEMPLATE_ID);
  // console.log(process.env.VITE_SERVICE_ID);

  // env vars undefined, why
  const sendEmail = (e) => {
    e.preventDefault();
    alert("lksdjf");
    emailjs
      .sendForm(
        // process.env.SERVICE_ID,
        process.env.VITE_SERVICE_ID,
        // "service_7jrq2gv",
        // "template_owkbegn",
        process.env.VITE_TEMPLATE_ID,
        "#emailform",
        process.env.VITE_USER_ID
        // "user_syQnaJg1pFkIoDz5V3il4"
        // process.env.USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
</script>

<form id="emailform" on:submit={sendEmail}>
  <label>Name</label>
  <input type="text" name="user_name" />
  <label>Email</label>
  <input type="email" name="user_email" />
  <label>Message</label>
  <textarea name="message" />
  <input type="submit" value="Send" />
</form>
