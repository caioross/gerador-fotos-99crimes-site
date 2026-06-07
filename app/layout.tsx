import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { LangProvider } from "../components/i18n";

const GA_ID = "G-PLACEHOLDER1";

export const metadata: Metadata = {
  title: "Gerador de Fotos — 99 Crimes",
  description:
    "Pipeline local que gera as 99 fotos de perfil do jogo 99 Crimes com FLUX.1-schnell GGUF via ComfyUI. Sem nuvem, sem rosto de pessoa real, licença Apache 2.0.",
  keywords: [
    "99 Crimes",
    "FLUX.1-schnell",
    "ComfyUI",
    "geração de imagens",
    "GGUF",
    "fotos de perfil",
    "pipeline local",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body className="grain antialiased">
        {GA_ID.indexOf("PLACEHOLDER") === -1 && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
            </Script>
          </>
        )}
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
