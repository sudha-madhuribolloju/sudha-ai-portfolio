import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { Send, CheckCircle2 } from 'lucide-react'
import { useState } from 'react'
import { profile } from '../utils/data'

type FormValues = {
  name: string
  email: string
  message: string
}

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>()
  const [sent, setSent] = useState(false)

  const onSubmit = async (data: FormValues) => {
    const subject = encodeURIComponent(`Portfolio enquiry from ${data.name}`)
    const body = encodeURIComponent(`${data.message}\n\n— ${data.name} (${data.email})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setSent(true)
    reset()
    window.setTimeout(() => setSent(false), 4000)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="card-surface rounded-2xl p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-ink-700/80 dark:text-ink-200/70">
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Your name"
            className="w-full rounded-xl border border-ink-200 bg-white px-4 py-2.5 text-sm text-ink-900 outline-none transition-colors focus:border-azure-400 dark:border-ink-700 dark:bg-ink-900 dark:text-white"
            {...register('name', { required: 'Please enter your name' })}
          />
          {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
        </div>

        <div className="sm:col-span-1">
          <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-ink-700/80 dark:text-ink-200/70">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            className="w-full rounded-xl border border-ink-200 bg-white px-4 py-2.5 text-sm text-ink-900 outline-none transition-colors focus:border-azure-400 dark:border-ink-700 dark:bg-ink-900 dark:text-white"
            {...register('email', {
              required: 'Please enter your email',
              pattern: { value: /^\S+@\S+\.\S+$/, message: 'Enter a valid email' },
            })}
          />
          {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-ink-700/80 dark:text-ink-200/70">
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            placeholder="What would you like to talk about?"
            className="w-full resize-none rounded-xl border border-ink-200 bg-white px-4 py-2.5 text-sm text-ink-900 outline-none transition-colors focus:border-azure-400 dark:border-ink-700 dark:bg-ink-900 dark:text-white"
            {...register('message', { required: 'Please add a short message' })}
          />
          {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>}
        </div>
      </div>

      <motion.button
        type="submit"
        disabled={isSubmitting}
        whileTap={{ scale: 0.98 }}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-azure-500 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-azure-600 disabled:opacity-60 sm:w-auto dark:bg-sky-400 dark:text-ink-950 dark:hover:bg-sky-300"
      >
        {sent ? <CheckCircle2 size={16} /> : <Send size={16} />}
        {sent ? 'Opening your email app…' : 'Send message'}
      </motion.button>
      <p className="mt-3 text-xs text-ink-700/50 dark:text-ink-200/40">
        Submitting opens a pre-filled email to {profile.email}.
      </p>
    </form>
  )
}
