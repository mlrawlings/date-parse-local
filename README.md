# Date.parse/Date.fromString polyfill

In ES5.1 and below, datestrings that match the [ISO 8601](http://en.wikipedia.org/wiki/ISO_8601) format will be parsed in the UTC/GMT timezone if no timezone is specified.  This means `Date.parse('2000-01-01')` and `Date.parse('2000-1-1')` will return different timestamps unless your local timezone happens to be UTC/GMT.  This polyfill changes that so that, as proposed for ES6, it uses the local timezone when the datestring does not specify a timezone.

```javascript
	Date.fromString('2000')
	// Sat Jan 01 2000 00:00:00 GMT-0500 (Eastern Standard Time)
```