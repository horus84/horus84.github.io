import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context: any) {
  const publications = await getCollection('publications');
  const talks = await getCollection('talks');
  
  const items = [
    ...publications.map(pub => ({
      title: pub.data.title,
      pubDate: new Date(`${pub.data.year}-01-01`),
      description: pub.data.summary,
      link: `/publications`,
    })),
    ...talks.map(talk => {
      const yearMatch = talk.data.date.match(/\d{4}/);
      const year = yearMatch ? yearMatch[0] : '2026';
      return {
        title: talk.data.title,
        pubDate: new Date(`${year}-01-01`),
        description: talk.data.summary,
        link: `/talks`,
      };
    })
  ];

  return rss({
    title: 'Tanishk Tiwari | Research & Academic Updates',
    description: 'Researching structure, memory and meaning in intelligent systems.',
    site: context.site || 'https://tanishktiwari.github.io',
    items: items,
    customData: `<language>en-us</language>`,
  });
}
