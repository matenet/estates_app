<template>
  <main>
    <div class="search">

      <form
              class="form-filter"
              :class="{
                'pokoje' : rentingScenario === 'room',
                'doby' : rentingScenario === 'day',
                'mieszkanias' : rentingScenario === 'whole',
                }" id="add-advert-form" method="post" action="dodaj-zgloszenie2.html">
        <div class="parametry_nieruchomosci">
          <h3 class="title-form">parametry nieruchomości:</h3>
          <div class="miasto col_1">
            <h4>MIASTO</h4>
            <label><input type="text" name="miasto" required v-model="place" placeholder="WPISZ MIASTO" /></label>
          </div>

          <div class="ulica col_1">
            <h4>ULICA</h4>
            <label><input type="text" v-model="street" name="ulica" placeholder="WPISZ ULICĘ" /></label>
          </div>

          <div class="rynek radio-list col_2">
            <h4>RYNEK</h4>
            <label :class="{ 'active' : market === 'primaryMarket'}">
              <input type="radio" name="rodz_nier" value="primaryMarket" v-model="market" required/>pierwotny</label>
            <label :class="{ 'active' : market === 'afterMarket'}">
              <input type="radio" name="rodz_nier" value="afterMarket" v-model="market" required/>wtórny</label>
          </div>

          <div class="rodz_najm radio-list col_2">
            <h4>WYNAJEM</h4>
            <label :class="{ 'active' : rentingTerm === 'long'}">
              <input type="radio" name="rodz_najm" value="long" v-model="rentingTerm" required/>długoterminowy</label>
            <label :class="{ 'active' : rentingTerm === 'short'}">
              <input type="radio" name="rodz_najm" value="short" v-model="rentingTerm" required/>krótkoterminowy</label>
          </div>
        </div>

        <div class="center">
          <div class="form_najm radio-list col_3">
            <h3 class="title-form">Model najmu</h3>
            <label :class="{ 'active' : rentingScenario === 'room'}">
              <div class="info-nopop">Wybierz tą opcję jeżeli posiadasz nieruchomość którą wynajmujesz długoterminowo</div>
              <input type="radio" name="form_najm" value="room" v-model="rentingScenario" />na pokoje</label>
            <label :class="{ 'active' : rentingScenario === 'day'}">
              <div class="info-nopop">Wybierz tą opcję jeżeli posiadasz nieruchomość którą wynajmujesz krótkoterminowo</div>
              <input type="radio" name="form_najm" value="day" v-model="rentingScenario" />na doby</label>
            <label :class="{ 'active' : rentingScenario === 'whole'}">
              <div class="info-nopop">Wybierz tą opcję jeżeli posiadasz jedno mieszkanie lub nieruchomość którą podzieliłeś na mniejsze mieszkania</div>
              <input type="radio" name="form_najm" value="whole" v-model="rentingScenario" />wynajem całych mieszkań
            </label>
          </div>
          <transition name="fade">
            <div class="kalkulator_inwestycji zl active" v-if="rentingScenario !== ''">
              <h3 class="title-form">kalkulator inwestycji: <span class="info-pop"> <strong>Kalkulator oblicza zwrot z inwestycji w skali roku</strong></span></h3>

              <div class="cena_nieruchomosci col_1">
                <h4>CENA NIERUCHOMOŚCI</h4>
                <label><input type="number" v-model="price" placeholder="WPISZ KWOTĘ" min="0" name="cena_nieruchomosci" required/></label>
              </div>

              <div class="przychod_wynajmu_mc col_1 pokoje mieszkania">
                <h4>PRZYCHÓD Z WYNAJMU / MC</h4>
                <label><input type="number" v-model="rentRevenue" placeholder="PRZYCHÓD MIESIĘCZNY" min="0"  name="przychod_wynajmu_mc"/></label>
              </div>

              <div class="koszt_ut_mie col_1 doby pokoje">
                <h4>KOSZT UTRZYMANIA NIERUCHOMOŚCI / MC</h4>
                <label><input type="number" v-model="monthCost" placeholder="KOSZTY MIESIĘCZNE" min="0" name="koszt_utrzymania"/></label>
              </div>

              <!--<div class="oblozenie_mc col_1 doby">-->
                <!--<h4>OBŁOŻENIE / MC</h4>-->
                <!--<div class="full_col"><input type="radio" v-model="countingTypeAmountDays" value="daysAmount" name="oblozenie"/>ILOŚĆ DNI</div>-->
                <!--<div class="full_col"><input type="radio" v-model="countingTypeAmountDays" value="percent" name="oblozenie"/>PROCENTOWO (%)</div>-->
                <!--<label><input type="number" v-model="averageAmountDays" placeholder="PODAJ ŚREDNIĄ LICZBĘ OBŁOŻENIA" min="0" name="koszt_zarzadzania"/></label>-->
              <!--</div>-->

              <div class="koszt_zarz col_1">
                <h4>KOSZT ZARZĄDZANIA / MC</h4>
                <div class="full_col">
                  <input type="radio" v-model="managementCostType" value="warranty" name="warranty"/>Z GWARANCJĄ CZYNSZU</div>
                <div class="full_col">
                  <input type="radio" v-model="managementCostType" value="noWarranty" name="warranty"/>BEZ GWARANCJI CZYNSZU</div>
                <div class="full_col">
                  <input type="radio" v-model="managementCostType" value="notApplicable" name="warranty"/>BEZ GWARANCJI CZYNSZU</div>
                <label v-if="managementCostType !== 'notApplicable'">
                  <input type="number" v-model="managementCost" placeholder="PODAJ KOSZTY ZARZĄDZANIA NIERUCHOMOSCIĄ" min="0" value="0" name="costOfManagement"/>
                </label>
              </div>

              <transition name="fade">
              <!--<div id="roi" :class="{ 'active' : rentingTerm === 'long'}">-->
              <div id="roi" class="active">
                ROI: {{ roi }}%
                <span class="info-pop"><strong>Końcowy zwrot z inwestycji (w skali roku) liczony jest na podstawie powyższych danych. Obliczenia mają charakter szacunkowy i informacyjny. </strong></span>
              </div>
              </transition>
            </div>

          </transition>

          <transition name="fade">
            <div id="parametry" class="container active" v-if="rentingScenario">

              <h3 class="title-form">dokładne parametry nieruchomości:</h3>

              <div class="rodz_bud radio-list col_5">
                <h4>RODZAJ BUDYNKU</h4>
                <label><input type="radio" v-model="typeOfBuilding" name="rodz_bud" value="apt-block" required/>blok</label>
                <label><input type="radio" v-model="typeOfBuilding" name="rodz_bud" value="apt-tenement" required/>kamienica</label>
                <label><input type="radio" v-model="typeOfBuilding" name="rodz_bud" value="house" required/>dom</label>
                <label><input type="radio" v-model="typeOfBuilding" name="rodz_bud" value="apt-modern" required/>nowe budownictwo</label>
              </div>

              <div class="form_wla radio-list col_3">
                <h4>FORMA WŁASNOŚCI</h4>
                <label><input type="radio" name="form_wla" v-model="ownerShipType" value="sharehold" required/>spółdzielcze własno.</label>
                <label><input type="radio" name="form_wla" v-model="ownerShipType" value="leasehold" required/>spółdzielcze wł. z kw</label>
                <label><input type="radio" name="form_wla" v-model="ownerShipType" value="freehold" required/>pełna własność</label>
              </div>

              <div class="ogrze radio-list col_3">
                <h4>OGRZEWANIE</h4>
                <label><input type="radio" v-model="heating" name="ogrze" value="miejskie" required/>miejskie</label>
                <label><input type="radio" v-model="heating" name="ogrze" value="gazowe" required/>gazowe</label>
                <label><input type="radio" v-model="heating" name="ogrze" value="elektryczne" required/>elektryczne</label>
              </div>

              <div class="winda radio-list col_2">
                <h4>WINDA</h4>
                <label><input type="radio" v-model="lift" name="winda" value="true" required/>tak</label>
                <label><input type="radio" v-model="lift" name="winda" value="false" required/>nie</label>
              </div>

              <div class="kwatery radio-list col_2 mieszkania">
                <h4>KWATERY PRACOWNICZE</h4>
                <label><input type="radio" v-model="employeeFlat" name="kwatery" value="true" />tak</label>
                <label><input type="radio" v-model="employeeFlat" name="kwatery" value="false" />nie</label>
              </div>

              <div class="wynajete radio-list col_2 pokoje mieszkania">
                <h4>WYNAJĘTE <span class="info-pop"><strong>Wybierając opcję "NIE", zwrot z inwestycji będzie prognozowany</strong></span></h4>

                <label><input type="radio" v-model="leased" name="wynajete" value="true" />tak</label>
                <label><input type="radio" v-model="leased" name="wynajete" value="false" />nie</label>
              </div>

              <div class="ilo_miesz mieszkania">
                <h4>ILOŚĆ MIESZKAŃ W PAKIECIE</h4>
                <label><input type="number" v-model="amountOfFlats" placeholder="" min="0" max="15" step="1" name="ilosc_mieszkan"/></label>
              </div>

              <div class="ilo_najem mieszkania pokoje">
                <h4>ILOŚĆ NAJEMCÓW</h4>
                <label><input type="number" v-model="amountOfShareholders" placeholder="Podaj liczbę osób w całej nieruchomości" min="0" name="ilosc_najemcow"/></label>
              </div>

              <div class="metraz col_1">
                <h4>METRAŻ</h4>
                <label><input type="number" v-model="flatArea" placeholder="PODAJ METRAŻ CAŁEJ NIERUCHOMOŚCI" min="1" name="metraz" required/></label>
              </div>

                <div class="ilo_pokoi pokoje">
                    <h4>ILOŚĆ POKOI</h4>
                    <label>
                        <input type="number" @change="countRooms" v-model="amountOfRooms" placeholder="" min="1" max="15" step="1" name="ilo pokoi"/>
                    </label>
                </div>

              <div class="lazienki col_1">
                <h4>ILOŚĆ ŁAZIENEK</h4>
                <label><input type="number" v-model="amountOfBathrooms" placeholder="" min="1" max="10" step="1" name="ilość łazienek" required/></label>
              </div>

              <div class="pietro col_1">
                <h4>ILOŚĆ PIĘTER</h4>
                <label><input type="number" v-model="amountOfFloors" placeholder="" min="1" max="30" step="1" name="ilość łazienek" required/></label>
              </div>
              <div class="dane_media col_2">
                    <div class="spacer">
                        <h4>WIRTUALNY SPACER</h4>
                        <label><input type="text" placeholder="WKLEJ LINK" name="wirtualny_spacer"/></label>
                    </div>
                    <div class="film">
                        <h4>FILM</h4>
                        <label><input type="text" placeholder="WKLEJ LINK" name="film"/></label>
                    </div>
              </div>

              <div v-if="rentingScenario === 'room' || rentingScenario === 'whole'" class="parametry_szczegolowe_pokoje col_4 pokoje active">
                  <h3 class="title-form">parametry szczegółowe:</h3>
                  <div v-for="room in rooms" class="pokoj">
                      <div class="czynsz col_1">
                        <h4>CZYNSZ ZA POKÓJ</h4>
                          <label>
                            <input type="number" v-model="room.monthRent" placeholder="WPISZ CENĘ">
                          </label>
                      </div>
                      <div class="media col_1">
                        <h4>OPŁATY ZA MEDIA</h4>
                          <label>
                            <input type="number" v-model="room.mediaPayment" placeholder="PRĄD, WODA, GAZ, ITP.">
                          </label>
                      </div>
                      <div class="metraz col_1">
                        <h4>METRAŻ</h4>
                          <label>
                            <input type="number" v-model="room.area" placeholder="PODAJ METRAŻ POKOJU">
                          </label>
                      </div>
                      <div class="radio-list col_1">
                        <h4>RODZAJ POKOJU</h4>
                          <label>
                            <input type="radio" v-model="room.roomType" value="single" >
                            JEDNOOSOBOWY
                          </label>
                        <label>
                            <input type="radio" v-model="room.roomType" value="double" >
                          DWUOSOBOWY
                          </label>
                      </div>
                  </div>
              </div>

              <div class="dodaj_zdj col_8">
                <h3 class="title-form">DODAJ ZDJĘCIA</h3>
                <label><input type="file" name="dodaj_zdj" value="zdjecie1"> Zdjęcie 1</label>
                <label><input type="checkbox" name="dodaj_zdj" value="zdjecie2"> Zdjęcie 2</label>
                <label><input type="checkbox" name="dodaj_zdj" value="zdjecie3"> Zdjęcie 3</label>
                <label><input type="checkbox" name="dodaj_zdj" value="zdjecie4"> Zdjęcie 4</label>
                <label><input type="checkbox" name="dodaj_zdj" value="zdjecie5"> Zdjęcie 5</label>
                <label><input type="checkbox" name="dodaj_zdj" value="zdjecie6"> Zdjęcie 6</label>
                <label><input type="checkbox" name="dodaj_zdj" value="zdjecie7"> Zdjęcie 7</label>
                <label><input type="checkbox" name="dodaj_zdj" value="zdjecie8"> Zdjęcie 8</label>
              </div>

               <div class="dane_kont col_3">
                   <h3 class="title-form">Dane kontaktowe</h3>
                  <label><input type="text" placeholder="IMIĘ" name="imię"/></label>
                  <label><input type="text" placeholder="ADRES E-MAIL" name="adres e-mail"/></label>
                  <label><input type="text" placeholder="NR TELEFONU" name="nr telefonu"/></label>
              </div>

              <div class="col_2 submit">
                <div>
                  <input type="submit" name="submit" value="podgląd" class="max-width" onclick="location.href='produkt-podglad.html';" />
                </div>
                <div>
                  <input type="submit" name="submit" value="dodaj ogłoszenie" class="max-width" />
                </div>
              </div>
            </div>
          </transition>
        </div>
      </form>
    </div>
  </main>
