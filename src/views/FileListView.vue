<template>
    <div>
        <ul>
            <li v-for="(item,idx) in state.items" :key="idx">
                <span>{{item.fileName}}</span>
                <a :href ="'http://localhost:8088/api/download?uuid='+item.uuid+'&fileName='+item.fileName">download</a>          
            </li>
        </ul>
    </div>
</template>
<script>
import {reactive} from "vue";
import axios from "axios";

export default ({
    setup() {
        const state = reactive({
            items:[]
        })

        const load = () =>{
            axios.get("/api/filelist").then(({data})=>{
                console.log(data);
                state.items = data;
            })
        }

        load();

        return {state}        
    },
})
</script>
