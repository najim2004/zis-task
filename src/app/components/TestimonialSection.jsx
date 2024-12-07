import { Testimonials } from "./Testimonial";

export default function TestimonialsSection() {
  // This would typically come from an API or database
  const testimonials = [
    {
      id: 1,
      name: "Peter Rose",
      image:
        "https://imgs.search.brave.com/2fHUUnzTbhxFKiqfa_Ck_wgSAeaFV3aLokBF93aHOWc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzEwLzI5LzQzLzkx/LzM2MF9GXzEwMjk0/MzkxMDVfcXRRcVZB/MDgxazNSOEhEeUYw/Mm5qQlVDNmtRMkFN/Y3cuanBn",
      rating: 5,
      text: "A huge thank you to the RPC team for making our wedding day even more special. The attention to detail and the professionalism of the chauffeurs were outstanding",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      image:
        "https://imgs.search.brave.com/fgI1yRoYp7mKejtMGtn3IlE45LltBV_eI4pj0QYvLps/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM4/NDM1NzE1OC9waG90/by9wb3J0cmFpdC1v/Zi1hLWJlYXV0aWZ1/bC1tZXhpY2FuLXdv/bWFuLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1PdEZZc19y/ZFdJbTZKSlp4QWFu/SzZmMHBWLVlNZk1y/MUlYVUFIVUNSZnNz/PQ",
      rating: 5,
      text: "Exceptional service from start to finish. The chauffeur was punctual, professional, and made our airport transfer completely stress-free.",
    },
    {
      id: 3,
      name: "Michael Chen",
      image:
        "https://imgs.search.brave.com/Om78lIN_ktNY5rwsxJ_BEXx8SrlAjC8wRWAMM2iYucc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9m/cm9udC12aWV3LWhh/bmRzb21lLW1hbi1w/b3Npbmctd2l0aC1o/aXMtYXJtcy1jcm9z/c2VkXzIzLTIxNDg2/OTIxNzguanBnP3Nl/bXQ9YWlzX2h5YnJp/ZA",
      rating: 5,
      text: "RPC Limo provided an outstanding experience for our corporate event. Their attention to detail and professional service exceeded our expectations.",
    },
  ];

  return (
    <section className="max-w-[1320px] mx-auto mt-20">
      <h2 className="text-4xl font-serif mb-6">Our Satisfied Clients</h2>
      <p className="text-gray-700 mb-12 max-w-4xl">
        At RPC Limo, our success is measured by the satisfaction of our clients.
        We take immense pride in building lasting relationships and delivering
        exceptional service that exceeds expectations. Here&apos;s what some of
        our satisfied clients have to say about their experiences
      </p>
      <Testimonials testimonials={testimonials} />
    </section>
  );
}
