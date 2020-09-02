<template>
    <div class="search">
        <section>
            <h3 class="title">Wyniki wyszukiwania</h3>
            <div class="products filter-result col_4">
                <div class="item" v-for="(value) in computedProperties">
                    <div class="content">
                        <router-link :to="{ name: 'singleEstate', params: { property_id: value.id }}" >
                            <img :src="value.imageUrl" title="Obraz" />
                            <ul class="hover">
                                <li>MODEL NAJMU <span>{{ value.rentType }}</span></li>
                                <li>RODZAJ BUDYNKU <span>{{ value.buildingType }}</span></li>
                                <li>OGRZEWANIE <span>{{ value.heating }}</span></li>
                                <li>METRAŻ <span>{{ value.flatArea }} m2</span></li>
                            </ul>
                            <ul class="desc">
                                <li>CENA: <span>{{ value.price }} zł</span></li>
                                <li>ZYSK Z NAJMU/MC: <span>{{ value.rentRevenue }} zł</span></li>
                                <li>ROI: <span>{{ value.roi }} %</span></li>
                                <li>MIASTO: <span>{{ value.city }}</span></li>
                            </ul>
                        </router-link>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: "SearchProperties",
        data () {
            return {
                limit: 8
            }
        },
        computed: {
            computedProperties(){
                return this.limit ? this.$parent.properties.slice(0,this.limit) : this.$parent.properties
            }
        }
    }
</script>

<style scoped>

</style>