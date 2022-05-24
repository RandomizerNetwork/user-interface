import NextDocument, { Html, Head, Main, NextScript } from "next/document";

let referrer = "strict-origin";

export default class Document extends NextDocument {
  render() {
    // Regenerated every render:
    return (
      <Html prefix="og: http://ogp.me/ns#" lang="en">
        <Head>
          <meta name="referrer" content={referrer} />
          <meta name="theme-color" content="#830be4" />
          {/* <meta name="fortmatic-site-verification" content="O24M5eQGcCrroriY" /> */}
          <link rel="manifest" href="/manifest.json" />
          <style>{`body { background-color: #1d0733; position: relative !important; }`}</style>
          <style>{`aside.bn-onboard-custom.bn-onboard-modal { z-index: 999999 }`}</style>
          <style>{`div.svelte-rntogh:hover { background: transparent !important }`}</style>
          {/* <script src="assets/js/vendor/jquery-3.6.0.min.js"></script>
          <script src="assets/js/isotope.pkgd.min.js"></script>
          <script src="assets/js/main.js"></script> */}
          <style>{`@media (max-width: 634px) {section.bn-onboard-custom.bn-onboard-modal-content.svelte-rntogh {overflow: auto; position: fixed; top:0} }`}</style>
          {/* 
          <style>{`section.bn-onboard-custom.bn-onboard-modal-content { background: #250a40}`}</style>
          <style>{`section.bn-onboard-custom.bn-onboard-modal-content.bn-onboard-dark-mode { max-width: 40em }`}</style>
          <style>{`h3.bn-onboard-custom.bn-onboard-modal-content-header-heading { color: #FFF }`}</style>
          <style>{`p.bn-onboard-custom.bn-onboard-select-description { color: #FFF }`}</style>
          <style>{`p.bn-onboard-custom.bn-onboard-select-wallet-definition { color: #FFF }`}</style>
          <style>{`.bn-onboard-custom.bn-onboard-modal-content-header-icon.bn-onboard-dark-mode-background { background: #48147b }`}</style>
          <style>{`button.bn-onboard-custom.bn-onboard-icon-button.bn-onboard-dark-mode-background-hover:hover { background: #48147b }`}</style>
          <style>{`button.bn-onboard-custom.bn-onboard-icon-button.bn-onboard-dark-mode-background-hover.bn-onboard-selected-wallet { background: #48147b }`}</style>
          <style>{`button.bn-onboard-custom.bn-onboard-prepare-button.cta.bn-onboard-prepare-button-center.bn-onboard-dark-mode-link.bn-onboard-dark-mode-background-hover:hover { background: #48147b; color: #FFF }`}</style>
          <style>{`.bn-onboard-custom.bn-onboard-dark-mode-background-hover:hover, .bn-onboard-custom.bn-onboard-dark-mode-background { background: #FFF }`}</style>
          <style>{`.bn-onboard-dark-mode-background-hover { background: #48147b }`}</style>
          <style>{`span.bn-onboard-custom.bn-onboard-prepare-error.svelte-zrvscw.bn-onboard-dark-mode-background { background: #FFF }`}</style>
          <style>{`button.bn-onboard-custom.bn-onboard-prepare-button.svelte-fnc3e1.bn-onboard-prepare-button-left.bn-onboard-dark-mode-link.bn-onboard-dark-mode-background-hover { border-radius: 5px; color: #48147b; background: #FFF }`}</style>
          <style>{`button.bn-onboard-custom.bn-onboard-prepare-button.bn-onboard-prepare-button-center.bn-onboard-dark-mode-link.bn-onboard-dark-mode-background-hover { border-radius: 5px; border-color:1px solid #4a90e2; color: #FFF; background: #48147b }`}</style>
          <style>{`.ReactModal__Content.ReactModal__Content--after-open { background: #FFF !important}`}</style>
          <style>{`.ReactModal__Content.ReactModal__Content--after-open button { color: #FFF !important}`}</style>
          <style>{`section.bn-onboard-custom.bn-onboard-modal-content.svelte-rntogh.bn-onboard-dark-mode {border: 2px solid #263C91}`}</style>
          <style>{`aside.bn-onboard-custom.bn-onboard-modal.svelte-rntogh {overflow: scroll; }`}</style>
          <style>{`li.bn-notify-custom.bn-notify-notification.bn-notify-notification-pending.bn-notify-dark-mode { background-color: #263C91 }`}</style>
          <style>{`li.bn-notify-custom.bn-notify-notification.bn-notify-notification-hint.bn-notify-dark-mode { background-color: #263C91 }`}</style>
          <style>{`li.bn-notify-custom.bn-notify-notification.bn-notify-notification-success.bn-notify-dark-mode { background-color: #263C91 }`}</style>
          <style>{`span.bn-onboard-clickable { color: #FF9900 !important; }`}</style> */}
          <style>{`
            .bn-notify-notifications { color: #FFF !important; }
            .bn-notify.notification { color: #FFF !important; }
            .bn-notify-notification-info { color: #FFF !important; }
            .bn-notify-notification-info-message { color: #FFF !important; }
            .bn-notify-notification-close { color: #FFF !important; }
          `}</style>
          <style>{`
            :root {
              --onboard-modal-z-index{
                z-index: 9999;
              }
            }
          `}</style>
        </Head>
        <body>
          <Main />
          <div id="modal-root" />
          <NextScript/>
        </body>
      </Html>
    );
  }
}