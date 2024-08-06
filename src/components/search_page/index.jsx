import TabsComponent from "./TabsComponent";

const SearchPage = ({data, setBgImg, statusData}) => {
  return (<div className="max-w-grid p-grid pt-10 w-screen text-black dark:text-white">
    <TabsComponent data={data} setBgImg={setBgImg} statusData={statusData} />
  </div>
  );
};

export default SearchPage;