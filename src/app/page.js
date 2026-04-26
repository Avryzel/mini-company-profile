export default function Home() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center pt-24 pb-12">

      <div
        className="absolute inset-0 bg-[url('/assets/images/backgrounds/bg3.jpg')] bg-cover bg-center bg-no-repeat -z-10"
      />

      <div className="absolute inset-0 bg-white/40 flex items-center justify-center pt-20">

        <div className="w-[90%] max-w-[1200px] bg-[#DFF9E8] rounded-[30px] p-8 md:p-[60px] flex flex-col md:flex-row items-center justify-between shadow-[0_20px_40px_rgba(0,0,0,0.2)]">

          <div className="max-w-[500px] text-center md:text-left">
            <h1 className="text-[48px] text-[#14532d] leading-none font-bold">
              AVSA<br />
              <span className="text-[60px] text-[#15803d] font-bold">WASTE</span>
            </h1>
            <p className="mt-6 mb-8 text-[#444] text-base leading-relaxed">
              Aplikasi pelaporan sampah real-time untuk warga, petugas, dan pengelola lingkungan
            </p>
            <a href="/login" className="inline-block px-10 py-4 bg-[#22C55E] text-white rounded-full text-lg shadow-[0_5px_15px_rgba(34,197,94,0.3)] hover:bg-[#16A34A] transition-all duration-200 hover:shadow-xl hover:scale-105 active:scale-95">
              Mulai
            </a>
          </div>

          <div className="mt-12 md:mt-0 flex justify-center">
            <img
              src="/assets/images/icons/sampah4.png"
              alt="Ilustrasi Sampah"
              className="w-full max-w-[500px] h-auto object-contain"
            />
          </div>

        </div>
      </div>
    </div>
  );
}