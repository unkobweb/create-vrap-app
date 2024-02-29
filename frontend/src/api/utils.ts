export const baseUrls: any = {
  development: 'http://localhost:3333',
  staging: 'YOUR_STAGING_API_URL_HERE',
  production: 'YOUR_PRODUCTION_API_URL_HERE',
}

export const fetcher = <T>(...args: Parameters<typeof fetch>): Promise<T> => {
  // set base url here
  const baseUrl = baseUrls[process.env.NODE_ENV!] ?? "http://localhost:3333"

  // add content type header
  args[1] = {
    ...args[1],
    headers: {
      ...args[1]?.headers,
      'Content-Type': 'application/json',
    }
  }

  // if code is 401 or 500, throw error
  return fetch(baseUrl + args[0], args[1])
    .then(res => res.json())
}