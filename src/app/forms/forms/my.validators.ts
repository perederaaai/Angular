import { FormControl } from '@angular/forms';

export class MyValidators{
  static restrictedEmail(control: FormControl): { [key: string]: boolean } | null{
    if (['2@mail.ru', '1@yandex.ru', '.by'].includes(control.value)){
      return {restrictedEmail: true}
    }
    return null

  }
}
