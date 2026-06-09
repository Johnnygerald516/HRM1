import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // ✅ ADD THIS
import { first } from 'rxjs';
import { RegisterService } from '../core/services/register.service';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LookupService } from '../core/services/lookup.service';
import { Region } from '../models/lookup.model';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule], // ✅ ADD HERE
  templateUrl: './register.html',
  styleUrls: ['./register.css']
})
export class Register implements OnInit {
  regions: any[] = [];
  districts: any[] = [];
  stations: any[] = [];
  genders: any[] = [];
  ranks: any[] = [];
  salaryScales: any[] = [];
  salarySteps: any[] = [];
  positions: any[] = [];
  roles: any[] = [];  
  countries: any[] = [];
  errorMessage: any;
  employeeId: number | null = null;

constructor(
  private registerService: RegisterService,
  private router: Router,
  private fb: FormBuilder,
  private lookupService: LookupService
) {
  
  // this.employmentForm = this.fb.group({
  //   firstName: [''],
  //   middleName: [''],
  //   lastName: [''],
  //   email: [''],
  //   chequeNumber: [''],
  //   pfNumber: [''],
  //   rankId: [''],
  //   employmentDate: [''],
  //   scaleId: [''],
  //   statusId: [''],
  //   regionId: [''],
  //   districtId: [''],
  //   stationId: [''],
  //   departmentId: [''],
  //   positionId: [''],
  //   designationId: [''],
  //   stepId: [''],
  //   employmentType: [''],
  //   accountNumber: [''],
  //   bankName: [''],
  //   confirmationDate: [''],
  //       confirmationDate2: [''],
  //   promotionDate: [''],
  //   emergencyContact: [''],
  //   hiredDate: ['']
  // });
}

ngOnInit(): void {
  this.loadRegions();
  this.loadDistricts();
  this.loadStations();
  this.loadGenders();
  this.loadRanks();
  this.loadSalaryScales();
  this.loadPosition();
  this.loadRoles();
  this.loadSalarySteps();
  this.loadCountries();
}

loadRegions(){
  this.lookupService.getLookups('REGIONS').subscribe(res => {
    this.regions = res;
  });
}

loadDistricts(){
  this.lookupService.getLookups('DISTRICTS').subscribe(res => {
    this.districts = res;
  });
}

loadGenders(){
  this.lookupService.getLookups('GENDERS').subscribe(res => {
    this.genders = res;
  });
}

loadStations(){
  this.lookupService.getLookups('STATIONS').subscribe(res => {
    this.stations = res;
  });
}

loadSalaryScales(){
  this.lookupService.getLookups('SALARY_SCALES').subscribe(res => {
    this.salaryScales = res;
  });
}

loadSalarySteps(){
  this.lookupService.getLookups('SALARY_STEPS').subscribe(res => {
    this.salarySteps = res;
  });
}

loadRoles(){
  this.lookupService.getLookups('ROLES').subscribe(res => {
    this.roles = res;
  });
}

loadPosition(){
  this.lookupService.getLookups('POSITIONS').subscribe(res => {
    this.positions = res;
  });
}

loadRanks(){
  this.lookupService.getLookups('RANKS').subscribe(res => {
    this.ranks = res;
  });
}

loadCountries(){
  this.lookupService.getLookups('COUNTRIES').subscribe(res => {
    this.countries = res;
  });
}

  employmentForm!: FormGroup;
  personalForm!: FormGroup;
  educationForm!: FormGroup;
  
  step: number = 1;

  // STEP 1 - Personal Info
  // personal = {
  //   firstName: '',
  //   middleName: '',
  //   lastName: '',
  //   countryId: '',
  //   region: '',
  //   district: '',
  //   address: '',
  //   email: '',
  //   nida: '',
  //   DOB: '',
  //   maritalStatus: '',
  //   bloodGroup: '',
  //   diasbility: ''
  // };

  // STEP 2 - Education
  education = {
    level: '',
    institutionName: '',
    startYear: '',
    year: '',
    grade: '',
    certificateNumber: '',
    professional: ''
  };

  //STEP 3 - Employment
  // employment = {
  //   ChequeNumber: '',
  //   PfNumber: '',
  //   rank_id: '',
  //   employment_date: '',
  //   FirstName: '',
  //   MiddleName: '',
  //   LastName: '',
  //   scale_id: '',
  //   status_id: '',
  //   email: '',
  //   region_id: '',
  //   district_id: '',
  //   station_id: '',
  //   department_id: '',
  //   position_id: '',
  //   designation_id: '',
  //   step_id: '',
  //   employment_type: '',
  //   AccountNumber: '',
  //   BankName: '',
  //   ConfirmationDate: '',
  //   promotion_date: '',
  //   emergency_contact: '',
  //   HiredDate: ''
  // };

//   countries: any[] = []; 
// regions: Region[] = [];
// selectedRegionId: number | null = null;

// loadRegions(): void {
//   this.lookupService.getRegions().pipe(first()).subscribe({
//     next: (res: Region[]) => {
//       this.regions = res;
//     },
//     error: (err) => console.error(err)
//   });
// }

  nextStep() {
    if (this.step < 3) this.step++;
  }

  prevStep() {
    if (this.step > 1) this.step--;
  }

    public createStaff(data: any): void {
    const payload = { ...data, employeeId: this.employeeId };
    this.registerService.createStaff(payload).subscribe(
      response => {
        console.log('Staff created successfully:', response);
        this.router.navigateByUrl("/dashboard");
      },
      error => {
        console.error('Error creating staff:', error);
        // Optionally, show an error message to the user
      }
    );
  }

  private extractEmployeeId(response: any): number | null {
    if (response == null) return null;
    const source = response.data ?? response;
    const id = source.employeeId ?? source.employee_id ?? source.id ?? null;
    return id != null ? Number(id) : null;
  }

  public createPersonalInfo(data: any): void {
    this.registerService.createPersonalInfo(data).subscribe(
      response => {
        this.employeeId = this.extractEmployeeId(response);
        console.log('Personal info created successfully. Employee ID:', this.employeeId, response);
        this.nextStep();
      },
      error => {
        console.error('Error creating personal info:', error);
        // Optionally, show an error message to the user
      }
    );
  }

   public createEducationInfo(data: any): void {
    const payload = { ...data, employeeId: this.employeeId };
    this.registerService.createEducationInfo(payload).subscribe(
      response => {
        console.log('Education info created successfully:', response);
        this.nextStep();
      },
      error => {
        console.error('Error creating education info:', error);
        // Optionally, show an error message to the user
      }
    );
  }

// submit() {

//   this.registerService.createStaff(this.employmentForm.value).subscribe({
//   next: (res: any) => {

//     console.log('Response:', res);

//     if (res.AckCode === 1) {
//       alert('Saved successfully');
//       this.router.navigateByUrl('/dashboard');
//     } else {
//       this.errorMessage = res.AckMessage;
//       alert(res.AckMessage);
//     }
//   },

//   error: (err) => {
//     console.log('HTTP Error:', err);
//     alert('Server error');
//   }
// });
}