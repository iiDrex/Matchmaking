//no hace nd, dsp conectarlo a la db :)
export class NavigationController {
  static isAuthenticated(): boolean {
    if (typeof window !== "undefined") {
      return localStorage.getItem("user") !== null
    }
    return false
  }

  static handleEnterClick(): string {
    return this.isAuthenticated() ? "/partidos" : "/login"
  }

  static logout(): void {
    if (typeof window !== "undefined") {
      localStorage.removeItem("user")
    }
  }
}
