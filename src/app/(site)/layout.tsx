import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ChatWidget } from "@/components/ChatWidget";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main id="conteudo">{children}</main>
      <Footer />
      <ChatWidget />
    </>
  );
}
