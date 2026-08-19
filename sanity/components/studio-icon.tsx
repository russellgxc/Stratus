import React from "react";

export function StudioIcon() {
  return (
    <div
      style={{
        display: "grid",
        placeItems: "center",
        width: 28,
        height: 28,
        borderRadius: 8,
        background: "#0582F4",
      }}
    >
      <img
        src="/logo-mark.svg"
        alt="Stratus"
        width={18}
        height={18}
        style={{ display: "block" }}
      />
    </div>
  );
}
