<template>
    <main class="container">
        <Spinner v-if="isLoading" fadeIn="quarter" name="folding-cube" color="#c7c2d1" style="margin: 70px auto"/>
        <transition name="fade">
            <SearchPropertiesResults v-if="filteredResults"></SearchPropertiesResults>
        </transition>
    </main>
</template>

<script>
// @ is an alias to /src
import SearchProperties from "@/components/SearchProperties.vue";
import SearchPropertiesResults from "@/components/SearchPropertiesResults.vue";
import Spinner from 'vue-spinkit';

export default {
  name: "Estates",
  components: {
    SearchProperties,
    SearchPropertiesResults,
      Spinner,
  },
    data () {
        return {
            properties: [
                {
                    url: 'http://localhost:8080/nieruchomosc/2',
                    imageUrl:'images/products/thumbs/4-thumb.jpg',
                    city: 'Kraków',
                    price: 647000,
                    rentRevenue: 9500,
                    managementRevenue: 8760,
                    roi: 15,
                    rentType: 'Całe mieszkanie',
                    buildingType: 'Dom',
                    heating: 'Gazowe',
                    flatArea: '1300',
                    market: 'Wtórny',
                    rentTerm: 'Krótkoterminowy'
                },
                {
                    url: 'http://localhost:8080/nieruchomosc/9',
                    imageUrl: 'images/products/thumbs/1-thumb.jpg',
                    city: 'Gdańsk',
                },
                {
                    url: 'http://localhost:8080/nieruchomosc/8',
                    imageUrl: 'images/products/thumbs/3-thumb.jpg',
                    city: 'Kraków',
                },
                {
                    url: 'http://localhost:8080/nieruchomosc/6',
                    imageUrl: 'images/products/thumbs/2-thumb.jpg',
                    city: 'Łódź',
                },
                {
                    url: 'http://localhost:8080/nieruchomosc/1',
                    imageUrl: 'images/products/thumbs/3-thumb.jpg',
                    city: 'Lublin',
                },
                {
                    url: 'http://localhost:8080/nieruchomosc/3',
                    imageUrl: 'images/products/thumbs/2-thumb.jpg',
                    city: 'Rzeszów',
                },
                {
                    url: 'http://localhost:8080/nieruchomosc/2',
                    imageUrl: 'images/products/thumbs/4-thumb.jpg',
                    city: 'Poznań',
                },
                {
                    url: 'http://localhost:8080/nieruchomosc/4',
                    imageUrl: 'images/products/thumbs/1-thumb.jpg',
                    city: 'Wrocław',
                }
            ],
        }
    },
};
</script>
