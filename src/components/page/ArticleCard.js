import { memo } from "react";
import { useNavigate } from "react-router-dom";

//Recoil
import { useAtoms } from "../../recoil/hooks";

const ArticleCard = ({ item = {}, isLoading = true }) => {
  const navigate = useNavigate();

  const {
    state: { darkMode },
  } = useAtoms();

  //Destructing item
  const {
    id,
    locationType,
    address,
    locationDetails,
    locationUserRole,
    locationName,
  } = item;

  return (
    <div
      className={`flex flex-col md:flex-row border-b p-2 md:p-5 md:space-x-5 hover:opacity-60 transition-opacity cursor-pointer relative rounded-md shadow-md ${
        darkMode
          ? "bg-primary border-bgDark text-bgLight"
          : "bg-white text-grey"
      }`}
      onClick={() => navigate(`/location?id=${id}`)}
    >
      <div className="flex flex-col space-y-1 md:space-y-2 w-full">
        <span className="text-xl md:text-3xl font-bold">{locationName}</span>

        <div className="flex space-x-5 md:space-x-10 text-sm md:text-md font-thin">
          <span>Role: {locationUserRole}</span>
          <span>Type: {locationType}</span>
          {locationDetails && <span>Details: {locationDetails}</span>}
        </div>
        <div className="flex flex-col text-md">
          <span>{address.addressLine1}</span>
          <span>{address.city}</span>
          <span>{address.state}</span>
          <span>{address.zip}</span>
        </div>
      </div>
    </div>
  );
};

export default memo(ArticleCard);
