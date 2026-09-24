import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} — Agentes de IA e Automação para Empresas`;
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
          justifyContent: "space-between",
          background: "#0A1F44",
          color: "white",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ width: 64, height: 64, borderRadius: 18, background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: 28, height: 28, borderRadius: 999, background: "#0B5FFF" }} />
          </div>
          <div style={{ fontSize: 36, fontWeight: 700 }}>{site.name}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2, maxWidth: 980 }}>
            Agentes de IA que atendem, qualificam e vendem 24/7.
          </div>
          <div style={{ marginTop: 28, fontSize: 30, color: "rgba(255,255,255,0.7)" }}>
            {`${site.stats.years} anos · ${site.stats.projects} projetos · Setores regulados · Todo o Brasil`}
          </div>
        </div>
        <div style={{ display: "flex", gap: 16 }}>
          {["Atendimento", "Vendas", "Operações", "IA Privada"].map((t) => (
            <div key={t} style={{ fontSize: 24, padding: "10px 22px", borderRadius: 999, border: "2px solid rgba(255,255,255,0.25)" }}>
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
