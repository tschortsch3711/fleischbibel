import DefaultTheme from 'vitepress/theme'
import { inBrowser } from 'vitepress'
import './custom.css'

function fixHomeLink() {
  const homePath = '/'
  const titleLinks = document.querySelectorAll<HTMLAnchorElement>('.VPNavBarTitle a, a.VPNavBarTitle')

  titleLinks.forEach((link) => {
    link.setAttribute('href', homePath)
    link.onclick = (event) => {
      event.preventDefault()
      window.location.href = homePath
    }
  })
}

export default {
  extends: DefaultTheme,
  enhanceApp() {
    if (!inBrowser) return

    window.addEventListener('DOMContentLoaded', fixHomeLink)
    window.addEventListener('load', fixHomeLink)

    const observer = new MutationObserver(fixHomeLink)
    observer.observe(document.documentElement, { childList: true, subtree: true })
  }
}
