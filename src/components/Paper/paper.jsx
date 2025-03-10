import React from "react";
import styles from "./Paper.module.css"; // CSS module for styling the Paper component

const Paper = () => {
  const handleButtonClick = () => {
    // Action to open the paper publication link in a new tab
    window.open("https://ieeexplore.ieee.org/document/9102694", "_blank");
  };

  return (
    <section className={styles.container} id="paper">
      <h2 className={styles.title}>Paper Publication</h2> {/* Heading for Paper */}
      <div className={styles.description}>
        <p>
          My first research paper focused on Android-based object detection for visually impaired users.
          It explores the potential of using mobile applications to assist visually impaired individuals with object detection in real-time. The paper includes detailed methodologies, results, and proposed improvements.
        </p>
      </div>
      <button className={styles.button} onClick={handleButtonClick}>
        Read the Paper
      </button>
    </section>
  );
};

export default Paper;
