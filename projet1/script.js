const app = Vue.createApp({
    data(){
        return{
            position: 0,
           
        }
    },

    methods: {
        pos(i){
            this.position += i;
        }
        
    },

    computed: {
        
    },
})