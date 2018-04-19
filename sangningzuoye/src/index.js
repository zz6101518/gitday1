import Vue from "vue";
import list from "./list.vue";
import Ajax from "./ajax.js";
let vm = new Vue({
	el : "#box",
	data:{
		text:"wenzi",
		data:undefined
	},
	template : "<div>{{this.data.list.age}}</div>",
	beforeCreate(){
		let that = this;
		new Ajax({
			url : "http://localhost:8080/api",
			success(data){
				that.data = data; 
			}
		})
	},
	components : {
		List : list
	}
}) 