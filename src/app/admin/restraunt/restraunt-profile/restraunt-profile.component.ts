import { Component, OnInit } from '@angular/core';
import { MenuItem, SelectItem } from 'primeng/api';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RestrauntMaster,RestrauntPhoto } from 'src/app/models/RestrauntLogin/restraunt.model';
import { AreaService } from 'src/app/services/Country/Area.service';
import { city, country, state } from 'src/app/models/comman/Country';
@Component({
  selector: 'app-restraunt-profile',
  templateUrl: './restraunt-profile.component.html',
  styleUrls: ['./restraunt-profile.component.css']
})
export class RestrauntProfileComponent implements OnInit{
  countries:country[] = [];

  states:state[] = [];

  cities:city[] = [];


  // restrauntMaster:RestrauntMaster = {
  //   restraunt_id:'123456',
  //   restraunt_name:'',
  //   latitute:'',
  //   longitute:'',
  //   address:'',
  //   city_code:'',
  //   state_code:'',
  //   country_code:'',
  //   mobile_no:'',
  //   email_id:'',
  //   open_time:'',
  //   close_time:null,
  //   is_active:false,
  //   created_by:'',
  //   created_on:'',
  //   updated_by:'',
  //   updated_on:'',
  //   restraunt_phots:[]
  // }

  // items: MenuItem[];

  restrauntForm:FormGroup;
  restraunt_photos!:FormArray;
  selectedCountry: any;
  selectedCity1: any;
  items: SelectItem[];
  // cities: any[];
  itemsm: MenuItem[] | undefined;

  constructor(private fb:FormBuilder,private areaService:AreaService){


  //   this.cities = [
  //     {name: 'New York', code: 'NY'},
  //     {name: 'Rome', code: 'RM'},
  //     {name: 'London', code: 'LDN'},
  //     {name: 'Istanbul', code: 'IST'},
  //     {name: 'Paris', code: 'PRS'}
  // ];
    this.items = [];
    this.restrauntForm = this.fb.group({
      restraunt_id:[''],
      name:['',Validators.required],
      latitute:[''],
      longitute:[''],
      address:['',Validators.required],
      city_code:['',Validators.required],
      state_code:['',Validators.required],
      country_code:['',Validators.required],
      mobile_no:['',Validators.required],
      email_id:['',Validators.required],
      open_time:[],
      close_time:[],
      restraunt_photos: new FormArray([])
    })
  }
  CreateImage(): FormGroup {
    return this.fb.group({
      image:[]
    });
  }

  AddImage(): void {
    console.log('clic')
    this.restraunt_photos = this.restrauntForm.get('restraunt_photos') as FormArray;
    this.restraunt_photos.push(this.CreateImage);
  }
  RemoveImage(index:any){
    this.restraunt_photos = this.restrauntForm.get('restraunt_photos') as FormArray;
    this.restraunt_photos.removeAt(index)
  }
    ngOnInit() {
      this.GetAllCountry();
        this.itemsm = [
            {label: 'Step 1'},
            {label: 'Step 2'},
            {label: 'Step 3'}
        ];
    }

    UpdateRestrauntProfile(restrauntForm:FormGroup){
      console.log(restrauntForm.value)
    }

    onCountry(country_code:country){
      console.log(country_code.iso2);
    }
    onState(state_code:string){
      console.log(state_code);
    }

    myUploader(){
      console.log('upload')
    }




    GetAllCountry() {
      this.areaService.GetAllCountries()
      .subscribe({
        next: (country) => {
          this.countries = country;
        },
        error: (Response) => {
          console.log(Response);
        }
      })
    }

    OnCountrySelect(country_code:country){
      console.log(country_code.iso2);
      this.areaService.GetAllState(country_code.iso2).subscribe({
        next: (state) => {
          this.states = state;
        },
        error: (response) => {
          console.log(response);
        }
      })
    }
    OnSelectState(state_code:state) {
      console.log(state_code.state_code);
      this.areaService.GetAllCities(state_code.state_code).subscribe({
        next: (city) => {
          this.cities = city;
        },
        error: (response) => {
          console.log(response);
        }
      })
    }
}
