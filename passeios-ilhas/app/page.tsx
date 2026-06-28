"use client";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules"; // importa módulos extras

export default function Home() {
  return (
    <main className="relative min-h-screen text-white">

      {/* Overlay escuro para contraste */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Hero Section */}
      <div className="relative h-screen w-full overflow-hidden">
        {/* Vídeo de fundo */}
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/videos/ilhas-poster.jpg"
          className="absolute inset-0 w-full h-full object-contain md:object-cover bg-black"
        >
          <source src="/videos/ilhas-optimized.webm" type="video/webm" />
          <source src="/videos/ilhas-optimized.mp4" type="video/mp4" />
        </video>

        {/* Overlay premium para contraste */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent"></div>
        {/* Conteúdo principal do Hero */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center justify-center h-full text-center px-6 relative z-10 text-white"
        >
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg"
          >
            Descubra o Paraíso em Cada Detalhe
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-lg md:text-2xl mb-6 max-w-2xl drop-shadow-md"
          >
            Passeios exclusivos pelas ilhas mais incríveis da Bahia.
            Uma experiência única, uma experiência inesquecível.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-lg font-semibold shadow-lg transition"
            onClick={() =>
              document.getElementById("idreserva")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Reserve seu passeio
          </motion.button>
        </motion.section>
      </div>

      {/* Storytelling Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.2 }}
        className="relative bg-black text-white"
      >
        {[
          { src: "../storytelling/ilha1", text: "Uma jornada única pelas águas cristalinas" },
          { src: "../storytelling/ilha2", text: "Conforto e exclusividade em cada detalhe" },
          { src: "../storytelling/ilha3", text: "Descubra o encanto das ilhas da Bahia" },
        ].map((item, index) => (
          <motion.div
            key={index}            
            className="relative w-full h-screen flex items-center justify-center overflow-hidden"
          >
            <picture>
              <source srcSet={`/${item.src}.avif`} type="image/avif" />
              <source srcSet={`/${item.src}.webp`} type="image/webp" />
              <img
                src={`/${item.src}.jpg`}
                alt={item.text}
                className="absolute inset-0 w-full h-full object-cover object-center"
                loading="lazy"
              />
            </picture>
            <div className="absolute inset-0 bg-black/50"></div>
            <h2 className="relative text-4xl font-bold max-w-2xl text-center">
              {item.text}
            </h2>
          </motion.div>
        ))}
      </motion.section>

      {/* Benefícios */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ amount: 0.2 }}
        className="relative bg-black text-white"
      >

        {/* Benefícios e diferenciais */}
        <section className="bg-black text-white py-24 px-6 relative z-10">
          <div className="max-w-6xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Experiência única em Cada Detalhe
            </h2>
            <p className="text-lg text-gray-300">
              Cada passeio é planejado para oferecer conforto, exclusividade e conexão com a natureza.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Conforto Exclusivo", desc: "Embarcações modernas e seguras, pensadas para o seu bem-estar." },
              { title: "Guias Experientes", desc: "Profissionais locais que conhecem cada segredo das ilhas." },
              { title: "Experiência Personalizada", desc: "Passeios adaptados ao seu ritmo e estilo de viagem." },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ amount: 0.2 }} // 👈 mantém o elemento visível
                className="bg-white/5 rounded-xl p-8 hover:bg-white/10 transition"
              >
                <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

      </motion.section>

      {/* Call to Action */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ amount: 0.2 }}
        className="relative bg-black text-white"
      >

        {/* Call to Action Final */}
        <section className="relative z-20 bg-white text-black py-32 text-center">
          <h2 className="text-5xl font-bold mb-6">
            Pronto para viver o paraíso?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Reserve agora e descubra o encanto das ilhas da Bahia com conforto, exclusividade e estilo.
          </p>
          <button className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition"
            onClick={() => document.getElementById("idreserva")?.scrollIntoView({ behavior: "smooth" })}
          >
            Reserve seu passeio
          </button>
        </section>

      </motion.section>

      {/* Formulário de Reserva (Netlify) */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ amount: 0.2 }}
        className="bg-white text-black py-24 px-6 relative z-20"
      >
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Reserve seu passeio</h2>
          <p className="text-lg text-gray-600">
            Preencha o formulário abaixo e garanta sua experiência exclusiva nas ilhas da Bahia.
          </p>
        </div>

        <form
          id="idreserva"
          name="reserva"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          action="/sucesso"
          className="max-w-3xl mx-auto grid grid-cols-1 gap-6"
        >
          {/* Campo oculto obrigatório */}
          <input type="hidden" name="form-name" value="reserva" />

          {/* Honeypot para evitar spam */}
          <p className="hidden">
            <label>
              Não preencha este campo: <input name="bot-field" />
            </label>
          </p>

          <input
            type="text"
            name="nome"
            placeholder="Nome completo"
            required
            className="border rounded-lg px-4 py-3"
          />
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            required
            className="border rounded-lg px-4 py-3"
          />
          <input
            type="tel"
            name="telefone"
            placeholder="Telefone"
            required
            className="border rounded-lg px-4 py-3"
          />

          <select
            name="passeio"
            required
            className="border rounded-lg px-4 py-3"
          >
            <option value="">Selecione o passeio</option>
            <option value="ilhas-cristalinas">Ilhas Cristalinas</option>
            <option value="conforto-exclusivo">Conforto Exclusivo</option>
            <option value="experiencia-personalizada">Experiência Personalizada</option>
          </select>

          <textarea
            name="mensagem"
            placeholder="Mensagem ou observações"
            rows={4}
            className="border rounded-lg px-4 py-3"
          ></textarea>

          <button
            type="submit"
            className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
          >
            Enviar Reserva
          </button>
        </form>
      </motion.section>


      {/* Depoimentos */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ amount: 0.2 }}
        className="relative bg-black text-white"
      >
        <section className="relative bg-black text-white py-24 px-6 z-20">
          {/* Gradiente de fundo */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-70 pointer-events-none"></div>

          <div className="relative max-w-6xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">O que nossos clientes dizem</h2>
            <p className="text-lg text-gray-300">
              Experiências reais que mostram a magia dos passeios pelas ilhas.
            </p>
          </div>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            navigation={true}
            pagination={{ clickable: true }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="depoimentos-swiper relative"
          >
            {[
              { name: "Ana Paula", text: "Uma experiência inesquecível! O passeio foi perfeito do início ao fim.", img: "depoimentos/ana" },
              { name: "Carlos Silva", text: "Conforto e exclusividade em cada detalhe. Recomendo a todos!", img: "depoimentos/carlos" },
              { name: "Mariana Costa", text: "Os guias são incríveis e conhecem cada segredo das ilhas.", img: "depoimentos/mariana" },
              { name: "Marcos Lima", text: "Adorei o passeio espero voltar outras vezes foi perfeito.", img: "depoimentos/marcos" },
            ].map((item, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={{ amount: 0.3 }}
                  className="bg-white/5 rounded-xl p-8 shadow-lg hover:bg-white/10 transition flex flex-col items-center relative"
                >
                  <picture>
                    <source srcSet={`/${item.img}.avif`} type="image/avif" />
                    <source srcSet={`/${item.img}.webp`} type="image/webp" />
                    <img
                      src={`/${item.img}.jpg`}
                      alt={item.name}
                      className="w-20 h-20 rounded-full object-cover mb-4"
                      loading="lazy"
                    />
                  </picture>

                  <p className="text-gray-200 italic mb-4">{item.text}</p>
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </motion.section>

      {/* Rodapé */}
      <motion.footer
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.8 }}
        className="bg-black text-gray-400 py-12 px-6 w-full relative z-20"
      >
        {/* Rodapé premium */}
        <footer className="bg-black text-gray-400 py-12 px-6 w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            {/* Logo / Marca */}
            <div>
              <h3 className="text-white text-2xl font-bold mb-4">Passeios de Ilhas</h3>
              <p className="text-sm">
                Experiências exclusivas e inesquecíveis pelas ilhas da Bahia.
              </p>
            </div>

            {/* Links rápidos */}
            <div>
              <h4 className="text-white font-semibold mb-4">Links</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#hero"
                    className="relative group transition-colors duration-300 hover:text-white"
                  >
                    Início
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
                <li>
                  <a
                    href="#storytelling"
                    className="relative group transition-colors duration-300 hover:text-white"
                  >
                    Experiência
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
                <li>
                  <a
                    href="#beneficios"
                    className="relative group transition-colors duration-300 hover:text-white"
                  >
                    Benefícios
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
                <li>
                  <a
                    href="#contato"
                    className="relative group transition-colors duration-300 hover:text-white"
                  >
                    Contato
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Contato */}
            <div>
              <h4 className="text-white font-semibold mb-4">Contato</h4>
              <p className="text-sm">📍 Camaçari, Bahia - Brasil</p>
              <p className="text-sm">📞 (71) 99999-9999</p>
              <p className="text-sm">✉️ contato@passeiosdeilhas.com</p>
              <div className="flex justify-center md:justify-start space-x-4 mt-4">
                <a
                  href="#"
                  className="relative group transition-colors duration-300 hover:text-white"
                >
                  Instagram
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a
                  href="#"
                  className="relative group transition-colors duration-300 hover:text-white"
                >
                  Facebook
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a
                  href="#"
                  className="relative group transition-colors duration-300 hover:text-white"
                >
                  WhatsApp
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </a>
              </div>

              {/* Botão premium */}
              <button
                className="mt-6 bg-white/10 text-white px-4 py-2 rounded-lg transition duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-white/20"
                onClick={() => document.getElementById("idreserva")?.scrollIntoView({ behavior: "smooth" })}
              >
                Reservar agora
              </button>
            </div>
          </div>

          {/* Linha final */}
          <div className="text-center text-xs text-gray-500 mt-12">
            © {new Date().getFullYear()} Passeios de Ilhas. Todos os direitos reservados.
          </div>
        </footer>
      </motion.footer>

    </main >
  );
}
