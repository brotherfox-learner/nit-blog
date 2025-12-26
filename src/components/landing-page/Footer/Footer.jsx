import { SocialIcon } from "@/components/common";

export default function Footer() {
  return (
    <footer className="font-poppins font-medium flex flex-col items-center justify-center mt-[48px] pt-[48px] pb-[32px] bg-[#EFEEEB] min-[1440px]:flex-row min-[1440px]:justify-between min-[1440px]:items-center min-[1440px]:px-[120px]">
        <div className="flex items-center gap-6">
            <div className="font-poppins font-medium text-[#43403B]">Get in touch</div>
            <div className="flex items-center gap-[16px]">
                <div className="w-6 h-6 rounded-full bg-[#43403B] flex items-center justify-center">
                    <SocialIcon type='linkedin' size={24} className="text-white" />
                </div>
                <div className="w-6 h-6 rounded-full flex items-center justify-center">
                    <SocialIcon type='github' size={24} className="text-[#43403B]" />
                </div>
                <div className="w-6 h-6 rounded-full bg-[#43403B] flex items-center justify-center">
                    <SocialIcon type='google' size={24} className="text-white" />
                </div>
            </div>
        </div>
        <div className="font-poppins font-medium text-center mt-6 underline">
            Home page
        </div>
    </footer>
  );
}