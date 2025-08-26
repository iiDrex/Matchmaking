export interface User {
  id: string
  name: string
  email: string
  phone?: string
  location?: string
  level?: "casual" | "intermedio" | "competitivo"
  avatar?: string
}

export interface Match {
  id: string
  title: string
  type: "futbol5" | "futbol8" | "futbol11"
  date: string
  time: string
  location: string
  currentPlayers: number
  maxPlayers: number
  organizer: User
  level: "casual" | "intermedio" | "competitivo"
  price?: number
}

export interface Tournament {
  id: string
  name: string
  location: string
  date: string
  type: "futbol5" | "futbol8" | "futbol11"
  spots: number
  rules: string
  price?: number
}
