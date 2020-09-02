<template>
    <section>
        <h3 class="title">PROMOWANE OGŁOSZENIA</h3>

        <div class="products filter-result col_4">
            <div class="item" v-for="(value) in computedProperties">
                <div class="content">
                    <router-link :to="{ name: 'singleEstate', params: { property_id: value.id }}">
                        <img :src="value.imageUrl" title="Obraz" />
                        <ul class="hover">
                            <li>FORMA NAJMU <span>CAŁE MIESZKANIE</span></li>
                            <li>RODZAJ BUDYNKU <span>DOM</span></li>
                            <li>OGRZEWANIE <span>GAZOWE</span></li>
                            <li>METRAŻ <span>300 m2</span></li>
                        </ul>
                        <ul class="desc">
                            <li>CENA: <span>640 000 000 zł</span></li>
                            <li>ZYSK Z NAJMU/MC: <span>10 000 zł</span></li>
                            <li>ROI: <span>20 %</span></li>
                            <li>MIASTO: <span>warszawa</span></li>
                        </ul>
                    </router-link>
                </div>
            </div>
        </div>
        <router-link :to="{ name: 'contact' }" class="show-more">ZOBACZ WIĘCEJ</router-link>
    </section>
</template>

<script>
    export default {
        name: "RecommendedProperties",
        data () {
            return {
                properties: [
                    {
                        id: '2',
                        imageUrl:'images/products/thumbs/1-thumb.jpg',
                        title: 'Kraków',
                    },
                    {
                        id: '2',
                        imageUrl: 'images/products/thumbs/2-thumb.jpg',
                        title: 'Kraków',
                    },
                    {
                        id: 1,
                        imageUrl: 'images/products/thumbs/3-thumb.jpg',
                        title: 'Kraków',
                    },
                    {
                        id: 1,
                        imageUrl: 'images/products/thumbs/4-thumb.jpg',
                        title: 'Kraków',
                    },
                    {
                        id: 1,
                        imageUrl: 'images/products/thumbs/2-thumb.jpg',
                        title: 'Kraków',
                    },
                    {
                        id: 1,
                        imageUrl: 'images/products/thumbs/3-thumb.jpg',
                        title: 'Kraków',
                    },
                    {
                        id: 1,
                        imageUrl: 'images/products/thumbs/4-thumb.jpg',
                        title: 'Kraków',
                    },
                    {
                        id: 1,
                        imageUrl: 'images/products/thumbs/1-thumb.jpg',
                        title: 'Kraków',
                    }
                ],
                limit: 8
            }
        },
        computed: {
            computedProperties(){
                return this.limit ? this.properties.slice(0,this.limit) : this.properties
            }
        }
    }
</script>

<style scoped>

</style>