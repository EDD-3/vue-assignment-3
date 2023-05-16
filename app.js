const app = Vue.createApp({
    data () {
        return {
            value: 0,
            
        }
    },
    methods: {
        add(num) {
            this.value += num;
        }
    },
    watch: {
        value(newValue) {
            if (!!newValue) {
                console.log()
                const that = this;
                setTimeout( function () {
                    that.value = 0
                }, 5000);
            }
        }
    },

    computed: {
        result () {
            if (this.value < 37) {
               return "Not there yet";
            } else if ( this.value > 37) {
                return "Too much!";
            } else {
                return this.value;
            }
        }
    },
    

})

app.mount('#assignment');