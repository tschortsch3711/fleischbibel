import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Die Fleischbibel',
  description: 'Die zentrale Dokumentation der Fleischgemeinschaft',
  lang: 'de-DE',
  base: '/',
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    logo: { light: '/logo.svg', dark: '/logo.svg' },
    logoLink: '/',
    nav: [
      { text: 'Start', link: '/' },
      { text: '2-Minuten-Guide', link: '/schnellstart' },
      { text: 'Fleischgemeinschaft', link: '/gemeinschaft/' },
      { text: 'Regeln', link: '/regeln/' },
      { text: 'Fleischmeldeamt', link: '/fleischmeldeamt/' },
      { text: 'Organisation', link: '/organisation/' },
      { text: 'Kultur', link: '/kultur/' },
      { text: 'Links', link: '/links' }
    ],
    sidebar: [
      { text: 'Schnellstart', items: [{ text: '2-Minuten-Guide', link: '/schnellstart' }] },
      { text: 'Die Fleischgemeinschaft', items: [{ text: 'Überblick', link: '/gemeinschaft/' }, { text: 'Selbstverständnis', link: '/gemeinschaft/selbstverstaendnis' }, { text: 'Aufnahmebedingungen', link: '/gemeinschaft/aufnahmebedingungen' }] },
      { text: 'Regeln', items: [{ text: 'Überblick', link: '/regeln/' }, { text: 'Grundregeln', link: '/regeln/grundregeln' }, { text: 'WhatsApp', link: '/regeln/whatsapp' }, { text: 'Zusammenkünfte', link: '/regeln/zusammenkuenfte' }] },
      { text: 'Fleischmeldeamt', items: [{ text: 'Überblick', link: '/fleischmeldeamt/' }, { text: 'Monatliche Abfrage', link: '/fleischmeldeamt/monatliche-abfrage' }, { text: 'Fleischversammlungen', link: '/fleischmeldeamt/fleischversammlungen' }, { text: 'Hauptfleischversammlung', link: '/fleischmeldeamt/hauptfleischversammlung' }, { text: 'Fragab', link: '/fleischmeldeamt/fragab' }] },
      { text: 'Organisation', items: [{ text: 'Überblick', link: '/organisation/' }, { text: 'Kein Oberhaupt', link: '/organisation/kein-oberhaupt' }, { text: 'Freiwillige Beiträge', link: '/organisation/rollen' }, { text: 'Entscheidungen', link: '/organisation/entscheidungen' }] },
      { text: 'Rituale & Kultur', items: [{ text: 'Überblick', link: '/kultur/' }, { text: 'Fleischhymne', link: '/kultur/fleischhymne' }, { text: 'Begriffe', link: '/kultur/begriffe' }, { text: 'Chronik', link: '/kultur/chronik' }] },
      { text: 'Verwaltung', items: [{ text: 'Links', link: '/links' }, { text: 'Hinweise', link: '/hinweise' }, { text: 'Rechtliches', items: [{ text: 'Impressum', link: '/impressum' }, { text: 'Datenschutz', link: '/datenschutz' }] }] }
    ],
    search: { provider: 'local' },
    socialLinks: [{ icon: 'github', link: 'https://github.com/tschortsch3711/fleischbibel' }],
    footer: {
      message: 'Amtlich anmutend, gemeinschaftlich gepflegt.',
      copyright: '<a href="/impressum">Impressum</a> | <a href="/datenschutz">Datenschutz</a><br>Fleischbibel der privaten Fleischgemeinschaft'
    },
    lastUpdatedText: 'Zuletzt aktualisiert',
    outline: { label: 'Auf dieser Seite' },
    docFooter: { prev: 'Vorherige Seite', next: 'Nächste Seite' }
  }
})