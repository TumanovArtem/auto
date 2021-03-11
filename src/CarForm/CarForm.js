import { LabelAndSelect, LabelAndSplittedSelect } from '../components/index';
import './CarForm.css';

function CarForm() {
    return(
        <form action="" className="car-form">
            <h1>Настройка поиска б/у авто:</h1>
            <div className="wrapper">
                <div>
                    <LabelAndSelect
                        label="Марка" 
                        options={["Volkswagen", "Toyota"]}
                    />
                    <LabelAndSelect
                        label="Модель" 
                        options={["Volkswagen", "Toyota"]}
                    />
                    <LabelAndSelect
                        label="Кузов" 
                        options={["Седан", "Баклажан"]}
                    />
                </div>
                <div>
                    <LabelAndSplittedSelect
                        label="Год" 
                        options={[2015, 2016]}
                    />
                    <LabelAndSplittedSelect
                        label="Цена" 
                        options={[300000, 400000]}
                    />
                    <LabelAndSelect
                        label="Регион" 
                        options={["Москва", "Санкт-Петербург"]}
                    />
                </div>
            </div>
            <input type="submit" value="Поиск" />
        </form>
    )
}

export default CarForm;