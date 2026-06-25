// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  // Otimização de imagens
  images: {
    formats: ["image/avif", "image/webp"], // formatos modernos
    minimumCacheTTL: 60 * 60 * 24 * 30, // cache de 30 dias
  },

  // Headers customizados para cache e compressão
  async headers() {
    return [
      {
        source: "/(.*).(mp4|webm|jpg|jpeg|png|avif|webp)$",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable", // cache longo
          },
        ],
      },
    ];
  },

  // Redirecionamentos (se quiser apontar CTAs para o formulário)
  async redirects() {
    return [
      {
        source: "/reserve",
        destination: "/#reserva", // rola até o formulário
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
