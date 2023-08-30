import React from "react";
import { Card } from "./Card";
import cpu from "../assets/images/image-retro-pcs.jpg";
import teclado from "../assets/images/image-top-laptops.jpg";
import controlers from "../assets/images/image-gaming-growth.jpg";


export const ContainerCards = () => {
  const infoCards = [
    {
      number: "1",
      title: "Retro Computers",
      description:
        "We offer a wide range of retro computer products to suit your needs. Whether you're looking for portable audio or portable video games, we've got you covered.",
      img: cpu,
    },
    {
      number: "2",
      title: "Revolutionary Keyboards",
      description:
      "Tech enthusiasts rejoice as cutting-edge keyboard designs hit the market, promising seamless typing experiences and customizable shortcuts.",
      img: teclado,
    },
    {
      number: "3",
      title: "Next-gen Joysticks",
      description:
      "Gamers, get ready for an adrenaline rush! Brand-new joystick models are here, bringing precision and immersive control to your gaming adventures.",
      img: controlers,
    },
  ];
  return (
    <section className="mt-6 md:flex md:flex-wrap md:place-content-between md:gap-x-4">

      {/* ---- Renderizado de cartas ---- */}
      {infoCards?.map((card) => (
        <Card infoCards={card} key={card.number}/>
      ))}

    </section>
  );
};
