const car = (name, model, owner, year, phone, image) =>
    ({name, model, owner, year, phone, image})

const log = (text, type, date = new Date()) => ({text, type, date})

const cars = [
    car('BMW', '3 Series', 'Max', 1975, '+7 313 123 222 12', 'img/bmw-3-series-image.png'),
    car('Ford', 'EcoSport', 'Vlad', 2017, '+7 222 153 222 12', 'img/Ford-EcoSport.jpg'),
    car('Mahindra', 'Kuv100', 'Petya', 2015, '+7 111 123 222 12', 'img/mahindra-kuv100-nxt-image.png')
]

const [currentCar] = cars

new Vue({
    el: '#app',
    data: {
        cars,
        currentCar,
        selectedCarIndex: 0,
        phoneVisibility: false,
        modalVisibility: false,
        search: '',
        logs: []
    },
    methods: {
        selectCar: function (index) {
            this.currentCar = cars[index]
            this.selectedCarIndex = index
        },
        cancelOrder: function () {
            this.modalVisibility = false
            this.logs.push(
                log(`Cancelled order: ${this.currentCar.name} - ${this.currentCar.model}`, 'cnl')
            )
        },
        newOrder: function () {
            this.modalVisibility = false
            this.logs.push(
                log(`Success order: ${this.currentCar.name} - ${this.currentCar.model}`, 'ok')
            )
        }
    },
    computed: {
        phoneBtnText () {
            return this.phoneVisibility ? 'Hide phone' : 'Show phone'
        },
        searchByCarName () {
            return this.cars.filter((car) =>
                car.name.indexOf(this.search) > -1 || car.model.indexOf(this.search) > -1)
        }
    },
    filters: {
        date (value) {
            return value.toLocaleString()
        }
    }
})