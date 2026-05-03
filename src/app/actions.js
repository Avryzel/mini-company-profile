'use server'

import { supabase } from '@/lib/supabase'

export async function saveMessage(prevState, formData) {
  try {
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
      throw new Error("Konfigurasi database belum siap.");
    }

    const rawFormData = {
      first_name: formData.get('first_name'),
      last_name: formData.get('last_name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    }

    const { error } = await supabase
      .from('messages')
      .insert([rawFormData])

    if (error) {
      console.error("Supabase Error:", error.message);
      return { success: false, message: "Gagal menyimpan pesan ke database." };
    }

    return { success: true, message: "Pesan berhasil dikirim!" };

  } catch (err) {
    console.error("Production Crash Prevented:", err.message);
    return {
      success: false,
      message: "Terjadi gangguan sistem. Silakan coba beberapa saat lagi."
    };
  }
}