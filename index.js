function addIngredient (ingredient) {
    if (ingredient.abv == null || ingredient.volume == null) {
        throw 'Ingredient should have an abv and volume';
    }

    return ingredient.abv * ingredient.volume;
}

function withVolume (volume, ingredients) {
    let totalAbv = 0;

    ingredients.forEach((ingredient) => { 
        totalAbv += addIngredient(ingredient);
    });

    return totalAbv / volume;
}

function withoutVolume (ingredients) {
    let totalVolume = 0;
    let totalAbv = 0;

    ingredients.forEach((ingredient) => {
        totalAbv += addIngredient(ingredient);
        totalVolume += ingredient.volume;
    });

    return totalAbv / totalVolume;
}

module.exports = {
    withVolume,
    withoutVolume,
};