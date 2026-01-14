import { Button } from "../../ui/Button";
import { Link } from "react-router-dom";

export default function SignUpBtn({ BtnName = "Sign Up" }) {
  return (
    <Link to="/signup">
      <Button className="rounded-full border border-[#75716B] bg-[#26231E] text-[16px] font-medium text-white transition-all duration-300 hover:bg-[#43403B] hover:border-[#43403B] hover:shadow-md active:scale-95 active:shadow-sm">
        {BtnName}
      </Button>
    </Link>
  );
}
