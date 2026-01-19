import { useForm } from "react-hook-form";
import { NavBar } from "../components/layout";
import { useFormStyles } from "../hooks";

export default function LogInPage() {
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

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
  };

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
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className={getInputClassName(errors.password)}
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters",
                  },
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
                    message:
                      "Password must contain uppercase, lowercase, and number",
                  },
                })}
              />
              {/* Password Input Field Error */}
              {errors.password && (
                <span className={errorStyles}>
                  {errors.password.message}
                </span>
              )}
            </div>

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
        </section>
      </main>

      {/* Footer */}
      {/* <Footer className="relative bottom w-full" /> */}
    </div>
  );
}
