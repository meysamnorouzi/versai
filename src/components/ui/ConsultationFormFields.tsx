'use client'

import React from 'react'
import useConsultationSubmit from '@/src/hooks/useConsultationSubmit'

export type ConsultationFormTheme = 'light' | 'dark' | 'contact'

interface ConsultationFormFieldsProps {
  formSource?: string
  theme?: ConsultationFormTheme
  showMessage?: boolean
  submitLabel?: string
  className?: string
}

const themeStyles: Record<
  ConsultationFormTheme,
  {
    label: string
    input: string
    required: string
    success: string
    error: string
    button: string
  }
> = {
  light: {
    label: 'block text-sm font-semibold text-neutral-500 mb-2 text-right',
    input:
      'w-full p-3 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-stone-300 text-right text-sm font-medium text-neutral-700 focus:outline-none focus:ring-2 focus:ring-[#316086]',
    required: 'text-red-500',
    success: 'text-green-700 text-sm text-right',
    error: 'text-red-600 text-sm text-right',
    button:
      'px-6 py-3 bg-[#d74a3c] rounded-[32px] text-white text-lg font-bold font-[\'IRANYekanX\'] hover:bg-[#c63d2f] transition-colors disabled:opacity-60',
  },
  dark: {
    label: 'block text-[14px] font-semibold text-[#f2f9ff] mb-2 text-right',
    input:
      'w-full px-3 py-3 rounded-2xl bg-[#f2f9ff] border border-[#cbcbcb] text-[#316086] placeholder-[#9d9e9f] focus:outline-none focus:ring-2 focus:ring-[#4686bb] text-right text-sm',
    required: 'text-[#f2c3be]',
    success: 'text-green-300 text-sm text-right',
    error: 'text-red-300 text-sm text-right',
    button:
      'px-6 py-3 bg-[#d74a3c] rounded-[32px] border border-[#e5867d] text-[#f2f9ff] text-lg font-bold font-[\'IRANYekanX\'] hover:bg-[#c0392b] transition-colors disabled:opacity-60',
  },
  contact: {
    label: 'block text-[14px] font-semibold font-[\'IRANYekanX\'] text-[#f2f9ff] text-right',
    input:
      'w-full h-[45px] px-3 bg-[#f2f9ff] border border-[#cbcbcb] rounded-2xl text-right text-[14px] font-medium font-[\'IRANYekanX\'] text-[#316086] placeholder-[#9d9e9f] focus:outline-none focus:border-[#316086]',
    required: 'text-[#f2c3be]',
    success: 'text-green-200 text-sm text-center',
    error: 'text-red-200 text-sm text-center',
    button:
      'bg-[#d74a3c] border border-[#e5867d] text-[#f2f9ff] px-6 py-3 rounded-[32px] text-[18px] font-bold font-[\'IRANYekanX\'] hover:bg-[#c0392b] transition-colors disabled:opacity-60',
  },
}

const ConsultationFormFields: React.FC<ConsultationFormFieldsProps> = ({
  formSource = 'website',
  theme = 'dark',
  showMessage = true,
  submitLabel = 'ارسال درخواست',
  className = '',
}) => {
  const styles = themeStyles[theme]
  const { formData, loading, error, success, handleChange, handleSubmit } =
    useConsultationSubmit({ formSource })

  const textareaClass =
    theme === 'contact'
      ? 'w-full p-3 bg-[#f2f9ff] border border-[#cbcbcb] rounded-2xl text-right text-[14px] font-medium font-[\'IRANYekanX\'] text-[#316086] placeholder-[#9d9e9f] focus:outline-none focus:border-[#316086] resize-none'
      : `${styles.input} resize-none`

  return (
    <form onSubmit={handleSubmit} className={`space-y-6 ${className}`}>
      {success && (
        <p className={styles.success} role="status">
          درخواست شما با موفقیت ارسال شد. به زودی با شما تماس خواهیم گرفت.
        </p>
      )}
      {error && (
        <p className={styles.error} role="alert">
          {error}
        </p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className={styles.label}>
            <span className={styles.required}>*</span> نام و نام خانوادگی
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="نام و نام خانوادگی خود را وارد کنید."
            className={styles.input}
            required
            disabled={loading}
          />
        </div>
        <div>
          <label className={styles.label}>
            <span className={styles.required}>*</span> شماره تماس
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="شماره تماس خود را وارد کنید."
            className={styles.input}
            required
            disabled={loading}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className={styles.label}>
            <span className={styles.required}>*</span> موضوع مشاوره
          </label>
          <select
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className={`${styles.input} appearance-none`}
            required
            disabled={loading}
          >
            <option value="">موضوع مشاوره را انتخاب کنید.</option>
            <option value="immigration">مهاجرت</option>
            <option value="study">تحصیل</option>
            <option value="work">کار</option>
            <option value="investment">سرمایه گذاری</option>
            <option value="visa">ویزا</option>
            <option value="other">سایر</option>
          </select>
        </div>
        <div>
          <label className={styles.label}>
            <span className={styles.required}>*</span> ایمیل
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="آدرس ایمیل خود را وارد کنید."
            className={styles.input}
            required
            disabled={loading}
          />
        </div>
      </div>

      {showMessage && (
        <div>
          <label className={styles.label}>متن پیام</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="در صورت تمایل، متن پیام خود را بنویسید."
            rows={4}
            className={textareaClass}
            disabled={loading}
          />
        </div>
      )}

      <div>
        <button type="submit" className={styles.button} disabled={loading}>
          {loading ? 'در حال ارسال...' : submitLabel}
        </button>
      </div>
    </form>
  )
}

export default ConsultationFormFields
