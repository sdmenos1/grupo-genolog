/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Evita que el sitio sea embebido en iframes (protección clickjacking)
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          // Evita que el navegador detecte el MIME type incorrectamente
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          // Controla la información enviada en el header Referer
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          // Deshabilita funciones del navegador innecesarias
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          // Fuerza HTTPS por 1 año (activar solo en producción con HTTPS)
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains',
          },
          // Content Security Policy
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              // Scripts: self + inline (necesario para Next.js/GSAP) + wa.me
              "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
              // Estilos: self + inline (Tailwind) + Google Fonts + FontAwesome
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdnjs.cloudflare.com",
              // Fuentes: Google Fonts + FontAwesome CDN
              "font-src 'self' https://fonts.gstatic.com https://cdnjs.cloudflare.com",
              // Imágenes: self + data URIs (para imágenes base64) + blob
              "img-src 'self' data: blob:",
              // Conexiones: solo al propio origen
              "connect-src 'self'",
              // Objetos embebidos (Flash, etc.): ninguno
              "object-src 'none'",
              // Páginas base: solo self
              "base-uri 'self'",
              // Formularios: solo self y wa.me para el redirect de WhatsApp
              "form-action 'self' https://wa.me",
              // No se permite embeber en ningún frame
              "frame-ancestors 'none'",
            ].join('; '),
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
