import React from "react";

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

export default function Skills() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
      {/* Intro */}
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
          Skills
        </h1>

        <p style={{ ...bodyText, marginTop: 10, fontSize: 15 }}>
          프로젝트에서 실제로 사용하며 기능을 구현했던 기술들을 중심으로 정리했습니다.
          <br />
          단순 사용 경험이 아닌, 서비스 흐름 안에서 어떤 역할로 활용했는지에 초점을 두었습니다.
        </p>

        <p style={{ marginTop: 8, fontSize: 13, color: "#6B7280", fontWeight: 700 }}>
          Core: React Native · React · Spring Boot · Oracle · MyBatis
        </p>
      </section>

      {/* Frontend */}
      <section className="card" style={cardStyle}>
        <h2 style={sectionTitle}>Frontend</h2>

        <p style={{ ...bodyText, fontWeight: 700 }}>HTML / CSS / JavaScript</p>
        <ul style={listStyle}>
          <li>UI 구조 설계 및 화면 마크업</li>
          <li>사용자 인터랙션 처리</li>
          <li>반응형 레이아웃 구현 경험</li>
        </ul>

        <p style={{ ...bodyText, marginTop: 12, fontWeight: 700 }}>React</p>
        <ul style={listStyle}>
          <li>컴포넌트 분리 및 재사용</li>
          <li>props / state 기반 데이터 흐름 관리</li>
          <li>페이지 라우팅 및 화면 전환 구성</li>
        </ul>

        <p style={{ ...bodyText, marginTop: 12, fontWeight: 700 }}>React Native</p>
        <ul style={listStyle}>
          <li>모바일 UI 구현</li>
          <li>Stack / Tab Navigation 구성</li>
          <li>Android 환경에서 테스트 및 디버깅 경험</li>
        </ul>
      </section>

      {/* Backend */}
      <section className="card" style={cardStyle}>
        <h2 style={sectionTitle}>Backend</h2>

        <p style={{ ...bodyText, fontWeight: 700 }}>Spring Boot</p>
        <ul style={listStyle}>
          <li>REST API 설계 및 CRUD 개발</li>
          <li>클라이언트와의 데이터 통신 처리</li>
          <li>예외 처리 및 응답 구조 설계</li>
        </ul>

        <p style={{ ...bodyText, marginTop: 12, fontWeight: 700 }}>MyBatis</p>
        <ul style={listStyle}>
          <li>SQL Mapper 작성</li>
          <li>동적 쿼리 처리</li>
          <li>DB 데이터 매핑</li>
        </ul>

        <p style={{ ...bodyText, marginTop: 12, fontWeight: 700 }}>Oracle DB</p>
        <ul style={listStyle}>
          <li>테이블 / 시퀀스 설계</li>
          <li>관계형 데이터 구조 이해</li>
        </ul>
      </section>

      {/* Tools & Additional */}
      <section
        className="skillsGrid"
        style={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gap: 14,
         }}
        >
        <div className="card" style={{ ...cardStyle, gridColumn: "span 7" }}>
          <h2 style={sectionTitle}>Tools & Collaboration</h2>

          <p style={{ ...bodyText, fontWeight: 700 }}>Git / GitHub</p>
          <ul style={listStyle}>
            <li>버전 관리 및 협업 경험</li>
          </ul>

          <p style={{ ...bodyText, marginTop: 12, fontWeight: 700 }}>Figma</p>
          <ul style={listStyle}>
            <li>화면 구조 파악 및 UI 구현 참고</li>
          </ul>

          <p style={{ ...bodyText, marginTop: 12, fontWeight: 700 }}>
            VS Code / IntelliJ / Android Studio
          </p>
          <ul style={listStyle}>
            <li>프론트엔드 · 백엔드 · 모바일 개발 환경 경험</li>
          </ul>
        </div>

        <div className="card" style={{ ...cardStyle, gridColumn: "span 5" }}>
          <h2 style={sectionTitle}>Additional Experience</h2>

          <p style={{ ...bodyText, fontWeight: 700 }}>Python</p>
          <ul style={listStyle}>
            <li>간단한 서버 로직 구현 경험</li>
          </ul>

          <p style={{ ...bodyText, marginTop: 12, fontWeight: 700 }}>FastAPI</p>
          <ul style={listStyle}>
            <li>AI 기능 연동을 위한 API 서버 구성 경험</li>
          </ul>
        </div>
      </section>

      {/* Summary */}
      <section className="card" style={cardStyle}>
        <h2 style={sectionTitle}>Summary</h2>
        <p style={bodyText}>
          프론트엔드부터 백엔드까지 서비스 흐름을 이해하고,
          <br />
          기능 단위로 구현할 수 있는 개발자를 목표로 합니다.
        </p>
      </section>
    </div>
  );
}
