import React, { useState } from "react";
import { Link } from "react-scroll";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (formData.name.trim().length < 2) newErrors.name = "Merci d'indiquer votre prénom.";
    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) newErrors.email = "Adresse email invalide.";
    if (formData.message.trim().length < 10) newErrors.message = "Le message doit contenir au moins 10 caractères.";
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: null });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await fetch("https://formspree.io/f/mldjvjne", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      console.error("Erreur d'envoi :", error);
    }
  };

  return (
    <section className="min-h-screen px-8 py-16 bg-gradient-to-b from-black to-[#1a1a1a] text-white flex flex-col items-center">
      <h2 className="text-3xl md:text-5xl font-bold mb-10 text-center text-[#4FB3F4]">Me contacter</h2>
      <form onSubmit={handleSubmit} className="w-full max-w-xl bg-[#1f1f1f] p-8 rounded-lg shadow-lg">
  <div className="mb-6">
    <label htmlFor="name" className="block mb-2 text-sm">Prénom</label>
    <input
      id="name"
      type="text"
      name="name"
      value={formData.name}
      onChange={handleChange}
      className="w-full p-3 rounded bg-[#111] border border-gray-600 focus:outline-none focus:border-[#4FB3F4]"
    />
    {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
  </div>

  <div className="mb-6">
    <label htmlFor="email" className="block mb-2 text-sm">Email</label>
    <input
      id="email"
      type="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
      className="w-full p-3 rounded bg-[#111] border border-gray-600 focus:outline-none focus:border-[#4FB3F4]"
    />
    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
  </div>

  <div className="mb-6">
    <label htmlFor="message" className="block mb-2 text-sm">Message</label>
    <textarea
      id="message"
      name="message"
      rows="5"
      value={formData.message}
      onChange={handleChange}
      className="w-full p-3 rounded bg-[#111] border border-gray-600 focus:outline-none focus:border-[#4FB3F4]"
    ></textarea>
    {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
  </div>

  <button
    type="submit"
    aria-label="Envoyer le formulaire de contact"
    className="w-full bg-[#4FB3F4] text-black font-semibold py-3 rounded hover:bg-[#3aa6e0] transition-colors"
  >
    Envoyer
  </button>

  {success && (
    <p className="mt-4 text-green-400 text-sm animate-fade-in-up">
      Merci pour votre message 🌻
    </p>
  )}
</form>
      <Link
  to="Hero"
  smooth={true}
  duration={500}
  className="mt-8 inline-block text-[#4FB3F4] text-sm underline hover:text-white transition-colors cursor-pointer"
    >
    ↑ Retour en haut
</Link>
    </section>
  );
};

export default Contact;
