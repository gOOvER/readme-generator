// Cloudflare Worker - Steam API Proxy

export default {
  async fetch(request, env) {
    const url = new URL(request.url)
    
    // API Route für Steam App Details
    if (url.pathname === '/api/steam' && request.method === 'GET') {
      const appId = url.searchParams.get('appid')
      
      if (!appId) {
        return new Response(JSON.stringify({ error: 'Missing appid parameter' }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        })
      }
      
      try {
        // Steam Store API aufrufen
        const steamResponse = await fetch(
          `https://store.steampowered.com/api/appdetails?appids=${appId}&l=english`,
          {
            headers: {
              'Accept': 'application/json',
              'User-Agent': 'PelicanEggsREADMEGenerator/1.0'
            }
          }
        )
        
        const data = await steamResponse.json()
        
        if (!data[appId] || !data[appId].success) {
          return new Response(JSON.stringify({ error: 'App not found', appId }), {
            status: 404,
            headers: { 
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*'
            }
          })
        }
        
        const appData = data[appId].data
        
        // Relevante Daten extrahieren
        const result = {
          appId: appId,
          name: appData.name,
          type: appData.type,
          description: appData.short_description,
          headerImage: appData.header_image,
          website: appData.website,
          developers: appData.developers || [],
          publishers: appData.publishers || [],
          genres: appData.genres?.map(g => g.description) || [],
          categories: appData.categories?.map(c => c.description) || [],
          isFree: appData.is_free,
          platforms: {
            windows: appData.platforms?.windows || false,
            mac: appData.platforms?.mac || false,
            linux: appData.platforms?.linux || false
          },
          storeUrl: `https://store.steampowered.com/app/${appId}`,
          steamDbUrl: `https://steamdb.info/app/${appId}`
        }
        
        return new Response(JSON.stringify(result), {
          headers: { 
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Cache-Control': 'public, max-age=3600' // 1 Stunde cachen
          }
        })
        
      } catch (error) {
        return new Response(JSON.stringify({ error: 'Failed to fetch Steam data', details: error.message }), {
          status: 500,
          headers: { 
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
        })
      }
    }
    
    // CORS Preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type'
        }
      })
    }
    
    // Für alle anderen Requests: Static Assets zurückgeben
    return env.ASSETS.fetch(request)
  }
}
