import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Send, Phone } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    file: null,
  });

  // Store all customer requests
  const [requests, setRequests] = useState([]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add new request
    const newRequest = {
      ...formData,
      id: Date.now(),
      feedback: "Pending", // initial feedback
    };
    setRequests([newRequest, ...requests]);

    // Reset form
    setFormData({
      name: "",
      email: "",
      message: "",
      file: null,
    });
    e.target.reset();
  };

  // Simulate admin feedback updates after some delay
  useEffect(() => {
    const interval = setInterval(() => {
      setRequests((prevRequests) =>
        prevRequests.map((req) =>
          req.feedback === "Pending"
            ? { ...req, feedback: "Thank you! We will contact you soon." }
            : req
        )
      );
    }, 5000); // feedback appears after 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="ml-16 bg-white min-h-screen flex flex-col items-center justify-start py-12">
      <motion.div
        className="max-w-3xl w-full bg-gray-50 rounded-2xl shadow-lg p-8 md:p-12 border border-gray-200"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Title */}
        <h2
          className="text-4xl font-bold text-center mb-4 text-gray-800"
          style={{ fontFamily: "Times New Roman, serif" }}
        >
          Get in Touch
        </h2>
        <p
          className="text-center text-gray-600 mb-8"
          style={{ fontFamily: "Times New Roman, serif" }}
        >
          Have a question, custom crochet idea, or partnership inquiry?  
          Send us a message — we’d love to hear from you!
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-6"
          style={{ fontFamily: "Times New Roman, serif" }}
        >
          <div>
            <label className="block text-gray-700 mb-2 font-semibold">Your Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-400 outline-none transition"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2 font-semibold">Your Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-400 outline-none transition"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2 font-semibold">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Describe the crochet you want or your message"
              rows="5"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-400 outline-none transition"
              required
            ></textarea>
          </div>

          <div>
            <label className="block text-gray-700 mb-2 font-semibold">
              Upload Reference Image (optional)
            </label>
            <input
              type="file"
              name="file"
              onChange={handleChange}
              className="w-full text-gray-700 bg-white border border-gray-300 rounded-lg p-2 cursor-pointer file:mr-3 file:py-2 file:px-4 file:border-0 file:bg-green-700 file:text-white file:rounded-md hover:file:bg-green-600"
            />
          </div>

          <motion.button
            type="submit"
            className="flex items-center justify-center gap-2 bg-green-700 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition-all shadow-md hover:shadow-lg"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <Send size={18} />
            Submit Request
          </motion.button>
        </form>

        {/* Bottom message */}
        <p
          className="text-center text-gray-500 mt-8 italic"
          style={{ fontFamily: "Times New Roman, serif" }}
        >
          We’ll get back to you within 24 hours — thank you for reaching out 💚
        </p>

        {/* Contact Info Section */}
        <div className="flex items-center justify-center gap-2 mt-6 text-gray-700 font-semibold">
          <Phone size={20} className="text-green-700" />
          <span>Call/WhatsApp: 0789191214</span>
        </div>
      </motion.div>

      {/* Display Customer Requests */}
      <div className="max-w-3xl w-full mt-10 space-y-6">
        <h3
          className="text-2xl font-bold text-gray-800 mb-4 text-center"
          style={{ fontFamily: "Times New Roman, serif" }}
        >
          Customer Requests
        </h3>

        {requests.length === 0 && (
          <p className="text-center text-gray-500" style={{ fontFamily: "Times New Roman, serif" }}>
            No requests yet. Be the first to submit one!
          </p>
        )}

        {requests.map((req) => (
          <motion.div
            key={req.id}
            className="bg-gray-100 rounded-xl p-4 shadow-sm border border-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ fontFamily: "Times New Roman, serif" }}
          >
            <p><b>Name:</b> {req.name}</p>
            <p><b>Email:</b> {req.email}</p>
            <p><b>Message:</b> {req.message}</p>
            <p><b>Feedback:</b> {req.feedback}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
