import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./assets/styles/index.css"

async function prepare() {
  if (process.env.NODE_ENV === 'development') {
    try {
      const { worker } = await import('./mocks/browser')
      await worker.start({
        onUnhandledRequest: 'bypass',
        serviceWorker: {
          url: '/mockServiceWorker.js'
        }
      })
    } catch (error) {
      console.error('Service Worker registration failed:', error)
    }
  }
}

prepare().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
})