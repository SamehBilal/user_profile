import TabsComponent from "./TabsComponent";

const SearchPage = ({data, setBgImg, statusData, searchValue='', openStatus, activeTabIndex, setActiveTabIndex, searchDropdownValue, setVidDis}) => {
  return (<div className="max-w-grid p-grid pt-10 md:w-screen text-black dark:text-white">
    <TabsComponent data={data} setBgImg={setBgImg} statusData={statusData} setVidDis={setVidDis}
    searchValue={searchValue} openStatus={openStatus} activeTabIndex={activeTabIndex} 
    setActiveTabIndex={setActiveTabIndex} searchDropdownValue={searchDropdownValue} />
  </div>
  );
};

export default SearchPage;