import {
  EcommerceIQ,
  GuestGazer,
  MediVoxAI,
  NvidiaNIM
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "tech",
    title: "Skills",
  },
  {
    id: "works",
    title: "Projects",
  },
  {
    id: "certifications",
    title: "Certifications",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const projects = [
  {
    name: "GuestGazer",
    description:
      "A cloud-native MLOps pipeline for hotel reservation insights using Jenkins, Docker, and GCP. Implements machine learning models to predict booking patterns and optimize hotel operations with real-time analytics.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "machine-learning",
        color: "blue-text-gradient",
      },
      {
        name: "mlflow",
        color: "blue-text-gradient",
      },
      {
        name: "flask",
        color: "blue-text-gradient",
      },
      {
        name: "gcp",
        color: "pink-text-gradient",
      },
      {
        name: "jenkins",
        color: "blue-text-gradient",
      },
      {
        name: "docker",
        color: "orange-text-gradient",
      },
    ],
    image: GuestGazer,
    source_code_link: "https://github.com/JV456/GuestGazer",
  },
  {
    name: "MediVoxAI",
    description:
      "A multimodal medical chatbot leveraging Llama 3 Vision and OpenAI Whisper for comprehensive healthcare assistance. Combines visual analysis, voice recognition, and natural language processing for intelligent medical consultations.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "llama3",
        color: "blue-text-gradient",
      },
      {
        name: "groq",
        color: "green-text-gradient",
      },
      {
        name: "gradio",
        color: "pink-text-gradient",
      },
      {
        name: "healthcare-chatbot",
        color: "blue-text-gradient",
      },
    ],
    image: MediVoxAI,
    source_code_link: "https://github.com/JV456/MediVoxAI",
  },
  {
    name: "EcommerceIQ",
    description:
      "An intelligent LLM-based chatbot for e-commerce analytics, providing real-time insights into customer behavior, sales trends, and inventory management. Features advanced natural language querying capabilities.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "sqlite",
        color: "pink-text-gradient",
      },
      {
        name: "streamlit",
        color: "orange-text-gradient",
      },
      {
        name: "langchain",
        color: "orange-text-gradient",
      },
      {
        name: "ecommerce",
        color: "orange-text-gradient",
      },
    ],
    image: EcommerceIQ,
    source_code_link: "https://github.com/JV456/EcommerceIQ",
  },
  {
    name: "NvidiaNIM-RAG",
    description:
      "An advanced Retrieval Augmented Generation (RAG) application showcasing Nvidia NIM inference microservices for GenAI applications. Features seamless document ingestion, semantic search, and interactive Q&A using state-of-the-art Nvidia foundation models with an intuitive Streamlit interface.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "nvidia-nim",
        color: "green-text-gradient",
      },
      {
        name: "rag",
        color: "blue-text-gradient",
      },
      {
        name: "langchain",
        color: "orange-text-gradient",
      },
      {
        name: "streamlit",
        color: "pink-text-gradient",
      },
    ],
    image: NvidiaNIM,
    source_code_link: "https://github.com/JV456/RagWithNvidiaNIM",
  },
];

export { projects };

