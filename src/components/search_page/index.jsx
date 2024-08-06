import TabsComponent from "./TabsComponent";

const SearchPage = ({data, setBgImg}) => {
  return (<div className="max-w-grid p-grid mt-4 w-screen text-black dark:text-white">
    <TabsComponent data={data} setBgImg={setBgImg} />
  </div>
  );
};

export default SearchPage;