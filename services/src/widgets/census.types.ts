import { JsonObject } from "@prisma/client";

export interface CensusFilter extends JsonObject {
  from: number;
  to: number;
}

export interface CensusDataframe extends JsonObject {
  m: number;
  f: number;
  tot: number;
  fil?: CensusFilter;
}

export interface CensusData extends JsonObject {
  total: CensusDataframe;
  ranged?: CensusDataframe[];
}
