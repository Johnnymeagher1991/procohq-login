import Link from 'next/link'

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-400 to-blue-500 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6 space-y-4">
          <h2 className="text-2xl font-bold text-center">
            <span className="text-teal-600">Proco</span>
            <span className="text-blue-600">HQ</span>
          </h2>
          <p className="text-center text-gray-600">Enter your email and password to login</p>
          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input id="email" type="email" required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500" placeholder="m@example.com" />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input id="password" type="password" required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500" />
            </div>
            <div className="flex items-center">
              <input id="remember" type="checkbox" className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded" />
              <label htmlFor="remember" className="ml-2 block text-sm text-gray-900">Remember me</label>
            </div>
            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
              Login
            </button>
          </form>
        </div>
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 space-y-2 text-sm">
          <p className="text-center">
            <Link href="/forgot-password" className="font-medium text-teal-600 hover:text-teal-500">
              Forgot your password?
            </Link>
          </p>
          <p className="text-center text-gray-600">
            Don't have an account?{' '}
            <Link href="/signup" className="font-medium text-teal-600 hover:text-teal-500">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
