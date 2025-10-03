// import axios, { AxiosResponse } from 'axios' // Unused for now

// API response wrapper
// export const handleApiResponse = <T>(response: AxiosResponse<T>) => {
//   return {
//     data: response.data,
//     success: true,
//     status: response.status,
//   }
// }

// API error handler
export const handleApiError = (error: any) => {
  console.error('API Error:', error)
  
  if (error.response) {
    // Server responded with error status
    return {
      success: false,
      message: error.response.data?.message || 'خطا در ارتباط با سرور',
      status: error.response.status,
    }
  } else if (error.request) {
    // Request was made but no response received
    return {
      success: false,
      message: 'خطا در ارتباط با سرور',
      status: 0,
    }
  } else {
    // Something else happened
    return {
      success: false,
      message: 'خطای غیرمنتظره',
      status: 0,
    }
  }
}

// Format WordPress content
export const formatWordPressContent = (content: string) => {
  return content
    .replace(/<p>/g, '<p class="mb-4">')
    .replace(/<h1>/g, '<h1 class="text-2xl font-bold mb-4">')
    .replace(/<h2>/g, '<h2 class="text-xl font-semibold mb-3">')
    .replace(/<h3>/g, '<h3 class="text-lg font-medium mb-2">')
    .replace(/<ul>/g, '<ul class="list-disc list-inside mb-4 space-y-1">')
    .replace(/<ol>/g, '<ol class="list-decimal list-inside mb-4 space-y-1">')
    .replace(/<li>/g, '<li class="text-gray-700">')
    .replace(/<a href="/g, '<a href="' + window.location.origin + '/')
}

// Format date for display
export const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('fa-IR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

// Truncate text
export const truncateText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) return text
  return text.substring(0, maxLength) + '...'
}
