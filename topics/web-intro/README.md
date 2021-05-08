# Introduction to the Web

In common language, we use the terms "internet" and "web" interchangeably, but they're actually different things. The internet is a network of networks; the web is a set of technologies that runs on top of it.

## Web Technologies

### URLs

Look at these IP address:

```
172.217.1.206
31.13.93.35
104.244.42.129
```

Could you remember them? Maybe you'll recognize them better by their nicknames:

```
172.217.1.206 => google.com
31.13.93.35 => facebook.com
104.244.42.129 => twitter.com
```

A URL is an easier-to-remember shortcut to a IP address. When you use a URL to look up a network, your computer looks up the matching IP address for that URL.

### Browsers

A browser is a program that can request and display files from the internet.

### HTTP

Networked computers can share all kinds of things with each other. One way they can do that is with HTTP, which is a format for sending and receiving messages over the internet.

(image)

### HTML, CSS, and JavaScript

HTML and CSS are instructions on how to display content that your browser understands. JavaScript is a programming language your browser understands that makes that content interactive. This are usually stored in files that your browser can request with HTTP.

## Putting it all together

When you type a URL into a browser and hit enter:

1. The browser looks up the IP address for that URL
2. It sends an HTTP request to that IP address asking for an HTML file
3. The network that gets the HTTP request gets the HTML file, and sends its contents back in an HTTP response
4. The browser reads the HTML out of the HTTP response and starts trying to render it on the screen
5. If the HTML file contains instructions to download CSS, JavaScript, images, or other files, it does so following the same process until the entire HTML file has been processed

(diagram here)

## History

In 1991, Tim Berners-Lee created the first browser and the first web page. While the web has evolved a lot since then, it still uses all of the same underlying ideas. Tim Berners-Lee is currently the chairman of the W3C, which is a standards group governing the web.
