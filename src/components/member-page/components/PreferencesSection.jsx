import { Bell, Globe, Moon, Zap, Check } from 'lucide-react';

export default function PreferencesSection({
  formData,
  saveStatus,
  handleInputChange,
  handleSave
}) {
  return (
    <div>
      <header className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
          Preferences (Coming Soon)
        </h2>
        <p className="text-slate-500">Customize your experience and settings</p>
      </header>

      <section className="space-y-4 mb-10">
        <article className="flex items-center justify-between p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl border border-indigo-100">
          <div className="flex items-center gap-3">
            <Bell size={20} className="text-indigo-600" />
            <div>
              <p className="text-sm font-semibold text-slate-800">Email Notifications</p>
              <p className="text-xs text-slate-500">Receive updates about your account</p>
            </div>
          </div>
          <label className="relative inline-block w-12 h-6 cursor-pointer">
            <input
              type="checkbox"
              name="notifications"
              checked={formData.notifications}
              onChange={handleInputChange}
              className="sr-only peer"
            />
            <div className="w-12 h-6 bg-slate-300 rounded-full peer peer-checked:bg-indigo-600 transition-all duration-300"></div>
            <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-all duration-300 peer-checked:translate-x-6 shadow-md"></div>
          </label>
        </article>

        <div className="flex flex-col gap-2">
          <label htmlFor="language" className="text-sm text-slate-700 font-semibold flex items-center gap-2">
            <Globe size={16} className="text-purple-600" />
            Language
          </label>
          <select
            id="language"
            name="language"
            value={formData.language}
            onChange={handleInputChange}
            className="px-4 py-3.5 border-2 border-slate-200 rounded-xl text-base text-slate-800 bg-white transition-all duration-300 focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-50 hover:border-slate-300 cursor-pointer"
          >
            <option value="en">English</option>
            <option value="th">ไทย (Thai)</option>
            <option value="ja">日本語 (Japanese)</option>
            <option value="zh">中文 (Chinese)</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="theme" className="text-sm text-slate-700 font-semibold flex items-center gap-2">
            <Moon size={16} className="text-purple-600" />
            Theme
          </label>
          <select
            id="theme"
            name="theme"
            value={formData.theme}
            onChange={handleInputChange}
            className="px-4 py-3.5 border-2 border-slate-200 rounded-xl text-base text-slate-800 bg-white transition-all duration-300 focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-50 hover:border-slate-300 cursor-pointer"
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="auto">Auto</option>
          </select>
        </div>

        <article className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-100">
          <div className="flex items-center gap-3">
            <Zap size={20} className="text-purple-600" />
            <div>
              <p className="text-sm font-semibold text-slate-800">Auto-save drafts</p>
              <p className="text-xs text-slate-500">Automatically save your work</p>
            </div>
          </div>
          <label className="relative inline-block w-12 h-6 cursor-pointer">
            <input
              type="checkbox"
              name="autoSave"
              checked={formData.autoSave}
              onChange={handleInputChange}
              className="sr-only peer"
            />
            <div className="w-12 h-6 bg-slate-300 rounded-full peer peer-checked:bg-purple-600 transition-all duration-300"></div>
            <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-all duration-300 peer-checked:translate-x-6 shadow-md"></div>
          </label>
        </article>
      </section>

      <footer className="flex items-center gap-4">
        <button
          className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white border-none rounded-xl text-base font-semibold cursor-pointer transition-all duration-300 shadow-lg hover:shadow-xl hover:from-indigo-700 hover:to-purple-700 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          onClick={handleSave}
          disabled={saveStatus === 'saving'}
        >
          {saveStatus === 'saving' && (
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          )}
          {saveStatus === 'success' && <Check size={20} />}
          {saveStatus === 'saving' ? 'Saving...' : saveStatus === 'success' ? 'Saved!' : 'Save Preferences'}
        </button>
        {saveStatus === 'success' && (
          <span className="text-green-600 font-medium text-sm flex items-center gap-2 animate-fade-in">
            <Check size={16} />
            Preferences saved
          </span>
        )}
      </footer>
    </div>
  );
}
