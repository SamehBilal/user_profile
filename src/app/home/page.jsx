import SideMenu from "@/components/sideMenu";
import AppBar from "@/components/appbar";
import Middle from "@/components/middle";
import Footer from "@/components/footer";
import CarouselCard from "@/components/ui/carousel-card";
import Img1 from '@/public/images/footer/home1.gif'
import Img2 from '@/public/images/footer/home2.png'
import Img3 from '@/public/images/footer/home3.png'
import Img4 from '@/public/images/footer/home4.png'
import Img5 from '@/public/images/footer/home5.png'


export default function Home() {
  const images = [
    Img1,
    Img2,
    Img3,
    Img4,
    Img5,
  ];
  
  const titles = [
    "يا صباح الفل عليكم",
    "!عاملين حنة البت ياسمين الدعوه عامه وهتبقي لامه",
    "اسعار الذهب ايه انهارده كده كده محدش بيشتري",
    "البورصه ف الطالع الفكه فوق",
    "منورين يا جماعه والله قعدتكم ميتشبعش منها"
]

  return (
    <main className="w-full min-h-screen bg-white dark:bg-darkGray">
      {/* <SideMenu /> */}
      <AppBar />
      <Middle />
      <CarouselCard titles={titles} images={images} />
      <Footer />
    </main>
  );
}
