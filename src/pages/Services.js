import React from "react";

const Services = () => {
  return (
    <div style={styles.container}>
      <h1>Services</h1>
      <ul style={styles.list}>
        <li>Logo Design</li>
        <li>Branding</li>
        <li>UI/UX Design</li>
        <li>Social Media Graphics</li>
      </ul>
    </div>
  );
};

const styles = {
  container: { textAlign: "center", padding: "2rem" },
  list: { listStyle: "none", padding: 0 }
};

export default Services;
