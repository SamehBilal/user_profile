import TabsComponent from "./TabsComponent";

const SearchPage = ({data, setBgImg, statusData, searchValue='', openStatus}) => {
  return (<div className="max-w-grid p-grid pt-10 md:w-screen text-black dark:text-white">
    <TabsComponent data={data} setBgImg={setBgImg} statusData={statusData} searchValue={searchValue} openStatus={openStatus} />
  </div>
  );
};

export default SearchPage;