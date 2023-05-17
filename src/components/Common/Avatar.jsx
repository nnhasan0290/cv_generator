const Avatar = ({img}) => {
  return (
    <div className="avatar">
      <img className="avatar__img"
        src={img}
        alt=""
      />
    </div>
  );
};

export default Avatar;
