import React from "react";
import { Link } from "react-router-dom";

const cardStyle = {
  background: "#FFFFFF",
  border: "1px solid #E5E7EB",
  borderRadius: 12,
  padding: 18,
};

const sectionTitle = {
  margin: "0 0 10px",
  fontSize: 16,
  fontWeight: 800,
  color: "#115E59",
};

const bodyText = {
  margin: 0,
  color: "#374151",
  lineHeight: 1.75,
  fontSize: 14,
};

const badgeStyle = {
  display: "inline-flex",
  alignItems: "center",
  height: 22,
  padding: "0 10px",
  borderRadius: 999,
  fontSize: 12,
  fontWeight: 700,
  border: "1px solid #E5E7EB",
  background: "#F9FAFB",
  color: "#374151",
};

export default function Contact() {
  const email = "mirke7259@naver.com";
  const github = "https://github.com/mirke725931-gif/Portfolio"; // 원하면 3차 repo로 바꿔도 됨

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gap: 14,
  };

  const contactCardBase = {
    ...cardStyle,
    padding: 20,
    display: "flex",
    flexDirection: "column",
    gap: 10,
    minHeight: 140,
  };

  const labelStyle = { fontWeight: 800, fontSize: 13, color: "#111827" };

  const linkStyle = {
    color: "#0F766E",
    textDecoration: "none",
    fontWeight: 700,
    wordBreak: "break-all",
  };

  const helperStyle = { margin: 0, fontSize: 13, color: "#6B7280", lineHeight: 1.6 };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
      {/* Hero */}
      <section className="card" style={{ ...cardStyle, padding: 22 }}>
        <h1
          style={{
            margin: 0,
            fontSize: 34,
            letterSpacing: -0.5,
            color: "#0F766E",
            lineHeight: 1.1,
          }}
        >
          Contact
        </h1>

        <p style={{ ...bodyText, marginTop: 10, fontSize: 15 }}>
          프로젝트/협업/채용 관련 문의를 환영합니다.
          <br />
          아래 채널로 편하게 연락 주세요.
        </p>

        <div style={{ marginTop: 14, display: "flex", gap: 10, flexWrap: "wrap" }}>
          <Link to="/projects" className="btn btn-primary">
            프로젝트 보러가기 →
          </Link>
          <Link to="/" className="btn btn-ghost">
            Profile로 돌아가기 →
          </Link>
        </div>
      </section>

      {/* Contact cards */}
      <section className="profileGrid" style={gridStyle}>
        {/* Email */}
        <div className="card" style={{ ...contactCardBase, gridColumn: "span 4" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10 }}>
            <h2 style={{ ...sectionTitle, margin: 0 }}>Email</h2>
            <span style={badgeStyle}>Primary</span>
          </div>

          <p style={labelStyle}>메일로 연락</p>
          <a href={`mailto:${email}`} style={linkStyle}>
            {email}
          </a>
          <p style={helperStyle}>클릭 시 메일 앱이 열립니다.</p>
        </div>

        {/* GitHub */}
        <div className="card" style={{ ...contactCardBase, gridColumn: "span 4" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10 }}>
            <h2 style={{ ...sectionTitle, margin: 0 }}>GitHub</h2>
            <span style={badgeStyle}>Code</span>
          </div>

          <p style={labelStyle}>레포지토리</p>
          <a href={github} target="_blank" rel="noopener noreferrer" style={linkStyle}>
            {github.replace("https://", "")}
          </a>
          <p style={helperStyle}>새 탭으로 이동합니다.</p>
        </div>

        {/* Projects */}
        <div className="card" style={{ ...contactCardBase, gridColumn: "span 4" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10 }}>
            <h2 style={{ ...sectionTitle, margin: 0 }}>Projects</h2>
            <span style={badgeStyle}>Details</span>
          </div>

          <p style={labelStyle}>시연/기여도</p>
          <p style={{ ...bodyText, marginTop: 0 }}>
            1·2·3차 프로젝트의 시연 영상과 구현 내용을 확인할 수 있습니다.
          </p>

          <div style={{ marginTop: "auto" }}>
            <Link to="/projects" className="btn btn-primary" style={{ width: "94%" }}>
              프로젝트 페이지 열기 →
            </Link>
          </div>
        </div>
      </section>

      {/* Optional message */}
      <section className="card" style={{ ...cardStyle, padding: 22 }}>
        <h2 style={sectionTitle}>Message</h2>
        <p style={bodyText}>
          기능 구현에서 끝내지 않고,
          <br />
          데이터 흐름과 구조까지 맞춰서 “서비스 형태로 완성”하는 것을 목표로 합니다.
        </p>
      </section>

      {/* Responsive fix */}
      <style>{`
        @media (max-width: 900px) {
          .profileGrid > .card {
            grid-column: span 12 !important;
          }
        }
      `}</style>
    </div>
  );
}
