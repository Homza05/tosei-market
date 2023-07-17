import React, {useEffect,useState} from 'react';
import Car from "../Car/Car";
import fit from '../../images/fit.png';
import bmw from '../../images/bmw.png';
import prius from '../../images/prius.png';
import axios from "axios";

const Cars = () => {
    const [cars,setCars] = useState([]);


    useEffect(() => {
        fetchData()
    }, []);


    const  fetchData = () => {
        axios.get('https://cars-6517a-default-rtdb.firebaseio.com/cars/-N_D7m-8m_00tstzYUtH/cars.json').then((response) => {
            console.log(response.data)
            setCars(response.data)
        });
    };
    // const [cars, setCars] = useState([
    //     {
    //         name: 'Honda fit',
    //         engine: 1.2,
    //         nileage: 34000,
    //         year:2015,
    //         drive: 'Задний',
    //         gearbox: 'Автомат',
    //         price: 630000,
    //         availability:'В Наличии',
    //         src:fit,
    //     },
    //     {
    //         name: 'BMW - X5 2005',
    //         engine: 230,
    //         nileage: 110000 ,
    //         year:2005,
    //         drive: 'Полный',
    //         gearbox: 'Автомат',
    //         price: 275000,
    //         availability:'Под Заказ',
    //         src: bmw,
    //     },
    //     {
    //         name: 'Toyota Prius',
    //         engine: 109,
    //         nileage: 57000 ,
    //         year:2009,
    //         drive: 'Передний',
    //         gearbox: 'Автомат',
    //         price: 310000,
    //         availability:'В Наличии',
    //         src: prius,
    //     },
    //     {
    //         name: 'Honda fit',
    //         engine: 1.2,
    //         nileage: 34000,
    //         year:2015,
    //         drive: 'Задний',
    //         gearbox: 'Автомат',
    //         price: 630000,
    //         availability:'В Наличии',
    //         src:fit,
    //     },
    //     {
    //         name: 'BMW - X5 2005',
    //         engine: 230,
    //         nileage: 110000 ,
    //         year:2005,
    //         drive: 'Полный',
    //         gearbox: 'Автомат',
    //         price: 275000,
    //         availability:'Под Заказ',
    //         src: bmw,
    //     },
    //     {
    //         name: 'Toyota Prius',
    //         engine: 109,
    //         nileage: 57000 ,
    //         year:2009,
    //         drive: 'Передний',
    //         gearbox: 'Автомат',
    //         price: 310000,
    //         availability:'В Наличии',
    //         src: prius,
    //     },
    //     {
    //         name: 'Toyota Prius',
    //         engine: 109,
    //         nileage: 57000 ,
    //         year:2009,
    //         drive: 'Передний',
    //         gearbox: 'Автомат',
    //         price: 310000,
    //         availability:'В Наличии',
    //         src: prius,
    //     },
    //     {
    //         name: 'Toyota Prius',
    //         engine: 109,
    //         nileage: 57000 ,
    //         year:2009,
    //         drive: 'Передний',
    //         gearbox: 'Автомат',
    //         price: 310000,
    //         availability:'В Наличии',
    //         src: prius,
    //     },
    // ])
    return (

        <div className="cards">
            {cars.map((car, i)=> (
                <Car name={car.carName}
                     key={i}
                     id={i}
                     engine={car.engine}
                     nileage={car.nileage}
                     year={car.year}
                     drive={car.drive}
                     gearbox={car.gearbox}
                     price={car.price}
                     availability={car.availability}
                     src={car.src}
                />

            )
            )}
        </div>
    );
};

export default Cars;