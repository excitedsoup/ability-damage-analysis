
      var $parcel$global = globalThis;
    
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequired8e7"];

if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequired8e7"] = parcelRequire;
}

var parcelRegister = parcelRequire.register;
parcelRegister("iTwOG", function(module, exports) {
"use strict";

});

var $f1916e54569f8d04$exports = {};
var $8210cabbf2009db7$exports = {};
var $b2adda9f5b90aaf8$exports = {};
const $b2adda9f5b90aaf8$var$necromancy_construction = {
    "two-handed weapons": {},
    "main-hand weapons": {
        "death guard (tier 80)": {
            "tier": 80,
            "weaponDmg": 0
        },
        "death guard (tier 90)": {
            "tier": 90,
            "weaponDmg": 0
        },
        "omni guard": {
            "tier": 95,
            "weaponDmg": 0
        },
        "none": {
            "tier": 0,
            "weaponDmg": 0
        }
    },
    "off-hand weapons": {
        "skull lantern (tier 80)": {
            "tier": 80,
            "weaponDmg": 0
        },
        "skull lantern (tier 90)": {
            "tier": 90,
            "weaponDmg": 0
        },
        "soulbound lantern": {
            "tier": 95,
            "weaponDmg": 0
        },
        "none": {
            "tier": 0,
            "weaponDmg": 0
        }
    },
    "shields": {
        "none": {
            "tier": 0,
            "weaponDmg": 0
        },
        "spectral shield": {
            "tier": 75,
            "weaponDmg": 0
        }
    },
    "defenders": {},
    "helmets": {
        "deathdealer hood (tier 80)": {
            "bonus": 20.3
        },
        "deathdealer hood (tier 90)": {
            "bonus": 23.2
        },
        "crown of the first necromancer": {
            "bonus": 25
        },
        "none": {
            "bonus": 0
        }
    },
    "bodies": {
        "deathdealer robe top (tier 80)": {
            "bonus": 30.5
        },
        "deathdealer robe top (tier 90)": {
            "bonus": 34.8
        },
        "robe top of the first necromancer": {
            "bonus": 37
        },
        "none": {
            "bonus": 0
        }
    },
    "legs": {
        "deathdealer robe bottom (tier 80)": {
            "bonus": 25.4
        },
        "deathdealer robe bottom (tier 90)": {
            "bonus": 29
        },
        "robe bottom of the first necromancer": {
            "bonus": 32
        },
        "none": {
            "bonus": 0
        }
    },
    "boots": {
        "deathdealer boots (tier 80)": {
            "bonus": 12.7
        },
        "deathdealer boots (tier 90)": {
            "bonus": 14.5
        },
        "foot wraps of the first necromancer": {
            "bonus": 16
        },
        "silverhawk boots (tier 60)": {
            "bonus": 6.9
        },
        "none": {
            "bonus": 0
        }
    },
    "gloves": {
        "deathdealer gloves (tier 80)": {
            "bonus": 12.7
        },
        "deathdealer gloves (tier 90)": {
            "bonus": 14.5
        },
        "hand wraps of the first necromancer": {
            "bonus": 16
        },
        "none": {
            "bonus": 0
        }
    },
    "necklaces": {
        "essence of finality amulet (or)": {
            "bonus": 59
        },
        "essence of finality amulet": {
            "bonus": 56
        },
        "amulet of souls (or)": {
            "bonus": 48
        },
        "amulet of souls": {
            "bonus": 46.3
        },
        "reaper (or)": {
            "bonus": 38.4
        },
        "reaper necklace": {
            "bonus": 36.8
        },
        "salve (e)": {
            "bonus": 4.2
        },
        "salve": {
            "bonus": 0
        },
        "none": {
            "bonus": 0
        }
    },
    "rings": {
        "reavers": {
            "bonus": 27.7
        },
        "ring of death (i)": {
            "bonus": 27.7
        },
        "ring of death": {
            "bonus": 25.2
        },
        "asylum surgeon ring (i)": {
            "bonus": 23.4
        },
        "asylum surgeon ring": {
            "bonus": 21
        },
        "none": {
            "bonus": 0
        }
    },
    "capes": {
        "igneous kal-mor": {
            "bonus": 43
        },
        "completionist": {
            "bonus": 31.5
        },
        "tokhaar-kal-mor": {
            "bonus": 33
        },
        "god cape": {
            "bonus": 31.5
        },
        "max cape": {
            "bonus": 31.5
        },
        "skillcape": {
            "bonus": 21.6
        },
        "none": {
            "bonus": 0
        }
    },
    "pockets": {
        "grimoire": {
            "bonus": 7
        },
        "scripture of jas": {
            "bonus": 8
        },
        "scripture of ful": {
            "bonus": 8
        },
        "scripture of wen": {
            "bonus": 8
        },
        "illuminated god book": {
            "bonus": 7
        },
        "god book": {
            "bonus": 5
        },
        "none": {
            "bonus": 0
        }
    },
    "auras": {
        "mahjarrat": {
            "levels": 0.0,
            "boost": 0.05
        },
        "equilibrium": {
            "levels": 0.0,
            "boost": 0.0
        },
        "none": {
            "levels": 0.0,
            "boost": 0.0
        }
    },
    "prayers": {
        "ruination": {
            "boost": 0.12
        },
        "sorrow": {
            "boost": 0.10
        },
        "sanctity": {
            "boost": 0.08
        },
        "accelerated decay": {
            "boost": 0.06
        },
        "hastened decay": {
            "boost": 0.06
        },
        "decay": {
            "boost": 0.02
        },
        "none": {
            "boost": 0.0
        }
    },
    "potions": {
        "elder overload": {
            "levels": 5,
            "percent": 0.17
        },
        "supreme overload": {
            "levels": 4,
            "percent": 0.16
        },
        "overload": {
            "levels": 3,
            "percent": 0.15
        },
        "extreme necromancy": {
            "levels": 3,
            "percent": 0.15
        },
        "super necromancy": {
            "levels": 2,
            "percent": 0.12
        },
        "necromancy potion": {
            "levels": 1,
            "percent": 0.08
        },
        "none": {
            "levels": 0,
            "percent": 0.0
        }
    },
    "slayerHelmets": {
        "none": {
            "boost": 0
        },
        "slayer helmet": {
            "boost": 0.075
        },
        "full slayer helmet": {
            "boost": 0.075
        },
        "reinforced slayer helmet": {
            "boost": 0.08
        },
        "strong slayer helmet": {
            "boost": 0.085
        },
        "mighty slayer helmet": {
            "boost": 0.09
        },
        "corrupted slayer helmet": {
            "boost": 0.095
        }
    },
    "abilities": {
        "basic attack": {
            "fixed percent": 0.9,
            "variable percent": 0.2,
            "on hit effects": true,
            "crit effects": true,
            "category": "necro auto"
        },
        "skeleton auto": {
            "fixed percent": 0.22,
            "variable percent": 0.06,
            "on hit effects": false,
            "crit effects": false,
            "category": "conjure"
        },
        "finger of death": {
            "fixed percent": 2.7,
            "variable percent": 0.6,
            "on hit effects": true,
            "crit effects": true,
            "category": "abil"
        },
        "touch of death": {
            "fixed percent": 0.9,
            "variable percent": 0.2,
            "on hit effects": true,
            "crit effects": true,
            "category": "basic"
        },
        "death skulls": {
            "fixed percent": 2.25,
            "variable percent": 0.5,
            "on hit effects": true,
            "crit effects": true,
            "category": "ultimate"
        },
        "blood siphon - siphon": {
            "fixed percent": 0.22,
            "variable percent": 0.06,
            "category": "abil"
        },
        "blood siphon - hit": {
            "fixed percent": 1.17,
            "variable percent": 0.26,
            "on hit effects": true,
            "crit effects": true,
            "category": "abil"
        },
        "zombie auto": {
            "fixed percent": 0.18,
            "variable percent": 0.04,
            "on hit effects": false,
            "crit effects": false,
            "category": "conjure"
        },
        "zombie poison": {
            "fixed percent": 0.08,
            "variable percent": 0.04,
            "category": "poison"
        },
        "command zombie": {
            "fixed percent": 3.6,
            "variable percent": 0.8,
            "on hit effects": false,
            "crit effects": false,
            "category": "abil"
        },
        "ghost auto": {
            "fixed percent": 0.18,
            "variable percent": 0.04,
            "on hit effects": false,
            "crit effects": false,
            "category": "conjure"
        },
        "bloat - initial hit": {
            "fixed percent": 1.35,
            "variable percent": 0.3,
            "on hit effects": true,
            "crit effects": true,
            "category": "abil"
        },
        "bloat - bleed hit": {
            "number of hits": 10,
            "category": "dot"
        },
        "soul sap": {
            "fixed percent": 0.9,
            "variable percent": 0.2,
            "on hit effects": true,
            "crit effects": true,
            "category": "basic"
        },
        "soul strike - main": {
            "fixed percent": 1.35,
            "variable percent": 0.3,
            "on hit effects": true,
            "crit effects": true,
            "category": "abil"
        },
        "soul strike - aoe": {
            "fixed percent": 0.9,
            "variable percent": 0.2,
            "on hit effects": true,
            "crit effects": true,
            "category": "abil"
        },
        "spectral scythe - 1": {
            "fixed percent": 0.72,
            "variable percent": 0.16,
            "on hit effects": true,
            "crit effects": true,
            "category": "abil"
        },
        "spectral scythe - 2": {
            "fixed percent": 1.8,
            "variable percent": 0.4,
            "on hit effects": true,
            "crit effects": true,
            "category": "abil"
        },
        "spectral scythe - 3": {
            "fixed percent": 2.25,
            "variable percent": 0.5,
            "on hit effects": true,
            "crit effects": true,
            "category": "abil"
        },
        "volley of souls": {
            "fixed percent": 1.35,
            "variable percent": 0.3,
            "on hit effects": true,
            "crit effects": true,
            "category": "abil"
        },
        "death grasp": {
            "fixed percent": 4.05,
            "variable percent": 4.95,
            "on hit effects": true,
            "crit effects": true,
            "category": "abil"
        },
        "death essence": {
            "fixed percent": 3.6,
            "variable percent": 0.8,
            "on hit effects": true,
            "crit effects": true,
            "category": "abil"
        }
    }
};
$b2adda9f5b90aaf8$exports = $b2adda9f5b90aaf8$var$necromancy_construction;


class $8210cabbf2009db7$var$AbilityDmg {
    calcAd(type, settings) {
        //if manually overwritten use that
        if (settings["ability damage"] != 0) return settings["ability damage"];
        let AD = 0;
        //two-handed AD
        if (type === "2h") AD = Math.floor(2.5 * this.calcLevel(settings)) + Math.floor(1.25 * this.calcLevel(settings)) + Math.floor(14.4 * this.getTier("two-hand", settings) + 1.5 * this.calcBonus(settings));
        else {
            const mhAbilityDmg = Math.floor(2.5 * this.calcLevel(settings)) + Math.floor(9.6 * this.getTier("main-hand", settings) + this.calcBonus(settings));
            let ohAbilityDmg = 0;
            if (type === "Ms") ohAbilityDmg = 0;
            else if (type === "Md") ohAbilityDmg = Math.floor(0.5 * (Math.floor(2.5 * this.calcLevel(settings)) + Math.floor(9.6 * Math.floor(0.5 * this.getTier("defender", settings)) + this.calcBonus(settings))));
            else if (type === "Dw") ohAbilityDmg = Math.floor(0.5 * (Math.floor(2.5 * this.calcLevel(settings)) + Math.floor(9.6 * this.getTier("off-hand", settings) + this.calcBonus(settings))));
            AD = mhAbilityDmg + ohAbilityDmg;
        }
        return AD;
    }
    calcBonus(settings) {
        let reaperCrew = 0;
        if (settings["Reaper crew"] === true) reaperCrew = 12;
        return $b2adda9f5b90aaf8$exports.helmets[settings["helmet"]]["bonus"] + $b2adda9f5b90aaf8$exports.bodies[settings["body"]]["bonus"] + $b2adda9f5b90aaf8$exports.legs[settings["leg"]]["bonus"] + $b2adda9f5b90aaf8$exports.boots[settings["boots"]]["bonus"] + $b2adda9f5b90aaf8$exports.gloves[settings["gloves"]]["bonus"] + $b2adda9f5b90aaf8$exports.necklaces[settings["necklace"]]["bonus"] + $b2adda9f5b90aaf8$exports.rings[settings["ring"]]["bonus"] + $b2adda9f5b90aaf8$exports.capes[settings["cape"]]["bonus"] + $b2adda9f5b90aaf8$exports.pockets[settings["pocket slot"]]["bonus"] + reaperCrew;
    }
    calcLevel(settings) {
        let level = settings["level"];
        let percentBoost = $b2adda9f5b90aaf8$exports.potions[settings["potion"]]["percent"];
        let flatBoost = $b2adda9f5b90aaf8$exports.potions[settings["potion"]]["levels"];
        return Math.floor(level * (1 + percentBoost)) + flatBoost;
    }
    getTier(type, settings) {
        if (type === "two-hand") return $b2adda9f5b90aaf8$exports["two-handed weapons"][settings["two-handed weapon"]]["tier"];
        else if (type === "main-hand") return $b2adda9f5b90aaf8$exports["main-hand weapons"][settings["main-hand weapon"]]["tier"];
        else if (type === "shield") return $b2adda9f5b90aaf8$exports.shields[settings["shield"]]["tier"];
        else if (type === "defender") return $b2adda9f5b90aaf8$exports.defenders[settings["defender"]]["tier"];
        else if (type === "off-hand") return $b2adda9f5b90aaf8$exports["off-hand weapons"][settings["off-hand weapon"]]["tier"];
    }
}
$8210cabbf2009db7$exports = $8210cabbf2009db7$var$AbilityDmg;


