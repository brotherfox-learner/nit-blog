import { Button } from "../../ui/Button";
import { Link } from "react-router-dom";

export default function LogInBtn() {
  return (
    <Link to="/login">
      <Button className="rounded-full border border-[#75716B] bg-[#FFFFFF] text-[16px] font-medium text-black transition-all duration-300 hover:bg-[#F5F5F5] hover:border-[#DAD6D1] hover:shadow-md active:scale-95 active:shadow-sm">
        Log In
      </Button>
    </Link>
  );
}
