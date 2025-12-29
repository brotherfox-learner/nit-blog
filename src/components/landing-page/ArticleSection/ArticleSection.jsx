import { SearchBox } from "../../common/SearchBox";
import { SelectBar } from "../../common/SelectBar";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/Button";

export default function ArticleSection() {
  const categories = ["Highlight", "Cat", "Inspiration", "General"];

  return (
    <section className="flex flex-col gap-[16px] py-[16px] min-[1280px]:px-[120px] min-[1280px]:h-[144px]">
      <h2 className="font-semibold text-[24px] leading-[32px] text-[#26231E] pl-[16px] min-[1280px]:pl-0">
        Latest articles
      </h2>
      <div className="flex flex-col gap-[16px] bg-[#EFEEEB] p-[16px] rounded-md min-[1280px]:flex-row-reverse min-[1280px]:items-end min-[1280px]:gap-[16px]  min-[1280px]:justify-between box-sizing: border-box min-[1280px]:h-[80px]">
        {/* SearchBox */}
        <div className="flex min-[1280px]:w-[360px] ">
          <SearchBox />
        </div>
        {/* Mobile: SelectBar */}
        <div className="flex flex-col gap-[4px] min-[1280px]:hidden">
          <Label
            htmlFor="category"
            className="font-medium text-[14px] leading-[20px] text-[#75716B]"
          >
            Category
          </Label>
          <SelectBar
            className="text-[#75716B]"
            placeholder="Highlight"
            id="category"
            items={categories}
            label="Category"
          />
        </div>
        {/* Desktop: Category Buttons */}
        <div className="hidden min-[1280px]:flex min-[1280px]:items-center min-[1280px]:gap-[8px]">
          {categories.map((category) => (
            <Button
              key={category}
              variant="ghost"
              className="font-medium text-[16px] leading-[24px] text-[#75716B] bg-transparent border-0 hover:bg-[#DAD6D1] hover:text-[#43403B] rounded-[8px] h-[48px] px-4 transition-all duration-300 ease-in-out"
            >
              {category}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}
