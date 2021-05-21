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
        title="CVS Hope Clinical Trial"
        description="The CVS Hope trial is the first of its kind to evaluate an investigational medication designed specifically to treat Cyclic Vomiting Syndrome"
        canonical={process.env.NEXT_PUBLIC_IMG_URL}
        openGraph={{
          url: process.env.NEXT_PUBLIC_IMG_URL,
          title: 'CVS Hope Clinical Trial',
          description:
            'The CVS Hope trial is the first of its kind to evaluate an investigational medication designed specifically to treat Cyclic Vomiting Syndrome',
          images: [
            {
              url: `${process.env.NEXT_PUBLIC_IMG_URL}/img/hero-card.jpg`,
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
