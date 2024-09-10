import { useGetAllUsersQuery } from "../../redux/api/userApiSlice";
import { MainCards } from "../../components/Home/MainCards";
import { Carousel } from "flowbite-react";
import { AltCards } from "../../components/Home/AltCards";
import { PresentationSection } from "../../components/Home/PresentationSection";
import { NewProductsSection } from "../../components/Home/NewProductsSection";
import { InfoSection } from "../../components/Home/InfoSection";
import { JournalSection } from "../../components/Home/JournalSection";

const MainCardData = [
  {
    title: "Mens",
    image:
      "https://i.shgcdn.com/143eba11-3fe9-4b37-808a-54740be0cd0e/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
  },
  {
    title: "Womens",
    image:
      "https://i.shgcdn.com/79edd902-19b6-4a96-8a6e-df771cee313e/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
  },
];

const AltCardData = [
  {
    title: "New Arrivals",
    image:
      "https://i.shgcdn.com/eb2a86c7-da38-4400-ba36-880b972796f1/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
  },
  {
    title: "Headwear",
    image:
      "https://i.shgcdn.com/30b7c273-847c-4ea2-9dcb-5415d0e40f7d/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
  },
  {
    title: "Shorts",
    image:
      "https://i.shgcdn.com/ce3a5983-11b3-493d-be84-fd0cedfe970c/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
  },
  {
    title: "Aprons",
    image:
      "https://i.shgcdn.com/a4593258-2aaf-4052-b4be-599ccd434588/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
  },
];
export const HomePage = () => {
  //const { data: allUsers, error, isLoading } = useGetAllUsersQuery();

  //console.log(allUsers);

  return (
    <main>
      <section className="h-[1400px]">
        <div className="flex flex-col">
          <div className="md:flex hidden">
            {MainCardData.map((data, index) => (
              <MainCards key={index} title={data.title} image={data.image} />
            ))}
          </div>
          <div className="md:hidden flex w-full">
            <Carousel>
              {MainCardData.map((data, index) => (
                <MainCards key={index} title={data.title} image={data.image} />
              ))}
            </Carousel>
          </div>
          <div className="md:flex hidden ">
            {AltCardData.map((data, index) => (
              <AltCards key={index} title={data.title} image={data.image} />
            ))}
          </div>
          <div className="md:hidden flex w-full ">
            <Carousel>
              {AltCardData.map((data, index) => (
                <AltCards key={index} title={data.title} image={data.image} />
              ))}
            </Carousel>
          </div>
        </div>
      </section>
      <PresentationSection />
      <NewProductsSection />
      <InfoSection />
      <JournalSection />
    </main>
  );
};
