<template>
    <main>
        <div class="col_1 accordion">
            <div class="title cursor-pointer" @click="resetAccorditionShow(0)">
                <span>Edytuj profil</span>
            </div>
            <transition name="fade">
                <div class="section col_1" v-if="accorditionShow[0]">
                    <label><input type="text" v-model="personalData.firstName" placeholder="Imię i nazwisko / firma" name="imie" /></label>
                    <!--<label><input type="text" v-model="personalData.lastName" placeholder="NAZWISKO" name="nazwisko" /></label>-->
                    <!--<label><input type="text" v-model="personalData.userName" placeholder="Nazwa użytkownika" name="nazwa_uzytkownika" /></label>-->
                    <label><input type="password" v-model="personalData.password" placeholder="Hasło" name="haslo" /></label>
                    <label><input type="password" v-model="personalData.repeatedPassword" placeholder="Powtórz hasło" name="haslo" /></label>
                    <label><input type="email" v-model="personalData.email" placeholder="E-MAIL" name="email" /></label>
                    <!--<label><input type="text" v-model="personalData.city" placeholder="MIASTO" name="miasto" /></label>-->
                    <!--<label><input type="text" v-model="personalData.phone" placeholder="TELEFON" name="telefon" /></label>-->
                    <label class="send"><input type="submit" name="submit" value="ZAKTUALIZUJ"></label>
                </div>
            </transition>

            <div class="title cursor-pointer" @click="resetAccorditionShow(1)">
                <span>Promuj swoją firmę</span>
            </div>
            <transition name="fade">
                <div class="section col_1" v-if="accorditionShow[1]">
                    <label><input type="text" v-model="companyData.companyName" placeholder="NAZWA FIRMY" name="nazwa_firmy" /></label>
                    <label><input type="text" v-model="companyData.firstName" placeholder="IMIĘ" name="imie" /></label>
                    <label><input type="text" v-model="companyData.lastName" placeholder="NAZWISKO" name="nazwisko" /></label>
                    <label><input type="text" v-model="companyData.city" placeholder="MIASTO" name="miasto" /></label>
                    <label><input type="text" v-model="companyData.buildingNumber" placeholder="NR BUDYNKU" name="nr_domu" /></label>
                    <label><input type="text" v-model="companyData.apartmentNumber" placeholder="NR LOKALU" name="nr_mieszkania" /></label>
                    <label><input type="text" v-model="companyData.postalCode" placeholder="KOD POCZTOWY" name="kod_pocztowy" /></label>
                    <label><input type="text" v-model="companyData.taxNumber" placeholder="NIP" name="nip" /></label>
                    <label><input type="text" v-model="companyData.regonNumber" placeholder="REGON" name="regon" /></label>
                    <label class="send"><input type="submit" name="submit" value="ZAKTUALIZUJ"></label>
                </div>
            </transition>

            <div class="title cursor-pointer" @click="resetAccorditionShow(2)">
                <span>Moje ogłoszenia</span>
            </div>
            <transition name="fade">
                <div class="section col_1" v-if="accorditionShow[2]">
                    <div class="col_6 ogloszenie" v-for="advert in advertisements">
                        <div><img :src="advert.imageUrl"></div>
                        <div><h4>Miasto:</h4> {{ advert.city }}</div>
                        <div><h4>Cena:</h4> {{ advert.price }} zł</div>
                        <div><h4>Roi:</h4> {{ advert.roi }}%</div>
                        <div><h4>Najem</h4> {{ advert.hire }}</div>
                        <div>
                            <router-link :to="{ name: 'singleEstate', params: { property_id: advert.id }}">Podgląd</router-link>
                            <router-link :to="{ name: 'editEstate', params: { property_id: advert.id }}">Edycja</router-link>
                            <router-link :to="{ name: 'promoteEstate', params: { property_id: advert.id }}">Promuj ogłoszenie</router-link>
                            <router-link :to="{ name: 'endEstate', params: { property_id: advert.id }}">Zakończ</router-link>
                        </div>
                    </div>

                    <div class="col_1 ogloszenie">
                        <a  href="dodaj-zgloszenie.html">DODAJ OGŁOSZENIE</a>
                    </div>

                </div>
            </transition>

            <!--<div class="title cursor-pointer" @click="resetAccorditionShow(3)">-->
                <!--<span>Dane do faktury</span>-->
            <!--</div>-->
            <!--<transition name="fade">-->
                <!--<div class="section col_1" v-if="accorditionShow[3]">-->
                    <!--<label><input type="text" v-model="invoiceData.companyName" placeholder="NAZWA FIRMY" name="nazwa_firmy" /></label>-->
                    <!--<label><input type="text" v-model="invoiceData.firstName" placeholder="IMIĘ" name="imie" /></label>-->
                    <!--<label><input type="text" v-model="invoiceData.lastName" placeholder="NAZWISKO" name="nazwisko" /></label>-->
                    <!--<label><input type="text" v-model="invoiceData.city" placeholder="MIASTO" name="miasto" /></label>-->
                    <!--<label><input type="text" v-model="invoiceData.buildingNumber" placeholder="NR DOMU" name="nr_domu" /></label>-->
                    <!--<label><input type="text" v-model="invoiceData.apartmentNumber" placeholder="NR MIESZKANIA" name="nr_mieszkania" /></label>-->
                    <!--<label><input type="text" v-model="invoiceData.postalCode" placeholder="KOD POCZTOWY" name="kod_pocztowy" /></label>-->
                    <!--<label><input type="text" v-model="invoiceData.taxNumber" placeholder="NIP" name="nip" /></label>-->
                    <!--<label class="send"><input type="submit" name="submit" value="ZAKTUALIZUJ"></label>-->
                <!--</div>-->
            <!--</transition>-->
        </div>
    </main>
</template>

<script>
    export default {
        name: "MyProfile",
        data () {
            return {
                accorditionShow: [false, false, false, false],
                personalData: {
                    firstName: '',
                    lastName: '',
                    userName: '',
                    password: '',
                    repeatedPassword: '',
                    city: '',
                    phone: '',
                    email: '',
                },
                companyData: {
                    companyName: '',
                    firstName: '',
                    lastName: '',
                    city: '',
                    buildingNumber: '',
                    apartmentNumber: '',
                    postalCode: '',
                    taxNumber: '',
                    regonNumber: '',
                },
                invoiceData: {
                    companyName: '',
                    firstName: '',
                    lastName: '',
                    city: '',
                    buildingNumber: '',
                    apartmentNumber: '',
                    postalCode: '',
                    taxNumber: '',
                },
                advertisements: [
                    {
                        id: 1,
                        imageUrl: 'images/products/thumbs/2-thumb.jpg',
                        city: 'Wrocław',
                        price: '380 000',
                        roi: '4',
                        hire: 'na pokoje',
                    },
                    {
                        id: 2,
                        imageUrl: 'images/products/thumbs/3-thumb.jpg',
                        city: 'Kraków',
                        price: '460 000',
                        roi: '9',
                        hire: 'na doby',
                    }
                ]

            }
        },
        methods: {
            resetAccorditionShow(whichShow){
                switch (whichShow) {
                    case 0:
                        this.accorditionShow = [!this.accorditionShow[0], false, false, false];
                        break;
                    case 1:
                        this.accorditionShow = [false, !this.accorditionShow[1], false, false];
                        break;
                    case 2:
                        this.accorditionShow = [false, false, !this.accorditionShow[2], false];
                        break;
                    case 3:
                        this.accorditionShow = [false, false, false, !this.accorditionShow[3]];
                        break;
                }
            }
        }
    }
</script>

<style scoped>

</style>