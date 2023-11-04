import about from "../photos/about.jpg";
import Image from "next/image";

// const stats = [
//   { label: 'Founded', value: '2021' },
//   { label: 'Employees', value: '37' },
//   { label: 'Countries', value: '12' },
//   { label: 'Raised', value: '$25M' },
// ]

export default function About() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-4">
            <div className="relative overflow-hidden rounded-3xl bg-gray-900 shadow-2xl">
              <Image className="inset-0 object-cover" src={about} alt="" />
            </div>
          </div>
          <div>
            <div className="text-base leading-7 text-gray-700 lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-gray-600">
                About me
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                I&apos;m an Connecticut Based Fine Artist
              </h1>
              <div className="max-w-xl">
                <p className="mt-6">
                  I am a painter and printmaker who also teaches drawing and
                  printmaking at the Loomis Chaffee School in Windsor,
                  Connecticut. I obtained my MFA in Printmaking from the
                  University of Massachusetts, Amherst, and my BFA from the
                  Hartford Art School at the University of Hartford. My prints
                  and paintings have been shown in national and international
                  exhibitions in the Czech Republic, New Zealand, and the United
                  Kingdom, as well as in establishments including the Fort Wayne
                  Museum of Art in Fort Wayne, IN, the Portland Museum of Art in
                  Portland, ME, and Vose Galleries in Boston, MA. Among many
                  other public and private collections, my work is included in
                  the permanent collections of the Yale Art Gallery in New
                  Haven, CT; the DeCordova Museum and Sculpture Park in Lincoln,
                  MA; and the Hood Art Museum at Dartmouth College in Hanover,
                  NH.
                </p>
              </div>
            </div>
            {/* <dl className="mt-10 grid grid-cols-2 gap-8 border-t border-gray-900/10 pt-10 sm:grid-cols-4">
              {stats.map((stat, statIdx) => (
                <div key={statIdx}>
                  <dt className="text-sm font-semibold leading-6 text-gray-600">
                    {stat.label}
                  </dt>
                  <dd className="mt-2 text-3xl font-bold leading-10 tracking-tight text-gray-900">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl> */}
            {/* <div className="mt-10 flex">
              <a
                href="#"
                className="text-base font-semibold leading-7 text-indigo-600"
              >
                Learn more about our company{" "}
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
