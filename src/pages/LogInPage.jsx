import { useState } from "react";
import { useForm } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";
import { NavBar } from "../components/layout";
import { useFormStyles } from "../hooks";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function LogInPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState("");
  const { signIn, isLoggedIn } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // ใช้ useFormStyles hook แทน duplicate styles
  const { getInputClassName, labelStyles, errorStyles, submitButtonStyles } = useFormStyles();

  const onSubmit = async (formData) => {
    setLoginError("");
    const { error } = await signIn({
      email: formData.email,
      password: formData.password,
    });
    if (error) {
      setLoginError("Invalid email or password");
      return;
    }
    navigate("/");
  };

  // ไม่สามารถเข้าถึงหน้า Login ได้หลังจาก login สำเร็จ
  if (isLoggedIn) {
    navigate("/");
    }

  return (
    <div className="flex flex-col">
      {/* NavBar */}
      <NavBar />
      {/* Main */}
      <main className="flex-1 flex justify-center px-4 py-12">
        <section className="flex flex-col justify-between min-h-[50vh] min-w-[350px] w-[65vw] bg-[#EFEEEB] rounded-2xl py-[5vh] px-[5vw] max-w-[798px]">
          {/* Log In Form Title */}
          <h1 className="text-3xl font-bold text-[#1a1a1a] text-center mb-8">
            Log in
          </h1>
          {/* Log In Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-5"
          >
            {/* Email Field */}
            <div className="flex flex-col gap-1">
              <label
                htmlFor="email"
                className={labelStyles}
              >
                Email
              </label>
              {/* Email Input Field */}
              <input
                type="email"
                id="email"
                placeholder="Enter your email address"
                className={getInputClassName(errors.email)}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
              />
              {/* Email Input Field Error */}
              {errors.email && (
                <span className={errorStyles}>
                  {errors.email.message}
                </span>
              )}
            </div>

            {/* Password Field */}
            <div className="flex flex-col gap-1">
              <label
                htmlFor="password"
                className={labelStyles}
              >
                Password
              </label>
              {/* Password Input Field */}
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="Enter your password"
                  className={`${getInputClassName(errors.password)} pr-12`}
                  {...register("password", {
                    required: "Password is required",
                  })}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <EyeOff className="size-5" />
                  ) : (
                    <Eye className="size-5" />
                  )}
                </button>
              </div>
              {/* Password Input Field Error */}
              {errors.password && (
                <span className={errorStyles}>
                  {errors.password.message}
                </span>
              )}
            </div>

            {/* Login Error Message */}
            {loginError && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                {loginError}
              </div>
            )}

            {/* Log In Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={submitButtonStyles}
            >
              {isSubmitting ? "Logging in..." : "Log in"}
            </button>
          </form>

          {/* Log In Footer */}
          <div className="">
            <p className="text-center text-sm text-[#6B7280] mt-7 flex gap-[12px] justify-center">
              <span> Don't have an account? </span>
              <a
                href="/signup"
                className="text-[#1a1a1a] font-medium underline hover:text-[#26231E] transition-colors duration-200"
              >
                Sign up
              </a>
            </p>
          </div>
          {/* <div className="">
            <p className="text-center text-sm text-[#6B7280] mt-7 flex gap-[12px] justify-center">
              <div>
              <span> Demo User Account: </span>
              <span> Email: user@gmail.com </span>
              <span> Password: User123 </span>
              </div>
              <div>
              <span> Demo Admin Account: </span>
                <span> Email: admin@gmail.com </span>
                <span> Password: Admin123 </span>
              </div>
            </p>
          </div> */}
        </section>
      </main>

      {/* Footer */}
      {/* <Footer className="relative bottom w-full" /> */}
    </div>
  );
}
