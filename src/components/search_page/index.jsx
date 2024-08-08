import TabsComponent from "./TabsComponent";

const SearchPage = ({data, setBgImg, statusData, searchValue=''}) => {
  return (<div className="max-w-grid p-grid pt-10 md:w-screen text-black dark:text-white">
    <TabsComponent data={data} setBgImg={setBgImg} statusData={statusData} searchValue={searchValue} />
  </div>
  );
};

export default SearchPage;