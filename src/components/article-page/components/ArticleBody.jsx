import { ARTICLECONTENT_COLORS } from "@/constants/design";

/**
 * Parse markdown content ในรูปแบบ ## N. Title\nBody
 * รองรับทั้งกรณีมี newline และไม่มี newline ระหว่าง section
 */
function parseMarkdownContent(content) {
  if (!content) return [];

  // Normalize line endings
  const text = content.replace(/\r\n/g, "\n").replace(/\r/g, "\n");

  // ถ้าไม่มี pattern ## N. เลย ให้ return [] เพื่อใช้ fallback render
  if (!/##\s*\d+\.\s/.test(text)) return [];

  // ใช้ exec loop เพื่อจับแต่ละ section: ## N. (body) จนกว่าจะเจอ ## ถัดไปหรือจบ string
  const sectionRegex = /##\s*(\d+)\.\s*([\s\S]*?)(?=\s*##\s*\d+\.\s|$)/g;
  const sections = [];
  let match;

  while ((match = sectionRegex.exec(text)) !== null) {
    const number = parseInt(match[1]);
    const body = match[2].trim();
    if (!body) continue;

    // พยายามแยก heading กับ content ด้วย newline ตัวแรก
    const nlIdx = body.indexOf("\n");

    if (nlIdx !== -1) {
      // มี newline: บรรทัดแรกเป็น heading, ที่เหลือเป็น content
      sections.push({
        id: number,
        heading: body.substring(0, nlIdx).trim(),
        content: body.substring(nlIdx + 1).trim(),
      });
    } else {
      // ไม่มี newline: ใช้ทั้งหมดเป็น content, ไม่มี heading แยก
      sections.push({
        id: number,
        heading: "",
        content: body,
      });
    }
  }

  return sections;
}

export default function ArticleBody({ description, content, category }) {
  const sections = parseMarkdownContent(content);

  const colors = ARTICLECONTENT_COLORS[category] || ARTICLECONTENT_COLORS.default;

  return (
    <>
      {/* Description */}
      {description && (
        <p className={`text-lg text-stone-600 leading-relaxed mt-4 mb-10 border-l-4 ${colors.descriptionBorder} pl-6 italic`}>
          {description}
        </p>
      )}

      {/* Article Sections */}
      <section className="space-y-10">
        {sections.length > 0 ? (
          sections.map((section) => (
            <section key={section.id} className="space-y-4">
              {section.heading && (
                <h2 className={`font-poppins text-xl md:text-2xl font-semibold ${colors.headingText} pb-2 border-b-2 ${colors.headingBorder}`}>
                  {section.id}. {section.heading}
                </h2>
              )}

              {section.content &&
                section.content.split(/\n\n+/).map((paragraph, idx) => (
                  <p
                    key={idx}
                    className={`font-poppins text-base md:text-lg ${colors.bodyText} leading-relaxed`}
                  >
                    {paragraph}
                  </p>
                ))}
            </section>
          ))
        ) : (
          content &&
            content.split(/\n\n+|\n/).filter(Boolean).map((paragraph, idx) => (
              <p
                key={idx}
                className={`font-poppins text-base md:text-lg ${colors.bodyText} leading-relaxed`}
              >
                {paragraph}
              </p>
            ))
        )}
      </section>
    </>
  );
}