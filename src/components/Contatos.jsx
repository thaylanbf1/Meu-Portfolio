import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { toast } from 'sonner'
import { Linkedin, Mail, Send, Loader } from 'lucide-react'

const EMAIL = 'thaylanfonseca12@gmail.com'
const COOLDOWN_MS = 30 * 1000
const COOLDOWN_KEY = 'contact-last-sent'

const inputClass =
  'w-full bg-slate-900/60 border border-slate-700 text-slate-200 placeholder-slate-500 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500 transition-colors'

const Contatos = () => {
  const formRef = useRef(null)
  const [sending, setSending] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    const form = formRef.current

    // Honeypot: bots preenchem o campo escondido; finge sucesso sem enviar
    if (form.website.value) {
      toast.success('Mensagem enviada! Responderei em breve.')
      return
    }

    const wait = COOLDOWN_MS - (Date.now() - Number(localStorage.getItem(COOLDOWN_KEY) || 0))
    if (wait > 0) {
      toast.error(`Aguarde ${Math.ceil(wait / 1000)}s para enviar outra mensagem.`)
      return
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    if (!serviceId || !templateId || !publicKey) {
      toast.error('Envio indisponível no momento. Use o e-mail abaixo.')
      return
    }

    setSending(true)
    try {
      await emailjs.sendForm(serviceId, templateId, form, { publicKey })
      localStorage.setItem(COOLDOWN_KEY, String(Date.now()))
      form.reset()
      toast.success('Mensagem enviada! Responderei em breve.')
    } catch (err) {
      console.error('Erro ao enviar e-mail:', err)
      toast.error('Não foi possível enviar. Tente novamente ou use o e-mail abaixo.')
    } finally {
      setSending(false)
    }
  }

  return (
    <section id='contato' className='min-h-screen py-20 px-6 relative z-10'>
        <div className='max-w-2xl mx-auto text-center'>
            <h2 className='text-5xl font-bold mb-12 text-center'>
                <span className='bg-linear-to-r from-purple-700 to-blue-400 bg-clip-text text-transparent'>Vamos conversar?</span>
            </h2>

            <p className="text-xl text-slate-200 mb-12">
                Estou sempre aberto para discutir novos projetos, ideias criativas ou oportunidades.
            </p>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 text-left mb-8">
                <input type="text" name="from_name" placeholder="Seu nome" required maxLength={80} className={inputClass} />
                <input type="email" name="from_email" placeholder="Seu e-mail" required maxLength={120} className={inputClass} />
                <input type="text" name="subject" placeholder="Assunto" required maxLength={120} className={inputClass} />
                <textarea name="message" placeholder="Sua mensagem" required maxLength={1000} rows={5} className={`${inputClass} resize-none`} />

                {/* Honeypot: invisível para pessoas */}
                <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

                <button
                    type="submit"
                    disabled={sending}
                    className="w-full px-8 py-4 bg-linear-to-br from-purple-500 to-pink-500 rounded-full font-semibold hover:scale-105 transition-transform flex items-center justify-center gap-2 disabled:opacity-60 disabled:hover:scale-100"
                >
                    {sending ? <Loader className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                    {sending ? 'Enviando...' : 'Enviar mensagem'}
                </button>
            </form>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a href={`mailto:${EMAIL}`} className="px-8 py-4 border border-slate-600 rounded-full font-semibold hover:bg-slate-700/30 transition-colors flex items-center justify-center gap-2">
                    <Mail className="w-5 h-5" />
                    {EMAIL}
                </a>
                <a  href="https://www.linkedin.com/in/thaylanbf1" target="_blank" rel="noopener noreferrer" className="px-8 py-4 border border-purple-500 rounded-full font-semibold hover:bg-purple-500/10 transition-colors flex items-center justify-center gap-2">
                    <Linkedin className="w-5 h-5" />
                    LinkedIn
                </a>
          </div>
        </div>
    </section>
  )
}

export default Contatos
