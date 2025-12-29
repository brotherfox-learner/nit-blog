import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export function SearchBox({type="text", placeholder="Search"}) {
  return (
    <div className="relative w-full">
      <Input 
        type={type} 
        placeholder={placeholder}
        className="pr-10 rounded-[8px] bg-white placeholder:font-medium placeholder:text-[16px] placeholder:leading-[24px] placeholder:text-[#75716B] min-[1440px]:h-[48px]"
      />
      <Search className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-[#43403B] pointer-events-none" />
    </div>
  )
}
  