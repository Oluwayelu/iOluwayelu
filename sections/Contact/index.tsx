/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { MdLocationOn } from "react-icons/md";
import { FiPhoneCall, FiMail } from "react-icons/fi";

import { social } from "routes";
import { Input } from "components";
import { useNotification } from "context";

import type { Target } from "interface";
import type { ChangeEventHandler, FunctionComponent } from "react";

const Contact: FunctionComponent = () => {
  const { setMessage, setType } = useNotification();
  const [loading, setLoading] = useState(false);
  const [info, setInfo] = useState({
    name: "",
    email: "",
    title: "",
    message: "",
  });

  const { name, email, title, message } = info;

  const handleChange: ChangeEventHandler<Target> = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const notEmpty =
    name !== "" && email !== "" && title !== "" && message !== "";

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (notEmpty) {
      setLoading(true);
      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          body: JSON.stringify(info),
          headers: {
            "Content-Type": "application/json",
          },
        });

        const { error } = await res.json();
        if (error) {
          console.log(error);
          setType("error");
          setMessage(error);

          return;
        }

        setType("success");
        setMessage("Your message was sent successfully");
        setLoading(false);

        setInfo({
          name: "",
          email: "",
          title: "",
          message: "",
        });
      } catch (error) {
        setType("error");
        setMessage("Something went wrong");
        setLoading(false);
      }
    }
  };

  return (
    <div
      id="contact-me"
      className="relative w-full py-16 md:py-20 bg-primary-300"
    >
      <div className="w-full lg:max-w-7xl lg:mx-auto px-5 md:px-10">
        <h1 className="capitalize text-4xl lg:text-6xl text-left font-bold pb-5">
          Contact Me
        </h1>

        <div className="w-full flex flex-col lg:flex-row justify-between lg:items-stretch lg:space-x-5">
          <div className="w-full space-y-3">
            <p>
              Let's make something new, different and more meaningful or make
              thing more visual or conceptual?
            </p>

            <div className="w-full flex space-x-3 items-center">
              <div className="w-14 h-14 flex justify-center items-center rounded-full border border-white">
                <MdLocationOn className="w-7 h-7" />
              </div>

              <p>Lagos, Nigeria</p>
            </div>

            <a
              href="tel:+234 905 315 6229"
              className="w-full flex space-x-3 items-center"
            >
              <div className="w-14 h-14 flex justify-center items-center rounded-full border border-white">
                <FiPhoneCall className="w-7 h-7" />
              </div>

              <p>(+234) 905 315 6229</p>
            </a>

            <a
              href="mailto:oluwayeluifeoluwa@gmail.com"
              className="w-full flex space-x-3 items-center"
            >
              <div className="w-14 h-14 flex justify-center items-center rounded-full border border-white">
                <FiMail className="w-7 h-7" />
              </div>

              <p>oluwayeluifeoluwa@gmail.com</p>
            </a>

            <h3 className="w-full text-center">Find Me On</h3>

            <ul className="w-full lg:hidden inline-flex justify-center space-x-3">
              {social.map(({ link, Icon }, index) => (
                <li key={index}>
                  <a href={link} target="_blank" rel="noreferrer">
                    <Icon className=" hover:text-primary-300 w-7 h-7" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="w-full space-y-3">
            <div className="w-full flex flex-col lg:flex-row lg:space-x-4">
              <Input
                name="name"
                type="text"
                value={name}
                label="Name"
                placeholder="Your name"
                handleChange={handleChange}
              />

              <Input
                name="email"
                type="email"
                value={email}
                label="Email"
                placeholder="example@gamil.com"
                handleChange={handleChange}
              />
            </div>

            <Input
              name="title"
              type="text"
              value={title}
              label="Title"
              placeholder="Mesage title"
              handleChange={handleChange}
            />

            <Input
              textarea
              name="message"
              type="text"
              value={message}
              label="Message"
              placeholder="Your message"
              handleChange={handleChange}
            />

            <button
              type="submit"
              onClick={handleSubmit}
              disabled={!notEmpty}
              className="lg:hidden px-10 h-12 text-xl font-medium bg-primary rounded disabled:bg-primary/70"
            >
              {loading ? "Sending" : "Send"}
            </button>
          </form>
        </div>
      </div>

      <div className="hidden w-full lg:flex items-center space-x-5">
        <div className="w-full">
          <div className="px-5 flex items-center justify-end w-3/4 h-12 bg-primary rounded-r-xl">
            <ul className="inline-flex space-x-3">
              {social.map(({ link, Icon }, index) => (
                <li key={index}>
                  <a href={link} target="_blank" rel="noreferrer">
                    <Icon className=" hover:text-primary-300 w-7 h-7" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="w-full">
          <button
            type="submit"
            onClick={handleSubmit}
            disabled={!notEmpty}
            className="px-10 h-12 text-xl font-medium bg-primary rounded disabled:bg-primary/70 disabled:cursor-error"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
