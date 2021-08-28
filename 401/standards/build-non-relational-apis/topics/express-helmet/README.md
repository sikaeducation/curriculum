# Express: Security with Helmet

There are a couple of things you can do to improve basic security in an Express app. The Helmet middleware sets more secure defaults for Express, and is easy to use but very powerful:

```js
const helmet = require("helmet")
app.use(helmet())
```

Helmet is a wrapper around a dozen other security-related middleware libraries, which help protect against:

* [Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP) violations
* [Cross-Site Scripting](https://owasp.org/www-community/attacks/xss/) attacks
* [MIME Sniffing](https://www.denimgroup.com/resources/blog/2019/05/mime-sniffing-in-browsers-and-the-security-implications/) attacks

And many more. Helmet doesn't protect against all vulnerabilities, but it does handle a lot of low-hanging fruit.

## Additional Resources

| Resource | Description |
| --- | --- |
| [Express: Security Best Practices](https://expressjs.com/en/advanced/best-practice-security.html) | Express's official list of security best practices |
| [Node.js Security Checklist](https://blog.risingstack.com/node-js-security-checklist/) | Blog post outlining steps to secure an Express app |
| [Helmet](https://github.com/helmetjs/helmet) | Official Helmet repo and docs |
