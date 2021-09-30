import Document, { Html, Head, Main, NextScript } from 'next/document'

import { GA_TRACKING_ID } from '../util/gtag'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* <!-- Facebook Pixel Code --> */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window,document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1062677141208647');
fbq('track', 'PageView');
`,
            }}
          />

          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
          <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        </Head>
        <body>
          <noscript>
            <img
              height="1"
              width="1"
              src="https://www.facebook.com/tr?id=1062677141208647&ev=PageView&noscript=1"
            />
          </noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
