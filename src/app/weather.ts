
    export interface Weather {
        id: number;
        main: string;
        description: string;
        icon: string;
    }


    export interface Main {
        temp: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        sea_level: number;
        grnd_level: number;
        humidity: number;
        temp_kf: number;
    }



    export interface Clouds {
        all: number;
    }

    export interface Wind {
        speed: number;
        deg: number;
    }

    export interface Rain {
        _3h: number;
    }

    export interface Sys {
        pod: string;
    }

    export interface List {
        dt: number;
        main: Main;
        weather: Weather[];
        clouds: Clouds;
        wind: Wind;
        rain: Rain;
        sys: Sys;
        dt_txt: string;
    }

    export interface Coord {
        lat: number;
        lon: number;
    }

    export interface City {
        id: number;
        name: string;
        coord: Coord;
        country: string;
        population: number;
        timezone: number;
        sunrise: number;
        sunset: number;
    }

    export interface RootObject {
        cod: string;
        message: number;
        cnt: number;
        list: List[];
        city: City;
    }



