import React, { useState } from "react";

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (res.ok) {
        setIsSent(true);
        setName("");
        setEmail("");
        setMessage("");
        setTimeout(() => setIsSent(false), 3000);
      } else {
        alert("Something went wrong. Try again later.");
      }
    } catch (error) {
      console.error(error);
      alert("Error sending message.");
    }
  };

  const handleFocus = (e) =>
    (e.target.style.borderBottom = "0px solid #4a5568");
  const handleBlur = (e) =>
    (e.target.style.borderBottom = "1px solid rgb(74, 81, 92)");

  return (
    <section
      style={{
        backgroundColor: "black",
        padding: "64px 0",
        position: "relative",
      }}
    >
      <div className="container" style={{ maxWidth: "768px" }}>
        {/* Title */}
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <h2 style={{ color: "white", fontSize: "1rem" }}>Contact</h2>
          <div
            style={{
              height: "1px",
              width: "2rem",
              backgroundColor: "gray",
              margin: "0.5rem auto",
            }}
          ></div>
        </div>

        <h4
          style={{
            fontSize: "1.5rem",

            color: "white",
            textAlign: "center",
            marginBottom: "2rem",
          }}
        >
          Get in touch.
        </h4>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
        >
          {/* Name Input */}
          <input
            type="text"
            placeholder="NAME"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onFocus={handleFocus}
            onBlur={handleBlur}
            required
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.2)",
              color: "white",
              padding: "0.5rem 1rem",
              transition: "all 0.2s ease-in-out",
              width: "100%",
              height: "3rem",
              border: "none",
              borderBottom: "1px solid #4a5568",
              marginBottom: "3px",
              outline: "none",
            }}
          />

          {/* Email Input */}
          <input
            type="email"
            placeholder="EMAIL"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={handleFocus}
            onBlur={handleBlur}
            required
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.2)",
              color: "white",
              padding: "0.5rem 1rem",
              transition: "all 0.2s ease-in-out",
              width: "100%",
              height: "3rem",
              border: "none",
              borderBottom: "1px solid #4a5568",
              outline: "none",
              marginBottom: "3px",
            }}
          />

          {/* Message Textarea */}
          <textarea
            placeholder="MESSAGE"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onFocus={handleFocus}
            onBlur={handleBlur}
            required
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.2)",
              color: "white",
              padding: "0.5rem 1rem",
              transition: "all 0.2s ease-in-out",
              width: "100%",
              minHeight: "7.5rem",
              resize: "vertical",
              border: "none",
              borderBottom: "1px solid #4a5568",
              marginBottom: "3px",
              outline: "none",
            }}
          />

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSent}
            style={{
              backgroundColor: "white",
              color: "black",
              fontWeight: "600",
              padding: "0.75rem 1.5rem",
              borderRadius: "9999px",
              transition: "all 0.2s ease-in-out",
              width: "100%",
              maxWidth: "fit-content",
              outline: "none",
              border: "none",
              cursor: isSent ? "not-allowed" : "pointer",
              opacity: isSent ? 0.6 : 1,
            }}
          >
            {isSent ? "Sending..." : "SEND MESSAGE"}
          </button>
        </form>

        {/* Success Popup */}
        {isSent && (
          <div
            style={{
              position: "fixed",
              top: "20px",
              right: "50px",
              backgroundColor: "#22c55e",
              color: "white",
              padding: "1rem 1.5rem",
              borderRadius: "8px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
              zIndex: 1000,
              animation: "fadein 0.3s ease-in-out",
            }}
          >
            Message sent successfully!
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactSection;
