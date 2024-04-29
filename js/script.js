const { createApp } = Vue

createApp({
    data() {
        return {
            email: [],
        };
    },
    created(){
        this.rndmEmail() * 10;
    },
    methods: {
        rndmEmail: function() {
            let counter = 0;
            while  ( counter < 10 ) {
                axios
                    .get("https://flynn.boolean.careers/exercises/api/random/mail")
                    .then((resp) => {
                            console.log(resp);
                            this.email.push(resp.data.response);
                            })
                    counter ++
                }
            }
        }
}).mount('#app')