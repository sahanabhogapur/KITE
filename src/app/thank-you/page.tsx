// src/app/thank-you/page.tsx
import Link from "next/link";

export default function ThankYouPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#f7f9fc",
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "40px",
          borderRadius: "12px",
          textAlign: "center",
          boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
          maxWidth: "420px",
        }}
      >
        <h1>Thank you! 🎉</h1>
        <p style={{ marginTop: "10px" }}>
          Your enquiry has been submitted successfully.
        </p>

        <Link href="/services">
          <button
            style={{
              marginTop: "25px",
              padding: "10px 20px",
              backgroundColor: "#4f46e5",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Explore More Services
          </button>
        </Link>
      </div>
    </div>
  );
}
