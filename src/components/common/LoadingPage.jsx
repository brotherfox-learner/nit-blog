import { Loader2 } from 'lucide-react';

const LoadingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-slate-100 flex items-center justify-center p-6">
      {/* Main Loading Card */}
      <div className="w-full max-w-[70vw] h-[70vh]">
        {/* Animated Logo/Icon */}
        {/* <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-2xl shadow-indigo-500/30 animate-pulse">
              <Loader2 size={40} className="text-white animate-spin" />
            </div> */}
            {/* Pulse Rings */}
            {/* <div className="absolute inset-0 w-20 h-20 bg-indigo-500/20 rounded-2xl animate-ping"></div>
          </div>
        </div> */}

        {/* Loading Text */}
        {/* <div className="text-center mb-12">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
            Loading
          </h2>
          <p className="text-slate-500 text-sm">Please wait while we fetch your data...</p>
        </div> */}

        {/* Skeleton Content */}
        <div className="bg-white/90 backdrop-blur-sm h-full w-full rounded-2xl p-6 shadow-xl border border-slate-100">
          {/* Profile Skeleton */}
          <div className="flex items-center justify-center gap-10 mb-6 pb-6 border-b border-slate-100">
            <div className="w-32 h-32 bg-gradient-to-br from-slate-200 to-slate-300 rounded-full animate-pulse"></div>
            <div className="flex-1">
              <div className="h-4 bg-gradient-to-r from-slate-200 to-slate-300 rounded-lg w-32 mb-2 animate-pulse"></div>
              <div className="h-3 bg-gradient-to-r from-slate-200 to-slate-300 rounded-lg w-24 animate-pulse"></div>
            </div>
          </div>

          {/* Content Skeleton */}
          <div className="space-y-4">
            <div className="h-3 bg-gradient-to-r from-slate-200 to-slate-300 rounded-lg w-full animate-pulse"></div>
            <div className="h-3 bg-gradient-to-r from-slate-200 to-slate-300 rounded-lg w-5/6 animate-pulse"></div>
            <div className="h-3 bg-gradient-to-r from-slate-200 to-slate-300 rounded-lg w-4/6 animate-pulse"></div>
            <div className="h-3 bg-gradient-to-r from-slate-200 to-slate-300 rounded-lg w-3/6 animate-pulse"></div>
          </div>

          {/* Stats Skeleton */}
          <div className="grid grid-cols-3 gap-3 mt-6 pt-6 border-t border-slate-100">
            <div className="text-center">
              <div className="h-8 bg-gradient-to-r from-slate-200 to-slate-300 rounded-lg mb-2 animate-pulse"></div>
              <div className="h-5 bg-gradient-to-r from-slate-200 to-slate-300 rounded-lg animate-pulse"></div>
            </div>
            <div className="text-center">
              <div className="h-8 bg-gradient-to-r from-slate-200 to-slate-300 rounded-lg mb-2 animate-pulse"></div>
              <div className="h-5 bg-gradient-to-r from-slate-200 to-slate-300 rounded-lg animate-pulse"></div>
            </div>
            <div className="text-center">
              <div className="h-8 bg-gradient-to-r from-slate-200 to-slate-300 rounded-lg mb-2 animate-pulse"></div>
              <div className="h-5 bg-gradient-to-r from-slate-200 to-slate-300 rounded-lg animate-pulse"></div>
            </div>
            <div className="text-center">
              <div className="h-5 bg-gradient-to-r from-slate-200 to-slate-300 rounded-lg animate-pulse"></div>
            </div>
            <div className="text-center">
              <div className="h-5 bg-gradient-to-r from-slate-200 to-slate-300 rounded-lg animate-pulse"></div>
            </div>
            <div className="text-center">
              <div className="h-5 bg-gradient-to-r from-slate-200 to-slate-300 rounded-lg animate-pulse"></div>
            </div>
            <div className="text-center">
              <div className="h-5 bg-gradient-to-r from-slate-200 to-slate-300 rounded-lg animate-pulse"></div>
            </div>
            <div className="text-center">
              <div className="h-5 bg-gradient-to-r from-slate-200 to-slate-300 rounded-lg animate-pulse"></div>
            </div>
            <div className="text-center">
              <div className="h-5 bg-gradient-to-r from-slate-200 to-slate-300 rounded-lg animate-pulse"></div>
            </div>
            <div className="text-center">
              <div className="h-4 bg-gradient-to-r from-slate-200 to-slate-300 rounded-lg animate-pulse"></div>
            </div>
            <div className="text-center">
              <div className="h-4 bg-gradient-to-r from-slate-200 to-slate-300 rounded-lg animate-pulse"></div>
            </div>
            <div className="text-center">
              <div className="h-3 bg-gradient-to-r from-slate-200 to-slate-300 rounded-lg animate-pulse"></div>
            </div>
            <div className="text-center">
              <div className="h-3 bg-gradient-to-r from-slate-200 to-slate-300 rounded-lg animate-pulse"></div>
            </div>
            <div className="text-center">
              <div className="h-2 bg-gradient-to-r from-slate-200 to-slate-300 rounded-lg animate-pulse"></div>
            </div>
            <div className="text-center">
              <div className="h-1 bg-gradient-to-r from-slate-200 to-slate-300 rounded-lg animate-pulse"></div>
            </div>
            
          </div>
        </div>
        

        {/* Loading Progress Bar */}
        <div className="mt-6 bg-slate-200 rounded-full h-1 overflow-hidden">
          <div className="h-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-full animate-loading-bar"></div>
        </div>
      </div>

      {/* Inline style for loading bar animation */}
      <style>{`
        @keyframes loading-bar {
          0% {
            width: 0%;
          }
          50% {
            width: 70%;
          }
          100% {
            width: 100%;
          }
        }

        .animate-loading-bar {
          animation: loading-bar 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default LoadingPage;