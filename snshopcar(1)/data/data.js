var Mock = require("mockjs");
var data = Mock.mock({
	"list|3":[{
		"checked" : true,
		"url" : "/static/img1.jpg",
		"text" : "@ctitle(25)",
		"content" : "@ctitle(8)",
		"price|18-60" : 1,
		"num":0
	}]
})
module.exports = {
	data:data
};