import TabsComponent from "./TabsComponent";
import CardsComponent from "./cardsComponent";

let tabs = [
  {
    id: "photos",
    label: "Photos",
    cards: [
      {type: 'normal', header: "What to watch", subHeader: "Stream the Acme event", imgUrl: "https://nextui.org/images/card-example-4.jpeg"},
      {type: 'normal', header: "What to watch", subHeader: "Stream the Acme event", imgUrl: "https://nextui.org/images/card-example-4.jpeg"},
      {type: 'normal', header: "What to watch", subHeader: "Stream the Acme event", imgUrl: "https://nextui.org/images/card-example-4.jpeg"},
      {
        type: 'type1', header: "New", subHeader: "Acme camera", imgUrl: "https://nextui.org/images/card-example-6.jpeg",
        desc: "Available soon.", subDesc: "Get notified.", action: "Notify Me"
      },
      {
        type: 'type2', header: "Your day your way", subHeader: "Your checklist for better sleep", 
        iconUrl: "https://nextui.org/images/breathing-app-icon.jpeg", imgUrl: "https://nextui.org/images/card-example-5.jpeg",
        desc: "Breathing App", subDesc: "Get a good night's sleep.", action: "Get App"
      },
    ]
  },
  {
    id: "music",
    label: "Music",
    cards: [
      {type: 'normal', header: "Plant a tree", subHeader: "Contribute to the planet", imgUrl: "https://nextui.org/images/card-example-3.jpeg"},
      {type: 'normal', header: "Plant a tree", subHeader: "Contribute to the planet", imgUrl: "https://nextui.org/images/card-example-3.jpeg"},
      {type: 'normal', header: "Plant a tree", subHeader: "Contribute to the planet", imgUrl: "https://nextui.org/images/card-example-3.jpeg"},
      {
        type: 'type2', header: "Your day your way", subHeader: "Your checklist for better sleep", 
        iconUrl: "https://nextui.org/images/breathing-app-icon.jpeg", imgUrl: "https://nextui.org/images/card-example-5.jpeg",
        desc: "Breathing App", subDesc: "Get a good night's sleep.", action: "Get App"
      },
      {
        type: 'type1', header: "New", subHeader: "Acme camera", imgUrl: "https://nextui.org/images/card-example-6.jpeg",
        desc: "Available soon.", subDesc: "Get notified.", action: "Notify Me"
      },
    ]
  },
  {
    id: "videos",
    label: "Videos",
    cards: [
      {type: 'normal', header: "Supercharged", subHeader: "Creates beauty like a beast", imgUrl: "https://nextui.org/images/card-example-2.jpeg"},
      {type: 'normal', header: "Supercharged", subHeader: "Creates beauty like a beast", imgUrl: "https://nextui.org/images/card-example-2.jpeg"},
      {type: 'normal', header: "Supercharged", subHeader: "Creates beauty like a beast", imgUrl: "https://nextui.org/images/card-example-2.jpeg"},
      {
        type: 'type1', header: "New", subHeader: "Acme camera", imgUrl: "https://nextui.org/images/card-example-6.jpeg",
        desc: "Available soon.", subDesc: "Get notified.", action: "Notify Me"
      },
      {
        type: 'type1', header: "New", subHeader: "Acme camera", imgUrl: "https://nextui.org/images/card-example-6.jpeg",
        desc: "Available soon.", subDesc: "Get notified.", action: "Notify Me"
      },
    ]
  }
];

const SearchPage = () => {
  return (<div className="max-w-grid p-grid absolute top-16 w-full">
    <TabsComponent tabs={tabs}/>
  </div>
  );
};

export default SearchPage;