const { createApp } = Vue

createApp({
    data() {
        return {
            email: "",
        };
    },
    created(){
        this.rndmEmail();
    },
    methods: {
        rndmEmail: function() {
            axios
                .get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then((resp) => {
                    console.log(resp);
                    this.email = resp.data.response;
                })
            }
        }
}).mount('#app')