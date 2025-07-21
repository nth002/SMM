import React, { useState } from "react";
import { generateFromOllama } from "./ollamaService";
import logo from "../assets/images/Logo.png"; // Import your logo

const Ollamachat = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    const response = await generateFromOllama(input);

    setMessages((prev) => [...prev, { role: "bot", text: response }]);
    setLoading(false);
  };

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #1f2937 0%, #111827 100%)", // gradient dark bg
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        height: "82vh",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      {/* Watermark */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: "2rem",
          color: "#999",
          opacity: 0.1,
          zIndex: 0,
          pointerEvents: "none",
          textAlign: "center",
          userSelect: "none",
        }}
      >
        Jagannath GPT
        <br />
        Ask Anything
      </div>

      {/* Header */}
      <div
        style={{
          height: "40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid #444",
          padding: "0 1rem",
          fontSize: "0.9rem",
          color: "#bbb",
          flexShrink: 0,
          userSelect: "none",
          zIndex: 2,
          backgroundColor: "rgba(31, 41, 55, 0.85)", // semi-transparent dark overlay
          boxShadow: "0 1px 4px rgba(0,0,0,0.4)",
        }}
      >
        <div> <img
                src={logo}
                alt="Logo"
                style={{ height: "28px", width: "96px" }}
                className="navbar-logo"
              />
        </div>
        <div>All rights reserved</div>
      </div>

      {/* Messages container */}
      <div
        style={{
          flex: 1,
          overflowY: "auto",
          padding: "1rem",
          paddingBottom: "6rem",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {messages.map((msg, idx) => (
          <div
            key={idx}
            style={{
              display: "flex",
              justifyContent: msg.role === "user" ? "flex-end" : "flex-start",
              marginBottom: "1rem",
              animation: "fadeIn 0.3s ease-in-out",
            }}
          >
            <div
              style={{
                maxWidth: "70%",
                backgroundColor:
                  msg.role === "user" ? "#4a5568" : "#374151", // changed bot bg to a nice gray (#374151)
                padding: "0.75rem 1rem",
                borderRadius: "12px",
                whiteSpace: "pre-wrap",
                boxShadow:
                  msg.role === "user"
                    ? "0 1px 3px rgba(74, 85, 104, 0.5)"
                    : "0 1px 3px rgba(55, 65, 81, 0.6)",
              }}
            >
              {msg.text}
            </div>
          </div>
        ))}

        {/* Loader */}
        {loading && (
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              marginBottom: "1rem",
            }}
          >
            <div className="loader-dots" />
          </div>
        )}
      </div>

      {/* Input Box */}
      <form
        onSubmit={handleSubmit}
        style={{
          position: "fixed",
          bottom: "16px",
          left: "16.6rem",
          right: "33px",
          backgroundColor: "rgba(64, 65, 79, 0.95)",
          padding: "1rem",
          zIndex: 2,
          borderBottomLeftRadius: "7px",
          borderBottomRightRadius: "7px",
          boxShadow: "0 -2px 8px rgba(0,0,0,0.7)",
        }}
      >
        <div style={{ display: "flex", gap: "0.5rem" }}>
          <textarea
            rows="1"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask Jagannath GPT..."
            style={{
              flex: 1,
              borderRadius: "8px",
              padding: "0.75rem",
              resize: "none",
              border: "none",
              backgroundColor: "#555",
              color: "#fff",
              outline: "none",
              fontSize: "1rem",
            }}
          />
          <button
            type="submit"
            style={{
              backgroundColor: "#19c37d",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              padding: "0 1.5rem",
              cursor: "pointer",
              fontWeight: "600",
              fontSize: "1rem",
              transition: "background-color 0.3s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#13a567")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#19c37d")
            }
          >
            Send
          </button>
        </div>
      </form>

      {/* Animation styles */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }

          .loader-dots {
            width: 40px;
            height: 18px;
            background: radial-gradient(circle closest-side, #999 92%, transparent) 0% 50%,
                        radial-gradient(circle closest-side, #999 92%, transparent) 50% 50%,
                        radial-gradient(circle closest-side, #999 92%, transparent) 100% 50%;
            background-size: 8px 8px;
            background-repeat: no-repeat;
            animation: dotFlash 1s infinite linear;
          }

          @keyframes dotFlash {
            0% {
              background-position: 0% 50%, 50% 50%, 100% 50%;
              opacity: 1;
            }
            50% {
              background-position: 0% 60%, 50% 40%, 100% 60%;
              opacity: 0.6;
            }
            100% {
              background-position: 0% 50%, 50% 50%, 100% 50%;
              opacity: 1;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Ollamachat;
