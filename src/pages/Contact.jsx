import React, { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
        file: null,
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Request submitted! (Later connect to backend)");
    };

    return (
        <div className="ml-16">
            <div className="max-w-7xl p-8 md:p-16">
                <h2 className="text-3xl font-bold mb-8 text-gray-800">Send a Custom Request</h2>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 max-w-xl">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="border rounded p-3 w-full"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="border rounded p-3 w-full"
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Describe the crochet you want"
                        value={formData.message}
                        onChange={handleChange}
                        className="border rounded p-3 w-full"
                        required
                    />
                    <input
                        type="file"
                        name="file"
                        onChange={handleChange}
                        className="border rounded p-3 w-full"
                    />
                    <button
                        type="submit"
                        className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition"
                    >
                        Submit Request
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
