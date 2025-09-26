# 🔍 CaseFlow (English)

Visual criminal investigation workflow tool that allows detectives to create and manipulate investigation flows in a visual analysis board. Built with modern React stack featuring drag-and-drop evidence management, multimedia clue support, and interactive case mapping.

## 🎯 Description

CaseFlow is an internal tool for criminal investigation departments where investigators organize investigation categories and clues within a visual workflow, simulating the reasoning line of an investigation.

**Key Concepts:**

- **Groups (Categories)**: Investigation groupings (e.g., Physical Evidence, Testimonies, Suspects)
- **Clues**: Items within each Group (e.g., Fingerprint found at crime scene, Witness saw red car, Suspect John)
- **Connections**: Visual flow between Groups indicating investigation reasoning

## 🚀 Installation

```bash
$ pnpm install
```

## 🏃 Running the app

```bash
# development
$ pnpm run dev

# alternative start command
$ pnpm run start

# build for production
$ pnpm run build

# preview production build
$ pnpm run serve
```

## 🧪 Testing

```bash
# run tests
$ pnpm run test
```

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript 5.7
- **Routing**: TanStack Router 1.132
- **Styling**: Tailwind CSS 4.0, Radix UI, shadcn/ui
- **Canvas**: ReactFlow 12.8 (infinite canvas with pan/zoom)
- **Drag & Drop**: React DND 16.0
- **Forms**: React Hook Form + Zod validation
- **State Management**: ReactFlow state + Custom hooks
- **Build Tool**: Vite 6.3
- **Package Manager**: pnpm 10.14
- **Linting**: Biome 2.2 + Ultracite
- **Git Hooks**: Lefthook

## ✨ Features

### Investigation Workflow

- [x] Create and manage investigation Groups (categories)
- [x] Infinite canvas with pan and zoom functionality
- [x] Drag and drop Groups freely on canvas
- [x] Connect Groups to show investigation flow
- [x] Visual connection lines between related categories

### Clue Management

- [x] Create clues with multiple media types (Text, Image, Video, Audio)
- [x] Drag and drop clues between Groups
- [x] Reorder clues within the same Group
- [x] Inline editing of clues without leaving the screen
- [x] Visual feedback during drag operations
- [x] Placeholder indicators for drop zones

### User Experience

- [x] Responsive design (tablet, notebook, desktop)
- [x] Intuitive modal-based clue editing
- [x] Visual drag feedback with custom drag layers
- [x] Accessibility support with ARIA labels
- [x] Toast notifications for user actions

### Advanced Features

- [x] **Undo/Redo system** with keyboard shortcuts (Ctrl+Z/Ctrl+Y)
- [x] **Export workflow** to JSON (Groups, Clues, and connections)
- [x] **Multimedia preview** inline for images, videos, and audio
- [x] **Optimistic updates** for immediate UI feedback
- [x] **Performance optimizations** with React.memo, React.useCallback and React.useMemo

### Performance & Optimization

