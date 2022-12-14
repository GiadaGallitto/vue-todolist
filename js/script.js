const {createApp} = Vue;

createApp({
    data() {
        return {
            newTodoElement: "",
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
        removeTodoElement(elementToRemove){
            elementIndex = this.worksList.indexOf(elementToRemove); 
            if(elementIndex > -1){
                this.worksList.splice(elementIndex, 1);
            }
        },

        addNewElement(content){
            if(content != "" && (!this.worksList.includes(content))){
                this.worksList.push(content);
                this.clearInput();
            } else {
                // Inserire nel dom, per informare l'utente che non ha inserito niente
            }
        },

        clearInput(){
            this.newTodoElement = "";
        }
    },
    
}).mount(`#app`);