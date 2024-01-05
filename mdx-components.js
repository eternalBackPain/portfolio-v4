// This file is required to use @next/mdx in the `app` directory.
export function useMDXComponents(components) {
    return {
      // Apply Tailwind CSS styling to various MD tags
      h1: ({ children }) => <h1 className="text-3xl font-bold mb-4 tracking-tighter">{children}</h1>,
      h2: ({ children }) => <h2 className="text-2xl font-bold">{children}</h2>,
      h3: ({ children }) => <h3 className="text-xl font-bold mb-2">{children}</h3>,
      h4: ({ children }) => <h4 className="text-lg font-bold mb-1">{children}</h4>,
      h5: ({ children }) => <h5 className="text-base font-medium">{children}</h5>,
      h6: ({ children }) => <h6 className="text-sm font-medium">{children}</h6>,
      p: ({ children }) => <p className="mb-2">{children}</p>,
      ul: ({ children }) => <ul className="list-disc pl-5 mb-4">{children}</ul>,
      ol: ({ children }) => <ol className="list-decimal pl-5 mb-4">{children}</ol>,
      li: ({ children }) => <li className="mb-2">{children}</li>,
      a: ({ children, ...props }) => <a className="text-blue-600 hover:text-blue-800 underline" {...props}>{children}</a>,
      blockquote: ({ children }) => <blockquote className="border-l-4 border-blue-600 italic my-6 pl-4">{children}</blockquote>,
      hr: () => <hr className="my-6 border-t border-gray-300" />,
      // ... add other MD tags as needed
      ...components,
    }
  }