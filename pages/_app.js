import '@styles/base.css'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as gtag from '../util/gtag'
import { DefaultSeo } from 'next-seo'

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
    <>
      <DefaultSeo
        openGraph={{
          images: [
            {
              url: 'https://www.example.ie/og-image-01.jpg',
              width: 800,
              height: 600,
              alt: 'Og Image Alt',
            },
          ],
          site_name: 'CVS Hope',
        }}
      />
      <div id="top">
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default Application
