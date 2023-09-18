import { Component, OnInit } from '@angular/core';
import { Form, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { MyValidators } from './my.validators';

export interface ICityMap {
  [key: string]: string,
}

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})


export class FormsComponent implements OnInit {
  form: FormGroup;

  //create form:FormGroup, import ReactiveFormsModule on app.module, onInit create names for input(new FormControl) and
  //add validators option, after this open .html and add 'invalid form' to btn
  //

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required, MyValidators.restrictedEmail]),
      password: new FormControl('', [Validators.minLength(5), Validators.required]),
      address: new FormGroup({
        country: new FormControl('ua'),
        city: new FormControl('', [Validators.required])
      }),
      skills: new FormArray([]),
    })
  }

  submit() {
    // console.log('Form are submitted', this.form)
    const formData = {...this.form.value};
    console.log(formData)
    this.form.reset()
  }

  setCapital() {
    const cityMap: ICityMap = {
      ua: 'Київ',
      eng: 'Лондон',
      usa: 'Вашингтон'
    }
    const cityKey = this.form.get('address')?.value;
    const capital = cityMap[cityKey.country];

    this.form.patchValue({address: {city: capital}});
  }

  get skills(): FormArray {
    return this.form.get('skills') as FormArray;
  }


  //якшо формЕрей то в ньому йде формГруп в які вже йдуть контроли зі значеннями (див 30 стр., "get skills"(must have)),
  // після чого напряму мона звернутись до першого формЕррей і проводити з ним маніпуляції по якійсь події чи статично

  addSkill() {
    const newSkill = new FormGroup({
      skillName: new FormControl('', [Validators.required]),
    })

    this.skills.push(newSkill)
    console.log('skills',this.skills.value)
  }
}
