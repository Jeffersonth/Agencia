import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} — Agentes de IA e Automação para Empresas`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const mark =
  "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 240 240'>" +
  "<defs><linearGradient id='v' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='#7c4dff'/><stop offset='1' stop-color='#4d7cff'/></linearGradient>" +
  "<linearGradient id='s' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='#ffb547'/><stop offset='1' stop-color='#ff7a45'/></linearGradient>" +
  "<mask id='m'><rect width='240' height='240' fill='#fff'/><circle cx='183' cy='94' r='91' fill='#000'/></mask></defs>" +
  "<circle cx='115' cy='120' r='95' fill='url(#v)' mask='url(#m)'/>" +
  "<g stroke='#8b63ff' stroke-width='8' stroke-linecap='round'><line x1='185' y1='87' x2='150' y2='44'/><line x1='185' y1='87' x2='214' y2='60'/><line x1='185' y1='87' x2='212' y2='128'/></g>" +
  "<g fill='#b9a4ff'><circle cx='150' cy='44' r='11'/><circle cx='214' cy='60' r='11'/><circle cx='212' cy='128' r='11'/></g>" +
  "<circle cx='185' cy='87' r='18' fill='url(#s)'/></svg>";
const markSrc = `data:image/svg+xml;utf8,${encodeURIComponent(mark)}`;

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
          background: "linear-gradient(165deg, #251b60, #181240)",
          color: "white",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={markSrc} width={84} height={84} alt="" />
          <div style={{ fontSize: 40, fontWeight: 700, display: "flex", gap: 10 }}>
            <span>Soluna</span>
            <span style={{ color: "#b9a4ff" }}>IA</span>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2, maxWidth: 980 }}>
            Agentes de IA que atendem, qualificam e vendem 24/7.
          </div>
          <div style={{ marginTop: 28, fontSize: 30, color: "#c9b6ff" }}>
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
