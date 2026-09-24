import { NextResponse } from "next/server";
import { checkVisibility, InputError } from "@/lib/visibility";

export const maxDuration = 30;

export async function POST(request: Request) {
  let url = "";
  try {
    const body = await request.json();
    url = typeof body.url === "string" ? body.url.slice(0, 300) : "";
  } catch {
    return NextResponse.json({ error: "Requisição inválida." }, { status: 400 });
  }
  if (!url.trim()) return NextResponse.json({ error: "Informe o endereço do site." }, { status: 422 });

  try {
    const report = await checkVisibility(url);
    return NextResponse.json(report);
  } catch (err) {
    if (err instanceof InputError) return NextResponse.json({ error: err.message }, { status: 422 });
    console.error("[visibilidade]", err);
    return NextResponse.json({ error: "Não foi possível analisar agora. Tente novamente em instantes." }, { status: 500 });
  }
}
