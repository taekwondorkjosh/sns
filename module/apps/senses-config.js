/**
 * A simple form to set actor movement speeds
 * @implements {BaseEntitySheet}
 */
export default class ActorSensesConfig extends BaseEntitySheet {

  /** @override */
	static get defaultOptions() {
	  return mergeObject(super.defaultOptions, {
      classes: ["sns"],
      template: "systems/sns/templates/apps/senses-config.html",
      width: 300,
      height: "auto"
    });
  }

  /* -------------------------------------------- */

  /** @override */
  get title() {
    return `${game.i18n.localize("SNS.SensesConfig")}: ${this.entity.name}`;
  }

  /* -------------------------------------------- */

  /** @override */
  getData(options) {
    const senses = this.entity._data.data.attributes?.senses ?? {};
    const data = {
      senses: {},
      special: senses.special ?? "",
      units: senses.units, movementUnits: CONFIG.SNS.movementUnits
    };
    for ( let [name, label] of Object.entries(CONFIG.SNS.senses) ) {
      const v = senses[name];
      data.senses[name] = {
        label: game.i18n.localize(label),
        value: Number.isNumeric(v) ? v.toNearest(0.1) : 0
      }
    }
    return data;
  }
}
