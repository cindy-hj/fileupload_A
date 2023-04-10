<template>
    <div>
        <div>
            <ul v-for="(data, idx) in state.showfilelist" :key="idx">
                <a :href="'http://localhost:8088/api/download?uuid='+data.uuid+'&fileName='+data.fileName">{{idx}} 다운로드: {{data.fileName}}</a>
                <img :src="'http://localhost:8088/api/display?uuid='+data.uuid+'&fileName='+data.fileName"/>
            </ul>    
        </div>
    </div>
</template>

<script>
import { onMounted, reactive } from 'vue';
import axios from 'axios';
export default {
    setup () {
        const state = reactive({
            filelist:[],
            showfilelist:[],
        });

        const filelist = () => {
            axios.get("/api/filelist",{headers:{'content-Type':"application/json"}}).then((res)=>{
                console.log("결과",res);
                state.showfilelist = res.data;
            })
        }

        onMounted(()=>{
            filelist();
        });

        return {
            state,
        }
    }
}
</script>

<style lang="scss" scoped>

</style>