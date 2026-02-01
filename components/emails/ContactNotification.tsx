import * as React from "react";

interface ContactNotificationProps {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export const ContactNotification: React.FC<
  Readonly<ContactNotificationProps>
> = ({ name, email, phone, message }) => (
  <div style={{ fontFamily: "sans-serif", padding: "20px", color: "#333" }}>
    <h1 style={{ color: "#000", fontSize: "24px", marginBottom: "20px" }}>
      Yeni İletişim Formu Mesajı
    </h1>
    <div
      style={{
        backgroundColor: "#f8f9fa",
        padding: "20px",
        borderRadius: "8px",
        border: "1px solid #dee2e6",
      }}
    >
      <p>
        <strong>Ad Soyad:</strong> {name}
      </p>
      <p>
        <strong>E-posta:</strong> <a href={`mailto:${email}`}>{email}</a>
      </p>
      {phone && (
        <p>
          <strong>Telefon:</strong> <a href={`tel:${phone}`}>{phone}</a>
        </p>
      )}
      <div
        style={{
          marginTop: "20px",
          paddingTop: "20px",
          borderTop: "1px solid #dee2e6",
        }}
      >
        <p>
          <strong>Mesaj:</strong>
        </p>
        <p style={{ whiteSpace: "pre-wrap" }}>{message}</p>
      </div>
    </div>
    <p style={{ fontSize: "12px", color: "#6c757d", marginTop: "20px" }}>
      Bu e-posta En-Ka Makine Kalıp web sitesi üzerinden gönderilmiştir.
    </p>
  </div>
);
