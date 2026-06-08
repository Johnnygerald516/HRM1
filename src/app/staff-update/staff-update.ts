// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { HttpClient } from '@angular/common/http';
// import { LookupService } from '../core/services/lookup.service';
// import { Region, District, Station } from '../models/lookup.model';

// @Component({
//   selector: 'app-staff-update',
//   standalone: true,
//   templateUrl: './staff-update.html',
//   styleUrls: ['./staff-update.css'],
//   imports: [CommonModule, FormsModule]
// })
// export class StaffUpdate implements OnInit {

//   step = 1;
//   showForm = false;

//   regions: Region[] = [];
//   districts: District[] = [];
//   stations: Station[] = [];

//   personal: any = {};
//   education: any = {};
//   employment: any = {};

//   staffId!: number;

//   staffList: any[] = [];
//   filteredStaff: any[] = [];
//   searchText: string = '';

//   constructor(
//     private lookupService: LookupService,
//     private http: HttpClient
//   ) {}

//   ngOnInit(): void {
//     this.loadRegions();
//     this.getAllStaff();
//   }

//   // TABLE
//   getAllStaff() {
//     this.http.get<any[]>('http://localhost:8080/api/staff')
//       .subscribe(res => {
//         this.staffList = res;
//         this.filteredStaff = res;
//       });
//   }

//   filterStaff() {
//     this.filteredStaff = this.staffList.filter(s =>
//       s.chequeNumber?.toLowerCase().includes(this.searchText.toLowerCase())
//     );
//   }

//   selectStaff(staff: any) {
//     this.staffId = staff.id;
//     this.step = 1;
//     this.showForm = true;
//     this.loadStaffData();
//   }

//   closeModal() {
//     this.showForm = false;
//   }

//   loadStaffData() {
//     this.http.get<any>(`http://localhost:8080/api/staff/${this.staffId}`)
//       .subscribe(res => {
//         this.personal = res.personal || {};
//         this.education = res.education || {};
//         this.employment = res.employment || {};
//       });
//   }

//   // LOOKUPS
//   loadRegions() {
//     this.lookupService.getRegions().subscribe(data => this.regions = data);
//   }

//   onRegionChange(regionId: number) {
//     this.lookupService.getDistricts(regionId).subscribe(data => this.districts = data);
//   }

//   onDistrictChange(districtId: number) {
//     this.lookupService.getStations(districtId).subscribe(data => this.stations = data);
//   }

//   // STEPS
//   nextStep() { if (this.step < 3) this.step++; }
//   prevStep() { if (this.step > 1) this.step--; }

//   // UPDATE
//   updatePersonal() {
//     this.http.put(`http://localhost:8080/api/personal/${this.staffId}`, this.personal)
//       .subscribe(() => this.nextStep());
//   }

//   updateEducation() {
//     this.http.put(`http://localhost:8080/api/education/${this.staffId}`, this.education)
//       .subscribe(() => this.nextStep());
//   }

//   updateEmployment() {
//     this.http.put(`http://localhost:8080/api/employment/${this.staffId}`, this.employment)
//       .subscribe(() => {
//         alert('Updated successfully ✅');
//         this.showForm = false;
//       });
//   }
// }