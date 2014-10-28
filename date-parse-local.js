;(function(Date) {
	var test_date = new Date('2000')
	  , offset = test_date.getTimezoneOffset()
	  , offset_hour = Math.abs(Math.floor(offset / 60))
	  , offset_minute = Math.abs(offset % 60)
	  , isodate = /^(\d{4})(?:-(\d{2})(?:-(\d{2}))?)?(?:T(\d{2}):(\d{2})(?:\:(\d{2})(?:\.(\d+))?)?(Z|[+-]\d{2}:?\d{2}))?$/

	if(offset && !test_date.getUTCHours()) {
		Date.__parse = Date.parse

		offset = offset > 0 ? '-' : '+'
		offset += (offset_hour < 10 ? '0' : '') + offset_hour
		offset += (offset_minute < 10 ? '0' : '') + offset_minute

		Date.parse = function(str) {
			var m

			if(m = isodate.exec(str)) {
				if(!m[4]/*hour not set*/) str += 'T00:00'
				if(!m[8]/*timezone not set*/) str += offset
			}

			return Date.__parse(str)
		}

		Date.fromString = function(str) {
			return new Date(Date.parse(str))
		}
	}
}(Date))