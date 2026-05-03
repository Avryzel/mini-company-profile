'use server'

import { supabase } from '@/lib/supabase'

export async function saveMessage(formData) {
  const rawFormData = {
    first_name: formData.get('first_name'),
    last_name: formData.get('last_name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    subject: formData.get('subject'),
    message: formData.get('message'),
  }

  const { data, error } = await supabase
    .from('messages')
    .insert([rawFormData])

  if (error) {
    console.error("Gagal simpan:", error.message)
    return { success: false, error: error.message }
  }

  return { success: true }
}