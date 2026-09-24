import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = pageMetadata({
  title: "Política de Privacidade",
  description: `Como a ${site.name} coleta, usa e protege dados pessoais, conforme a LGPD.`,
  path: "/privacidade/",
});

// TODO: revisar com o jurídico/DPO antes de publicar.
export default function PrivacidadePage() {
  return (
    <LegalPage title="Política de Privacidade" path="/privacidade/" updatedAt="2026-09-24">
      <p>
        Esta política explica como a {site.legalName} (“{site.name}”), inscrita no CNPJ {site.cnpj}, trata dados pessoais coletados neste site, em
        conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 — LGPD).
      </p>
      <h2>1. Dados que coletamos</h2>
      <ul>
        <li>Dados informados por você em formulários: nome, empresa, WhatsApp, e-mail e a descrição do seu desafio.</li>
        <li>Dados informados nas ferramentas (como o endereço de um site no Teste de Visibilidade em IA ou números nas calculadoras) e mensagens enviadas ao chat de IA do site.</li>
        <li>Dados de navegação coletados por ferramentas de mensuração, como páginas visitadas e origem do acesso.</li>
        <li>Conversas pelo WhatsApp, inclusive com o nosso agente de IA.</li>
      </ul>
      <h2>2. Para que usamos</h2>
      <ul>
        <li>Responder ao seu contato e enviar o que foi solicitado (proposta, relatório, diagnóstico).</li>
        <li>Prestar os serviços contratados.</li>
        <li>Melhorar o site e medir o desempenho das páginas.</li>
        <li>Cumprir obrigações legais.</li>
      </ul>
      <h2>3. Bases legais</h2>
      <p>
        Tratamos dados com base no consentimento, na execução de contrato ou de procedimentos preliminares a pedido do titular, no legítimo interesse
        (por exemplo, para medir e melhorar o site) e no cumprimento de obrigação legal, conforme o caso.
      </p>
      <h2>4. Compartilhamento</h2>
      <p>
        Compartilhamos dados apenas com fornecedores necessários à operação (hospedagem, e-mail, ferramentas de CRM, mensuração, WhatsApp Business Platform e
        provedores de IA com contrato de não retenção), sempre com obrigações de confidencialidade e segurança. Não vendemos dados pessoais.
      </p>
      <h2>5. Agente de IA no WhatsApp</h2>
      <p>
        Nosso WhatsApp é atendido por um assistente virtual de IA, que pode transferir a conversa para uma pessoa da equipe. As conversas são usadas
        apenas para atender você e melhorar o atendimento, e não são usadas para treinar modelos de terceiros.
      </p>
      <p>
        No site, o chat “Pergunte à IA” envia as mensagens da conversa ao provedor de IA (Anthropic) apenas para gerar a resposta. O site não grava o
        conteúdo dessas conversas. Não informe dados pessoais sensíveis no chat; para propostas e atendimento, use o Diagnóstico ou o WhatsApp.
      </p>
      <h2>6. Armazenamento e segurança</h2>
      <p>
        Mantemos os dados pelo tempo necessário às finalidades acima ou exigido por lei, com controle de acesso e medidas técnicas de segurança.
      </p>
      <h2>7. Seus direitos</h2>
      <p>
        Você pode solicitar confirmação de tratamento, acesso, correção, anonimização, portabilidade, eliminação, informação sobre compartilhamento e
        revogação do consentimento, entre outros direitos previstos no art. 18 da LGPD.
      </p>
      <h2>8. Contato do encarregado</h2>
      <p>
        Para exercer seus direitos ou tirar dúvidas, escreva para <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>.
      </p>
    </LegalPage>
  );
}
