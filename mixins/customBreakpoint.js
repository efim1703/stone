export default {
    data() {
        return {
            isLaptoop: false,
            isTable: false
        }
    },
    mounted() {
        window.addEventListener('resize', this.resizeWidth);
        this.changeBreakpoint(window.innerWidth)
    },
    beforeDestroy() {
        window.removeEventListener('resize');
    },
    methods: {
        resizeWidth(event) {
            if (event?.target?.innerWidth) {
                this.changeBreakpoint(event.target.innerWidth)
            }

        },
        changeBreakpoint(size) {
            size <= 1024 ? this.isLaptoop = true : this.isLaptoop = false
            size <= 768 ? this.isTable = false : this.isTable = true
        }
    },
}
