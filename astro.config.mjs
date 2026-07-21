import { defineConfig } from "astro/config";

// https://astro.build/config
import { unified } from "@astrojs/markdown-remark";

// https://astro.build/config
import mdx from "@astrojs/mdx";

// https://astro.build/config
import remarkMath from "remark-math";

// https://astro.build/config
import rehypeKatex from "rehype-katex";

// https://astro.build/config
import rehypeSlug from "rehype-slug";

// https://astro.build/config
import rehypeAutolinkHeadings from "rehype-autolink-headings";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
import icon from "astro-icon";

import { toString } from "mdast-util-to-string";

// Estimates reading time from the parsed markdown and exposes it to the
// layout as `frontmatter.minutesRead`, at ~200 words per minute.
function remarkReadingTime() {
  return (tree, { data }) => {
    const words = toString(tree).trim().split(/\s+/).filter(Boolean).length;
    const minutes = Math.max(1, Math.round(words / 200));
    data.astro.frontmatter.minutesRead = `${minutes} min read`;
  };
}

// https://astro.build/config
export default defineConfig({
  site: "https://kilpatrick.co.uk",
  base: "",
  prefetch: true,
  integrations: [mdx(), sitemap(), icon()],
  markdown: {
    processor: unified({
      remarkPlugins: [remarkMath, remarkReadingTime],
      rehypePlugins: [rehypeKatex, rehypeSlug, rehypeAutolinkHeadings],
      remarkRehype: {
        footnoteLabel: "References",
      },
    }),
    shikiConfig: {
      theme: "dracula",
    },
  },
});
