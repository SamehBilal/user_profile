import MyTabs from "./TabsComponent";

const tabsData = [
  {
    title: "Photos",
    content: <p>Your photo content here</p>,
  },
  {
    title: "Music",
    content: <p>Your music content here</p>,
  },
  // Add more tabs as needed
];

const SearchPage = () => {
  return (
    <div>
      {/* <h1>My Awesome Tabs</h1>
      <MyTabs tabs={tabsData} /> */}
    </div>
  );
};

export default SearchPage;