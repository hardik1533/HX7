import Hyperspeed from "../common/Hyperspeed";


const brands = [
    { name: "Ferrari", png: "/assets/images/brandslogo/ferrari.png", url: "https://www.ferrari.com" },
    { name: "Lamborghini", png: "/assets/images/brandslogo/lamborghini.png", url: "https://www.lamborghini.com" },
    { name: "Bugatti", png: "/assets/images/brandslogo/bugatti.png", url: "https://www.bugatti.com" },
    { name: "Porsche", png: "/assets/images/brandslogo/porsche.png", url: "https://www.porsche.com" },
    { name: "McLaren", png: "/assets/images/brandslogo/mclaren.png", url: "https://cars.mclaren.com" },
    { name: "Koenigsegg", png: "/assets/images/brandslogo/koenigsegg.png", url: "https://www.koenigsegg.com" },
    { name: "Pagani", png: "/assets/images/brandslogo/pagani.png", url: "https://www.pagani.com" },
    { name: "Rimac", png: "/assets/images/brandslogo/rimac.png", url: "https://www.rimac-automobili.com" },
    { name: "Aston Martin", png: "/assets/images/brandslogo/astonmartin.png", url: "https://www.astonmartin.com" },
    { name: "BMW M", png: "/assets/images/brandslogo/bmw.png", url: "https://www.bmw-m.com" },
    { name: "Maserati", png: "/assets/images/brandslogo/maserati.png", url: "https://www.maserati.com" },
    { name: "Mercedes-AMG", png: "/assets/images/brandslogo/mercedes-amg.png", url: "https://www.mercedes-amg.com" },

    { name: "Mazda", png: "/assets/images/brandslogo/mazda.png", url: "https://www.mazda.com" },
    { name: "Honda", png: "/assets/images/brandslogo/honda.png", url: "https://www.honda.com" },
    { name: "Nissan", png: "/assets/images/brandslogo/nissan.png", url: "https://www.nissan-global.com" },
    { name: "Toyota", png: "/assets/images/brandslogo/toyota.png", url: "https://global.toyota" },

    { name: "Chevrolet", png: "/assets/images/brandslogo/chevrolet.png", url: "https://www.chevrolet.com" },
    { name: "Ford", png: "/assets/images/brandslogo/ford.png", url: "https://www.ford.com" },
    { name: "Jaguar", png: "/assets/images/brandslogo/jagaur.png", url: "https://www.jaguar.com" },
    { name: "Dodge", png: "/assets/images/brandslogo/dodge.png", url: "https://www.dodge.com" },
    { name: "Shelby", png: "/assets/images/brandslogo/shelby.png", url: "https://www.shelby.com" },

    { name: "Lancia", png: "/assets/images/brandslogo/lancia.png", url: "https://www.lancia.com" },
    { name: "Alfa Romeo", png: "/assets/images/brandslogo/alfa-romeo.png", url: "https://www.alfaromeo.com" },
    { name: "De Tomaso", png: "/assets/images/brandslogo/de-tomaso.png", url: "https://www.detomaso-automobili.com" },
    { name: "Lotus", png: "/assets/images/brandslogo/lotus.png", url: "https://www.lotuscars.com" },

    { name: "Tesla", png: "/assets/images/brandslogo/tesla.png", url: "https://www.tesla.com" },
    { name: "Zenvo", png: "/assets/images/brandslogo/zenvo.png", url: "https://www.zenvoautomotive.com" },
    { name: "Hennessey", png: "/assets/images/brandslogo/hennessey.png", url: "https://www.hennesseyspecialvehicles.com" },
    { name: "SSC", png: "/assets/images/brandslogo/ssc.png", url: "https://www.sscnorthamerica.com" },
    { name: "Volvo", png: "/assets/images/brandslogo/volvo.png", url: "https://www.volvo.com/en/" }
];


const Brands = () => {
    return (
        // ROOT
        <div className="w-full bg-black text-white overflow-x-hidden">

            {/* COMBINED SECTION */}
            <section className="relative w-full min-h-screen pt-10">

                {/* BRANDS */}
                <div className="relative z-10 font-[font2] mt-13">
                    <div className="text-center mb-20 ">
                        <h2 className="text-6xl md:text-7xl  tracking-tight">
                            THE BRANDS
                        </h2>
                        <p className="mt-2 text-gray-400">
                            Legacy builders. Empire rulers.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-30 py-5 gap-x-16 px-10 md:px-24">
                        {brands.map((brand) => (
                            <a
                                key={brand.name}
                                href={brand.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex flex-col items-center justify-center"
                            >
                                <img
                                    src={brand.png}
                                    onError={(e) => {
                                        e.currentTarget.onerror = null;
                                        e.currentTarget.src = brand.png;
                                    }}
                                    alt={brand.name}
                                    className="w-25 h-25 object-contain opacity-75 group-hover:opacity-100 transition duration-300 invert"
                                />
                                <span className="mt-4 text-sm text-gray-400 group-hover:text-white transition">
                                    {brand.name}
                                </span>
                            </a>
                        ))}
                    </div>
                </div>

                {/* HYPERSPEED — STICKS TO BOTTOM */}
                <div className="fixed inset-x-0 bottom-0 h-[70vh] overflow-hidden pointer-events-none">
                    <Hyperspeed activePreset="five" />
                </div>

            </section>
        </div>
    );
};

export default Brands;


