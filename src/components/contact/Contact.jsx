import React from "react";
import "./contact.scss";
// import contact_img from "../../assets/image/contact.png";
import { contact, loading } from "../../assets/image/images";

const Contact = () => {

  const submitForm = async () => {
    const scriptURL = "https://script.google.com/macros/s/AKfycbzjsJyhEhuUvDGvXxJFouGfZxyEVBRLItLKiKCxch-2SvxSzynL-6WqciYxqR9U4GMtyA/exec"

    const form = document.forms['google-sheet']
    const loader = document.getElementById("loader")
    await form.addEventListener('submit', e => {
      e.preventDefault()
      loader.style.visibility = "visible"
      const boxi = document.getElementById('boxi');


      fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
          form.reset();
          boxi.innerHTML = "Thank you! Response Recieved ✅";
          loader.style.visibility = 'hidden'


          setTimeout(() => {
            boxi.innerHTML = ""

          }, 3000);
        })
        .catch(error => console.error('Error!', error.message))
    })

  }




  return (
    <>
      <section id="contact">
        <h1><i className="fas fa-headset"></i> Get in Touch</h1>
        <div className="contact__container">
          <div className="contact__content">
            <div className="contact__image__box">
              <img src={contact} alt="contact" />
            </div>
            <form method="POST" name="google-sheet" id="contact__form">
              <div className="form__group">
                <div className="field">
                  <input type="text" name="Name" placeholder="Name" required />
                  <i className="fas fa-user"></i>
                </div>
                <div className="field">
                  <input type="email" name="Email" placeholder="Email" required />
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="field">
                  <input type="text" name="Phone" placeholder="Phone" required />
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div className="field">
                  <textarea type="text" name="Message" placeholder="Message" required />
                  <i className="fas fa-comment-dots"></i>
                </div>
                <div className="button-area">

                  <button type="submit" name="submit" onClick={submitForm}>
                    Submit <i className="fa fa-paper-plane"></i>
                  </button>
                  <img id="loader" src={loading} alt="loading" />
                </div>
              </div>
              <div id="boxi"></div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
