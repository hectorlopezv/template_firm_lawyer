import homeblog1 from "@/public/assets/home-blog-1.jpg";
import homeblog2 from "@/public/assets/home-blog-2.jpg";
import homeblog3 from "@/public/assets/home-blog-3.jpg";
import homeblog4 from "@/public/assets/home-blog-4.jpg";
import homeblog5 from "@/public/assets/home-blog-5.jpg";
import homeblog6 from "@/public/assets/home-blog-6.jpg";
import teammember1 from "@/public/assets/team-member-1.jpg";
import teammember2 from "@/public/assets/team-member-2.jpg";
import teammember3 from "@/public/assets/team-member-3.jpg";
import teammember4 from "@/public/assets/team-member-4.jpg";
import teammember5 from "@/public/assets/team-member-5.jpg";
import a1 from "@/public/assets/a_1.jpeg";
import a2 from "@/public/assets/a_2.jpeg";
import a3 from "@/public/assets/a_3.jpeg";

import testimonialimg1 from "@/public/assets/home-testimonial-img-1.jpeg";
import testimonialimg2 from "@/public/assets/home-testimonial-img-2.jpeg";
import testimonialimg3 from "@/public/assets/home-testimonial-img-3.jpeg";
import paimage1 from "@/public/assets/pa-img-1.jpg";
import paimage2 from "@/public/assets/pa-img-2.jpg";
import paimage3 from "@/public/assets/pa-img-3.jpg";
import paimage4 from "@/public/assets/pa-img-4.jpg";
import paimage5 from "@/public/assets/pa-img-5.jpg";
import paimage6 from "@/public/assets/pa-img-6.jpg";
import paimage7 from "@/public/assets/pa-img-7.jpg";
import paimage8 from "@/public/assets/pa-img-8.jpg";
import homepageTypewriter from "@/public/assets/lawyer-ticker-min.jpg";
import banner1 from "@/public/assets/banner/banner1.jpg";
import banner2 from "@/public/assets/banner/banner2.jpg";
import banner3 from "@/public/assets/banner/banner3.jpg";
import {
  FAQsProps,
  PADataProps,
  TeamMembersProps,
  TestimonialsProps,
  attorneyEducatonProps,
  bannerItemsType,
  blogCategoriesProps,
  blogPostsProps,
  blogTagsProps,
  homeBannerTypewriterProps,
} from "@/types";

// Data for Homepage Banner
export const bannerItems: bannerItemsType[] = [
  {
    id: 1,
    content: "Su firma de abogados para cada problema legal",
    linkText: "Conocenos",
    image: banner1,
    linkHref: "/contact",
  },
  {
    id: 2,
    content: "Sin importar cuán complejo sea su problema legal",
    linkText: "Conocenos",
    image: banner2,
    linkHref: "/contact",
  },
  {
    id: 3,
    content: "Nuestros abogados están comprometidos con usted",
    linkText: "Conocenos",
    image: banner3,
    linkHref: "/contact",
  },
];

// Data for Blog Posts
export const blogPosts: blogPostsProps[] = [
  {
    id: 1,
    featuredImage: {
      node: {
        mediaItem: homeblog1,
      },
    },
    linkHref: "/blog/1",
    title: "When to seek legal help? Important to know when",
    excerpt:
      "Many people are not aware of their legal rights and dont pay attention to the helping hand they can get from legal advise. Therefore it is very important to know that you are aware of...",
    date: "2024-03-19T12:24:34",
    author: "Lopez & Abogados",
    comments: 1,
  },
  {
    id: 2,
    featuredImage: {
      node: {
        mediaItem: homeblog2,
      },
    },
    linkHref: "/blog/2",
    title: "Seek immediate legal advice when most needed",
    excerpt:
      "Every person have suffered from violence at work, home, school or any other place at least once in their life time. Most people dont share their experiences as they think this will be inappropriate to...",
    date: "2024-03-19T12:24:34",
    author: "Lopez & Abogados",
    comments: 0,
  },
  {
    id: 3,
    featuredImage: {
      node: {
        mediaItem: homeblog3,
      },
    },
    linkHref: "/blog/3",
    title: "What it takes to be a lawyer (the untold story)",
    excerpt:
      "Emergency can be caused anywhere and can happen to anybody. People in the US have Emergency coverage provided by the government but it involves filling your case with great attention and need to be persuaded...",
    date: "2024-03-19T12:24:34",
    author: "Lopez & Abogados",
    comments: 0,
  },
  {
    id: 4,
    featuredImage: {
      node: {
        mediaItem: homeblog4,
      },
    },
    linkHref: "/blog/4",
    title: "When to seek legal help? Important to know when",
    excerpt:
      "Whenever you are involved in an accident always avoid giving any statement before contacting you attorney. Legal advise is really important in these matters and your initial reaction can be make or break for your...",
    date: "2024-03-19T12:24:34",
    author: "Lopez & Abogados",
    comments: 0,
  },
  {
    id: 5,
    featuredImage: {
      node: {
        mediaItem: homeblog5,
      },
    },
    linkHref: "/blog/5",
    title: "Seek immediate legal advice when most needed",
    excerpt:
      "Many people are not aware of their legal rights and dont pay attention to the helping hand they can get from legal advise. Therefore it is very important to know that you are aware of...",
    date: "2024-03-19T12:24:34",
    author: "Lopez & Abogados",
    comments: 0,
  },
  {
    id: 6,
    featuredImage: {
      node: {
        mediaItem: homeblog6,
      },
    },
    linkHref: "/blog/6",
    title: "When to seek legal help? Important to know when",
    excerpt:
      "Many people are not aware of their legal rights and dont pay attention to the helping hand they can get from legal advise. Therefore it is very important to know that you are aware of...",
    date: "2024-03-19T12:24:34",
    author: "Lopez & Abogados",
    comments: 2,
  },
];

