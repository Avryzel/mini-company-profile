export default function ServicesSection() {
  const services = [
    {
      title: "Penjemputan Sampah",
      desc: "Layanan penjemputan sampah langsung dari lokasi Anda secara cepat dan mudah.",
      icon: "🚛",
    },
    {
      title: "Sewa Kontainer",
      desc: "Penyediaan kontainer sampah untuk kebutuhan skala kecil hingga besar.",
      icon: "🗑️",
    },
    {
      title: "Pengolahan Sampah",
      desc: "Pengolahan sampah ramah lingkungan untuk menjaga kebersihan lingkungan.",
      icon: "♻️",
    },
    {
      title: "Daur Ulang",
      desc: "Mengelola sampah menjadi produk yang bermanfaat dan bernilai guna.",
      icon: "🌱",
    },
    {
      title: "Pengangkutan",
      desc: "Transportasi sampah yang aman dan terjadwal ke tempat pengolahan.",
      icon: "📦",
    },
    {
      title: "Monitoring Sampah",
      desc: "Pantau status sampah Anda secara real-time melalui sistem kami.",
      icon: "📊",
    },
  ];

  return (
    <>
      {/* HEADER */}
      <div className="bg-[#16A34A] text-white py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-3">
            Layanan Kami
          </h1>

          <div className="text-sm text-white/80 flex justify-center gap-2">
            <span className="hover:text-white cursor-pointer">
              Beranda
            </span>
            <span>/</span>
            <span className="font-medium">
              Layanan
            </span>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <section className="bg-gray-100 py-20 px-6">

        {/* TITLE (SUDAH TIDAK DOUBLE) */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-gray-800">
            Berbagai Layanan Pengelolaan Sampah
          </h2>
        </div>

        {/* GRID */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

          {services.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition text-center"
            >
              {/* ICON (BERBEDA) */}
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-[#DFF9E8] text-[#16A34A] text-xl">
                {item.icon}
              </div>

              <h3 className="font-semibold text-lg mb-2 text-gray-800">
                {item.title}
              </h3>

              <p className="text-sm text-gray-600">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

      </section>
    </>
  );
}
