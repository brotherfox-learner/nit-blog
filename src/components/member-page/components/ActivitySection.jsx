import { Activity, FileText, Heart, MessageCircle, Clock, BookOpen } from 'lucide-react';

export default function ActivitySection({ activityStats, isLoading }) {
  const isAdmin = activityStats.role === 'admin';

  if (isLoading) {
    return (
      <div>
        <header className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
            Activity &amp; Statistics
          </h2>
          <p className="text-slate-500">Loading your stats...</p>
        </header>
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-slate-100 rounded-2xl p-6 animate-pulse h-32" />
          ))}
        </section>
      </div>
    );
  }

  return (
    <div>
      <header className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
          Activity &amp; Statistics
        </h2>
        <p className="text-slate-500">Track your engagement and activity over time</p>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {/* Total Posts - admin only */}
        {isAdmin && (
          <article className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl p-6 border border-indigo-200 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                <FileText size={24} className="text-indigo-600" />
              </div>
              <span className="text-3xl font-bold text-indigo-600">{activityStats.postsCount}</span>
            </div>
            <h3 className="text-sm font-semibold text-slate-700 mb-1">Total Posts</h3>
            <p className="text-xs text-slate-500">Articles you've published</p>
          </article>
        )}

        {/* Total Likes - admin only */}
        {isAdmin && (
          <article className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-6 border border-pink-200 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                <Heart size={24} className="text-pink-600" />
              </div>
              <span className="text-3xl font-bold text-pink-600">{activityStats.likesCount.toLocaleString()}</span>
            </div>
            <h3 className="text-sm font-semibold text-slate-700 mb-1">Total Likes</h3>
            <p className="text-xs text-slate-500">Appreciation from readers</p>
          </article>
        )}

        {/* Total Comments - ทุก role */}
        <article className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 border border-purple-200 hover:shadow-lg transition-all duration-300">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
              <MessageCircle size={24} className="text-purple-600" />
            </div>
            <span className="text-3xl font-bold text-purple-600">{activityStats.commentsCount}</span>
          </div>
          <h3 className="text-sm font-semibold text-slate-700 mb-1">
            {isAdmin ? 'Comments on Posts' : 'My Comments'}
          </h3>
          <p className="text-xs text-slate-500">
            {isAdmin ? 'Conversations on your content' : 'Comments you\'ve written'}
          </p>
        </article>

        {/* Last Active - ทุก role */}
        <article className="bg-gradient-to-br from-violet-50 to-violet-100 rounded-2xl p-6 border border-violet-200 hover:shadow-lg transition-all duration-300">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
              <Clock size={24} className="text-violet-600" />
            </div>
            <span className="text-xl font-bold text-violet-600">{activityStats.lastActive}</span>
          </div>
          <h3 className="text-sm font-semibold text-slate-700 mb-1">Last Active</h3>
          <p className="text-xs text-slate-500">Your most recent activity</p>
        </article>

        {/* Total Reading Time - ทุก role */}
        <article className={`bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-6 border border-emerald-200 hover:shadow-lg transition-all duration-300 ${isAdmin ? 'sm:col-span-2 lg:col-span-1' : 'sm:col-span-2'}`}>
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
              <BookOpen size={24} className="text-emerald-600" />
            </div>
            <span className="text-3xl font-bold text-emerald-600">{activityStats.totalReadingTime}</span>
          </div>
          <h3 className="text-sm font-semibold text-slate-700 mb-1">Total Reading Time</h3>
          <p className="text-xs text-slate-500">
            {isAdmin ? 'Combined time readers spent on your content' : 'Time you\'ve spent reading articles'}
          </p>
        </article>
      </section>

      <section className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 border border-slate-200">
        <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
          <Activity size={20} className="text-indigo-600" />
          Summary
        </h3>
        <div className="space-y-4">
          {isAdmin ? (
            <>
              <article className="flex items-start gap-4 pb-4 border-b border-slate-100">
                <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center shrink-0">
                  <FileText size={18} className="text-indigo-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-slate-800 mb-1">Published {activityStats.postsCount} posts</p>
                  <p className="text-xs text-slate-500">with {activityStats.likesCount.toLocaleString()} total likes and {activityStats.commentsCount} comments</p>
                </div>
              </article>
              <article className="flex items-start gap-4 pb-4 border-b border-slate-100 last:border-0">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center shrink-0">
                  <BookOpen size={18} className="text-emerald-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-slate-800 mb-1">Readers spent {activityStats.totalReadingTime} on your content</p>
                  <p className="text-xs text-slate-500">Keep writing to grow your audience!</p>
                </div>
              </article>
            </>
          ) : (
            <>
              <article className="flex items-start gap-4 pb-4 border-b border-slate-100">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center shrink-0">
                  <MessageCircle size={18} className="text-purple-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-slate-800 mb-1">You've written {activityStats.commentsCount} comments</p>
                  <p className="text-xs text-slate-500">Share your thoughts on more articles!</p>
                </div>
              </article>
              <article className="flex items-start gap-4 pb-4 border-b border-slate-100 last:border-0">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center shrink-0">
                  <BookOpen size={18} className="text-emerald-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-slate-800 mb-1">You've spent {activityStats.totalReadingTime} reading</p>
                  <p className="text-xs text-slate-500">Keep exploring new articles!</p>
                </div>
              </article>
            </>
          )}
        </div>
      </section>
    </div>
  );
}
