import corolla from "../assets/img/corolla.jpg"
import tesla from "../assets/img/model3.webp"
import honda from "../assets/img/hyundai-si.jpg"
import ford from "../assets/img/ford.jpg"
import xuv from "../assets/img/xuv700.avif"
import honda5 from "../assets/img/hundai-5.jpg"
import swift from "../assets/img/swift.webp"
import seltos from "../assets/img/seltos.jpg"
import bmw from "../assets/img/bmw.jpg"
import eclass from "../assets/img/eclass.webp"
import nexon from "../assets/img/nexonev.avif"
import mg from "../assets/img/hector.jpg"
import creta from "../assets/img/creta.webp"
import jeep from "../assets/img/jeep.webp"
import audi from "../assets/img/audi.jpg"
import range from "../assets/img/range.webp"
import polo from "../assets/img/polo.jpg"
import skoda from "../assets/img/skoda.webp"
import thar from "../assets/img/thar.webp"
import nisan from "../assets/img/nissan.avif"

export const cars = [
  {
    id: 1,
    name: "Toyota Corolla",
    type: "Sedan",
    price: 40,
    seats: 5,
    fuel: "Petrol",
    image: corolla,
    transmission: "Automatic",
    year: 2021,
    color: "White",
    rating: 4.3,
    availability: "Available",
    mileage: "15 km/l"
  },
  {
    id: 2,
    name: "Honda Civic",
    type: "Sedan",
    price: 50,
    seats: 5,
    fuel: "Diesel",
    image: honda,
    transmission: "Manual",
    year: 2020,
    color: "Black",
    rating: 4.5,
    availability: "Available",
    mileage: "18 km/l"
  },
  {
    id: 3,
    name: "Tesla Model 3",
    type: "Electric",
    price: 70,
    seats: 5,
    fuel: "Electric",
    image: tesla,
    transmission: "Automatic",
    year: 2022,
    color: "Red",
    rating: 4.8,
    availability: "Booked",
    mileage: "500 km/charge"
  },
  {
    id: 4,
    name: "Ford Explorer",
    type: "SUV",
    price: 80,
    seats: 7,
    fuel: "Petrol",
    image: ford,
    transmission: "Automatic",
    year: 2019,
    color: "Blue",
    rating: 4.2,
    availability: "Available",
    mileage: "12 km/l"
  },
  {
    id: 5,
    name: "Mahindra XUV700",
    type: "SUV",
    price: 60,
    seats: 7,
    fuel: "Diesel",
    image: xuv,
    transmission: "Manual",
    year: 2021,
    color: "Silver",
    rating: 4.6,
    availability: "Available",
    mileage: "14 km/l"
  },
  {
    id: 6,
    name: "Hyundai Ioniq 5",
    type: "Electric",
    price: 65,
    seats: 5,
    fuel: "Electric",
    image: honda5,
    transmission: "Automatic",
    year: 2023,
    color: "Gray",
    rating: 4.7,
    availability: "Booked",
    mileage: "480 km/charge"
  },
  {
    id: 7,
    name: "Maruti Swift",
    type: "Hatchback",
    price: 30,
    seats: 5,
    fuel: "Petrol",
    image: swift,
    transmission: "Manual",
    year: 2019,
    color: "Red",
    rating: 4.1,
    availability: "Available",
    mileage: "21 km/l"
  },
  {
    id: 8,
    name: "Kia Seltos",
    type: "SUV",
    price: 55,
    seats: 5,
    fuel: "Petrol",
    image: seltos,
    transmission: "Automatic",
    year: 2020,
    color: "White",
    rating: 4.4,
    availability: "Available",
    mileage: "16 km/l"
  },
  {
    id: 9,
    name: "BMW 5 Series",
    type: "Luxury",
    price: 120,
    seats: 5,
    fuel: "Diesel",
    image: bmw,
    transmission: "Automatic",
    year: 2021,
    color: "Black",
    rating: 4.9,
    availability: "Available",
    mileage: "13 km/l"
  },
  {
    id: 10,
    name: "Mercedes E-Class",
    type: "Luxury",
    price: 150,
    seats: 5,
    fuel: "Petrol",
    image: eclass,
    transmission: "Automatic",
    year: 2022,
    color: "White",
    rating: 4.8,
    availability: "Booked",
    mileage: "12 km/l"
  },
  {
    id: 11,
    name: "Tata Nexon EV",
    type: "Electric",
    price: 45,
    seats: 5,
    fuel: "Electric",
    image: nexon,
    transmission: "Automatic",
    year: 2021,
    color: "Blue",
    rating: 4.5,
    availability: "Available",
    mileage: "312 km/charge"
  },
  {
    id: 12,
    name: "MG Hector",
    type: "SUV",
    price: 65,
    seats: 7,
    fuel: "Diesel",
    image: mg,
    transmission: "Manual",
    year: 2019,
    color: "Gray",
    rating: 4.2,
    availability: "Available",
    mileage: "15 km/l"
  },
  {
    id: 13,
    name: "Hyundai Creta",
    type: "SUV",
    price: 50,
    seats: 5,
    fuel: "Petrol",
    image: creta,
    transmission: "Automatic",
    year: 2020,
    color: "Black",
    rating: 4.3,
    availability: "Available",
    mileage: "16 km/l"
  },
  {
    id: 14,
    name: "Jeep Compass",
    type: "SUV",
    price: 75,
    seats: 5,
    fuel: "Diesel",
    image: jeep,
    transmission: "Manual",
    year: 2021,
    color: "Green",
    rating: 4.4,
    availability: "Booked",
    mileage: "15 km/l"
  },
  {
    id: 15,
    name: "Audi Q7",
    type: "Luxury SUV",
    price: 200,
    seats: 7,
    fuel: "Petrol",
    image: audi,
    transmission: "Automatic",
    year: 2022,
    color: "Black",
    rating: 4.9,
    availability: "Available",
    mileage: "10 km/l"
  },
  {
    id: 16,
    name: "Range Rover Evoque",
    type: "Luxury SUV",
    price: 220,
    seats: 5,
    fuel: "Diesel",
    image: range,
    transmission: "Automatic",
    year: 2023,
    color: "White",
    rating: 4.8,
    availability: "Available",
    mileage: "11 km/l"
  },
  {
    id: 17,
    name: "Volkswagen Polo",
    type: "Hatchback",
    price: 35,
    seats: 5,
    fuel: "Petrol",
    image: polo,
    transmission: "Manual",
    year: 2018,
    color: "Blue",
    rating: 4.0,
    availability: "Available",
    mileage: "19 km/l"
  },
  {
    id: 18,
    name: "Skoda Octavia",
    type: "Sedan",
    price: 55,
    seats: 5,
    fuel: "Diesel",
    image: skoda,
    transmission: "Automatic",
    year: 2020,
    color: "Gray",
    rating: 4.3,
    availability: "Available",
    mileage: "17 km/l"
  },
  {
    id: 19,
    name: "Mahindra Thar",
    type: "SUV",
    price: 50,
    seats: 4,
    fuel: "Diesel",
    image: thar,
    transmission: "Manual",
    year: 2021,
    color: "Red",
    rating: 4.6,
    availability: "Available",
    mileage: "13 km/l"
  },
  {
    id: 20,
    name: "Nissan Magnite",
    type: "SUV",
    price: 40,
    seats: 5,
    fuel: "Petrol",
    image: nisan,
    transmission: "Automatic",
    year: 2022,
    color: "Silver",
    rating: 4.2,
    availability: "Booked",
    mileage: "18 km/l"
  }
];
