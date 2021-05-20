import { useContext } from "react"
import { CountDownContext } from "../contexts/CountdownContext"

export function useCountdown() {
  const context = useContext(CountDownContext)

  return context
}