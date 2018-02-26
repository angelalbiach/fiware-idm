var debug = require('debug')('idm:api-roles');

// GET /v1/roles -- Send index of roles
exports.index = function(req, res) {
	debug('--> index')
	res.send("ok")
}

// POST /v1/roles -- Create role
exports.create = function(req, res) {
	debug('--> create')
	res.send("ok")
}

// GET /v1/roles/:roleId -- Get info about role
exports.info = function(req, res) {
	debug('--> info')
	res.send("ok")
}

// PATCH /v1/roles/:roleId -- Edit role
exports.update = function(req, res) {
	debug('--> update')
	res.send("ok")
}

// DELETE /v1/roles/:roleId -- Delete role
exports.delete = function(req, res) {
	debug('--> delete')
	res.send("ok")
}