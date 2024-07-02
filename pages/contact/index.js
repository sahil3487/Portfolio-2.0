import { useState } from "react";
import { BsArrowRight  } from "react-icons/bs";
import { SiGmail, SiWhatsapp  } from "react-icons/si";
import { BiPhoneOutgoing } from "react-icons/bi";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { firestore } from "../../firebase.config"; // Import Firestore from your firebase setup

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await firestore.collection("messages").add(formData);
      console.log("Message sent successfully:", response);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  const handleEmailButtonClick = () => {
    window.location.href = "mailto:sahilsingh3487@gmail.com";
  };

  const handleWhatsAppButtonClick = () => {
    window.open("https://wa.me/916262590061", "_blank");
  };

  const handleCallMeButtonClick = () => {
    window.open("tel:+916262590061");
  };

  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-32 text-center xl:text-left">
        <div className="max-w-[700px] mx-auto">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12 text-white"
          >
            Let&apos;s <span className="text-accent">Connect...</span>
          </motion.h2>
          <motion.form
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex flex-col gap-6"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col gap-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="input rounded-lg px-4 py-3  bg-primary/30 text-white placeholder-gray-500 focus:outline-none focus:bg-gray-700 focus:border-accent transition duration-300"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="input rounded-lg px-4 py-3  bg-primary/30 text-white placeholder-gray-500 focus:outline-none focus:bg-gray-700 focus:border-accent transition duration-300"
              />
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="input rounded-lg px-4 py-3  bg-primary/30 text-white placeholder-gray-500 focus:outline-none focus:bg-gray-700 focus:border-accent transition duration-300"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="textarea rounded-lg px-4 py-3  bg-primary/30 text-white placeholder-gray-500 focus:outline-none focus:bg-gray-700 focus:border-accent transition duration-300"
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn rounded-full border border-white/50 max-w-[170px] px-8 mx-auto transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group relative self-center"
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Let&apos;s Talk
              </span>
              <BsArrowRight className="absolute text-[22px] -translate-y-[120%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300" />
            </button>
          </motion.form>
          <div className="flex justify-center mt-8">
            <div className="text-white flex gap-8 items-center">
              <div className="text-accent text-3xl">Contact Me:</div>
              <button
                className="btn rounded-full border p-3 border-white/50 px-6 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group relative"
                onClick={handleEmailButtonClick}
              >
                <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                  Email Me
                </span>
                <SiGmail className="absolute text-[22px] -translate-y-[120%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300" />
              </button>
              <button
                className="btn rounded-full border border-white/50 px-6 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group relative"
                onClick={handleWhatsAppButtonClick}
              >
                <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                  WhatsApp Me
                </span>
                <SiWhatsapp className="absolute text-[22px] -translate-y-[120%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300" />
              </button>
              <button
                className="btn rounded-full border border-white/50 px-6 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group relative"
                onClick={handleCallMeButtonClick}
              >
                <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                  Call Me
                </span>
                <BiPhoneOutgoing className="absolute text-[22px] -translate-y-[120%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
