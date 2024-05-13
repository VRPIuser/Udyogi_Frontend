const MapContainer = ({ mapURL }) => {
  return (
    <div className="mt-4">
      <iframe
        src={mapURL}
        // width="600"
        // height="450"
        style={{
          border: "0",
          width: "100%",
          height: "450px",
        }} // Convert style attribute to style prop
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapContainer;
