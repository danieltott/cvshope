import '@styles/base.css'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as gtag from '../util/gtag'

function Application({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <div id="top">
      <Component {...pageProps} />
    </div>
  )
}

export default Application
