/* eslint-disable react/no-unescaped-entities */
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

function Contact() {
  return (
    <>
      <NavBar />
      <section className="bg-amber-50 p-5">
        <h1 className="text-amber-500 font-gamer-font">Contact Us</h1>
        <p className="text-[var(--brand-pink)] pb-10">
          If you're looking for more information on our team or you're
          interested in sponsorship opportunities, we'd love to hear from you!
        </p>
        <ContactForm />
      </section>
      <Footer />
    </>
  );
}

export default Contact;
