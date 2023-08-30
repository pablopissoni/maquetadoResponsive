import imageMobile from "../assets/images/image-web-3-mobile.jpg";
import imageDesktop from "../assets/images/image-web-3-desktop.jpg";

export const MainArticle = () => {

  const infoCover = {
    title: "The bright Future of Web 3.0?",
    description:
      "The evolution of Web 3.0 promises decentralized applications, enhanced user experiences, and a more connected digital world",
  };

  //*-----------------------------------
  return (
    <section className="mb-10">
      <picture>
        <source media="(max-width: 640px)" srcSet={imageMobile} />
        <source media="(min-width: 641px)" srcSet={imageDesktop} />
        <img src={imageMobile} alt="imagen mobile por defecto" />
      </picture>

      <div className="sm:flex">
        <div className="flex-1 py-6">
          <h2 className="text-[40px] font-bold sm:text-[58px] leading-none">
          {infoCover.title}
          </h2>
        </div>

        <div className="flex-1 pt-9">
          <p className="text-[13px] mb-10 sm:text-[15px] font-semibold">
          {infoCover.description}
          </p>
          <button className="bg-SoftRed w-[185px] h-[48px] uppercase text-Off-white hover:bg-VeryDarkBlue">
            Read more
          </button>
        </div>
      </div>
    </section>
  );
};
