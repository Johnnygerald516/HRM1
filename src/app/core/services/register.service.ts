import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';


@Injectable({
  providedIn: 'root',
})
export class RegisterService {

  private baseUrl = environment.apiUrl; 

  constructor(private http: HttpClient) {}

  // Create
  public createStaff(data: any): Observable<any>{
    return this.http.post(`${this.baseUrl}/api/employees/register`, data);
  }

    public createPersonalInfo(data: any): Observable<any>{
    return this.http.post(`${this.baseUrl}/api/personal-info/register`, data);
  }
  
    public createEducationInfo(data: any): Observable<any>{
    return this.http.post(`${this.baseUrl}/api/education/register`, data);
  }
//   Get all staff
  public getAllStaff(): Observable<any>{
    return this.http.get(`${this.baseUrl}/api/employees/getAll`);
  }

  // Update staff
  public updateStaff(id: number, staff: any): Observable<any>{
    return this.http.put(`${this.baseUrl}/api/employees/update/${id}`, staff);
  }

  // Delete staff
  public deleteStaff(id: number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/api/employees/delete/${id}`);
  }

  // Get staff by ID
  public getStaffById(id: number): Observable<any>{
    return this.http.get(`${this.baseUrl}/api/employees/get/${id}`);
  }
}