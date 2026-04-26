export default function About() {
  const values = [
    {
      icon: "🌱",
      title: "Keberlanjutan",
      desc: "Setiap keputusan kami mempertimbangkan dampak jangka panjang terhadap lingkungan.",
    },
    {
      icon: "🤝",
      title: "Kolaborasi",
      desc: "Perubahan nyata terjadi ketika warga, petugas, dan pemerintah bergerak bersama.",
    },
    {
      icon: "💡",
      title: "Inovasi",
      desc: "Teknologi adalah alat kami untuk memecahkan masalah sampah secara efisien.",
    },
    {
      icon: "🎯",
      title: "Dampak Nyata",
      desc: "Setiap ton sampah yang terkelola dengan baik adalah bukti komitmen kami.",
    },
  ];

  const stats = [
    { value: "50+", label: "Kota Terjangkau" },
    { value: "120K", label: "Pengguna Aktif" },
    { value: "85%", label: "Tingkat Daur Ulang" },
    { value: "2T+", label: "Sampah Terkelola (kg)" },
  ];

  const milestones = [
    { year: "2019", title: "Didirikan", desc: "AVSA lahir dari keprihatinan terhadap krisis sampah di kota-kota besar Indonesia." },
    { year: "2020", title: "Pilot Project", desc: "Meluncurkan pilot di Depok dengan 500 rumah tangga pertama." },
    { year: "2022", title: "Ekspansi Nasional", desc: "Memperluas layanan ke 20 kota di Jawa, Bali, dan Sumatera." },
    { year: "2024", title: "100K Pengguna", desc: "Melampaui 100.000 pengguna aktif dan meraih penghargaan Green Tech Award." },
  ];

  return (
    <div className="min-h-screen bg-[#F3F4F6]">

      {/* Hero */}
      <div className="bg-[#16A34A] pt-28 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#DFF9E8] text-sm font-semibold tracking-widest uppercase mb-3">
            Tentang Kami
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Kami Percaya Bahwa <br />
            <span className="text-[#DFF9E8]">Bumi Layak Lebih Baik</span>
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto leading-relaxed">
            AVSA Waste hadir dengan satu misi sederhan memastikan setiap sampah
            menemukan tempatnya yang tepat dalam siklus yang bertanggung jawab.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-5xl mx-auto px-6 -mt-8">
        <div className="bg-white rounded-[20px] shadow-lg grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-gray-100">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center justify-center py-6 px-4">
              <span className="text-3xl font-bold text-[#16A34A]">{s.value}</span>
              <span className="text-sm text-gray-500 mt-1 text-center">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Misi */}
      <div className="max-w-5xl mx-auto px-6 mt-16">
        <div className="bg-white rounded-[20px] shadow-md p-8 md:p-12 flex flex-col md:flex-row gap-10 items-center">
          <div className="flex-1">
            <p className="text-[#16A34A] text-sm font-bold tracking-widest uppercase mb-2">Misi Kami</p>
            <h2 className="text-3xl font-bold text-gray-800 mb-4 leading-tight">
              Mengubah Sampah Jadi <span className="text-[#16A34A]">Sumber Daya</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Dengan pendekatan berbasis teknologi dan edukasi komunitas, kami mengubah
              cara masyarakat memandang dan mengelola sampah. Bukan hanya buang tapi pilah, kelola, dan manfaatkan kembali.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Kami bermitra dengan pemerintah daerah, industri daur ulang, dan komunitas
              lokal untuk menciptakan ekosistem pengelolaan sampah yang berkelanjutan.
            </p>
          </div>
          <div className="flex-shrink-0 flex flex-col items-center justify-center w-48 h-48 rounded-full bg-[#DFF9E8] border-4 border-[#22C55E]">
            <span className="text-5xl">♻️</span>
            <span className="text-3xl font-bold text-[#16A34A] mt-1">85%</span>
            <span className="text-xs text-gray-500 text-center px-2">Tingkat Daur Ulang</span>
          </div>
        </div>
      </div>

      {/* Nilai */}
      <div className="max-w-5xl mx-auto px-6 mt-12">
        <p className="text-[#16A34A] text-sm font-bold tracking-widest uppercase mb-2">Nilai Kami</p>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Yang Kami Pegang Teguh</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {values.map((v) => (
            <div key={v.title} className="bg-white rounded-[16px] shadow-sm p-6 flex gap-4 items-start hover:shadow-md hover:-translate-y-1 transition-all duration-200">
              <span className="text-3xl flex-shrink-0">{v.icon}</span>
              <div>
                <h3 className="font-bold text-gray-800 text-lg mb-1">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="max-w-5xl mx-auto px-6 mt-12 pb-20">
        <p className="text-[#16A34A] text-sm font-bold tracking-widest uppercase mb-2">Perjalanan Kami</p>
        <h2 className="text-2xl font-bold text-gray-800 mb-8">Milestone</h2>
        <div className="flex flex-col gap-0">
          {milestones.map((m, i) => (
            <div key={m.year} className="flex gap-6 items-start">
              <div className="flex flex-col items-center w-20 flex-shrink-0">
                <span className="bg-[#DFF9E8] text-[#16A34A] font-bold text-sm px-3 py-1 rounded-lg border border-[#22C55E]">
                  {m.year}
                </span>
                {i < milestones.length - 1 && (
                  <div className="w-0.5 bg-gray-200 flex-1 min-h-[40px] mt-2" />
                )}
              </div>
              <div className="pb-8">
                <h3 className="font-bold text-gray-800 text-base mb-1">{m.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}