import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { slideIn } from "../utils/motion";
import { EarthCanvas } from "./canvas";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Please enter a valid email";
    }
    
    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    } else if (form.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setLoading(true);

    // Check if environment variables are set
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error("EmailJS environment variables are not set!");
      alert("Email service is not configured. Please check the setup guide.");
      setLoading(false);
      return;
    }

    emailjs
      .send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          to_name: "Jai Vadula",
          from_email: form.email,
          to_email: "jai.vadula.dev@gmail.com", // Replace with your actual email
          message: form.message,
        },
        publicKey
      )
      .then(
        (response) => {
          console.log("Email sent successfully!", response.status, response.text);
          setLoading(false);
          setShowSuccess(true);
          
          // Reset form
          setForm({
            name: "",
            email: "",
            message: "",
          });

          // Hide success message after 5 seconds
          setTimeout(() => {
            setShowSuccess(false);
          }, 5000);
        },
        (error) => {
          console.error("Email failed to send:", error);
          setLoading(false);
          alert("Sorry, something went wrong. Please try again or contact me directly.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-6 sm:gap-10 overflow-hidden px-4 sm:px-6 lg:px-8`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-4 sm:p-6 lg:p-8 rounded-2xl w-full'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={`${styles.sectionHeadText} bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent`}>Contact</h3>

        {showSuccess && (
          <div className='mt-4 p-4 bg-green-500 bg-opacity-20 border border-green-500 rounded-lg'>
            <p className='text-green-400 text-sm sm:text-base'>
              ✅ Thank you! Your message has been sent successfully. I'll get back to you soon!
            </p>
          </div>
        )}

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-8 sm:mt-12 flex flex-col gap-6 sm:gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-3 sm:mb-4 text-sm sm:text-base'>
              Your Name <span className='text-red-400'>*</span>
            </span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className={`bg-tertiary py-3 sm:py-4 px-4 sm:px-6 placeholder:text-secondary text-white rounded-lg outline-none border-2 font-medium text-sm sm:text-base transition-colors ${
                errors.name ? 'border-red-500' : 'border-transparent focus:border-purple-500'
              }`}
            />
            {errors.name && (
              <span className='text-red-400 text-xs sm:text-sm mt-1'>{errors.name}</span>
            )}
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-3 sm:mb-4 text-sm sm:text-base'>
              Your Email <span className='text-red-400'>*</span>
            </span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className={`bg-tertiary py-3 sm:py-4 px-4 sm:px-6 placeholder:text-secondary text-white rounded-lg outline-none border-2 font-medium text-sm sm:text-base transition-colors ${
                errors.email ? 'border-red-500' : 'border-transparent focus:border-purple-500'
              }`}
            />
            {errors.email && (
              <span className='text-red-400 text-xs sm:text-sm mt-1'>{errors.email}</span>
            )}
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-3 sm:mb-4 text-sm sm:text-base'>
              Your Message <span className='text-red-400'>*</span>
            </span>
            <textarea
              rows={5}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className={`bg-tertiary py-3 sm:py-4 px-4 sm:px-6 placeholder:text-secondary text-white rounded-lg outline-none border-2 font-medium text-sm sm:text-base resize-none transition-colors ${
                errors.message ? 'border-red-500' : 'border-transparent focus:border-purple-500'
              }`}
            />
            {errors.message && (
              <span className='text-red-400 text-xs sm:text-sm mt-1'>{errors.message}</span>
            )}
          </label>

          <button
            type='submit'
            disabled={loading}
            className={`py-3 px-6 sm:px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary text-sm sm:text-base transition-all duration-300 ${
              loading 
                ? 'bg-gray-600 cursor-not-allowed' 
                : 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 hover:scale-105'
            }`}
          >
            {loading ? (
              <span className='flex items-center gap-2'>
                <div className='w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin'></div>
                Sending...
              </span>
            ) : (
              'Send Message'
            )}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[400px] lg:h-[550px] h-[300px] earth-canvas w-full'
        style={{
          border: 'none',
          outline: 'none',
          boxShadow: 'none'
        }}
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
