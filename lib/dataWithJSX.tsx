import {
  BannerIconBoxesProps,
  FeaturesProps,
  HomepagePAsProps,
  StatsWithIconProps,
} from "@/types";
import {
  User,
  BriefcaseBusiness,
  Trophy,
  Link,
  Phone,
  Coffee,
  Scale,
  PersonStanding,
  CarFront,
  PoundSterling,
  Tv,
  CircleGauge,
  Ambulance,
  CirclePlay,
  Handshake,
  GraduationCap,
  Smile,
  Volume2,
  ThumbsUp,
  DollarSign,
} from "lucide-react";

// Data for Homepage Banner Icon Boxes
export const BannerIconBoxes: BannerIconBoxesProps[] = [
  {
    id: 1,
    headline: "15+ Años De Experiencia",
    content:
      "Estamos en la industria del derecho por más de 15 años con más del 98% de satisfacción del cliente.",
    iconName: (
      <User
        size="60"
        className="border-2 border-primary-main p-4 text-primary-main"
      />
    ),
    type: "bg-grey",
  },
  {
    id: 2,
    headline: "Abogados Calificados y Experimentados",
    content:
      "Nuestro equipo es el mejor en el negocio. Somos un equipo de abogados apasionados por su trabajo.",
    iconName: (
      <BriefcaseBusiness
        size="60"
        className="border-2 border-primary-main p-4 text-primary-main"
      />
    ),
    type: "bg-lightgrey",
  },
  {
    id: 3,
    headline: "Satifaccion Al Cliente",
    content:
      "Siempre buscamos darles el mejor servicio posible, con los mejores resultados del mercado",
    iconName: (
      <Trophy
        size="60"
        className="border-2 border-primary-main p-4 text-primary-main"
      />
    ),
    type: "bg-grey",
  },
];

// Data for Homepage Features
export const HomepageFeatures: FeaturesProps[] = [
  {
    id: 1,
    headline: "SERVICIO PERSONALIZADO",
    content:
      "Nuestros abogados están comprometidos con usted y trabajarán vigorosamente para obtener el mejor resultado posible en su caso.",
    iconName: (
      <Link
        size="60"
        className="border-2 border-primary-main p-4 text-primary-main"
      />
    ),
  },
  {
    id: 2,
    headline: "SIN COSTO INICIAL",
    content:
      "En nuestro Bufete de abogados no es necesario pasar por una pantalla de llamadas. Podrá hablar directamente con un abogado, preferiblemente el que manejará su caso.",
    iconName: (
      <Phone
        size="60"
        className="border-2 border-primary-main p-4 text-primary-main"
      />
    ),
  },
  {
    id: 3,
    headline: "SIN DEMORAS",
    content:
      "Su abogado abordará cualquier problema rápidamente y respetará su tiempo respondiendo rápidamente a sus consultas.",
    iconName: (
      <Coffee
        size="60"
        className="border-2 border-primary-main p-4 text-primary-main"
      />
    ),
  },
  {
    id: 4,
    headline: "EXPERIENCA EN CASOS",
    content:
      "Nuestros abogados tienen experiencia y pueden manejar cualquier tipo de casos por usted.",
    iconName: (
      <BriefcaseBusiness
        size="60"
        className="border-2 border-primary-main p-4 text-primary-main"
      />
    ),
  },
];

// Data for Por qué elegirnos Section
export const WhyChooseUsData: FeaturesProps[] = [
  {
    id: 1,
    headline: "CONSULTA GRATIS",
    content:
      "Ofrecemos consulta gratuita y usted nunca tendrá que preocuparse por los honorarios de la consulta.",
    iconName: (
      <Handshake
        size={72}
        className="border-2 border-primary-main p-4 text-primary-main"
      />
    ),
  },
  {
    id: 2,
    headline: "EQUIPO MÁS CUALIFICADO",
    content:
      "En López & Abogados contamos con el mejor equipo que entiende su caso y trata de ayudarlo a lograr los resultados deseados.",
    iconName: (
      <GraduationCap
        size={72}
        className="border-2 border-primary-main p-4 text-primary-main"
      />
    ),
  },
  {
    id: 3,
    headline: "SIN GANANCIAS SIN COMISIONES",
    content:
      "Hemos ayudado a numerosos clientes en sus complicados asuntos legales y somos expertos en esto.",
    iconName: (
      <PoundSterling
        size={72}
        className="border-2 border-primary-main p-4 text-primary-main"
      />
    ),
  },
];

// Data for We Are Best Section
export const WeAreBestData: FeaturesProps[] = [
  {
    id: 1,
    headline: "ENTENDEMOS LA LEY",
    content:
      "Hemos ayudado a numerosos clientes en sus complicados asuntos legales y somos expertos en esto.",
    iconName: (
      <Scale
        size={72}
        className="border-2 border-primary-main p-4 text-primary-main"
      />
    ),
  },
  {
    id: 2,
    headline: "CLIENTES FELICES",
    content:
      "Alrededor del 98% de nuestros clientes están satisfechos con los servicios que recibieron y estarían felices de recomendar López & Abogados a otros.",
    iconName: (
      <Smile
        size={72}
        className="border-2 border-primary-main p-4 text-primary-main"
      />
    ),
  },
  {
    id: 3,
    headline: "TE LLEVAMOS AL ÉXITO",
    content:
      "Nuestro objetivo final es ayudarle y creemos que el cliente es nuestro activo.",
    iconName: (
      <Volume2
        size={72}
        className="border-2 border-primary-main p-4 text-primary-main"
      />
    ),
  },
];

