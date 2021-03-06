import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateInitialModule } from './../../templates/template-initial.module';
import { NgxMaskModule } from 'ngx-mask';


@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TemplateInitialModule,
    NgxMaskModule.forRoot(),
  ]
})
export class SignModule { }
