
import React from "react";
import { createRoot } from "react-dom/client";

import {
  Wifi,
  ShieldCheck,
  Droplets,
  Flame,
  WashingMachine,
  Bath,
  Utensils,
  MapPin,
  Heart,
  MessageCircle,
  Phone,
  ArrowUpRight,
  Sparkles
} from "lucide-react";

// ========================================
// HOSTEL DETAILS
// ========================================

const HOSTEL = {
  name: "Gayatri",
  type: "Girls Hostel",
  phone: "8639604218",
  whatsapp: "918639604218",
  address: "Badepally, Jadcherla (Mandal)",
  district: "Mahabubnagar District, Telangana",
  latitude: 16.7618056,
  longitude: 78.1418611,
  mapsLink: "https://maps.app.goo.gl/fcdTXd1rnc4LbVTC6"
};

const message =
  "Hello, I am interested in Gayatri Girls Hostel. Please share room availability, monthly rent and food arrangements.";

const whatsappLink =
  `https://wa.me/${HOSTEL.whatsapp}?text=${encodeURIComponent(message)}`;

const phoneLink = `tel:+91${HOSTEL.phone}`;

const directionsLink =
  `https://www.google.com/maps/dir/?api=1&destination=${HOSTEL.latitude},${HOSTEL.longitude}`;

// ========================================
// COLORS
// ========================================

const c = {
  plum: "#79477C",
  deep: "#392440",
  dark: "#26182D",
  cream: "#FCF9F6",
  rose: "#F3E9F0",
  muted: "#817581",
  white: "#FFFFFF",
  green: "#25D366",
  gold: "#B99A72"
};

// ========================================
// STYLES
// ========================================

