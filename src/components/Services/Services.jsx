import React from "react";
// আপনি চাইলে lucide-react বা font-awesome ব্যবহার করতে পারেন আইকনের জন্য
// এখানে আমি সিম্বল/ইমোজি ব্যবহার করছি সহজে বোঝার জন্য

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Fast Home Delivery",
      description:
        "Get your favorite books delivered to your doorstep within 24-48 hours across the country.",
      icon: "🚚",
      color: "bg-primary/10",
    },
    {
      id: 2,
      title: "Cash on Delivery",
      description:
        "Pay comfortably after receiving and checking your books. No advance payment needed.",
      icon: "💵",
      color: "bg-secondary/10",
    },
    {
      id: 3,
      title: "Authentic Copies",
      description:
        "We guarantee 100% original prints and official publications. No pirated books allowed.",
      icon: "📚",
      color: "bg-accent/10",
    },
    {
      id: 4,
      title: "Easy Return Policy",
      description:
        "Received a damaged book? Don't worry! Our 7-day easy return policy has you covered.",
      icon: "🔄",
      color: "bg-error/10",
    },
    {
      id: 5,
      title: "Book Request",
      description:
        "Can't find your desired book? Let us know, and we will source it for you.",
      icon: "🔍",
      color: "bg-info/10",
    },
    {
      id: 6,
      title: "Membership Rewards",
      description:
        "Join the 'Boi Poka' club to get exclusive discounts and early access to new arrivals.",
      icon: "🎁",
      color: "bg-success/10",
    },
  ];

  return (
    <section className="bg-base-100 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h4 className="text-primary font-bold uppercase tracking-widest mb-2">
            Why Choose Us
          </h4>
          <h2 className="text-4xl md:text-5xl font-black text-base-content mb-4">
            Services for Every{" "}
            <span className="text-primary underline decoration-wavy">
              Boi Poka
            </span>
          </h2>
          <p className="text-base-content/60 max-w-2xl mx-auto text-lg">
            We don't just sell books; we provide a complete experience for every
            bibliophile. From swift delivery to rare book requests, we've got it
            all.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="card bg-base-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-base-300"
            >
              <div className="card-body items-center text-center">
                <div
                  className={`w-20 h-20 ${service.color} rounded-full flex items-center justify-center text-4xl mb-4`}
                >
                  {service.icon}
                </div>
                <h3 className="card-title text-2xl font-bold text-base-content">
                  {service.title}
                </h3>
                <p className="text-base-content/70 mt-2 italic leading-relaxed">
                  "{service.description}"
                </p>
                <div className="card-actions mt-4">
                  <div className="badge badge-outline badge-primary">
                    Reliable
                  </div>
                  <div className="badge badge-outline badge-secondary">
                    Fast
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA (Optional) */}
        <div className="mt-20 p-10 bg-primary rounded-3xl text-primary-content flex flex-col md:flex-row items-center justify-between shadow-2xl">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-3xl font-bold">Looking for a specific book?</h3>
            <p className="opacity-90">
              Send us a request and we'll find it for you!
            </p>
          </div>
          <button className="btn btn-neutral btn-lg border-none shadow-lg px-10">
            Request a Book
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
