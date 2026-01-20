import { ARTICLECONTENT_COLORS } from "@/constants/design";

// Parse markdown content from API
function parseMarkdownContent(content) {
  if (!content) return [];
  
  // Split by section headers (## 1. Title format)
  const sections = content.split(/(?=## \d+\.\s)/);
  return sections
    .filter(section => section.trim())
    .map((section) => {
      // Extract section number and title
      const titleMatch = section.match(/^## (\d+)\.\s(.+?)(?:\n|$)/);
      if (!titleMatch) return null;

      const [, number, title] = titleMatch;
      // Extract content (everything after the title)
      const contentText = section
        .replace(/^## \d+\.\s.+?\n/, '')
        .trim();
      return {
        id: parseInt(number),
        heading: title.trim(),
        content: contentText
      };
    })
    .filter(Boolean);
}

export default function ArticleBody({ description, content, category }) {
  // Parse the markdown content from API
  const sections = parseMarkdownContent(content);

  // Get colors based on category
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
        {sections.map((section) => (
          <section key={section.id} className="space-y-4">
            <h2 className={`font-poppins text-xl md:text-2xl font-semibold ${colors.headingText} pb-2 border-b-2 ${colors.headingBorder}`}>
              {section.id}. {section.heading}
            </h2>
            
            {section.content.split("\n\n").map((paragraph, idx) => (
              <p
                key={idx}
                className={`font-poppins text-base md:text-lg ${colors.bodyText} leading-relaxed`}
              >
                {paragraph}
              </p>
            ))}
          </section>
        ))}
      </section>
    </>
  );
}

//เอาไป Render ใน ArticleContent.jsx