const s = {
  page: {
    fontFamily: "Arial, sans-serif",
    color: c.deep,
    background: c.cream,
    minHeight: "100vh",
    overflowX: "hidden"
  },

  header: {
    padding: "20px 7%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 18,
    background: c.cream
  },

  brand: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    fontWeight: 800,
    letterSpacing: 2,
    color: c.deep
  },

  logo: {
    width: 48,
    height: 48,
    borderRadius: 14,
    background: c.plum,
    color: c.white,
    display: "grid",
    placeItems: "center",
    fontFamily: "Georgia",
    fontSize: 26,
    boxShadow: "0 6px 18px #79477C35"
  },

  nav: {
    display: "flex",
    gap: 22,
    flexWrap: "wrap",
    alignItems: "center"
  },

  link: {
    color: c.deep,
    textDecoration: "none",
    fontSize: 13,
    fontWeight: 600
  },

  navButton: {
    background: c.plum,
    color: c.white,
    textDecoration: "none",
    padding: "12px 19px",
    borderRadius: 30,
    fontSize: 13,
    fontWeight: 700
  },

  hero: {
    padding: "75px 7%",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,320px),1fr))",
    gap: 45,
    alignItems: "center",
    background: "linear-gradient(135deg,#FCF9F6 45%,#F2E7EF)"
  },

  kicker: {
    color: c.plum,
    fontSize: 11,
    letterSpacing: 2.5,
    fontWeight: 800
  },

  h1: {
    fontFamily: "Georgia,serif",
    fontSize: "clamp(44px,6vw,76px)",
    fontWeight: 400,
    lineHeight: 1.08,
    color: c.deep,
    margin: "23px 0"
  },

  accent: {
    color: c.plum,
    fontStyle: "italic"
  },

  p: {
    fontSize: 14,
    lineHeight: 1.9,
    color: c.muted,
    maxWidth: 620
  },

  buttons: {
    display: "flex",
    gap: 12,
    flexWrap: "wrap",
    marginTop: 25
  },

  primaryBtn: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 9,
    padding: "15px 23px",
    background: c.plum,
    color: c.white,
    textDecoration: "none",
    borderRadius: 40,
    fontSize: 13,
    fontWeight: 700,
    boxShadow: "0 8px 20px #79477C30"
  },

  whatsappBtn: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 9,
    padding: "15px 23px",
    background: c.green,
    color: c.white,
    textDecoration: "none",
    borderRadius: 40,
    fontSize: 13,
    fontWeight: 700,
    boxShadow: "0 8px 20px #25D36635"
  },

  heroArt: {
    minHeight: 390,
    borderRadius: 28,
    background: "linear-gradient(145deg,#E5D4E2,#F6EBDD)",
    padding: 22,
    display: "grid",
    placeItems: "center",
    boxShadow: "0 20px 50px #39244012"
  },

  artInner: {
    width: "100%",
    minHeight: 335,
    borderRadius: 20,
    background: "linear-gradient(150deg,#FCF8F0,#F4E9E7)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: 20,
    boxSizing: "border-box"
  },

  artTitle: {
    fontFamily: "Georgia,serif",
    fontSize: "clamp(28px,4vw,42px)",
    color: c.deep,
    lineHeight: 1.25,
    margin: "22px 0"
  },

  badge: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    padding: "10px 15px",
    borderRadius: 30,
    background: c.white,
    color: c.plum,
    fontSize: 11,
    fontWeight: 700,
    marginTop: 20
  },

  strip: {
    padding: "30px 7%",
    background: c.white,
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,220px),1fr))",
    gap: 25
  },

  stripItem: {
    display: "flex",
    alignItems: "center",
    gap: 14,
    fontSize: 13,
    color: c.deep
  },

  section: {
    padding: "80px 8%"
  },

  title: {
    fontFamily: "Georgia,serif",
    fontSize: "clamp(34px,4vw,53px)",
    fontWeight: 400,
    lineHeight: 1.15,
    color: c.deep,
    margin: "17px 0 25px"
  },

  about: {
    maxWidth: 850
  },

  facilities: {
    background: "#F5EFF4"
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,220px),1fr))",
    gap: 18,
    marginTop: 35
  },

  card: {
    background: c.white,
    padding: 25,
    borderRadius: 17,
    border: "1px solid #EEE5EC",
    minHeight: 165,
    boxSizing: "border-box",
    boxShadow: "0 5px 20px #39244008",
    transition: "transform .25s ease, box-shadow .25s ease"
  },

  icon: {
    width: 48,
    height: 48,
    borderRadius: 14,
    background: c.rose,
    color: c.plum,
    display: "grid",
    placeItems: "center"
  },

  cardTitle: {
    fontFamily: "Georgia,serif",
    fontSize: 20,
    fontWeight: 400,
    color: c.deep,
    margin: "18px 0 8px"
  },

  food: {
    padding: "70px 9%",
    background: "linear-gradient(120deg,#E9DCE7,#F4E6DC)",
    textAlign: "center"
  },

  foodText: {
    maxWidth: 650,
    margin: "auto"
  },

  foodIcon: {
    width: 65,
    height: 65,
    background: c.white,
    borderRadius: "50%",
    display: "grid",
    placeItems: "center",
    margin: "0 auto 22px",
    color: c.plum
  },

  location: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,280px),1fr))",
    gap: 35,
    alignItems: "center",
    background: c.white,
    padding: 28,
    borderRadius: 22,
    boxShadow: "0 10px 35px #3924400C"
  },

  map: {
    minHeight: 320,
    borderRadius: 16,
    overflow: "hidden",
    background: "#E9EDE1"
  },

  contact: {
    background: c.dark,
    color: c.white,
    textAlign: "center",
    padding: "85px 7%"
  },

  footer: {
    padding: "28px 7%",
    display: "flex",
    justifyContent: "space-between",
    gap: 15,
    flexWrap: "wrap",
    fontSize: 12,
    color: c.muted
  },

  floatingWhatsApp: {
    position: "fixed",
    right: 22,
    bottom: 22,
    width: 58,
    height: 58,
    borderRadius: "50%",
    background: c.green,
    color: c.white,
    display: "grid",
    placeItems: "center",
    boxShadow: "0 5px 20px #0003",
    zIndex: 1000,
    textDecoration: "none"
  }
};

// ========================================
// FACILITIES
// ========================================

const features = [
  [Wifi, "Wi-Fi", "Internet access for study and everyday needs."],
  [ShieldCheck, "CCTV Security", "CCTV facility in common areas."],
  [Droplets, "24/7 Water", "Water supply throughout the day."],
  [Flame, "Hot Water", "Hot water facility for daily use."],
  [WashingMachine, "Washing Machine", "Laundry convenience for residents."],
  [Bath, "Attached Bathroom", "Rooms with attached bathroom facility."],
  [Utensils, "Food Available", "Food arrangements available separately."]
];

// ========================================
// MAIN APP
// ========================================

