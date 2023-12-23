class OnHit {
  calcPrayer(fixed, variable, prayer) {
    return [Math.floor(fixed + fixed * prayer), Math.floor(variable + variable * prayer)];
  }

  calcDPL(fixed, variable, boostedLvls) {
    return [Math.floor(fixed + boostedLvls * 4), Math.floor(variable + boostedLvls * 4)];
  }

  calcDharok(fixed, variable, dharok) {
    return [Math.floor(fixed + fixed * dharok), Math.floor(variable + variable * dharok)];
  }

  calcSun(fixed, variable) {
    return [Math.floor(fixed * 1.5), Math.floor(variable * 1.5)];
  }

  calcExsang(fixed, variable, exsang) {
    return [Math.floor(fixed + fixed * 0.01 * exsang), Math.floor(variable + variable * 0.01 * exsang)];
  }

  calcFul(fixed, variable) {
    return [Math.floor(fixed * 1.2), Math.floor(variable * 1.2)];
  }

  calcRubyAurora(fixed, variable, rubyAurora) {
    return [Math.floor(fixed + fixed * 0.01 * rubyAurora), Math.floor(variable + variable * 0.01 * rubyAurora)];
  }

  calcSalve(fixed, variable, salve) {
    if (salve === 'Salve (e)') {
      return [Math.floor(fixed * 1.2), Math.floor(variable * 1.2)];
    } 
    else if (salve === 'Salve') {
      return [Math.floor(fixed * 1.15), Math.floor(variable * 1.15)];
    }
    else {
      return [Math.floor(fixed), Math.floor(variable)];
    }

  }

  calcPrecise(fixed, variable, rank) {
    let maxHit = fixed + variable;
    return [fixed + Math.floor(maxHit * 0.015 * rank), variable - Math.floor(maxHit * 0.015 * rank)];
  }

  calcEquilibrium(fixed, variable, rank, aura) {
    if (aura === 'equilibrium') {
      return [fixed + Math.floor(variable * 0.25), variable - Math.floor(variable * 0.5)];
    } else {
      return [fixed + Math.floor(variable * rank * 0.03), variable - Math.floor(variable * rank * 0.04)];
    }
  }

  calcOnHit(fixed, variable, prayer, boostedLvls, dharok, exsang, ful, rubyAurora, salve, precise_rank, equilibrium_rank, aura, basic) {
    let dmg = this.calcPrayer(fixed, variable, prayer);
    dmg = this.calcDPL(dmg[0], dmg[1], boostedLvls);
    dmg = this.calcDharok(dmg[0], dmg[1], dharok);
    let dmg_sun = this.calcSun(dmg[0], dmg[1]);
    
    if (basic === true) {
      dmg = this.calcExsang(dmg[0], dmg[1], exsang);
      dmg_sun = this.calcExsang(dmg_sun[0], dmg_sun[1], exsang);
    }
    
    if (ful === true) {
      dmg = this.calcFul(dmg[0], dmg[1]);
      dmg_sun = this.calcFul(dmg_sun[0], dmg_sun[1]);
    }
    
    dmg = this.calcRubyAurora(dmg[0], dmg[1], rubyAurora);
    dmg_sun = this.calcRubyAurora(dmg_sun[0], dmg_sun[1], rubyAurora);
    
    dmg = this.calcSalve(dmg[0], dmg[1], salve);
    dmg_sun = this.calcSalve(dmg_sun[0], dmg_sun[1], salve);

    dmg = this.calcPrecise(dmg[0], dmg[1], precise_rank);
    dmg_sun = this.calcPrecise(dmg_sun[0], dmg_sun[1], precise_rank);

    dmg = this.calcEquilibrium(dmg[0], dmg[1], equilibrium_rank, aura);
    dmg_sun = this.calcEquilibrium(dmg_sun[0], dmg_sun[1], equilibrium_rank, aura);
    
    return [dmg, dmg_sun];
    }
}

module.exports = OnHit;