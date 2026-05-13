import emailjs from '@emailjs/browser'

export type ContactPayload = {
  name: string
  email: string
  message: string
}

type EmailJsConfig = {
  serviceId: string
  templateId: string
  publicKey: string
}

const loadConfig = (): EmailJsConfig | null => {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID?.trim()
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID?.trim()
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY?.trim()
  if (!serviceId || !templateId || !publicKey) return null
  return { serviceId, templateId, publicKey }
}

const config = loadConfig()

export const isEmailJsConfigured = config !== null

export class EmailJsError extends Error {
  status?: number
  responseText?: string
  constructor(message: string, status?: number, responseText?: string) {
    super(message)
    this.name = 'EmailJsError'
    this.status = status
    this.responseText = responseText
  }
}

export const sendContactMessage = async ({ name, email, message }: ContactPayload) => {
  if (!config) {
    throw new EmailJsError('EmailJS env variables are not configured')
  }
  const templateParams = {
    name,
    email,
    message,
    from_name: name,
    from_email: email,
    reply_to: email,
    to_name: 'Bohdan',
  }
  try {
    return await emailjs.send(config.serviceId, config.templateId, templateParams, {
      publicKey: config.publicKey,
    })
  } catch (err) {
    const e = err as { status?: number; text?: string; message?: string }
    const status = e?.status
    const responseText = e?.text ?? e?.message ?? 'Unknown EmailJS error'
    console.error('[emailjs]', status, responseText, err)
    throw new EmailJsError(responseText, status, responseText)
  }
}
