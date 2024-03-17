"use client";
import { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";
function Map({ geo_lat, geo_lng }) {
  const mapRef = useRef(null);
  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: "AIzaSyDNCnit7EIwT9wRy_20R7uk0dwKFFh0jAU",
        version: "weekly",
      });
      const { Map } = await loader.importLibrary("maps");
      const position = {
        lat: geo_lat,
        lng: geo_lng,
      };
      const mapOptions = {
        centre: position,
        zoom: 17,
        mapId: "single_event_mapid",
      };
      const map = new Map(mapRef.current, mapOptions);
    };
    initMap();
  });
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
