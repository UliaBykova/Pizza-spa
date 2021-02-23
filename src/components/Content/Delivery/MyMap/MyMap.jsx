import React from 'react'
import s from "./../Delivery.module.css"
import { YMaps, Map, Polygon, Placemark } from "react-yandex-maps";

const MyMap = () => {

    const mapState = {
        center: [43.0446, 44.6818],
        zoom: 13
    };

    return (
        <div>
            <YMaps query={{ lang: "ru_RU", load: "package.full" }}>
                <Map defaultState={mapState} className={s.map}>
                    <Placemark geometry={[43.0292, 44.6828]}
                        properties={{
                            balloonContentBody: "г.Владикавказ, ул. Ленина, д.28"
                        }}
                        options={{
                            preset: 'islands#greenDotIconWithCaption'
                        }} />
                    <Polygon
                        geometry={{
                            type: 'Circle',
                            coordinates: [43.0416, 44.6718],
                            radius: 3300
                        }}
                        properties={{
                            balloonContent: "123123",
                            hintContent: "Бесплатная доставка"
                        }}
                        options={{
                            fillColor: "#9999FF",
                            strokeColor: "#0000FF",
                            opacity: 0.5,
                            strokeWidth: 1,
                            strokeStyle: "solid"
                        }}
                    />
                </Map>
            </YMaps>
        </div>
    )
}

export default MyMap;