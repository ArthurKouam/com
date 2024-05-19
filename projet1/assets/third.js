app.component("third", {
    template: `
        <div id="third">
            <h1>Details sur la livraison</h1>
            <label for="adresse">Entrer votre adresse: </label><input type="text" name="" id="adresse"  v-model="pay.adresse">
            <label for="payMethods">Moyen de payments: </label>
            <select name="" id="" v-model="pay.moyen">
                <option value="orange">Orange Mobile Money</option>
                <option value="MTN">MTN Mobile Money</option>
                <option value="paypal">Paypal</option>
                <option value="visa">Carte visa</option>
            </select>
            <label for="detail">Detail pour la livraison: </label><textarea name="" id="" cols="30" rows="8"  v-model="pay.detail"></textarea>
        </div>
    `,

    data() {
        return {
            pay: [
                {
                    adresse: "",
                    moyen: "",
                    detail: "",
                }
            ]
        }
    },

    methods: {
        
    },

    computed: {
        
    },
})