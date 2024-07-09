import React, { useState } from "react";
import location from "/images/location.svg";
import phone from "/images/phone.svg";
import email from "/images/email.svg";

/**
 * Container component for displaying contact information.
 * @param {Object} item - Object containing contact information.
 * @param {string} item.title - Title of the contact information.
 * @param {string} item.desc1 - Description part 1 of the contact information.
 * @param {string} item.desc2 - Description part 2 of the contact information.
 * @param {string} item.icon - Icon URL for the contact information.
 * @returns {JSX.Element} - Rendered container component.
 */
const Container = ({ item }) => {
  return (
    <div
      className="flex items-center gap-3 sm:gap-4 p-4 bg-white rounded-[8px] mb-6"
      style={{ boxShadow: "0px 3px 12px 0px rgba(0, 0, 0, 0.06)" }}
    >
      {/* Contact information icon */}
      <div className="size-[40px] sm:size-[80px] min-w-[40px] sm:min-w-[80px] rounded-full bg-[#378FEB] flex-center">
        <img src={item.icon} className="w-[20px] sm:w-fit" alt="" />
      </div>
      {/* Contact information description */}
      <div>
        <h6 className="text-[#378FEB] font-[600] sm:text-[24px] mb-3">
          {item.title}
        </h6>
        <p className="text-[#0D1A36] text-sm-text sm:text-[16px]">
          {item.desc1}
        </p>
        <p className="text-[#0D1A36] text-sm-text sm:text-[16px]">
          {item.desc2}
        </p>
      </div>
    </div>
  );
};

/**
 * ContactForm component for displaying contact form.
 * @returns {JSX.Element} - Rendered contact form component.
 */
export default function ContactForm() {
  const [data, setData] = useState({});
  const handleSubmit = () => {
    const { name, email, message } = data;
    const mailtoLink = `mailto:elngmadle@gmail.com?subject=Contact%20Us&body=Name:%20${encodeURIComponent(
      name
    )}%0D%0AEmail:%20${encodeURIComponent(
      email
    )}%0D%0AMessage:%20${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
  };
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setData((prev) => ({ ...prev, [name]: value }));
  };
  // Contact information data
  const info = [
    {
      title: "Address",
      desc1: "Headquarter: 74 Saqr Qurish, Sheraton Buildings, Cairo Egypt",
      desc2: "Airport Office: Amer International Center, Cargo Village",
      icon: location,
    },
    {
      title: "Phone",
      desc1: "(+20) 2 2268 7404   (+20) 2 2268 7696",
      desc2: "(+20) 128 770 5786",
      icon: phone,
    },
    {
      title: "Email",
      desc1: "info@alanwarcargo.net",
      desc2: "gmanager@alanwarcargo.net ",
      icon: email,
    },
  ];

  // Render contact information
  const renderInfo = info.map((item, index) => {
    return <Container key={index} item={item} />;
  });

  return (
    <section className="my-20">
      <div className="container">
        {/* Contact title */}
        <h2 className="text-[#0D1A36] font-bold text-[30px] sm:text-[48px] text-center mb-3">
          Get In Touch With Us
        </h2>

        {/* Contact description */}
        <p className="sm:text-md-text text-[#6C6C6C] text-center">
          For More Information . Please Feel Free To Drop Us An <br /> Email Our
          Staff Always Be There To Help You Out. Do Not Hesitate!
        </p>

        {/* Contact information and form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-10 mt-10">
          <div>
            {/* Render contact information */}
            {renderInfo}
          </div>

          <form>
            {/* Name input */}
            <label
              htmlFor="name"
              className="text-[#0D1A36] font-medium text-md-text mb-3 block"
            >
              Your Name
            </label>
            <input
              type="text"
              className="py-3 px-4 border border-[#C7CFDF] rounded-[8px] w-full placeholder:text-[#8F9EC0] mb-6"
              name="name"
              onChange={handleChange}
              placeholder="Ex: Khaled Ali"
              id="name"
            />

            {/* Email input */}
            <label
              htmlFor="email"
              className="text-[#0D1A36] font-medium text-md-text mb-3 block"
            >
              Your Email
            </label>
            <input
              type="email"
              className="py-3 px-4 border border-[#C7CFDF] rounded-[8px] w-full placeholder:text-[#8F9EC0] mb-6"
              name="email"
              onChange={handleChange}
              placeholder="Ex: example@yourmail.com"
              id="email"
            />

            {/* Message input */}
            <label
              htmlFor="email"
              className="text-[#0D1A36] font-medium text-md-text mb-3 block"
            >
              Message
            </label>
            <textarea
              onChange={handleChange}
              name="message"
              className="py-3 px-4 border border-[#C7CFDF] rounded-[8px] w-full placeholder:text-[#8F9EC0] mb-6"
              placeholder="Ex: Hi i’d like to ask about......."
              rows={6}
            />

            {/* Submit button */}
            <button
              onClick={handleSubmit}
              type="button"
              className="rounded-lg cursor-pointer m-auto bg-[#1E3D81] text-white w-[184px] h-[56px] grid place-content-center text-xl font-semibold"
            >
              Contact Us
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
