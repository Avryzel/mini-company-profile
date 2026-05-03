'use server'

import { supabase } from '@/lib/supabase'

export async function saveMessage(prevState, formData) {
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
    console.error("Gagal simpan:", error.message)
    return {
      success: false,
      message: "Gagal mengirim pesan: " + error.message
    }
  }

  return {
    success: true,
    message: "Pesan berhasil dikirim! Tim kami akan segera menghubungi Anda."
  }
}