const { createApp } = Vue

createApp({
    data() {
        return {
            email: [],
            counter: 0,
        };
    },
    created(){
        this.rndmEmail();
    },
    methods: {
        rndmEmail: function() {
            while  ( this.counter < 10 ) {
                axios
                    .get("https://flynn.boolean.careers/exercises/api/random/mail")
                    .then((resp) => {
                            console.log(resp);
                            this.email.push(resp.data.response);
                            })
                    this.counter ++
                }
            }
        }
    }).mount('#app')