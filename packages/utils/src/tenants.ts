export interface TenantConfig {
  id: string;
  handle: string;
  logo: { width: number; height: number };
  hosts: string[];
}

export const tenants: TenantConfig[] = [
  {
    id: "8sd733u4kaz08x6rjw8if9mzu",
    handle: "session-services",
    logo: { width: 50, height: 50 },
    hosts: [
      "localhost:3000",
      "sessions.local:3000",
      "session.services",
      "sessions-web.vercel.app",
      "staging.session.services",
    ],
  },
  {
    id: "clhvrnqph0000m9rq039hkw7s",
    handle: "sash",
    logo: { width: 50, height: 50 },
    hosts: [
      "sash.local:3000",
      "sash.net.au",
      "staging.sash.net.au",
      "session-services-web.vercel.app",
    ],
  },
  {
    id: "clkwbixsi0000m9coi7i5b65z",
    handle: "carousel",
    logo: { width: 188, height: 50 },
    hosts: [
      "carousel.local:3000",
      "carousel.net.au",
      "staging.carousel.net.au",
    ],
  },
  {
    id: "p8npi2s3t24arpunzp2e7dzaq",
    handle: "mixmag-anz",
    logo: { width: 188, height: 50 },
    hosts: [
      "carousel.local:3000",
      "carousel.net.au",
      "staging.carousel.net.au",
    ],
  },
  {
    id: "pivep2xeyvznoqat0h8fswhjc",
    handle: "mixmag-asia",
    logo: { width: 188, height: 50 },
    hosts: [
      "carousel.local:3000",
      "carousel.net.au",
      "staging.carousel.net.au",
    ],
  },
  {
    id: "6kh3sj8ih5tvg927rz5elm90o",
    handle: "blank",
    logo: { width: 188, height: 50 },
    hosts: [
      "carousel.local:3000",
      "carousel.net.au",
      "staging.carousel.net.au",
    ],
  },
  {
    id: "vc8vrjrv5arhabnk8ainx0ycb",
    handle: "prowl",
    logo: { width: 188, height: 50 },
    hosts: [
      "carousel.local:3000",
      "carousel.net.au",
      "staging.carousel.net.au",
    ],
  },
];

export const getTenantByHost = (host: string) =>
  tenants.find((tenant) => tenant.hosts.includes(host));

export const getTenantById = (id: string) =>
  tenants.find((tenant) => tenant.id === id);

export const getTenantByHandle = (handle: string) =>
  tenants.find((tenant) => tenant.handle === handle);
