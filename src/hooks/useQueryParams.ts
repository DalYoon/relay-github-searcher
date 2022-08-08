import { useLocation } from "react-router-dom"

const useQueryParams = (key: string) => {
  const { search } = useLocation()
  return new URLSearchParams(search).get(key)
}

export default useQueryParams