import React, { useState } from "react";
import axios from "axios";
import { Form, FormGroup, Label, Input } from "reactstrap";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function ContactForm() {
  const [name, setName] = useState({ value: "", valid: false });
  const [email, setEmail] = useState({ value: "", valid: false });
  const [message, setMessage] = useState({ value: "", valid: false });
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const { t } = useTranslation();

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.valid || !email.valid || !message.valid) {
      return console.log("Input fields not filled correctly");
    }
    /* try {
      const response = await axios.post(
        "https://api.postmarkapp.com/email",
        {
          From: email,
          To: "your-email@example.com",
          Subject: `New message from ${name}`,
          TextBody: message,
        },
        {
          headers: {
            "X-Postmark-Server-Token": "YOUR_SERVER_API_TOKEN",
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response.data);
    } catch (error) {
      console.error(error);
    } */
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup floating className="formgrp">
        <Input
          className="input-field"
          type="text"
          id="name"
          value={name.value}
          placeholder="enter your name"
          onChange={(e) =>
            setName({
              value: e.target.value,
              valid: true,
            })
          }
          required
        />
        <Label for="name">{t("name")}</Label>
      </FormGroup>
      <FormGroup floating className="formgrp">
        <Input
          className="input-field"
          type="email"
          id="email"
          value={email.value}
          placeholder="enter your e-mail"
          onFocus={() => setIsEmailFocused(true)}
          onChange={(e) =>
            setEmail({
              value: e.target.value,
              valid: validateEmail(e.target.value),
            })
          }
          required
        />

        {!email.valid && isEmailFocused && (
          <p style={{ color: "red" }}>{t("emailValidation")}</p>
        )}
        <Label for="email">{t("email")}</Label>
      </FormGroup>
      <FormGroup floating className="formgrp">
        <Input
          className="input-field"
          type="textarea"
          id="message"
          value={message.value}
          placeholder="enter a message you would like to send"
          onChange={(e) =>
            setMessage({
              value: e.target.value,
              valid: true,
            })
          }
          required
        />
        <Label for="message">{t("message")}</Label>
      </FormGroup>
      <button type="submit" className="btn">
        {t("sendButton")}
      </button>
      <Link to="/" className="homeLink">
        Back to Home
      </Link>
    </Form>
  );
}

export default ContactForm;
