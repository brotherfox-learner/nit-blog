import { Activity, FileText, Heart, MessageCircle, Clock, BookOpen } from 'lucide-react';

export default function ActivitySection({ activityStats }) {
  return (
    <div>
      <header className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
          Activity & Statistics
        </h2>
        <p className="text-slate-500">Track your engagement and activity over time</p>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
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

        <article className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 border border-purple-200 hover:shadow-lg transition-all duration-300">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
              <MessageCircle size={24} className="text-purple-600" />
            </div>
            <span className="text-3xl font-bold text-purple-600">{activityStats.commentsCount}</span>
          </div>
          <h3 className="text-sm font-semibold text-slate-700 mb-1">Comments</h3>
          <p className="text-xs text-slate-500">Conversations started</p>
        </article>

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

        <article className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-6 border border-emerald-200 hover:shadow-lg transition-all duration-300 sm:col-span-2 lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
              <BookOpen size={24} className="text-emerald-600" />
            </div>
            <span className="text-3xl font-bold text-emerald-600">{activityStats.totalReadingTime}</span>
          </div>
          <h3 className="text-sm font-semibold text-slate-700 mb-1">Total Reading Time</h3>
          <p className="text-xs text-slate-500">Combined time readers spent on your content</p>
        </article>
      </section>

      <section className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 border border-slate-200">
        <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
          <Activity size={20} className="text-indigo-600" />
          Recent Activity
        </h3>
        <div className="space-y-4">
          <article className="flex items-start gap-4 pb-4 border-b border-slate-100 last:border-0">
            <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
              <FileText size={18} className="text-indigo-600" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-slate-800 mb-1">Published a new post</p>
              <p className="text-xs text-slate-500 mb-2">"Getting Started with React Hooks"</p>
              <span className="text-xs text-slate-400">2 hours ago</span>
            </div>
          </article>
          <article className="flex items-start gap-4 pb-4 border-b border-slate-100 last:border-0">
            <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
              <Heart size={18} className="text-pink-600" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-slate-800 mb-1">Received 45 new likes</p>
              <p className="text-xs text-slate-500 mb-2">On your post about JavaScript</p>
              <span className="text-xs text-slate-400">5 hours ago</span>
            </div>
          </article>
          <article className="flex items-start gap-4 pb-4 border-b border-slate-100 last:border-0">
            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
              <MessageCircle size={18} className="text-purple-600" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-slate-800 mb-1">New comment on your post</p>
              <p className="text-xs text-slate-500 mb-2">"Great article! Very helpful tips..."</p>
              <span className="text-xs text-slate-400">1 day ago</span>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
