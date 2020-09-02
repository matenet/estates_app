<template>
    <main>
        <div class="search">

            <form class="form-filter promuj">
                <div class="logo-firmy col_4">
                    <div class="logo dodaj_zdj col_1">
                        <h4>LOGO</h4>
                        <label><input type="checkbox" name="dodaj_zdj" value="zdjecie1"> Zdjęcie 1</label>
                    </div>

                    <div class="lub">
                        LUB
                    </div>

                    <div class="nazwa-firmy col_1">
                        <h4>NAZWA FIRMY</h4>
                        <label><input type="text" placeholder="PODAJ NAZWĘ FIRMY" name="nazwa-firmy" required/></label>
                    </div>
                </div>

                <div class="strona-firmy col_1">
                    <h4>STRONA FIRMY</h4>
                    <label><input type="text" placeholder="WKLEJ WWW FIRMY LUB LINK DO FACEBOOKA" name="strona-firmy" required/></label>
                </div>

                <div class="miasto-firmy col_1">
                    <h4>MIASTO</h4>
                    <label><input type="text" placeholder="PODAJ MIASTO W KTÓRYM FIRMA MA SIEDZIBĘ" name="miasto-firmy" required/></label>
                </div>

                <div class="promocja-firmy radio-list col_3">
                    <h4>WYPROMUJ SWOJĄ FIRMĘ I POKAŻ JĄ NA STRONIE GŁÓWNEJ</h4>
                    <label :class="{ 'active' : promotionDuration === 'oneWeek'}"><input type="radio" name="promocja-firmy" value="oneWeek" v-model="promotionDuration" required/>Tydzień <span>24 zł</span></label>
                    <label :class="{ 'active' : promotionDuration === 'twoWeeks'}"><input type="radio" name="promocja-firmy" value="twoWeeks" v-model="promotionDuration" required/>2 Tygodnie <span>49 zł</span></label>
                    <label :class="{ 'active' : promotionDuration === 'OneMonth'}"><input type="radio" name="promocja-firmy" value="OneMonth" v-model="promotionDuration" required/>1 Miesiąc <span>99 zł</span></label>
                </div>

                <input type="submit" name="submit" value="dodaj" class="submit"/>

        </form>

        </div>

    </main>
</template>

<script>
    export default {
        name: "CompanyPromote",
        data () {
            return {
                promotionDuration: '',
            }
        }
    }
</script>

<style scoped>

</style>