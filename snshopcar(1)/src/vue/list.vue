<template>
	<div>
		 <div class="list"> 
			<div>
				<input type="checkbox" :value='this.newdata.checked' v-on:click='chks'>
			</div>
			<div>
				<img :src='this.newdata.url'>
			</div>
			<div class="text"> 
				<p>{{this.newdata.text}}</p>
				<span>{{this.newdata.content}}</span>
				<div class="btm">
					<div><span>￥{{this.newdata.price}}</span></div>
					<div class="comp">
						<span v-on:click='jian'>-</span>
						<input type="text" v-model='this.newdata.num'>
						<span v-on:click='jia'>+</span>
					</div>
				</div>
			</div> 
		</div>
	</div>
</template>
<script>
	
	export default {
		data(){
			return {
				newdata : undefined
			}
		},
		props:["data"],
		beforeCreate(){
			
		},
		created(){
			this.newdata = this.data ; 
		},
		methods : {
			chks(){
				this.newdata.checked = !this.newdata.checked;
				console.log(this.newdata)
			},	
			jia(){
				this.newdata.num++;
				console.log(this.newdata)
			},
			jian(){
				this.newdata.num--;
				if( this.newdata.num < 0 ){
					this.newdata.num=0;
				}
			}
		},
		computed : {
			
		} 
	}
</script>
<style>
*{
	margin:0;
	padding:0;
	box-sizing:border-box;
	font-size: .14rem;
	text-decoration: none;
	font-weight:normal;
	font-style: normal;
	list-style: none;
	color: #000;
}
html,body,.box{
	width:100%;
	height:100%;
}
html{
	font-size: 625%;
}
#box{
	display: flex;
	flex-direction: column;
}
.list{
	width: 100%;
	display: flex;
	align-items: center;
	padding: .1rem 0;
	border-bottom: .01rem solid #ccc;
	margin-bottom: .1rem;
}
.text p,.text span{
	font-size: .1rem;
}
.btm{
	display: flex;
	justify-content: space-between;
}
.comp input{
	width: .2rem;
}
.comp span{
	display: inline-block;
	width: .2rem;
	height: .2rem;
	border: .01rem solid #ccc;
	text-align: center;
}
</style>