import React from "react";

const Map = () => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509647!2d144.96305781531695!3d-37.81362797975186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xfb89d2b39822e0b6!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1613988093125!5m2!1sen!2sau"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        title="Google Maps"
      ></iframe>
    </div>
  );
};

export default Map;