</template>
<script>
  // @ is an alias to /src

  export default {
    name: "AddAdvertisement",
    components: {
    },
    data () {
      return {
        market: '',
        street: '',
        place: '',
        rentingScenario: '',
        rentingTerm: '',
        price: '',
        rentRevenue: '',
        dayPrice: '',
        employeeFlat: false,
        monthCost: '',
        countingTypeAmountDays: '',
        averageAmountDays: '',
        typeOfBuilding: '',
        heating: '',
        lift: false,
        leased: false,
        virtualWalkUrl: '',
        videoUrl: '',
        companyWebsiteUrl: '',
        amountOfFloors: 1,
        amountOfRooms: 1,
        amountOfBathrooms: 1,
        amountOfFlats: 1,
        amountOfShareholders: 0,
        flatArea: 1,
        ownerShipType: '',
        managementCost: '',
        managementCostType: '',
          rooms: [{
              monthRent: '',
              mediaPayment: '',
              area: '',
              roomType: '',
          }]
      }
    },
    computed: {
        entity: function(){
          if (this.countingTypeAmountDays === 'percent') {
            return ((this.averageAmountDays / 100) * 30).toFixed();
          } else {
            return this.averageAmountDays
          }
        },
        roi: function() {
          return 15;
        },
      },
      methods: {
          countRooms: function () {
              this.rooms = [];
              for (let i = 0; i < this.amountOfRooms; i++) {
                  this.rooms.push({
                      monthRent: '',
                      mediaPayment: '',
                      area: '',
                      roomType: '',
                  })
              }
          },
      }
  };
</script>