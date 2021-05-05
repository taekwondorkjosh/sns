import ActorSheet5e from "../sheets/base.js";

/**
 * An Actor sheet for Spaceship type characters.
 * Extends the base ActorSheet5e class.
 * @extends {ActorSheet5e}
 */
export default class ActorSheet5eSpaceship extends ActorSheet5e {

  /** @override */
	static get defaultOptions() {
	  return mergeObject(super.defaultOptions, {
      classes: ["sns", "sheet", "actor", "spaceship"],
      width: 600,
      height: 680
    });
  }

  /* -------------------------------------------- */

  /**
   * Organize Owned Items for rendering the NPC sheet
   * @private
   */
  _prepareItems(data) {

    // Categorize Items as Features and Spells
    const features = {
      weapons: { label: game.i18n.localize("SNS.AttackPl"), items: [] , hasActions: true, dataset: {type: "weapon", "weapon-type": "natural"} },
      actions: { label: game.i18n.localize("SNS.ActionPl"), items: [] , hasActions: true, dataset: {type: "feat", "activation.type": "action"} },
      passive: { label: game.i18n.localize("SNS.Features"), items: [], dataset: {type: "feat"} },
      equipment: { label: game.i18n.localize("SNS.VehicleCargo"), items: [], dataset: {type: "loot"}}
    };

    // Start by classifying items into groups for rendering
    let [spells, other] = data.items.reduce((arr, item) => {
      item.img = item.img || DEFAULT_TOKEN;
      item.isStack = Number.isNumeric(item.data.quantity) && (item.data.quantity !== 1);
      item.hasUses = item.data.uses && (item.data.uses.max > 0);
      item.isOnCooldown = item.data.recharge && !!item.data.recharge.value && (item.data.recharge.charged === false);
      item.isDepleted = item.isOnCooldown && (item.data.uses.per && (item.data.uses.value > 0));
      item.hasTarget = !!item.data.target && !(["none",""].includes(item.data.target.type));
      if ( item.type === "spell" ) arr[0].push(item);
      else arr[1].push(item);
      return arr;
    }, [[], []]);

    // Apply item filters
    spells = this._filterItems(spells, this._filters.spellbook);
    other = this._filterItems(other, this._filters.features);

    // Organize Spellbook
    const spellbook = this._prepareSpellbook(data, spells);

    // Organize Features
    for ( let item of other ) {
      if ( item.type === "weapon" ) features.weapons.items.push(item);
      else if ( item.type === "feat" ) {
        if ( item.data.activation.type ) features.actions.items.push(item);
        else features.passive.items.push(item);
      }
      else features.equipment.items.push(item);
    }

    // Assign and return
    data.features = Object.values(features);
    data.spellbook = spellbook;
  }


  /* -------------------------------------------- */

  /** @override */
  getData() {
    const data = super.getData();

    // Resources
    data["resources"] = ["primary", "secondary", "barrier"].reduce((arr, r) => {
      const res = data.data.resources[r] || {};
      res.name = r;
      res.placeholder = game.i18n.localize("SNS.Resource"+r.titleCase());
      if (res && res.value === 0) delete res.value;
      if (res && res.max === 0) delete res.max;
      return arr.concat([res]);
    }, []);

    // Tier
    const tier = parseFloat(data.data.details.tier || 0);
    const tierLabels = {0: "0", 0.125: "1/8", 0.25: "1/4", 0.5: "1/2"};
    data.labels["tier"] = tier >= 1 ? String(tier) : tierLabels[tier] || 1;
    return data;
  }

  /* -------------------------------------------- */
  /*  Object Updates                              */
  /* -------------------------------------------- */

  /** @override */
  _updateObject(event, formData) {

    // Format Spaceship Tier
    const tiers = {"1/8": 0.125, "1/4": 0.25, "1/2": 0.5};
    let tierv = "data.details.tier";
    let tier = formData[tierv];
    tier = tiers[tier] || parseFloat(tier);
    if ( tier ) formData[tierv] = tier < 1 ? tier : parseInt(tier);

    // Parent ActorSheet update steps
    super._updateObject(event, formData);
  }

  /* -------------------------------------------- */
  /*  Event Listeners and Handlers                */
  /* -------------------------------------------- */

  /** @override */
	activateListeners(html) {
    super.activateListeners(html);
    html.find(".health .rollable").click(this._onRollHPFormula.bind(this));
  }

  /* -------------------------------------------- */

  /**
   * Handle rolling NPC health values using the provided formula
   * @param {Event} event     The original click event
   * @private
   */
  _onRollHPFormula(event) {
    event.preventDefault();
    const formula = this.actor.data.data.attributes.hp.formula;
    if ( !formula ) return;
    const hp = new Roll(formula).roll().total;
    AudioHelper.play({src: CONFIG.sounds.dice});
    this.actor.update({"data.attributes.hp.value": hp, "data.attributes.hp.max": hp});
  }
}
