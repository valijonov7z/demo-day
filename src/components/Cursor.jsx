import { useEffect, useState } from "react";

function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        left: position.x,
        top: position.y,
        width: "60px",
        height: "45px",
        backgroundImage: "url('/Untitled.png')",
        backgroundSize: "cover",
        pointerEvents: "none",
        transform: "translate(-50%, -50%)",
        zIndex: 9999
      }}
    />
  );
}

export default Cursor;