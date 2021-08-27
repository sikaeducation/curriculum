# HTTP: Status Codes

One of the most useful parts of an HTTP response is its status. Each status has a number and a message that characterizes the nature of the response. Some examples:

* **`200 OK`**: The HTTP request was successful
* **`201 Created`**: The HTTP request was successful and created something new on the server
* **`400 Bad Request`**: The HTTP request was formatted incorrectly
* **`401 Unauthorized`**: The HTTP request was missing authorization credentials
* **`403 Forbidden`**: The HTTP request had authorization credentials, but they were insufficient
* **`404 Not Found`**: The HTTP request was for something that doesn't exist
* **`500 Internal Server Error`**: The HTTP request was fine but the server couldn't handle it

There are broad categories of status codes:

* **`1xx`**: General information
* **`2xx`**: Indicates that the response was generally successful.
* **`3xx`**: Indicates that the response was redirected
* **`4xx`**: Indicates that there's a mistake in the request
* **`5xx`**: Indicates that the server received the request but threw an error trying to fulfill it.

The `00` codes (`100`, `200`, `400`, `500`) are generic, and are used if a more specific code isn't available. For example, `400` means that there was something wrong with the request, `404` specifically means that request was for something that doesn't exist.

## Additional Resources

| Resource | Description |
| --- | --- |
| [MDN: Status Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) | MDN's status code reference. |
| [Video: Learn HTTP Status Codes in 10 Minutes](https://www.youtube.com/watch?v=wJa5CTIFj7U) | Web Dev Simplified's guide to HTTP status codes |
