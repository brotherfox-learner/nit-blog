import { Bell, Globe, Moon, Zap, Check } from 'lucide-react';

export default function PreferencesSection({
  formData,
  saveStatus,
  handleInputChange,
  handleSave
}) {
  return (
    <div className="space-y-8">
      <header className="border-b border-neutral-100 pb-5">
        <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-400">
          Experience
        </p>
        <div className="mb-3 flex flex-wrap items-center gap-3">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
            Preferences
          </h2>
          <span className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-medium uppercase tracking-[0.12em] text-neutral-500">
            Coming Soon
          </span>
        </div>
        <p className="max-w-2xl text-[0.98rem] leading-relaxed text-neutral-500">
          The control panel is already here. The full preference system can evolve later without making the page feel unfinished today.
        </p>
      </header>

      <section className="rounded-2xl border border-neutral-100 bg-neutral-50/80 p-5">
        <div className="flex items-start gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-neutral-500 shadow-sm ring-1 ring-neutral-100">
            <Zap size={20} />
          </div>
          <div>
            <p className="text-sm font-medium text-neutral-900">Early access preferences</p>
            <p className="mt-1 text-sm leading-relaxed text-neutral-500">
              These options can already be styled and previewed, even if the final backend behavior is still being rolled out.
            </p>
          </div>
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <article className="flex items-center justify-between rounded-2xl border border-neutral-100 bg-white p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-neutral-50 ring-1 ring-neutral-100">
              <Bell size={20} className="text-neutral-500" />
            </div>
            <div>
              <p className="text-sm font-medium text-neutral-900">Email Notifications</p>
              <p className="text-xs text-neutral-500">Receive updates about your account</p>
            </div>
          </div>
          <label className="relative inline-block h-6 w-12 cursor-pointer">
            <input
              type="checkbox"
              name="notifications"
              checked={formData.notifications}
              onChange={handleInputChange}
              className="peer sr-only"
            />
            <div className="h-6 w-12 rounded-full bg-neutral-200 transition-all duration-300 peer-checked:bg-neutral-800"></div>
            <div className="absolute left-1 top-1 h-4 w-4 rounded-full bg-white shadow-sm transition-all duration-300 peer-checked:translate-x-6"></div>
          </label>
        </article>

        <article className="flex items-center justify-between rounded-2xl border border-neutral-100 bg-white p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-neutral-50 ring-1 ring-neutral-100">
              <Zap size={20} className="text-neutral-500" />
            </div>
            <div>
              <p className="text-sm font-medium text-neutral-900">Auto-save drafts</p>
              <p className="text-xs text-neutral-500">Automatically save your work</p>
            </div>
          </div>
          <label className="relative inline-block h-6 w-12 cursor-pointer">
            <input
              type="checkbox"
              name="autoSave"
              checked={formData.autoSave}
              onChange={handleInputChange}
              className="peer sr-only"
            />
            <div className="h-6 w-12 rounded-full bg-neutral-200 transition-all duration-300 peer-checked:bg-neutral-800"></div>
            <div className="absolute left-1 top-1 h-4 w-4 rounded-full bg-white shadow-sm transition-all duration-300 peer-checked:translate-x-6"></div>
          </label>
        </article>

        <div className="flex flex-col gap-2">
          <label htmlFor="language" className="flex items-center gap-2 text-sm font-medium text-neutral-800">
            <Globe size={16} className="text-neutral-400" />
            Language
          </label>
          <select
            id="language"
            name="language"
            value={formData.language}
            onChange={handleInputChange}
            className="cursor-pointer rounded-2xl border border-neutral-200 bg-white px-4 py-3.5 text-base text-neutral-900 transition-all duration-200 hover:border-neutral-300 focus:border-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-100"
          >
            <option value="en">English</option>
            <option value="th">Thai</option>
            <option value="ja">Japanese</option>
            <option value="zh">Chinese</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="theme" className="flex items-center gap-2 text-sm font-medium text-neutral-800">
            <Moon size={16} className="text-neutral-400" />
            Theme
          </label>
          <select
            id="theme"
            name="theme"
            value={formData.theme}
            onChange={handleInputChange}
            className="cursor-pointer rounded-2xl border border-neutral-200 bg-white px-4 py-3.5 text-base text-neutral-900 transition-all duration-200 hover:border-neutral-300 focus:border-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-100"
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="auto">Auto</option>
          </select>
        </div>
      </section>

      <footer className="flex flex-col gap-4 border-t border-neutral-100 pt-6 sm:flex-row sm:items-center">
        <button
          className="flex items-center gap-2 rounded-xl bg-neutral-900 px-8 py-4 text-base font-medium text-white shadow-sm transition-all duration-200 hover:bg-neutral-800 active:translate-y-px disabled:cursor-not-allowed disabled:opacity-50"
          onClick={handleSave}
          disabled={saveStatus === 'saving'}
        >
          {saveStatus === 'saving' && (
            <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
          )}
          {saveStatus === 'success' && <Check size={20} />}
          {saveStatus === 'saving' ? 'Saving...' : saveStatus === 'success' ? 'Saved!' : 'Save Preferences'}
        </button>
        {saveStatus === 'success' && (
          <span className="flex items-center gap-2 text-sm font-medium text-neutral-600 animate-fade-in">
            <Check size={16} />
            Preferences saved
          </span>
        )}
      </footer>
    </div>
  );
}
