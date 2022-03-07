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
        className={`flex flex-col w-full rounded-md shadow-md p-5 ${
          darkMode ? "text-bgLight bg-primary" : "text-grey bg-white"
        }`}
      >
        <span className="text-2xl md:text-5xl font-bold mb-3">
          {locationName}
        </span>

        <div className="flex flex-col space-y-1 font-thin text-sm md:text-lg ">
          <span>
            {t("role")}
            {locationUserRole}
          </span>
          <span>
            {t("type")}
            {locationType}
          </span>
          {locationDetails && (
            <span>
              {t("details")}
              {locationDetails}
            </span>
          )}
          <span>
            {t("devices")}
            {numberofDevices}
          </span>
          <span>
            {t("subscription")}
            {subscriptionActive ? "Yes" : "No"}
          </span>
          {
            <span>
              {t("location")}
              {newLocation ? "Yes" : "No"}
            </span>
          }
        </div>
        <hr className=" my-3 border-b" />

        <div className="flex flex-col text-sm sm:text-lg">
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
