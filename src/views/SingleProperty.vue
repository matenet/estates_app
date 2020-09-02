<template>
    <main>
        <ul class="specyfication col_3">
            <li> <strong>wynajem:</strong> krótkoterminowy </li>
            <li> <strong>Model najmu:</strong> wynajem całych mieszkań </li>
            <li> <strong>rynek:</strong> wtórny </li>
        </ul>
        <div class="produkt col_2">
                    <carousel :items="1" :autoplay="true" :nav="false" class="slider-product">
                        <img src="/images/products/slider/product1-small.jpg" />
                        <img src="/images/products/slider/product2-small.jpg" />
                    </carousel>

            <div class="info opis1">
                <h3 class="title-form">parametry finansowe:</h3>
                <ul>
                    <li>CENA <span>640 000 000 zł</span></li>
                    <li>ROI <span>15%</span> <span class="info-pop"> <strong>Zwrot z inwestycji w skali roku. O szczegóły zapytaj sprzedawcę.</strong></span></li>
                    <li>PRZYCHÓD/MC <span>4200 zł</span> </li>
                    <li>KOSZTY UTRZYMANIA/MC <span>850 zł</span> </li>
                    <li>ZYSK Z NAJMU/MC <span>3500 zł</span> </li>
                    <li>ROCZNY ZYSK Z NAJMU <span>42 000 zł</span> </li>
                    <li class="gwarancja">KOSZT ZARZĄDZANIA/MC <span>700 zł</span> </li>
                    <li>ROCZNY ZYSK Z NAJMU Z ZARZĄDZANIEM <span>32 400 zł</span> </li>
                </ul>
            </div>

            <div class="info opis2">
                <h3 class="title-form">parametry nieruchomości:</h3>
                <ul>
                    <li>RODZAJ BUDYNKU: <span>blok</span></li>
                    <li> FORMA WŁASNOŚCI <span>pełna własność</span> </li>
                    <li> OGRZEWANIE <span>miejskie</span> </li>
                    <li> WINDA <span>tak</span> </li>
                    <li> WYNAJĘTE <span class="info-pop"><strong>Zwrot z inwestycji jest prognozowany</strong></span> <span>nie</span> </li>
                    <li> ILOŚĆ NAJEMCÓW <span>5</span> </li>
                    <li> METRAŻ <span>60 m2</span> </li>
                    <li> ILOŚĆ ŁAZIENEK <span>1</span> </li>
                    <li> PIĘTRO <span>9</span> </li>
                    <li> LICZBA MIESZKAŃ W PAKIECIE <span>4</span> </li>
                    <li> KWATERY PRACOWNICZE: <span>nie</span> </li>
                </ul>
            </div>

            <div class="zobacz_takze">
                <div class="col_2">
                    <div class="video">
                        <h4>video:</h4>
                        <a href="#">
                            <img src="/images/products/thumbs/1-thumb.jpg" />
                        </a>
                    </div>
                    <div class="spacer3d">
                        <h4>spacer 3d:</h4>
                        <a href="#">
                            <img src="/images/products/thumbs/1-thumb.jpg" />
                        </a>
                    </div>
                </div>

                <div class="specjalista">
                    <h3 class="title2">MICHAŁ KOWALSKI</h3>
                    <div class="user">
                        <img src="/images/users/user1.jpg" />
                    </div>
                    <ul>
                        <li class="flaticon-phone-receiver">
                            + 48 533 333 333
                        </li>
                        <li class="flaticon-envelope">
                            misiekkowalski@ig.pl
                        </li>
                        <li class="flaticon-domain-registration">
                            <a href="http://cubro.pl">www.cubro.pl</a>
                        </li>
                    </ul>
                </div>
            </div>

        </div>

        <div class="parametry">
            <h3 class="title-form">PARAMETRY SZCZEGÓŁOWE</h3>

            <div class="col_4">
                <div class="product">
                    <h3 class="title-form">mieszkanie 1</h3>
                    <ul>
                        <li> CZYNSZ <span>1400 zł</span> </li>
                        <li> OPŁATY <span>350 zł</span> </li>
                        <li> METRAŻ <span>15 m2</span> </li>
                        <li> RODZAJ <span>Mikrokawalerka</span> </li>
                    </ul>
                </div>
                <div class="product">
                    <h3 class="title-form">mieszkanie 2</h3>
                    <ul>
                        <li> CZYNSZ <span>1400 zł</span> </li>
                        <li> OPŁATY <span>350 zł</span> </li>
                        <li> METRAŻ <span>15 m2</span> </li>
                        <li> RODZAJ <span>Mikrokawalerka</span> </li>
                    </ul>
                </div>
                <div class="product">
                    <h3 class="title-form">mieszkanie 3</h3>
                    <ul>
                        <li> CZYNSZ <span>1400 zł</span> </li>
                        <li> OPŁATY <span>350 zł</span> </li>
                        <li> METRAŻ <span>15 m2</span> </li>
                        <li> RODZAJ <span>Mikrokawalerka</span> </li>
                    </ul>
                </div>
                <div class="product">
                    <h3 class="title-form">mieszkanie 4</h3>
                    <ul>
                        <li> CZYNSZ <span>1400 zł</span> </li>
                        <li> OPŁATY <span>350 zł</span> </li>
                        <li> METRAŻ <span>15 m2</span> </li>
                        <li> RODZAJ <span>Mikrokawalerka</span> </li>
                    </ul>
                </div>

            </div>

        </div>

        <iframe class="google-map-product" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d69750.08677292471!2d20.91641825453532!3d52.177528079635856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4719335b03be8cbb%3A0x7d6d46fd38ccb1b8!2sKazimierza+Wielkiego%2C+05-077+Warszawa!5e0!3m2!1spl!2spl!4v1557275239194!5m2!1spl!2spl"frameborder="0" style="border:0" allowfullscreen></iframe>
    </main>
</template>

<script>
    import carousel from 'vue-owl-carousel';
    export default {
        name: "SingleProperty",
        components: { carousel },
    }
</script>