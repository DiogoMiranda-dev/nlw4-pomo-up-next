import { useContext } from "react"
import { CountDownContext } from "../contexts/CountDownContext"

export function useCountdown() {
  const context = useContext(CountDownContext)

  return context
}