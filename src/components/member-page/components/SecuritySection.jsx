import { Shield, Eye, EyeOff, Check, X, AlertCircle } from 'lucide-react';

export default function SecuritySection({
  passwordData,
  showPassword,
  passwordStrength,
  saveStatus,
  formError,
  handlePasswordChange,
  togglePasswordVisibility,
  handleChangePassword,
  getPasswordStrengthColor,
  getPasswordStrengthText
}) {
  return (
    <div className="space-y-8">
      <header className="border-b border-neutral-100 pb-5">
        <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-400">
          Protection
        </p>
        <h2 className="mb-2 text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
          Security Settings
        </h2>
        <p className="max-w-2xl text-[0.98rem] leading-relaxed text-neutral-500">
          Update your password and security preferences
        </p>
      </header>

      <section className="flex items-start gap-3 rounded-2xl border border-neutral-100 bg-neutral-50/80 p-5">
        <Shield size={20} className="mt-0.5 shrink-0 text-neutral-500" />
        <div>
          <p className="mb-1 text-sm font-medium text-neutral-900">Password Security Tips</p>
          <ul className="space-y-1 text-xs text-neutral-500">
            <li>Use at least 8 characters</li>
            <li>Include uppercase and lowercase letters</li>
            <li>Add numbers and special characters</li>
            <li>Avoid common words or predictable patterns</li>
          </ul>
        </div>
      </section>

      {formError && (
        <section className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4">
          <AlertCircle size={20} className="mt-0.5 shrink-0 text-red-600" />
          <p className="text-sm font-medium text-red-700">{formError}</p>
        </section>
      )}

      <section className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-8">
        <div className="flex flex-col gap-6 lg:gap-7">
          <div className="flex flex-col gap-2">
            <label htmlFor="currentPassword" className="text-sm font-medium text-neutral-800">
              Current Password
            </label>
            <div className="relative">
              <input
                type={showPassword.current ? 'text' : 'password'}
                id="currentPassword"
                name="currentPassword"
                value={passwordData.currentPassword}
                onChange={handlePasswordChange}
                placeholder="Enter current password"
                className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3.5 pr-12 text-base text-neutral-900 transition-all duration-200 placeholder:text-neutral-400 hover:border-neutral-300 focus:border-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-100"
              />
              <button
                type="button"
                onClick={() => togglePasswordVisibility('current')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 transition-colors hover:text-neutral-600"
              >
                {showPassword.current ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="newPassword" className="text-sm font-medium text-neutral-800">
              New Password
            </label>
            <div className="relative">
              <input
                type={showPassword.new ? 'text' : 'password'}
                id="newPassword"
                name="newPassword"
                value={passwordData.newPassword}
                onChange={handlePasswordChange}
                placeholder="Enter new password"
                className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3.5 pr-12 text-base text-neutral-900 transition-all duration-200 placeholder:text-neutral-400 hover:border-neutral-300 focus:border-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-100"
              />
              <button
                type="button"
                onClick={() => togglePasswordVisibility('new')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 transition-colors hover:text-neutral-600"
              >
                {showPassword.new ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {passwordData.newPassword && (
              <div className="mt-2 rounded-2xl border border-neutral-100 bg-neutral-50/80 p-4">
                <div className="mb-2 flex items-center justify-between gap-3">
                  <span className="text-xs font-medium uppercase tracking-[0.14em] text-neutral-400">Strength</span>
                  <span
                    className={`text-xs font-semibold ${
                      passwordStrength === 1
                        ? 'text-red-600'
                        : passwordStrength === 2
                        ? 'text-orange-600'
                        : passwordStrength === 3
                        ? 'text-yellow-700'
                        : 'text-green-600'
                    }`}
                  >
                    {getPasswordStrengthText()}
                  </span>
                </div>
                <div className="mb-2 flex gap-1">
                  {[1, 2, 3, 4].map((level) => (
                    <div
                      key={level}
                      className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                        level <= passwordStrength ? getPasswordStrengthColor() : 'bg-neutral-200'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-xs leading-relaxed text-neutral-500">
                  Use a long passphrase or mix letters, numbers, and symbols for better protection.
                </p>
              </div>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="confirmPassword" className="text-sm font-medium text-neutral-800">
              Confirm New Password
            </label>
            <div className="relative">
              <input
                type={showPassword.confirm ? 'text' : 'password'}
                id="confirmPassword"
                name="confirmPassword"
                value={passwordData.confirmPassword}
                onChange={handlePasswordChange}
                placeholder="Confirm new password"
                className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3.5 pr-12 text-base text-neutral-900 transition-all duration-200 placeholder:text-neutral-400 hover:border-neutral-300 focus:border-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-100"
              />
              <button
                type="button"
                onClick={() => togglePasswordVisibility('confirm')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 transition-colors hover:text-neutral-600"
              >
                {showPassword.confirm ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {passwordData.confirmPassword && (
              <div className="mt-1 flex items-center gap-2">
                {passwordData.newPassword === passwordData.confirmPassword ? (
                  <>
                    <Check size={16} className="text-green-600" />
                    <p className="text-xs font-medium text-green-600">Passwords match</p>
                  </>
                ) : (
                  <>
                    <X size={16} className="text-red-600" />
                    <p className="text-xs font-medium text-red-600">Passwords do not match</p>
                  </>
                )}
              </div>
            )}
          </div>
        </div>

        <aside className="rounded-2xl border border-neutral-100 bg-neutral-50/60 p-5">
          <h3 className="mb-4 text-sm font-medium uppercase tracking-[0.14em] text-neutral-400">Checklist</h3>
          <div className="space-y-3">
            <div className="rounded-xl border border-neutral-100 bg-white p-4 shadow-sm">
              <p className="text-sm font-medium text-neutral-900">Current password</p>
              <p className="mt-1 text-xs leading-relaxed text-neutral-500">Needed before we allow a password update.</p>
            </div>
            <div className="rounded-xl border border-neutral-100 bg-white p-4 shadow-sm">
              <p className="text-sm font-medium text-neutral-900">Strong replacement</p>
              <p className="mt-1 text-xs leading-relaxed text-neutral-500">Aim for at least medium or strong strength before saving.</p>
            </div>
            <div className="rounded-xl border border-neutral-100 bg-white p-4 shadow-sm">
              <p className="text-sm font-medium text-neutral-900">Exact confirmation</p>
              <p className="mt-1 text-xs leading-relaxed text-neutral-500">Both new password fields need to match exactly.</p>
            </div>
          </div>
        </aside>
      </section>

      <footer className="flex flex-col gap-4 border-t border-neutral-100 pt-6 sm:flex-row sm:items-center">
        <button
          className="flex items-center gap-2 rounded-xl bg-neutral-900 px-8 py-4 text-base font-medium text-white shadow-sm transition-all duration-200 hover:bg-neutral-800 active:translate-y-px disabled:cursor-not-allowed disabled:opacity-50"
          onClick={handleChangePassword}
          disabled={saveStatus === 'saving'}
        >
          {saveStatus === 'saving' && (
            <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
          )}
          {saveStatus === 'success' && <Check size={20} />}
          {saveStatus === 'saving' ? 'Updating...' : saveStatus === 'success' ? 'Updated!' : 'Update Password'}
        </button>
        {saveStatus === 'success' && (
          <span className="flex items-center gap-2 text-sm font-medium text-neutral-600 animate-fade-in">
            <Check size={16} />
            Password updated successfully
          </span>
        )}
      </footer>
    </div>
  );
}
