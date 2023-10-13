/* eslint-disable no-unused-vars */
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const { register, reset, handleSubmit, formState } = useForm();
  const { errors } = formState;
  const form = useRef();

  const sendEmail = () => {
    emailjs
      .sendForm(
        "service_9ek71ef",
        "template_c2hk178",
        form.current,
        "7p5Pwz9wByIso4s75"
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

  function onSubmit() {
    sendEmail();

    reset();
    toast.success("Your request has been submitted!");
  }

  function onError() {
    toast.error(
      "There was a problem submitting your request. Please try again."
    );
  }
  return (
    <Form
      onSubmit={handleSubmit(onSubmit, onError)}
      ref={form}
      className="sm:w-[60vw] m-auto p-4 border-2 border-[var(--brand-blue)] rounded-md bg-white"
    >
      <Toaster />
      <img
        src="/contact-us.png"
        alt="Contact"
        className="m-auto w-[75px] sm:w-[150px] pb-3"
      />
      <h3 className="text-amber-500 text-center pt-2 pb-4">
        Send us a message!
      </h3>
      <Form.Group className="py-2 text-[var(--brand-pink)]">
        <Form.Label>Full Name</Form.Label>
        <Form.Control
          type="text"
          id="name"
          {...register("name", { required: true })}
        />
        {errors?.name && <span>This field is required</span>}
      </Form.Group>
      <Form.Group className="py-2 text-[var(--brand-pink)]">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          id="email"
          {...register("email", { required: true })}
        />
        {errors?.email && <span>This field is required</span>}
      </Form.Group>
      <Form.Group className="py-2 text-[var(--brand-pink)]">
        <Form.Label>Message</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          id="message"
          {...register("message", { required: true })}
        />
        {errors?.message && <span>This field is required</span>}
      </Form.Group>
      <Form.Group className="m-auto text-center pt-5">
        <Button type="submit" variant="warning">
          Submit
        </Button>
      </Form.Group>
    </Form>
  );
}

export default ContactForm;
