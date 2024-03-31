
# HTTP Response Status Codes

<br>

These are the most common HTTP response status codes:

 - ***200*** - Success. Usually GET request.

 - ***201*** - Success creation. Usually POST request.

 - ***204*** - Successful deletes. Usually DELETE request.

 - ***400*** - Bad requests.

 - ***404*** - Not found errors.

 - ***500*** - Server error.

<br>

Other useful are:

 - ***202*** - Request accepted.

 - ***401*** - Unauthorized. Maybe authorization header contents doesn't pass?

 - ***403*** - Forbidden. Some auth parameter isn't Ok?

 - ***405*** - Method not allowed. Incorrect HTTP verb for the endpoint?

 - ***418*** - I'm a teapot. It isn't clear what is happening.

 - ***422*** - Form validations errors?

 - ***429*** - Too Many Requests (API Rate Limiting exceeded).
F.e. throttle limit exceeded on Laravel.

 - ***501*** - Server error: not implemented.

 - ***503*** - Server error. F.e. "maintenance mode" on Laravel.

<br>

To know more visit: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status


***

[Go to index](../README.md)
