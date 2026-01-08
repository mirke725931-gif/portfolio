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

const listStyle = {
  margin: "10px 0 0",
  paddingLeft: 18,
  color: "#374151",
  lineHeight: 1.75,
  fontSize: 14,
};

export default function Profile() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
      {/* Hero */}
      <section className="card" style={{ ...cardStyle, padding: 22 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <h1
            style={{
              margin: 0,
              letterSpacing: -0.5,
              color: "#0F766E",
              lineHeight: 1.1,
            }}
            >
            Profile
          </h1>
          <h3
            style={{
              margin: 0,
              letterSpacing: -0.5,
              color: "#111827",
              lineHeight: 1.1,
            }}
            >
            이강현
          </h3>
          <p style={{ ...bodyText, fontSize: 15 }}>
            HTML / CSS / JavaScript로 UI 구조와 사용자 동작을 구현한 경험을 바탕으로,
            <br />
            React / React Native와 Spring Boot를 활용하여
            <br />
            화면부터 API, DB까지 서비스 흐름을 끝까지 구현해본 경험이 있습니다.
          </p>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 6 }}>
            <Link to="/projects" className="btn btn-primary">
              프로젝트 보러가기 →
            </Link>
            <Link to="/contact" className="btn btn-ghost">
              연락처 →
            </Link>
          </div>
        </div>
      </section>

      <section
        className="card"
        style={{...cardStyle}}
      >
        {/* What I do */}
        <div>
          <h2 style={sectionTitle}>What I Do</h2>
          <p style={bodyText}>
            “기능 구현”에서 끝내지 않고, 데이터 흐름과 구조를 맞춰서
            실제 서비스 형태로 완성하는 걸 목표로 합니다.
          </p>

          <ul style={listStyle}>
            <li>React / React Native 기반 화면 구현 및 상태 관리</li>
            <li>Spring Boot REST API 설계 및 CRUD 개발</li>
            <li>외부 API 연동(지도/공공데이터 등) 및 데이터 가공</li>
            <li>Oracle DB 테이블/시퀀스 설계 및 MyBatis 연동</li>
          </ul>
        </div>

      </section>

      {/* 2-column grid */}
      <section className="profileGrid" style={{ display:"grid", gridTemplateColumns:"repeat(12,1fr)", gap:14 }}>
        {/* What I do */}
        <div className="card" style={{...cardStyle, gridColumn: "span 7"}}>
            <h2 style={sectionTitle}>Featured Project</h2>

        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 10, flexWrap: "wrap" }}>
            <div style={{ fontSize: 18, fontWeight: 900, color: "#111827" }}>
              Re:charge App
            </div>
            <div style={{ fontSize: 12, color: "#6B7280", fontWeight: 700 }}>
              3차 팀 프로젝트
            </div>
          </div>

          <p style={bodyText}>
            전기차 충전소 정보와 라이프스타일 기능을 결합한 모바일 앱 프로젝트입니다.
          </p>

          <ul style={listStyle}>
            <li>React Native 기반 UI/UX 구현 및 화면 네비게이션 구성</li>
            <li>Spring Boot REST API 구현 + Oracle DB 연동</li>
            <li>외부 API(카카오맵, 공공데이터 등) 연동 및 데이터 처리</li>
          </ul>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 6 }}>
            <Link to="/projects" className="btn btn-primary">
              프로젝트 상세 보기 →
            </Link>
          </div>
        </div>
        </div>
        {/* Core Skills (summary) */}
        <div className="card" style={{ ...cardStyle, gridColumn: "span 5" }}>
          <h2 style={sectionTitle}>Core Skills</h2>

          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <div>
              <div style={{ fontWeight: 800, fontSize: 13, color: "#111827" }}>
                Frontend
              </div>
              <div style={bodyText}>HTML · CSS · JavaScript · React · React Native</div>
            </div>

            <div>
              <div style={{ fontWeight: 800, fontSize: 13, color: "#111827" }}>
                Backend
              </div>
              <div style={bodyText}>Spring Boot · MyBatis · Oracle DB</div>
            </div>

            <div>
              <div style={{ fontWeight: 800, fontSize: 13, color: "#111827" }}>
                Tools
              </div>
              <div style={bodyText}>Git/GitHub · Figma · Notion · VSCode · IntelliJ · Android Studio</div>
            </div>
          </div>

          <div style={{ marginTop: 12, display:"flex", justifyContent:"center"}}>
            <Link to="/skills" className="btn btn-ghost" style={{width: "100%" }}>
              기술스택 자세히 →
            </Link>
          </div>
        </div>
      </section>

      {/* Quick contact preview */}
      <section className="card" style={cardStyle}>
        <h2 style={sectionTitle}>Quick Contact</h2>

        <div className="quickGrid" style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: 12 }}>
          <div style={{ gridColumn: "span 6" }}>
            <div style={{ fontWeight: 800, fontSize: 13, color: "#111827" }}>Email</div>
                <p style={{ ...bodyText, marginTop: 6 }}>
                    <a
                        href="mailto:mirke7259@naver.com"
                        style={{
                        color: "#0F766E",
                        textDecoration: "none",
                        fontWeight: 600,
                        }}
                    >
                        mirke7259@naver.com
                    </a>
                </p>
            </div>

          <div style={{ gridColumn: "span 6" }}>
            <div style={{ fontWeight: 800, fontSize: 13, color: "#111827" }}>GitHub</div>
            <p style={{ ...bodyText, marginTop: 6 }}>
                <a
                    href="https://github.com/mirke725931-gif"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                    color: "#0F766E",
                    textDecoration: "none",
                    fontWeight: 600,
                    }}
                >
                    https://github.com/mirke725931-gif
                </a>
            </p>

          </div>
        </div>
      </section>

      {/* Responsive fix (simple) */}
      <style>{`
        @media (max-width: 860px) {
          .dummy {}
        }
      `}</style>
    </div>
  );
}
