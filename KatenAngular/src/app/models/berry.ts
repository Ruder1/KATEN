
export interface NamedAPIResource {
    
    name: string;
    url: string;
  }
  

export interface Name {
    name: string;
    language: NamedAPIResource;
  }
  
  export interface NamedAPIResourceList {
    count: number;
    next: string | null;
    previous: string | null;
    results: NamedAPIResource[];
  }
  
 
  export interface APIResource {
    url: string;
  }

export interface Berry {
  id: number;
  name: string;
  growth_time: number;
  max_harvest: number;
  natural_gift_power: number;
  size: number;
  smoothness: number;
  soil_dryness: number;
  firmness: NamedAPIResource;
  flavors: BerryFlavorMap[];
  item: NamedAPIResource;
  natural_gift_type: NamedAPIResource;
}

export interface BerryFlavorMap {
  potency: number;
  flavor: NamedAPIResource;
}

export interface BerryFlavor {
  id: number;
  name: "spicy" | "dry" | "sweet" | "bitter" | "sour";
  berries: FlavorBerryMap[];
  contest_type: NamedAPIResource;
  names: Name[];
}

export interface FlavorBerryMap {
  potency: number;
  berry: NamedAPIResource;
}

export interface BerryFirmness {
  id: number;
  name: "very-soft" | "soft" | "hard" | "very-hard" | "super-hard";
  berries: NamedAPIResource[];
  names: Name[];
}