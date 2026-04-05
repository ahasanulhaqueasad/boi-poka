import React from "react";

const About = () => {
  // Mock data for statistics
  const stats = [
    { label: "Years of Experience", value: "5+" },
    { label: "Projects Completed", value: "150+" },
    { label: "Happy Clients", value: "100+" },
    { label: "Team Members", value: "15+" },
  ];

  return (
    <div className="bg-base-100 py-16 px-4 sm:px-8 lg:px-16 font-sans">
      {/* 1. Hero / Introduction Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
        <div className="order-2 lg:order-1">
          <h4 className="text-primary font-bold tracking-widest uppercase mb-2">
            Our Story
          </h4>
          <h2 className="text-4xl md:text-5xl font-extrabold text-base-content mb-6 leading-tight">
            We Build Digital Solutions <br /> That Drive Success
          </h2>
          <p className="text-lg text-base-content/70 mb-8 leading-relaxed">
            Founded in 2020, we have been at the forefront of digital
            innovation. We specialize in creating high-performance web
            applications and branding strategies that help businesses scale in
            the modern digital landscape.
          </p>
          <button className="btn btn-primary btn-lg shadow-lg">
            Learn More
          </button>
        </div>
        <div className="order-1 lg:order-2">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
            alt="Our Team"
            className="rounded-2xl shadow-2xl w-full object-cover"
          />
        </div>
      </div>

      {/* 2. Mission, Vision & Values (Cards) */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-shadow">
          <div className="card-body text-center">
            <h3 className="card-title justify-center text-primary text-2xl mb-2">
              Our Mission
            </h3>
            <p className="text-base-content/70">
              To empower businesses with cutting-edge technology and creative
              designs that solve real-world problems.
            </p>
          </div>
        </div>
        <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-shadow">
          <div className="card-body text-center">
            <h3 className="card-title justify-center text-primary text-2xl mb-2">
              Our Vision
            </h3>
            <p className="text-base-content/70">
              To be a global leader in digital transformation, known for our
              commitment to excellence and innovation.
            </p>
          </div>
        </div>
        <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-shadow">
          <div className="card-body text-center">
            <h3 className="card-title justify-center text-primary text-2xl mb-2">
              Core Values
            </h3>
            <p className="text-base-content/70">
              Integrity, transparency, and a relentless focus on delivering
              quality results for every client.
            </p>
          </div>
        </div>
      </div>

      {/* 3. Statistics Section (daisyUI Stats) */}
      <div className="max-w-7xl mx-auto mb-20">
        <div className="stats stats-vertical lg:stats-horizontal shadow w-full bg-neutral text-neutral-content py-8">
          {stats.map((item, index) => (
            <div key={index} className="stat place-items-center">
              <div className="stat-title text-neutral-content/70 uppercase font-semibold">
                {item.label}
              </div>
              <div className="stat-value text-primary text-5xl">
                {item.value}
              </div>
              <div className="stat-desc text-neutral-content/50 font-medium">
                Updated 2026
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Meet The Team Section */}
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-base-content">
          Meet Our Experts
        </h2>
        <p className="text-base-content/60 max-w-2xl mx-auto mb-12 text-lg">
          Our diverse team of designers, developers, and strategists work
          together to bring your ideas to life.
        </p> 

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4">
          {[1, 2, 3].map((member) => (
            <div key={member} className="flex flex-col items-center group">
              <div className="avatar mb-6">
                <div className="w-40 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 grayscale group-hover:grayscale-0 transition duration-500">
                  <img
                    src={`https://i.pravatar.cc/300?img=${member + 15}`}
                    alt="Team Member"
                  />
                </div>
              </div>
              <h4 className="text-xl font-bold text-base-content">
                Team Member {member}
              </h4>
              <p className="text-primary font-medium uppercase tracking-tighter">
                Senior Specialist
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
