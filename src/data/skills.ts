import type { IconType } from 'react-icons'
import {
  SiAndroid,
  SiAnthropic,
  SiDocker,
  SiGit,
  SiIntellijidea,
  SiJavascript,
  SiJetpackcompose,
  SiKotlin,
  SiKubernetes,
  SiMongodb,
  SiMui,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenai,
  SiPostgresql,
  SiReact,
  SiRedux,
  SiSpringboot,
  SiTypescript,
  SiVite,
} from 'react-icons/si'
import { TbApi, TbDatabaseSearch, TbRobot, TbVectorTriangle } from 'react-icons/tb'

export type SkillLevel = 'daily' | 'strong' | 'working' | 'learning'

export type Skill = {
  id: string
  name: string
  level: SkillLevel
  icon?: IconType
}

export type SkillCategory = {
  id: 'frontend' | 'backend' | 'mobile' | 'ai' | 'tools'
  i18nKey: string
  skills: Skill[]
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'frontend',
    i18nKey: 'skills.categories.frontend',
    skills: [
      { id: 'typescript', name: 'TypeScript', level: 'daily', icon: SiTypescript },
      { id: 'javascript', name: 'JavaScript', level: 'daily', icon: SiJavascript },
      { id: 'react', name: 'React', level: 'daily', icon: SiReact },
      { id: 'nextjs', name: 'Next.js', level: 'strong', icon: SiNextdotjs },
      { id: 'mui', name: 'MUI', level: 'strong', icon: SiMui },
      { id: 'redux', name: 'Redux', level: 'working', icon: SiRedux },
      { id: 'vite', name: 'Vite', level: 'strong', icon: SiVite },
    ],
  },
  {
    id: 'backend',
    i18nKey: 'skills.categories.backend',
    skills: [
      { id: 'kotlin', name: 'Kotlin', level: 'daily', icon: SiKotlin },
      { id: 'spring-boot', name: 'Spring Boot', level: 'daily', icon: SiSpringboot },
      { id: 'hono', name: 'Hono', level: 'strong' },
      { id: 'node', name: 'Node.js', level: 'strong', icon: SiNodedotjs },
      { id: 'rest-api', name: 'REST APIs', level: 'daily', icon: TbApi },
      { id: 'api-architecture', name: 'API Architecture', level: 'strong', icon: TbApi },
      { id: 'postgresql', name: 'PostgreSQL', level: 'strong', icon: SiPostgresql },
      { id: 'mongodb', name: 'MongoDB', level: 'working', icon: SiMongodb },
    ],
  },
  {
    id: 'mobile',
    i18nKey: 'skills.categories.mobile',
    skills: [
      { id: 'android', name: 'Android', level: 'strong', icon: SiAndroid },
      { id: 'jetpack-compose', name: 'Jetpack Compose', level: 'working', icon: SiJetpackcompose },
      { id: 'kotlin-mobile', name: 'Kotlin', level: 'strong', icon: SiKotlin },
    ],
  },
  {
    id: 'ai',
    i18nKey: 'skills.categories.ai',
    skills: [
      { id: 'claude-api', name: 'Claude API', level: 'strong', icon: SiAnthropic },
      { id: 'openai-api', name: 'OpenAI API', level: 'working', icon: SiOpenai },
      { id: 'mcp', name: 'MCP Servers', level: 'working', icon: TbRobot },
      { id: 'rag', name: 'RAG Pipelines', level: 'working', icon: TbDatabaseSearch },
      {
        id: 'embeddings',
        name: 'Embeddings & Vector Search',
        level: 'working',
        icon: TbVectorTriangle,
      },
      { id: 'prompt-eng', name: 'Prompt Engineering', level: 'strong', icon: TbRobot },
    ],
  },
  {
    id: 'tools',
    i18nKey: 'skills.categories.tools',
    skills: [
      { id: 'git', name: 'Git', level: 'daily', icon: SiGit },
      { id: 'docker', name: 'Docker', level: 'strong', icon: SiDocker },
      { id: 'kubernetes', name: 'Kubernetes', level: 'working', icon: SiKubernetes },
      { id: 'intellij', name: 'IntelliJ IDEA', level: 'daily', icon: SiIntellijidea },
      { id: 'android-studio', name: 'Android Studio', level: 'strong', icon: SiAndroid },
    ],
  },
]
