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
            // if (Boolean(newValue)) {
                if(!!newValue) {
                const that = this;
                setTimeout( function () {
                    that.value = 0
                }, 5000);
            }
        }
    },

    computed: {
        result () {
            const value = this.value
            return value === 37 ? value : value < 37 ? "Not there yet" : "Too much!";
            // if (value === 37) {
                // return value;
            // } else if ( this.value < 37) {
                // return "Not there yet";
            // } else {
            //     return "Too much!";
            // }
        }
    },
    

})

app.mount('#assignment');