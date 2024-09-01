import TabsComponent from "./TabsComponent";

const SearchPage = ({
  data, setBgImg, statusData, searchValue='', openStatus, activeTabIndex, setActiveTabIndex, currencyValue, setCurrencyValue,
  searchDropdownValue, setVidDis, setCurrentVid, trendingData, tagsData, weather, dailyNews, rates, totalPages, currentPage, setCurrentPage
}) => {
  
  return (<div className="max-w-grid p-grid mt-20 md:w-screen text-black dark:text-white min-h-[250vh]">
    <TabsComponent data={data} setBgImg={setBgImg} statusData={statusData} setVidDis={setVidDis} setCurrentVid={setCurrentVid}
    searchValue={searchValue} openStatus={openStatus} activeTabIndex={activeTabIndex} trendingData={trendingData} tagsData={tagsData}
    setActiveTabIndex={setActiveTabIndex} searchDropdownValue={searchDropdownValue} weather={weather} dailyNews={dailyNews} setCurrentPage={setCurrentPage}
    rates={rates} currencyValue={currencyValue} setCurrencyValue={setCurrencyValue} totalPages={totalPages} currentPage={currentPage} />
  </div>
  );
};

export default SearchPage;