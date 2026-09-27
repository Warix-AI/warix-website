export const SITE = {
  name: "Warix",
  domain: "warix.co",
  description:
    "Warix is an AI research and technology company building software and, over time, new forms of intelligent technology.",
};

export const EXTERNAL = {
  account: "https://account.warix.co",
  accountOrders: "https://account.warix.co/orders",
  accountProducts: "https://account.warix.co/products",
  accountHome: "https://account.warix.co",
  oneApp: "https://one.warix.co",
  twoApp: "https://two.warix.co",
} as const;

export const ROUTES = {
  home: "/",
  software: "/software",
  softwareOne: "/software/one",
  softwareTwo: "/software/two",
  hardware: "/hardware",
  hardwareOne: "/hardware/one",
  hardwareTwo: "/hardware/two",
  hardwareOneConfigure: "/hardware/one/configure",
  hardwareTwoConfigure: "/hardware/two/configure",
  fashion: "/fashion",
  vehicles: "/vehicles",
  consumables: "/consumables",
  bag: "/bag",
  checkout: "/checkout",
  orderConfirmation: "/order/confirmation",
  support: "/support",
  company: "/company",
  companyNews: "/company#news",
  companyCareers: "/company#careers",
  companyResearch: "/company#research",
  companyContact: "/company#contact",
  research: "/research",
  handoff: "/account/handoff",
  privacy: "/privacy",
  terms: "/terms",
  one: "/software/one",
  oneApp: EXTERNAL.oneApp,
} as const;
