import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import style from "./Contact.module.css";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hecpkgu", 
        "template_rj1xgkr", 
        form.current,
        "KBn7SdgSRkgT-Rku2"
      )
      .then(
        (result) => {
          Swal.fire({
            icon: "success",
            title: "Message Sent!",
            html: `<p>Thank you for reaching out! We'll get back to you soon.</p>`,
            confirmButtonColor: "#3085d6",
            confirmButtonText: "OK",
          });
          console.log(result.text);
        },
        (error) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Failed to send message. Try again later.",
            confirmButtonColor: "#d33",
            confirmButtonText: "Retry",
          });
          console.log(error.text);
        }
      );

    e.target.reset(); // Clear form after submission
  };

  return (
    <section id="contact" className={style.container}>
      <h1 className="sectionTitle">CONTACT</h1>
      <form ref={form} onSubmit={sendEmail}>
        <div className="formGroup">
          <label htmlFor="name" hidden>Name</label>
          <input type="text" id="name" name="user_name" placeholder="Name" required />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>Email</label>
          <input type="email" id="email" name="user_email" placeholder="Email" required />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>Message</label>
          <textarea id="message" name="message" placeholder="Message" required></textarea>
        </div>
        <input className="hover btn" type="submit" value="Submit" />
      </form>
    </section>
  );
}

export default Contact;
