import TabsComponent from "./TabsComponent";

const SearchPage = ({
  data, setBgImg, statusData, searchValue='', openStatus, activeTabIndex, setActiveTabIndex, 
  searchDropdownValue, setVidDis, setCurrentVid, trendingData, tagsData, weather
}) => {
  
  return (<div className="max-w-grid p-grid mt-20 md:w-screen text-black dark:text-white min-h-[250vh]">
    <TabsComponent data={data} setBgImg={setBgImg} statusData={statusData} setVidDis={setVidDis} setCurrentVid={setCurrentVid}
    searchValue={searchValue} openStatus={openStatus} activeTabIndex={activeTabIndex} trendingData={trendingData} tagsData={tagsData}
    setActiveTabIndex={setActiveTabIndex} searchDropdownValue={searchDropdownValue} weather={weather} />
  </div>
  );
};

export default SearchPage;