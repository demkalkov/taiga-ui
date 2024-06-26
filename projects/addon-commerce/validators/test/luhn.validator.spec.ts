import {FormControl} from '@angular/forms';
import {tuiCreateLuhnValidator} from '@taiga-ui/addon-commerce';
import {TuiValidationError} from '@taiga-ui/cdk';

describe('tuiCreateLuhnValidator', () => {
    const control = new FormControl('', tuiCreateLuhnValidator('error'));
    const error = {luhn: new TuiValidationError('error')};

    it('valid card number is valid, check 1', () => {
        control.setValue('4111 1111 1111 1111');
        control.updateValueAndValidity();

        expect(control.valid).toBe(true);
    });

    it('valid card number is valid, check 2', () => {
        control.setValue('4000 0000 0000 0333');
        control.updateValueAndValidity();

        expect(control.valid).toBe(true);
    });

    it('valid card number is valid, check 3', () => {
        control.setValue('5000 0000 0000 0108');
        control.updateValueAndValidity();

        expect(control.valid).toBe(true);
    });

    it('invalid card number causes error, check 1', () => {
        control.setValue('1234 1234 1234 1234');
        control.updateValueAndValidity();

        expect(control.errors).toEqual(error);
    });

    it('invalid card number causes error, check 2', () => {
        control.setValue('1234 5678 9123 4567');
        control.updateValueAndValidity();

        expect(control.errors).toEqual(error);
    });

    it('invalid card number causes error, check 3', () => {
        control.setValue('2345 7823 4095 8723');
        control.updateValueAndValidity();

        expect(control.errors).toEqual(error);
    });
});
