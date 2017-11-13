const test = require("tape");
const alcorithm = require('../index.js');

test('test with 1 ingredient (with volume)', function (t) {
    t.plan(1);

    t.equals(alcorithm.withVolume(300, [{ abv: 40, volume: 30}]), 4, 'one ingredient');
});

test('test with multiple ingredients (with volume)', function (t) {
    t.plan(1);

    t.equals(alcorithm.withVolume(300, [{ abv: 20, volume: 30 }, { abv: 40, volume: 60 }]), 10, 'multiple ingredients');
});

test('test with 1 ingredient (without volume)', function (t) {
    t.plan(1);

    t.equals(alcorithm.withoutVolume([{ abv: 40, volume: 30}]), 40, 'one ingredient');
});

test('test with multiple ingredients (without volume)', function (t) {
    t.plan(1);

    t.equals(Math.round(alcorithm.withoutVolume([{ abv: 30, volume: 40 }, { abv: 0, volume: 150 }])), 6, 'multiple ingredients');
});

test('test with invalid ingredients', function(t) {
    t.plan(1);

    try {
        alcorithm.withoutVolume([{}]);
    } catch (error) {
        t.equals(error, 'Ingredient should have an abv and volume', 'got expected error');
    }
});