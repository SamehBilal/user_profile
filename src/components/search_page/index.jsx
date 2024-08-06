import TabsComponent from "./TabsComponent";

const SearchPage = ({data, setBgImg}) => {
  return (<div className="max-w-grid p-grid pt-10 w-screen text-black dark:text-white">
    <TabsComponent data={data} setBgImg={setBgImg} />
  </div>
  );
};

export default SearchPage;