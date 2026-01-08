import React, { useState, useMemo } from "react";

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

export default function Projects() {
  const [phase, setPhase] = useState("3");

  const tabs = useMemo(
    () => [
      { key: "1", label: "1차 프로젝트" },
      { key: "2", label: "2차 프로젝트" },
      { key: "3", label: "3차 프로젝트" },
    ],
    []
  );

  const tabWrapStyle = {
    width: "100%",
    display: "inline-flex",
    gap: 6,
    padding: 6,
    borderRadius: 999,
    border: "1px solid #E5E7EB",
    background: "#FFFFFF",
  };

  const tabBtnStyle = (active) => ({
    width: "33%",
    appearance: "none",
    border: "1px solid transparent",
    background: active ? "#0F766E" : "transparent",
    color: active ? "#FFFFFF" : "#374151",
    fontWeight: active ? 800 : 700,
    padding: "10px 14px",
    borderRadius: 999,
    cursor: "pointer",
    fontSize: 13,
    lineHeight: 1,
    transition:
      "transform 120ms ease, box-shadow 120ms ease, background-color 120ms ease",
  });

  const tabBtnHover = {
    transform: "translateY(-1px)",
    boxShadow: "0 6px 14px rgba(17, 24, 39, 0.10)",
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
      <section className="card" style={{ ...cardStyle, padding: 22 }}>
        <h1 style={{ margin: 0, fontSize: 34, letterSpacing: -0.5, color: "#0F766E", lineHeight: 1.1 }}>
          Projects
        </h1>

        <p style={{ ...bodyText, marginTop: 10, fontSize: 15 }}>
          학원 과정 중 진행한 프로젝트들입니다.<br />
          차수별로 목적과 규모가 다르며, 프로젝트를 거치며 점진적으로<br />
          설계와 구현 범위를 확장해왔습니다.
        </p>

        <div style={{ marginTop: 14, display: "flex", gap: 10, flexWrap: "wrap" }}>
          <div style={tabWrapStyle}>
            {tabs.map((t) => {
              const active = phase === t.key;
              return (
                <button
                  key={t.key}
                  onClick={() => setPhase(t.key)}
                  style={tabBtnStyle(active)}
                  onMouseEnter={(e) => Object.assign(e.currentTarget.style, tabBtnHover)}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "none";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {t.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {phase === "3" && <Phase3 cardStyle={cardStyle} sectionTitle={sectionTitle} bodyText={bodyText} badgeStyle={badgeStyle} />}
      {phase === "2" && <Phase2 cardStyle={cardStyle} sectionTitle={sectionTitle} bodyText={bodyText} badgeStyle={badgeStyle} />}
      {phase === "1" && <Phase1 cardStyle={cardStyle} sectionTitle={sectionTitle} bodyText={bodyText} badgeStyle={badgeStyle} />}
    </div>
  );
}

function ProjectCard({
  cardStyle,
  title,
  meta,
  desc,
  stack,
  points,
  badgeStyle,
  showDemo = true,
  demoUrl,
  githubUrl,
}) {
  return (
    <section className="card" style={cardStyle}>
      <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
        <div style={{ fontSize: 18, fontWeight: 900, color: "#115E59" }}>{title}</div>
        <span style={badgeStyle}>{meta}</span>
      </div>

      <p style={{ marginTop: 10, ...bodyText }}>{desc}</p>

      <p style={{ fontWeight: 700, color: "#115E59" }}>My Contribution</p>

      <ul style={listStyle}>
        {points.map((p) => <li key={p}>{p}</li>)}
      </ul>

      <div style={{ marginTop: 12, fontSize: 15, color: "#6B7280", fontWeight: 700 }}>
        Tech: {stack}
      </div>

      <div style={{ marginTop: 14, display: "flex", gap: 10 }}>
        {showDemo && (
          <a className="btn btn-primary" href={demoUrl} target="_blank" rel="noopener noreferrer" style={{ width: "47%" }}>
            시연 영상 보러가기 →
          </a>
        )}

        <a className="btn btn-ghost" href={githubUrl} target="_blank" rel="noopener noreferrer" style={{ width: showDemo ? "47%" : "100%" }}>
          GitHub →
        </a>
      </div>
    </section>
  );
}

function Phase3(props) {
  return (
    <>
      <ProjectCard
        {...props}
        title="Re:charge App"
        meta="3차 팀 프로젝트 · Mobile"
        desc="전기차 충전소 정보 제공을 중심으로,
            충전 대기 시간을 활용할 수 있도록
            장소 검색·콘텐츠 추천 등 라이프스타일 기능을 결합한
            모바일 앱 서비스입니다."
        stack="React Native · Spring Boot · Oracle · MyBatis · Kakao API · 환경부 API · GPT OpenAPI · Python"
        points={[
          "React Native 기반 충전소/충전기 주요 화면 UI 구현",
          "Stack / Tab Navigation 구조 설계 및 화면 흐름 구성",
          "회원가입·로그인·아이디/비밀번호 찾기 기능 구현",
          "비밀번호 암호화 및 이메일 인증(코드 발송/검증) 로직 구현",
          "Spring Boot REST API 연동 및 응답 데이터 가공 처리",
          "카카오맵 API 기반 위치 정보 연동",
          "GPT Open API를 활용한 운세 콘텐츠 기능 구현(프롬프트 구성 및 응답 처리)",
          "Python(FastAPI) 기반 AI 기능 연동 API 서버 구성",
        ]}
        demoUrl="https://youtu.be/OFibvvu0gV4"
        githubUrl="https://github.com/mirke725931-gif/Recharge_App"
      />
    </>
  );
}

function Phase2(props) {
  return (
    <ProjectCard
      {...props}
      title="Re:charge Web"
      meta="2차 팀 프로젝트 · Web"
      desc="React 기반 웹 환경에서,
            사용자 인증과 CRUD 기능을 중심으로
            클라이언트와 서버 간 데이터 흐름을 구현한
            웹 서비스 프로젝트입니다."
      stack="React · Spring Boot · Oracle · MyBatis · Kakao API · 환경부 API"
      points={[
        "React 기반 주요 화면 UI 및 컴포넌트 구성",
        "Spring Boot REST API 연동을 통한 CRUD 처리",
        "회원가입·로그인·아이디/비밀번호 찾기 기능 구현",
        "비밀번호 암호화 로직 구현",
        "카카오맵 API 기반 위치 정보 연동",
        "클라이언트-서버 간 데이터 흐름 이해 및 적용",
      ]}
      demoUrl="https://youtu.be/Qxh7bkA22vU"
      githubUrl="https://github.com/mirke725931-gif/Recharge_Web"
    />
  );
}

function Phase1(props) {
  return (
    <ProjectCard
      {...props}
      title="같이걷개"
      meta="1차 팀 프로젝트 · Web"
      desc="반려견 산책을 단순한 일상이 아닌
            사람 간의 소통 경험으로 확장하기 위해,
            키워드 기반으로 산책 메이트를 매칭하는
            웹 플랫폼 프로젝트입니다."
      stack="HTML · CSS · JavaScript"
      points={[
        "HTML 기반 전체 페이지 구조 및 시맨틱 마크업 구성",
        "CSS를 활용한 레이아웃 및 기본 UI 스타일링",
        "JavaScript를 이용한 사용자 이벤트 처리",
        "DOM 조작을 통한 화면 동적 변경 구현",
        "키워드 선택 기반 매칭 흐름 UI 구현",
      ]}
      showDemo={false}
      githubUrl="https://github.com/mirke725931-gif/workingDog_Web"
    />
  );
}
