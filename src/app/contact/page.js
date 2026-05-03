"use client";
import { saveMessage } from '@/app/actions'
import { useActionState } from "react";
import { useFormStatus } from "react-dom";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className={`w-full py-3 rounded-lg text-white font-medium transition-all duration-200 flex items-center justify-center gap-2 ${pending ? "bg-gray-400 cursor-not-allowed scale-[0.98]" : "bg-[#22C55E] hover:bg-green-600 active:scale-[0.98]"
        }`}
    >
      {pending && (
        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      {pending ? "Mengirim Pesan..." : "Kirim Pesan"}
    </button>
  );
}

export default function ContactPage() {
  const [state, formAction] = useActionState(saveMessage, null);

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

          {state?.message && (
            <div className="fixed inset-0 flex items-center justify-center z-50 p-6 bg-black/20 backdrop-blur-sm">
              <div className={`max-w-md w-full p-6 rounded-2xl shadow-2xl text-center transform animate-in fade-in zoom-in duration-300 bg-white`}>
                <div className={`text-3xl mb-3 ${state.success ? "text-green-500" : "text-red-500"}`}>
                  {state.success ? "✅" : "❌"}
                </div>
                <h3 className="text-xl font-bold text-black mb-2">
                  {state.success ? "Berhasil!" : "Terjadi Kesalahan"}
                </h3>
                <p className="text-gray-600 mb-6">{state.message}</p>
                <button
                  onClick={() => window.location.reload()} // Cara simpel untuk reset/close
                  className="px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition"
                >
                  Tutup
                </button>
              </div>
            </div>
          )}

          <form action={formAction} className="space-y-4">

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

            <SubmitButton />

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