"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Lang = "pt" | "en";

type Step = { n: string; title: string; desc: string };
type Feature = { icon: string; title: string; desc: string };

type Dict = {
  navPipeline: string;
  navWhy: string;
  navStack: string;
  navGame: string;

  heroBadge: string;
  heroTitle: string;
  heroTagline: string;
  heroSub: string;
  heroCtaPrimary: string;
  heroCtaSecondary: string;

  pipelineTitle: string;
  pipelineLead: string;
  steps: Step[];

  whyTitle: string;
  whyLead: string;
  features: Feature[];

  stackTitle: string;
  stackLead: string;
  stackItems: string[];
  qualityTitle: string;
  qualityItems: string[];

  ctaTitle: string;
  ctaLead: string;
  ctaButton: string;

  footerNote: string;
  footerRights: string;
};

const STR: Record<Lang, Dict> = {
  pt: {
    navPipeline: "Pipeline",
    navWhy: "Por quê",
    navStack: "Tecnologia",
    navGame: "O jogo",

    heroBadge: "Ferramenta de produção · 99 Crimes",
    heroTitle: "Gerador de Fotos",
    heroTagline: "99 rostos. Nenhum real. Tudo local.",
    heroSub:
      "Pipeline que cria as 99 fotos de perfil do jogo 99 Crimes com FLUX.1-schnell rodando na sua máquina — sem custo de nuvem, sem rosto de pessoa real e com licença liberada para uso comercial.",
    heroCtaPrimary: "Ver o pipeline",
    heroCtaSecondary: "Conhecer o jogo",

    pipelineTitle: "Da ficha à foto",
    pipelineLead:
      "Quatro etapas, do texto da ficha de cada contato até a imagem pronta para a interface.",
    steps: [
      {
        n: "01",
        title: "Prompt por personagem",
        desc: "Lê a ficha de cada um dos 99 contatos, extrai a aparência e monta um prompt em inglês no estilo que o FLUX entende melhor.",
      },
      {
        n: "02",
        title: "Geração no ComfyUI",
        desc: "Monta o workflow FLUX.1-schnell GGUF e chama a API local do ComfyUI. Variações por personagem, salvas em disco.",
      },
      {
        n: "03",
        title: "Curadoria",
        desc: "Você escolhe a melhor variação de cada contato. Seeds fixas por personagem permitem reproduzir e ajustar um rosto depois.",
      },
      {
        n: "04",
        title: "Indexação",
        desc: "Liga a foto escolhida à ficha e gera o índice (id → ficha → foto) no formato que o jogo consome.",
      },
    ],

    whyTitle: "Por que FLUX.1-schnell GGUF",
    whyLead:
      "A escolha certa para rostos realistas, rodando em pouca VRAM e com licença que permite jogo comercial.",
    features: [
      {
        icon: "🪪",
        title: "Rostos críveis",
        desc: "Pele, poros e luz natural de foto de celular — não capa de revista. Cada contato parece uma pessoa comum e única.",
      },
      {
        icon: "⚡",
        title: "Só 4 passos",
        desc: "O schnell gera em 4 passos, muito mais rápido que o FLUX.dev de 20–30 — essencial em 4GB de VRAM.",
      },
      {
        icon: "💾",
        title: "GGUF quantizado",
        desc: "Roda com offload para a RAM, cabendo numa placa modesta. Geração 100% local, sem mandar nada pra nuvem.",
      },
      {
        icon: "⚖️",
        title: "Licença Apache 2.0",
        desc: "As imagens podem ir num jogo comercial. (O FLUX.dev é não-comercial; por isso o schnell.)",
      },
    ],

    stackTitle: "Tecnologia",
    stackLead: "Scripts enxutos em Python puro, orquestrando modelos locais.",
    stackItems: [
      "Python 3 (stdlib pura, sem dependências exóticas)",
      "FLUX.1-schnell quantizado em GGUF",
      "ComfyUI + nó ComfyUI-GGUF (API local na :8188)",
      "Seeds por personagem para reprodutibilidade",
    ],
    qualityTitle: "Checklist de qualidade",
    qualityItems: [
      "99 fotos, IDs batendo com as fichas",
      "Diversidade real de idade, etnia e gênero",
      "Mesma assinatura visual entre todas",
      "Nenhuma parece pessoa real",
    ],

    ctaTitle: "Parte do universo 99 Crimes",
    ctaLead:
      "Um detetive, um celular, 99 contatos e 98 crimes. A única arma é a conversa — e cada conversa tem um rosto.",
    ctaButton: "Ver 99 Crimes no GitHub",

    footerNote: "Gerador de Fotos — ferramenta de produção de 99 Crimes.",
    footerRights: "Todos os direitos reservados.",
  },
  en: {
    navPipeline: "Pipeline",
    navWhy: "Why",
    navStack: "Tech",
    navGame: "The game",

    heroBadge: "Production tool · 99 Crimes",
    heroTitle: "Photo Generator",
    heroTagline: "99 faces. None real. All local.",
    heroSub:
      "A pipeline that creates the 99 profile photos for the game 99 Crimes with FLUX.1-schnell running on your own machine — no cloud cost, no real faces, and a license cleared for commercial use.",
    heroCtaPrimary: "See the pipeline",
    heroCtaSecondary: "Discover the game",

    pipelineTitle: "From sheet to photo",
    pipelineLead:
      "Four steps, from each contact's character sheet to a UI-ready image.",
    steps: [
      {
        n: "01",
        title: "Per-character prompt",
        desc: "Reads each of the 99 contact sheets, extracts the appearance, and builds an English prompt in the style FLUX understands best.",
      },
      {
        n: "02",
        title: "Generation in ComfyUI",
        desc: "Builds the FLUX.1-schnell GGUF workflow and calls the local ComfyUI API. Variations per character, saved to disk.",
      },
      {
        n: "03",
        title: "Curation",
        desc: "You pick the best variation of each contact. Per-character seeds let you reproduce and tweak a face later.",
      },
      {
        n: "04",
        title: "Indexing",
        desc: "Links the chosen photo to the sheet and writes the index (id → sheet → photo) in the format the game consumes.",
      },
    ],

    whyTitle: "Why FLUX.1-schnell GGUF",
    whyLead:
      "The right pick for realistic faces, running on little VRAM, with a license that allows a commercial game.",
    features: [
      {
        icon: "🪪",
        title: "Believable faces",
        desc: "Skin, pores and the natural light of a phone snapshot — not a magazine cover. Each contact looks like an ordinary, unique person.",
      },
      {
        icon: "⚡",
        title: "Only 4 steps",
        desc: "schnell generates in 4 steps, far faster than FLUX.dev's 20–30 — essential on 4GB of VRAM.",
      },
      {
        icon: "💾",
        title: "Quantized GGUF",
        desc: "Runs with offload to RAM, fitting a modest GPU. 100% local generation, nothing sent to the cloud.",
      },
      {
        icon: "⚖️",
        title: "Apache 2.0 license",
        desc: "The images can ship in a commercial game. (FLUX.dev is non-commercial; hence schnell.)",
      },
    ],

    stackTitle: "Tech",
    stackLead: "Lean pure-Python scripts orchestrating local models.",
    stackItems: [
      "Python 3 (pure stdlib, no exotic deps)",
      "FLUX.1-schnell quantized as GGUF",
      "ComfyUI + ComfyUI-GGUF node (local API on :8188)",
      "Per-character seeds for reproducibility",
    ],
    qualityTitle: "Quality checklist",
    qualityItems: [
      "99 photos, IDs matching the sheets",
      "Real diversity of age, ethnicity and gender",
      "One consistent visual signature across all",
      "None looks like a real person",
    ],

    ctaTitle: "Part of the 99 Crimes universe",
    ctaLead:
      "One detective, one phone, 99 contacts and 98 crimes. Your only weapon is conversation — and every conversation has a face.",
    ctaButton: "See 99 Crimes on GitHub",

    footerNote: "Photo Generator — a production tool for 99 Crimes.",
    footerRights: "All rights reserved.",
  },
};

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: Dict };
const LangContext = createContext<Ctx | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("pt");

  useEffect(() => {
    const stored = (typeof window !== "undefined" &&
      window.localStorage.getItem("lang")) as Lang | null;
    if (stored === "pt" || stored === "en") setLangState(stored);
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") window.localStorage.setItem("lang", l);
  };

  return (
    <LangContext.Provider value={{ lang, setLang, t: STR[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang(): Ctx {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within a LangProvider");
  return ctx;
}

export function LangToggle() {
  const { lang, setLang } = useLang();
  return (
    <div className="inline-flex items-center rounded-full border border-crime/50 bg-black/40 p-1 backdrop-blur">
      <button
        type="button"
        onClick={() => setLang("pt")}
        aria-pressed={lang === "pt"}
        className={`rounded-full px-3 py-1 text-sm font-semibold transition ${
          lang === "pt" ? "bg-crime text-white" : "text-paper/70 hover:text-white"
        }`}
      >
        🇧🇷 PT
      </button>
      <button
        type="button"
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        className={`rounded-full px-3 py-1 text-sm font-semibold transition ${
          lang === "en" ? "bg-crime text-white" : "text-paper/70 hover:text-white"
        }`}
      >
        🇺🇸 EN
      </button>
    </div>
  );
}
