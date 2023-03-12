import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService, SelectItem } from 'primeng/api';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  RestrauntMaster,
  RestrauntPhoto,
} from 'src/app/models/RestrauntLogin/restraunt.model';
import { AreaService } from 'src/app/services/Country/Area.service';
import { city, country, state } from 'src/app/models/comman/Country';
import { RestrauntServiceService } from 'src/app/services/Restraunt/restraunt-service.service';
import { Response } from 'src/app/models/comman/comman.model';
import { RestrauntProfileModule } from './restraunt-profile.module';
@Component({
  selector: 'app-restraunt-profile',
  templateUrl: './restraunt-profile.component.html',
  styleUrls: ['./restraunt-profile.component.css'],
})
export class RestrauntProfileComponent implements OnInit {
  countries: country[] = [];
  states: state[] = [];
  cities: city[] = [];

  restrauntProfile: RestrauntMaster = {
    restraunt_id: '',
    restraunt_name: '',
    latitute: '',
    longitute: '',
    country_code: '',
    state_code: '',
    city_code: '',
    address: '',
    mobile_no: '',
    email_id: '',
    open_time: '',
    close_time: '',
    created_by: '',
    is_active: false,
    created_on: '',
    updated_by: '',
    updated_on: '',
    restraunt_photos: [],
  };

  countrySelected!: string;
  selectedState!: string;
  restrauntForm: FormGroup;
  restraunt_photos!: FormArray;
  selectedCountry: any;
  selectedCity1: any;
  items: SelectItem[];
  // cities: any[];
  itemsm: MenuItem[] | undefined;

  constructor(
    private fb: FormBuilder,
    private areaService: AreaService,
    private messageService: MessageService,
    private restrauntService: RestrauntServiceService
  ) {
    this.LoadRestrauntDetails();
    this.countrySelected = this.restrauntProfile.country_code;
    this.selectedState = this.restrauntProfile.state_code;
    this.items = [];
    this.restrauntForm = this.fb.group({
      restraunt_id: [''],
      restraunt_name: ['', Validators.required],
      latitute: [''],
      longitute: [''],
      address: ['', Validators.required],
      city_code: ['', Validators.required],
      state_code: ['', Validators.required],
      country_code: ['', Validators.required],
      mobile_no: ['', Validators.required],
      email_id: ['', Validators.required],
      open_time: [this.restrauntProfile.open_time, Validators.required],
      close_time: [this.restrauntProfile.close_time, Validators.required],
      created_by: [''],
      updated_by: [''],
      restraunt_photos: new FormArray([]),
    });
  }

  LoadRestrauntDetails(): void{
    this.restrauntService.GetRestrauntMasterById().subscribe({
      next:(response:any) => {
        this.restrauntProfile = response;
        // this.restrauntForm = response;
        // console.log(this.restrauntForm);
        // console.log(this.restrauntProfile);
      },
      error:(response:any) => {
        console.log(response);
      }
    })
  }
  CreateImage(): FormGroup {
    return this.fb.group({
      restraunt_photo_id: [''],
      restraunt_id: [''],
      image: [''],
      created_by: [''],
      updated_by: [''],
    });
  }

  AddImage() {
    this.restraunt_photos = this.restrauntForm.get(
      'restraunt_photos'
    ) as FormArray;
    this.restraunt_photos.push(this.CreateImage());
  }
  RemoveImage(index: any) {
    this.restraunt_photos = this.restrauntForm.get(
      'restraunt_photos'
    ) as FormArray;
    this.restraunt_photos.removeAt(index);
  }
  ngOnInit() {
    this.AddImage();
    this.GetAllCountry();
  }
  ConvertDateIntoTime(params: any): string {
    const d = new Date(params); // Parses a ISO 8601 Date
    console.log(d.getHours()); // gets the hours in the timezone of the browser.
    console.log(d.getUTCHours()); // gets the hours in UTC timezone.
    console.log(d.getMinutes()); // gets the minutes in the timezone of the browser.
    console.log(d.getUTCMinutes()); // gets the minutes in UTC timezone.
    console.log(d.getHours() + ':' + d.getMinutes());
    console.log(d.getUTCHours() + ':' + d.getUTCMinutes());
    var time = d.getUTCHours() + ':' + d.getUTCMinutes();
    return time;
  }
  UpdateRestrauntProfile(restrauntForm: RestrauntMaster) {
    console.log(restrauntForm);
    restrauntForm.open_time = this.ConvertDateIntoTime(restrauntForm.open_time);
    restrauntForm.close_time = this.ConvertDateIntoTime(
      restrauntForm.close_time
    );
    console.log(restrauntForm);
    this.restrauntService.UpdateRestrauntMaster(restrauntForm).subscribe({
      next: (response: Response) => {
        if (response.resp) {
          console.log(response);
          this.messageService.add({
            severity: 'success',
            summary: 'Restraunt Details',
            detail: 'Saved Successfuly',
          });
        } else {
          console.log(response);
          this.messageService.add({
            severity: 'error',
            summary: 'Restraunt Details',
            detail: 'Something Went Wrong',
          });
        }
      },
      error: (response: any) => {
        console.log(response);
        this.messageService.add({
          severity: 'error',
          summary: 'Restraunt Details',
          detail: 'Something Went Wrong',
        });
      },
    });
  }

  GetAllCountry() {
    this.areaService.GetAllCountries().subscribe({
      next: (country) => {
        this.countries = country;
      },
      error: (Response) => {
        console.log(Response);
      },
    });
  }
  onCountrySelected(countryIso: any) {
    this.areaService.GetAllState(countryIso).subscribe((data) => {
      this.states = data;
      console.log('States Retrieved', this.states);
    });
  }
  onStateSelected(stateparam = this.selectedState) {
    this.areaService.GetAllCities(stateparam).subscribe((data) => {
      this.cities = data;
      console.log('Cities retrieved', this.cities);
    });
  }
}
