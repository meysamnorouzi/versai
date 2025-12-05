'use client'

import React, { useState } from 'react'
import Button from './Button'
import { Check, ArrowRight, Download } from 'lucide-react'

const ButtonShowcase: React.FC = () => {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  const handleLoadingDemo = () => {
    setLoading(true)
    setSuccess(false)
    setError(false)
    
    setTimeout(() => {
      setLoading(false)
      setSuccess(true)
      
      setTimeout(() => {
        setSuccess(false)
      }, 2000)
    }, 2000)
  }

  const handleErrorDemo = () => {
    setError(true)
    setSuccess(false)
    setLoading(false)
    
    setTimeout(() => {
      setError(false)
    }, 2000)
  }

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Button Component Showcase
        </h1>

        {/* Variants Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Button Variants</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <Button variant="primary">Primary</Button>
            <Button variant="primary-outline">Primary Outline</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="secondary-outline">Secondary Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="ghost-red">Ghost Red</Button>
            <Button variant="success">Success</Button>
            <Button variant="error">Error</Button>
            <Button variant="disabled" disabled>Disabled</Button>
          </div>
        </section>

        {/* Sizes Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Button Sizes</h2>
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="primary" size="xs">Extra Small</Button>
            <Button variant="primary" size="sm">Small</Button>
            <Button variant="primary" size="md">Medium</Button>
            <Button variant="primary" size="lg">Large</Button>
            <Button variant="primary" size="xl">Extra Large</Button>
          </div>
        </section>

        {/* States Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Button States</h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" loading={loading} onClick={handleLoadingDemo}>
              {loading ? 'Loading...' : 'Loading Demo'}
            </Button>
            <Button variant="primary" success={success}>
              Success State
            </Button>
            <Button variant="primary" error={error} onClick={handleErrorDemo}>
              Error State
            </Button>
            <Button variant="primary" disabled>
              Disabled State
            </Button>
          </div>
        </section>

        {/* Icons Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Buttons with Icons</h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" leftIcon={<Check className="w-4 h-4" />}>
              With Left Icon
            </Button>
            <Button variant="secondary" rightIcon={<ArrowRight className="w-4 h-4" />}>
              With Right Icon
            </Button>
            <Button variant="primary-outline" leftIcon={<Download className="w-4 h-4" />} rightIcon={<ArrowRight className="w-4 h-4" />}>
              Both Icons
            </Button>
          </div>
        </section>

        {/* Full Width Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Full Width Buttons</h2>
          <div className="space-y-4">
            <Button variant="primary" fullWidth>
              Full Width Primary
            </Button>
            <Button variant="secondary" fullWidth>
              Full Width Secondary
            </Button>
          </div>
        </section>

        {/* Link Buttons Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Link Buttons</h2>
          <div className="flex flex-wrap gap-4">
            <Button as="link" to="/" variant="primary">
              Link to Home
            </Button>
            <Button as="link" to="/contact" variant="secondary">
              Link to Contact
            </Button>
          </div>
        </section>

        {/* Real-world Examples */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Real-world Examples</h2>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Contact Form Actions</h3>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" size="lg">
                ارسال درخواست
              </Button>
              <Button variant="secondary" size="lg">
                انصراف
              </Button>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border mt-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Service Cards</h3>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary-outline" size="md">
                اطلاعات بیشتر
              </Button>
              <Button variant="ghost" size="md">
                مشاهده جزئیات
              </Button>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border mt-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Status Messages</h3>
            <div className="flex flex-wrap gap-4">
              <Button variant="success" size="md" success>
                درخواست با موفقیت ارسال شد
              </Button>
              <Button variant="error" size="md" error>
                خطا در ارسال درخواست
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default ButtonShowcase
