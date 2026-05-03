"use client";
import { saveMessage } from '@/app/actions'

export default function ContactPage() {
  return (
    <main className="bg-gray-100">

      {/* HEADER (SUDAH TANPA GAMBAR) */}
      <div className="bg-[#16A34A] text-white py-24 px-6">

        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-3">Kontak Kami</h1>

          <div className="text-sm text-white/80 flex justify-center gap-2">
            <span className="hover:text-white cursor-pointer">Beranda</span>
            <span>/</span>
            <span className="font-medium">Kontak</span>
          </div>
        </div>

      </div>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">

        {/* FORM */}
        <div className="bg-[#DFF9E8] p-6 rounded-xl shadow-sm">
          <h2 className="text-black text-xl font-semibold mb-4">Hubungi Kami</h2>

          {/* Hubungkan formAction di sini */}
          <form action={saveMessage} className="space-y-4">

            <div className="grid grid-cols-2 gap-4">
              <input
                name="first_name"
                placeholder="Nama Depan"
                className="p-3 border rounded-lg bg-white placeholder-gray-400 text-black w-full"
                required
              />
              <input
                name="last_name"
                placeholder="Nama Belakang"
                className="p-3 border rounded-lg bg-white placeholder-gray-400 text-black w-full"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <input
                name="email"
                type="email"
                placeholder="Email"
                className="p-3 border rounded-lg bg-white placeholder-gray-400 text-black w-full"
                required
              />
              <input
                name="phone"
                placeholder="Nomor HP"
                className="p-3 border rounded-lg bg-white placeholder-gray-400 text-black w-full"
                required
              />
            </div>

            <input
              name="subject"
              placeholder="Subjek"
              className="w-full p-3 border rounded-lg bg-white placeholder-gray-400 text-black"
              required
            />

            <textarea
              name="message"
              placeholder="Tulis pesan Anda..."
              className="w-full p-3 border rounded-lg h-32 bg-white placeholder-gray-400 text-black"
              required
            />

            <button
              type="submit"
              className="w-full bg-[#22C55E] text-white py-3 rounded-lg hover:bg-green-600 transition"
            >
              Kirim Pesan
            </button>

          </form>
        </div>

        {/* KANAN */}
        <div className="space-y-6">

          <div className="bg-[#DFF9E8] p-6 rounded-xl shadow-sm">
            <h2 className="text-black text-xl font-semibold mb-4">Butuh Bantuan?</h2>

            <div className="space-y-3 text-gray-600 text-sm">
              <p>📞 +62 812-3456-7890</p>
              <p>✉️ avsa@waste.id</p>
              <p>📍 Depok, Indonesia</p>
            </div>
          </div>

          <div className="bg-[#DFF9E8] p-2 rounded-xl shadow-sm overflow-hidden">
            <iframe
              src="https://maps.google.com/maps?q=Depok&output=embed"
              className="w-full h-64 border-0 rounded-lg"
            ></iframe>
          </div>

        </div>

      </div>

    </main>
  );
}