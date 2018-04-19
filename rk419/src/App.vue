<template>
    <div>
        <div v-for="i in data">
          {{i.id}}---{{i.name}}----{{i.addr}}
        </div>
    </div>
</template>

<script>
  export default {
    name:"app",
    data(){
        return {
          data:[]
        }
    },
    beforeCreate(){
        
        this.$ajax({
          url:"/api",
          type:"get"
        }).then((data)=>{
          console.log(data.list)
          this.data=data.list
        })
    }

  }
</script>