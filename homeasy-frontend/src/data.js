import electrician from "./assets/images/ServiceCategory/electrician.webp";
import painter from "./assets/images/ServiceCategory/painter.webp";
import plumber from "./assets/images/ServiceCategory/plumber.webp";

//service data
export const serviceList = [
  {
    name: "Electrician",
    image: electrician,
    services: [
      {
        name: "Wiring",
        image: "https://cdn-icons-png.flaticon.com/512/2695/2695278.png",
        subServices: [
          {
            name: "Socket Replacement",
            image: "https://cdn-icons-png.flaticon.com/512/2695/2695278.png",
            price: "149",
          },
          {
            name: "Switch Replacement",
            image: "https://cdn-icons-png.flaticon.com/512/187/187426.png",
            price: "149",
          },
          {
            name: "Switchboard Repair",
            image: "https://cdn-icons-png.flaticon.com/512/16479/16479248.png",
            price: "149",
          },
          {
            name: "Switchboard Installation",
            image: "https://cdn-icons-png.flaticon.com/512/3046/3046948.png",
            price: "149",
          },
        ],
      },
      {
        name: "Light",
        image: "https://cdn-icons-png.flaticon.com/512/187/187426.png",
        subServices: [
          {
            name: "Wall Light Installation",
            image: "https://cdn-icons-png.flaticon.com/512/2695/2695278.png",
            price: "1000",
          },
          {
            name: "Ceiling Light Installation",
            image: "https://cdn-icons-png.flaticon.com/512/187/187426.png",
            price: "1000",
          },
          {
            name: "Bathroom Light Installation",
            image: "https://cdn-icons-png.flaticon.com/512/16479/16479248.png",
            price: "1000",
          },
          {
            name: "Decorative Light Installation",
            image:
              "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_128,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1714115357362-793c6f.jpeg",
            price: "1000",
          },
        ],
      },
      {
        name: "Air Conditioner",
        image: "https://cdn-icons-png.flaticon.com/512/16479/16479248.png",
        subServices: [
          {
            name: "Air Conditioner Installation",
            image: "https://cdn-icons-png.flaticon.com/512/2695/2695278.png",
            price: "899",
          },
          {
            name: "Air Conditioner Repair",
            image: "https://cdn-icons-png.flaticon.com/512/187/187426.png",
            price: "2499",
          },
          {
            name: "Air Conditioner Gas Filling",
            image: "https://cdn-icons-png.flaticon.com/512/16479/16479248.png",
            price: "2000",
          },
          {
            name: "Air Conditioner Deep Cleaning",
            image: "https://cdn-icons-png.flaticon.com/512/3046/3046948.png",
            price: "1000",
          },
        ],
      },
      {
        name: "Fan",
        image: "https://cdn-icons-png.flaticon.com/512/3046/3046948.png",
        subServices: [
          {
            name: "Fan Replacement",
            image: "https://cdn-icons-png.flaticon.com/512/2695/2695278.png",
            price: "149",
          },
          {
            name: "Fan Repair",
            image: "https://cdn-icons-png.flaticon.com/512/187/187426.png",
            price: "149",
          },
          {
            name: "Fan Installation",
            image: "https://cdn-icons-png.flaticon.com/512/16479/16479248.png",
            price: "149",
          },
          {
            name: "Fan Installation",
            image: "https://cdn-icons-png.flaticon.com/512/3046/3046948.png",
            price: "149",
          },
        ],
      },
    ],
  },
  {
    name: "Plumber",
    image: plumber,
    services: [
      {
        name: "Drain",
        image: "https://cdn-icons-png.flaticon.com/512/12029/12029622.png",
        subServices: [
          {
            name: "Drain Cleaning",
            image: "https://cdn-icons-png.flaticon.com/512/12029/12029622.png",
            price: "500",
          },
          {
            name: "Drain Repair",
            image: "https://cdn-icons-png.flaticon.com/512/12029/12029622.png",
            price: "800",
          },
        ],
      },
      {
        name: "Bath Fittings",
        image: "https://cdn-icons-png.flaticon.com/512/10073/10073767.png",
        subServices: [
          {
            name: "Tap Installation",
            image: "https://cdn-icons-png.flaticon.com/512/10073/10073767.png",
            price: "200",
          },
          {
            name: "Shower Installation",
            image: "https://cdn-icons-png.flaticon.com/512/10073/10073767.png",
            price: "300",
          },
        ],
      },
      {
        name: "Toilet Cleaning",
        image: "https://cdn-icons-png.flaticon.com/512/2954/2954917.png",
        subServices: [
          {
            name: "Toilet Deep Cleaning",
            image: "https://cdn-icons-png.flaticon.com/512/2954/2954917.png",
            price: "500",
          },
          {
            name: "Toilet Repair",
            image: "https://cdn-icons-png.flaticon.com/512/2954/2954917.png",
            price: "700",
          },
        ],
      },
      {
        name: "Water Connections",
        image: "https://cdn-icons-png.flaticon.com/512/12029/12029632.png",
        subServices: [
          {
            name: "Pipe Installation",
            image: "https://cdn-icons-png.flaticon.com/512/12029/12029632.png",
            price: "500",
          },
          {
            name: "Pipe Repair",
            image: "https://cdn-icons-png.flaticon.com/512/12029/12029632.png",
            price: "600",
          },
        ],
      },
    ],
  },
  {
    name: "Painter",
    image: painter,
    services: [
      {
        name: "Full Home Painting",
        image: "https://cdn-icons-png.flaticon.com/512/2850/2850408.png",
        subServices: [
          {
            name: "Interior Painting",
            image: "https://cdn-icons-png.flaticon.com/512/2850/2850408.png",
            price: "15000",
          },
          {
            name: "Exterior Painting",
            image: "https://cdn-icons-png.flaticon.com/512/2850/2850408.png",
            price: "20000",
          },
        ],
      },
      {
        name: "Partial Home Painting",
        image: "https://cdn-icons-png.flaticon.com/512/2400/2400359.png",
        subServices: [
          {
            name: "Single Room Painting",
            image: "https://cdn-icons-png.flaticon.com/512/2400/2400359.png",
            price: "5000",
          },
          {
            name: "Two Rooms Painting",
            image: "https://cdn-icons-png.flaticon.com/512/2400/2400359.png",
            price: "9000",
          },
        ],
      },
      {
        name: "Car Painting",
        image: "https://cdn-icons-png.flaticon.com/512/887/887173.png",
        subServices: [
          {
            name: "Full Car Painting",
            image: "https://cdn-icons-png.flaticon.com/512/887/887173.png",
            price: "12000",
          },
          {
            name: "Scratch Repair",
            image: "https://cdn-icons-png.flaticon.com/512/887/887173.png",
            price: "3000",
          },
        ],
      },
      {
        name: "Wall Painting",
        image: "https://cdn-icons-png.flaticon.com/512/3669/3669573.png",
        subServices: [
          {
            name: "Accent Wall Painting",
            image: "https://cdn-icons-png.flaticon.com/512/3669/3669573.png",
            price: "2500",
          },
          {
            name: "Mural Painting",
            image: "https://cdn-icons-png.flaticon.com/512/3669/3669573.png",
            price: "5000",
          },
        ],
      },
    ],
  },
];