var $0b0ce906f245b61e$exports = {};

class $0b0ce906f245b61e$var$OnNPC {
    calcVuln(dmg, flag) {
        if (flag === true) dmg = Math.floor(dmg * 1.1);
        return dmg;
    }
    calcSlayerPerk(dmg, flag) {
        if (flag === true) dmg = Math.floor(dmg * 1.07);
        return dmg;
    }
    calcSlayerSigil(dmg, flag) {
        if (flag === true) dmg = Math.floor(dmg * 1.15);
        return dmg;
    }
    calcAura(dmg, boost) {
        return Math.floor(dmg * (1 + boost));
    }
    calcCryptbloom(dmg, flag) {
        if (flag === true) dmg = Math.floor(dmg * 1.1);
        return dmg;
    }
    calcHaunted(dmg, haunted, AD) {
        if (haunted === true) {
            let increase = Math.floor(dmg * 0.1);
            if (increase < Math.floor(0.2 * AD)) return dmg + increase;
            else return dmg + Math.floor(0.2 * AD);
        }
        return dmg;
    }
    calcRedbeam(dmg, flag) {
        if (flag === true) dmg += Math.floor(dmg * 0.3);
        return dmg;
    }
    calcBlackbeam(dmg, flag) {
        if (flag === true) dmg -= Math.floor(dmg * 0.3);
        return dmg;
    }
    calcInfernalPuzzleBox(dmg, stacks) {
        return dmg + Math.floor(dmg * 0.01 * stacks);
    }
    calcTokkulZo(dmg, flag) {
        if (flag === true) dmg += Math.floor(dmg * 0.1);
        return dmg;
    }
    calcNope(dmg, flag) {
        if (flag === true) dmg += Math.floor(dmg * 0.03);
        return dmg;
    }
    calcKBD(dmg, flag) {
        if (flag === true) dmg += Math.floor(dmg * 0.1);
        return dmg;
    }
    calcInnerChaos(dmg, flag) {
        if (flag === true) dmg += Math.floor(dmg * 0.05);
        return dmg;
    }
    calcGuardiansTriumph(dmg, stacks, category) {
        if (category === "basic") return dmg += Math.floor(dmg * 0.2 * stacks);
        return dmg;
    }
    calcSwordofEdicts(dmg, flag) {
        if (flag === true) dmg -= Math.floor(dmg * 0.05);
        return dmg;
    }
    calcBalanceofPower(dmg, stacks) {
        return dmg + Math.floor(dmg * 0.06 * stacks);
    }
    calcInnerPower(dmg, stacks) {
        return dmg + Math.floor(dmg * 0.1 * stacks);
    }
    calcOnNpc(dmg, settings, AD, category) {
        //buffs applied in order of operations
        dmg = this.calcVuln(dmg, settings["vulnerability"]);
        dmg = this.calcSlayerPerk(dmg, settings["slayer perk"]);
        dmg = this.calcSlayerSigil(dmg, settings["slayer sigil"]);
        dmg = this.calcAura(dmg, $b2adda9f5b90aaf8$exports.auras[settings["aura"]]["boost"]);
        //unknown order of buffs
        dmg = this.calcCryptbloom(dmg, settings["death spores"]);
        dmg = this.calcHaunted(dmg, settings["haunted"], AD);
        dmg = this.calcRedbeam(dmg, settings["Telos red beam"]);
        dmg = this.calcBlackbeam(dmg, settings["Telos black beam"]);
        dmg = this.calcInfernalPuzzleBox(dmg, settings["Infernal puzzle box"]);
        dmg = this.calcTokkulZo(dmg, settings["Tokkul-zo"]);
        dmg = this.calcKBD(dmg, settings["King black dragon wilderness portal"]);
        dmg = this.calcInnerChaos(dmg, settings["Zamorak inner chaos"]);
        dmg = this.calcGuardiansTriumph(dmg, settings["Zamorak guardians triumph"], settings["category"]);
        dmg = this.calcSwordofEdicts(dmg, settings["Zamorak sword of edicts"]);
        dmg = this.calcBalanceofPower(dmg, settings["Zamorak balance of power"]);
        dmg = this.calcInnerPower(dmg, settings["Raksha inner power"]);
        dmg = this.calcNope(dmg, settings["nopenopenope"]);
        return dmg;
    }
    onNpcDamageList(dmgList, settings, AD) {
        const onNpcDmg = [];
        for (const i of dmgList)onNpcDmg.push(this.calcOnNpc(i, settings, AD));
        return onNpcDmg;
    }
}
$0b0ce906f245b61e$exports = $0b0ce906f245b61e$var$OnNPC;


var $38e9911dfd02e8c3$exports = {};

class $38e9911dfd02e8c3$var$OnHit {
    calcScriptureOfFul(buff, pocket, flag) {
        if (pocket === "scripture of ful" && flag === true) buff = buff * 1.2;
        return Math.floor(buff);
    }
    calcStoneOfJas(buff, jas) {
        return Math.floor(buff * (1 + jas / 100));
    }
    calcPrayer(buff, prayer) {
        return Math.floor(buff * (1 + $b2adda9f5b90aaf8$exports.prayers[prayer]["boost"]));
    }
    calcRubyAurora(buff, aurora) {
        return Math.floor(buff * (1 + 0.01 * aurora));
    }
    calcRevenge(buff, type, revengeStacks) {
        if (type === "Ms") buff = buff * (1 + 0.05 * revengeStacks);
        else if (type === "Md") buff = buff * (1 + 0.025 * revengeStacks);
        return Math.floor(buff);
    }
    calcSpendthrift(buff, spendthriftRank) {
        return Math.floor(buff * (1 + spendthriftRank * spendthriftRank / 10000));
    }
    calcRuthless(buff, ruthlessRank, ruthlessStacks) {
        return Math.floor(buff * (1 + 0.005 * ruthlessRank * ruthlessStacks));
    }
    calcSlayerHelmet(buff, slayerHelmet) {
        return Math.floor(buff * (1 + $b2adda9f5b90aaf8$exports.slayerHelmets[slayerHelmet]["boost"]));
    }
    calcGuardHouse(buff, guardhouse) {
        if (guardhouse === "level 1") buff = buff * 1.01;
        else if (guardhouse === "level 1 undead") buff = buff * 1.02;
        else if (guardhouse === "level 3 - low target") buff = buff * 1.11;
        else if (guardhouse === "level 3 undead - low target") buff = buff * 1.12;
        return Math.floor(buff);
    }
    calcGenocidal(buff, genocidal) {
        return Math.floor(buff * (1 + genocidal / 100));
    }
    calcSalveAmulet(buff, necklace) {
        if (necklace === "Salve amulet") buff = buff * 1.15;
        else if (necklace === "Salve amulet (e)") buff = buff * 1.2;
        return Math.floor(buff);
    }
    calcRipperPassive(buff, ripperPassive) {
        return Math.floor(buff * (1 + ripperPassive / 100));
    }
    calcBerserkersFury(buff, fury) {
        return Math.floor(buff * (1 + fury / 100));
    }
    calcPrecise(fixed, variable, rank) {
        let maxHit = fixed + variable;
        return [
            fixed + Math.floor(maxHit * 0.015 * rank),
            variable - Math.floor(maxHit * 0.015 * rank)
        ];
    }
    calcEquilibrium(fixed, variable, rank, aura) {
        if (aura === "equilibrium") return [
            fixed + Math.floor(variable * 0.25),
            variable - Math.floor(variable * 0.5)
        ];
        else return [
            Math.floor(fixed + variable * rank * 0.03),
            Math.floor(variable - variable * rank * 0.04)
        ];
    }
    calcOnHit(fixed, variable, type, apply, settings) {
        if (apply == false) return [
            fixed,
            variable
        ];
        else {
            let buff = 10000;
            //all buffs in order of application
            buff = this.calcScriptureOfFul(buff, settings["pocket slot"], settings["ful"]); //assumed on
            buff = this.calcStoneOfJas(buff, settings["stone of jas"]);
            buff = this.calcPrayer(buff, settings["prayer"]);
            buff = this.calcRubyAurora(buff, settings["Ruby aurora"]);
            buff = this.calcRevenge(buff, type, settings["revenge stacks"]);
            buff = this.calcSpendthrift(buff, settings["spendthrift"]); //causes a rounding-error
            buff = this.calcRuthless(buff, settings["ruthless rank"], settings["ruthless stacks"]);
            buff = this.calcSlayerHelmet(buff, settings["slayer helmet"]);
            buff = this.calcGuardHouse(buff, settings["fort forinthry guardhouse"]);
            buff = this.calcGenocidal(buff, settings["genocidal percent"]);
            buff = this.calcSalveAmulet(buff, settings["necklace"]);
            buff = this.calcRipperPassive(buff, settings["ripper demon passive"]);
            //unknown order
            buff = this.calcBerserkersFury(buff, settings["berserkers fury"]);
            //apply scaling to damage
            fixed = Math.floor(fixed * buff / 10000);
            variable = Math.floor(variable * buff / 10000);
            //calculate precise and equilibrium
            let dmg = this.calcPrecise(fixed, variable, settings["precise"]);
            dmg = this.calcEquilibrium(dmg[0], dmg[1], settings["equilibrium"], settings["aura"]);
            return [
                dmg[0],
                dmg[1]
            ];
        }
    }
}
$38e9911dfd02e8c3$exports = $38e9911dfd02e8c3$var$OnHit;


var $9022c26e3583e5c9$exports = {};
class $9022c26e3583e5c9$var$Crit {
    calcFCritChance(settings) {
        let fcrit = 0.1 + 0.05 * settings["crit-i-kal"] + 0.01 * settings["kalgerion demon familiar"] + 0.02 * settings["biting"];
        if (settings["ring"] === "reavers") fcrit = fcrit + 0.05;
        if (settings["pocket slot"] === "grimoire") fcrit = fcrit + 0.12;
        return fcrit;
    }
    critDmgBuff(dmg, settings) {
        let modifier = 0.2;
        modifier = modifier + 0.05 * Math.floor(settings["level"] - 10) / 10;
        if (settings["smoke cloud"] === true) modifier = modifier + 0.06;
        return Math.floor(dmg * (1 + modifier));
    }
    critDamageList(dmgList, settings) {
        const critDamage = [];
        for (const i of dmgList)critDamage.push(this.critDmgBuff(i, settings));
        return critDamage;
    }
}
$9022c26e3583e5c9$exports = $9022c26e3583e5c9$var$Crit;


var $87be9f626a9244b9$exports = {};
class $87be9f626a9244b9$var$necromancyHelper {
    damageObjectCreator(settings) {
        let obj = {
            "non-crit": {
                "list": [],
                "probability": 0
            },
            "crit": {
                "list": [],
                "probability": 0
            }
        };
        return obj;
    }
    baseDamageListCreator(fixed, variable) {
        const dmg = [];
        for(var i = fixed; i <= fixed + variable; i++)dmg.push(i);
        return dmg;
    }
    hitCapApplier(dmg, hitcap) {
        if (dmg > hitcap) dmg = hitcap;
        return dmg;
    }
    hitCapDmgList(dmgList, settings) {
        const hitCapDmg = [];
        for (const i of dmgList)hitCapDmg.push(this.hitCapApplier(i, settings["hitcap"]));
        return hitCapDmg;
    }
    totalDamageCalc(dmgList) {
        let total = 0;
        for (const i of dmgList)total = total + i;
        return total;
    }
    flooredList(dmgList) {
        for(var i = 0; i < dmgList.length; i++)dmgList[i] = Math.floor(dmgList[i]);
        return dmgList;
    }
    listAdder(list1, list2) {
        const returnList = [];
        for(var i = 0; i < list1.length; i++)returnList.push(list1[i] + list2[i]);
        return returnList;
    }
}
$87be9f626a9244b9$exports = $87be9f626a9244b9$var$necromancyHelper;


