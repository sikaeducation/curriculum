# HTTP: Status Codes

One of the most useful parts of an HTTP response is its status. Each status has a number and a message that characterizes the nature of the response. Some examples:

* `200 OK`
* `201 Created`
* `400 Bad Request`
* `401 Unauthorized`
* `404 Not Found`
* `500 Internal Server Error`

There are broad categories of status codes:

* `1xx` - General information
* `2xx` - Indicates that the response was generally successful.
* `3xx` - Indicates that the response was redirected
* `4xx` - Indicates that there's a mistake in the request
* `5xx` - Indicates that the server received the request but threw an error trying to fulfill it.

The `00` codes (`100`, `200`, `400`, `500`) are generic, and are used if a more specific code isn't available. For example, `400` means that there was something wrong with the request, `404` specifically means that request was for something that doesn't exist.
