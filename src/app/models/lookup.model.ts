export interface Region {
  region_id: number;
  region_name: string;
}

export interface District {
  id: number;
  name: string;
  regionId: number;
}

export interface Station {
  id: number;
  name: string;
  districtId: number;
}

export interface Country {
  id: number;
  name: string;
}

export interface Gender {
  id: number;
  name: string;
}

export interface Rank {
  id: number;
  name: string;
}

export interface MaritalStatus {
  id: number;
  name: string;
}

export interface Roles {
  id: number;
  name: string;
}

export interface SalarySteps {
  id: number;
  name: string;
}

export interface SalaryScales {
  id: number;
  name: string;
}

export interface Positions {
  id: number;
  name: string;
}