/**
 * A simple form to set actor movement speeds
 * @implements {BaseEntitySheet}
 */
export default class ActorMovementConfig extends BaseEntitySheet {

  /** @override */
	static get defaultOptions() {
	  return mergeObject(super.defaultOptions, {
      classes: ["sns"],
      template: "systems/sns/templates/apps/movement-config.html",
      width: 300,
      height: "auto"
    });
  }

  /* -------------------------------------------- */

  /** @override */
  get title() {
    return `${game.i18n.localize("SNS.MovementConfig")}: ${this.entity.name}`;
  }

  /* -------------------------------------------- */

  /** @override */
  getData(options) {
    const data = {
      movement: duplicate(this.entity._data.data.attributes.movement),
      units: CONFIG.SNS.movementUnits
    }
    for ( let [k, v] of Object.entries(data.movement) ) {
      if ( ["units", "hover"].includes(k) ) continue;
      data.movement[k] = Number.isNumeric(v) ? v.toNearest(0.1) : 0;
    }
    return data;
  }
}
