/**
 * useFormStyles - จัดการ input styles ที่ใช้ซ้ำกันใน LogInPage และ SignUpPage
 * ตาม DRY principle - define once, use everywhere
 */
export function useFormStyles() {
  // Base input styles
  const inputBaseStyles =
    "w-full px-4 py-3 bg-white border rounded-lg text-[#1a1a1a] placeholder-[#9CA3AF] focus:outline-none focus:ring-1 transition-all duration-200";
  
  // Normal state styles
  const inputNormalStyles =
    "border-[#E5E5E5] focus:border-[#26231E] focus:ring-[#26231E]";
  
  // Error state styles
  const inputErrorStyles =
    "border-red-500 focus:border-red-500 focus:ring-red-500";

  // Helper function สำหรับรวม class ตาม error state
  const getInputClassName = (hasError) => {
    return `${inputBaseStyles} ${hasError ? inputErrorStyles : inputNormalStyles}`;
  };

  // Label styles
  const labelStyles = "text-sm font-medium text-[#1a1a1a]";

  // Error message styles
  const errorStyles = "text-red-500 text-xs mt-1";

  // Submit button styles
  const submitButtonStyles =
    "w-[160px] mx-auto mt-4 py-3 bg-[#26231E] text-white font-semibold rounded-full hover:bg-[#3a362e] transition-colors duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";

  // Form container styles
  const formContainerStyles = "flex flex-col gap-5";

  // Field wrapper styles
  const fieldWrapperStyles = "flex flex-col gap-1";

  return {
    inputBaseStyles,
    inputNormalStyles,
    inputErrorStyles,
    getInputClassName,
    labelStyles,
    errorStyles,
    submitButtonStyles,
    formContainerStyles,
    fieldWrapperStyles,
  };
}

// Export constants สำหรับใช้งานโดยตรงโดยไม่ต้องเรียก hook
export const FORM_STYLES = {
  inputBase:
    "w-full px-4 py-3 bg-white border rounded-lg text-[#1a1a1a] placeholder-[#9CA3AF] focus:outline-none focus:ring-1 transition-all duration-200",
  inputNormal:
    "border-[#E5E5E5] focus:border-[#26231E] focus:ring-[#26231E]",
  inputError:
    "border-red-500 focus:border-red-500 focus:ring-red-500",
  label: "text-sm font-medium text-[#1a1a1a]",
  error: "text-red-500 text-xs mt-1",
  submitButton:
    "w-[160px] mx-auto mt-4 py-3 bg-[#26231E] text-white font-semibold rounded-full hover:bg-[#3a362e] transition-colors duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
};
