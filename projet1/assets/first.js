app.component("first", {
    template: `
        <p>We travel the world to source the very best single origin coffee for you</p>
        <div id="contain">
            <div class="card" v-for = "(cafe, index) in cafes" :key="index" @click = "saveindex(index)">
                <span id="masse">{{cafe.masse}}</span>
                <span id="des"><span><h2> {{cafe.titre}} </h2>{{cafe.des}}</span></span>
                <span id="price"> {{cafe.prix}} </span>
            </div>
        </div>
    `,

    data() {
        return {
            cafes:[
                {
                    masse: "250g",
                    titre: "the single",
                    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, enim reiciendis corrupti porro minus eos recusandae error, illum velit maxime mollitia",
                    prix: 19,
                },
                {
                    masse: "500g",
                    titre: "the customs",
                    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, enim reiciendis corrupti porro minus eos recusandae error, illum velit maxime",
                    prix: 29,
                },
                {
                    masse: "1kg",
                    titre: "the Addict",
                    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, enim reiciendis corrupti porro minus eos recusandae error, illum velit maxime",
                    prix: 49,
                },
                
            ],
            
        }
    },

    methods: {
        saveindex(index) {
            return index;
        }
    },

    computed: {

    },
})