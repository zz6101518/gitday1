import Vue from "vue";
import list from "./vue/list.vue"
import ajax from "../data/ajax.js"
let vm = new Vue({
	el : "#box",
	template : "<div> <div v-for='i in this.data'><list :data='i' /></div> </div>",
	data:{
		data:undefined
	},
	beforeCreate(){
		let that = this;
		new ajax({
			url : "/api",
			success : function(data){ 
				that.data = data.data.list;
			}
		})
	},
	components :{
		List : list
	}
})