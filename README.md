# ForgeUI

ForgeUI is a modular, utility-first design system built on top of [Tailwind CSS](https://tailwindcss.com). Inspired by tools like [TailwindUI](https://tailwindui.com) and [Flowbite](https://flowbite.com), ForgeUI aims to provide a comprehensive library of pre-built, customizable components for modern web applications. It is suited for building marketing sites, SaaS dashboards, and e-commerce platforms.

---

## Table of Contents

- [ForgeUI](#forgeui)
  - [Table of Contents](#table-of-contents)
  - [Project Overview](#project-overview)
  - [Getting Started](#getting-started)
    - [Recommended Steps](#recommended-steps)
  - [Tailwind CSS Configuration](#tailwind-css-configuration)
  - [How to Use the Components](#how-to-use-the-components)
    - [Example: Button Snippet](#example-button-snippet)
  - [FAQs \& Troubleshooting](#faqs--troubleshooting)
  - [License](#license)
    - [Contributing](#contributing)

---

## Project Overview

- **Modular and Customizable**: ForgeUI provides a set of React-friendly component patterns styled with a custom Tailwind CSS configuration. You can copy these snippets directly into your project and customize as needed.
- **Utility-First**: Leverages Tailwind’s utility classes for rapid UI development, making it straightforward to build complex layouts and components.
- **Accessibility Focus**: Accessibility best practices are baked in to ensure your projects are usable by a broad range of people.
- **Responsive**: All components are built with responsive design principles, ensuring that your application looks great on every device.
- **Built with Next.js**: ForgeUI integrates naturally with [Next.js](https://nextjs.org) for optimal performance and developer experience.

---

## Getting Started

At this time, ForgeUI is **not** available as an installable package on npm (or other registries). Instead, you can browse our component examples (similar to [Tailwind UI](https://tailwindui.com)) and **copy the code snippets** directly into your Next.js project.

### Recommended Steps

1. **Set Up a Next.js + Tailwind Project**  
   If you haven't already, create a Next.js application and configure it with Tailwind CSS. Refer to the official [Next.js + Tailwind CSS documentation](https://tailwindcss.com/docs/guides/nextjs) for guidance.

2. **Integrate ForgeUI Snippets**

- Visit our component library documentation (or any shared snippets).
- Copy the desired component’s code snippet.
- Paste it into your own React components or pages.

3. **Customize to Fit Your Branding**

- Adjust class names, color tokens, or responsive breakpoints.
- Make sure your Tailwind config includes the ForgeUI colors (or define your own).

---

## Tailwind CSS Configuration

Because ForgeUI uses a custom color palette and extended utilities, you’ll want to update your **tailwind.config.js** (or **tailwind.config.cjs**) to match ForgeUI’s recommended settings. Below is an example configuration:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    // Include any additional paths where you might place your ForgeUI snippets
  ],
  theme: {
    extend: {
      colors: {
        // Example color palette for ForgeUI
        "forge-primary": "#3B82F6",
        "forge-secondary": "#6366F1",
        "forge-accent-charcoal": "#374151",
        "forge-background": "#F3F4F6",
      },
      // Extend other design tokens (fonts, spacing, etc.) as needed
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    // Include any additional plugins
  ],
};
```

> **Tip**: If you wish to rename or alter these colors, feel free to do so in this file. Then replace any references in your copied ForgeUI snippets accordingly.

---

## How to Use the Components

Since ForgeUI does not ship as a package, the usage model is simple: **copy the component code** from our documentation into your project.

1.  **Open the ForgeUI component library** (or the snippets you’ve been provided).
2.  **Copy** the relevant JSX and Tailwind classes.
3.  **Paste** into your own React/Next.js files.
4.  **Customize** as needed:
    - Update text, titles, and icons.
    - Modify Tailwind utility classes to suit your layout or color scheme.
    - Implement your own logic for onClick, state management, etc.

### Example: Button Snippet

```tsx
// Example: forgeui-button.tsx
// This is a snippet you might copy from ForgeUI documentation.

import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  onClick?: () => void;
}

export function ForgeButton({
  children,
  variant = "primary",
  onClick,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center px-4 py-2 font-semibold rounded shadow-sm focus:outline-none";
  const variantClasses =
    variant === "primary"
      ? "bg-forge-primary text-white hover:bg-blue-600"
      : "bg-forge-secondary text-white hover:bg-indigo-600";

  return (
    <button className={`${baseStyles} ${variantClasses}`} onClick={onClick}>
      {children}
    </button>
  );
}
```

You can then import and use this snippet in your Next.js pages or components:

```tsx
// pages/index.tsx
import React from "react";
import { ForgeButton } from "../components/forgeui-button";

export default function HomePage() {
  return (
    <main className="p-8">
      <ForgeButton variant="primary" onClick={() => alert("Button clicked!")}>
        Click Me
      </ForgeButton>
    </main>
  );
}
```

---

## FAQs & Troubleshooting

1.  **Why aren’t my ForgeUI styles appearing?**  
    Make sure your Tailwind CSS configuration’s `content` array includes the paths to your snippets. Also confirm you have restarted your development server after any changes.
2.  **Can I override the default ForgeUI color palette?**  
    Absolutely. In your `theme.extend.colors` section, you can add or replace color tokens. Just remember to update your copied snippets to reference your custom tokens if the names differ.
3.  **How do I handle class name conflicts?**  
    If you encounter class name conflicts, ensure your Tailwind config is set up correctly and you’re not re-declaring the same utility classes in conflicting ways.
4.  **Are ForgeUI components accessible?**  
    Accessibility is a core focus. We encourage you to provide semantic HTML, appropriate ARIA attributes, and follow best practices when customizing your copied snippets.
5.  **Will ForgeUI be available as an npm package in the future?**  
    We plan to provide an npm package at a later stage. Currently, all components must be manually copied from the ForgeUI docs.

---

## License

ForgeUI is a **proprietary design system** and is not open-source. While ForgeUI leverages [Tailwind CSS](https://tailwindcss.com), which is open-source under the [MIT License](https://github.com/tailwindlabs/tailwindcss/blob/master/LICENSE), ForgeUI itself is distributed under a proprietary license.

- **Proprietary License**: You may use ForgeUI’s design and component snippets only with explicit permission from the ForgeUI team or under the terms of your ForgeUI license.
- **Tailwind CSS**: All Tailwind CSS and related plugins remain under their respective licenses (e.g., MIT).

For any questions about licensing, usage rights, or if you need a formal license for commercial or extended usage, please contact us at support@forgeui.com.

---

### Contributing

We value feedback and welcome your suggestions to make ForgeUI better. However, because ForgeUI is proprietary, please **contact us** before contributing code. For bugs or feature requests, reach out via email or our private repository issue tracker.

Thank you for choosing **ForgeUI**! We hope our snippets help accelerate your Next.js + Tailwind CSS development.
