/* eslint-disable no-undef */
import cardIdentity from "../сardidentity"

test.each([
    ['mir for 2', '2221293052254723', 'mir'],
    ['visa for 4', '4221293052254723', 'visa'],
    ['mastercard for 51', '5121293052254723', 'master'],
    ['american express for 34', '3421293052254723', 'amex'],
    ['discover for 60', '6021293052254723', 'discover'],
    ['jcb for 35', '3521293052254723', 'jcb'],
    ['diners club for 30', '3021293052254723', 'diner'],
    ['empty string', '000000000000', ''],
])(('test %s'), (_, input, expected) => {
    expect(cardIdentity(input)).toBe(expected);
});