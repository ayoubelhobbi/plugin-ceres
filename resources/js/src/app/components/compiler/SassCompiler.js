const Compiler            = require("sass.js/dist/sass.js");
const Worker = require("sass.js/dist/sass.worker.js");

Vue.component("sass-compiler", {

    props: {
        template: {
            type: String,
            default: "#vue-sass-compiler"
        }
    },

    data()
    {
        return {
            compiler: null
        };
    },

    created()
    {
        this.$options.template = this.template;
    },

    mounted()
    {
        this.$nextTick(() =>
        {
            console.log("COMPILER RDY");
        });
    },

    methods:
    {
        compileSass()
		{
            this.compiler = new Compiler(this.Worker);

            this.compiler.readFile("../../scss/Ceres.scss", result =>
			{
                console.log(result);
            });
        }
    }
});
