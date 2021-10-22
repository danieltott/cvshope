import { useEffect } from 'react'

export default function useRedditAd() {
  useEffect(() => {
    window.rdt('track', 'PageVisit')
  }, [])
}
