import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { AuthService } from 'src/app/modules/shared/services/auth.service';
import { SnackbarService } from 'src/app/modules/shared/services/snackbar.service';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss']
})
export class AuthPageComponent implements OnDestroy {

  private destroy$: Subject<void> = new Subject<void>();
  public loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });
  public registerForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required]),
    userName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  constructor(private auth: AuthService, private snackbarService: SnackbarService, private router: Router) {
  }

  onSubmitLogin(): void {
    this.loginForm.disable();
    this.auth.login(this.loginForm.value).pipe(takeUntil(this.destroy$)).subscribe({
      next: () => this.router.navigate(['/cinema/movies']),
      error: (e) => {
        this.loginForm.enable();
        this.snackbarService.openSnackBarError(e.error.message || 'Bad internet connection', 'Ok');
      }
    })
  }

  onSubmitRegister(): void {
    this.registerForm.disable();
    this.auth.register(this.registerForm.value).pipe(takeUntil(this.destroy$)).subscribe({
      next: () => {
        this.snackbarService.openSnackBarSucces('Now you can login', 'Ok')
        this.registerForm.enable();
        this.registerForm.reset({
          email: '',
          userName: '',
          password: '',
         });
      },
      error: (e) => {
        this.registerForm.enable();
        this.snackbarService.openSnackBarError(e.error.message || 'Bad internet connection', 'Ok');
      }
    })
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }



}
