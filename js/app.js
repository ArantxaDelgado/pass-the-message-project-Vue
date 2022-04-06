// Tu código aquí
Vue.createApp({
    data() {
      return {
          lastMessage: "Hello World!",
        newMessage: "",
        errorDisplay: false,
      }
    },
    methods: {
        getMessage(){
            /* We need that if nothing is written an error pops up */
            if (this.newMessage == "") {
                this.errorDisplay = true;
            }

            this.lastMessage = this.newMessage;
            this.newMessage = ""
        },

        
    }
  }).mount("#app");
