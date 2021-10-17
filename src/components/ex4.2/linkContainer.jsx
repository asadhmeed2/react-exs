import Link from "./link";


const LinkContainer = ({name1, name2,href1,href2}) => {
  return (
    <div className="links">
      <Link name={name1} href={href1} />
      <Link name={name2} href={href2} />
    </div>
  );
};

export default LinkContainer;
