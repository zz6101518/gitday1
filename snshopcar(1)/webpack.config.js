var path = require("path");
var htmlWebpackPlugin = require("html-webpack-plugin");
var copywebpackplugin = require("copy-webpack-plugin");
var data = require("./data/data.js")
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
		}),
		new copywebpackplugin([{
			from : path.join(__dirname,"src","static"),
			to : path.join(__dirname,"dist","static")
		}])
	]
}