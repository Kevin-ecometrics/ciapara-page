<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sm="http://www.sitemaps.org/schemas/sitemap/0.9">

  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>

  <xsl:template match="/">
    <html lang="es">
      <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>Sitemap — Enrique Ciapara</title>
        <style>
          *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

          body {
            background: #1A1916;
            color: #e8e2db;
            font-family: system-ui, -apple-system, sans-serif;
            min-height: 100vh;
            padding: 4rem 1.5rem;
          }

          .wrapper {
            max-width: 860px;
            margin: 0 auto;
          }

          header {
            margin-bottom: 3rem;
            border-bottom: 1px solid rgba(255,255,255,0.08);
            padding-bottom: 2rem;
          }

          .eyebrow {
            font-size: 0.65rem;
            letter-spacing: 0.4em;
            text-transform: uppercase;
            color: #8B3A2A;
            margin-bottom: 0.75rem;
          }

          h1 {
            font-size: clamp(2.5rem, 8vw, 5rem);
            font-weight: 700;
            letter-spacing: -0.02em;
            line-height: 0.9;
            color: #fff;
          }

          .meta {
            margin-top: 1.25rem;
            font-size: 0.75rem;
            color: rgba(255,255,255,0.25);
            letter-spacing: 0.08em;
          }

          table {
            width: 100%;
            border-collapse: collapse;
          }

          thead tr {
            border-bottom: 1px solid rgba(255,255,255,0.08);
          }

          th {
            font-size: 0.6rem;
            letter-spacing: 0.35em;
            text-transform: uppercase;
            color: rgba(255,255,255,0.25);
            padding: 0 0 0.75rem;
            text-align: left;
            font-weight: 400;
          }

          th:not(:first-child) { padding-left: 2rem; }

          td {
            padding: 1rem 0;
            border-bottom: 1px solid rgba(255,255,255,0.05);
            font-size: 0.85rem;
            vertical-align: middle;
          }

          td:not(:first-child) { padding-left: 2rem; }

          td a {
            color: #e8e2db;
            text-decoration: none;
            transition: color 0.2s;
          }

          td a:hover { color: #8B3A2A; }

          .pill {
            display: inline-block;
            font-size: 0.6rem;
            letter-spacing: 0.2em;
            text-transform: uppercase;
            padding: 0.2em 0.6em;
            border: 1px solid rgba(139,58,42,0.4);
            color: #8B3A2A;
            border-radius: 2px;
          }

          .dim { color: rgba(255,255,255,0.3); font-size: 0.78rem; }

          footer {
            margin-top: 3rem;
            padding-top: 1.5rem;
            border-top: 1px solid rgba(255,255,255,0.06);
            font-size: 0.65rem;
            letter-spacing: 0.2em;
            text-transform: uppercase;
            color: rgba(255,255,255,0.15);
          }
        </style>
      </head>
      <body>
        <div class="wrapper">
          <header>
            <p class="eyebrow">XML Sitemap</p>
            <h1>CIAPARA</h1>
            <p class="meta">
              <xsl:value-of select="count(sm:urlset/sm:url)"/> URLs indexadas
            </p>
          </header>

          <table>
            <thead>
              <tr>
                <th>URL</th>
                <th>Frecuencia</th>
                <th>Prioridad</th>
              </tr>
            </thead>
            <tbody>
              <xsl:for-each select="sm:urlset/sm:url">
                <xsl:sort select="sm:priority" order="descending" data-type="number"/>
                <tr>
                  <td>
                    <a href="{sm:loc}">
                      <xsl:value-of select="sm:loc"/>
                    </a>
                  </td>
                  <td class="dim"><xsl:value-of select="sm:changefreq"/></td>
                  <td>
                    <span class="pill"><xsl:value-of select="sm:priority"/></span>
                  </td>
                </tr>
              </xsl:for-each>
            </tbody>
          </table>

          <footer>Enrique Ciapara · Tijuana, B.C. · Est. 2001</footer>
        </div>
      </body>
    </html>
  </xsl:template>

</xsl:stylesheet>
