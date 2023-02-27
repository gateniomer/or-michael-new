import React from "react";
import FilterBar from "./FilterBar";
import VolunteerAd from "./VolunteerAd";

const AdBoard = async ({ volunteer_ads }) => {
  volunteer_ads = [{}, {}, {}, {}, {}, {}];
  const response = await fetch("https://cat-fact.herokuapp.com/facts");
  const data = await response.json();
  const renderList = volunteer_ads.map((ad) => (
    // console.log(item.id)
    <VolunteerAd key={ad._id} ad={ad} />
  ));

  //Will be api endpoint for hospitals
  const hospitals = volunteer_ads.map((ad) => ad.hospital);

  return (
    <>
      <div>
        <FilterBar data={hospitals} />

        <div>
          <div className="grid md:grid-cols-3  gap-4">{renderList}</div>
        </div>
      </div>
    </>
  );
};

export default AdBoard;
