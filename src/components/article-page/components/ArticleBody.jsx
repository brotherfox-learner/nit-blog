export default function ArticleBody({ description, sections }) {
  return (
    <>
      {/* Description */}
      <p className="text-lg text-stone-600 leading-relaxed mt-4 mb-10 border-l-4 border-amber-400 pl-6 italic">
        {description}
      </p>

      {/* Article Sections */}
      <section className="space-y-10">
        {sections.map((section) => (
          <section key={section.id} className="space-y-4">
            <h2 className="font-poppins text-xl md:text-2xl font-semibold text-stone-800 pb-2 border-b-2 border-amber-300">
              {section.id}. {section.heading}
            </h2>
            
            {section.content.split("\n\n").map((paragraph, idx) => (
              <p
                key={idx}
                className="font-poppins text-base md:text-lg text-stone-700 leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
            
            {section.listItems && (
              <ul className="space-y-3 mt-6">
                {section.listItems.map((item, idx) => (
                  <li
                    key={idx}
                    className="bg-gradient-to-r from-amber-50 to-stone-50 p-4 rounded-lg border-l-4 border-amber-500 hover:translate-x-1 hover:shadow-md transition-all duration-200"
                  >
                    <strong className="font-poppins font-semibold text-amber-800">
                      {item.term}:
                    </strong>{" "}
                    <span className="font-poppins text-sm text-stone-600 leading-relaxed">
                      {item.description}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </section>
    </>
  );
}

