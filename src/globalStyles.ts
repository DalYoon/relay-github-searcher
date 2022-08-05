import { injectGlobal } from "@emotion/css"

injectGlobal`
  * {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial,
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
  }

  html, body {
    width: 100%;
    min-height: 100%;
  }

  #root {
    width: 100%;
  }
  
  body {
    background-color: #0d1117;
  }

  li {
    list-style-type: none;
  }
`