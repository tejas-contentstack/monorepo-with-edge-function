export default async function handler(request) {
    const url = new URL(request.url);
    const hostname = url.hostname;
  
    // Block requests to 'example.domain.com'
    if (hostname === 'example.domain.com') {
      return new Response('Access to this site is blocked.', { status: 403 })
    }
  
    return fetch(request);
  }