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
    <div>
      <header className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
          Security Settings
        </h2>
        <p className="text-slate-500">Update your password and security preferences</p>
      </header>

      <section className="mb-8 p-4 bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-xl flex items-start gap-3">
        <Shield size={20} className="text-indigo-600 mt-0.5 flex-shrink-0" />
        <div>
          <p className="text-sm font-semibold text-indigo-900 mb-1">Password Security Tips</p>
          <ul className="text-xs text-indigo-700 space-y-1">
            <li>• Use at least 8 characters</li>
            <li>• Include uppercase and lowercase letters</li>
            <li>• Add numbers and special characters</li>
            <li>• Avoid common words or patterns</li>
          </ul>
        </div>
      </section>

      {formError && (
        <section className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3">
          <AlertCircle size={20} className="text-red-600 mt-0.5 flex-shrink-0" />
          <p className="text-sm font-medium text-red-700">{formError}</p>
        </section>
      )}

      <section className="flex flex-col gap-6 lg:gap-7 mb-8">
        <div className="flex flex-col gap-2">
          <label htmlFor="currentPassword" className="text-sm text-slate-700 font-semibold">
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
              className="w-full px-4 py-3.5 pr-12 border-2 border-slate-200 rounded-xl text-base text-slate-800 bg-white transition-all duration-300 focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-50 placeholder:text-slate-400 hover:border-slate-300"
            />
            <button
              type="button"
              onClick={() => togglePasswordVisibility('current')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
            >
              {showPassword.current ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="newPassword" className="text-sm text-slate-700 font-semibold">
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
              className="w-full px-4 py-3.5 pr-12 border-2 border-slate-200 rounded-xl text-base text-slate-800 bg-white transition-all duration-300 focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-50 placeholder:text-slate-400 hover:border-slate-300"
            />
            <button
              type="button"
              onClick={() => togglePasswordVisibility('new')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
            >
              {showPassword.new ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          {passwordData.newPassword && (
            <div className="mt-2">
              <div className="flex gap-1 mb-2">
                {[1, 2, 3, 4].map((level) => (
                  <div
                    key={level}
                    className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                      level <= passwordStrength ? getPasswordStrengthColor() : 'bg-slate-200'
                    }`}
                  />
                ))}
              </div>
              <p
                className={`text-xs font-medium ${
                  passwordStrength === 1
                    ? 'text-red-600'
                    : passwordStrength === 2
                    ? 'text-orange-600'
                    : passwordStrength === 3
                    ? 'text-yellow-600'
                    : 'text-green-600'
                }`}
              >
                {getPasswordStrengthText() && `Password strength: ${getPasswordStrengthText()}`}
              </p>
            </div>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="confirmPassword" className="text-sm text-slate-700 font-semibold">
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
              className="w-full px-4 py-3.5 pr-12 border-2 border-slate-200 rounded-xl text-base text-slate-800 bg-white transition-all duration-300 focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-50 placeholder:text-slate-400 hover:border-slate-300"
            />
            <button
              type="button"
              onClick={() => togglePasswordVisibility('confirm')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
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
      </section>

      <footer className="flex items-center gap-4">
        <button
          className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white border-none rounded-xl text-base font-semibold cursor-pointer transition-all duration-300 shadow-lg hover:shadow-xl hover:from-indigo-700 hover:to-purple-700 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          onClick={handleChangePassword}
          disabled={saveStatus === 'saving'}
        >
          {saveStatus === 'saving' && (
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          )}
          {saveStatus === 'success' && <Check size={20} />}
          {saveStatus === 'saving' ? 'Updating...' : saveStatus === 'success' ? 'Updated!' : 'Update Password'}
        </button>
        {saveStatus === 'success' && (
          <span className="text-green-600 font-medium text-sm flex items-center gap-2 animate-fade-in">
            <Check size={16} />
            Password updated successfully
          </span>
        )}
      </footer>
    </div>
  );
}