function App() {
  return (
    <div style={s.page}>

      {/* HEADER */}

      <header style={s.header}>
        <div style={s.brand}>
          <div style={s.logo}>G</div>

          <div>
            <div style={{ fontSize: 18 }}>GAYATRI</div>
            <small style={{
              display: "block",
              fontSize: 9,
              letterSpacing: 3,
              color: c.muted,
              marginTop: 4
            }}>
              GIRLS HOSTEL
            </small>
          </div>
        </div>

        <nav style={s.nav}>
          <a style={s.link} href="#about">About</a>
          <a style={s.link} href="#facilities">Facilities</a>
          <a style={s.link} href="#location">Location</a>
          <a style={s.navButton} href="#contact">Enquire Now ↗</a>
        </nav>
      </header>

      <main>

        {/* HERO */}

        <section id="home" style={s.hero}>
          <div>
            <div style={s.kicker}>
              A WELCOMING PLACE TO STAY IN JADCHERLA
            </div>

            <h1 style={s.h1}>
              Your comfort.
              <br />
              <em style={s.accent}>Your space.</em>
              <br />
              Your second home.
            </h1>

            <p style={s.p}>
              Welcome to Gayatri Girls Hostel, a comfortable place
              to stay in Badepally, Jadcherla. Enjoy convenient
              everyday facilities in a welcoming environment.
            </p>

            <div style={s.buttons}>
              <a href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                style={s.whatsappBtn}>
                <MessageCircle size={18} />
                WhatsApp Enquiry
                <ArrowUpRight size={16} />
              </a>

              <a href="#facilities" style={s.primaryBtn}>
                Explore Facilities
                <ArrowUpRight size={16} />
              </a>
            </div>

            <div style={s.badge}>
              <ShieldCheck size={17} />
              Girls-only accommodation
            </div>
          </div>

          <div style={s.heroArt}>
            <div style={s.artInner}>
              <Sparkles size={30} color={c.gold} />

              <div style={s.artTitle}>
                A little comfort
                <br />
                <em style={s.accent}>goes a long way.</em>
              </div>

              <Heart size={36} color={c.plum} />

              <p style={{
                letterSpacing: 3,
                fontSize: 10,
                color: c.muted,
                marginTop: 25
              }}>
                GAYATRI GIRLS HOSTEL
                <br />
                BADEPALLY · JADCHERLA
              </p>
            </div>
          </div>
        </section>

        {/* QUICK INFORMATION */}

        <section style={s.strip}>
          <div style={s.stripItem}>
            <MapPin color={c.plum} size={27} />
            <span>
              <b>Badepally, Jadcherla</b>
              <br />
              <small style={{ color: c.muted }}>
                Mahabubnagar District
              </small>
            </span>
          </div>

          <div style={s.stripItem}>
            <Utensils color={c.plum} size={27} />
            <span>
              <b>Food Available Separately</b>
              <br />
              <small style={{ color: c.muted }}>
                Ask about food arrangements
              </small>
            </span>
          </div>

          <div style={s.stripItem}>
            <ShieldCheck color={c.plum} size={27} />
            <span>
              <b>Girls-only Hostel</b>
              <br />
              <small style={{ color: c.muted }}>
                Dedicated accommodation
              </small>
            </span>
          </div>
        </section>

        {/* ABOUT */}

        <section id="about" style={s.section}>
          <div style={s.about}>
            <div style={s.kicker}>WELCOME TO GAYATRI</div>

            <h2 style={s.title}>
              A stay that makes
              <br />
              <em style={s.accent}>everyday easier.</em>
            </h2>

            <p style={s.p}>
              Looking for a place to stay in Jadcherla?
              Gayatri Girls Hostel offers accommodation in
              Badepally with useful everyday facilities.
              Whether you are studying or working nearby,
              contact us to ask about room availability,
              monthly rent and stay details.
            </p>
          </div>
        </section>

        {/* FACILITIES */}

        <section id="facilities"
          style={{ ...s.section, ...s.facilities }}>

          <div style={s.kicker}>
            THOUGHTFUL EVERYDAY ESSENTIALS
          </div>

          <h2 style={s.title}>
            Facilities for a
            <br />
            <em style={s.accent}>comfortable routine.</em>
          </h2>

          <p style={s.p}>
            Useful amenities to make your day-to-day stay
            more convenient.
          </p>

          <div style={s.grid}>
            {features.map(([Icon, name, desc]) => (
              <article
                key={name}
                style={s.card}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.boxShadow =
                    "0 15px 30px #39244018";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 5px 20px #39244008";
                }}
              >
                <div style={s.icon}>
                  <Icon size={23} />
                </div>

                <h3 style={s.cardTitle}>{name}</h3>

                <p style={{
                  ...s.p,
                  fontSize: 12,
                  margin: 0
                }}>
                  {desc}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* FOOD */}

        <section style={s.food}>
          <div style={s.foodText}>
            <div style={s.foodIcon}>
              <Utensils size={29} />
            </div>

            <div style={s.kicker}>FOOD ARRANGEMENTS</div>

            <h2 style={s.title}>
              Food available
              <br />
              <em style={s.accent}>separately.</em>
            </h2>

            <p style={s.p}>
              Food is not included in the rent by default.
              Contact the hostel to understand available food
              arrangements and additional charges.
            </p>

            <a href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              style={s.primaryBtn}>
              Ask About Food
              <ArrowUpRight size={16} />
            </a>
          </div>
        </section>

        {/* LOCATION */}

        <section id="location" style={s.section}>
          <div style={s.location}>

            <div style={s.map}>
              <iframe
                title="Gayatri Girls Hostel Google Maps Location"
                src={`https://www.google.com/maps?q=${HOSTEL.latitude},${HOSTEL.longitude}&z=17&output=embed`}
                width="100%"
                height="320"
                style={{
                  border: 0,
                  display: "block",
                  borderRadius: 16
                }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div>
              <div style={s.kicker}>FIND YOUR WAY HERE</div>

              <h2 style={s.title}>
                Located in
                <br />
                <em style={s.accent}>Badepally, Jadcherla.</em>
              </h2>

              <p style={s.p}>
                <b>Gayatri Girls Hostel</b>
                <br />
                {HOSTEL.address}
                <br />
                {HOSTEL.district}
              </p>

              <div style={s.buttons}>
                <a
                  href={directionsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={s.primaryBtn}
                >
                  <MapPin size={18} />
                  Get Directions
                  <ArrowUpRight size={16} />
                </a>
              </div>

              <p style={{
                ...s.p,
                fontSize: 11,
                marginTop: 18
              }}>
                Open the map for the hostel location and
                get directions from your current location.
              </p>
            </div>
          </div>
        </section>

        {/* CONTACT */}

        <section id="contact" style={s.contact}>
          <div style={{
            ...s.kicker,
            color: "#D9B8D6"
          }}>
            TAKE THE NEXT STEP
          </div>

          <h2 style={{
            ...s.title,
            color: c.white,
            fontSize: "clamp(38px,5vw,60px)"
          }}>
            Make room for
            <br />
            <em style={{ color: "#D9B8D6" }}>
              a better stay.
            </em>
          </h2>

          <p style={{
            ...s.p,
            color: "#D5C9D6",
            margin: "auto"
          }}>
            Interested in Gayatri Girls Hostel?
            Contact the owner to check availability,
            monthly rent, room options and food arrangements.
          </p>

          <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 15,
            marginTop: 30
          }}>
            <a href={phoneLink}
              style={{
                ...s.primaryBtn,
                background: c.white,
                color: c.deep
              }}>
              <Phone size={18} />
              +91 {HOSTEL.phone}
            </a>

            <a href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              style={s.whatsappBtn}>
              <MessageCircle size={19} />
              Chat on WhatsApp
              <ArrowUpRight size={16} />
            </a>
          </div>

          <p style={{
            fontSize: 11,
            color: "#C8B7CB",
            marginTop: 30
          }}>
            We look forward to hearing from you.
          </p>
        </section>

      </main>

      {/* FOOTER */}

      <footer style={s.footer}>
        <b style={{
          color: c.deep,
          letterSpacing: 2
        }}>
          GAYATRI GIRLS HOSTEL
        </b>

        <span>
          Comfortable accommodation in Badepally, Jadcherla.
        </span>

        <span>
          © {new Date().getFullYear()} Gayatri Girls Hostel
        </span>
      </footer>

      {/* FLOATING WHATSAPP */}

      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        style={s.floatingWhatsApp}
        aria-label="Contact Gayatri Hostel on WhatsApp"
        title="Chat on WhatsApp"
      >
        <MessageCircle size={29} />
      </a>

    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
