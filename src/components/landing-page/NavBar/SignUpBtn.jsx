import { Button } from "../../ui/Button";

export default function SignUpBtn({BtnName = "Sign Up"}) {
  return (
    <Button className="rounded-full border border-[#75716B] bg-[#26231E] text-[16px] font-medium text-white">
      {BtnName}
    </Button>
  );
}

