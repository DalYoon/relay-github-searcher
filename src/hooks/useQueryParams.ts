import { useLocation } from "react-router-dom"

export default function useQueryParams(key: string) {
  const { search } = useLocation()
  return new URLSearchParams(search).get(key)
}