const {createApp} = Vue;

createApp({
    data() {
        return {
            worksList : [
                {
                    text : "Ritirare il bucato",
                    done : false
                },

                {
                    text : "Fare la spesa",
                    done : false
                },

                {
                    text : "Tagliare l'erba",
                    done : true
                },

                {
                    text : "Spedire il pacco",
                    done : true
                },

                {
                    text : "Andare in libreria",
                    done : false
                },
            ]
        }
    },

    methods: {

    },
    
}).mount(`#app`);