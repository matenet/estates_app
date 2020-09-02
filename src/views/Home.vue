<template>
    <main class="container">
        <div class="search">
            <form class="form-filter home row" id="search-form" method="post">
                <div class="right col-sm-6">
                    <h3 class="title-form">Parametry nieruchomości:</h3>
                    <div class="miasto col_1 row">
                        <h4 class="col-sm-12">MIEJSCOWOŚĆ</h4>
                        <label class="col-sm-12">
                            <input type="text" placeholder="Wpisz miasto" v-model="city" />
                        </label>
                    </div>
                    <div class="rynek radio-list col_2 row">
                        <h4 class="col-sm-12">RYNEK</h4>
                        <label class="col-sm-6" :class="{ 'active' : primaryMarket === true}">
                            <input type="checkbox" v-model="primaryMarket" value="true" />
                            Pierwotny</label>
                        <label class="col-sm-6" :class="{ 'active' : afterMarket === true}">
                            <input type="checkbox" v-model="afterMarket" value="true" />
                            Wtorny</label>
                    </div>
                    <div class="rodz_nier radio-list col_2 row">
                        <h4 class="col-sm-12">RODZAJ ZABUDOWY</h4>
                        <label class="col-sm-6" :class="{ 'active' : flats === true}">
                            <input type="checkbox" v-model="flats" value="true" />
                            Mieszkania</label>
                        <label class="col-sm-6" :class="{ 'active' : houses === true}">
                            <input type="checkbox" v-model="houses" value="true" />
                            Domy</label>
                    </div>
                    <div class="rodz_najm radio-list col_2 row">
                        <h4 class="col-sm-12">WYNAJEM</h4>
                        <label class="col-sm-6" :class="{ 'active' : shortTermRent === true}">
                            <input type="checkbox" v-model="shortTermRent" value="true" />
                            Długoterminowy</label>
                        <label class="col-sm-6" :class="{ 'active' : longTermRent === true}">
                            <input type="checkbox" v-model="longTermRent" value="true" />
                            Krótkoterminowy</label>
                    </div>
                    <div class="form_najm radio-list col_3 row">
                        <h4 class="col-sm-12">  MODEL NAJMU</h4>
                        <label class="col-sm-4" :class="{ 'active' : roomRent === true}"><input type="checkbox" v-model="roomRent" value="true" />Na pokoje</label>
                        <label class="col-sm-4" :class="{ 'active' : dailyRent === true}"><input type="checkbox" v-model="dailyRent" value="true" />Na doby</label>
                        <label class="col-sm-4" :class="{ 'active' : wholeFlatRent === true}"><input type="checkbox" v-model="wholeFlatRent" value="true" />Wynajem całych mieszkań</label>
                    </div>
                </div>
                <div class="left col-sm-6">
                    <h3 class="title-form">Parametry finansowe:</h3>
                    <div class="cena_od_do">
                        <h4>CENA</h4>
                        <div class="col_2 gap row">
                            <label class="col-sm-6"><input type="number" min="0" placeholder="Od" v-model="fromPrice"/></label>
                            <label class="col-sm-6"><input type="number" min="0" placeholder="Do" v-model="toPrice"/></label>
                        </div>
                    </div>
                    <div class="roi">
                        <h4>ROI (%) <span class="info-pop"> <strong>Zwrot z inwestycji w skali roku</strong></span></h4>
                        <div class="col_2 gap row">
                            <label class="col-sm-6"><input type="number" min="0" placeholder="Od" v-model="fromRoi"/></label>
                            <label class="col-sm-6"><input type="number" min="0" placeholder="Do" v-model="toRoi"/></label>
                        </div>
                    </div>
                    <div class="gwar_najem">
                        <h4>GWARANTOWANY ZYSK Z NAJMU / MC</h4>
                        <div class="col_2 gap row">
                            <label class="col-sm-6"><input type="number" min="0" placeholder="Od" v-model="fromRentRevenue"/></label>
                            <label class="col-sm-6"><input type="number" min="0" placeholder="Do" v-model="toRentRevenue"/></label>
                        </div>
                    </div>
                    <div class="gwar_zarz">
                        <h4>GWARANTOWANY ZYSK Z ZARZĄDZANIEM / MC</h4>
                        <div class="col_2 gap row">
                            <label class="col-sm-6"><input type="number" min="0" placeholder="Od" v-model="fromManagementRevenue"/></label>
                            <label class="col-sm-6"><input type="number" min="0" placeholder="Do" v-model="toManagementRevenue"/></label>
                        </div>
                    </div>

                    <a class="button max-width" style="margin-top:35px; cursor:pointer; padding-top: 13px;" @click="getPropertiesFromApi">SZUKAJ</a>
                </div>
            </form>

            <Spinner v-if="isLoading" fadeIn="quarter" name="folding-cube" color="#c7c2d1" style="margin: 70px auto"/>
        </div>
        <transition name="fade">
            <SearchPropertiesResults v-if="filteredResults"></SearchPropertiesResults>
        </transition>
        <transition name="fade">
            <RecommendedProperties v-if="!filteredResults"></RecommendedProperties>
        </transition>
        <transition name="fade">
            <RecommendedCompanies v-if="!filteredResults"></RecommendedCompanies>
        </transition>

    </main>
