import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

export default function Home() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAHs2AcDefyjw6Y18ax7EVHkyhdoJxQtoo",
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

function Map() {
  const center = useMemo(() => ({ lat: 34.974812, lng: 138.391618 }), []);

  return (
    <div data-aos="fade-up" className="flex justify-center">
      <div className="w-full px-4 md:w-3/4 md:px-0 py-4">
      <GoogleMap zoom={14} center={center} mapContainerClassName="map-container">
      <Marker position={center} />
    </GoogleMap>
      </div>
    </div>
  );
}
