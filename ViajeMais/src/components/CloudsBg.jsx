//Vanta não está funcionando, esse componente não vai ser utilizado mas vou deixar salvo para arrumar depois e usar em projetos futurosimport { useEffect, useRef, useState } from "react";

import { useEffect, useRef, useState } from "react";

export default function CloudsBg({ children }) {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (!window.VANTA || !window.THREE || vantaEffect || !vantaRef.current) return;

    const effect = window.VANTA.CLOUDS({
      el: vantaRef.current,
      THREE: window.THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      skyColor: 0x1a96c8,
      cloudColor: 0xc0c0dc,
      cloudShadowColor: 0x1c497d,
      sunColor: 0xff8e00,
      sunGlareColor: 0xff8158,
      sunlightColor: 0xffbf82,
      speed: 0.70
    });

    setVantaEffect(effect);

    return () => {
      if (effect) effect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div
      ref={vantaRef}
      style={{
        height: '100vh',
        width: '100vw',
        position: "relative",
        overflow: "hidden"
      }}
    >
      {children}
    </div>
  );
}