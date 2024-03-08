import Image from "next/image";
import "react-multi-carousel/lib/styles.css";
import "react-multi-carousel/lib/";
import Carousel from "react-multi-carousel";
import { ProjectDetail } from "../../../../Interfaces";

type Props = {
  project: ProjectDetail | undefined;
};

function Slider(props: Props) {
  const { project } = props;
  const responsive = {
    rest: {
      breakpoint: { max: 3000, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel
      responsive={responsive}
      autoPlay={true}
      swipeable={true}
      draggable={true}
      showDots={true}
      infinite={true}
      className="w-full max-w-[90dvw] lg:max-w-[50dvw] z-0 "
      partialVisible={false}
    >
      {project?.images.map((image, index) => {
        return (
          <div
            className="relative aspect-[2/1] mx-4 rounded-lg pb-4"
            key={index}
          >
            <Image
              className=""
              src={image.src}
              alt={image.alt}
              style={{ objectFit: "cover" }}
              placeholder="blur"
              priority
              sizes="100%"
            />
          </div>
        );
      })}
    </Carousel>
  );
}

export default Slider;
