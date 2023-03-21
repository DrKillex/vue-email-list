const { createApp } = Vue

createApp({
    data() {
        return {
            emailList: [],
        }
    },
    methods: {
        
    },
    created() {
        for (let index = 0; index < 10; index++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {                
                console.log(response);
                this.emailList.push(response.data.response)
            })
        }       
    }
}).mount('#app')


