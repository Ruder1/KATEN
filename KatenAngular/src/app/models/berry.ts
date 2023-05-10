
export interface INamedAPIResource {
    
    name: string;
    url: string;
  }
  

export interface IName {
    name: string;
    language: INamedAPIResource;
  }
  
export interface INamedAPIResourceList {
    count: number;
    next: string | null;
    previous: string | null;
    results: INamedAPIResource[];
  }
  
 
  export interface APIResource {
    url: string;
  }

export interface IBerry {
  id: number;
  name: string;
  growth_time: number;
  max_harvest: number;
  natural_gift_power: number;
  size: number;
  smoothness: number;
  soil_dryness: number;
  firmness: INamedAPIResource;
  flavors: IBerryFlavorMap[];
  item: INamedAPIResource;
  natural_gift_type: INamedAPIResource;
}

export interface IBerryFlavorMap {
  potency: number;
  flavor: INamedAPIResource;
}

export interface IBerryFlavor {
  id: number;
  name: "spicy" | "dry" | "sweet" | "bitter" | "sour";
  berries: IFlavorBerryMap[];
  contest_type: INamedAPIResource;
  names: IName[];
}

export interface IFlavorBerryMap {
  potency: number;
  berry: INamedAPIResource;
}

export interface IBerryFirmness {
  id: number;
  name: "very-soft" | "soft" | "hard" | "very-hard" | "super-hard";
  berries: INamedAPIResource[];
  names: IName[];
}

