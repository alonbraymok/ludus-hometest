import { usePosition } from 'use-position';


export const getCurrentLocation = (bool) => {
    const { latitude, longitude } = usePosition(bool);
    const currentLocation = {
        latitude,
        longitude
    }
    console.log('utils:', currentLocation)
    return currentLocation

}

