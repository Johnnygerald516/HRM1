import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // ✅ ADD THIS
import { first } from 'rxjs';
import { RegisterService } from '../core/services/register.service';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule], // ✅ ADD HERE
  templateUrl: './register.html',
  styleUrls: ['./register.css']
})
export class Register {
  errorMessage: any;

constructor(
  private registerService: RegisterService,
  private router: Router,
  private fb: FormBuilder
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

  employmentForm!: FormGroup;

  
  step: number = 1;

  // STEP 1 - Personal Info
  personal = {
    firstName: '',
    middleName: '',
    lastName: '',
    countryId: '',
    region: '',
    district: '',
    address: '',
    email: '',
    nida: '',
    DOB: '',
    maritalStatus: '',
    bloodGroup: '',
    diasbility: ''
  };

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

  countries: any[] = []; // ✅ make sure this exists

  nextStep() {
    if (this.step < 3) this.step++;
  }

  prevStep() {
    if (this.step > 1) this.step--;
  }

    public createStaff(data: any): void {
    this.registerService.createStaff(data).subscribe(
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