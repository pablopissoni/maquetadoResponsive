export const NewArticle = ({ article }) => {
  const { title, description } = article;

  //*---------------------------
  return (
    <article className="h-[140px] lg:h-[160px] border-b-2 border-GrayishBlue py-7 lg:pt-4 last:border-none">
      <h2 className="cursor-pointer hover:text-SoftOrange text-[20px] lg:text-[16px] mb-3 font-bold">
        {title}
      </h2>
      <p className="text-[15px]">{description}</p>
    </article>
  );
};
