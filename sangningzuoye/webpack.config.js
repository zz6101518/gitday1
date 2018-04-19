var path = require("path");
var Mock = require("mockjs");
var data = Mock.mock({
	"list|10":{
		"name" : "@cname",
		"id|+1" : 0,
		"age|18-38" : 0
	}
})
console.log(data);
var htmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
	devtool : 'eval-source-map',
	entry : path.join(__dirname , "src" , "index.js"),
	output : {
		path : path.join(__dirname , "dist"),
		filename : "main.js"
	},
	module : {
		rules : [
			{
				test : /\.js$/,
				use : {
					loader : "babel-loader",
					options : {
						presets : ["env"]
					}
				}
			},{
				test : /\.css$/,
				use : [
					{
						loader : "style-loader"
					},{
						loader : "css-loader"
					}
				]
			},
			{
				test : /\.vue$/,
				use : {
					loader : "vue-loader"
				}
			}
		]
	},
	resolve : {
		alias : {
			'vue' : 'vue/dist/vue.js'
		}
	},
	devServer : {
		contentBase : path.join(__dirname , "dist"),
		host : 'localhost',
		port : "8080",
		open : true,
		before : function(app){
			app.get("/api",function(req,res,next){
				res.send(data);
			})
		}
	},
	plugins:[
		new htmlWebpackPlugin({
			filename : "index.html",
			template : path.join(__dirname, "src" , "index.html")
		})
	]
}