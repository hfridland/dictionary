export interface Phonetic {
  text: string
  audio: string
  sourseUrl: string
}

export interface Definition {
  definition: string
}

export interface Meaning {
  partOfSpeech: string
  definitions: Definition[]
  antonyms: string[]
  synonyms: string[]
}

export interface ResData {
  word: string
  phonetic: string
  phonetics: Phonetic[]
  meanings: Meaning[]
}

export interface Result {
  data: ResData[]
}
