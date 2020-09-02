<template>
    <main class="container">
      <SearchProperties></SearchProperties>
      <SearchPropertiesResults></SearchPropertiesResults>
    </main>
</template>

<script>
// @ is an alias to /src
import SearchProperties from "@/components/SearchProperties.vue";
import SearchPropertiesResults from "@/components/SearchPropertiesResults.vue";

export default {
  name: "Advertisements",
  components: {
    SearchProperties,
    SearchPropertiesResults
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
                    rentType: 'Na pokoje',
                    buildingType: 'Dom',
                    heating: 'Gazowe',
                    flatArea: '1300',
                    market: 'Wtórny',
                    rentTerm: 'Krótkoterminowy'
                },
                {
                    url: 'fb.com',
                    imageUrl: 'images/products/thumbs/1-thumb.jpg',
                    city: 'Gdańsk',
                },
                {
                    url: 'fb.com',
                    imageUrl: 'images/products/thumbs/3-thumb.jpg',
                    city: 'Kraków',
                },
                {
                    url: 'fb.com',
                    imageUrl: 'images/products/thumbs/2-thumb.jpg',
                    city: 'Łódź',
                },
                {
                    url: 'fb.com',
                    imageUrl: 'images/products/thumbs/3-thumb.jpg',
                    city: 'Lublin',
                },
                {
                    url: 'fb.com',
                    imageUrl: 'images/products/thumbs/2-thumb.jpg',
                    city: 'Rzeszów',
                },
                {
                    url: 'fb.com',
                    imageUrl: 'images/products/thumbs/4-thumb.jpg',
                    city: 'Poznań',
                },
                {
                    url: 'fb.com',
                    imageUrl: 'images/products/thumbs/1-thumb.jpg',
                    city: 'Wrocław',
                }
            ],
        }
    },
};
</script>
