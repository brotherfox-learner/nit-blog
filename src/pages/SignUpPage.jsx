import { useForm } from "react-hook-form";
import { NavBar } from "../components/layout";
import { useFormStyles } from "../hooks";

export default function SignUpPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      name: "",
      username: "",
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
      <main className="flex-1 flex justify-center px-4 py-12 ">
        <section className="min-h-[70vh] min-w-[350px] w-[65vw] bg-[#EFEEEB] rounded-2xl py-[5vh] px-[5vw] max-w-[798px]">
          {/* Sign Up Form Title */}
          <h1 className="text-3xl font-bold text-[#1a1a1a] text-center mb-8">
            Sign up
          </h1>
          {/* Sign up Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-5"
          >
            {/* Name Field */}
            <div className="flex flex-col gap-1">
              <label
                htmlFor="name"
                className={labelStyles}
              >
                Name
              </label>
              {/* Name Input Field */}
              <input
                type="text"
                id="name"
                placeholder="Enter your full name"
                className={getInputClassName(errors.name)}
                {...register("name", {
                  required: "Name is required",
                  minLength: {
                    value: 4,
                    message: "Name must be at least 4 characters",
                  },
                })}
              />
              {/* Name Input Field Error */}
              {errors.name && (
                <span className={errorStyles}>
                  {errors.name.message}
                </span>
              )}
            </div>

            {/* Username Field */}
            <div className="flex flex-col gap-1">
              <label
                htmlFor="username"
                className={labelStyles}
              >
                Username
              </label>
              {/* Username Input Field */}
              <input
                type="text"
                id="username"
                placeholder="Enter your username"
                className={getInputClassName(errors.username)}
                {...register("username", {
                  required: "Username is required",
                  minLength: {
                    value: 6,
                    message: "Username must be at least 6 characters",
                  },
                  pattern: {
                    value: /^[a-zA-Z0-9_]+$/,
                    message:
                      "Username can only contain letters, numbers, and underscores",
                  },
                })}
              />
              {/* Username Input Field Error */}
              {errors.username && (
                <span className={errorStyles}>
                  {errors.username.message}
                </span>
              )}
            </div>

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

            {/* Sign Up Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={submitButtonStyles}
            >
              {isSubmitting ? "Signing up..." : "Sign up"}
            </button>
          </form>

          {/* Sign Up Footer */}
          <p className="text-center text-sm text-[#6B7280] mt-10">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-[#1a1a1a] font-medium underline hover:text-[#26231E] transition-colors duration-200"
            >
              Log in
            </a>
          </p>
        </section>
      </main>

      {/* Footer */}
      {/* <Footer className="relative bottom w-full" /> */}
    </div>
  );
}
