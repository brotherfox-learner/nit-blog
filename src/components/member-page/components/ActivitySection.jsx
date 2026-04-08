import { Activity, FileText, Heart, MessageCircle, Clock, BookOpen } from 'lucide-react';

export default function ActivitySection({ activityStats, isLoading }) {
  const isAdmin = activityStats.role === 'admin';
  const statCards = [
    ...(isAdmin
      ? [
          {
            key: 'posts',
            label: 'Total Posts',
            value: activityStats.postsCount,
            note: "Articles you've published",
            icon: FileText,
            tint: 'from-neutral-50 to-stone-50',
            iconBg: 'bg-white',
            iconColor: 'text-neutral-600',
          },
          {
            key: 'likes',
            label: 'Total Likes',
            value: (activityStats.likesCount ?? 0).toLocaleString(),
            note: 'Appreciation from readers',
            icon: Heart,
            tint: 'from-neutral-50 to-neutral-100/80',
            iconBg: 'bg-white',
            iconColor: 'text-neutral-600',
          },
        ]
      : []),
    {
      key: 'comments',
      label: isAdmin ? 'Comments on Posts' : 'My Comments',
      value: activityStats.commentsCount,
      note: isAdmin ? 'Conversations on your content' : "Comments you've written",
      icon: MessageCircle,
      tint: 'from-neutral-50 to-neutral-100/80',
      iconBg: 'bg-white',
      iconColor: 'text-neutral-600',
    },
    {
      key: 'active',
      label: 'Last Active',
      value: activityStats.lastActive,
      note: 'Your most recent activity',
      icon: Clock,
      tint: 'from-stone-50 to-neutral-100/60',
      iconBg: 'bg-white',
      iconColor: 'text-neutral-600',
    },
    {
      key: 'reading',
      label: 'Total Reading Time',
      value: activityStats.totalReadingTime,
      note: isAdmin ? 'Time readers spent on your content' : "Time you've spent reading articles",
      icon: BookOpen,
      tint: 'from-neutral-50 to-neutral-100/80',
      iconBg: 'bg-white',
      iconColor: 'text-neutral-600',
      wide: !isAdmin,
    },
  ];

  if (isLoading) {
    return (
      <div className="space-y-8">
        <header className="border-b border-neutral-100 pb-5">
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-400">
            Insights
          </p>
          <h2 className="mb-2 text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
            Activity &amp; Statistics
          </h2>
          <p className="text-[0.95rem] leading-relaxed text-neutral-500">Loading your stats...</p>
        </header>
        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-36 animate-pulse rounded-2xl bg-neutral-100" />
          ))}
        </section>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <header className="border-b border-neutral-100 pb-5">
        <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-400">
          Insights
        </p>
        <h2 className="mb-2 text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
          Activity &amp; Statistics
        </h2>
        <p className="max-w-2xl text-[0.98rem] leading-relaxed text-neutral-500">
          A calmer readout of how your account is performing, from publishing to reader engagement and reading habits.
        </p>
      </header>

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {statCards.map(({ key, label, value, note, icon: Icon, tint, iconBg, iconColor, wide }) => (
          <article
            key={key}
            className={`rounded-2xl border border-neutral-200/90 bg-gradient-to-br ${tint} p-5 shadow-sm transition-shadow duration-200 hover:shadow-md ${
              wide ? 'sm:col-span-2 xl:col-span-1' : ''
            }`}
          >
            <div className="mb-6 flex items-start justify-between gap-4">
              <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${iconBg}`}>
                <Icon size={22} className={iconColor} />
              </div>
              <span className={`text-right text-3xl font-bold tracking-tight ${iconColor}`}>{value}</span>
            </div>
            <h3 className="mb-1 text-sm font-medium text-neutral-800">{label}</h3>
            <p className="text-xs leading-relaxed text-neutral-500">{note}</p>
          </article>
        ))}
      </section>

      <section className="rounded-2xl border border-neutral-100 bg-neutral-50/80 p-6">
        <h3 className="mb-6 flex items-center gap-2 text-lg font-semibold text-neutral-900">
          <Activity size={20} className="text-neutral-500" />
          Summary
        </h3>
        <div className="space-y-4">
          {isAdmin ? (
            <>
              <article className="flex items-start gap-4 border-b border-neutral-100 pb-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-neutral-100">
                  <FileText size={18} className="text-neutral-500" />
                </div>
                <div className="flex-1">
                  <p className="mb-1 text-sm font-medium text-neutral-900">Published {activityStats.postsCount} posts</p>
                  <p className="text-xs leading-relaxed text-neutral-500">with {(activityStats.likesCount ?? 0).toLocaleString()} total likes and {activityStats.commentsCount} comments.</p>
                </div>
              </article>
              <article className="flex items-start gap-4 pb-1">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-neutral-100">
                  <BookOpen size={18} className="text-neutral-500" />
                </div>
                <div className="flex-1">
                  <p className="mb-1 text-sm font-medium text-neutral-900">Readers spent {activityStats.totalReadingTime} on your content</p>
                  <p className="text-xs leading-relaxed text-neutral-500">The strongest signal here is consistency. More useful articles usually compounds reach over time.</p>
                </div>
              </article>
            </>
          ) : (
            <>
              <article className="flex items-start gap-4 border-b border-neutral-100 pb-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-neutral-100">
                  <MessageCircle size={18} className="text-neutral-500" />
                </div>
                <div className="flex-1">
                  <p className="mb-1 text-sm font-medium text-neutral-900">You've written {activityStats.commentsCount} comments</p>
                  <p className="text-xs leading-relaxed text-neutral-500">Your activity is building a visible reading footprint across the blog.</p>
                </div>
              </article>
              <article className="flex items-start gap-4 pb-1">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-neutral-100">
                  <BookOpen size={18} className="text-neutral-500" />
                </div>
                <div className="flex-1">
                  <p className="mb-1 text-sm font-medium text-neutral-900">You've spent {activityStats.totalReadingTime} reading</p>
                  <p className="text-xs leading-relaxed text-neutral-500">Keep exploring fresh posts to make this feed feel more personal over time.</p>
                </div>
              </article>
            </>
          )}
        </div>
      </section>
    </div>
  );
}
