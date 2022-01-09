const IconImage = ({ imgSrc }) => {
  return (
    <div className="IconImage">
      <img
        data-aos="fade-up"
        src={imgSrc ? imgSrc : "/static/hero.jpg"}
        alt=""
      />
    </div>
  );
};

export default IconImage;
