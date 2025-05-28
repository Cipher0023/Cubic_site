"use client"

import React, { useEffect } from 'react'
import {Loader} from '@googlemaps/js-api-loader'

type Props = object

export default function Maps({}: Props) {

  const mapRef = React.useRef(null);
  useEffect(() => {
    const initMap =async () =>{
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
        version: 'weekly'
      });

      const {Map} = await loader.importLibrary('maps');

      const position = {lat: -22.008, lng: -47.897};

      //map options

      const mapOptions = google.maps.MapOptions = {
        center: position,
        zoom: 17,
        mapId: 'MY_NEXTJS_MAPID'
      }

      //SET UP THE MAP

      const map = new Map(mapRef.current as HTMLDivElement, mapOptions);


    }

    initMap()
  }, []);

  return (

    <div className='h-200 aspect-square' ref={mapRef}>

      
    </div>
  )
}