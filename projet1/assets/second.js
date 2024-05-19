app.component("second", {
    template: `
        <h1>Create account</h1>
        <p>Creer un compte ou connecter vous pour profiter de notre offre incroyable.</p>
        <div id="connexion">
            <label for="mail" >Adresse mail: </label><input type="email" name="" id="" placeholder="exemple@exemple.com" v-model = "info.mail"><br>
            <label for="nom">Nom: </label><input type="text" v-model = "info.nom"><br>
            <label for="password">Mot de passe: </label><input type="password" name="" id="" v-model = "info.passe"><br><br>
        </div>
    `,

    data() {
        return {
            info: [
                {
                    mail: "",
                    nom: "",
                    passe: "",
                }
            ],
        }
    },

    methods: {
        
    },

    computed: {
        
    },
})