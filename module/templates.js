/**
 * Define a set of template paths to pre-load
 * Pre-loaded templates are compiled and cached for fast access when rendering
 * @return {Promise}
 */
export const preloadHandlebarsTemplates = async function() {
  return loadTemplates([

    // Shared Partials
    "systems/sns/templates/actors/parts/active-effects.html",

    // Actor Sheet Partials
    "systems/sns/templates/actors/parts/actor-traits.html",
    "systems/sns/templates/actors/parts/ship-actor-traits.html",
    "systems/sns/templates/actors/parts/actor-inventory.html",
    "systems/sns/templates/actors/parts/actor-features.html",
    "systems/sns/templates/actors/parts/actor-spellbook.html",

    // Item Sheet Partials
    "systems/sns/templates/items/parts/item-action.html",
    "systems/sns/templates/items/parts/item-activation.html",
    "systems/sns/templates/items/parts/item-description.html",
    "systems/sns/templates/items/parts/item-mountable.html"
  ]);
};
