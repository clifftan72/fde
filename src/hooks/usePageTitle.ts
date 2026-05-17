import { useEffect } from 'react'

export function usePageTitle(title: string) {
  useEffect(() => {
    document.title = title
    return () => {
      document.title = 'FDE Singapore — Forward Deployed Engineering for the AI Era'
    }
  }, [title])
}
