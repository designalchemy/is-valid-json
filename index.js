const isValidJson = json => {
	try {
		var parse = JSON.parse(json)
		if (parse && typeof parse === 'object') {
			return true
		}
	} catch (e) {
		return false
	}
	return false
}

module.exports = isValidJson
