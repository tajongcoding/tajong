export const dynamic = 'force-static';

export async function GET() {
  return new Response(`User-agent: *
Allow: /

Sitemap: https://my-local-info.pages.dev/sitemap.xml`, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
