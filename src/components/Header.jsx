import Button from "./Common/Button";

const Header = () => {
  return (
    <div className="heading">
      <div className="heading__wrapper bbb-container">
        <h2 className="heading__logo">Resume Builder</h2>
        <div className="heading__btn">
          <Button type="secondary">Preview</Button>
          <Button type="primary">Download</Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