</template>

<script>
// @ is an alias to /src
import RecommendedProperties from "@/components/RecommendedProperties.vue";
import RecommendedCompanies from "@/components/RecommendedCompanies.vue";
import SearchPropertiesResults from "@/components/SearchPropertiesResults";
import Spinner from 'vue-spinkit';

export default {
  name: "Home",
  components: {
      SearchPropertiesResults,
      RecommendedProperties,
      RecommendedCompanies,
      Spinner,
  },
    data () {
        return {
            filteredResults: false,
            isLoading: false,
            city: "",
            primaryMarket: false,
            afterMarket: false,
            houses: false,
            flats: false,
            longTermRent: false,
            shortTermRent: false,
            roomRent: false,
            dailyRent: false,
            wholeFlatRent: false,
            fromPrice: "",
            toPrice: "",
            fromRoi: "",
            toRoi: "",
            fromRentRevenue: "",
            toRentRevenue: "",
            fromManagementRevenue: "",
            toManagementRevenue: "",
            getPropertiesUrl: "",
            properties: [
                {
                    url: 'ogloszenie/2',
                    imageUrl:'images/products/thumbs/4-thumb.jpg',
                    city: 'Kraków',
                    price: 647000,
                    rentRevenue: 9500,
                    managementRevenue: 8760,
                    roi: 15,
                    rentType: 'Na pokoje',
                    buildingType: 'Dom',
                    heating: 'Gazowe',
                    flatArea: '1300',
                    market: 'Wtórny',
                    rentTerm: 'Krótkoterminowy'
                },
                {
                    id: 3,
                    imageUrl: 'images/products/thumbs/1-thumb.jpg',
                    city: 'Gdańsk',
                },
                {
                    id: 3,imageUrl: 'images/products/thumbs/3-thumb.jpg',
                    city: 'Kraków',
                },
                {
                    id: 3,imageUrl: 'images/products/thumbs/2-thumb.jpg',
                    city: 'Łódź',
                },
                {
                    id: 3,imageUrl: 'images/products/thumbs/3-thumb.jpg',
                    city: 'Lublin',
                },
                {
                    id: 3,
                    imageUrl: 'images/products/thumbs/2-thumb.jpg',
                    city: 'Rzeszów',
                },
                {
                    id: 3,
                    imageUrl: 'images/products/thumbs/4-thumb.jpg',
                    city: 'Poznań',
                },
                {
                    id: 3,
                    imageUrl: 'images/products/thumbs/1-thumb.jpg',
                    city: 'Wrocław',
                }
            ],
        }
    },
    methods: {
        getPropertiesFromApi: async function (){
            this.isLoading = !this.isLoading;
            let self = this;
            setTimeout(function(){
                self.isLoading = !self.isLoading;
                self.filteredResults = !self.filteredResults;
            }, 2500);
    }
  }
};
</script>
