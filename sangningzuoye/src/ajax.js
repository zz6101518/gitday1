class Ajax{
	constructor(obj){ 
		Object.assign(this,obj); 
		if((this.url && this.success) === undefined){ 
			throw new Error("url,success是比填项");
		}
		this.aj = this.aj.bind(this);
		this.pro = this.pro.bind(this);
		this.pro();
	}
	aj(resolve,reject){
		var xhr = new XMLHttpRequest();       
        xhr.open('GET', this.url, true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4) {   
            	if(xhr.status == 200){
            		resolve(JSON.parse(xhr.responseText)); 
            	}else{
	            	reject(new Error("ajax"))
	            }
            }
        };
        xhr.send();
	}
	pro(){
		let promise = new Promise((resolve,reject)=>{
			this.aj(resolve,reject);
		})
		promise.then((data)=>{ 
			this.success(data);
		},(err)=>{ 
			console.log(err)
		})
	}
}
export default Ajax;