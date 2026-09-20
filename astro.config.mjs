import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Tabellen aus Markdown in einen Scroll-Container wrappen, damit sie auf schmalen
// Viewports horizontal scrollen statt die Seite zu verbreitern (CSS: BlogPost.astro).
function tabellenScroll() {
  return (tree) => {
    const walk = (node) => {
      if (!node.children) return;
      node.children = node.children.map((child) => {
        if (child.type === 'element' && child.tagName === 'table') {
          return { type: 'element', tagName: 'div', properties: { className: ['tabelle-scroll'] }, children: [child] };
        }
        walk(child);
        return child;
      });
    };
    walk(tree);
  };
}

export default defineConfig({
  site: 'https://schattel.at',
  integrations: [sitemap()],
  markdown: { rehypePlugins: [tabellenScroll] }
});
