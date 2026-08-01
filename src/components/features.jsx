import Card from "./Card";

const servicesData = [
  { id: 1, title: "AI Solutions", description: "Smart automation for businesses.", image: "/aisol.png.webp", badge: "New" },
  { id: 2, title: "Cloud Services", description: "Reliable and scalable cloud services.", image: "/cloud.png.webp", badge: "Popular" },
  { id: 3, title: "Cybersecurity", description: "Protecting your digital assets.", image: "/cyber.png.webp", badge: "Trusted" }
];

export default function Features() {
  return (
    <section className="features">
      <h2>✨ Our Services</h2>
      <div className="grid">
        {servicesData.map(service => (
          <Card key={service.id} {...service} />
        ))}
      </div>
    </section>
  );
}
