import '@styles/base.css'

function Application({ Component, pageProps }) {
  return (
    <div id="top">
      <Component {...pageProps} />
    </div>
  )
}

export default Application
