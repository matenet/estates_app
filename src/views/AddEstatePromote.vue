<template>
    <main>
        <div class="search">

            <form class="form-filter ogloszenie-zaplac">
                <h4>DODAJ OGŁOSZENIE</h4>
                <h2 class="bold-center">WYPROMUJ SWOJE OGŁOSZENIE I POKAŻ JE NA STRONIE GŁÓWEJ</h2>

                <div class="oferta radio-list col_4">
                    <label :class="{ 'active' : promotionLong === 'noPromotion'}"><input type="radio" v-model="promotionLong" name="strona-glowna" value="noPromotion" required/>NIE PROMUJ<span>0 zł</span></label>
                    <label :class="{ 'active' : promotionLong === 'oneWeek'}"><input type="radio" v-model="promotionLong" name="strona-glowna" value="oneWeek" required/>1 TYDZIEŃ<span>29 zł</span></label>
                    <label :class="{ 'active' : promotionLong === 'twoWeeks'}"><input type="radio" v-model="promotionLong" name="strona-glowna" value="twoWeeks" required/>2 TYGODNIE<span>49 zł</span></label>
                    <label :class="{ 'active' : promotionLong === 'oneMonth'}"><input type="radio" v-model="promotionLong" name="strona-glowna" value="oneMonth" required/>1 MIESIĄC<span>99 zł</span></label>
                </div>

                <div class="col_1">
                    <input v-if="promotionLong === 'noPromotion'" type="submit" name="submit" value="DODAJ OGŁOSZENIE" class="submit max-width"/>
                    <input v-if="promotionLong !== '' && promotionLong !== 'noPromotion'" type="submit" name="submit" value="ZAPŁAĆ" class="submit max-width"/>
                </div>
            </form>

        </div>

    </main>
</template>

<script>
    export default {
        name: "AddEstatePromote",
        props: ['property_id'],
        data () {
            return{
                promotionLong: '',
            }
        },
        methods: {
            onSubmit() {
                this.sendData();
            },
            sendData: function()
            {
                this.$router.push({name: 'myProfile'});
            }
        },
    }
</script>

<style scoped>

</style>