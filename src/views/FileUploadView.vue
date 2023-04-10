<template>
    <div>
        <h1>file upload</h1>
		<input type="file" ref="uploadfile" name="uploadfile" @change="onUpload()" multiple="multiple">
		<button @click="submit()">upload</button>
    </div>
</template>

<script>
import axios from "axios";

export default ({
   data:()=>({
    filelist:[],
    formData:null
   }),
   methods:{
    onUpload() {
        //let file = this.$refs.uploadfile.files[0];
        this.filelist = this.$refs.uploadfile.files;
        this.formData = new FormData();
        for( var i = 0; i < this.filelist.length; i++ ){
            let file = this.filelist[i];
            console.log(file);
            this.formData.append("uploadfile", file);
        }
        //this.formData.append("uploadfile",file);
        //console.log(file);
    },
    submit() {
        axios.post("/api/upload",this.formData,{ headers: { 'Content-Type': 'multipart/form-data' } }).then((res)=>{
            console.log(res);
        }).catch((err)=>{
            console.log(err);
        })
    }
   }

})
</script> 