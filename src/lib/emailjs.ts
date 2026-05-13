import emailjs from '@emailjs/browser'

export type ContactPayload = {
  name: string
  email: string
  message: string
}

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

export const isEmailJsConfigured = Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY)

export const sendContactMessage = async (payload: ContactPayload) => {
  if (!isEmailJsConfigured) {
    throw new Error('EmailJS env variables are not configured')
  }
  return emailjs.send(SERVICE_ID, TEMPLATE_ID, payload as unknown as Record<string, unknown>, {
    publicKey: PUBLIC_KEY,
  })
}
