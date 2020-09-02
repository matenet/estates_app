<template>
    <section>
        <h3 class="title">zarządzanie nieruchomościami</h3>

        <div class="products filter-result col_4">
            <div class="item" v-for="(value) in companies">
                    <div class="content">
                        <a :href="value.url" target="_blank">
                            <img :src="value.imageUrl" :title="value.title" class="company-img" />
                            <span class="company-city">{{ value.title }}</span>
                        </a>
                    </div>
            </div>
        </div>
        <router-link :to="{ name: 'contact' }" class="show-more">ZOBACZ WIĘCEJ</router-link>
    </section>
</template>

<script>
    /* eslint-disable */
    export default {
        name: "RecommendedCompanies",
        data () {
            return {
            companies: [
                {
                    url: 'https://fb.com',
                    imageUrl:'images/logos/logo1.jpg',
                    title: 'Kraków',
                },
                {
                    url: 'fb.com',
                    imageUrl: 'images/logos/logo4.jpg',
                    title: 'Kraków',
                },
                {
                    url: 'fb.com',
                    imageUrl: 'images/logos/logo2.jpg',
                    title: 'Kraków',
                },
                {
                    url: 'fb.com',
                    imageUrl: 'images/logos/logo3.jpg',
                    title: 'Kraków',
                },
                {
                    url: 'fb.com',
                    imageUrl: 'images/logos/logo1.jpg',
                    title: 'Kraków',
                },
                {
                    url: 'fb.com',
                    imageUrl: 'images/logos/logo3.jpg',
                    title: 'Kraków',
                },
                {
                    url: 'fb.com',
                    imageUrl: 'images/logos/logo4.jpg',
                    title: 'Kraków',
                },
                {
                    url: 'fb.com',
                    imageUrl: 'images/logos/logo1.jpg',
                    title: 'Kraków',
                }
            ]
        }
    }
    }
</script>

<style scoped>

</style>