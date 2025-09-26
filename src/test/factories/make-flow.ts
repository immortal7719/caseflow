import type { Edge, Node } from "@xyflow/react";
import type { GroupNodeData } from "@/modules/flow/nodes/group-node/types";
import type { Clue } from "@/modules/flow/types/clue";

export type FlowData = {
  nodes: Node[];
  edges: Edge[];
};

const IMAGE_URL =
  "https://images.unsplash.com/photo-1619367300942-634bf2339af6?q=80&w=1827&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const VIDEO_URL =
  "https://pub-e9468ecf9d6b4235b644aaf5c96fd467.r2.dev/V%C3%ADdeo%20sem%20t%C3%ADtulo.mp4";
const AUDIO_URL =
  "https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3";

const ID_BASE = 36;
const ID_LENGTH = 9;

export function makeFlow(): FlowData {
  const createId = () =>
    Math.random().toString(ID_BASE).substring(2, ID_LENGTH);

  const physicalEvidence: Clue[] = [
    {
      id: createId(),
      title: "Colher ensanguentada",
      description: "Arma do crime encontrada na cena",
      type: "image",
      url: IMAGE_URL,
      alt: "Colher de metal com manchas de sangue",
      fileName: "colher_crime.jpg",

      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: createId(),
      title: "Impressões digitais na colher",
      description: "Análise das impressões digitais encontradas na arma",
      type: "text",
      content:
        "Impressões digitais parciais identificadas no cabo da colher. Padrões únicos sugerem mão direita dominante. Comparação com banco de dados em andamento. Qualidade das impressões: 85% - suficiente para identificação positiva.",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: createId(),
      title: "Gravação da perícia",
      description: "Áudio da análise técnica da cena do crime",
      type: "audio",
      url: AUDIO_URL,
      fileName: "pericia_audio.mp3",
      duration: 180,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  const witnesses: Clue[] = [
    {
      id: createId(),
      title: "Depoimento da vizinha",
      description: "Sra. Helena relata atividade suspeita",
      type: "text",
      content:
        "A vizinha relatou ter ouvido gritos por volta das 22h15. Viu um homem alto, cerca de 1,80m, saindo apressadamente do local. Usava casaco escuro e carregava algo brilhante nas mãos. Comportamento muito nervoso e olhava constantemente para trás.",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: createId(),
      title: "Vídeo da câmera de segurança",
      description: "Footage do suspeito fugindo da cena",
      type: "video",
      url: VIDEO_URL,
      fileName: "camera_seguranca.mp4",
      duration: 45,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: createId(),
      title: "Foto do suspeito",
      description: "Imagem capturada pela câmera de trânsito",
      type: "image",
      url: IMAGE_URL,
      alt: "Homem de casaco escuro caminhando rapidamente",
      fileName: "suspeito_transito.jpg",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  const criminalProfile: Clue[] = [
    {
      id: createId(),
      title: "Análise comportamental",
      description: "Perfil psicológico do 'Assassino da Colher'",
      type: "text",
      content:
        "Criminoso apresenta padrão obsessivo-compulsivo. Escolha da arma (colher) sugere simbolismo pessoal ou trauma. Modus operandi indica planejamento prévio e conhecimento das vítimas. Possível histórico de abuso doméstico ou negligência na infância.",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: createId(),
      title: "Gravação do interrogatório",
      description: "Áudio do interrogatório de suspeito anterior",
      type: "audio",
      url: AUDIO_URL,
      fileName: "interrogatorio_suspeito.mp3",
      duration: 320,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: createId(),
      title: "Padrão de ataques",
      description: "Mapa visual dos locais dos crimes",
      type: "image",
      url: IMAGE_URL,
      alt: "Mapa com marcações dos locais dos ataques",
      fileName: "mapa_crimes.jpg",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  const currentInvestigation: Clue[] = [
    {
      id: createId(),
      title: "Relatório policial",
      description: "Documento oficial da investigação em curso",
      type: "text",
      content:
        "Investigação aponta para série de ataques com mesmo modus operandi. Cinco vítimas confirmadas, todas atacadas com utensílios de cozinha, principalmente colheres. Suspeito demonstra escalada de violência. Recomenda-se patrulhamento intensivo em áreas residenciais.",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: createId(),
      title: "Entrevista com detetive",
      description: "Vídeo da coletiva de imprensa sobre o caso",
      type: "video",
      url: VIDEO_URL,
      fileName: "coletiva_detetive.mp4",
      duration: 280,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: createId(),
      title: "Linha do tempo",
      description: "Cronologia detalhada dos eventos",
      type: "image",
      url: IMAGE_URL,
      alt: "Timeline visual dos crimes cometidos",
      fileName: "timeline_crimes.jpg",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: createId(),
      title: "Comunicação da central",
      description: "Áudio das comunicações policiais durante as buscas",
      type: "audio",
      url: AUDIO_URL,
      fileName: "radio_policial.mp3",
      duration: 195,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  const suspects: Clue[] = [
    {
      id: createId(),
      title: "Joaquim Silva - Principal suspeito",
      description: "Ex-cozinheiro com histórico de violência",
      type: "text",
      content:
        "Joaquim Silva, 42 anos, ex-funcionário de restaurante. Demitido há 3 meses por comportamento agressivo. Histórico de agressão doméstica. Vizinhos relatam comportamento errático. Endereço atual desconhecido. Procurado para interrogatório.",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: createId(),
      title: "Foto de identificação",
      description: "Retrato falado baseado nos depoimentos",
      type: "image",
      url: IMAGE_URL,
      alt: "Retrato falado do principal suspeito",
      fileName: "retrato_falado.jpg",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: createId(),
      title: "Gravação telefônica",
      description: "Ligação anônima com informações sobre o suspeito",
      type: "audio",
      url: AUDIO_URL,
      fileName: "denuncia_anonima.mp3",
      duration: 87,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: createId(),
      title: "Vídeo de segurança do trabalho",
      description: "Footage do suspeito em seu antigo emprego",
      type: "video",
      url: VIDEO_URL,
      fileName: "joaquim_restaurante.mp4",
      duration: 156,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  const nodes: Node[] = [
    {
      id: "physical-evidence",
      type: "evidence",
      position: { x: 100, y: 100 },
      data: {
        title: "Evidências Físicas",
        clues: physicalEvidence,
      } as GroupNodeData,
    },
    {
      id: "witnesses",
      type: "evidence",
      position: { x: 800, y: 100 },
      data: {
        title: "Testemunhas",
        clues: witnesses,
      } as GroupNodeData,
    },
    {
      id: "criminal-profile",
      type: "evidence",
      position: { x: 1500, y: 100 },
      data: {
        title: "Perfil Criminoso",
        clues: criminalProfile,
      } as GroupNodeData,
    },
    {
      id: "current-investigation",
      type: "evidence",
      position: { x: 350, y: 800 },
      data: {
        title: "Investigação Atual",
        clues: currentInvestigation,
      } as GroupNodeData,
    },
    {
      id: "suspects",
      type: "evidence",
      position: { x: 1050, y: 800 },
      data: {
        title: "Suspeitos",
        clues: suspects,
      } as GroupNodeData,
    },
  ];

  const edges: Edge[] = [
    {
      id: "physical-evidence-witnesses",
      source: "physical-evidence",
      target: "witnesses",
      sourceHandle: "evidence-physical-evidence-source-right",
      targetHandle: "evidence-witnesses-target-left",
    },
    {
      id: "witnesses-criminal-profile",
      source: "witnesses",
      target: "criminal-profile",
      sourceHandle: "evidence-witnesses-source-right",
      targetHandle: "evidence-criminal-profile-target-left",
    },
    {
      id: "physical-evidence-current-investigation",
      source: "physical-evidence",
      target: "current-investigation",
      sourceHandle: "evidence-physical-evidence-source-bottom",
      targetHandle: "evidence-current-investigation-target-top",
    },
    {
      id: "witnesses-current-investigation",
      source: "witnesses",
      target: "current-investigation",
      sourceHandle: "evidence-witnesses-source-bottom",
      targetHandle: "evidence-current-investigation-target-top",
    },
    {
      id: "criminal-profile-suspects",
      source: "criminal-profile",
      target: "suspects",
      sourceHandle: "evidence-criminal-profile-source-bottom",
      targetHandle: "evidence-suspects-target-top",
    },
    {
      id: "current-investigation-suspects",
      source: "current-investigation",
      target: "suspects",
      sourceHandle: "evidence-current-investigation-source-right",
      targetHandle: "evidence-suspects-target-left",
    },
  ];

  return {
    nodes,
    edges,
  };
}
