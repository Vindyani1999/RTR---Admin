import feature1 from "../assets/icons/FeaturePage/feature1.png";
import feature2 from "../assets/icons/FeaturePage/feature2.png";
import feature3 from "../assets/icons/FeaturePage/feature3.png";
import feature4 from "../assets/icons/FeaturePage/feature4.png";
import feature5 from "../assets/icons/FeaturePage/feature5.png";
import AboutImage from "../assets/icons/HomePage/about3.png";

export const featuresData = [
  {
    titleFront: "About ",
    titleBack: "DineSpot",
    description: `
    Welcome to DineSpot! We offer a simple and efficient way to book
    your favorite tables online. Enjoy our delicious cuisine and
    excellent service in a cozy ambiance. We believe that dining out
    should be an enjoyable and stress-free experience. Whether you're in
    the mood for a romantic dinner, a family gathering, or a casual meal
    with friends, book your table today and let us take care of the rest!
  `,
    imageUrl: AboutImage,
    isFlipped: false,
  },
  {
    titleFront: "Online",
    titleBack: "Table Reservations",
    description:
      "Whether planning a special occasion or a casual dining experience, you can effortlessly book a table online at any time. Say goodbye to waiting in line and enjoy the convenience of reserving your table with just a few clicks.",
    imageUrl: feature1,
    isFlipped: true,
  },
  {
    titleFront: "Fast &",
    titleBack: "Easy",

    description:
      "You can complete your reservations in just a few clicks. We guide you through each step, from selecting your preferred table to finalizing your booking, ensuring a hassle-free experience. Enjoy more time dining and less time planning with us.",
    imageUrl: feature2,
    isFlipped: false,
  },
  {
    titleFront: "Table Setup &",
    titleBack: "Live Bookings",
    description:
      "We provide real-time updates, allowing you to see the current availability and book your table instantly. Enjoy the flexibility and control over your dining arrangements, making your reservations seamless and tailored to your needs.",
    imageUrl: feature3,
    isFlipped: true,
  },
  {
    titleFront: "Order",
    titleBack: "Food Items",
    description:
      "Browse through our extensive menu, select your favorite dishes. We ensure that your food is ready for your table. Enjoy the ease and efficiency of ordering your meals with just a few taps, making your dining experience more enjoyable.",
    imageUrl: feature4,
    isFlipped: false,
  },
  {
    titleFront: "Friendly",
    titleBack: "Customer Service",
    description:
      "We are dedicated to providing exceptional service, ensuring that every aspect of your dining experience is delightful. We believe that great service enhances great food, and we are committed to making you feel welcome and valued every step of the way.",
    imageUrl: feature5,
    isFlipped: true,
  },
];
