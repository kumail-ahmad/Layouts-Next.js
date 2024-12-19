import Image from "next/image";

export default function Home() {
  const products = [
    {
      id: 1,
      title: "The Catalyzer",
      category: "CATEGORY",
      price: "$16.00",
      image: "https://dummyimage.com/420x260",
    },
    {
      id: 2,
      title: "Shooting Stars",
      category: "CATEGORY",
      price: "$21.15",
      image: "https://dummyimage.com/421x261",
    },
    {
      id: 3,
      title: "Neptune",
      category: "CATEGORY",
      price: "$12.00",
      image: "https://dummyimage.com/422x262",
    },
    {
      id: 4,
      title: "The 400 Blows",
      category: "CATEGORY",
      price: "$18.40",
      image: "https://dummyimage.com/423x263",
    },
    {
      id: 5,
      title: "The Catalyzer",
      category: "CATEGORY",
      price: "$16.00",
      image: "https://dummyimage.com/424x264",
    },
    {
      id: 6,
      title: "Shooting Stars",
      category: "CATEGORY",
      price: "$21.15",
      image: "https://dummyimage.com/425x265",
    },
    {
      id: 7,
      title: "Neptune",
      category: "CATEGORY",
      price: "$12.00",
      image: "https://dummyimage.com/427x267",
    },
    {
      id: 8,
      title: "The 400 Blows",
      category: "CATEGORY",
      price: "$18.40",
      image: "https://dummyimage.com/428x268",
    },
  ];

  return (
    <div className="container">
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto w-full">
          <div className="flex flex-wrap -m-4">
            {products.map((product) => (
              <div key={product.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative h-48 rounded overflow-hidden">
                  <Image
                    alt={product.title}
                    src={product.image}
                    className="object-cover object-center w-full h-full block"
                    width={420}
                    height={260}
                  />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    {product.category}
                  </h3>
                  <h2 className="text-white title-font text-lg font-medium">
                    {product.title}
                  </h2>
                  <p className="mt-1">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
