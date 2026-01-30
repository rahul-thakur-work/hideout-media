"use client";

export default function BrandSlider() {
  const brands = [
    {
      name: "Netflix",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    },
    {
      name: "Amazon Prime",
      logo: "https://upload.wikimedia.org/wikipedia/commons/1/11/Amazon_Prime_Video_logo.svg",
    },
    {
      name: "Swiggy",
      logo: "https://upload.wikimedia.org/wikipedia/en/1/12/Swiggy_logo.svg",
    },
    {
      name: "Zomato",
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/75/Zomato_logo.png",
    },
    {
      name: "Flipkart",
      logo: "https://upload.wikimedia.org/wikipedia/en/7/7a/Flipkart_logo.svg",
    },
    {
      name: "PhonePe",
      logo: "https://upload.wikimedia.org/wikipedia/commons/e/e9/PhonePe_Logo.svg",
    },
    {
      name: "Paytm",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Paytm_Logo_%28standalone%29.svg",
    },
    {
      name: "Ola",
      logo: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Ola_Cabs_logo.svg",
    },
  ];

  // Duplicate brands for seamless loop
  const duplicatedBrands = [...brands, ...brands];

  return (
    <section className="border-b border-t border-black/5 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-8 text-center text-sm font-medium uppercase tracking-wider text-black/40">
          Trusted By
        </p>

        <div className="relative overflow-hidden">
          {/* Gradient overlays */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 " />

          {/* Scrolling container */}
          <div className="flex animate-scroll gap-16">
            {duplicatedBrands.map((brand, idx) => (
              <div
                key={idx}
                className="flex h-16 w-40 flex-shrink-0 items-center justify-center   "
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="max-h-12 w-auto object-cover opacity-100  "
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 40s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}

