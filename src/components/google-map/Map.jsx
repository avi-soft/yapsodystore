"use client";
import { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";

function Map({ geo_lat, geo_lng }) {
  const mapRef = useRef(null);

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_GMAP_KEY,
        version: "weekly",
      });

      try {
        const google = await loader.load();
        const position = {
          lat: geo_lat,
          lng: geo_lng,
        };
        const mapOptions = {
          center: position,
          zoom: 17,
        };
        new google.maps.Map(mapRef.current, mapOptions);
      } catch (error) {
        console.error("Error loading Google Maps:", error);
      }
    };

    initMap();
  }, [geo_lat, geo_lng]);

  return (
    <div
      id="gMap"
      className="rounded-md mb-[20px]"
      style={{ height: "318px" }}
      ref={mapRef}
    />
  );
}

export default Map;
