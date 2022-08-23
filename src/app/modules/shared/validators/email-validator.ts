import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function isEmailValidator(): ValidatorFn {
    return (control:AbstractControl) : ValidationErrors | null => {
        const value = control.value;
        if (!value || value.length < 7) {
            return null;
        }
        const emailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
        return !emailValid ? {valid:true}: null;
    }
}