- [x] Granular updates (changes in one clue don't re-render all Groups)
- [x] Component memoization for optimal rendering
- [x] Bundle optimization with manual chunks
- [x] Custom hooks for reusable logic
- [x] TypeScript strict mode for type safety

## 🏗️ Project Structure

The project follows a **MVVM (Model-View-ViewModel) pattern** with clear separation of concerns:

```
src/
├── core/                    # Global shared resources
│   ├── components/ui/       # shadcn/ui components
│   └── lib/                 # Utility functions
├── modules/
│   └── flow/                # Main investigation flow module
│       ├── components/      # Flow-specific components
│       ├── contexts/        # React contexts
│       ├── forms/           # Form components
│       ├── hooks/           # Custom hooks
│       ├── nodes/           # ReactFlow node components
│       ├── schemas/         # Zod validation schemas
│       ├── screens/         # Screen components
│       ├── types/           # TypeScript type definitions
│       └── utils/           # Module utilities
├── routes/                  # TanStack Router routes
└── test/                    # Test utilities and factories
```

## 🎨 Component Pattern

Each complex component follows the **MVVM (Model-View-ViewModel) pattern**:

```typescript
// Component entry point (ViewModel)
export function ClueItem(props) {
  return <ClueItemView {...useClueItemModel(props)} />;
}

// Business logic and state management (Model)
export function useClueItemModel(props) {
  // Custom hooks, state management, event handlers
  return { ... };
}

// Presentation layer (View)
export function ClueItemView(props) {
  // Pure UI rendering with props
  return <div>...</div>;
}
```

## 🔧 Development

The project uses modern development tools:

- **Hot Module Replacement** with Vite
- **TypeScript strict mode** for type safety
- **Biome** for super-fast linting and formatting
- **Lefthook** for automated git hooks
- **Auto-generated** TanStack Router routes

## 🎯 Key Highlights

- **Modern React 19** with latest features
- **Advanced TypeScript** usage with discriminated unions
- **Professional drag-and-drop** implementation
- **Custom undo/redo system** with keyboard shortcuts
- **Performance-optimized** rendering and state management
- **Accessibility-first** approach with ARIA support
- **Production-ready** code structure and optimization

---

# 🔍 CaseFlow (Português)

Ferramenta visual de fluxo de investigação criminal que permite aos detetives criar e manipular fluxos de investigação em um quadro de análise visual. Construído com stack React moderna, apresentando gerenciamento de evidências com drag-and-drop, suporte a pistas multimídia e mapeamento interativo de casos.

## 🎯 Descrição

CaseFlow é uma ferramenta interna para departamentos de investigação criminal onde investigadores organizam categorias de investigação e pistas dentro de um fluxo visual, simulando a linha de raciocínio de uma investigação.

**Conceitos Principais:**

- **Grupos (Categorias)**: Agrupamentos de investigação (ex.: Evidências Físicas, Depoimentos, Suspeitos)
- **Pistas**: Itens dentro de cada Grupo (ex.: Impressão digital encontrada na cena do crime, Testemunha viu carro vermelho, Suspeito João)
- **Conexões**: Fluxo visual entre Grupos indicando o raciocínio da investigação

## 🚀 Instalação

```bash
$ pnpm install
```

## 🏃 Executando a aplicação

```bash
# desenvolvimento
$ pnpm run dev

# comando alternativo de start
$ pnpm run start

# build para produção
$ pnpm run build

# preview do build de produção
$ pnpm run serve
```

## 🧪 Testes

```bash
# executar testes
$ pnpm run test
```

## 🛠️ Stack Tecnológica

- **Frontend**: React 19, TypeScript 5.7
- **Roteamento**: TanStack Router 1.132
- **Estilização**: Tailwind CSS 4.0, Radix UI, shadcn/ui
- **Canvas**: ReactFlow 12.8 (canvas infinito com pan/zoom)
- **Drag & Drop**: React DND 16.0
- **Formulários**: React Hook Form + validação Zod
- **Gerenciamento de Estado**: Estado do ReactFlow + Hooks customizados
- **Ferramenta de Build**: Vite 6.3
- **Gerenciador de Pacotes**: pnpm 10.14
- **Linting**: Biome 2.2 + Ultracite
- **Git Hooks**: Lefthook

## ✨ Funcionalidades

### Fluxo de Investigação

- [x] Criar e gerenciar Grupos de investigação (categorias)
- [x] Canvas infinito com funcionalidade de pan e zoom
- [x] Arrastar e soltar Grupos livremente no canvas
- [x] Conectar Grupos para mostrar fluxo de investigação
- [x] Linhas de conexão visual entre categorias relacionadas

### Gerenciamento de Pistas

- [x] Criar pistas com múltiplos tipos de mídia (Texto, Imagem, Vídeo, Áudio)
- [x] Arrastar e soltar pistas entre Grupos
- [x] Reordenar pistas dentro do mesmo Grupo
- [x] Edição inline de pistas sem sair da tela
- [x] Feedback visual durante operações de arrastar
- [x] Indicadores de placeholder para zonas de soltar

### Experiência do Usuário

- [x] Design responsivo (tablet, notebook, desktop)
- [x] Edição intuitiva de pistas baseada em modal
- [x] Feedback visual de arrastar com camadas de arrastar customizadas
- [x] Suporte à acessibilidade com labels ARIA
- [x] Notificações toast para ações do usuário

### Funcionalidades Avançadas

- [x] **Sistema Desfazer/Refazer** com atalhos de teclado (Ctrl+Z/Ctrl+Y)
- [x] **Exportar workflow** para JSON (Grupos, Pistas e conexões)
- [x] **Preview multimídia** inline para imagens, vídeos e áudio
- [x] **Atualizações otimistas** para feedback imediato da UI
- [x] **Otimizações de performance** com React.memo, React.useCallback e React.useMemo

### Performance & Otimização

- [x] Atualizações granulares (mudanças em uma pista não re-renderizam todos os Grupos)
- [x] Memoização de componentes para renderização otimizada
- [x] Otimização de bundle com chunks manuais
- [x] Hooks customizados para lógica reutilizável
- [x] Modo strict do TypeScript para segurança de tipos

## 🏗️ Estrutura do Projeto

O projeto segue o padrão **MVVM (Model-View-ViewModel)** com clara separação de responsabilidades:

```
src/
├── core/                    # Recursos globais compartilhados
│   ├── components/ui/       # Componentes shadcn/ui
│   └── lib/                 # Funções utilitárias
├── modules/
│   └── flow/                # Módulo principal do fluxo de investigação
│       ├── components/      # Componentes específicos do fluxo
│       ├── contexts/        # Contextos React
│       ├── forms/           # Componentes de formulário
│       ├── hooks/           # Hooks customizados
│       ├── nodes/           # Componentes de nó do ReactFlow
│       ├── schemas/         # Schemas de validação Zod
│       ├── screens/         # Componentes de tela
│       ├── types/           # Definições de tipos TypeScript
│       └── utils/           # Utilitários do módulo
├── routes/                  # Rotas do TanStack Router
└── test/                    # Utilitários de teste e factories
```

## 🎨 Padrão de Componentes

Cada componente complexo segue o padrão **MVVM (Model-View-ViewModel)**:

```typescript
// Ponto de entrada do componente (ViewModel)
export function ClueItem(props) {
  return <ClueItemView {...useClueItemModel(props)} />;
}

// Lógica de negócio e gerenciamento de estado (Model)
export function useClueItemModel(props) {
  // Hooks customizados, gerenciamento de estado, manipuladores de eventos
  return { ... };
}

// Camada de apresentação (View)
export function ClueItemView(props) {
  // Renderização pura da UI com props
  return <div>...</div>;
}
```

## 🔧 Desenvolvimento

O projeto usa ferramentas modernas de desenvolvimento:

- **Hot Module Replacement** com Vite
- **Modo strict do TypeScript** para segurança de tipos
- **Biome** para linting e formatação super rápidos
- **Lefthook** para git hooks automatizados
- **Rotas auto-geradas** do TanStack Router

## 🎯 Principais Destaques

- **React 19 moderno** com recursos mais recentes
- **Uso avançado do TypeScript** com discriminated unions
- **Implementação profissional de drag-and-drop**
- **Sistema customizado de desfazer/refazer** com atalhos de teclado
- **Renderização e gerenciamento de estado otimizados para performance**
- **Abordagem accessibility-first** com suporte ARIA
- **Estrutura de código e otimização prontas para produção**

## Video

https://github.com/user-attachments/assets/aa93f14e-a3d9-4d95-ba03-0629bfb6aff2
