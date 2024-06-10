import mapboxgl from "mapbox-gl";
import { useEffect, useState } from "react";
import "mapbox-gl/dist/mapbox-gl.css";

const token =
  "pk.eyJ1Ijoic2t5LTIwMjQiLCJhIjoiY2x3eG5lcmZpMWNpNzJucjFoN2dwYnFiMSJ9.4IEOvqX3dGRZpyHPx-MD9g";
mapboxgl.accessToken = token;

export function useMap(mapContainerID: HTMLElement | string) {
  const [map, setMap] = useState<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (map) return; // initialize map only once
    const nav = new mapboxgl.NavigationControl({ visualizePitch: true });
    const mapBox = new mapboxgl.Map({
      container: mapContainerID,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [13.2439512, -8.8272699],
      zoom: 11,
    });
    mapBox.addControl(nav);
    setMap(mapBox);
  }, []);

  return { map };
}
