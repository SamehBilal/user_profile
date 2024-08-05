import TabsComponent from "./TabsComponent";
import CardsComponent from "./cardsComponent";

const SearchPage = ({data, setBgImg}) => {
  return (<div className="max-w-grid p-grid mt-4 w-full">
    <TabsComponent data={data} setBgImg={setBgImg} />
  </div>
  );
};

export default SearchPage;