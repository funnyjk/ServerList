var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ServerSchema = new Schema({
	VHDName: String,
	HostName: String,
	Server: String,
	HostLocation: String,
	Network: String,
	OSType: String,
	License: String,
	ExternalIP: String,
	InternalIP: String,
	ACTURL: String,
	ACTVersion: String,
	WebPort: Number,
	SyncPort: Number,
	SpecialNotes: String,
	BDRStrategy: { Altaro: Boolean, NAS: Boolean, Maintenance: Boolean },
	ACTAddons: [String],
	ACTLicense: [String],
	Databases:[{
		DBName: String,
		Users: [String],
		UserCount: Number,
		URL: String,
		Company: String,
		Notes: String 
		}]
});

ServerSchema.statics = {
	load: function(id, cb) {
		this.findOne({
			_id: id
		}).exec(cb);
	}
};

var Server = mongoose.model('Server', ServerSchema);
