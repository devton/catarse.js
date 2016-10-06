import m from 'mithril';
import creditCardInput from '../../src/c/credit-card-input';

describe('CreditCardInput', () => {
    let $output,
        test = {
            class: 'test_class',
            value: m.prop('test_value'),
            name: 'test_name',
            focusFn: jasmine.createSpy('onfocus')
        };

    describe('view', () => {
        beforeAll(() => {
            $output = mq(
                m(creditCardInput, {
                    onfocus: test.focusFn,
                    class: test.class,
                    value: test.value,
                    name: test.name
                })
            );
        });

        it('should build a credit card input', () => {
            expect($output.has('input[type="phone"]')).toBeTrue();
        });
        it('should set the given input name', () => {
            expect($output.has(`input[name="${test.name}"]`)).toBeTrue();
        });
        it('should set the given value on change', () => {
            const str = 'testing';
            $output.setValue('input', str);
            expect(test.value() === str).toBeTrue();
        })
        it('should call the given focus function on focus', () => {
            $output.focus('input');
            expect(test.focusFn).toHaveBeenCalled();
        })
    });
});