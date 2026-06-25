"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Sucesso() {
  return (
    <main className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      {/* Overlay premium */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-80"></div>

      {/* Conteúdo principal */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center max-w-2xl"
      >
        <h1 className="text-5xl font-bold mb-6 text-yellow-400 drop-shadow-lg">
          Reserva enviada com sucesso!
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          Obrigado por escolher nossos passeios exclusivos. Em breve entraremos em contato para confirmar todos os detalhes da sua experiência.
        </p>

        {/* Botão para voltar ao início */}
        <Link
          href="/"
          className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-lg font-semibold shadow-lg transition inline-block mb-6"
        >
          Voltar ao início
        </Link>

        {/* CTA para redes sociais */}
        <div className="flex justify-center space-x-6 mt-6">
          <a
            href="https://instagram.com/seuperfil"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition"
          >
            Instagram
          </a>
          <a
            href="https://facebook.com/seuperfil"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition"
          >
            Facebook
          </a>
          <a
            href="https://wa.me/5571999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition"
          >
            WhatsApp
          </a>
        </div>
      </motion.section>
    </main>
  );
}