var $ef1e4825cfacbaa5$exports = {};


class $ef1e4825cfacbaa5$var$avgDmg {
    averageDamage(abil_val, dmg_list, critDmg_list, settings) {
        const CRIT_INS = new $9022c26e3583e5c9$exports();
        //calc average damage
        var regTotal = 0;
        for(var i = 0; i < dmg_list.length; i++)regTotal += dmg_list[i];
        var avgReg = regTotal / dmg_list.length;
        var critTotal = 0;
        for(var i = 0; i < critDmg_list.length; i++)critTotal += critDmg_list[i];
        var avgCrit = critTotal / critDmg_list.length;
        let fCritChance = 0;
        if (Abil[abil_val]["crit effects"] === true) fCritChance = CRIT_INS.calcFCritChance(settings);
        let dmgAvg = fCritChance * avgCrit + (1 - fCritChance) * avgReg;
        return dmgAvg;
    }
    addUpDamages(hits) {
        let dmgMin = 0;
        let dmgAvg = 0;
        let dmgMax = 0;
        for(var i = 0; i < hits.length; i++){
            dmgMin += hits[i][0];
            dmgAvg += hits[i][1];
            dmgMax += hits[i][2];
        }
        return [
            dmgMin,
            dmgAvg,
            dmgMax
        ];
    }
    dmgObjectProbabilityCalc(dmgObject, settings, abil_val) {
        const CRIT_INS = new $9022c26e3583e5c9$exports();
        let critChance = 0;
        if ($b2adda9f5b90aaf8$exports.abilities[abil_val]["crit effects"] === true) critChance = CRIT_INS.calcFCritChance(settings);
        dmgObject["non-crit"]["probability"] = 1 - critChance;
        dmgObject["crit"]["probability"] = critChance;
        return dmgObject;
    }
    averageDamageList(dmgList) {
        let total = 0;
        for (const i of dmgList)total = total + i;
        return total / dmgList.length;
    }
    averageDamageObject(dmgObject) {
        let avg = 0;
        for(let key in dmgObject){
            let dmg = this.averageDamageList(dmgObject[key]["list"]);
            let prob = dmgObject[key]["probability"];
            avg = avg + dmg * prob;
        }
        return avg;
    }
    returnDecider(dmgObject, settings, abil_val) {
        dmgObject = this.dmgObjectProbabilityCalc(dmgObject, settings, abil_val);
        if (settings["minavgmax"] === "min") return "min";
        else if (settings["minavgmax"] === "max") return "max";
        else if (settings["minavgmax"] === "avg") return this.averageDamageObject(dmgObject);
    }
}
$ef1e4825cfacbaa5$exports = $ef1e4825cfacbaa5$var$avgDmg;


var $6a784de5f5a996cd$exports = {};

function $6a784de5f5a996cd$var$split_soul(dmgList, settings) {
    settings["category"] = "split soul";
    const Helper = new $87be9f626a9244b9$exports();
    if (settings["split soul"] === true) {
        const splitSoul = [];
        for(var i = 0; i < dmgList.length; i++){
            let hit = dmgList[i];
            let soulSplit = 0;
            //no aos proc
            if (hit > 2000) {
                soulSplit = soulSplit + 200;
                hit = hit - 2000;
                if (hit > 2000) {
                    soulSplit = soulSplit + 100;
                    hit = hit - 2000;
                    soulSplit = soulSplit + Math.floor(0.0125 * hit);
                    hit = 0;
                } else soulSplit = soulSplit + Math.floor(0.05 * hit);
            } else {
                soulSplit = soulSplit + Math.floor(0.1 * hit);
                hit = hit - hit;
            }
            if (settings["necklace"] in [
                "Essence of finality amulet (or)",
                "Essence of finality amulet",
                "Amulet of souls (or)",
                "Amulet of souls"
            ]) soulSplit = Math.floor(soulSplit * 1.1875);
            splitSoul.push(4 * soulSplit);
        }
        return Helper.hitCapDmgList(splitSoul, settings);
    } else {
        const returnList = [];
        for(var i = 0; i < dmgList.length; i++)returnList.push(0);
        return returnList;
    }
}
$6a784de5f5a996cd$exports = $6a784de5f5a996cd$var$split_soul;




