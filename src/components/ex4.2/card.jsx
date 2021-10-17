
import Image from "./image";
import Title from "./title";
import Description from "./description";
import LinkContainer from "./linkContainer";
import "./card.css";
import "./description.css";
import "./image.css";
import "./link.css";
import "./linkContainer.css";
import "./title.css";

const Card = ({
  imageUrl,
  imageClassName,
  title,
  titleClassName,
  description,
  descriptionClassName,
  firstLinkName,
  firstLinkUrl,
  secondLinkName,
  secondLinkUrl,
}) => {
  return (
    <div className="card">
      <Image url={imageUrl} className={imageClassName} />
      <Title title={title} className={titleClassName} />
      <Description description={description} className={descriptionClassName} />
      <LinkContainer
        name1={firstLinkName}
        name2={secondLinkName}
        href1={firstLinkUrl}
        href2={secondLinkUrl}
      />
    </div>
  );
};

export default Card;
