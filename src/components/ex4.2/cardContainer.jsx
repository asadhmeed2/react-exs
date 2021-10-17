
import Card from "./card";

const CardContainer = () => {
  return (
    <div className="cardContainer">
      <Card
        imageUrl="https://pixabay.com/get/ged236d6b5cc01ad8ad5ab380bb61a623a2d10745e0d67fc0a5232a2a66825384b978b97ee3b09825cddce6f2f62a8245a3a54bee5e30a5e8f23f4cdfbb3fbf52c3d73b77cef9742ed62ab1ba305982ce_1920.jpg"
        imageClassName="img"
        title="Bird"
        titleClassName="title"
        description="Bird standing"
        descriptionClassName="description"
        firstLinkName="SHARE"
        firstLinkUrl=""
        secondLinkName="EXPLORE"
        secondLinkUrl=""
      />
      ;
      <Card
        imageUrl="https://pixabay.com/get/gb20aa4b0d529766e8bfe5d9e66935835db211e653ea316ff59422d2297be3bfb7e7fc91a7e47be1d7710f18ab887445fd5a8ada08df3cc4c9e653058118957b6fa0b2a9f111efc314b3943229017c729_1920.jpg"
        imageClassName="img"
        title="owl"
        titleClassName="title"
        description="owl staring at you"
        descriptionClassName="description"
        firstLinkName="SHARE"
        firstLinkUrl=""
        secondLinkName="EXPLORE"
        secondLinkUrl=""
      />
      ;
      <Card
        imageUrl="https://pixabay.com/get/gd6cf248ec52d28658a57c56f1ed83d1e166c495a5d123e885e7c94a92957fce3771dd7c14b419682c81ae093f9f21bf9112eb48a1e56cf89432786efd1446b4da6d4f0d025cbeced6f9cfcb8beef758c_1920.jpg"
        imageClassName="img"
        title="the elephant"
        titleClassName="title"
        description="elephant in the jungle"
        descriptionClassName="description"
        firstLinkName="SHARE"
        firstLinkUrl=""
        secondLinkName="EXPLORE"
        secondLinkUrl=""
      />
      ;
    </div>
  );
};
export default CardContainer;
