const AbsoluteSvg = ({ url }) => {
  let urrrl = url ? url : "/static/sv1.svg";

  console.log(urrrl);

  return (
    <div className="benefitBox__absolute">
      {/* <i class="fas fa-comment-alt"></i> */}
      <img src={urrrl} alt="" />
    </div>
  );
};

export default AbsoluteSvg;