var $iTwOG = parcelRequire("iTwOG");
var $f1916e54569f8d04$require$channel = $iTwOG.channel;
function $f1916e54569f8d04$var$necro_auto(type, settings, numberOfHits) {
    const AD_INS = new $8210cabbf2009db7$exports();
    const NPC_INS = new $0b0ce906f245b61e$exports();
    const HIT_INS = new $38e9911dfd02e8c3$exports();
    const CRIT_INS = new $9022c26e3583e5c9$exports();
    const AVG_INS = new $ef1e4825cfacbaa5$exports();
    const Helper = new $87be9f626a9244b9$exports();
    let abil_val = "basic attack";
    const fixedPercent = $b2adda9f5b90aaf8$exports.abilities[abil_val]["fixed percent"];
    const variablePercent = $b2adda9f5b90aaf8$exports.abilities[abil_val]["variable percent"];
    settings["category"] = $b2adda9f5b90aaf8$exports.abilities[abil_val]["category"];
    const hits = [];
    for(var hitsplat = 0; hitsplat < numberOfHits; hitsplat++){
        const damageObject = Helper.damageObjectCreator(settings);
        //calculates ability damage
        let AD = AD_INS.calcAd(type, settings); //AD_INS.calcAd(type,settings);
        //sets fixed and variable damage
        let fixed = Math.floor(AD * fixedPercent);
        let variable = Math.floor(AD * variablePercent);
        //applies on-hit effects
        let onHit = HIT_INS.calcOnHit(fixed, variable, type, $b2adda9f5b90aaf8$exports.abilities[abil_val]["on hit effects"], settings);
        //sets up for further calculations
        damageObject["non-crit"]["list"] = Helper.baseDamageListCreator(onHit[0], onHit[1]);
        //apply crit dmg
        damageObject["crit"]["list"] = CRIT_INS.critDamageList(damageObject["non-crit"]["list"], settings);
        //apply on-npc effects and hitcaps
        damageObject["non-crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["non-crit"]["list"], settings, AD);
        damageObject["crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["crit"]["list"], settings, AD);
        //split soul
        splitSoul = $6a784de5f5a996cd$exports(damageObject["non-crit"]["list"], settings);
        splitSoulCrit = $6a784de5f5a996cd$exports(damageObject["crit"]["list"], settings);
        //apply hit caps
        damageObject["non-crit"]["list"] = Helper.hitCapDmgList(damageObject["non-crit"]["list"], settings);
        damageObject["crit"]["list"] = Helper.hitCapDmgList(damageObject["crit"]["list"], settings);
        //add up damages
        damageObject["non-crit"]["list"] = Helper.listAdder(damageObject["non-crit"]["list"], splitSoul);
        damageObject["crit"]["list"] = Helper.listAdder(damageObject["crit"]["list"], splitSoulCrit);
        //calc min, avg, or max depending on request
        hits.push(AVG_INS.returnDecider(damageObject, settings, abil_val));
    }
    //calc total damage
    hits.push(Helper.totalDamageCalc(hits));
    return Helper.flooredList(hits);
}
$f1916e54569f8d04$exports = $f1916e54569f8d04$var$necro_auto;


var $e79fee22eb9e0def$exports = {};









var $iTwOG = parcelRequire("iTwOG");
var $e79fee22eb9e0def$require$channel = $iTwOG.channel;
function $e79fee22eb9e0def$var$soul_sap(type, settings, numberOfHits) {
    const AD_INS = new $8210cabbf2009db7$exports();
    const NPC_INS = new $0b0ce906f245b61e$exports();
    const HIT_INS = new $38e9911dfd02e8c3$exports();
    const CRIT_INS = new $9022c26e3583e5c9$exports();
    const AVG_INS = new $ef1e4825cfacbaa5$exports();
    const Helper = new $87be9f626a9244b9$exports();
    let abil_val = "soul sap";
    const fixedPercent = $b2adda9f5b90aaf8$exports.abilities[abil_val]["fixed percent"];
    const variablePercent = $b2adda9f5b90aaf8$exports.abilities[abil_val]["variable percent"];
    settings["category"] = $b2adda9f5b90aaf8$exports.abilities[abil_val]["category"];
    const hits = [];
    for(var hitsplat = 0; hitsplat < numberOfHits; hitsplat++){
        const damageObject = Helper.damageObjectCreator(settings);
        //calculates ability damage
        let AD = AD_INS.calcAd(type, settings); //AD_INS.calcAd(type,settings);
        //sets fixed and variable damage
        let fixed = Math.floor(AD * fixedPercent);
        let variable = Math.floor(AD * variablePercent);
        //applies on-hit effects
        let onHit = HIT_INS.calcOnHit(fixed, variable, type, $b2adda9f5b90aaf8$exports.abilities[abil_val]["on hit effects"], settings);
        //sets up for further calculations
        damageObject["non-crit"]["list"] = Helper.baseDamageListCreator(onHit[0], onHit[1]);
        //apply crit dmg
        damageObject["crit"]["list"] = CRIT_INS.critDamageList(damageObject["non-crit"]["list"], settings);
        //apply on-npc effects and hitcaps
        damageObject["non-crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["non-crit"]["list"], settings, AD);
        damageObject["crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["crit"]["list"], settings, AD);
        //split soul
        splitSoul = $6a784de5f5a996cd$exports(damageObject["non-crit"]["list"], settings);
        splitSoulCrit = $6a784de5f5a996cd$exports(damageObject["crit"]["list"], settings);
        //split soul
        splitSoul = $6a784de5f5a996cd$exports(damageObject["non-crit"]["list"], settings);
        splitSoulCrit = $6a784de5f5a996cd$exports(damageObject["crit"]["list"], settings);
        //apply hit caps
        damageObject["non-crit"]["list"] = Helper.hitCapDmgList(damageObject["non-crit"]["list"], settings);
        damageObject["crit"]["list"] = Helper.hitCapDmgList(damageObject["crit"]["list"], settings);
        //add up damages
        damageObject["non-crit"]["list"] = Helper.listAdder(damageObject["non-crit"]["list"], splitSoul);
        damageObject["crit"]["list"] = Helper.listAdder(damageObject["crit"]["list"], splitSoulCrit);
        //calc min, avg, or max depending on request
        hits.push(AVG_INS.returnDecider(damageObject, settings, abil_val));
    }
    //calc total damage
    hits.push(Helper.totalDamageCalc(hits));
    return Helper.flooredList(hits);
}
$e79fee22eb9e0def$exports = $e79fee22eb9e0def$var$soul_sap;


var $59766573267b885a$exports = {};









var $iTwOG = parcelRequire("iTwOG");
var $59766573267b885a$require$channel = $iTwOG.channel;
function $59766573267b885a$var$touch_of_death(type, settings, numberOfHits) {
    const AD_INS = new $8210cabbf2009db7$exports();
    const NPC_INS = new $0b0ce906f245b61e$exports();
    const HIT_INS = new $38e9911dfd02e8c3$exports();
    const CRIT_INS = new $9022c26e3583e5c9$exports();
    const AVG_INS = new $ef1e4825cfacbaa5$exports();
    const Helper = new $87be9f626a9244b9$exports();
    let abil_val = "touch of death";
    const fixedPercent = $b2adda9f5b90aaf8$exports.abilities[abil_val]["fixed percent"];
    const variablePercent = $b2adda9f5b90aaf8$exports.abilities[abil_val]["variable percent"];
    settings["category"] = $b2adda9f5b90aaf8$exports.abilities[abil_val]["category"];
    const hits = [];
    for(var hitsplat = 0; hitsplat < numberOfHits; hitsplat++){
        const damageObject = Helper.damageObjectCreator(settings);
        //calculates ability damage
        let AD = AD_INS.calcAd(type, settings); //AD_INS.calcAd(type,settings);
        //sets fixed and variable damage
        let fixed = Math.floor(AD * fixedPercent);
        let variable = Math.floor(AD * variablePercent);
        //applies on-hit effects
        let onHit = HIT_INS.calcOnHit(fixed, variable, type, $b2adda9f5b90aaf8$exports.abilities[abil_val]["on hit effects"], settings);
        //sets up for further calculations
        damageObject["non-crit"]["list"] = Helper.baseDamageListCreator(onHit[0], onHit[1]);
        //apply crit dmg
        damageObject["crit"]["list"] = CRIT_INS.critDamageList(damageObject["non-crit"]["list"], settings);
        //apply on-npc effects and hitcaps
        damageObject["non-crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["non-crit"]["list"], settings, AD);
        damageObject["crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["crit"]["list"], settings, AD);
        //split soul
        splitSoul = $6a784de5f5a996cd$exports(damageObject["non-crit"]["list"], settings);
        splitSoulCrit = $6a784de5f5a996cd$exports(damageObject["crit"]["list"], settings);
        //apply hit caps
        damageObject["non-crit"]["list"] = Helper.hitCapDmgList(damageObject["non-crit"]["list"], settings);
        damageObject["crit"]["list"] = Helper.hitCapDmgList(damageObject["crit"]["list"], settings);
        //add up damages
        damageObject["non-crit"]["list"] = Helper.listAdder(damageObject["non-crit"]["list"], splitSoul);
        damageObject["crit"]["list"] = Helper.listAdder(damageObject["crit"]["list"], splitSoulCrit);
        //calc min, avg, or max depending on request
        hits.push(AVG_INS.returnDecider(damageObject, settings, abil_val));
    }
    //calc total damage
    hits.push(Helper.totalDamageCalc(hits));
    return Helper.flooredList(hits);
}
$59766573267b885a$exports = $59766573267b885a$var$touch_of_death;


var $ef37b692f6be5a5b$exports = {};









var $iTwOG = parcelRequire("iTwOG");
var $ef37b692f6be5a5b$require$channel = $iTwOG.channel;
function $ef37b692f6be5a5b$var$skeleton_auto(type, settings, numberOfHits) {
    const AD_INS = new $8210cabbf2009db7$exports();
    const NPC_INS = new $0b0ce906f245b61e$exports();
    const HIT_INS = new $38e9911dfd02e8c3$exports();
    const CRIT_INS = new $9022c26e3583e5c9$exports();
    const AVG_INS = new $ef1e4825cfacbaa5$exports();
    const Helper = new $87be9f626a9244b9$exports();
    let abil_val = "skeleton auto";
    const fixedPercent = $b2adda9f5b90aaf8$exports.abilities[abil_val]["fixed percent"];
    const variablePercent = $b2adda9f5b90aaf8$exports.abilities[abil_val]["variable percent"];
    settings["category"] = $b2adda9f5b90aaf8$exports.abilities[abil_val]["category"];
    const hits = [];
    for(var hitsplat = 0; hitsplat < numberOfHits; hitsplat++){
        const damageObject = Helper.damageObjectCreator(settings);
        //calculates ability damage
        let AD = AD_INS.calcAd(type, settings);
        //sets fixed and variable damage
        let fixed = Math.floor(AD * fixedPercent);
        let variable = Math.floor(AD * variablePercent);
        //applies on-hit effects
        let onHit = HIT_INS.calcOnHit(fixed, variable, type, $b2adda9f5b90aaf8$exports.abilities[abil_val]["on hit effects"], settings);
        //sets up for further calculations
        damageObject["non-crit"]["list"] = Helper.baseDamageListCreator(onHit[0], onHit[1]);
        //apply crit dmg
        damageObject["crit"]["list"] = CRIT_INS.critDamageList(damageObject["non-crit"]["list"], settings);
        //apply on-npc effects and hitcaps
        damageObject["non-crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["non-crit"]["list"], settings, AD);
        damageObject["crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["crit"]["list"], settings, AD);
        //rage stacks
        for(var i = 0; i < damageObject["non-crit"]["list"].length; i++){
            damageObject["non-crit"]["list"][i] = damageObject["non-crit"]["list"][i] * (1 + settings["skeleton rage stacks"] * 0.03);
            damageObject["crit"]["list"][i] = damageObject["crit"]["list"][i] * (1 + settings["skeleton rage stacks"] * 0.03);
        }
        //apply hit caps
        damageObject["non-crit"]["list"] = Helper.hitCapDmgList(damageObject["non-crit"]["list"], settings);
        damageObject["crit"]["list"] = Helper.hitCapDmgList(damageObject["crit"]["list"], settings);
        //calc min, avg, or max depending on request
        hits.push(AVG_INS.returnDecider(damageObject, settings, abil_val));
        if (settings["skeleton rage stacks"] < 25) settings["skeleton rage stacks"] = settings["skeleton rage stacks"] + 1;
    }
    //calc total damage
    hits.push(Helper.totalDamageCalc(hits));
    return Helper.flooredList(hits);
}
$ef37b692f6be5a5b$exports = $ef37b692f6be5a5b$var$skeleton_auto;


var $2f28a313050082f3$exports = {};


function $2f28a313050082f3$var$command_skeleton(type, settings, numberOfHits) {
    /* const Helper = new NecroHelper(); 
    hits = []
    for (var i=0; i <10; i++) {
        hits.push(auto(type,settings,numberOfHits)[0]);
    }
    hits.push(Helper.totalDamageCalc(hits));
    return hits */ return $ef37b692f6be5a5b$exports(type, settings, 10);
}
$2f28a313050082f3$exports = $2f28a313050082f3$var$command_skeleton;


var $14614ffd66c712d6$exports = {};









var $iTwOG = parcelRequire("iTwOG");
var $14614ffd66c712d6$require$channel = $iTwOG.channel;
function $14614ffd66c712d6$var$ghost_auto(type, settings, numberOfHits) {
    const AD_INS = new $8210cabbf2009db7$exports();
    const NPC_INS = new $0b0ce906f245b61e$exports();
    const HIT_INS = new $38e9911dfd02e8c3$exports();
    const CRIT_INS = new $9022c26e3583e5c9$exports();
    const AVG_INS = new $ef1e4825cfacbaa5$exports();
    const Helper = new $87be9f626a9244b9$exports();
    let abil_val = "ghost auto";
    const fixedPercent = $b2adda9f5b90aaf8$exports.abilities[abil_val]["fixed percent"];
    const variablePercent = $b2adda9f5b90aaf8$exports.abilities[abil_val]["variable percent"];
    settings["category"] = $b2adda9f5b90aaf8$exports.abilities[abil_val]["category"];
    const hits = [];
    for(var hitsplat = 0; hitsplat < numberOfHits; hitsplat++){
        const damageObject = Helper.damageObjectCreator(settings);
        //calculates ability damage
        let AD = AD_INS.calcAd(type, settings);
        //sets fixed and variable damage
        let fixed = Math.floor(AD * fixedPercent);
        let variable = Math.floor(AD * variablePercent);
        //applies on-hit effects
        let onHit = HIT_INS.calcOnHit(fixed, variable, type, $b2adda9f5b90aaf8$exports.abilities[abil_val]["on hit effects"], settings);
        //sets up for further calculations
        damageObject["non-crit"]["list"] = Helper.baseDamageListCreator(onHit[0], onHit[1]);
        //apply crit dmg
        damageObject["crit"]["list"] = CRIT_INS.critDamageList(damageObject["non-crit"]["list"], settings);
        //apply on-npc effects and hitcaps
        damageObject["non-crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["non-crit"]["list"], settings, AD);
        damageObject["crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["crit"]["list"], settings, AD);
        //apply hit caps
        damageObject["non-crit"]["list"] = Helper.hitCapDmgList(damageObject["non-crit"]["list"], settings);
        damageObject["crit"]["list"] = Helper.hitCapDmgList(damageObject["crit"]["list"], settings);
        //calc min, avg, or max depending on request
        hits.push(AVG_INS.returnDecider(damageObject, settings, abil_val));
    }
    //calc total damage
    hits.push(Helper.totalDamageCalc(hits));
    return Helper.flooredList(hits);
}
$14614ffd66c712d6$exports = $14614ffd66c712d6$var$ghost_auto;


var $e445a555f5c01518$exports = {};









var $iTwOG = parcelRequire("iTwOG");
var $e445a555f5c01518$require$channel = $iTwOG.channel;
function $e445a555f5c01518$var$zombie_auto(type, settings, numberOfHits) {
    const AD_INS = new $8210cabbf2009db7$exports();
    const NPC_INS = new $0b0ce906f245b61e$exports();
    const HIT_INS = new $38e9911dfd02e8c3$exports();
    const CRIT_INS = new $9022c26e3583e5c9$exports();
    const AVG_INS = new $ef1e4825cfacbaa5$exports();
    const Helper = new $87be9f626a9244b9$exports();
    let abil_val = "zombie auto";
    const fixedPercent = $b2adda9f5b90aaf8$exports.abilities[abil_val]["fixed percent"];
    const variablePercent = $b2adda9f5b90aaf8$exports.abilities[abil_val]["variable percent"];
    settings["category"] = $b2adda9f5b90aaf8$exports.abilities[abil_val]["category"];
    const hits = [];
    for(var hitsplat = 0; hitsplat < numberOfHits; hitsplat++){
        const damageObject = Helper.damageObjectCreator(settings);
        //calculates ability damage
        let AD = AD_INS.calcAd(type, settings);
        //sets fixed and variable damage
        let fixed = Math.floor(AD * fixedPercent);
        let variable = Math.floor(AD * variablePercent);
        //applies on-hit effects
        let onHit = HIT_INS.calcOnHit(fixed, variable, type, $b2adda9f5b90aaf8$exports.abilities[abil_val]["on hit effects"], settings);
        //sets up for further calculations
        damageObject["non-crit"]["list"] = Helper.baseDamageListCreator(onHit[0], onHit[1]);
        //apply crit dmg
        damageObject["crit"]["list"] = CRIT_INS.critDamageList(damageObject["non-crit"]["list"], settings);
        //apply on-npc effects and hitcaps
        damageObject["non-crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["non-crit"]["list"], settings, AD);
        damageObject["crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["crit"]["list"], settings, AD);
        //apply hit caps
        damageObject["non-crit"]["list"] = Helper.hitCapDmgList(damageObject["non-crit"]["list"], settings);
        damageObject["crit"]["list"] = Helper.hitCapDmgList(damageObject["crit"]["list"], settings);
        //calc min, avg, or max depending on request
        hits.push(AVG_INS.returnDecider(damageObject, settings, abil_val));
    }
    //calc total damage
    hits.push(Helper.totalDamageCalc(hits));
    return Helper.flooredList(hits);
}
$e445a555f5c01518$exports = $e445a555f5c01518$var$zombie_auto;


var $7b53623cf7c1a167$exports = {};









var $iTwOG = parcelRequire("iTwOG");
var $7b53623cf7c1a167$require$channel = $iTwOG.channel;
function $7b53623cf7c1a167$var$command_zombie(type, settings, numberOfHits) {
    const AD_INS = new $8210cabbf2009db7$exports();
    const NPC_INS = new $0b0ce906f245b61e$exports();
    const HIT_INS = new $38e9911dfd02e8c3$exports();
    const CRIT_INS = new $9022c26e3583e5c9$exports();
    const AVG_INS = new $ef1e4825cfacbaa5$exports();
    const Helper = new $87be9f626a9244b9$exports();
    let abil_val = "command zombie";
    const fixedPercent = $b2adda9f5b90aaf8$exports.abilities[abil_val]["fixed percent"];
    const variablePercent = $b2adda9f5b90aaf8$exports.abilities[abil_val]["variable percent"];
    settings["category"] = $b2adda9f5b90aaf8$exports.abilities[abil_val]["category"];
    const hits = [];
    for(var hitsplat = 0; hitsplat < numberOfHits; hitsplat++){
        const damageObject = Helper.damageObjectCreator(settings);
        //calculates ability damage
        let AD = AD_INS.calcAd(type, settings);
        //sets fixed and variable damage
        let fixed = Math.floor(AD * fixedPercent);
        let variable = Math.floor(AD * variablePercent);
        //applies on-hit effects
        let onHit = HIT_INS.calcOnHit(fixed, variable, type, $b2adda9f5b90aaf8$exports.abilities[abil_val]["on hit effects"], settings);
        //sets up for further calculations
        damageObject["non-crit"]["list"] = Helper.baseDamageListCreator(onHit[0], onHit[1]);
        //apply crit dmg
        damageObject["crit"]["list"] = CRIT_INS.critDamageList(damageObject["non-crit"]["list"], settings);
        //apply on-npc effects and hitcaps
        damageObject["non-crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["non-crit"]["list"], settings, AD);
        damageObject["crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["crit"]["list"], settings, AD);
        //split soul
        splitSoul = $6a784de5f5a996cd$exports(damageObject["non-crit"]["list"], settings);
        splitSoulCrit = $6a784de5f5a996cd$exports(damageObject["crit"]["list"], settings);
        //apply hit caps
        damageObject["non-crit"]["list"] = Helper.hitCapDmgList(damageObject["non-crit"]["list"], settings);
        damageObject["crit"]["list"] = Helper.hitCapDmgList(damageObject["crit"]["list"], settings);
        //add up damages
        damageObject["non-crit"]["list"] = Helper.listAdder(damageObject["non-crit"]["list"], splitSoul);
        damageObject["crit"]["list"] = Helper.listAdder(damageObject["crit"]["list"], splitSoulCrit);
        //calc min, avg, or max depending on request
        hits.push(AVG_INS.returnDecider(damageObject, settings, abil_val));
    }
    //calc total damage
    hits.push(Helper.totalDamageCalc(hits));
    return Helper.flooredList(hits);
}
$7b53623cf7c1a167$exports = $7b53623cf7c1a167$var$command_zombie;


var $c0fde8189f8ef7e7$exports = {};









var $iTwOG = parcelRequire("iTwOG");
var $c0fde8189f8ef7e7$require$channel = $iTwOG.channel;
function $c0fde8189f8ef7e7$var$finger_of_death(type, settings, numberOfHits) {
    const AD_INS = new $8210cabbf2009db7$exports();
    const NPC_INS = new $0b0ce906f245b61e$exports();
    const HIT_INS = new $38e9911dfd02e8c3$exports();
    const CRIT_INS = new $9022c26e3583e5c9$exports();
    const AVG_INS = new $ef1e4825cfacbaa5$exports();
    const Helper = new $87be9f626a9244b9$exports();
    let abil_val = "finger of death";
    const fixedPercent = $b2adda9f5b90aaf8$exports.abilities[abil_val]["fixed percent"];
    const variablePercent = $b2adda9f5b90aaf8$exports.abilities[abil_val]["variable percent"];
    settings["category"] = $b2adda9f5b90aaf8$exports.abilities[abil_val]["category"];
    const hits = [];
    for(var hitsplat = 0; hitsplat < numberOfHits; hitsplat++){
        const damageObject = Helper.damageObjectCreator(settings);
        //calculates ability damage
        let AD = AD_INS.calcAd(type, settings);
        //sets fixed and variable damage
        let fixed = Math.floor(AD * fixedPercent);
        let variable = Math.floor(AD * variablePercent);
        //applies on-hit effects
        let onHit = HIT_INS.calcOnHit(fixed, variable, type, $b2adda9f5b90aaf8$exports.abilities[abil_val]["on hit effects"], settings);
        //sets up for further calculations
        damageObject["non-crit"]["list"] = Helper.baseDamageListCreator(onHit[0], onHit[1]);
        //apply crit dmg
        damageObject["crit"]["list"] = CRIT_INS.critDamageList(damageObject["non-crit"]["list"], settings);
        //apply on-npc effects and hitcaps
        damageObject["non-crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["non-crit"]["list"], settings, AD);
        damageObject["crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["crit"]["list"], settings, AD);
        //split soul
        splitSoul = $6a784de5f5a996cd$exports(damageObject["non-crit"]["list"], settings);
        splitSoulCrit = $6a784de5f5a996cd$exports(damageObject["crit"]["list"], settings);
        //apply hit caps
        damageObject["non-crit"]["list"] = Helper.hitCapDmgList(damageObject["non-crit"]["list"], settings);
        damageObject["crit"]["list"] = Helper.hitCapDmgList(damageObject["crit"]["list"], settings);
        //add up damages
        damageObject["non-crit"]["list"] = Helper.listAdder(damageObject["non-crit"]["list"], splitSoul);
        damageObject["crit"]["list"] = Helper.listAdder(damageObject["crit"]["list"], splitSoulCrit);
        //calc min, avg, or max depending on request
        hits.push(AVG_INS.returnDecider(damageObject, settings, abil_val));
    }
    //calc total damage
    hits.push(Helper.totalDamageCalc(hits));
    return Helper.flooredList(hits);
}
$c0fde8189f8ef7e7$exports = $c0fde8189f8ef7e7$var$finger_of_death;


var $6f6dbf4742af5d81$exports = {};









var $iTwOG = parcelRequire("iTwOG");
var $6f6dbf4742af5d81$require$channel = $iTwOG.channel;
function $6f6dbf4742af5d81$var$death_skulls(type, settings, numberOfHits) {
    const AD_INS = new $8210cabbf2009db7$exports();
    const NPC_INS = new $0b0ce906f245b61e$exports();
    const HIT_INS = new $38e9911dfd02e8c3$exports();
    const CRIT_INS = new $9022c26e3583e5c9$exports();
    const AVG_INS = new $ef1e4825cfacbaa5$exports();
    const Helper = new $87be9f626a9244b9$exports();
    let abil_val = "death skulls";
    const fixedPercent = $b2adda9f5b90aaf8$exports.abilities[abil_val]["fixed percent"];
    const variablePercent = $b2adda9f5b90aaf8$exports.abilities[abil_val]["variable percent"];
    settings["category"] = $b2adda9f5b90aaf8$exports.abilities[abil_val]["category"];
    const hits = [];
    numberOfHits = 3;
    if (settings["cape"] === "igneous kal-mor") numberOfHits = 4;
    for(var hitsplat = 0; hitsplat < numberOfHits; hitsplat++){
        const damageObject = Helper.damageObjectCreator(settings);
        //calculates ability damage
        let AD = AD_INS.calcAd(type, settings);
        //sets fixed and variable damage
        let fixed = Math.floor(AD * fixedPercent);
        let variable = Math.floor(AD * variablePercent);
        //applies on-hit effects
        let onHit = HIT_INS.calcOnHit(fixed, variable, type, $b2adda9f5b90aaf8$exports.abilities[abil_val]["on hit effects"], settings);
        //sets up for further calculations
        damageObject["non-crit"]["list"] = Helper.baseDamageListCreator(onHit[0], onHit[1]);
        //apply crit dmg
        damageObject["crit"]["list"] = CRIT_INS.critDamageList(damageObject["non-crit"]["list"], settings);
        //apply on-npc effects and hitcaps
        damageObject["non-crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["non-crit"]["list"], settings, AD);
        damageObject["crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["crit"]["list"], settings, AD);
        //split soul
        splitSoul = $6a784de5f5a996cd$exports(damageObject["non-crit"]["list"], settings);
        splitSoulCrit = $6a784de5f5a996cd$exports(damageObject["crit"]["list"], settings);
        //apply hit caps
        damageObject["non-crit"]["list"] = Helper.hitCapDmgList(damageObject["non-crit"]["list"], settings);
        damageObject["crit"]["list"] = Helper.hitCapDmgList(damageObject["crit"]["list"], settings);
        //add up damages
        damageObject["non-crit"]["list"] = Helper.listAdder(damageObject["non-crit"]["list"], splitSoul);
        damageObject["crit"]["list"] = Helper.listAdder(damageObject["crit"]["list"], splitSoulCrit);
        //calc min, avg, or max depending on request
        hits.push(AVG_INS.returnDecider(damageObject, settings, abil_val));
    }
    //calc total damage
    hits.push(Helper.totalDamageCalc(hits));
    return Helper.flooredList(hits);
}
$6f6dbf4742af5d81$exports = $6f6dbf4742af5d81$var$death_skulls;


var $d870c8f3e2baed42$exports = {};









var $iTwOG = parcelRequire("iTwOG");
var $d870c8f3e2baed42$require$channel = $iTwOG.channel;
function $d870c8f3e2baed42$var$soul_strike(type, settings, numberOfHits) {
    const AD_INS = new $8210cabbf2009db7$exports();
    const NPC_INS = new $0b0ce906f245b61e$exports();
    const HIT_INS = new $38e9911dfd02e8c3$exports();
    const CRIT_INS = new $9022c26e3583e5c9$exports();
    const AVG_INS = new $ef1e4825cfacbaa5$exports();
    const Helper = new $87be9f626a9244b9$exports();
    let abil_val = "soul strike - main";
    let fixedPercent = $b2adda9f5b90aaf8$exports.abilities[abil_val]["fixed percent"];
    let variablePercent = $b2adda9f5b90aaf8$exports.abilities[abil_val]["variable percent"];
    settings["category"] = $b2adda9f5b90aaf8$exports.abilities[abil_val]["category"];
    if (settings["flanking position"] === true) {
        fixedPercent += fixedPercent * settings["flanking"] * 0.4;
        variablePercent += variablePercent * settings["flanking"] * 0.4;
    }
    const hits = [];
    for(var hitsplat = 0; hitsplat < numberOfHits; hitsplat++){
        const damageObject = Helper.damageObjectCreator(settings);
        //calculates ability damage
        let AD = AD_INS.calcAd(type, settings);
        //sets fixed and variable damage
        let fixed = Math.floor(AD * fixedPercent);
        let variable = Math.floor(AD * variablePercent);
        //applies on-hit effects
        let onHit = HIT_INS.calcOnHit(fixed, variable, type, $b2adda9f5b90aaf8$exports.abilities[abil_val]["on hit effects"], settings);
        //sets up for further calculations
        damageObject["non-crit"]["list"] = Helper.baseDamageListCreator(onHit[0], onHit[1]);
        //apply crit dmg
        damageObject["crit"]["list"] = CRIT_INS.critDamageList(damageObject["non-crit"]["list"], settings);
        //apply on-npc effects and hitcaps
        damageObject["non-crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["non-crit"]["list"], settings, AD);
        damageObject["crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["crit"]["list"], settings, AD);
        //split soul
        splitSoul = $6a784de5f5a996cd$exports(damageObject["non-crit"]["list"], settings);
        splitSoulCrit = $6a784de5f5a996cd$exports(damageObject["crit"]["list"], settings);
        //apply hit caps
        damageObject["non-crit"]["list"] = Helper.hitCapDmgList(damageObject["non-crit"]["list"], settings);
        damageObject["crit"]["list"] = Helper.hitCapDmgList(damageObject["crit"]["list"], settings);
        //add up damages
        damageObject["non-crit"]["list"] = Helper.listAdder(damageObject["non-crit"]["list"], splitSoul);
        damageObject["crit"]["list"] = Helper.listAdder(damageObject["crit"]["list"], splitSoulCrit);
        //calc min, avg, or max depending on request
        hits.push(AVG_INS.returnDecider(damageObject, settings, abil_val));
    }
    //calc total damage
    hits.push(Helper.totalDamageCalc(hits));
    return Helper.flooredList(hits);
}
$d870c8f3e2baed42$exports = $d870c8f3e2baed42$var$soul_strike;


var $df4eb160cea507c8$exports = {};









var $iTwOG = parcelRequire("iTwOG");
var $df4eb160cea507c8$require$channel = $iTwOG.channel;
function $df4eb160cea507c8$var$volley_of_souls(type, settings, numberOfHits) {
    const AD_INS = new $8210cabbf2009db7$exports();
    const NPC_INS = new $0b0ce906f245b61e$exports();
    const HIT_INS = new $38e9911dfd02e8c3$exports();
    const CRIT_INS = new $9022c26e3583e5c9$exports();
    const AVG_INS = new $ef1e4825cfacbaa5$exports();
    const Helper = new $87be9f626a9244b9$exports();
    let abil_val = "volley of souls";
    const fixedPercent = $b2adda9f5b90aaf8$exports.abilities[abil_val]["fixed percent"];
    const variablePercent = $b2adda9f5b90aaf8$exports.abilities[abil_val]["variable percent"];
    settings["category"] = $b2adda9f5b90aaf8$exports.abilities[abil_val]["category"];
    const hits = [];
    numberOfHits = 2;
    for(var hitsplat = 0; hitsplat < numberOfHits; hitsplat++){
        const damageObject = Helper.damageObjectCreator(settings);
        //calculates ability damage
        let AD = AD_INS.calcAd(type, settings);
        //sets fixed and variable damage
        let fixed = Math.floor(AD * fixedPercent);
        let variable = Math.floor(AD * variablePercent);
        //applies on-hit effects
        let onHit = HIT_INS.calcOnHit(fixed, variable, type, $b2adda9f5b90aaf8$exports.abilities[abil_val]["on hit effects"], settings);
        //sets up for further calculations
        damageObject["non-crit"]["list"] = Helper.baseDamageListCreator(onHit[0], onHit[1]);
        //apply crit dmg
        damageObject["crit"]["list"] = CRIT_INS.critDamageList(damageObject["non-crit"]["list"], settings);
        //apply on-npc effects and hitcaps
        damageObject["non-crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["non-crit"]["list"], settings, AD);
        damageObject["crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["crit"]["list"], settings, AD);
        //split soul
        splitSoul = $6a784de5f5a996cd$exports(damageObject["non-crit"]["list"], settings);
        splitSoulCrit = $6a784de5f5a996cd$exports(damageObject["crit"]["list"], settings);
        //apply hit caps
        damageObject["non-crit"]["list"] = Helper.hitCapDmgList(damageObject["non-crit"]["list"], settings);
        damageObject["crit"]["list"] = Helper.hitCapDmgList(damageObject["crit"]["list"], settings);
        //add up damages
        damageObject["non-crit"]["list"] = Helper.listAdder(damageObject["non-crit"]["list"], splitSoul);
        damageObject["crit"]["list"] = Helper.listAdder(damageObject["crit"]["list"], splitSoulCrit);
        //calc min, avg, or max depending on request
        hits.push(AVG_INS.returnDecider(damageObject, settings, abil_val));
    }
    //calc total damage
    hits.push(Helper.totalDamageCalc(hits));
    return Helper.flooredList(hits);
}
$df4eb160cea507c8$exports = $df4eb160cea507c8$var$volley_of_souls;


var $d802121fd8b8f156$exports = {};









var $iTwOG = parcelRequire("iTwOG");
var $d802121fd8b8f156$require$channel = $iTwOG.channel;
function $d802121fd8b8f156$var$volley_of_souls_3(type, settings, numberOfHits) {
    const AD_INS = new $8210cabbf2009db7$exports();
    const NPC_INS = new $0b0ce906f245b61e$exports();
    const HIT_INS = new $38e9911dfd02e8c3$exports();
    const CRIT_INS = new $9022c26e3583e5c9$exports();
    const AVG_INS = new $ef1e4825cfacbaa5$exports();
    const Helper = new $87be9f626a9244b9$exports();
    let abil_val = "volley of souls";
    const fixedPercent = $b2adda9f5b90aaf8$exports.abilities[abil_val]["fixed percent"];
    const variablePercent = $b2adda9f5b90aaf8$exports.abilities[abil_val]["variable percent"];
    settings["category"] = $b2adda9f5b90aaf8$exports.abilities[abil_val]["category"];
    const hits = [];
    numberOfHits = 3;
    for(var hitsplat = 0; hitsplat < numberOfHits; hitsplat++){
        const damageObject = Helper.damageObjectCreator(settings);
        //calculates ability damage
        let AD = AD_INS.calcAd(type, settings);
        //sets fixed and variable damage
        let fixed = Math.floor(AD * fixedPercent);
        let variable = Math.floor(AD * variablePercent);
        //applies on-hit effects
        let onHit = HIT_INS.calcOnHit(fixed, variable, type, $b2adda9f5b90aaf8$exports.abilities[abil_val]["on hit effects"], settings);
        //sets up for further calculations
        damageObject["non-crit"]["list"] = Helper.baseDamageListCreator(onHit[0], onHit[1]);
        //apply crit dmg
        damageObject["crit"]["list"] = CRIT_INS.critDamageList(damageObject["non-crit"]["list"], settings);
        //apply on-npc effects and hitcaps
        damageObject["non-crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["non-crit"]["list"], settings, AD);
        damageObject["crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["crit"]["list"], settings, AD);
        //split soul
        splitSoul = $6a784de5f5a996cd$exports(damageObject["non-crit"]["list"], settings);
        splitSoulCrit = $6a784de5f5a996cd$exports(damageObject["crit"]["list"], settings);
        //apply hit caps
        damageObject["non-crit"]["list"] = Helper.hitCapDmgList(damageObject["non-crit"]["list"], settings);
        damageObject["crit"]["list"] = Helper.hitCapDmgList(damageObject["crit"]["list"], settings);
        //add up damages
        damageObject["non-crit"]["list"] = Helper.listAdder(damageObject["non-crit"]["list"], splitSoul);
        damageObject["crit"]["list"] = Helper.listAdder(damageObject["crit"]["list"], splitSoulCrit);
        //calc min, avg, or max depending on request
        hits.push(AVG_INS.returnDecider(damageObject, settings, abil_val));
    }
    //calc total damage
    hits.push(Helper.totalDamageCalc(hits));
    return Helper.flooredList(hits);
}
$d802121fd8b8f156$exports = $d802121fd8b8f156$var$volley_of_souls_3;


var $c1065bebaf8d8e41$exports = {};









var $iTwOG = parcelRequire("iTwOG");
var $c1065bebaf8d8e41$require$channel = $iTwOG.channel;
function $c1065bebaf8d8e41$var$volley_of_souls_4(type, settings, numberOfHits) {
    const AD_INS = new $8210cabbf2009db7$exports();
    const NPC_INS = new $0b0ce906f245b61e$exports();
    const HIT_INS = new $38e9911dfd02e8c3$exports();
    const CRIT_INS = new $9022c26e3583e5c9$exports();
    const AVG_INS = new $ef1e4825cfacbaa5$exports();
    const Helper = new $87be9f626a9244b9$exports();
    let abil_val = "volley of souls";
    const fixedPercent = $b2adda9f5b90aaf8$exports.abilities[abil_val]["fixed percent"];
    const variablePercent = $b2adda9f5b90aaf8$exports.abilities[abil_val]["variable percent"];
    settings["category"] = $b2adda9f5b90aaf8$exports.abilities[abil_val]["category"];
    const hits = [];
    numberOfHits = 4;
    for(var hitsplat = 0; hitsplat < numberOfHits; hitsplat++){
        const damageObject = Helper.damageObjectCreator(settings);
        //calculates ability damage
        let AD = AD_INS.calcAd(type, settings);
        //sets fixed and variable damage
        let fixed = Math.floor(AD * fixedPercent);
        let variable = Math.floor(AD * variablePercent);
        //applies on-hit effects
        let onHit = HIT_INS.calcOnHit(fixed, variable, type, $b2adda9f5b90aaf8$exports.abilities[abil_val]["on hit effects"], settings);
        //sets up for further calculations
        damageObject["non-crit"]["list"] = Helper.baseDamageListCreator(onHit[0], onHit[1]);
        //apply crit dmg
        damageObject["crit"]["list"] = CRIT_INS.critDamageList(damageObject["non-crit"]["list"], settings);
        //apply on-npc effects and hitcaps
        damageObject["non-crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["non-crit"]["list"], settings, AD);
        damageObject["crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["crit"]["list"], settings, AD);
        //split soul
        splitSoul = $6a784de5f5a996cd$exports(damageObject["non-crit"]["list"], settings);
        splitSoulCrit = $6a784de5f5a996cd$exports(damageObject["crit"]["list"], settings);
        //apply hit caps
        damageObject["non-crit"]["list"] = Helper.hitCapDmgList(damageObject["non-crit"]["list"], settings);
        damageObject["crit"]["list"] = Helper.hitCapDmgList(damageObject["crit"]["list"], settings);
        //add up damages
        damageObject["non-crit"]["list"] = Helper.listAdder(damageObject["non-crit"]["list"], splitSoul);
        damageObject["crit"]["list"] = Helper.listAdder(damageObject["crit"]["list"], splitSoulCrit);
        //calc min, avg, or max depending on request
        hits.push(AVG_INS.returnDecider(damageObject, settings, abil_val));
    }
    //calc total damage
    hits.push(Helper.totalDamageCalc(hits));
    return Helper.flooredList(hits);
}
$c1065bebaf8d8e41$exports = $c1065bebaf8d8e41$var$volley_of_souls_4;


var $f2c3a7827988addd$exports = {};









var $iTwOG = parcelRequire("iTwOG");
var $f2c3a7827988addd$require$channel = $iTwOG.channel;
function $f2c3a7827988addd$var$volley_of_souls_5(type, settings, numberOfHits) {
    const AD_INS = new $8210cabbf2009db7$exports();
    const NPC_INS = new $0b0ce906f245b61e$exports();
    const HIT_INS = new $38e9911dfd02e8c3$exports();
    const CRIT_INS = new $9022c26e3583e5c9$exports();
    const AVG_INS = new $ef1e4825cfacbaa5$exports();
    const Helper = new $87be9f626a9244b9$exports();
    let abil_val = "volley of souls";
    const fixedPercent = $b2adda9f5b90aaf8$exports.abilities[abil_val]["fixed percent"];
    const variablePercent = $b2adda9f5b90aaf8$exports.abilities[abil_val]["variable percent"];
    settings["category"] = $b2adda9f5b90aaf8$exports.abilities[abil_val]["category"];
    const hits = [];
    numberOfHits = 5;
    for(var hitsplat = 0; hitsplat < numberOfHits; hitsplat++){
        const damageObject = Helper.damageObjectCreator(settings);
        //calculates ability damage
        let AD = AD_INS.calcAd(type, settings);
        //sets fixed and variable damage
        let fixed = Math.floor(AD * fixedPercent);
        let variable = Math.floor(AD * variablePercent);
        //applies on-hit effects
        let onHit = HIT_INS.calcOnHit(fixed, variable, type, $b2adda9f5b90aaf8$exports.abilities[abil_val]["on hit effects"], settings);
        //sets up for further calculations
        damageObject["non-crit"]["list"] = Helper.baseDamageListCreator(onHit[0], onHit[1]);
        //apply crit dmg
        damageObject["crit"]["list"] = CRIT_INS.critDamageList(damageObject["non-crit"]["list"], settings);
        //apply on-npc effects and hitcaps
        damageObject["non-crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["non-crit"]["list"], settings, AD);
        damageObject["crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["crit"]["list"], settings, AD);
        //split soul
        splitSoul = $6a784de5f5a996cd$exports(damageObject["non-crit"]["list"], settings);
        splitSoulCrit = $6a784de5f5a996cd$exports(damageObject["crit"]["list"], settings);
        //apply hit caps
        damageObject["non-crit"]["list"] = Helper.hitCapDmgList(damageObject["non-crit"]["list"], settings);
        damageObject["crit"]["list"] = Helper.hitCapDmgList(damageObject["crit"]["list"], settings);
        //add up damages
        damageObject["non-crit"]["list"] = Helper.listAdder(damageObject["non-crit"]["list"], splitSoul);
        damageObject["crit"]["list"] = Helper.listAdder(damageObject["crit"]["list"], splitSoulCrit);
        //calc min, avg, or max depending on request
        hits.push(AVG_INS.returnDecider(damageObject, settings, abil_val));
    }
    //calc total damage
    hits.push(Helper.totalDamageCalc(hits));
    return Helper.flooredList(hits);
}
$f2c3a7827988addd$exports = $f2c3a7827988addd$var$volley_of_souls_5;


var $6f81412cd0c84f61$exports = {};









var $iTwOG = parcelRequire("iTwOG");
var $6f81412cd0c84f61$require$channel = $iTwOG.channel;
function $6f81412cd0c84f61$var$spectral_scythe_1(type, settings, numberOfHits) {
    const AD_INS = new $8210cabbf2009db7$exports();
    const NPC_INS = new $0b0ce906f245b61e$exports();
    const HIT_INS = new $38e9911dfd02e8c3$exports();
    const CRIT_INS = new $9022c26e3583e5c9$exports();
    const AVG_INS = new $ef1e4825cfacbaa5$exports();
    const Helper = new $87be9f626a9244b9$exports();
    let abil_val = "spectral scythe - 1";
    const fixedPercent = $b2adda9f5b90aaf8$exports.abilities[abil_val]["fixed percent"];
    const variablePercent = $b2adda9f5b90aaf8$exports.abilities[abil_val]["variable percent"];
    settings["category"] = $b2adda9f5b90aaf8$exports.abilities[abil_val]["category"];
    const hits = [];
    for(var hitsplat = 0; hitsplat < numberOfHits; hitsplat++){
        const damageObject = Helper.damageObjectCreator(settings);
        //calculates ability damage
        let AD = AD_INS.calcAd(type, settings); //AD_INS.calcAd(type,settings);
        //sets fixed and variable damage
        let fixed = Math.floor(AD * fixedPercent);
        let variable = Math.floor(AD * variablePercent);
        //applies on-hit effects
        let onHit = HIT_INS.calcOnHit(fixed, variable, type, $b2adda9f5b90aaf8$exports.abilities[abil_val]["on hit effects"], settings);
        //sets up for further calculations
        damageObject["non-crit"]["list"] = Helper.baseDamageListCreator(onHit[0], onHit[1]);
        //apply crit dmg
        damageObject["crit"]["list"] = CRIT_INS.critDamageList(damageObject["non-crit"]["list"], settings);
        //apply on-npc effects and hitcaps
        damageObject["non-crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["non-crit"]["list"], settings, AD);
        damageObject["crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["crit"]["list"], settings, AD);
        //split soul
        splitSoul = $6a784de5f5a996cd$exports(damageObject["non-crit"]["list"], settings);
        splitSoulCrit = $6a784de5f5a996cd$exports(damageObject["crit"]["list"], settings);
        //apply hit caps
        damageObject["non-crit"]["list"] = Helper.hitCapDmgList(damageObject["non-crit"]["list"], settings);
        damageObject["crit"]["list"] = Helper.hitCapDmgList(damageObject["crit"]["list"], settings);
        //add up damages
        damageObject["non-crit"]["list"] = Helper.listAdder(damageObject["non-crit"]["list"], splitSoul);
        damageObject["crit"]["list"] = Helper.listAdder(damageObject["crit"]["list"], splitSoulCrit);
        //calc min, avg, or max depending on request
        hits.push(AVG_INS.returnDecider(damageObject, settings, abil_val));
    }
    //calc total damage
    hits.push(Helper.totalDamageCalc(hits));
    return Helper.flooredList(hits);
}
$6f81412cd0c84f61$exports = $6f81412cd0c84f61$var$spectral_scythe_1;


var $0542c96c6b90899c$exports = {};









var $iTwOG = parcelRequire("iTwOG");
var $0542c96c6b90899c$require$channel = $iTwOG.channel;
function $0542c96c6b90899c$var$spectral_scythe_2(type, settings, numberOfHits) {
    const AD_INS = new $8210cabbf2009db7$exports();
    const NPC_INS = new $0b0ce906f245b61e$exports();
    const HIT_INS = new $38e9911dfd02e8c3$exports();
    const CRIT_INS = new $9022c26e3583e5c9$exports();
    const AVG_INS = new $ef1e4825cfacbaa5$exports();
    const Helper = new $87be9f626a9244b9$exports();
    let abil_val = "spectral scythe - 2";
    const fixedPercent = $b2adda9f5b90aaf8$exports.abilities[abil_val]["fixed percent"];
    const variablePercent = $b2adda9f5b90aaf8$exports.abilities[abil_val]["variable percent"];
    settings["category"] = $b2adda9f5b90aaf8$exports.abilities[abil_val]["category"];
    const hits = [];
    for(var hitsplat = 0; hitsplat < numberOfHits; hitsplat++){
        const damageObject = Helper.damageObjectCreator(settings);
        //calculates ability damage
        let AD = AD_INS.calcAd(type, settings); //AD_INS.calcAd(type,settings);
        //sets fixed and variable damage
        let fixed = Math.floor(AD * fixedPercent);
        let variable = Math.floor(AD * variablePercent);
        //applies on-hit effects
        let onHit = HIT_INS.calcOnHit(fixed, variable, type, $b2adda9f5b90aaf8$exports.abilities[abil_val]["on hit effects"], settings);
        //sets up for further calculations
        damageObject["non-crit"]["list"] = Helper.baseDamageListCreator(onHit[0], onHit[1]);
        //apply crit dmg
        damageObject["crit"]["list"] = CRIT_INS.critDamageList(damageObject["non-crit"]["list"], settings);
        //apply on-npc effects and hitcaps
        damageObject["non-crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["non-crit"]["list"], settings, AD);
        damageObject["crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["crit"]["list"], settings, AD);
        //split soul
        splitSoul = $6a784de5f5a996cd$exports(damageObject["non-crit"]["list"], settings);
        splitSoulCrit = $6a784de5f5a996cd$exports(damageObject["crit"]["list"], settings);
        //apply hit caps
        damageObject["non-crit"]["list"] = Helper.hitCapDmgList(damageObject["non-crit"]["list"], settings);
        damageObject["crit"]["list"] = Helper.hitCapDmgList(damageObject["crit"]["list"], settings);
        //add up damages
        damageObject["non-crit"]["list"] = Helper.listAdder(damageObject["non-crit"]["list"], splitSoul);
        damageObject["crit"]["list"] = Helper.listAdder(damageObject["crit"]["list"], splitSoulCrit);
        //calc min, avg, or max depending on request
        hits.push(AVG_INS.returnDecider(damageObject, settings, abil_val));
    }
    //calc total damage
    hits.push(Helper.totalDamageCalc(hits));
    return Helper.flooredList(hits);
}
$0542c96c6b90899c$exports = $0542c96c6b90899c$var$spectral_scythe_2;


var $e749d42b5275b270$exports = {};









var $iTwOG = parcelRequire("iTwOG");
var $e749d42b5275b270$require$channel = $iTwOG.channel;
function $e749d42b5275b270$var$spectral_scythe_3(type, settings, numberOfHits) {
    const AD_INS = new $8210cabbf2009db7$exports();
    const NPC_INS = new $0b0ce906f245b61e$exports();
    const HIT_INS = new $38e9911dfd02e8c3$exports();
    const CRIT_INS = new $9022c26e3583e5c9$exports();
    const AVG_INS = new $ef1e4825cfacbaa5$exports();
    const Helper = new $87be9f626a9244b9$exports();
    let abil_val = "spectral scythe - 3";
    const fixedPercent = $b2adda9f5b90aaf8$exports.abilities[abil_val]["fixed percent"];
    const variablePercent = $b2adda9f5b90aaf8$exports.abilities[abil_val]["variable percent"];
    settings["category"] = $b2adda9f5b90aaf8$exports.abilities[abil_val]["category"];
    const hits = [];
    for(var hitsplat = 0; hitsplat < numberOfHits; hitsplat++){
        const damageObject = Helper.damageObjectCreator(settings);
        //calculates ability damage
        let AD = AD_INS.calcAd(type, settings); //AD_INS.calcAd(type,settings);
        //sets fixed and variable damage
        let fixed = Math.floor(AD * fixedPercent);
        let variable = Math.floor(AD * variablePercent);
        //applies on-hit effects
        let onHit = HIT_INS.calcOnHit(fixed, variable, type, $b2adda9f5b90aaf8$exports.abilities[abil_val]["on hit effects"], settings);
        //sets up for further calculations
        damageObject["non-crit"]["list"] = Helper.baseDamageListCreator(onHit[0], onHit[1]);
        //apply crit dmg
        damageObject["crit"]["list"] = CRIT_INS.critDamageList(damageObject["non-crit"]["list"], settings);
        //apply on-npc effects and hitcaps
        damageObject["non-crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["non-crit"]["list"], settings, AD);
        damageObject["crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["crit"]["list"], settings, AD);
        //split soul
        splitSoul = $6a784de5f5a996cd$exports(damageObject["non-crit"]["list"], settings);
        splitSoulCrit = $6a784de5f5a996cd$exports(damageObject["crit"]["list"], settings);
        //apply hit caps
        damageObject["non-crit"]["list"] = Helper.hitCapDmgList(damageObject["non-crit"]["list"], settings);
        damageObject["crit"]["list"] = Helper.hitCapDmgList(damageObject["crit"]["list"], settings);
        //add up damages
        damageObject["non-crit"]["list"] = Helper.listAdder(damageObject["non-crit"]["list"], splitSoul);
        damageObject["crit"]["list"] = Helper.listAdder(damageObject["crit"]["list"], splitSoulCrit);
        //calc min, avg, or max depending on request
        hits.push(AVG_INS.returnDecider(damageObject, settings, abil_val));
    }
    //calc total damage
    hits.push(Helper.totalDamageCalc(hits));
    return Helper.flooredList(hits);
}
$e749d42b5275b270$exports = $e749d42b5275b270$var$spectral_scythe_3;


var $9b57fe0d740edc39$exports = {};









var $iTwOG = parcelRequire("iTwOG");
var $9b57fe0d740edc39$require$channel = $iTwOG.channel;
function $9b57fe0d740edc39$var$blood_siphon(type, settings, numberOfHits) {
    const AD_INS = new $8210cabbf2009db7$exports();
    const NPC_INS = new $0b0ce906f245b61e$exports();
    const HIT_INS = new $38e9911dfd02e8c3$exports();
    const CRIT_INS = new $9022c26e3583e5c9$exports();
    const AVG_INS = new $ef1e4825cfacbaa5$exports();
    const Helper = new $87be9f626a9244b9$exports();
    let abil_val = "blood siphon - hit";
    const fixedPercent = $b2adda9f5b90aaf8$exports.abilities[abil_val]["fixed percent"];
    const variablePercent = $b2adda9f5b90aaf8$exports.abilities[abil_val]["variable percent"];
    settings["category"] = $b2adda9f5b90aaf8$exports.abilities[abil_val]["category"];
    const hits = [];
    for(var hitsplat = 0; hitsplat < numberOfHits; hitsplat++){
        const damageObject = Helper.damageObjectCreator(settings);
        //calculates ability damage
        let AD = AD_INS.calcAd(type, settings); //AD_INS.calcAd(type,settings);
        //sets fixed and variable damage
        let fixed = Math.floor(AD * fixedPercent);
        let variable = Math.floor(AD * variablePercent);
        //applies on-hit effects
        let onHit = HIT_INS.calcOnHit(fixed, variable, type, $b2adda9f5b90aaf8$exports.abilities[abil_val]["on hit effects"], settings);
        //sets up for further calculations
        damageObject["non-crit"]["list"] = Helper.baseDamageListCreator(onHit[0], onHit[1]);
        //apply crit dmg
        damageObject["crit"]["list"] = CRIT_INS.critDamageList(damageObject["non-crit"]["list"], settings);
        //apply on-npc effects and hitcaps
        damageObject["non-crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["non-crit"]["list"], settings, AD);
        damageObject["crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["crit"]["list"], settings, AD);
        //split soul
        splitSoul = $6a784de5f5a996cd$exports(damageObject["non-crit"]["list"], settings);
        splitSoulCrit = $6a784de5f5a996cd$exports(damageObject["crit"]["list"], settings);
        //split soul
        splitSoul = $6a784de5f5a996cd$exports(damageObject["non-crit"]["list"], settings);
        splitSoulCrit = $6a784de5f5a996cd$exports(damageObject["crit"]["list"], settings);
        //apply hit caps
        damageObject["non-crit"]["list"] = Helper.hitCapDmgList(damageObject["non-crit"]["list"], settings);
        damageObject["crit"]["list"] = Helper.hitCapDmgList(damageObject["crit"]["list"], settings);
        //add up damages
        damageObject["non-crit"]["list"] = Helper.listAdder(damageObject["non-crit"]["list"], splitSoul);
        damageObject["crit"]["list"] = Helper.listAdder(damageObject["crit"]["list"], splitSoulCrit);
        //calc min, avg, or max depending on request
        hits.push(AVG_INS.returnDecider(damageObject, settings, abil_val));
    }
    //calc total damage
    hits.push(Helper.totalDamageCalc(hits));
    return Helper.flooredList(hits);
}
$9b57fe0d740edc39$exports = $9b57fe0d740edc39$var$blood_siphon;


var $9337054c2a48619d$exports = {};







var $e741b95d299210d2$exports = {};









var $iTwOG = parcelRequire("iTwOG");
var $e741b95d299210d2$require$channel = $iTwOG.channel;
function $e741b95d299210d2$var$bloat_bleed(dmgList, settings, AD) {
    const AD_INS = new $8210cabbf2009db7$exports();
    const NPC_INS = new $0b0ce906f245b61e$exports();
    const HIT_INS = new $38e9911dfd02e8c3$exports();
    const CRIT_INS = new $9022c26e3583e5c9$exports();
    const AVG_INS = new $ef1e4825cfacbaa5$exports();
    const Helper = new $87be9f626a9244b9$exports();
    let abil_val = "bloat - bleed hit";
    settings["category"] = $b2adda9f5b90aaf8$exports.abilities[abil_val]["category"];
    const hits = [];
    let bleedList = [];
    for(var i = 0; i < dmgList.length; i++)bleedList.push(Math.floor(dmgList[i] / 4));
    //apply on-npc effects and hitcaps
    let dmg = NPC_INS.onNpcDamageList(bleedList, settings, AD);
    //split soul
    splitSoul = $6a784de5f5a996cd$exports(dmg, settings);
    //apply hit caps
    dmg = Helper.hitCapDmgList(dmg, settings);
    //add up damages
    dmg = Helper.listAdder(dmg, splitSoul);
    for(var i = 0; i < dmgList.length; i++)dmg[i] = 10 * dmg[i];
    dmg = Helper.listAdder(dmg, dmgList);
    //calc total damage
    return dmg;
}
$e741b95d299210d2$exports = $e741b95d299210d2$var$bloat_bleed;




var $iTwOG = parcelRequire("iTwOG");
var $9337054c2a48619d$require$channel = $iTwOG.channel;
function $9337054c2a48619d$var$bloat(type, settings, numberOfHits) {
    const AD_INS = new $8210cabbf2009db7$exports();
    const NPC_INS = new $0b0ce906f245b61e$exports();
    const HIT_INS = new $38e9911dfd02e8c3$exports();
    const CRIT_INS = new $9022c26e3583e5c9$exports();
    const AVG_INS = new $ef1e4825cfacbaa5$exports();
    const Helper = new $87be9f626a9244b9$exports();
    let abil_val = "bloat - initial hit";
    const fixedPercent = $b2adda9f5b90aaf8$exports.abilities[abil_val]["fixed percent"];
    const variablePercent = $b2adda9f5b90aaf8$exports.abilities[abil_val]["variable percent"];
    settings["category"] = $b2adda9f5b90aaf8$exports.abilities[abil_val]["category"];
    const hits = [];
    for(var hitsplat = 0; hitsplat < numberOfHits; hitsplat++){
        const damageObject = Helper.damageObjectCreator(settings);
        //calculates ability damage
        let AD = AD_INS.calcAd(type, settings); //AD_INS.calcAd(type,settings);
        //sets fixed and variable damage
        let fixed = Math.floor(AD * fixedPercent);
        let variable = Math.floor(AD * variablePercent);
        //applies on-hit effects
        let onHit = HIT_INS.calcOnHit(fixed, variable, type, $b2adda9f5b90aaf8$exports.abilities[abil_val]["on hit effects"], settings);
        //sets up for further calculations
        damageObject["non-crit"]["list"] = Helper.baseDamageListCreator(onHit[0], onHit[1]);
        //apply crit dmg
        damageObject["crit"]["list"] = CRIT_INS.critDamageList(damageObject["non-crit"]["list"], settings);
        //apply on-npc effects and hitcaps
        damageObject["non-crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["non-crit"]["list"], settings, AD);
        damageObject["crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["crit"]["list"], settings, AD);
        //split soul
        splitSoul = $6a784de5f5a996cd$exports(damageObject["non-crit"]["list"], settings);
        splitSoulCrit = $6a784de5f5a996cd$exports(damageObject["crit"]["list"], settings);
        //split soul
        splitSoul = $6a784de5f5a996cd$exports(damageObject["non-crit"]["list"], settings);
        splitSoulCrit = $6a784de5f5a996cd$exports(damageObject["crit"]["list"], settings);
        //apply hit caps
        damageObject["non-crit"]["list"] = Helper.hitCapDmgList(damageObject["non-crit"]["list"], settings);
        damageObject["crit"]["list"] = Helper.hitCapDmgList(damageObject["crit"]["list"], settings);
        //add bleed
        damageObject["non-crit"]["list"] = $e741b95d299210d2$exports(damageObject["non-crit"]["list"], settings, AD);
        damageObject["crit"]["list"] = $e741b95d299210d2$exports(damageObject["crit"]["list"], settings, AD);
        //add up damages
        damageObject["non-crit"]["list"] = Helper.listAdder(damageObject["non-crit"]["list"], splitSoul);
        damageObject["crit"]["list"] = Helper.listAdder(damageObject["crit"]["list"], splitSoulCrit);
        //calc min, avg, or max depending on request
        hits.push(AVG_INS.returnDecider(damageObject, settings, abil_val));
    }
    //calc total damage
    hits.push(Helper.totalDamageCalc(hits));
    return Helper.flooredList(hits);
}
$9337054c2a48619d$exports = $9337054c2a48619d$var$bloat;


const $b9840a7c91872a7d$export$ed316e5830568bf6 = {
    "Necro auto": {
        title: "Necro auto",
        calc: $f1916e54569f8d04$exports,
        icon: "https://imgur.com/MVogErK.png",
        weapons: [
            "Dw"
        ]
    },
    //double damage auto
    "Soul Sap": {
        title: "Soul Sap",
        calc: $e79fee22eb9e0def$exports,
        icon: "https://imgur.com/w3wifVr.png",
        weapons: [
            "Dw"
        ]
    },
    "Touch of Death": {
        title: "Touch of Death",
        calc: $59766573267b885a$exports,
        icon: "https://imgur.com/w2C47Vu.png",
        weapons: [
            "Dw"
        ]
    },
    "Skeleton Auto": {
        title: "Skeleton auto",
        calc: $ef37b692f6be5a5b$exports,
        icon: "https://imgur.com/6OIgT8W.png",
        weapons: [
            "Dw"
        ]
    },
    "Command skeleton": {
        title: "Command skeleton",
        calc: $2f28a313050082f3$exports,
        icon: "https://imgur.com/fmnObgi.png",
        weapons: [
            "Dw"
        ]
    },
    "Ghost Auto": {
        title: "Ghost auto",
        calc: $14614ffd66c712d6$exports,
        icon: "https://imgur.com/kRqMO2J.png",
        weapons: [
            "Dw"
        ]
    },
    "Zombie Auto": {
        title: "Zombie auto",
        calc: $e445a555f5c01518$exports,
        icon: "https://imgur.com/Ku5QFiN.png",
        weapons: [
            "Dw"
        ]
    },
    "Command zombie": {
        title: "Command zombie",
        calc: $7b53623cf7c1a167$exports,
        icon: "https://imgur.com/dGRo6Ju.png",
        weapons: [
            "Dw"
        ]
    },
    "Finger of Death": {
        title: "Finger of death",
        calc: $c0fde8189f8ef7e7$exports,
        icon: "https://imgur.com/cG0MEQu.png",
        weapons: [
            "Dw"
        ]
    },
    //1.5x damage finger
    "Death Skulls": {
        title: "Death Skulls",
        calc: $6f6dbf4742af5d81$exports,
        icon: "https://imgur.com/PkLq6GN.png",
        weapons: [
            "Dw"
        ]
    },
    //death skulls 5 or 7
    "Soul strike": {
        title: "Soul strike",
        calc: $d870c8f3e2baed42$exports,
        icon: "https://i.imgur.com/vym9cV5.png",
        weapons: [
            "Dw"
        ]
    },
    //soul strike flank
    "Volley of Souls": {
        title: "Volley of Souls (2 hit)",
        calc: $df4eb160cea507c8$exports,
        icon: "https://imgur.com/WsFgZ68.png",
        weapons: [
            "Dw"
        ]
    },
    "Volley of Souls 3": {
        title: "Volley of Souls (3 hit)",
        calc: $d802121fd8b8f156$exports,
        icon: "https://imgur.com/vtqBnvu.png",
        weapons: [
            "Dw"
        ]
    },
    "Volley of Souls 4": {
        title: "Volley of Souls (4 hit)",
        calc: $c1065bebaf8d8e41$exports,
        icon: "https://imgur.com/V2NNKC9.png",
        weapons: [
            "Dw"
        ]
    },
    "Volley of Souls 5": {
        title: "Volley of Souls (5 hit)",
        calc: $f2c3a7827988addd$exports,
        icon: "https://imgur.com/QWxXIzI.png",
        weapons: [
            "Dw"
        ]
    },
    "Spectral scythe 1": {
        title: "Spectral scythe 1",
        calc: $6f81412cd0c84f61$exports,
        icon: "https://imgur.com/XgTBlsF.png",
        weapons: [
            "Dw"
        ]
    },
    "Spectral scythe 2": {
        title: "Spectral scythe 2",
        calc: $0542c96c6b90899c$exports,
        icon: "https://imgur.com/agSlUfr.png",
        weapons: [
            "Dw"
        ]
    },
    "Spectral scythe 3": {
        title: "Spectral scythe 3",
        calc: $e749d42b5275b270$exports,
        icon: "https://imgur.com/6lUsxhr.png",
        weapons: [
            "Dw"
        ]
    },
    //scythe 2
    //scythe 3
    "Blood siphon": {
        title: "Blood siphon",
        calc: $9b57fe0d740edc39$exports,
        icon: "https://imgur.com/rvscfMz.png",
        weapons: [
            "Dw"
        ]
    },
    //blood siphon aoe
    "Bloat": {
        title: "Bloat",
        calc: $9337054c2a48619d$exports,
        icon: "https://imgur.com/Aiuhjud.png",
        weapons: [
            "Dw"
        ]
    }
};


$429892bb525b619b$var$buildDamagesTable((0, $b9840a7c91872a7d$export$ed316e5830568bf6));
$429892bb525b619b$var$calculateDamages($429892bb525b619b$var$collectSettings());
const $429892bb525b619b$var$settings = document.getElementsByClassName("js--setting");
for (let setting of $429892bb525b619b$var$settings)setting.addEventListener("change", (e)=>{
    $429892bb525b619b$var$calculateDamages($429892bb525b619b$var$collectSettings());
});
function $429892bb525b619b$var$collectSettings() {
    // Have default settings here
    const settings = {
        "minavgmax": "avg",
        "category": "none",
        "ability damage": 0,
        "level": 120,
        "potion": "elder overload",
        "two-handed weapon": 1,
        "main-hand weapon": "omni guard",
        "off-hand weapon": "soulbound lantern",
        "shield": 1,
        "defender": 1,
        "helmet": "crown of the first necromancer",
        "body": "robe top of the first necromancer",
        "leg": "robe bottom of the first necromancer",
        "gloves": "hand wraps of the first necromancer",
        "boots": "foot wraps of the first necromancer",
        "necklace": "essence of finality amulet (or)",
        "ring": "reavers",
        "cape": "igneous kal-mor",
        "pocket slot": "grimoire",
        "reaper crew": true,
        "level 20 armour": true,
        //perks
        "precise": 0,
        "equilibrium": 0,
        "genocidal percent": 0,
        "spendthrift": 0,
        "ruthless rank": 0,
        "ruthless stacks": 0,
        "slayer perk": false,
        "biting": 4,
        "flanking": 0,
        "flanking position": false,
        "aura": "mahjarrat",
        "split soul": true,
        "bonus": 0,
        "hitcap": 30000,
        //on-cast effects
        "Zamorak balance of power": 0,
        "Sophanem corrupted": 0,
        "Raksha inner power": 0,
        //on-hit effects
        //pre-shared effects
        "stone of jas": 0,
        //shared
        "revenge stacks": 0,
        "prayer": "ruination",
        "ful": false,
        //pvn only
        "slayer helmet": "none",
        "fort forinthry guardhouse": false,
        "Salve amulet": false,
        "ripper demon passive": 0,
        //unknown order
        "berserkers fury": 0,
        "living death": false,
        //on-crit effects
        "smoke cloud": false,
        "kalgerion demon familiar": false,
        "crit-i-kal": false,
        //on-npc effects
        "vulnerability": false,
        "corrupted wounds": false,
        "slayer sigil": false,
        //apply somewhere idk
        "nopenopenope": 0,
        "Ruby aurora": 0,
        "death spores": false,
        "Skeleton rage stacks": 2,
        "Zamorak inner chaos": 0,
        "Zamorak guardians triumph": 0,
        "Zamorak sword of edicts": 0,
        "Telos red beam": false,
        "Telos black beam": false,
        "Infernal puzzle box": false,
        "King black dragon wilderness portal": false,
        "Tokkul-zo": false,
        "skeleton rage stacks": 0,
        "haunted": false
    };
    document.querySelectorAll(".js--setting").forEach((node)=>{
        let val = node.value;
        if (node.getAttribute("type") === "number") val = parseFloat(val);
        else if (node.getAttribute("type") === "checkbox") val = node.checked;
        settings[node.getAttribute("data-setting-name")] = val;
    });
    return settings;
}
function $429892bb525b619b$var$buildDamagesTable(abilities) {
    const table = document.querySelector(".js--damages-table");
    const template = document.querySelector("#damage-table-row");
    for (const [abilityKey, ability] of Object.entries(abilities)){
        const copy = template.content.cloneNode(true);
        copy.querySelector(".js--ability").setAttribute("data-ability-key", abilityKey);
        copy.querySelector(".js--ability-title").textContent = ability.title;
        copy.querySelector(".js--ability-icon").setAttribute("src", ability.icon);
        const weaponSelect = copy.querySelector(".js--ability-weapon");
        weaponSelect.addEventListener("change", (e)=>{
            $429892bb525b619b$var$calculateDamages($429892bb525b619b$var$collectSettings());
        });
        ability.weapons.forEach((item)=>{
            weaponSelect.add(new Option(item, item));
        });
        table.appendChild(copy);
    }
}
function $429892bb525b619b$var$calculateDamages(settings) {
    document.querySelectorAll(".js--damages-table tr").forEach((row)=>{
        const weapon = row.querySelector(".js--ability-weapon").value;
        const key = row.getAttribute("data-ability-key");
        settings["split soul"] = false;
        damages = (0, $b9840a7c91872a7d$export$ed316e5830568bf6)[key].calc(weapon, settings, 1);
        row.querySelector(".js--ability-regular").textContent = damages[damages.length - 1];
        // Recalculate with split soul
        settings["split soul"] = true;
        damages = (0, $b9840a7c91872a7d$export$ed316e5830568bf6)[key].calc(weapon, settings, 1);
        row.querySelector(".js--ability-splitsoul").textContent = damages[damages.length - 1];
    });
}


