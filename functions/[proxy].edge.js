export default async function handler(request, env) {
    const url = new URL(request.url);
    const hostname = url.hostname;
    const blockCrawlingForDomain = env.BLOCK_WEB_CRAWLER_FOR_DOMAIN
    
    // Add header for a specific hostname
    if (hostname === blockCrawlingForDomain || hostname === 'example.domain.com') {
        const response = await fetch(request);

        const modifiedResponse =  new Response(response.body, response)
    
        // Add header to block the crawler
        modifiedResponse.headers.set("X-Robots-Tag", "noindex");
        
        return modifiedResponse;
      
    }
  
    return fetch(request);
  }