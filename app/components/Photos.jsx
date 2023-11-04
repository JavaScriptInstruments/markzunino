import image1 from "../photos/image-1.jpg";
import image2 from "../photos/image-2.jpg";
import image3 from "../photos/image-3.jpg";
import image4 from "../photos/image-4.jpg";
import Image from "next/image";

export default function Photos() {
  return (
    <div className="sm:mt-20 mb-20 ml-20 mr-20">
      <div className="lg:p-20 sm:p-0">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Where creativity comes to life ✨
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600 mb-5">
          my featured pieces
        </p>
      </div>
      <div className="-my-4 flex flex-wrap justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3].map((image) => (
          <div
            key={image.src}
            className={
              "relative w-full sm:w-1/2 md:w-1/4 overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800"
            }
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
