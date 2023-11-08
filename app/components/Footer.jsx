const navigation = {
  // solutions: [
  //   { name: 'Marketing', href: '#' },
  //   { name: 'Analytics', href: '#' },
  //   { name: 'Commerce', href: '#' },
  //   { name: 'Insights', href: '#' },
  // ],
  // support: [
  //   { name: 'Pricing', href: '#' },
  //   { name: 'Documentation', href: '#' },
  //   { name: 'Guides', href: '#' },
  //   { name: 'API Status', href: '#' },
  // ],
  siteMap: [
    { name: "Drawings", href: "/drawing" },
    { name: "Paintings", href: "/painting" },
    { name: "Prints", href: "/print" },
    { name: "CV", href: "/CV" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Claim", href: "#" },
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" },
  ],
};
export default function Example() {
  return (
    <footer className="bg-primary" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 lg:py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Site Map
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.siteMap.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Legal
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <h3 className="text-sm leading-6 text-white text-right mt-20">
          Copyright © 2023 Mark Zunino. All Rights Reserved.
        </h3>
      </div>
    </footer>
  );
}
