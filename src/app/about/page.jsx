import React from "react";
import Image from "next/image";
import styles from "./about.module.css";
const About = () => {
  return (
    <div>
      <div className={styles.imgContainer}></div>
      <Image
        src="https://images.pexels.com/photos/19940574/pexels-photo-19940574/free-photo-of-ahsap-insanlar-sanat-ev.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
        width={500}
        height={500}
      />
    </div>
  );
};

export default About;
