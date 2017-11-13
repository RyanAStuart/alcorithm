const test = require("tape");
const alcorithm = require('../index.js');

test('test with 1 ingredient (with volume)', function (t) {
    t.plan(1);

    t.equals(alcorithm.withVolume(300, [{ abv: .4, volume: 30}]), .04, 'one ingredient');
});

test('test with multiple ingredients (with volume)', function (t) {
    t.plan(1);

    t.equals(alcorithm.withVolume(300, [{ abv: .2, volume: 30 }, { abv: .4, volume: 60 }]), .10, 'multiple ingredients');
});

test('test with 1 ingredient (without volume)', function (t) {
    t.plan(1);

    t.equals(alcorithm.withoutVolume([{ abv: .4, volume: 30}]), .40, 'one ingredient');
});

test('test with multiple ingredients (without volume)', function (t) {
    t.plan(1);

    t.equals(Number(alcorithm.withoutVolume([{ abv: .3, volume: 40 }, { abv: 0, volume: 150 }])).toLocaleString('en'), '0.063', 'multiple ingredients');
});

test('test with invalid ingredients', function(t) {
    t.plan(1);

    try {
        alcorithm.withoutVolume([{}]);
    } catch (error) {
        t.equals(error, 'Ingredient should have an abv and volume', 'got expected error');
    }
});