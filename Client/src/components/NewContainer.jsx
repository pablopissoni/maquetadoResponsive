import React from "react";
import { NewArticle } from "./NewArticle";

export const NewContainer = () => {
  const infoNews = [
    {
      title: "Emergence of Internet",
      description:
      "Internet 3.0 poised to redefine connectivity with faster speeds and seamless integration of AI technologies.",
    },
    {
      title: "IoT's Evolution in Internet 3.0",
      description:
      "Internet 3.0 brings enhanced IoT capabilities, enabling smarter homes, cities, and interconnected devices.",
    },
    {
      title: "Security in Internet",
      description:
        "Next-gen encryption and blockchain in Internet 3.0 ensure unparalleled data privacy and cyber protection.",
    },
  ];
  //*----------------------------------------
  return (
    <aside className="bg-VeryDarkBlue text-Off-white py-[28px] px-[20px]">
      <h1 className="text-SoftOrange text-4xl font-bold">New</h1>
      
      {/* --- Renderizado de noticias --- */}
      {infoNews?.map((news) => (
        <NewArticle article={news} key={news.title} />
      ))}

    </aside>
  );
};
