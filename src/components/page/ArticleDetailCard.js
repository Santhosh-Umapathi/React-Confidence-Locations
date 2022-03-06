import { memo } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

//Icon
import { LeftArrow } from "../icons";
//Recoil
import { useAtoms } from "../../recoil/hooks";

const ArticleDetailCard = ({ item = {} }) => {
  const {
    state: { darkMode },
  } = useAtoms();
  const navigate = useNavigate();
  const { t } = useTranslation();

  //Destructing item
  const {
    id,
    locationType,
    address,
    locationDetails,
    locationUserRole,
    locationName,
    numberofDevices,
    subscriptionActive,
    newLocation,
  } = item;

  return (
    <div className="flex flex-col mx-2 md:px-5 space-y-3 md:space-y-5 w-full relative ">
      <LeftArrow onClick={() => navigate(-1)} />

      <div
        className={`flex flex-col w-full  rounded-md shadow-md p-5 ${
          darkMode ? "text-bgLight bg-primary" : "text-grey bg-white"
        }`}
      >
        <span className="text-2xl md:text-5xl font-bold mb-3">
          {locationName}
        </span>

        <div className="flex flex-col space-y-1 font-thin text-xs md:text-lg ">
          <span>Role: {locationUserRole}</span>
          <span>Type: {locationType}</span>
          {locationDetails && <span>Details: {locationDetails}</span>}
          <span>No.of Devices: {numberofDevices}</span>
          <span>Subscription Active: {subscriptionActive ? "Yes" : "No"}</span>
          {<span>New Location: {newLocation ? "Yes" : "No"}</span>}
        </div>
        <hr className=" my-3 border-b" />

        <div className="flex flex-col text-lg">
          <span>{address.addressLine1}</span>
          <span>{address.city}</span>
          <span>{address.state}</span>
          <span>{address.zip}</span>
        </div>
      </div>
    </div>
  );
};

export default memo(ArticleDetailCard);
