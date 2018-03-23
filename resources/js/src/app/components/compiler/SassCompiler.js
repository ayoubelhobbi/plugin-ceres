import Compiler from "sass.js/dist/sass.js";

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

        Compiler.setWorkerUrl("http://master.plentymarkets.com/documents/plugins/Ceres/resources/js/dist/sass.worker.js");
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
            this.compiler = new Compiler();

            this.compiler.readFile("test.css", result =>
			{
                console.log(result);
            });
        }
    }
});
