class OnHit {
  calcPrayer(fixed, variable, prayer) {
    return [Math.floor(fixed + fixed * prayer), Math.floor(variable + variable * prayer)];
  }

  calcDharok(fixed, variable, dharok) {
    return [Math.floor(fixed + fixed * dharok), Math.floor(variable + variable * dharok)];
  }

  calcFul(fixed, variable) {
    return [Math.floor(fixed * 1.2), Math.floor(variable * 1.2)];
  }

  calcRubyAurora(fixed, variable, rubyAurora) {
    return [Math.floor(fixed + fixed * 0.01 * rubyAurora), Math.floor(variable + variable * 0.01 * rubyAurora)];
  }

  calcSalve(fixed, variable, salve) {
    if (salve === 'enchanted') {
      return [Math.floor(fixed * 1.2), Math.floor(variable * 1.2)];
    } 
    else if (salve === 'basic') {
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

  calcOnHit(fixed, variable, prayer, dharok, ful, rubyAurora, salve, precise_rank, equilibrium_rank, aura) {
    let dmg = this.calcPrayer(fixed,variable,prayer);
    
    if (ful === true) {
      dmg = this.calcFul(dmg[0],dmg[1]);
    }
    
    dmg = this.calcRubyAurora(dmg[0], dmg[1], rubyAurora);
    
    dmg = this.calcSalve(dmg[0], dmg[1], salve);

    dmg = this.calcPrecise(dmg[0], dmg[1], precise_rank);

    dmg = this.calcEquilibrium(dmg[0], dmg[1], equilibrium_rank, aura);
    
    return dmg;
    }
}

module.exports = OnHit;