import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Region, District, Station, Country, Rank, Gender, MaritalStatus, Roles, SalarySteps, SalaryScales, Positions } from '../../models/lookup.model';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LookupService {
  //  private baseUrl = environment.apiUrl;
  private baseUrl = 'http://192.168.0.5:8080/api/lookups';

  constructor(private http: HttpClient) {}

  getLookups(type: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/${type}`);
  }

   // countries
  // getCountries() {
  //   return this.http.get<Country[]>(`${this.baseUrl}/COUNTRIES`);
  // }

  // Regions
  // getRegions() {
  //   return this.http.get<Region[]>(`${this.baseUrl}/REGIONS`);
  // }

  // Districts by region
  // getDistricts(regionId: number) {
  //   return this.http.get<District[]>(`${this.baseUrl}/DISTRICTS/${regionId}`);
  // }

  // Stations by district
  // getStations(districtId: number) {
  //   return this.http.get<Station[]>(`${this.baseUrl}/STATIONS/${districtId}`);
  // }
  
   // gender
  // getGenders() {
  //   return this.http.get<Gender[]>(`${this.baseUrl}/GENDERS`);
  // }

   // ranks
  // getRanks() {
  //   return this.http.get<Rank[]>(`${this.baseUrl}/RANKS`);
  // }

  // Marital Status
  // getMaritalStatus() {
  //   return this.http.get<MaritalStatus[]>(`${this.baseUrl}/MARITAL_STATUSES`);
  // }

  // Roles
  // getRoles() {
  //   return this.http.get<Roles[]>(`${this.baseUrl}/ROLES`);
  // }

  // Salary Steps
  // getSalarySteps() {
  //   return this.http.get<SalarySteps[]>(`${this.baseUrl}/SALARY_STEPS`);
  // }

  // Salary Scales
  // getSalaryScales() {
  //   return this.http.get<SalaryScales[]>(`${this.baseUrl}/SALARY_SCALES`);
  // }

  // Positions
  // getPositions() {
  //   return this.http.get<Positions[]>(`${this.baseUrl}/POSITIONS`);
  // }
}