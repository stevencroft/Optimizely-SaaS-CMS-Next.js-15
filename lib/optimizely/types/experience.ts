import type { SeoExperience } from '@/lib/optimizely/types/generated'

export interface Grid {
  key: string
  rows?: Row[]
}

export interface Row {
  key: string
  columns?: Column[]
}

export interface Column {
  key: string
  elements?: ExperienceElement[]
}

export interface ExperienceElement {
  key: string
  displaySettings?: {
    value: string
    key: string
  }[]
  component?: any
}

export type SafeVisualBuilderExperience = {
  composition?: {
    grids?: Grid[]
  }
} & SeoExperience
