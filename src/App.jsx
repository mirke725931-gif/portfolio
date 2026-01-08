import { NavLink, Routes, Route, Navigate } from "react-router-dom";

import Profile from "./pages/Profile";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

const linkStyle = ({ isActive }) => ({
  textDecoration: "none",
  padding: "10px 12px",
  borderRadius: 10,
  color: isActive ? "#0F766E" : "#374151",
  fontWeight: isActive ? 800 : 600,
  borderBottom: isActive ? "2px solid #0F766E" : "2px solid transparent",
});

export default function App() {
  return (
    <div style={{ minHeight: "100vh", background: "#F9FAFB" }}>
      {/* Header */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 10,
          background: "rgba(249,250,251,0.9)",
          backdropFilter: "blur(8px)",
          borderBottom: "1px solid #E5E7EB",
        }}
      >
        {/* ✅ 풀폭 컨테이너 */}
        <div
          className="appHeaderInner"
          style={{
            width: "100%",
            padding: "14px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 12,
            boxSizing: "border-box",
          }}
        >
          <div className="appTitle" style={{ fontWeight: 900, letterSpacing: -0.2, color:"#0F766E", fontSize:"20px"}}>Kanghyun Lee · Portfolio</div>
          
          <nav className="appNav" style={{ display: "flex", gap: 8, flexWrap: "wrap"}}>
            <NavLink to="/profile" style={linkStyle}>
              Profile
            </NavLink>
            <NavLink to="/skills" style={linkStyle}>
              Skills
            </NavLink>
            <NavLink to="/projects" style={linkStyle}>
              Projects
            </NavLink>
            <NavLink to="/contact" style={linkStyle}>
              Contact
            </NavLink>
          </nav>
        </div>
      </header>

      {/* Page */}
      <main
        style={{
          width: "100%",
          padding: "28px 24px",
          boxSizing: "border-box",
        }}
      >
        <Routes>
          <Route path="/" element={<Navigate to="/profile" replace />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/profile" replace />} />
        </Routes>
      </main>
    </div>
  );
}
