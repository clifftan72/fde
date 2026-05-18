import { useEffect } from 'react'

export function usePageTitle(title: string) {
  useEffect(() => {
    document.title = title
    return () => {
      document.title = 'FDE Singapore — The Forward Deployed Engineer for the AI Era'
    }
  }, [title])
}
