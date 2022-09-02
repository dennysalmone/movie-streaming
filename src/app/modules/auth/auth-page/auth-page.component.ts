import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, Subscription, takeUntil } from 'rxjs';
import { AuthService } from 'src/app/modules/shared/services/auth.service';
import { SnackbarService } from 'src/app/modules/shared/services/snackbar.service';
import { ECustomTypes } from '../../shared/enums/enum';
import { isEmailValidator } from '../../shared/validators/email-validator';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss']
})
export class AuthPageComponent implements OnDestroy, OnInit {
  public aSub: Subscription
  public types = ECustomTypes;
  private destroy$: Subject<void> = new Subject<void>();
  public loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, isEmailValidator()]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });
  public registerForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, isEmailValidator()]),
    userName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  constructor(private auth: AuthService, private snackbarService: SnackbarService, private router: Router) {
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onSubmitLogin(): void {
    this.loginForm.disable();
    this.auth.login(this.loginForm.value).pipe(
      takeUntil(this.destroy$)).subscribe({
      next: () => {
        this.router.navigate(['/cinema/movies'])
      },
      error: (e) => {
        console.log(e)
        this.loginForm.enable();
        this.snackbarService.openSnackBarError('Bad internet connection', 'Ok');
      },
    })
  }

  onSubmitRegister(): void {
    this.registerForm.disable();
    this.auth.register(this.registerForm.value).subscribe({
      next: () => {
        this.snackbarService.openSnackBarSucces('Now you can login', 'Ok')
        this.registerForm.enable();
        this.registerForm.reset();
      },
      error: (e) => {
        this.registerForm.enable();
        this.snackbarService.openSnackBarError(e.error.message || 'Bad internet connection', 'Ok');
      },
    })
  }

}
