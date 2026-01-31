export type TagType = {
  id: number
  name: string
  name_en: string
}

export type WorkType = {
  id: number
  name: string
  desc: string
  future_desc: string
  important_desc: string
  terms_desc: string
  tagId: number
  required: string
  name_en: string
  desc_en: string
  future_desc_en: string
  important_desc_en: string
  terms_desc_en: string
  required_en: string
  tag: TagType
}