// Data for FAQs
export const FAQData: FAQsProps[] = [
  {
    id: 1,
    question: "¿Tengo un caso?",
    answer:
      "La respuesta a esta pregunta depende de una situación a otra. La mejor respuesta sólo se puede lograr una vez que se comunique con un abogado que lo guiará.",
  },
  {
    id: 2,
    question: "¿Contratarlo garantiza resultados?",
    answer:
      "La respuesta corta a esta pregunta es No. Cada caso es diferente y los resultados anteriores, aunque muestran una tasa de éxito muy alta, no garantizan el mismo resultado.",
  },
  {
    id: 3,
    question: "¿Cuáles son sus honorarios de consulta?",
    answer:
      "La consulta es absolutamente gratuita. Sí, lo has leído bien, totalmente gratis. Una vez que nos contrate para su caso, solo cobraremos entonces.",
  },
  {
    id: 4,
    question: "¿Qué áreas cubre?",
    answer:
      "Abarcamos múltiples áreas que involucran principalmente Derecho de Familia, Derecho de Menores, Derecho de Emergencia y Derecho Comercial. La lista completa de todas las Áreas De Práctica se puede encontrar en este sitio web.",
  },
  {
    id: 5,
    question: "¿Qué es la relación abogado-cliente?",
    answer:
      "La consulta inicial no incluye la relación Abogado-Cliente. Sólo una vez que nos contrata, se construye la relación abogado-cliente.",
  },
  {
    id: 6,
    question: "¿Se examina toda la información que se obtiene?",
    answer:
      "En Lopez & Abogados tratamos la privacidad de manera muy estricta. Toda la información que usted proporcione es confidencial y no se filtrará bajo ninguna circunstancia."
  },
];

// Data for Team Members
export const TeamMembers: TeamMembersProps[] = [
  {
    id: 1,
    image: a1,
    href: "#",
    name: "Hector Lopez",
    designation: "Abogado Especialista en derecho laboral y seguridad social",
  },
  {
    id: 2,
    image: a2,
    href: "#",
    name: "Isabel Molinares",
    designation: "Abogada Especialista en derecho laboral y seguridad social",
  },
  {
    id: 3,
    image: a3,
    href: "#",
    name: "Alejandro Molinares",
    designation: "Asesor Juridico ",
  },
  // {
  //   id: 4,
  //   image: teammember4,
  //   href: "#",
  //   name: "Frank Moses",
  //   designation: "Injury Expert lawyer",
  // },
  // {
  //   id: 5,
  //   image: teammember5,
  //   href: "#",
  //   name: "John Doe",
  //   designation: "International Law lawyer",
  // },
];

// Data for Testimonials
export const Testimonials: TestimonialsProps[] = [
  {
    id: 1,
    image: testimonialimg1,
    name: "Jessica Berrera",
    text: "Cuando necesitábamos asistencia legal, Lopez & Abogados vino a rescatarnos. Tomaron nuestro caso y lo resolvieron en poco tiempo. Ahora, cuando necesitamos ayuda con asuntos legales, no buscamos más que los abogados de Lopez & Abogados. Gracias equipo Lopez & Abogados sois los mejores!",
    organization: "Cliente 1",
    designation: "Derecho pensional",
  },
  {
    id: 2,
    image: testimonialimg2,
    name: "John Kerry",
    text: "Nuestro negocio estaba atrapado en un problema legal complejo y uno de nuestros clientes sugirió el equipo de López & Abogados. Ahora son nuestro equipo legal oficial que nos ayuda en numerosos casos. ¡Recomendado a todos!",
    organization: "Cliente 2",
    designation: "Derecho pensional 2",
  },
  {
    id: 3,
    image: testimonialimg3,
    name: "Grant Josh",
    text: "El equipo López & Abogados es el mejor. Su equipo es increíble y cuando visitamos su oficina, nos recibieron y nos hicieron sentir como en casa. No sólo tomaron nuestro caso sino que también nos ayudaron a comprender la complejidad del caso. Lucharon por nosotros y pronto obtuvieron los resultados deseados. ¡Gracias equipo López & Abogados! Usted es maravilloso.",
    organization: "Cliente 3",
    designation: "Drecho pensiona 3",
  },
];

