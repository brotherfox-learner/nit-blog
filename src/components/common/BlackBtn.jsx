/**
 * BlackBtn - Now uses the reusable AuthButton
 * Following DRY - delegates to shared component
 */

import { SignUpButton } from "./Button";

export default function BlackBtn({ BtnName = "Sign Up" }) {
  return <SignUpButton>{BtnName}</SignUpButton>;
}
