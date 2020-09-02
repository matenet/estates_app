<template>
  <main>
    <div class="search">

      <form
              class="form-filter"
              :class="{
                'pokoje' : rentingScenario === 'room',
                'doby' : rentingScenario === 'day',
                'mieszkania' : rentingScenario === 'whole',
                }"
              id="add-advert-form" method="post" action="dodaj-zgloszenie2.html">
        <div class="parametry_nieruchomosci">
          <h3 class="title-form">parametry nieruchomości:</h3>
          <div class="miasto col_1">
            <h4>MIASTO</h4>
            <label><input type="text" name="miasto" required v-model="place" placeholder="Wpisz miasto" /></label>
          </div>

          <div class="ulica col_1">
            <h4>ULICA</h4>
            <label><input type="text" v-model="street" name="ulica" placeholder="Wpisz ulicę" /></label>
          </div>

          <div class="rynek radio-list col_2">
            <h4>RYNEK</h4>
            <label :class="{ 'active' : market === 'primaryMarket'}" class="cursor-pointer" for="rodz_nier_primary">
              <input type="radio" id="rodz_nier_primary" value="primaryMarket" v-model="market" required/>Pierwotny</label>
            <label :class="{ 'active' : market === 'afterMarket'}" class="cursor-pointer" for="rodz_nier_after">
              <input type="radio" id="rodz_nier_after" value="afterMarket" v-model="market" required/>Wtórny</label>
          </div>

          <div class="rodz_najm radio-list col_2">
            <h4>WYNAJEM</h4>
            <label :class="{ 'active' : rentingTerm === 'long'}" class="cursor-pointer" for="rodz_najm_long">
              <input type="radio" id="rodz_najm_long" value="long" v-model="rentingTerm" required/>Długoterminowy</label>
            <label :class="{ 'active' : rentingTerm === 'short'}" class="cursor-pointer" for="rodz_najm_short">
              <input type="radio" id="rodz_najm_short" value="short" v-model="rentingTerm" required/>Krótkoterminowy</label>
          </div>
        </div>
          <transition name="fade">
              <div class="kalkulator_inwestycji zl active"">
              <h3 class="title-form">kalkulator inwestycji: <span class="info-pop"> <strong>Kalkulator oblicza zwrot z inwestycji w skali roku</strong></span></h3>

              <div class="cena_nieruchomosci col_1">
                  <h4>CENA NIERUCHOMOŚCI</h4>
                  <label><input type="number" v-model="price" placeholder="Wpisz kwotę" min="0" name="cena_nieruchomosci" required/></label>
              </div>

              <div class="przychod_wynajmu_mc col_1">
                  <h4>PRZYCHÓD Z WYNAJMU / MC</h4>
                  <label><input type="number" v-model="rentRevenue" placeholder="Przychód miesięczny" min="0"  name="przychod_wynajmu_mc"/></label>
              </div>

              <div class="koszt_ut_mie col_1">
                  <h4>KOSZT UTRZYMANIA NIERUCHOMOŚCI / MC</h4>
                  <label><input type="number" v-model="monthCost" placeholder="Koszty miesięczne" min="0" name="koszt_utrzymania"/></label>
              </div>

              <div class="koszt_zarz col_1">
                  <h4>KOSZT ZARZĄDZANIA / MC</h4>
                  <div class="full_col" @click="managementCostType = 'warranty'">
                      <input type="radio" v-model="managementCostType" value="warranty" name="warranty"/>Z gwarancją czynszu</div>
                  <div class="full_col" @click="managementCostType = 'noWarranty'">
                      <input type="radio" v-model="managementCostType" value="noWarranty" name="warranty"/>Bez gwarancji czynszu</div>
                  <div class="full_col" @click="managementCostType = 'notApplicable'; managementCost = 0">
                      <input type="radio" v-model="managementCostType" value="notApplicable" name="warranty"/>Nie dotyczy</div>
                  <label v-if="managementCostType !== 'notApplicable'" for="costOfManagement">
                      <input type="number" v-model="managementCost" placeholder="Podaj koszty zarządzania nieruchomością" min="0" value="0" id="costOfManagement"/>
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

        <div class="center">
          <div class="form_najm radio-list col_3">
            <h3 class="title-form">Model najmu</h3>
            <label :class="{ 'active' : rentingScenario === 'room'}"class="cursor-pointer" >
              <div class="info-nopop">Wybierz tą opcję jeżeli posiadasz nieruchomość którą wynajmujesz długoterminowo</div>
              <input type="radio" name="form_najm" value="room" v-model="rentingScenario" />Na pokoje</label>
            <label :class="{ 'active' : rentingScenario === 'day'}" class="cursor-pointer" >
              <div class="info-nopop">Wybierz tą opcję jeżeli posiadasz nieruchomość którą wynajmujesz krótkoterminowo</div>
              <input type="radio" name="form_najm" value="day" v-model="rentingScenario" />Na doby</label>
            <label :class="{ 'active' : rentingScenario === 'whole'}" class="cursor-pointer" >
              <div class="info-nopop">Wybierz tą opcję jeżeli posiadasz jedno mieszkanie lub nieruchomość którą podzieliłeś na mniejsze mieszkania</div>
              <input type="radio" name="form_najm" value="whole" v-model="rentingScenario" />Wynajem całych mieszkań
            </label>
          </div>

          <transition name="fade">
            <div id="parametry" class="container active" v-if="rentingScenario">

              <h3 class="title-form">dokładne parametry nieruchomości:</h3>

              <div class="rodz_bud radio-list col_4">
                <h4>RODZAJ BUDYNKU</h4>
                <label :class="{ 'active' : typeOfBuilding === 'apt-block'}" class="cursor-pointer" >
                  <input type="radio" v-model="typeOfBuilding" name="rodz_bud" value="apt-block" required/>
                  Blok
                </label>
                <label :class="{ 'active' : typeOfBuilding === 'apt-tenement'}" class="cursor-pointer" >
                  <input type="radio" v-model="typeOfBuilding" name="rodz_bud" value="apt-tenement" required/>
                  Kamienica
                </label>
                <label :class="{ 'active' : typeOfBuilding === 'house'}" class="cursor-pointer" >
                  <input type="radio" v-model="typeOfBuilding" name="rodz_bud" value="house" required/>
                  Dom
                </label>
                <label :class="{ 'active' : typeOfBuilding === 'apt-modern'}" class="cursor-pointer" >
                  <input type="radio" v-model="typeOfBuilding" name="rodz_bud" value="apt-modern" required/>
                  Nowe budownictwo
                </label>
              </div>

              <div class="form_wla radio-list col_3">
                <h4>FORMA WŁASNOŚCI</h4>
                <label :class="{ 'active' : ownerShipType === 'sharehold'}" class="cursor-pointer" >
                  <input type="radio" name="form_wla" v-model="ownerShipType" value="sharehold" required/>
                  Spółdzielcze własno.
                </label>
                <label :class="{ 'active' : ownerShipType === 'leasehold'}" class="cursor-pointer" >
                  <input type="radio" name="form_wla" v-model="ownerShipType" value="leasehold" required/>
                  Spółdzielcze wł. z kw
                </label>
                <label :class="{ 'active': ownerShipType === 'freehold'}" class="cursor-pointer" >
                  <input type="radio" name="form_wla" v-model="ownerShipType" value="freehold" required/>
                  Pełna własność
                </label>
              </div>

              <div class="ogrze radio-list col_3">
                <h4>OGRZEWANIE</h4>
                <label :class="{ 'active' : heating === 'miejskie'}" class="cursor-pointer" >
                  <input type="radio" v-model="heating" name="ogrze" value="miejskie" required/>
                  Miejskie
                </label>
                <label :class="{ 'active' : heating === 'gazowe'}" class="cursor-pointer" >
                  <input type="radio" v-model="heating" name="ogrze" value="gazowe" required/>
                  Gazowe
                </label>
                <label :class="{ 'active' : heating === 'elektryczne'}" class="cursor-pointer" >
                  <input type="radio" v-model="heating" name="ogrze" value="elektryczne" required/>
                  Elektryczne
                </label>
              </div>

              <div class="winda radio-list col_2">
                <h4>WINDA</h4>
                <label :class="{ 'active' : lift === 'true'}" class="cursor-pointer" >
                  <input type="radio" v-model="lift" name="winda" value="true" required/>
                  Tak
                </label>
                <label :class="{ 'active' : lift === 'false'}" class="cursor-pointer" >
                  <input type="radio" v-model="lift" name="winda" value="false" required/>
                  Nie
                </label>
              </div>

              <div class="kwatery radio-list col_2 mieszkania">
                <h4>KWATERY PRACOWNICZE</h4>
                <label :class="{ 'active' : employeeFlat === 'true'}" class="cursor-pointer" >
                  <input type="radio" v-model="employeeFlat" name="kwatery" value="true" />
                  Tak
                </label>
                <label :class="{ 'active' : employeeFlat === 'false'}" class="cursor-pointer" >
                  <input type="radio" v-model="employeeFlat" name="kwatery" value="false" />
                  Nie
                </label>
              </div>

              <div v-if="rentingScenario !== 'whole'" class="wynajete radio-list col_2 pokoje">
                <h4>WYNAJĘTE <span class="info-pop"><strong>Wybierając opcję "NIE", zwrot z inwestycji będzie prognozowany</strong></span></h4>

                <label :class="{ 'active' : leased === 'true'}" class="cursor-pointer" >
                  <input type="radio" v-model="leased" name="wynajete" value="true" />
                  Tak
                </label>
                <label :class="{ 'active' : leased === 'false'}" class="cursor-pointer" >
                  <input type="radio" v-model="leased" name="wynajete" value="false" />
                  Nie
                </label>
              </div>

              <div class="ilo_miesz mieszkania">
                <h4>ILOŚĆ MIESZKAŃ W PAKIECIE</h4>
                <label><input type="number" @change="countWholeFlats" v-model="amountOfFlats" placeholder="Podaj ilość mieszkań" min="0" max="15" step="1" name="ilosc_mieszkan"/></label>
              </div>

              <div class="ilo_najem mieszkania pokoje">
                <h4>ILOŚĆ NAJEMCÓW</h4>
                <label><input type="number" v-model="amountOfShareholders" placeholder="Podaj liczbę osób w całej nieruchomości" min="0" name="ilosc_najemcow"/></label>
              </div>

              <div class="metraz col_1">
                <h4>METRAŻ</h4>
                <label><input type="number" v-model="flatArea" placeholder="Podaj metraż całej nieruchomośći" min="1" name="metraz" required/></label>
              </div>

              <div class="ilo_pokoi pokoje doby">
                <h4>ILOŚĆ POKOI</h4>
                <label>
                  <input type="number" @change="countRooms" v-model="amountOfRooms" placeholder="Podaj ilość pokoi" min="1" max="15" step="1" name="ilo pokoi"/>
                </label>
              </div>

              <div class="lazienki col_1">
                <h4>ILOŚĆ ŁAZIENEK</h4>
                <label><input type="number" v-model="amountOfBathrooms" placeholder="Podaj ilość łazienek" min="1" max="10" step="1" name="ilość łazienek" required/></label>
              </div>

              <div class="pietro col_1">
                <h4>PIĘTRO</h4>
                <label><input type="number" v-model="whichFloor" placeholder="Podaj ilość pięter" min="0" max="30" step="1" name="ilość łazienek" required/></label>
              </div>

              <div v-if="rentingScenario === 'day'" class="cena_wynajmu_doba col_1">
                <h4>CENA WYNAJMU ZA DOBĘ</h4>
                <label><input type="number" v-model="dayPrice" placeholder="Podaj średnią cenę wynajmu" min="0" max="30" step="1" name="ilość łazienek" required/></label>
              </div>
              <div v-if="rentingScenario === 'day'" class="oblozenie_mc col_1">
                <h4>OBŁOŻENIE (%) / MC</h4>
                <label><input type="number" v-model="averageAmountDays" placeholder="Podaj średnią liczbę obłożenia" min="0" max="30" step="1" name="ilość łazienek" required/></label>
              </div>

              <div class="dane_media col_2">
                <div class="spacer">
                  <h4>WIRTUALNY SPACER</h4>
                  <label><input type="text" placeholder="Wklej link" name="wirtualny_spacer"/></label>
                </div>
                <div class="film">
                  <h4>WIDEO</h4>
                  <label><input type="text" placeholder="Wklej link" name="film"/></label>
                </div>
              </div>

              <div v-if="rentingScenario === 'room'" class="parametry_szczegolowe_pokoje col_4 pokoje active">
                <h3 class="title-form">parametry szczegółowe:</h3>
                <div v-for="room in rooms" class="pokoj">
                  <div class="czynsz col_1">
                    <h4>CZYNSZ ZA POKÓJ</h4>
                    <label>
                      <input type="number" v-model="room.monthRent" placeholder="Wpisz cenę">
                    </label>
                  </div>
                  <div class="media col_1">
                    <h4>OPŁATY ZA MEDIA</h4>
                    <label>
                      <input type="number" v-model="room.mediaPayment" placeholder="Prąd, woda, gaz, itp.">
                    </label>
                  </div>
                  <div class="metraz col_1">
                    <h4>METRAŻ</h4>
                    <label>
                      <input type="number" v-model="room.area" placeholder="Podaj metraż pokoju">
                    </label>
                  </div>
                  <div class="radio-list col_2">
                    <h4>RODZAJ POKOJU</h4>
                    <label :class="{ 'active' : room.roomType === 'single'}" class="cursor-pointer" >
                      <input type="radio" v-model="room.roomType" value="single">
                      Jednoosobowy
                    </label>
                    <label :class="{ 'active' : room.roomType === 'double'}" class="cursor-pointer" >
                      <input type="radio" v-model="room.roomType" value="double">
                      Dwuosobowy
                    </label>
                  </div>
                </div>
              </div>

              <div v-if="rentingScenario === 'whole'" class="parametry_szczegolowe_mieszkania col_4 mieszkania active">
                <h3 class="title-form">parametry szczegółowe:</h3>
                <div v-for="flat in wholeFlats" class="mieszkanie">
                  <div class="czynsz col_1">
                    <h4>CZYNSZ ZA MIESZKANIE</h4>
                    <label>
                      <input type="number" v-model="flat.monthRent" placeholder="Wpisz cenę">
                    </label>
                  </div>
                  <div class="media col_1">
                    <h4>OPŁATY ZA MEDIA</h4>
                    <label>
                      <input type="number" v-model="flat.mediaPayment" placeholder="Prąd, woda, gaz, itp.">
                    </label>
                  </div>
                  <div class="metraz col_1">
                    <h4>METRAŻ</h4>
                    <label>
                      <input type="number" v-model="flat.area" placeholder="Podaj metraż pokoju">
                    </label>
                  </div>
                  <div class="radio-list col_2">
                    <h4>RODZAJ MIESZKANIA</h4>
                    <label :class="{ 'active' : flat.roomType === 'single'}" class="cursor-pointer" >
                      <input type="radio" v-model="flat.roomType" value="single">
                      Mikrokawalerka
                    </label>
                    <label :class="{ 'active' : flat.roomType === 'double'}" class="cursor-pointer" >
                      <input type="radio" v-model="flat.roomType" value="double">
                      Kawalerka
                    </label>
                  </div>
                </div>
              </div>

              <div class="dodaj_zdj col_8">
                <h3 class="title-form">DODAJ ZDJĘCIA</h3>
                <label class="cursor-pointer" ><input type="file" name="dodaj_zdj" value="zdjecie1"> Zdjęcie 1</label>
                <label class="cursor-pointer" ><input type="file" name="dodaj_zdj" value="zdjecie2"> Zdjęcie 2</label>
                <label class="cursor-pointer" ><input type="file" name="dodaj_zdj" value="zdjecie3"> Zdjęcie 3</label>
                <label class="cursor-pointer" ><input type="file" name="dodaj_zdj" value="zdjecie4"> Zdjęcie 4</label>
                <label class="cursor-pointer" ><input type="file" name="dodaj_zdj" value="zdjecie5"> Zdjęcie 5</label>
                <label class="cursor-pointer" ><input type="file" name="dodaj_zdj" value="zdjecie6"> Zdjęcie 6</label>
                <label class="cursor-pointer" ><input type="file" name="dodaj_zdj" value="zdjecie7"> Zdjęcie 7</label>
                <label class="cursor-pointer" ><input type="file" name="dodaj_zdj" value="zdjecie8"> Zdjęcie 8</label>
              </div>

              <div class="dane_kont col_2">
                  <h3 class="title-form">Dane kontaktowe</h3>
                  <div class="col_1" style="grid-column: 1 / 2">
                      <h4>IMIĘ I NAZWISKO / FIRMA</h4>
                      <label><input type="text" name="name_or_company"/></label>
                  </div>
                  <div class="col_1" style="grid-column: 2 / last">
                      <h4>E-MAIL</h4>
                      <label><input type="text"  name="e_mail"/></label>
                  </div>

              </div>
                <div class="dane_kont_2 col_2">

                    <div class="col_1" style="grid-column: 1 / 2">
                        <h4>TELEFON</h4>
                        <label><input type="text" name="phone_number"/></label>
                    </div>
                    <div class="col_1" style="grid-column: 2 / last">
                        <h4>STRONA WWW</h4>
                        <label><input type="text" name="website"/></label>
                    </div>
                </div>

              <div class="col_2 submit">
                <div>
                  <input type="submit" name="submit" value="PODGLĄD" class="max-width" onclick="location.href='#git ad';" />
                </div>
                <div>
                  <input type="submit" name="submit" value="DODAJ OGŁOSZENIE" class="max-width" />
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
    name: "AddEstate",
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
        amountOfRooms: 1,
        amountOfBathrooms: 1,
        amountOfFlats: 1,
        amountOfShareholders: 0,
        whichFloor: 0,
        flatArea: 1,
        ownerShipType: '',
        managementCost: '',
        managementCostType: '',
        rooms: [{
          monthRent: '',
          mediaPayment: '',
          area: '',
          roomType: '',
        }],
        wholeFlats: [{
          monthRent: '',
          mediaPayment: '',
          area: '',
          flatType: '',
        }]
      }
    },
    computed: {
      roi: function() {
        let income;

        if (isNaN(this.managementCost)) {
          income = this.rentRevenue - this.monthCost;
        }  else {
          income = this.rentRevenue - this.monthCost - this.managementCost;
        }

        let yearIncome = income * 12;
        let investmentProfit = yearIncome / this.price;

        if ( !isFinite(investmentProfit)) {
          return  0;
        } else {
          return  investmentProfit.toFixed(2);
        }
      },
    },
    methods: {
      countRooms: function () {
        this.rooms = [];
        for (let i = 0; i < this.amountOfRooms; i++) {
          if (i < 15) {
            this.rooms.push({
              monthRent: '',
              mediaPayment: '',
              area: '',
              roomType: '',
            });
          }
        }
      },
      countWholeFlats: function () {
        this.wholeFlats = [];
        for (let i = 0; i < this.amountOfFlats; i++) {
          if (i < 15) {
            this.wholeFlats.push({
              monthRent: '',
              mediaPayment: '',
              area: '',
              flatType: '',
            });
          }
        }
      }
    }
  }
</script>