// Data for Areas De Practica
export const PAData: PADataProps[] = [
  {
    id: 1,
    href: "/single-practice-area",
    title: "Family Law",
    text: "Family law involves a range of matters that are usually very personal, unique and emotionally challenging.",
    image: paimage1,
  },
  {
    id: 2,
    href: "/single-practice-area",
    title: "Child Custody",
    text: "Child custody involves a range of matters that are usually very personal, unique and emotionally challenging.",
    image: paimage2,
  },
  {
    id: 3,
    href: "/single-practice-area",
    title: "Emergency Law",
    text: "Emergency law involves a range of matters that are usually very personal, unique and emotionally challenging.",
    image: paimage3,
  },
  {
    id: 4,
    href: "/single-practice-area",
    title: "Criminal Law",
    text: "Criminal law involves a range of matters that are usually very personal, unique and emotionally challenging.",
    image: paimage4,
  },
  {
    id: 5,
    href: "/single-practice-area",
    title: "Business Law",
    text: "Business law involves a range of matters that are usually very personal, unique and emotionally challenging.",
    image: paimage5,
  },
  {
    id: 6,
    href: "/single-practice-area",
    title: "Real Estate Law",
    text: "Real estate law involves a range of matters that are usually very personal, unique and emotionally challenging.",
    image: paimage6,
  },
  {
    id: 7,
    href: "/single-practice-area",
    title: "Personal Injury",
    text: "Personal injury involves a range of matters that are usually very personal, unique and emotionally challenging.",
    image: paimage7,
  },
  {
    id: 8,
    href: "/single-practice-area",
    title: "Immigration Law",
    text: "Immigration law involves a range of matters that are usually very personal, unique and emotionally challenging.",
    image: paimage8,
  },
  {
    id: 9,
    href: "/single-practice-area",
    title: "Family Law",
    text: "Family law involves a range of matters that are usually very personal, unique and emotionally challenging.",
    image: paimage1,
  },
  {
    id: 10,
    href: "/single-practice-area",
    title: "Child Custody",
    text: "Child custody involves a range of matters that are usually very personal, unique and emotionally challenging.",
    image: paimage2,
  },
  {
    id: 11,
    href: "/single-practice-area",
    title: "Emergency Law",
    text: "Emergency law involves a range of matters that are usually very personal, unique and emotionally challenging.",
    image: paimage3,
  },
  {
    id: 12,
    href: "/single-practice-area",
    title: "Criminal Law",
    text: "Criminal law involves a range of matters that are usually very personal, unique and emotionally challenging.",
    image: paimage4,
  },
];

// Data for Team Member Education
export const attorneyEducaton: attorneyEducatonProps[] = [
  {
    id: 1,
    title: "Attorney of Law",
    details: [
      {
        id: 11,
        text: "Texas Southern University – Thurgood Marshall School of Law, Juris Doctor (J.D.), Houston, TX",
      },
      {
        id: 12,
        text: "Paul Quinn College, Bachelor of Science (B.S.), Dallas, TX",
      },
    ],
  },
  {
    id: 2,
    title: "Admission Bar",
    details: [
      {
        id: 21,
        text: "State Bar of Texas, 2010",
      },
      {
        id: 22,
        text: "U.S. District Court – Northern District of Texas",
      },
    ],
  },
  {
    id: 3,
    title: "Bar Membership",
    details: [
      {
        id: 31,
        text: "Texas Trial Lawyer’s Association",
      },
      {
        id: 32,
        text: "Dallas Association of Young Lawyers",
      },
    ],
  },
];

// Data for Blog Categories
export const blogCategories: blogCategoriesProps[] = [
  {
    id: 1,
    title: "Attorney Law",
  },
  {
    id: 2,
    title: "Family Law",
  },
  {
    id: 3,
    title: "Criminal Law",
  },
  {
    id: 4,
    title: "Real Estate Law",
  },
  {
    id: 5,
    title: "Immigration Law",
  },
];

// Data for Blog Tags
export const blogTags: blogTagsProps[] = [
  {
    id: 1,
    name: "Accident",
  },
  {
    id: 2,
    name: "Law",
  },
  {
    id: 3,
    name: "Attorney",
  },
];

// Data for Home Banner Typewriter
export const homeBannerTypewriter: homeBannerTypewriterProps = {
  image: homepageTypewriter,
  words: [
    "Criminal Law",
    "Divorce Law",
    "Family Law",
    "Immigration Law",
    "Real Estate Law",
  ],
};