// Data for Attorney Practice Area List
export const AttorneyPAList: FeaturesProps[] = [
  {
    id: 1,
    headline: "Family Law",
    content:
      "Robert has been working as a family law attorney for more than 10 years and have solved tons of cases with his expertise.",
    iconName: <Scale size={60} className="h-14 w-16 border-2 border-none" />,
  },
  {
    id: 2,
    headline: "Child Custody",
    content:
      "One of the most difficult and emotional area of law is related to the children law. Robert uses his experience to get these matters solved.",
    iconName: (
      <PersonStanding size={60} className="h-14 w-16 border-2 border-none" />
    ),
  },
  {
    id: 3,
    headline: "Business Law",
    content:
      "Business laws are sometimes quite complex to figure out because of things become complicated when not sure about the laws. Robert is best when it comes to business law.",
    iconName: (
      <PoundSterling size={60} className="h-14 w-16 border-2 border-none" />
    ),
  },
  {
    id: 4,
    headline: "Emergency Law",
    content:
      "Robert has done well in the past 10 years tackling with emergency situations and have successfully taken clients case which lead them to protection under law.",
    iconName: (
      <Ambulance size={60} className="h-14 w-16 border-2 border-none" />
    ),
  },
];

// Data for Homepage Practice Area
export const HomepagePAs: HomepagePAsProps[] = [
  {
    id: 1,
    link: "#",
    PA: "Pensiones De Vejez",
    iconName: (
      <Scale size={60} className="h-14 w-16 border-2 border-none text-white" />
    ),
  },
  {
    id: 2,
    link: "#",
    PA: "Pension De Invalidez",
    iconName: (
      <PersonStanding
        size={60}
        className="h-14 w-16 border-2 border-none text-white"
      />
    ),
  },
  {
    id: 3,
    link: "#",
    PA: "Pensiones De Sobrevivientes",
    iconName: (
      <CarFront
        size={60}
        className="h-14 w-16 border-2 border-none text-white"
      />
    ),
  },
  {
    id: 4,
    link: "#",
    PA: "Reliquidacion De Su Pension",
    iconName: (
      <PoundSterling
        size={60}
        className="h-14 w-16 border-2 border-none text-white"
      />
    ),
  },
  {
    id: 5,
    link: "#",
    PA: "Devolucion de Aportes Fondos Privados",
    iconName: (
      <Tv size={60} className="h-14 w-16 border-2 border-none text-white" />
    ),
  },
  {
    id: 6,
    link: "#",
    PA: "Imndemnizacion Por Daños Y Perjuicios",
    iconName: (
      <CircleGauge
        size={60}
        className="h-14 w-16 border-2 border-none text-white"
      />
    ),
  },
  // {
  //   id: 7,
  //   link: "#",
  //   PA: "Emergency Law",
  //   iconName: (
  //     <Ambulance
  //       size={60}
  //       className="h-14 w-16 border-2 border-none text-white"
  //     />
  //   ),
  // },
  // {
  //   id: 8,
  //   link: "#",
  //   PA: "Drowning Law",
  //   iconName: (
  //     <CirclePlay
  //       size={60}
  //       className="h-14 w-16 border-2 border-none text-white"
  //     />
  //   ),
  // },
];

// Data for Stats Counter
export const StatsWithIcon: StatsWithIconProps[] = [
  {
    id: 1,
    amountPreText: "",
    amount: 150,
    amountPostText: "+",
    text: "Clientes",
    iconName: <Handshake size={72} className="border-2 p-4 text-white" />,
  },
  {
    id: 2,
    amountPreText: "$",
    amount: 5000000000,
    amountPostText: "",
    text: "Recuperados",
    iconName: <DollarSign size={72} className="border-2 p-4 text-white" />,
  },
  {
    id: 3,
    amountPreText: "",
    amount: 98,
    amountPostText: "%",
    text: "Efectividad",
    iconName: <ThumbsUp size={72} className="border-2 p-4 text-white" />,
  },
];

// Data for Stats Counter
export const StatsWithIconTeam: StatsWithIconProps[] = [
  {
    id: 1,
    amountPreText: "",
    amount: 2000,
    amountPostText: "+",
    text: "Happy Clients",
    iconName: (
      <Smile
        size={72}
        className="border-2 border-primary-main p-4 text-primary-main"
      />
    ),
  },
  {
    id: 3,
    amountPreText: "",
    amount: 98,
    amountPostText: "%",
    text: "Efectividad",
    iconName: (
      <ThumbsUp
        size={72}
        className="border-2 border-primary-main p-4 text-primary-main"
      />
    ),
  },
  {
    id: 2,
    amountPreText: "$",
    amount: 20000000,
    amountPostText: "",
    text: "Recovered",
    iconName: (
      <DollarSign
        size={72}
        className="border-2 border-primary-main p-4 text-primary-main"
      />
    ),
  },
];
