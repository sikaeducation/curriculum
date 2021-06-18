# HTTP CORS

When a browser makes an HTTP request with something like `fetch`, by default it will only make that request to a URL on the same domain for security reasons. This is pretty restrictive- it means a website can't use any third-party API, or even an API that's on a different subdomain.

Meanwhile, APIs often have a need to restrict which sites can make requests to them. If another server is requesting data from the API, you can block the IP address. That strategy doesn't work with browsers, because all an attacker would need to do is go to a different wifi hotspot.

There's a strategy that helps address both problems.

## `access-control-allow-origin`

The `access-control-allow-origin` HTTP response header specifies one of two things:

* A specific domain, ideally matching the one that issued the request
* `*`, a "wildcard" indicating that any domain can make requests to that URL

To allow an HTTP request from a domain other than the one the API is on, one of those needs to match.

## Preflighting

Before a browser actually makes a `fetch` request to another origin, it checks to see if that request will be allowed. This takes the form of an HTTP request with the `OPTIONS` method, and it expects the `access-control-allow-origin` header with an appropriate value to be present on the response. If it is, it executes the rest of the request. Browsers preflight automatically, but servers need to be able to respond to this `OPTIONS` request in addition to the actual requests.

## Proxying

If an API lacks the `Access-Control-Allow-Origin` header and you don't control the API, you'll need to proxy the request.

The steps look like this:

1. A script on your site, `website.com`, makes an HTTP request to an API you control, `proxy.com`
2. `proxy.com` makes an HTTP request to `api.com`
3. `api.com` sends a response to `proxy.com` because `api.com` is a server, not a browser
4. `proxy.com` adds the `access-control-allow-origin` header to the response from `api.com` and sends the whole thing back to `website.com`
5. The script on your site, `website.com` receives the response from `proxy.com` with the `access-control-allow-origin` header, which includes the data from `api.com`

## Watch Out!

* If you get an error saying something like `No 'Access-Control-Allow-Origin' header is present on the requested resource.`, it means the response was missing an `Access-Control-Allow-Origin` header that either specified the URL the request came from or the wildcard (`*`). This is **also** the case with the `OPTIONS` preflight request.
* Do not, under any circumstances, install a browser plug-in that disables cross-origin restrictions. The browser's cross-origin restrictions protect you from a type of attack called "Cross-Site Scripting" (XSS).
