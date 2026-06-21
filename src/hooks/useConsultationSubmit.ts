'use client'

import { useState, useCallback } from 'react'
import { versaiApi } from '../services/wordpress'
import { ConsultationRequest } from '../types'
import { handleApiError } from '../utils/api'

export interface ConsultationFormData {
  name: string
  phone: string
  email: string
  subject: string
  message: string
}

const initialFormData: ConsultationFormData = {
  name: '',
  phone: '',
  email: '',
  subject: '',
  message: '',
}

interface UseConsultationSubmitOptions {
  formSource?: string
  onSuccess?: () => void
}

export const useConsultationSubmit = (options: UseConsultationSubmitOptions = {}) => {
  const { formSource = 'website', onSuccess } = options
  const [formData, setFormData] = useState<ConsultationFormData>(initialFormData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value } = e.target
      const field = name === 'fullName' ? 'name' : name
      setFormData((prev) => ({ ...prev, [field]: value }))
      setError(null)
    },
    []
  )

  const setField = useCallback((field: keyof ConsultationFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    setError(null)
  }, [])

  const resetForm = useCallback(() => {
    setFormData(initialFormData)
    setSuccess(false)
    setError(null)
  }, [])

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault()
      setLoading(true)
      setError(null)
      setSuccess(false)

      const payload: ConsultationRequest = {
        name: formData.name.trim(),
        phone: formData.phone.trim(),
        email: formData.email.trim(),
        subject: formData.subject.trim(),
        message: formData.message.trim(),
        form_source: formSource,
      }

      try {
        const response = await versaiApi.submitConsultation(payload)
        if (response.success) {
          setSuccess(true)
          setFormData(initialFormData)
          onSuccess?.()
        } else {
          setError(response.message || 'خطا در ارسال درخواست')
        }
      } catch (err) {
        const errorData = handleApiError(err)
        setError(errorData.message)
      } finally {
        setLoading(false)
      }
    },
    [formData, formSource, onSuccess]
  )

  return {
    formData,
    loading,
    error,
    success,
    handleChange,
    handleSubmit,
    setField,
    resetForm,
  }
}

export default useConsultationSubmit
