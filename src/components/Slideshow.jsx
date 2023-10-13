import { Carousel, Image } from "react-bootstrap";

//AT THIS TIME WE ARE NOT USING THIS COMPONENT BUT IT COULD BE BENEFICIAL FOR REUSABILITY LATER

function Slideshow() {
  return (
    <div>
      <h1 className="font-gamer-font text-center text-amber-500">
        Our Team Throughout the Years
      </h1>
      <Carousel className="w-[700px] h-[600px] m-auto bg-black">
        <Carousel.Item className="w-[700px] h-[600px]">
          <Image
            src="/team-photo-2023.jpg"
            alt="Team in 2023"
            fluid
            rounded
            className="object-contain text-center"
          />
          <Carousel.Caption className="bg-black w-full !right-0 !left-0 mb-0 mt-0">
            Our team in 2023 at Uplink Studios
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="w-[700px] h-[600px]">
          <Image
            src="/team-panel-elu.jpg"
            alt="Panel in 2022"
            className="object-contain m-auto"
            rounded
            fluid
          />
          <Carousel.Caption className="bg-black w-full !right-0 !left-0 mb-0">
            In 2022, our team was invited for a panel at Extra Life United to
            discuss fundraising best practices.
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="w-[700px] h-[600px]">
          <Image
            src="/team-photo-virtual-fixed.jpg"
            alt="Team in 2021"
            fluid
            rounded
          />
          <Carousel.Caption className="bg-black w-full !right-0 !left-0 mb-0">
            In 2021, we hosted our first all-virtual event.
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="w-[700px] h-[600px]">
          <Image
            src="/team-photo-first-alumni.jpg"
            alt="Team in 2020"
            fluid
            rounded
            className="object-cover"
          />
          <Carousel.Caption className="bg-black w-full !right-0 !left-0 mb-0">
            We hosted our first alumni event in 2020.
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="w-[700px] h-[600px]">
          <Image
            src="/team-2019.jpg"
            alt="Team in 2019"
            className="m-auto"
            rounded
            fluid
          />
          <Carousel.Caption className="bg-black w-full !right-0 !left-0 mb-0">
            In 2019, we hosted our first on-campus event as a service
            organization at West Chester University.
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="w-[700px] h-[600px]">
          <Image
            src="/team-hs.jpg"
            alt="High school team in 2019"
            fluid
            rounded
          />
          <Carousel.Caption className="bg-black w-full !right-0 !left-0 mb-0">
            In 2019, we also co-hosted a satellite high school team.
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slideshow;
