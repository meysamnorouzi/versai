import React from 'react'
import { Home, ArrowRight } from 'lucide-react'
import Button from '../components/ui/Button'
import SEOHead from '../components/seo/SEOHead'

const NotFound: React.FC = () => {
  return (
    <>
      <SEOHead
        title="صفحه یافت نشد - 404"
        description="صفحه مورد نظر شما یافت نشد. لطفاً از منوی اصلی سایت استفاده کنید."
        noindex={true}
        nofollow={true}
      />
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-versai-red-500 mb-4">404</h1>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            صفحه مورد نظر یافت نشد
          </h2>
          <p className="text-gray-600 mb-8">
            متأسفانه صفحه‌ای که به دنبال آن هستید وجود ندارد یا منتقل شده است.
          </p>
        </div>
        
        <div className="space-y-4">
          <Button as="link" to="/" className="w-full">
            <Home className="w-5 h-5 ml-2" />
            بازگشت به صفحه اصلی
          </Button>
          
          <Button variant="outline" onClick={() => window.history.back()} className="w-full">
            <ArrowRight className="w-5 h-5 ml-2" />
            بازگشت به صفحه قبل
          </Button>
        </div>
      </div>
    </div>
    </>
  )
}

export default NotFound
