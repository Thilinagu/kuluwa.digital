import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Kuluwa.digital — Technology Built for Sri Lanka & Australia";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0F0B1E",
        }}
      >
        {/* Added wrapper with an increased fontSize to scale text uniformly */}
        <div style={{ display: "flex", alignItems: "center", gap: 30, fontSize: 90 }}>
          <svg width="110" height="110" viewBox="0 0 200 200">
            <g fill="none" stroke="#FFFFFF" strokeWidth="26" strokeLinecap="round" strokeLinejoin="round">
              <path d="M 62,38 L 62,162" />
              <path d="M 62,100 L 148,38" />
              <path d="M 62,100 L 148,158" />
            </g>
            <circle cx="148" cy="158" r="17" fill="#FF6B45" />
          </svg>
          <div style={{ display: "flex", fontWeight: 700 }}>
            <span style={{ color: "#FFFFFF" }}>kuluwa</span>
            <span style={{ color: "#FF6B45", fontWeight: 500 }}>.digital</span>
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}