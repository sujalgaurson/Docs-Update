"use client"
import { AlertTriangle } from "lucide-react";

export default function ErrorPage() {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
    >
      <div className="flex flex-col items-center">
        <div className="bg-red-600 rounded-full p-6 shadow-lg mb-6 animate-bounce">
          <AlertTriangle size={64} className="text-white" />
        </div>
        <h1 className="text-4xl font-bold text-white mb-2">Something went wrong</h1>
        <p className="text-lg text-gray-300 mb-6 text-center max-w-md">
          Sorry, an unexpected error has occurred. Please try refreshing the page or come back later.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="px-6 py-2 bg-white text-red-600 font-semibold rounded shadow hover:bg-red-100 transition"
        >
          Refresh Page
        </button>
      </div>
    </div>
  );
}
