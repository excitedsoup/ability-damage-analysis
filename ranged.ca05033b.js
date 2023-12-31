
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

var $336eee0c85bba3fe$exports = {};
var $06e411d30d717574$exports = {};
var $25f1b0a25b94cce2$exports = {};
const $25f1b0a25b94cce2$var$ranged_construction = {
    "two-handed weapons": {
        "bow of the last guardian": {
            "tier": 95,
            "weaponDmg": 0
        },
        "eldritch crossbow": {
            "tier": 92,
            "weaponDmg": 0
        },
        "seren godbow": {
            "tier": 92,
            "weaponDmg": 0
        },
        "decimation": {
            "tier": 88,
            "weaponDmg": 0
        },
        "noxious longbow": {
            "tier": 90,
            "weaponDmg": 0
        },
        "zaryte bow": {
            "tier": 80,
            "weaponDmg": 0
        },
        "hexhunter bow": {
            "tier": 80,
            "weaponDmg": 0
        },
        "none": {
            "tier": 0,
            "weaponDmg": 0
        }
    },
    "main-hand weapons": {
        "chaotic": {
            "tier": 80,
            "weaponDmg": 0
        },
        "ascension": {
            "tier": 90,
            "weaponDmg": 0
        },
        "blightbound": {
            "tier": 92,
            "weaponDmg": 0
        },
        "none": {
            "tier": 0,
            "weaponDmg": 0
        }
    },
    "off-hand weapons": {
        "off-hand chaotic": {
            "tier": 80,
            "weaponDmg": 0
        },
        "off-hand ascension": {
            "tier": 90,
            "weaponDmg": 0
        },
        "off-hand blightbound": {
            "tier": 92,
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
        "vengeful kiteshield": {
            "tier": 90,
            "weaponDmg": 0
        },
        "elysian shield": {
            "tier": 75,
            "weaponDmg": 0
        }
    },
    "defenders": {
        "kalphite defender": {
            "tier": 90,
            "weaponDmg": 0
        },
        "ancient defender": {
            "tier": 80,
            "weaponDmg": 0
        },
        "none": {
            "tier": 0,
            "weaponDmg": 0
        }
    },
    "helmets": {
        "elite dracolich helm": {
            "bonus": 24
        },
        "elite sirenic helm": {
            "bonus": 24
        },
        "dracolich helm": {
            "bonus": 23
        },
        "sirenic helm": {
            "bonus": 23
        },
        "superior morrigan helm": {
            "bonus": 22
        },
        "refined anima core helm": {
            "bonus": 21
        },
        "pernix helm": {
            "bonus": 20
        },
        "none": {
            "bonus": 0
        }
    },
    "bodies": {
        "elite dracolich top": {
            "bonus": 36
        },
        "elite sirenic top": {
            "bonus": 36
        },
        "dracolich top": {
            "bonus": 34
        },
        "sirenic top": {
            "bonus": 34
        },
        "superior morrigan top": {
            "bonus": 33
        },
        "refined anima core top": {
            "bonus": 32
        },
        "pernix top": {
            "bonus": 30
        },
        "none": {
            "bonus": 0
        }
    },
    "legs": {
        "elite dracolich bottom": {
            "bonus": 32
        },
        "elite sirenic bottom": {
            "bonus": 31
        },
        "dracolich bottom": {
            "bonus": 29
        },
        "sirenic bottom": {
            "bonus": 29
        },
        "superior morrigan bottom": {
            "bonus": 28
        },
        "refined anima core bottom": {
            "bonus": 27
        },
        "pernix bottom": {
            "bonus": 25
        },
        "none": {
            "bonus": 0
        }
    },
    "boots": {
        "elite dracolich boots": {
            "bonus": 15
        },
        "enhanced fleeting": {
            "bonus": 14.5
        },
        "dracolich boots": {
            "bonus": 14
        },
        "flarefrost": {
            "bonus": 14
        },
        "fleeting": {
            "bonus": 12.7
        },
        "pernix boots": {
            "bonus": 12
        },
        "silverhawk": {
            "bonus": 6.9
        },
        "none": {
            "bonus": 0
        }
    },
    "gloves": {
        "elite dracolich gloves": {
            "bonus": 15
        },
        "enhanced nightmare": {
            "bonus": 14.5
        },
        "deathtouch": {
            "bonus": 14.5
        },
        "dracolich gloves": {
            "bonus": 14
        },
        "nightmare": {
            "bonus": 13
        },
        "pernix gloves": {
            "bonus": 12
        },
        "cinderbane": {
            "bonus": 11
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
        "stalkers": {
            "bonus": 30.4
        },
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
        "igneous kal-xil": {
            "bonus": 43
        },
        "completionist": {
            "bonus": 31.5
        },
        "tokhaar-kal-xil": {
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
        "reckless": {
            "levels": 0.1,
            "boost": 0.1
        },
        "none aura": {
            "levels": 0.0,
            "boost": 0.0
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
        "desolation": {
            "boost": 0.12
        },
        "anguish": {
            "boost": 0.10
        },
        "rigour": {
            "boost": 0.08
        },
        "overpowering force": {
            "boost": 0.06
        },
        "unrelenting force": {
            "boost": 0.06
        },
        "unstoppable force": {
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
        "extreme ranged": {
            "levels": 3,
            "percent": 0.15
        },
        "super ranged": {
            "levels": 2,
            "percent": 0.12
        },
        "ranged potion": {
            "levels": 1,
            "percent": 0.08
        },
        "none": {
            "levels": 0,
            "percent": 0
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
        "dazing shot": {
            "fixed percent": 0.85,
            "variable percent": 0.2,
            "on hit effects": true,
            "crit effects": true,
            "category": "abil"
        },
        "greater dazing shot": {
            "fixed percent": 0.85,
            "variable percent": 0.2,
            "on hit effects": true,
            "crit effects": true,
            "category": "abil"
        },
        "needle strike": {
            "fixed percent": 0.85,
            "variable percent": 0.2,
            "on hit effects": true,
            "crit effects": true,
            "category": "abil"
        },
        "piercing shot": {
            "fixed percent": 0.4,
            "variable percent": 0.1,
            "on hit effects": true,
            "crit effects": true,
            "category": "abil"
        },
        "piercing shot bound": {
            "fixed percent": 0.7,
            "variable percent": 0.1,
            "on hit effects": true,
            "crit effects": true,
            "category": "abil"
        },
        "corruption shot": {
            "fixed percent": 0.12,
            "variable percent": 0.04,
            "on hit effects": false,
            "crit effects": false,
            "category": "abil"
        },
        "fragmentation shot": {
            "fixed percent": 0.25,
            "variable percent": 0.066,
            "on hit effects": false,
            "crit effects": false,
            "category": "abil"
        },
        "snipe": {
            "fixed percent": 1.5,
            "variable percent": 0.5,
            "on hit effects": true,
            "crit effects": true,
            "category": "abil"
        },
        "ricochet": {
            "fixed percent": 0.55,
            "variable percent": 0.1,
            "on hit effects": true,
            "crit effects": true,
            "category": "basic"
        },
        "greater ricochet 1": {
            "fixed percent": 0.55,
            "variable percent": 0.1,
            "on hit effects": true,
            "crit effects": true,
            "category": "basic"
        },
        "greater ricochet 2": {
            "fixed percent": 0.25,
            "variable percent": 0.1,
            "on hit effects": true,
            "crit effects": true,
            "category": "basic"
        },
        "greater ricochet 3": {
            "fixed percent": 0.08,
            "variable percent": 0.04,
            "on hit effects": true,
            "crit effects": true,
            "category": "basic"
        },
        "binding shot": {
            "fixed percent": 0.55,
            "variable percent": 0.1,
            "on hit effects": true,
            "crit effects": true,
            "category": "abil"
        },
        "tight bindings": {
            "fixed percent": 1.1,
            "variable percent": 0.2,
            "on hit effects": true,
            "crit effects": true,
            "category": "threshold"
        },
        "bombardment": {
            "fixed percent": 1.2,
            "variable percent": 0.2,
            "on hit effects": true,
            "crit effects": true,
            "category": "threshold"
        },
        "shadow tendrils": {
            "fixed percent": 0.7,
            "variable percent": 0.1,
            "on hit effects": true,
            "crit effects": true,
            "category": "threshold"
        },
        "snapshot": {
            "fixed percent": 1.0,
            "variable percent": 0.2,
            "on hit effects": true,
            "crit effects": true,
            "category": "threshold"
        },
        "rapid fire": {
            "fixed percent": 0.55,
            "variable percent": 0.1,
            "on hit effects": true,
            "crit effects": true,
            "category": "threshold"
        },
        "deadshot - initial hit": {
            "fixed percent": 1.0,
            "variable percent": 0.2,
            "on hit effects": true,
            "crit effects": true,
            "category": "ultimate"
        },
        "deadshot - bleed hit": {
            "fixed percent": 0.7,
            "variable percent": 0.0,
            "on hit effects": false,
            "crit effects": false,
            "category": "bleed"
        },
        "incendiary shot": {
            "fixed percent": 2.7,
            "variable percent": 0.6,
            "on hit effects": true,
            "crit effects": true,
            "category": "ultimate"
        },
        "unload": {
            "fixed percent": 1.2,
            "variable percent": 0.2,
            "on hit effects": true,
            "crit effects": true,
            "category": "ultimate"
        },
        "darkbow": {
            "fixed percent": 2.15,
            "variable percent": 0.5,
            "on hit effects": true,
            "crit effects": true,
            "category": "spec"
        },
        "bolg spec": {
            "fixed percent": 2.5,
            "variable percent": 0.5,
            "on hit effects": true,
            "crit effects": true,
            "category": "spec"
        },
        "sgb spec": {
            "fixed percent": 1.25,
            "variable percent": 0.3,
            "on hit effects": true,
            "crit effects": true,
            "category": "spec"
        },
        "magic shortbow": {
            "fixed percent": 1.15,
            "variable percent": 0.3,
            "on hit effects": true,
            "crit effects": true,
            "category": "spec"
        }
    }
};
$25f1b0a25b94cce2$exports = $25f1b0a25b94cce2$var$ranged_construction;


class $06e411d30d717574$var$AbilityDmg {
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
        if (settings["hexhunter"] === true && settings["two-handed weapon"] === "hexhunter bow" && type === "2h") {
            if (settings["enchantment dispelling"] === true) AD += AD * 0.175;
            else AD += AD * 0.125;
        }
        AD += Math.floor(AD * 0.06 * settings["Zamorak balance of power"]);
        AD += Math.floor(AD * 0.1 * settings["Raksha inner power"]);
        return AD;
    }
    calcBonus(settings) {
        let reaperCrew = 0;
        if (settings["Reaper crew"] === true) reaperCrew = 12;
        return $25f1b0a25b94cce2$exports.helmets[settings["helmet"]]["bonus"] + $25f1b0a25b94cce2$exports.bodies[settings["body"]]["bonus"] + $25f1b0a25b94cce2$exports.legs[settings["leg"]]["bonus"] + $25f1b0a25b94cce2$exports.boots[settings["boots"]]["bonus"] + $25f1b0a25b94cce2$exports.gloves[settings["gloves"]]["bonus"] + $25f1b0a25b94cce2$exports.necklaces[settings["necklace"]]["bonus"] + $25f1b0a25b94cce2$exports.rings[settings["ring"]]["bonus"] + $25f1b0a25b94cce2$exports.capes[settings["cape"]]["bonus"] + $25f1b0a25b94cce2$exports.pockets[settings["pocket slot"]]["bonus"] + reaperCrew;
    }
    calcLevel(settings) {
        let level = settings["level"];
        let percentBoost = $25f1b0a25b94cce2$exports.potions[settings["potion"]]["percent"] + $25f1b0a25b94cce2$exports.auras[settings["aura"]]["levels"];
        let flatBoost = $25f1b0a25b94cce2$exports.potions[settings["potion"]]["levels"];
        return Math.floor(level * (1 + percentBoost) * 1) + flatBoost;
    }
    getTier(type, settings) {
        if (type === "two-hand") return $25f1b0a25b94cce2$exports["two-handed weapons"][settings["two-handed weapon"]]["tier"];
        else if (type === "main-hand") return $25f1b0a25b94cce2$exports["main-hand weapons"][settings["main-hand weapon"]]["tier"];
        else if (type === "shield") return $25f1b0a25b94cce2$exports.shields[settings["shield"]]["tier"];
        else if (type === "defender") return $25f1b0a25b94cce2$exports.defenders[settings["defender"]]["tier"];
        else if (type === "off-hand") return $25f1b0a25b94cce2$exports["off-hand weapons"][settings["off-hand weapon"]]["tier"];
    }
}
$06e411d30d717574$exports = $06e411d30d717574$var$AbilityDmg;


var $46e9ba02ca396156$exports = {};

class $46e9ba02ca396156$var$OnNPC {
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
    calcAura(dmg, boost, aura, swift) {
        if (aura === "reckless" && swift === true) dmg;
        else if (aura === "reckless" && swift === false) dmg = Math.floor(dmg * (1 + boost));
        else dmg = Math.floor(dmg * (1 + boost));
        return dmg;
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
    calcNope(dmg, flag) {
        if (flag === true) dmg += Math.floor(dmg * 0.03);
        return dmg;
    }
    calcSwordofEdicts(dmg, flag) {
        if (flag === true) dmg -= Math.floor(dmg * 0.05);
        return dmg;
    }
    calcOnNpc(dmg, settings, AD, category) {
        //buffs applied in order of operations
        dmg = this.calcVuln(dmg, settings["vulnerability"]);
        dmg = this.calcSlayerPerk(dmg, settings["slayer perk"]);
        dmg = this.calcSlayerSigil(dmg, settings["slayer sigil"]);
        dmg = this.calcAura(dmg, $25f1b0a25b94cce2$exports.auras[settings["aura"]]["boost"], settings["aura"], settings["swift"]);
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
        dmg = this.calcNope(dmg, settings["nopenopenope"]);
        //zamorak inner chaos
        //zamorak guardians triumph
        //zamorak sword of edicts
        //telos red beam
        //telos black beam
        //infernal puzzle box
        //kbd wildy portal
        //tokkul-zo
        return dmg;
    }
    onNpcDamageList(dmgList, settings, AD) {
        const onNpcDmg = [];
        for (const i of dmgList)onNpcDmg.push(this.calcOnNpc(i, settings, AD));
        return onNpcDmg;
    }
}
$46e9ba02ca396156$exports = $46e9ba02ca396156$var$OnNPC;


var $137c7cf96fb1168c$exports = {};

class $137c7cf96fb1168c$var$OnHit {
    calcScriptureOfFul(buff, pocket, flag) {
        if (pocket === "scripture of ful" && flag === true) buff = buff * 1.2;
        return Math.floor(buff);
    }
    calcStoneOfJas(buff, jas) {
        return Math.floor(buff * (1 + jas / 100));
    }
    calcPrayer(buff, prayer) {
        return Math.floor(buff * (1 + $25f1b0a25b94cce2$exports.prayers[prayer]["boost"]));
    }
    calcRubyAurora(buff, aurora) {
        return Math.floor(buff * (1 + 0.01 * aurora));
    }
    calcSwift(buff, flag) {
        if (flag === true) buff = Math.floor(buff * 1.5);
        return buff;
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
        return Math.floor(buff * (1 + $25f1b0a25b94cce2$exports.slayerHelmets[slayerHelmet]["boost"]));
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
            buff = this.calcSwift(buff, settings["swift"]);
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
$137c7cf96fb1168c$exports = $137c7cf96fb1168c$var$OnHit;


var $d6112baf2310618b$exports = {};
class $d6112baf2310618b$var$Crit {
    calcFCritChance(settings) {
        let fcrit = 0.1 + 0.05 * settings["crit-i-kal"] + 0.01 * settings["kalgerion demon familiar"] + 0.02 * settings["biting"];
        if (settings["ring"] === "reavers") fcrit += 0.05;
        else if (settings["ring"] === "stalkers") {
            if (settings["enchantment shadows"] === true) fcrit += 0.04;
            else fcrit += 0.03;
        }
        if (settings["pocket slot"] === "grimoire") fcrit += 0.12;
        return fcrit;
    }
    critDmgBuff(dmg, settings) {
        let modifier = 0.2;
        modifier = modifier + 0.05 * Math.floor(settings["level"] - 10) / 10;
        if (settings["smoke cloud"] === true) modifier = modifier + 0.06;
        if (settings["enchantment shadows"] === true && settings["ring"] === "stalkers") modifier += 0.03;
        return Math.floor(dmg * (1 + modifier));
    }
    critDamageList(dmgList, settings) {
        const critDamage = [];
        for (const i of dmgList)critDamage.push(this.critDmgBuff(i, settings));
        return critDamage;
    }
}
$d6112baf2310618b$exports = $d6112baf2310618b$var$Crit;


var $8ddf59f24df0252b$exports = {};
class $8ddf59f24df0252b$var$rangedHelper {
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
$8ddf59f24df0252b$exports = $8ddf59f24df0252b$var$rangedHelper;


var $37f0999020a30e20$exports = {};


class $37f0999020a30e20$var$avgDmg {
    averageDamage(abil_val, dmg_list, critDmg_list, settings) {
        const CRIT_INS = new $d6112baf2310618b$exports();
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
        const CRIT_INS = new $d6112baf2310618b$exports();
        let critChance = 0;
        if ($25f1b0a25b94cce2$exports.abilities[abil_val]["crit effects"] === true) critChance = CRIT_INS.calcFCritChance(settings);
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
$37f0999020a30e20$exports = $37f0999020a30e20$var$avgDmg;


var $a9953cb8dcc55832$exports = {};

function $a9953cb8dcc55832$var$split_soul(dmgList, settings) {
    settings["category"] = "split soul";
    const Helper = new $8ddf59f24df0252b$exports();
    if (settings["split soul"] === true) {
        const splitSoul = [];
        for(var i = 0; i < dmgList.length; i++){
            let hit = dmgList[i];
            let soulSplit = 0;
            if (hit > 2000) {
                soulSplit = soulSplit + 200;
                hit = hit - 2000;
                if (hit > 2000) {
                    soulSplit = soulSplit + 100;
                    hit = hit - 2000;
                    soulSplit = soulSplit + Math.floor(0.0125 * hit);
                    hit = 0;
                } else {
                    soulSplit = soulSplit + Math.floor(0.05 * hit);
                    hit = 0;
                }
            } else {
                soulSplit = soulSplit + Math.floor(0.1 * hit);
                hit = 0;
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
$a9953cb8dcc55832$exports = $a9953cb8dcc55832$var$split_soul;




var $iTwOG = parcelRequire("iTwOG");
var $336eee0c85bba3fe$require$channel = $iTwOG.channel;
function $336eee0c85bba3fe$var$bombardment(type, settings, numberOfHits) {
    const AD_INS = new $06e411d30d717574$exports();
    const NPC_INS = new $46e9ba02ca396156$exports();
    const HIT_INS = new $137c7cf96fb1168c$exports();
    const CRIT_INS = new $d6112baf2310618b$exports();
    const AVG_INS = new $37f0999020a30e20$exports();
    const Helper = new $8ddf59f24df0252b$exports();
    let abil_val = "bombardment";
    const fixedPercent = $25f1b0a25b94cce2$exports.abilities[abil_val]["fixed percent"];
    const variablePercent = $25f1b0a25b94cce2$exports.abilities[abil_val]["variable percent"];
    settings["category"] = $25f1b0a25b94cce2$exports.abilities[abil_val]["category"];
    const hits = [];
    for(var hitsplat = 0; hitsplat < numberOfHits; hitsplat++){
        const damageObject = Helper.damageObjectCreator(settings);
        //calculates ability damage
        let AD = AD_INS.calcAd(type, settings); //AD_INS.calcAd(type,settings);
        //sets fixed and variable damage
        let fixed = Math.floor(AD * fixedPercent);
        let variable = Math.floor(AD * variablePercent);
        //applies on-hit effects
        let onHit = HIT_INS.calcOnHit(fixed, variable, type, $25f1b0a25b94cce2$exports.abilities[abil_val]["on hit effects"], settings);
        //sets up for further calculations
        damageObject["non-crit"]["list"] = Helper.baseDamageListCreator(onHit[0], onHit[1]);
        //apply crit dmg
        damageObject["crit"]["list"] = CRIT_INS.critDamageList(damageObject["non-crit"]["list"], settings);
        //apply on-npc effects and hitcaps
        damageObject["non-crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["non-crit"]["list"], settings, AD);
        damageObject["crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["crit"]["list"], settings, AD);
        //split soul
        splitSoul = $a9953cb8dcc55832$exports(damageObject["non-crit"]["list"], settings);
        splitSoulCrit = $a9953cb8dcc55832$exports(damageObject["crit"]["list"], settings);
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
$336eee0c85bba3fe$exports = $336eee0c85bba3fe$var$bombardment;


var $cdd9d52845a80c6b$exports = {};









var $iTwOG = parcelRequire("iTwOG");
var $cdd9d52845a80c6b$require$channel = $iTwOG.channel;
function $cdd9d52845a80c6b$var$rapid_fire(type, settings, numberOfHits) {
    const AD_INS = new $06e411d30d717574$exports();
    const NPC_INS = new $46e9ba02ca396156$exports();
    const HIT_INS = new $137c7cf96fb1168c$exports();
    const CRIT_INS = new $d6112baf2310618b$exports();
    const AVG_INS = new $37f0999020a30e20$exports();
    const Helper = new $8ddf59f24df0252b$exports();
    let abil_val = "rapid fire";
    const fixedPercent = $25f1b0a25b94cce2$exports.abilities[abil_val]["fixed percent"];
    const variablePercent = $25f1b0a25b94cce2$exports.abilities[abil_val]["variable percent"];
    settings["category"] = $25f1b0a25b94cce2$exports.abilities[abil_val]["category"];
    const hits = [];
    numberOfHits = 8;
    for(var hitsplat = 0; hitsplat < numberOfHits; hitsplat++){
        const damageObject = Helper.damageObjectCreator(settings);
        //calculates ability damage
        let AD = AD_INS.calcAd(type, settings); //AD_INS.calcAd(type,settings);
        //sets fixed and variable damage
        let fixed = Math.floor(AD * fixedPercent);
        let variable = Math.floor(AD * variablePercent);
        //applies on-hit effects
        let onHit = HIT_INS.calcOnHit(fixed, variable, type, $25f1b0a25b94cce2$exports.abilities[abil_val]["on hit effects"], settings);
        //sets up for further calculations
        damageObject["non-crit"]["list"] = Helper.baseDamageListCreator(onHit[0], onHit[1]);
        //apply crit dmg
        damageObject["crit"]["list"] = CRIT_INS.critDamageList(damageObject["non-crit"]["list"], settings);
        //apply on-npc effects and hitcaps
        damageObject["non-crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["non-crit"]["list"], settings, AD);
        damageObject["crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["crit"]["list"], settings, AD);
        //split soul
        splitSoul = $a9953cb8dcc55832$exports(damageObject["non-crit"]["list"], settings);
        splitSoulCrit = $a9953cb8dcc55832$exports(damageObject["crit"]["list"], settings);
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
$cdd9d52845a80c6b$exports = $cdd9d52845a80c6b$var$rapid_fire;


var $4752a263325bfd6b$exports = {};









var $iTwOG = parcelRequire("iTwOG");
var $4752a263325bfd6b$require$channel = $iTwOG.channel;
function $4752a263325bfd6b$var$dazing_shot(type, settings, numberOfHits) {
    const AD_INS = new $06e411d30d717574$exports();
    const NPC_INS = new $46e9ba02ca396156$exports();
    const HIT_INS = new $137c7cf96fb1168c$exports();
    const CRIT_INS = new $d6112baf2310618b$exports();
    const AVG_INS = new $37f0999020a30e20$exports();
    const Helper = new $8ddf59f24df0252b$exports();
    let abil_val = "dazing shot";
    const fixedPercent = $25f1b0a25b94cce2$exports.abilities[abil_val]["fixed percent"];
    const variablePercent = $25f1b0a25b94cce2$exports.abilities[abil_val]["variable percent"];
    settings["category"] = $25f1b0a25b94cce2$exports.abilities[abil_val]["category"];
    const hits = [];
    for(var hitsplat = 0; hitsplat < numberOfHits; hitsplat++){
        const damageObject = Helper.damageObjectCreator(settings);
        //calculates ability damage
        let AD = AD_INS.calcAd(type, settings); //AD_INS.calcAd(type,settings);
        //sets fixed and variable damage
        let fixed = Math.floor(AD * fixedPercent);
        let variable = Math.floor(AD * variablePercent);
        //applies on-hit effects
        let onHit = HIT_INS.calcOnHit(fixed, variable, type, $25f1b0a25b94cce2$exports.abilities[abil_val]["on hit effects"], settings);
        //sets up for further calculations
        damageObject["non-crit"]["list"] = Helper.baseDamageListCreator(onHit[0], onHit[1]);
        //apply crit dmg
        damageObject["crit"]["list"] = CRIT_INS.critDamageList(damageObject["non-crit"]["list"], settings);
        //apply on-npc effects and hitcaps
        damageObject["non-crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["non-crit"]["list"], settings, AD);
        damageObject["crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["crit"]["list"], settings, AD);
        //split soul
        splitSoul = $a9953cb8dcc55832$exports(damageObject["non-crit"]["list"], settings);
        splitSoulCrit = $a9953cb8dcc55832$exports(damageObject["crit"]["list"], settings);
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
$4752a263325bfd6b$exports = $4752a263325bfd6b$var$dazing_shot;


var $ecca8bfff242fa1b$exports = {};









var $iTwOG = parcelRequire("iTwOG");
var $ecca8bfff242fa1b$require$channel = $iTwOG.channel;
function $ecca8bfff242fa1b$var$greater_dazing_shot(type, settings, numberOfHits) {
    const AD_INS = new $06e411d30d717574$exports();
    const NPC_INS = new $46e9ba02ca396156$exports();
    const HIT_INS = new $137c7cf96fb1168c$exports();
    const CRIT_INS = new $d6112baf2310618b$exports();
    const AVG_INS = new $37f0999020a30e20$exports();
    const Helper = new $8ddf59f24df0252b$exports();
    let abil_val = "greater dazing shot";
    const fixedPercent = $25f1b0a25b94cce2$exports.abilities[abil_val]["fixed percent"];
    const variablePercent = $25f1b0a25b94cce2$exports.abilities[abil_val]["variable percent"];
    settings["category"] = $25f1b0a25b94cce2$exports.abilities[abil_val]["category"];
    const hits = [];
    for(var hitsplat = 0; hitsplat < numberOfHits; hitsplat++){
        const damageObject = Helper.damageObjectCreator(settings);
        //calculates ability damage
        let AD = AD_INS.calcAd(type, settings); //AD_INS.calcAd(type,settings);
        //sets fixed and variable damage
        let fixed = Math.floor(AD * fixedPercent);
        let variable = Math.floor(AD * variablePercent);
        //applies on-hit effects
        let onHit = HIT_INS.calcOnHit(fixed, variable, type, $25f1b0a25b94cce2$exports.abilities[abil_val]["on hit effects"], settings);
        //sets up for further calculations
        damageObject["non-crit"]["list"] = Helper.baseDamageListCreator(onHit[0], onHit[1]);
        //apply crit dmg
        damageObject["crit"]["list"] = CRIT_INS.critDamageList(damageObject["non-crit"]["list"], settings);
        //apply on-npc effects and hitcaps
        damageObject["non-crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["non-crit"]["list"], settings, AD);
        damageObject["crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["crit"]["list"], settings, AD);
        //split soul
        splitSoul = $a9953cb8dcc55832$exports(damageObject["non-crit"]["list"], settings);
        splitSoulCrit = $a9953cb8dcc55832$exports(damageObject["crit"]["list"], settings);
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
$ecca8bfff242fa1b$exports = $ecca8bfff242fa1b$var$greater_dazing_shot;


var $817cbe0e660c2c78$exports = {};









var $iTwOG = parcelRequire("iTwOG");
var $817cbe0e660c2c78$require$channel = $iTwOG.channel;
function $817cbe0e660c2c78$var$needle_strike(type, settings, numberOfHits) {
    const AD_INS = new $06e411d30d717574$exports();
    const NPC_INS = new $46e9ba02ca396156$exports();
    const HIT_INS = new $137c7cf96fb1168c$exports();
    const CRIT_INS = new $d6112baf2310618b$exports();
    const AVG_INS = new $37f0999020a30e20$exports();
    const Helper = new $8ddf59f24df0252b$exports();
    let abil_val = "needle strike";
    const fixedPercent = $25f1b0a25b94cce2$exports.abilities[abil_val]["fixed percent"];
    const variablePercent = $25f1b0a25b94cce2$exports.abilities[abil_val]["variable percent"];
    settings["category"] = $25f1b0a25b94cce2$exports.abilities[abil_val]["category"];
    const hits = [];
    for(var hitsplat = 0; hitsplat < numberOfHits; hitsplat++){
        const damageObject = Helper.damageObjectCreator(settings);
        //calculates ability damage
        let AD = AD_INS.calcAd(type, settings); //AD_INS.calcAd(type,settings);
        //sets fixed and variable damage
        let fixed = Math.floor(AD * fixedPercent);
        let variable = Math.floor(AD * variablePercent);
        //applies on-hit effects
        let onHit = HIT_INS.calcOnHit(fixed, variable, type, $25f1b0a25b94cce2$exports.abilities[abil_val]["on hit effects"], settings);
        //sets up for further calculations
        damageObject["non-crit"]["list"] = Helper.baseDamageListCreator(onHit[0], onHit[1]);
        //apply crit dmg
        damageObject["crit"]["list"] = CRIT_INS.critDamageList(damageObject["non-crit"]["list"], settings);
        //apply on-npc effects and hitcaps
        damageObject["non-crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["non-crit"]["list"], settings, AD);
        damageObject["crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["crit"]["list"], settings, AD);
        //split soul
        splitSoul = $a9953cb8dcc55832$exports(damageObject["non-crit"]["list"], settings);
        splitSoulCrit = $a9953cb8dcc55832$exports(damageObject["crit"]["list"], settings);
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
$817cbe0e660c2c78$exports = $817cbe0e660c2c78$var$needle_strike;


var $685aa6fd3349bf3a$exports = {};









var $iTwOG = parcelRequire("iTwOG");
var $685aa6fd3349bf3a$require$channel = $iTwOG.channel;
function $685aa6fd3349bf3a$var$piercing_shot(type, settings, numberOfHits) {
    const AD_INS = new $06e411d30d717574$exports();
    const NPC_INS = new $46e9ba02ca396156$exports();
    const HIT_INS = new $137c7cf96fb1168c$exports();
    const CRIT_INS = new $d6112baf2310618b$exports();
    const AVG_INS = new $37f0999020a30e20$exports();
    const Helper = new $8ddf59f24df0252b$exports();
    let abil_val = "piercing shot";
    const fixedPercent = $25f1b0a25b94cce2$exports.abilities[abil_val]["fixed percent"];
    const variablePercent = $25f1b0a25b94cce2$exports.abilities[abil_val]["variable percent"];
    settings["category"] = $25f1b0a25b94cce2$exports.abilities[abil_val]["category"];
    const hits = [];
    for(var hitsplat = 0; hitsplat < numberOfHits; hitsplat++){
        const damageObject = Helper.damageObjectCreator(settings);
        //calculates ability damage
        let AD = AD_INS.calcAd(type, settings); //AD_INS.calcAd(type,settings);
        //sets fixed and variable damage
        let fixed = Math.floor(AD * fixedPercent);
        let variable = Math.floor(AD * variablePercent);
        //applies on-hit effects
        let onHit = HIT_INS.calcOnHit(fixed, variable, type, $25f1b0a25b94cce2$exports.abilities[abil_val]["on hit effects"], settings);
        //sets up for further calculations
        damageObject["non-crit"]["list"] = Helper.baseDamageListCreator(onHit[0], onHit[1]);
        //apply crit dmg
        damageObject["crit"]["list"] = CRIT_INS.critDamageList(damageObject["non-crit"]["list"], settings);
        //apply on-npc effects and hitcaps
        damageObject["non-crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["non-crit"]["list"], settings, AD);
        damageObject["crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["crit"]["list"], settings, AD);
        //split soul
        splitSoul = $a9953cb8dcc55832$exports(damageObject["non-crit"]["list"], settings);
        splitSoulCrit = $a9953cb8dcc55832$exports(damageObject["crit"]["list"], settings);
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
$685aa6fd3349bf3a$exports = $685aa6fd3349bf3a$var$piercing_shot;


var $b9ee83db1a3e08c7$exports = {};









var $iTwOG = parcelRequire("iTwOG");
var $b9ee83db1a3e08c7$require$channel = $iTwOG.channel;
function $b9ee83db1a3e08c7$var$piercing_shot_bound(type, settings, numberOfHits) {
    const AD_INS = new $06e411d30d717574$exports();
    const NPC_INS = new $46e9ba02ca396156$exports();
    const HIT_INS = new $137c7cf96fb1168c$exports();
    const CRIT_INS = new $d6112baf2310618b$exports();
    const AVG_INS = new $37f0999020a30e20$exports();
    const Helper = new $8ddf59f24df0252b$exports();
    let abil_val = "piercing shot bound";
    const fixedPercent = $25f1b0a25b94cce2$exports.abilities[abil_val]["fixed percent"];
    const variablePercent = $25f1b0a25b94cce2$exports.abilities[abil_val]["variable percent"];
    settings["category"] = $25f1b0a25b94cce2$exports.abilities[abil_val]["category"];
    const hits = [];
    for(var hitsplat = 0; hitsplat < numberOfHits; hitsplat++){
        const damageObject = Helper.damageObjectCreator(settings);
        //calculates ability damage
        let AD = AD_INS.calcAd(type, settings); //AD_INS.calcAd(type,settings);
        //sets fixed and variable damage
        let fixed = Math.floor(AD * fixedPercent);
        let variable = Math.floor(AD * variablePercent);
        //applies on-hit effects
        let onHit = HIT_INS.calcOnHit(fixed, variable, type, $25f1b0a25b94cce2$exports.abilities[abil_val]["on hit effects"], settings);
        //sets up for further calculations
        damageObject["non-crit"]["list"] = Helper.baseDamageListCreator(onHit[0], onHit[1]);
        //apply crit dmg
        damageObject["crit"]["list"] = CRIT_INS.critDamageList(damageObject["non-crit"]["list"], settings);
        //apply on-npc effects and hitcaps
        damageObject["non-crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["non-crit"]["list"], settings, AD);
        damageObject["crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["crit"]["list"], settings, AD);
        //split soul
        splitSoul = $a9953cb8dcc55832$exports(damageObject["non-crit"]["list"], settings);
        splitSoulCrit = $a9953cb8dcc55832$exports(damageObject["crit"]["list"], settings);
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
$b9ee83db1a3e08c7$exports = $b9ee83db1a3e08c7$var$piercing_shot_bound;


var $25b0861d2f313766$exports = {};









var $iTwOG = parcelRequire("iTwOG");
var $25b0861d2f313766$require$channel = $iTwOG.channel;
function $25b0861d2f313766$var$corruption_shot(type, settings, numberOfHits) {
    const AD_INS = new $06e411d30d717574$exports();
    const NPC_INS = new $46e9ba02ca396156$exports();
    const HIT_INS = new $137c7cf96fb1168c$exports();
    const CRIT_INS = new $d6112baf2310618b$exports();
    const AVG_INS = new $37f0999020a30e20$exports();
    const Helper = new $8ddf59f24df0252b$exports();
    let abil_val = "corruption shot";
    const fixedPercent = $25f1b0a25b94cce2$exports.abilities[abil_val]["fixed percent"];
    const variablePercent = $25f1b0a25b94cce2$exports.abilities[abil_val]["variable percent"];
    settings["category"] = $25f1b0a25b94cce2$exports.abilities[abil_val]["category"];
    const hits = [];
    numberOfHits = 5;
    for(var hitsplat = 0; hitsplat < numberOfHits; hitsplat++){
        let hitCount = 1;
        const damageObject = Helper.damageObjectCreator(settings);
        //calculates ability damage
        let AD = AD_INS.calcAd(type, settings);
        //sets fixed and variable damage
        let fixed = Math.floor(AD * fixedPercent * hitCount);
        let variable = Math.floor(AD * variablePercent * hitCount);
        //applies on-hit effects
        let onHit = HIT_INS.calcOnHit(fixed, variable, type, $25f1b0a25b94cce2$exports.abilities[abil_val]["on hit effects"], settings);
        //sets up for further calculations
        damageObject["non-crit"]["list"] = Helper.baseDamageListCreator(onHit[0], onHit[1]);
        //apply crit dmg
        damageObject["crit"]["list"] = CRIT_INS.critDamageList(damageObject["non-crit"]["list"], settings);
        //apply on-npc effects and hitcaps
        damageObject["non-crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["non-crit"]["list"], settings, AD);
        damageObject["crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["crit"]["list"], settings, AD);
        //split soul
        splitSoul = $a9953cb8dcc55832$exports(damageObject["non-crit"]["list"], settings);
        splitSoulCrit = $a9953cb8dcc55832$exports(damageObject["crit"]["list"], settings);
        //apply hit caps
        damageObject["non-crit"]["list"] = Helper.hitCapDmgList(damageObject["non-crit"]["list"], settings);
        damageObject["crit"]["list"] = Helper.hitCapDmgList(damageObject["crit"]["list"], settings);
        //add up damages
        damageObject["non-crit"]["list"] = Helper.listAdder(damageObject["non-crit"]["list"], splitSoul);
        damageObject["crit"]["list"] = Helper.listAdder(damageObject["crit"]["list"], splitSoulCrit);
        //calc min, avg, or max depending on request
        hits.push(AVG_INS.returnDecider(damageObject, settings, abil_val));
        hitCount += 1;
    }
    //calc total damage
    hits.push(Helper.totalDamageCalc(hits));
    return Helper.flooredList(hits);
}
$25b0861d2f313766$exports = $25b0861d2f313766$var$corruption_shot;


var $f703b320d6fe9792$exports = {};









var $iTwOG = parcelRequire("iTwOG");
var $f703b320d6fe9792$require$channel = $iTwOG.channel;
function $f703b320d6fe9792$var$fragmentation_shot(type, settings, numberOfHits) {
    const AD_INS = new $06e411d30d717574$exports();
    const NPC_INS = new $46e9ba02ca396156$exports();
    const HIT_INS = new $137c7cf96fb1168c$exports();
    const CRIT_INS = new $d6112baf2310618b$exports();
    const AVG_INS = new $37f0999020a30e20$exports();
    const Helper = new $8ddf59f24df0252b$exports();
    let abil_val = "fragmentation shot";
    const fixedPercent = $25f1b0a25b94cce2$exports.abilities[abil_val]["fixed percent"];
    const variablePercent = $25f1b0a25b94cce2$exports.abilities[abil_val]["variable percent"];
    settings["category"] = $25f1b0a25b94cce2$exports.abilities[abil_val]["category"];
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
        let onHit = HIT_INS.calcOnHit(fixed, variable, type, $25f1b0a25b94cce2$exports.abilities[abil_val]["on hit effects"], settings);
        //sets up for further calculations
        damageObject["non-crit"]["list"] = Helper.baseDamageListCreator(onHit[0], onHit[1]);
        //apply crit dmg
        damageObject["crit"]["list"] = CRIT_INS.critDamageList(damageObject["non-crit"]["list"], settings);
        //apply on-npc effects and hitcaps
        damageObject["non-crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["non-crit"]["list"], settings, AD);
        damageObject["crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["crit"]["list"], settings, AD);
        //split soul
        splitSoul = $a9953cb8dcc55832$exports(damageObject["non-crit"]["list"], settings);
        splitSoulCrit = $a9953cb8dcc55832$exports(damageObject["crit"]["list"], settings);
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
$f703b320d6fe9792$exports = $f703b320d6fe9792$var$fragmentation_shot;


var $6fad83ed8d29f85b$exports = {};









var $iTwOG = parcelRequire("iTwOG");
var $6fad83ed8d29f85b$require$channel = $iTwOG.channel;
function $6fad83ed8d29f85b$var$snipe(type, settings, numberOfHits) {
    const AD_INS = new $06e411d30d717574$exports();
    const NPC_INS = new $46e9ba02ca396156$exports();
    const HIT_INS = new $137c7cf96fb1168c$exports();
    const CRIT_INS = new $d6112baf2310618b$exports();
    const AVG_INS = new $37f0999020a30e20$exports();
    const Helper = new $8ddf59f24df0252b$exports();
    let abil_val = "snipe";
    const fixedPercent = $25f1b0a25b94cce2$exports.abilities[abil_val]["fixed percent"];
    const variablePercent = $25f1b0a25b94cce2$exports.abilities[abil_val]["variable percent"];
    settings["category"] = $25f1b0a25b94cce2$exports.abilities[abil_val]["category"];
    const hits = [];
    for(var hitsplat = 0; hitsplat < numberOfHits; hitsplat++){
        const damageObject = Helper.damageObjectCreator(settings);
        //calculates ability damage
        let AD = AD_INS.calcAd(type, settings); //AD_INS.calcAd(type,settings);
        //sets fixed and variable damage
        let fixed = Math.floor(AD * fixedPercent);
        let variable = Math.floor(AD * variablePercent);
        //applies on-hit effects
        let onHit = HIT_INS.calcOnHit(fixed, variable, type, $25f1b0a25b94cce2$exports.abilities[abil_val]["on hit effects"], settings);
        //sets up for further calculations
        damageObject["non-crit"]["list"] = Helper.baseDamageListCreator(onHit[0], onHit[1]);
        //apply crit dmg
        damageObject["crit"]["list"] = CRIT_INS.critDamageList(damageObject["non-crit"]["list"], settings);
        //apply on-npc effects and hitcaps
        damageObject["non-crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["non-crit"]["list"], settings, AD);
        damageObject["crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["crit"]["list"], settings, AD);
        //split soul
        splitSoul = $a9953cb8dcc55832$exports(damageObject["non-crit"]["list"], settings);
        splitSoulCrit = $a9953cb8dcc55832$exports(damageObject["crit"]["list"], settings);
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
$6fad83ed8d29f85b$exports = $6fad83ed8d29f85b$var$snipe;


var $1e210316c5947647$exports = {};









var $iTwOG = parcelRequire("iTwOG");
var $1e210316c5947647$require$channel = $iTwOG.channel;
function $1e210316c5947647$var$binding_shot(type, settings, numberOfHits) {
    const AD_INS = new $06e411d30d717574$exports();
    const NPC_INS = new $46e9ba02ca396156$exports();
    const HIT_INS = new $137c7cf96fb1168c$exports();
    const CRIT_INS = new $d6112baf2310618b$exports();
    const AVG_INS = new $37f0999020a30e20$exports();
    const Helper = new $8ddf59f24df0252b$exports();
    let abil_val = "binding shot";
    let fixedPercent = $25f1b0a25b94cce2$exports.abilities[abil_val]["fixed percent"];
    let variablePercent = $25f1b0a25b94cce2$exports.abilities[abil_val]["variable percent"];
    settings["category"] = $25f1b0a25b94cce2$exports.abilities[abil_val]["category"];
    if (settings["flanking position"] === true) {
        fixedPercent += fixedPercent * settings["flanking"] * 0.4;
        variablePercent += variablePercent * settings["flanking"] * 0.4;
    }
    const hits = [];
    for(var hitsplat = 0; hitsplat < numberOfHits; hitsplat++){
        const damageObject = Helper.damageObjectCreator(settings);
        //calculates ability damage
        let AD = AD_INS.calcAd(type, settings); //AD_INS.calcAd(type,settings);
        //sets fixed and variable damage
        let fixed = Math.floor(AD * fixedPercent);
        let variable = Math.floor(AD * variablePercent);
        //applies on-hit effects
        let onHit = HIT_INS.calcOnHit(fixed, variable, type, $25f1b0a25b94cce2$exports.abilities[abil_val]["on hit effects"], settings);
        //sets up for further calculations
        damageObject["non-crit"]["list"] = Helper.baseDamageListCreator(onHit[0], onHit[1]);
        //apply crit dmg
        damageObject["crit"]["list"] = CRIT_INS.critDamageList(damageObject["non-crit"]["list"], settings);
        //apply on-npc effects and hitcaps
        damageObject["non-crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["non-crit"]["list"], settings, AD);
        damageObject["crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["crit"]["list"], settings, AD);
        //split soul
        splitSoul = $a9953cb8dcc55832$exports(damageObject["non-crit"]["list"], settings);
        splitSoulCrit = $a9953cb8dcc55832$exports(damageObject["crit"]["list"], settings);
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
$1e210316c5947647$exports = $1e210316c5947647$var$binding_shot;


var $be3044a72bf88d4d$exports = {};









var $iTwOG = parcelRequire("iTwOG");
var $be3044a72bf88d4d$require$channel = $iTwOG.channel;
function $be3044a72bf88d4d$var$tight_bindings(type, settings, numberOfHits) {
    const AD_INS = new $06e411d30d717574$exports();
    const NPC_INS = new $46e9ba02ca396156$exports();
    const HIT_INS = new $137c7cf96fb1168c$exports();
    const CRIT_INS = new $d6112baf2310618b$exports();
    const AVG_INS = new $37f0999020a30e20$exports();
    const Helper = new $8ddf59f24df0252b$exports();
    let abil_val = "tight bindings";
    const fixedPercent = $25f1b0a25b94cce2$exports.abilities[abil_val]["fixed percent"];
    const variablePercent = $25f1b0a25b94cce2$exports.abilities[abil_val]["variable percent"];
    settings["category"] = $25f1b0a25b94cce2$exports.abilities[abil_val]["category"];
    if (settings["flanking position"] === true) {
        fixedPercent += fixedPercent * settings["flanking"] * 0.4;
        variablePercent += variablePercent * settings["flanking"] * 0.4;
    }
    const hits = [];
    for(var hitsplat = 0; hitsplat < numberOfHits; hitsplat++){
        const damageObject = Helper.damageObjectCreator(settings);
        //calculates ability damage
        let AD = AD_INS.calcAd(type, settings); //AD_INS.calcAd(type,settings);
        //sets fixed and variable damage
        let fixed = Math.floor(AD * fixedPercent);
        let variable = Math.floor(AD * variablePercent);
        //applies on-hit effects
        let onHit = HIT_INS.calcOnHit(fixed, variable, type, $25f1b0a25b94cce2$exports.abilities[abil_val]["on hit effects"], settings);
        //sets up for further calculations
        damageObject["non-crit"]["list"] = Helper.baseDamageListCreator(onHit[0], onHit[1]);
        //apply crit dmg
        damageObject["crit"]["list"] = CRIT_INS.critDamageList(damageObject["non-crit"]["list"], settings);
        //apply on-npc effects and hitcaps
        damageObject["non-crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["non-crit"]["list"], settings, AD);
        damageObject["crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["crit"]["list"], settings, AD);
        //split soul
        splitSoul = $a9953cb8dcc55832$exports(damageObject["non-crit"]["list"], settings);
        splitSoulCrit = $a9953cb8dcc55832$exports(damageObject["crit"]["list"], settings);
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
$be3044a72bf88d4d$exports = $be3044a72bf88d4d$var$tight_bindings;



var $4487ab408a9357b5$exports = {};









var $iTwOG = parcelRequire("iTwOG");
var $4487ab408a9357b5$require$channel = $iTwOG.channel;
function $4487ab408a9357b5$var$snapshot(type, settings, numberOfHits) {
    const AD_INS = new $06e411d30d717574$exports();
    const NPC_INS = new $46e9ba02ca396156$exports();
    const HIT_INS = new $137c7cf96fb1168c$exports();
    const CRIT_INS = new $d6112baf2310618b$exports();
    const AVG_INS = new $37f0999020a30e20$exports();
    const Helper = new $8ddf59f24df0252b$exports();
    let abil_val = "snapshot";
    const fixedPercent = $25f1b0a25b94cce2$exports.abilities[abil_val]["fixed percent"];
    const variablePercent = $25f1b0a25b94cce2$exports.abilities[abil_val]["variable percent"];
    settings["category"] = $25f1b0a25b94cce2$exports.abilities[abil_val]["category"];
    const hits = [];
    numberOfHits = 2;
    for(var hitsplat = 0; hitsplat < numberOfHits; hitsplat++){
        const damageObject = Helper.damageObjectCreator(settings);
        //calculates ability damage
        let AD = AD_INS.calcAd(type, settings); //AD_INS.calcAd(type,settings);
        //sets fixed and variable damage
        let fixed = Math.floor(AD * fixedPercent);
        let variable = Math.floor(AD * variablePercent);
        //applies on-hit effects
        let onHit = HIT_INS.calcOnHit(fixed, variable, type, $25f1b0a25b94cce2$exports.abilities[abil_val]["on hit effects"], settings);
        //sets up for further calculations
        damageObject["non-crit"]["list"] = Helper.baseDamageListCreator(onHit[0], onHit[1]);
        //apply crit dmg
        damageObject["crit"]["list"] = CRIT_INS.critDamageList(damageObject["non-crit"]["list"], settings);
        //apply on-npc effects and hitcaps
        damageObject["non-crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["non-crit"]["list"], settings, AD);
        damageObject["crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["crit"]["list"], settings, AD);
        //split soul
        splitSoul = $a9953cb8dcc55832$exports(damageObject["non-crit"]["list"], settings);
        splitSoulCrit = $a9953cb8dcc55832$exports(damageObject["crit"]["list"], settings);
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
$4487ab408a9357b5$exports = $4487ab408a9357b5$var$snapshot;



var $81f9a689b1562210$exports = {};









var $iTwOG = parcelRequire("iTwOG");
var $81f9a689b1562210$require$channel = $iTwOG.channel;
function $81f9a689b1562210$var$ricochet(type, settings, numberOfHits) {
    const AD_INS = new $06e411d30d717574$exports();
    const NPC_INS = new $46e9ba02ca396156$exports();
    const HIT_INS = new $137c7cf96fb1168c$exports();
    const CRIT_INS = new $d6112baf2310618b$exports();
    const AVG_INS = new $37f0999020a30e20$exports();
    const Helper = new $8ddf59f24df0252b$exports();
    let abil_val = "ricochet";
    const fixedPercent = $25f1b0a25b94cce2$exports.abilities[abil_val]["fixed percent"];
    const variablePercent = $25f1b0a25b94cce2$exports.abilities[abil_val]["variable percent"];
    settings["category"] = $25f1b0a25b94cce2$exports.abilities[abil_val]["category"];
    const hits = [];
    for(var hitsplat = 0; hitsplat < numberOfHits; hitsplat++){
        const damageObject = Helper.damageObjectCreator(settings);
        //calculates ability damage
        let AD = AD_INS.calcAd(type, settings); //AD_INS.calcAd(type,settings);
        //sets fixed and variable damage
        let fixed = Math.floor(AD * fixedPercent);
        let variable = Math.floor(AD * variablePercent);
        //applies on-hit effects
        let onHit = HIT_INS.calcOnHit(fixed, variable, type, $25f1b0a25b94cce2$exports.abilities[abil_val]["on hit effects"], settings);
        //sets up for further calculations
        damageObject["non-crit"]["list"] = Helper.baseDamageListCreator(onHit[0], onHit[1]);
        //apply crit dmg
        damageObject["crit"]["list"] = CRIT_INS.critDamageList(damageObject["non-crit"]["list"], settings);
        //apply on-npc effects and hitcaps
        damageObject["non-crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["non-crit"]["list"], settings, AD);
        damageObject["crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["crit"]["list"], settings, AD);
        //split soul
        splitSoul = $a9953cb8dcc55832$exports(damageObject["non-crit"]["list"], settings);
        splitSoulCrit = $a9953cb8dcc55832$exports(damageObject["crit"]["list"], settings);
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
$81f9a689b1562210$exports = $81f9a689b1562210$var$ricochet;


var $03df41b59420a3fa$exports = {};

var $iTwOG = parcelRequire("iTwOG");
var $03df41b59420a3fa$require$channel = $iTwOG.channel;
var $07162f6e950c1efc$exports = {};









var $iTwOG = parcelRequire("iTwOG");
var $07162f6e950c1efc$require$channel = $iTwOG.channel;
function $07162f6e950c1efc$var$greater_ricochet_3(type, settings, numberOfHits) {
    const AD_INS = new $06e411d30d717574$exports();
    const NPC_INS = new $46e9ba02ca396156$exports();
    const HIT_INS = new $137c7cf96fb1168c$exports();
    const CRIT_INS = new $d6112baf2310618b$exports();
    const AVG_INS = new $37f0999020a30e20$exports();
    const Helper = new $8ddf59f24df0252b$exports();
    let abil_val = "greater ricochet 1";
    const fixedPercent = $25f1b0a25b94cce2$exports.abilities[abil_val]["fixed percent"];
    const variablePercent = $25f1b0a25b94cce2$exports.abilities[abil_val]["variable percent"];
    settings["category"] = $25f1b0a25b94cce2$exports.abilities[abil_val]["category"];
    const hits = [];
    for(var hitsplat = 0; hitsplat < numberOfHits; hitsplat++){
        const damageObject = Helper.damageObjectCreator(settings);
        //calculates ability damage
        let AD = AD_INS.calcAd(type, settings); //AD_INS.calcAd(type,settings);
        //sets fixed and variable damage
        let fixed = Math.floor(AD * fixedPercent);
        let variable = Math.floor(AD * variablePercent);
        //applies on-hit effects
        let onHit = HIT_INS.calcOnHit(fixed, variable, type, $25f1b0a25b94cce2$exports.abilities[abil_val]["on hit effects"], settings);
        //sets up for further calculations
        damageObject["non-crit"]["list"] = Helper.baseDamageListCreator(onHit[0], onHit[1]);
        //apply crit dmg
        damageObject["crit"]["list"] = CRIT_INS.critDamageList(damageObject["non-crit"]["list"], settings);
        //apply on-npc effects and hitcaps
        damageObject["non-crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["non-crit"]["list"], settings, AD);
        damageObject["crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["crit"]["list"], settings, AD);
        //split soul
        splitSoul = $a9953cb8dcc55832$exports(damageObject["non-crit"]["list"], settings);
        splitSoulCrit = $a9953cb8dcc55832$exports(damageObject["crit"]["list"], settings);
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
$07162f6e950c1efc$exports = $07162f6e950c1efc$var$greater_ricochet_3;


var $51bec509102c5f5a$exports = {};









var $iTwOG = parcelRequire("iTwOG");
var $51bec509102c5f5a$require$channel = $iTwOG.channel;
function $51bec509102c5f5a$var$greater_ricochet_2(type, settings, numberOfHits) {
    const AD_INS = new $06e411d30d717574$exports();
    const NPC_INS = new $46e9ba02ca396156$exports();
    const HIT_INS = new $137c7cf96fb1168c$exports();
    const CRIT_INS = new $d6112baf2310618b$exports();
    const AVG_INS = new $37f0999020a30e20$exports();
    const Helper = new $8ddf59f24df0252b$exports();
    let abil_val = "greater ricochet 2";
    const fixedPercent = $25f1b0a25b94cce2$exports.abilities[abil_val]["fixed percent"];
    const variablePercent = $25f1b0a25b94cce2$exports.abilities[abil_val]["variable percent"];
    settings["category"] = $25f1b0a25b94cce2$exports.abilities[abil_val]["category"];
    const hits = [];
    for(var hitsplat = 0; hitsplat < numberOfHits; hitsplat++){
        const damageObject = Helper.damageObjectCreator(settings);
        //calculates ability damage
        let AD = AD_INS.calcAd(type, settings); //AD_INS.calcAd(type,settings);
        //sets fixed and variable damage
        let fixed = Math.floor(AD * fixedPercent);
        let variable = Math.floor(AD * variablePercent);
        //applies on-hit effects
        let onHit = HIT_INS.calcOnHit(fixed, variable, type, $25f1b0a25b94cce2$exports.abilities[abil_val]["on hit effects"], settings);
        //sets up for further calculations
        damageObject["non-crit"]["list"] = Helper.baseDamageListCreator(onHit[0], onHit[1]);
        //apply crit dmg
        damageObject["crit"]["list"] = CRIT_INS.critDamageList(damageObject["non-crit"]["list"], settings);
        //apply on-npc effects and hitcaps
        damageObject["non-crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["non-crit"]["list"], settings, AD);
        damageObject["crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["crit"]["list"], settings, AD);
        //split soul
        splitSoul = $a9953cb8dcc55832$exports(damageObject["non-crit"]["list"], settings);
        splitSoulCrit = $a9953cb8dcc55832$exports(damageObject["crit"]["list"], settings);
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
$51bec509102c5f5a$exports = $51bec509102c5f5a$var$greater_ricochet_2;


var $f0ab4a2567128fc4$exports = {};









var $iTwOG = parcelRequire("iTwOG");
var $f0ab4a2567128fc4$require$channel = $iTwOG.channel;
function $f0ab4a2567128fc4$var$greater_ricochet_1(type, settings, numberOfHits) {
    const AD_INS = new $06e411d30d717574$exports();
    const NPC_INS = new $46e9ba02ca396156$exports();
    const HIT_INS = new $137c7cf96fb1168c$exports();
    const CRIT_INS = new $d6112baf2310618b$exports();
    const AVG_INS = new $37f0999020a30e20$exports();
    const Helper = new $8ddf59f24df0252b$exports();
    let abil_val = "greater ricochet 3";
    const fixedPercent = $25f1b0a25b94cce2$exports.abilities[abil_val]["fixed percent"];
    const variablePercent = $25f1b0a25b94cce2$exports.abilities[abil_val]["variable percent"];
    settings["category"] = $25f1b0a25b94cce2$exports.abilities[abil_val]["category"];
    const hits = [];
    for(var hitsplat = 0; hitsplat < numberOfHits; hitsplat++){
        const damageObject = Helper.damageObjectCreator(settings);
        //calculates ability damage
        let AD = AD_INS.calcAd(type, settings); //AD_INS.calcAd(type,settings);
        //sets fixed and variable damage
        let fixed = Math.floor(AD * fixedPercent);
        let variable = Math.floor(AD * variablePercent);
        //applies on-hit effects
        let onHit = HIT_INS.calcOnHit(fixed, variable, type, $25f1b0a25b94cce2$exports.abilities[abil_val]["on hit effects"], settings);
        //sets up for further calculations
        damageObject["non-crit"]["list"] = Helper.baseDamageListCreator(onHit[0], onHit[1]);
        //apply crit dmg
        damageObject["crit"]["list"] = CRIT_INS.critDamageList(damageObject["non-crit"]["list"], settings);
        //apply on-npc effects and hitcaps
        damageObject["non-crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["non-crit"]["list"], settings, AD);
        damageObject["crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["crit"]["list"], settings, AD);
        //split soul
        splitSoul = $a9953cb8dcc55832$exports(damageObject["non-crit"]["list"], settings);
        splitSoulCrit = $a9953cb8dcc55832$exports(damageObject["crit"]["list"], settings);
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
$f0ab4a2567128fc4$exports = $f0ab4a2567128fc4$var$greater_ricochet_1;


function $03df41b59420a3fa$var$greater_ricochet(type, settings, numberOfHits) {
    const primary = $07162f6e950c1efc$exports(type, settings, numberOfHits);
    const secondary = $51bec509102c5f5a$exports(type, settings, 2);
    const tertiary = $f0ab4a2567128fc4$exports(type, settings, settings["caroming rank"]);
    return [
        primary[primary.length - 1] + secondary[secondary.length - 1] + tertiary[tertiary.length - 1]
    ];
}
$03df41b59420a3fa$exports = $03df41b59420a3fa$var$greater_ricochet;


var $12a84f393db5519a$exports = {};









var $iTwOG = parcelRequire("iTwOG");
var $12a84f393db5519a$require$channel = $iTwOG.channel;
function $12a84f393db5519a$var$incendiary_shot(type, settings, numberOfHits) {
    const AD_INS = new $06e411d30d717574$exports();
    const NPC_INS = new $46e9ba02ca396156$exports();
    const HIT_INS = new $137c7cf96fb1168c$exports();
    const CRIT_INS = new $d6112baf2310618b$exports();
    const AVG_INS = new $37f0999020a30e20$exports();
    const Helper = new $8ddf59f24df0252b$exports();
    let abil_val = "incendiary shot";
    const fixedPercent = $25f1b0a25b94cce2$exports.abilities[abil_val]["fixed percent"];
    const variablePercent = $25f1b0a25b94cce2$exports.abilities[abil_val]["variable percent"];
    settings["category"] = $25f1b0a25b94cce2$exports.abilities[abil_val]["category"];
    const hits = [];
    for(var hitsplat = 0; hitsplat < numberOfHits; hitsplat++){
        const damageObject = Helper.damageObjectCreator(settings);
        //calculates ability damage
        let AD = AD_INS.calcAd(type, settings); //AD_INS.calcAd(type,settings);
        //sets fixed and variable damage
        let fixed = Math.floor(AD * fixedPercent);
        let variable = Math.floor(AD * variablePercent);
        //applies on-hit effects
        let onHit = HIT_INS.calcOnHit(fixed, variable, type, $25f1b0a25b94cce2$exports.abilities[abil_val]["on hit effects"], settings);
        //sets up for further calculations
        damageObject["non-crit"]["list"] = Helper.baseDamageListCreator(onHit[0], onHit[1]);
        //apply crit dmg
        damageObject["crit"]["list"] = CRIT_INS.critDamageList(damageObject["non-crit"]["list"], settings);
        //apply on-npc effects and hitcaps
        damageObject["non-crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["non-crit"]["list"], settings, AD);
        damageObject["crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["crit"]["list"], settings, AD);
        //split soul
        splitSoul = $a9953cb8dcc55832$exports(damageObject["non-crit"]["list"], settings);
        splitSoulCrit = $a9953cb8dcc55832$exports(damageObject["crit"]["list"], settings);
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
$12a84f393db5519a$exports = $12a84f393db5519a$var$incendiary_shot;


var $5d9b6fe550d28fcb$exports = {};









var $iTwOG = parcelRequire("iTwOG");
var $5d9b6fe550d28fcb$require$channel = $iTwOG.channel;
function $5d9b6fe550d28fcb$var$unload(type, settings, numberOfHits) {
    const AD_INS = new $06e411d30d717574$exports();
    const NPC_INS = new $46e9ba02ca396156$exports();
    const HIT_INS = new $137c7cf96fb1168c$exports();
    const CRIT_INS = new $d6112baf2310618b$exports();
    const AVG_INS = new $37f0999020a30e20$exports();
    const Helper = new $8ddf59f24df0252b$exports();
    let abil_val = "unload";
    const fixedPercent = $25f1b0a25b94cce2$exports.abilities[abil_val]["fixed percent"];
    const variablePercent = $25f1b0a25b94cce2$exports.abilities[abil_val]["variable percent"];
    settings["category"] = $25f1b0a25b94cce2$exports.abilities[abil_val]["category"];
    const hits = [];
    numberOfHits = 4;
    for(var hitsplat = 0; hitsplat < numberOfHits; hitsplat++){
        const damageObject = Helper.damageObjectCreator(settings);
        //calculates ability damage
        let AD = AD_INS.calcAd(type, settings); //AD_INS.calcAd(type,settings);
        //sets fixed and variable damage
        let fixed = Math.floor(AD * fixedPercent);
        let variable = Math.floor(AD * variablePercent);
        //applies on-hit effects
        let onHit = HIT_INS.calcOnHit(fixed, variable, type, $25f1b0a25b94cce2$exports.abilities[abil_val]["on hit effects"], settings);
        //sets up for further calculations
        damageObject["non-crit"]["list"] = Helper.baseDamageListCreator(onHit[0], onHit[1]);
        //apply crit dmg
        damageObject["crit"]["list"] = CRIT_INS.critDamageList(damageObject["non-crit"]["list"], settings);
        //apply on-npc effects and hitcaps
        damageObject["non-crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["non-crit"]["list"], settings, AD);
        damageObject["crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["crit"]["list"], settings, AD);
        //split soul
        splitSoul = $a9953cb8dcc55832$exports(damageObject["non-crit"]["list"], settings);
        splitSoulCrit = $a9953cb8dcc55832$exports(damageObject["crit"]["list"], settings);
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
$5d9b6fe550d28fcb$exports = $5d9b6fe550d28fcb$var$unload;


var $6af88e7248559212$exports = {};









var $iTwOG = parcelRequire("iTwOG");
var $6af88e7248559212$require$channel = $iTwOG.channel;
function $6af88e7248559212$var$dark_bow_spec(type, settings, numberOfHits) {
    const AD_INS = new $06e411d30d717574$exports();
    const NPC_INS = new $46e9ba02ca396156$exports();
    const HIT_INS = new $137c7cf96fb1168c$exports();
    const CRIT_INS = new $d6112baf2310618b$exports();
    const AVG_INS = new $37f0999020a30e20$exports();
    const Helper = new $8ddf59f24df0252b$exports();
    let abil_val = "darkbow";
    const fixedPercent = $25f1b0a25b94cce2$exports.abilities[abil_val]["fixed percent"];
    const variablePercent = $25f1b0a25b94cce2$exports.abilities[abil_val]["variable percent"];
    settings["category"] = $25f1b0a25b94cce2$exports.abilities[abil_val]["category"];
    const hits = [];
    numberOfHits = 2;
    for(var hitsplat = 0; hitsplat < numberOfHits; hitsplat++){
        const damageObject = Helper.damageObjectCreator(settings);
        //calculates ability damage
        let AD = AD_INS.calcAd(type, settings); //AD_INS.calcAd(type,settings);
        //sets fixed and variable damage
        let fixed = Math.floor(AD * fixedPercent);
        let variable = Math.floor(AD * variablePercent);
        //applies on-hit effects
        let onHit = HIT_INS.calcOnHit(fixed, variable, type, $25f1b0a25b94cce2$exports.abilities[abil_val]["on hit effects"], settings);
        //sets up for further calculations
        damageObject["non-crit"]["list"] = Helper.baseDamageListCreator(onHit[0], onHit[1]);
        //apply crit dmg
        damageObject["crit"]["list"] = CRIT_INS.critDamageList(damageObject["non-crit"]["list"], settings);
        //apply on-npc effects and hitcaps
        damageObject["non-crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["non-crit"]["list"], settings, AD);
        damageObject["crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["crit"]["list"], settings, AD);
        //split soul
        splitSoul = $a9953cb8dcc55832$exports(damageObject["non-crit"]["list"], settings);
        splitSoulCrit = $a9953cb8dcc55832$exports(damageObject["crit"]["list"], settings);
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
$6af88e7248559212$exports = $6af88e7248559212$var$dark_bow_spec;


var $676d5a4f38d6ccd8$exports = {};









var $iTwOG = parcelRequire("iTwOG");
var $676d5a4f38d6ccd8$require$channel = $iTwOG.channel;
function $676d5a4f38d6ccd8$var$bolg_spec(type, settings, numberOfHits) {
    const AD_INS = new $06e411d30d717574$exports();
    const NPC_INS = new $46e9ba02ca396156$exports();
    const HIT_INS = new $137c7cf96fb1168c$exports();
    const CRIT_INS = new $d6112baf2310618b$exports();
    const AVG_INS = new $37f0999020a30e20$exports();
    const Helper = new $8ddf59f24df0252b$exports();
    let abil_val = "bolg spec";
    const fixedPercent = $25f1b0a25b94cce2$exports.abilities[abil_val]["fixed percent"];
    const variablePercent = $25f1b0a25b94cce2$exports.abilities[abil_val]["variable percent"];
    settings["category"] = $25f1b0a25b94cce2$exports.abilities[abil_val]["category"];
    const hits = [];
    numberOfHits = 2;
    for(var hitsplat = 0; hitsplat < numberOfHits; hitsplat++){
        const damageObject = Helper.damageObjectCreator(settings);
        //calculates ability damage
        let AD = AD_INS.calcAd(type, settings); //AD_INS.calcAd(type,settings);
        //sets fixed and variable damage
        let fixed = Math.floor(AD * fixedPercent);
        let variable = Math.floor(AD * variablePercent);
        //applies on-hit effects
        let onHit = HIT_INS.calcOnHit(fixed, variable, type, $25f1b0a25b94cce2$exports.abilities[abil_val]["on hit effects"], settings);
        //sets up for further calculations
        damageObject["non-crit"]["list"] = Helper.baseDamageListCreator(onHit[0], onHit[1]);
        //apply crit dmg
        damageObject["crit"]["list"] = CRIT_INS.critDamageList(damageObject["non-crit"]["list"], settings);
        //apply on-npc effects and hitcaps
        damageObject["non-crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["non-crit"]["list"], settings, AD);
        damageObject["crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["crit"]["list"], settings, AD);
        //split soul
        splitSoul = $a9953cb8dcc55832$exports(damageObject["non-crit"]["list"], settings);
        splitSoulCrit = $a9953cb8dcc55832$exports(damageObject["crit"]["list"], settings);
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
$676d5a4f38d6ccd8$exports = $676d5a4f38d6ccd8$var$bolg_spec;


var $e2a99aed0728e508$exports = {};









var $iTwOG = parcelRequire("iTwOG");
var $e2a99aed0728e508$require$channel = $iTwOG.channel;
function $e2a99aed0728e508$var$magic_short_bow_spec(type, settings, numberOfHits) {
    const AD_INS = new $06e411d30d717574$exports();
    const NPC_INS = new $46e9ba02ca396156$exports();
    const HIT_INS = new $137c7cf96fb1168c$exports();
    const CRIT_INS = new $d6112baf2310618b$exports();
    const AVG_INS = new $37f0999020a30e20$exports();
    const Helper = new $8ddf59f24df0252b$exports();
    let abil_val = "magic shortbow";
    const fixedPercent = $25f1b0a25b94cce2$exports.abilities[abil_val]["fixed percent"];
    const variablePercent = $25f1b0a25b94cce2$exports.abilities[abil_val]["variable percent"];
    settings["category"] = $25f1b0a25b94cce2$exports.abilities[abil_val]["category"];
    const hits = [];
    numberOfHits = 2;
    for(var hitsplat = 0; hitsplat < numberOfHits; hitsplat++){
        const damageObject = Helper.damageObjectCreator(settings);
        //calculates ability damage
        let AD = AD_INS.calcAd(type, settings); //AD_INS.calcAd(type,settings);
        //sets fixed and variable damage
        let fixed = Math.floor(AD * fixedPercent);
        let variable = Math.floor(AD * variablePercent);
        //applies on-hit effects
        let onHit = HIT_INS.calcOnHit(fixed, variable, type, $25f1b0a25b94cce2$exports.abilities[abil_val]["on hit effects"], settings);
        //sets up for further calculations
        damageObject["non-crit"]["list"] = Helper.baseDamageListCreator(onHit[0], onHit[1]);
        //apply crit dmg
        damageObject["crit"]["list"] = CRIT_INS.critDamageList(damageObject["non-crit"]["list"], settings);
        //apply on-npc effects and hitcaps
        damageObject["non-crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["non-crit"]["list"], settings, AD);
        damageObject["crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["crit"]["list"], settings, AD);
        //split soul
        splitSoul = $a9953cb8dcc55832$exports(damageObject["non-crit"]["list"], settings);
        splitSoulCrit = $a9953cb8dcc55832$exports(damageObject["crit"]["list"], settings);
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
$e2a99aed0728e508$exports = $e2a99aed0728e508$var$magic_short_bow_spec;


var $829bcd81e189e12f$exports = {};

var $iTwOG = parcelRequire("iTwOG");
var $829bcd81e189e12f$require$channel = $iTwOG.channel;
var $c4055f7640a73bc3$exports = {};









var $iTwOG = parcelRequire("iTwOG");
var $c4055f7640a73bc3$require$channel = $iTwOG.channel;
function $c4055f7640a73bc3$var$deadshot_initial_hit(type, settings, numberOfHits) {
    const AD_INS = new $06e411d30d717574$exports();
    const NPC_INS = new $46e9ba02ca396156$exports();
    const HIT_INS = new $137c7cf96fb1168c$exports();
    const CRIT_INS = new $d6112baf2310618b$exports();
    const AVG_INS = new $37f0999020a30e20$exports();
    const Helper = new $8ddf59f24df0252b$exports();
    let abil_val = "deadshot - initial hit";
    let fixedPercent = $25f1b0a25b94cce2$exports.abilities[abil_val]["fixed percent"];
    let variablePercent = $25f1b0a25b94cce2$exports.abilities[abil_val]["variable percent"];
    settings["category"] = $25f1b0a25b94cce2$exports.abilities[abil_val]["category"];
    if (settings["cape"] === "igneous kal-xil") {
        fixedPercent = 1.15;
        variablePercent = 0.2;
    }
    const hits = [];
    for(var hitsplat = 0; hitsplat < numberOfHits; hitsplat++){
        const damageObject = Helper.damageObjectCreator(settings);
        //calculates ability damage
        let AD = AD_INS.calcAd(type, settings); //AD_INS.calcAd(type,settings);
        //sets fixed and variable damage
        let fixed = Math.floor(AD * fixedPercent);
        let variable = Math.floor(AD * variablePercent);
        //applies on-hit effects
        let onHit = HIT_INS.calcOnHit(fixed, variable, type, $25f1b0a25b94cce2$exports.abilities[abil_val]["on hit effects"], settings);
        //sets up for further calculations
        damageObject["non-crit"]["list"] = Helper.baseDamageListCreator(onHit[0], onHit[1]);
        //apply crit dmg
        damageObject["crit"]["list"] = CRIT_INS.critDamageList(damageObject["non-crit"]["list"], settings);
        //apply on-npc effects and hitcaps
        damageObject["non-crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["non-crit"]["list"], settings, AD);
        damageObject["crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["crit"]["list"], settings, AD);
        //split soul
        splitSoul = $a9953cb8dcc55832$exports(damageObject["non-crit"]["list"], settings);
        splitSoulCrit = $a9953cb8dcc55832$exports(damageObject["crit"]["list"], settings);
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
$c4055f7640a73bc3$exports = $c4055f7640a73bc3$var$deadshot_initial_hit;


var $5a71812c85e69081$exports = {};









var $iTwOG = parcelRequire("iTwOG");
var $5a71812c85e69081$require$channel = $iTwOG.channel;
function $5a71812c85e69081$var$deadshot_bleed_hit(type, settings, numberOfHits) {
    const AD_INS = new $06e411d30d717574$exports();
    const NPC_INS = new $46e9ba02ca396156$exports();
    const HIT_INS = new $137c7cf96fb1168c$exports();
    const CRIT_INS = new $d6112baf2310618b$exports();
    const AVG_INS = new $37f0999020a30e20$exports();
    const Helper = new $8ddf59f24df0252b$exports();
    let abil_val = "deadshot - bleed hit";
    let fixedPercent = $25f1b0a25b94cce2$exports.abilities[abil_val]["fixed percent"];
    let variablePercent = $25f1b0a25b94cce2$exports.abilities[abil_val]["variable percent"];
    settings["category"] = $25f1b0a25b94cce2$exports.abilities[abil_val]["category"];
    if (settings["cape"] === "igneous kal-xil") fixedPercent = 0.7;
    const hits = [];
    for(var hitsplat = 0; hitsplat < numberOfHits; hitsplat++){
        const damageObject = Helper.damageObjectCreator(settings);
        //calculates ability damage
        let AD = AD_INS.calcAd(type, settings); //AD_INS.calcAd(type,settings);
        //sets fixed and variable damage
        let fixed = Math.floor(AD * fixedPercent);
        let variable = Math.floor(AD * variablePercent);
        //applies on-hit effects
        let onHit = HIT_INS.calcOnHit(fixed, variable, type, $25f1b0a25b94cce2$exports.abilities[abil_val]["on hit effects"], settings);
        //sets up for further calculations
        damageObject["non-crit"]["list"] = Helper.baseDamageListCreator(onHit[0], onHit[1]);
        //apply crit dmg
        damageObject["crit"]["list"] = CRIT_INS.critDamageList(damageObject["non-crit"]["list"], settings);
        //apply on-npc effects and hitcaps
        damageObject["non-crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["non-crit"]["list"], settings, AD);
        damageObject["crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["crit"]["list"], settings, AD);
        //split soul
        splitSoul = $a9953cb8dcc55832$exports(damageObject["non-crit"]["list"], settings);
        splitSoulCrit = $a9953cb8dcc55832$exports(damageObject["crit"]["list"], settings);
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
$5a71812c85e69081$exports = $5a71812c85e69081$var$deadshot_bleed_hit;


function $829bcd81e189e12f$var$deadshot(type, settings, numberOfHits) {
    const initial = $c4055f7640a73bc3$exports(type, settings, 1);
    let bleedHits = 6;
    if (settings["cape"] === "igneous kal-xil") bleedHits = 8;
    const bleed = $5a71812c85e69081$exports(type, settings, 2);
    return [
        initial[initial.length - 1] + bleed[bleed.length - 1]
    ];
}
$829bcd81e189e12f$exports = $829bcd81e189e12f$var$deadshot;


var $0cbeb3a23eab23db$exports = {};

var $iTwOG = parcelRequire("iTwOG");
var $0cbeb3a23eab23db$require$channel = $iTwOG.channel;
var $5db45d8aae9a0d9f$exports = {};









var $iTwOG = parcelRequire("iTwOG");
var $5db45d8aae9a0d9f$require$channel = $iTwOG.channel;
function $5db45d8aae9a0d9f$var$shadow_tendrils_hit(type, settings, numberOfHits) {
    const AD_INS = new $06e411d30d717574$exports();
    const NPC_INS = new $46e9ba02ca396156$exports();
    const HIT_INS = new $137c7cf96fb1168c$exports();
    const CRIT_INS = new $d6112baf2310618b$exports();
    const AVG_INS = new $37f0999020a30e20$exports();
    const Helper = new $8ddf59f24df0252b$exports();
    let abil_val = "shadow tendrils";
    const fixedPercent = $25f1b0a25b94cce2$exports.abilities[abil_val]["fixed percent"];
    const variablePercent = $25f1b0a25b94cce2$exports.abilities[abil_val]["variable percent"];
    settings["category"] = $25f1b0a25b94cce2$exports.abilities[abil_val]["category"];
    const hits = [];
    for(var hitsplat = 0; hitsplat < numberOfHits; hitsplat++){
        const damageObject = Helper.damageObjectCreator(settings);
        //calculates ability damage
        let AD = AD_INS.calcAd(type, settings); //AD_INS.calcAd(type,settings);
        //sets fixed and variable damage
        let fixed = Math.floor(AD * fixedPercent);
        let variable = Math.floor(AD * variablePercent);
        //applies on-hit effects
        let onHit = HIT_INS.calcOnHit(fixed, variable, type, $25f1b0a25b94cce2$exports.abilities[abil_val]["on hit effects"], settings);
        //sets up for further calculations
        damageObject["non-crit"]["list"] = Helper.baseDamageListCreator(onHit[0], onHit[1]);
        //apply crit dmg
        damageObject["crit"]["list"] = CRIT_INS.critDamageList(damageObject["non-crit"]["list"], settings);
        //apply on-npc effects and hitcaps
        damageObject["non-crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["non-crit"]["list"], settings, AD);
        damageObject["crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["crit"]["list"], settings, AD);
        //split soul
        splitSoul = $a9953cb8dcc55832$exports(damageObject["non-crit"]["list"], settings);
        splitSoulCrit = $a9953cb8dcc55832$exports(damageObject["crit"]["list"], settings);
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
$5db45d8aae9a0d9f$exports = $5db45d8aae9a0d9f$var$shadow_tendrils_hit;


function $0cbeb3a23eab23db$var$shadow_tendrils(type, settings, numberOfHits) {
    const twoHit = $5db45d8aae9a0d9f$exports(type, settings, 2);
    console.log(twoHit);
    const threeHit = $5db45d8aae9a0d9f$exports(type, settings, 3);
    const fourHit = $5db45d8aae9a0d9f$exports(type, settings, 4);
    const fiveHit = $5db45d8aae9a0d9f$exports(type, settings, 5);
    return [
        Math.floor(0.1 * twoHit[twoHit.length - 1] + 0.18 * threeHit[threeHit.length - 1] + 0.216 * fourHit[fourHit.length - 1] + 0.504 * fiveHit[twoHit.length - 1])
    ];
}
$0cbeb3a23eab23db$exports = $0cbeb3a23eab23db$var$shadow_tendrils;


var $59a396a7b5d100df$exports = {};









var $iTwOG = parcelRequire("iTwOG");
var $59a396a7b5d100df$require$channel = $iTwOG.channel;
function $59a396a7b5d100df$var$sgb_spec(type, settings, numberOfHits) {
    const AD_INS = new $06e411d30d717574$exports();
    const NPC_INS = new $46e9ba02ca396156$exports();
    const HIT_INS = new $137c7cf96fb1168c$exports();
    const CRIT_INS = new $d6112baf2310618b$exports();
    const AVG_INS = new $37f0999020a30e20$exports();
    const Helper = new $8ddf59f24df0252b$exports();
    let abil_val = "sgb spec";
    const fixedPercent = $25f1b0a25b94cce2$exports.abilities[abil_val]["fixed percent"];
    const variablePercent = $25f1b0a25b94cce2$exports.abilities[abil_val]["variable percent"];
    settings["category"] = $25f1b0a25b94cce2$exports.abilities[abil_val]["category"];
    let AD = AD_INS.calcAd(type, settings);
    let hits = [];
    let fixed = Math.floor(AD * fixedPercent);
    let variable = Math.floor(AD * variablePercent);
    hitcount = 1;
    numberOfHits = 5;
    for(var hitsplat = 0; hitsplat < numberOfHits; hitsplat++){
        hitcount = 1;
        const damageObject = Helper.damageObjectCreator(settings);
        //applies on-hit effects
        let onHit = HIT_INS.calcOnHit(fixed, variable, type, $25f1b0a25b94cce2$exports.abilities[abil_val]["on hit effects"], settings);
        //sets up for further calculations
        damageObject["non-crit"]["list"] = Helper.baseDamageListCreator(onHit[0], onHit[1]);
        //apply crit dmg
        damageObject["crit"]["list"] = CRIT_INS.critDamageList(damageObject["non-crit"]["list"], settings);
        //apply on-npc effects and hitcaps
        damageObject["non-crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["non-crit"]["list"], settings, AD);
        damageObject["crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["crit"]["list"], settings, AD);
        //split soul
        splitSoul = $a9953cb8dcc55832$exports(damageObject["non-crit"]["list"], settings);
        splitSoulCrit = $a9953cb8dcc55832$exports(damageObject["crit"]["list"], settings);
        //apply hit caps
        damageObject["non-crit"]["list"] = Helper.hitCapDmgList(damageObject["non-crit"]["list"], settings);
        damageObject["crit"]["list"] = Helper.hitCapDmgList(damageObject["crit"]["list"], settings);
        //add up damages
        damageObject["non-crit"]["list"] = Helper.listAdder(damageObject["non-crit"]["list"], splitSoul);
        damageObject["crit"]["list"] = Helper.listAdder(damageObject["crit"]["list"], splitSoulCrit);
        //calc min, avg, or max depending on request
        hits.push(AVG_INS.returnDecider(damageObject, settings, abil_val));
        if (hitcount == 1) {
            fixed += Math.floor(fixed * 0.15);
            variable += Math.floor(variable * 0.15);
        }
        hitcount += 1;
    }
    const nonBlockedArrowProbs = [
        [
            0.84,
            0.16,
            0,
            0,
            0
        ],
        [
            0.473,
            0.42,
            0.10,
            0.07,
            0
        ],
        [
            0.144,
            0.398,
            0.342,
            0.106,
            0.01
        ],
        [
            0.141,
            0.327,
            0.324,
            0.17,
            0.038
        ],
        [
            0.045,
            0.193,
            0.324,
            0.282,
            0.155
        ],
        [
            0.083,
            0.222,
            0.281,
            0.231,
            0.182
        ],
        [
            0.026,
            0.124,
            0.25,
            0.277,
            0.323
        ],
        [
            0.057,
            0.168,
            0.24,
            0.227,
            0.308
        ],
        [
            0.017,
            0.091,
            0.203,
            0.247,
            0.441
        ],
        [
            0.043,
            0.135,
            0.208,
            0.210,
            0.404
        ],
        [
            0.013,
            0.071,
            0.171,
            0.219,
            0.526
        ]
    ];
    const BlockedArrowProbs = [
        [
            0.84,
            0.16,
            0,
            0,
            0
        ],
        [
            0.473,
            0.42,
            0.10,
            0.07,
            0
        ],
        [
            0.144,
            0.398,
            0.342,
            0.106,
            0.01
        ],
        [
            0.01,
            0.106,
            0.342,
            0.398,
            0.144
        ],
        [
            0,
            0,
            0,
            0,
            1
        ]
    ];
    let landProbs = null;
    let npcSize = settings["npc size"];
    if (settings["blocking"] === false) landProbs = nonBlockedArrowProbs[npcSize - 1];
    else if (settings["blocking"] === true) landProbs = BlockedArrowProbs[npcSize - 1];
    let summedHits = [
        hits[0],
        hits[1] + hits[0],
        hits[1] + hits[0] + hits[2],
        hits[1] + hits[0] + hits[2] + hits[3],
        hits[1] + hits[0] + hits[2] + hits[3] + hits[4]
    ];
    if (settings["minavgmax"] === "avg") for(var i = 0; i < summedHits.length; i++)hits[i] = summedHits[i] * landProbs[i];
    hits.push(Helper.totalDamageCalc(hits));
    return Helper.flooredList(hits);
}
$59a396a7b5d100df$exports = $59a396a7b5d100df$var$sgb_spec;


const $dcc863388959c613$export$ed316e5830568bf6 = {
    "Dazing Shot": {
        title: "Dazing Shot",
        calc: $4752a263325bfd6b$exports,
        icon: "https://i.imgur.com/RgGEGKO.png",
        weapons: [
            "2h"
        ]
    },
    "Greater Dazing Shot": {
        title: "Greater Dazing Shot",
        calc: $ecca8bfff242fa1b$exports,
        icon: "https://i.imgur.com/gYyw3Xz.png",
        weapons: [
            "2h"
        ]
    },
    "Needle Strike": {
        title: "Needle Strike",
        calc: $817cbe0e660c2c78$exports,
        icon: "https://i.imgur.com/guilxE7.png",
        weapons: [
            "Dw"
        ]
    },
    "Piercing Shot": {
        title: "Piercing Shot",
        calc: $685aa6fd3349bf3a$exports,
        icon: "https://i.imgur.com/RQcz4di.png",
        weapons: [
            "2h",
            "Dw",
            "Md",
            "Ms"
        ]
    },
    "Piercing Shot Bound": {
        title: "Piercing Shot Bound",
        calc: $b9ee83db1a3e08c7$exports,
        icon: "https://imgur.com/W1bzoPX.png",
        weapons: [
            "2h",
            "Dw",
            "Md",
            "Ms"
        ]
    },
    "Ricochet": {
        title: "Ricochet",
        calc: $81f9a689b1562210$exports,
        icon: "https://imgur.com/Ym89Yhq.png",
        weapons: [
            "2h",
            "Dw",
            "Md",
            "Ms"
        ]
    },
    "Greater ricochet": {
        title: "Greater ricochet",
        calc: $03df41b59420a3fa$exports,
        icon: "https://imgur.com/CT7UsaA.png",
        weapons: [
            "2h",
            "Dw",
            "Md",
            "Ms"
        ]
    },
    "Corruption Shot": {
        title: "Corruption Shot",
        calc: $25b0861d2f313766$exports,
        icon: "https://i.imgur.com/YRLh5SZ.png",
        weapons: [
            "2h",
            "Dw",
            "Md",
            "Ms"
        ]
    },
    "Fragmentation Shot": {
        title: "Fragmentation Shot",
        calc: $f703b320d6fe9792$exports,
        icon: "https://i.imgur.com/n2Yyfn1.png",
        weapons: [
            "2h",
            "Dw",
            "Md",
            "Ms"
        ]
    },
    "Snipe": {
        title: "Snipe",
        calc: $6fad83ed8d29f85b$exports,
        icon: "https://i.imgur.com/oEOkyfc.png",
        weapons: [
            "2h",
            "Dw",
            "Md",
            "Ms"
        ]
    },
    "Binding shot": {
        title: "Binding shot",
        calc: $1e210316c5947647$exports,
        icon: "https://imgur.com/dQu8Pha.png",
        weapons: [
            "2h",
            "Dw",
            "Md",
            "Ms"
        ]
    },
    "Tight bindings": {
        title: "tight bindings",
        calc: $be3044a72bf88d4d$exports,
        icon: "https://imgur.com/YSnjnQm.png",
        weapons: [
            "2h",
            "Dw",
            "Md",
            "Ms"
        ]
    },
    "Bombardment": {
        title: "Bombardment",
        calc: $336eee0c85bba3fe$exports,
        icon: "https://imgur.com/ZkNfBkx.png",
        weapons: [
            "2h",
            "Dw",
            "Md",
            "Ms"
        ]
    },
    "Shadow tendrils": {
        title: "Shadow tendrils",
        calc: $0cbeb3a23eab23db$exports,
        icon: "https://imgur.com/J8GLo1s.png",
        weapons: [
            "2h",
            "Dw",
            "Md",
            "Ms"
        ]
    },
    "Snapshot": {
        title: "Snapshot",
        calc: $4487ab408a9357b5$exports,
        icon: "https://imgur.com/H8Ci5w6.png",
        weapons: [
            "2h",
            "Dw",
            "Md",
            "Ms"
        ]
    },
    "Rapid fire": {
        title: "Rapid fire",
        calc: $cdd9d52845a80c6b$exports,
        icon: "https://imgur.com/hCqaksE.png",
        weapons: [
            "2h",
            "Dw",
            "Md",
            "Ms"
        ]
    },
    "Deadshot": {
        title: "Deadshot",
        calc: $829bcd81e189e12f$exports,
        icon: "https://imgur.com/5jLviCQ.png",
        weapons: [
            "2h",
            "Dw",
            "Md",
            "Ms"
        ]
    },
    "Incendiary shot": {
        title: "Incendiary shot",
        calc: $12a84f393db5519a$exports,
        icon: "https://imgur.com/2VFw7f9.png",
        weapons: [
            "2h",
            "Dw",
            "Md",
            "Ms"
        ]
    },
    "Unload": {
        title: "Unload",
        calc: $5d9b6fe550d28fcb$exports,
        icon: "https://imgur.com/mr7nfle.png",
        weapons: [
            "2h",
            "Dw",
            "Md",
            "Ms"
        ]
    },
    "Darkbow": {
        title: "Darkbow",
        calc: $6af88e7248559212$exports,
        icon: "https://imgur.com/LCEvnr6.png",
        weapons: [
            "2h",
            "Dw",
            "Md",
            "Ms"
        ]
    },
    "Bolg": {
        title: "Bolg",
        calc: $676d5a4f38d6ccd8$exports,
        icon: "https://imgur.com/0BGZGpv.png",
        weapons: [
            "2h",
            "Dw",
            "Md",
            "Ms"
        ]
    },
    "Magic shortbow": {
        title: "Magic shortbow",
        calc: $e2a99aed0728e508$exports,
        icon: "https://imgur.com/wvfhltQ.png",
        weapons: [
            "2h",
            "Dw",
            "Md",
            "Ms"
        ]
    },
    "Seren Godbow": {
        title: "Seren Godbow",
        calc: $59a396a7b5d100df$exports,
        icon: "https://imgur.com/DUqERq0.png",
        weapons: [
            "2h",
            "Dw",
            "Md",
            "Ms"
        ]
    }
};


$dae7bf804af6c1ca$var$buildDamagesTable((0, $dcc863388959c613$export$ed316e5830568bf6));
$dae7bf804af6c1ca$var$calculateDamages($dae7bf804af6c1ca$var$collectSettings());
const $dae7bf804af6c1ca$var$settings = document.getElementsByClassName("js--setting");
for (let setting of $dae7bf804af6c1ca$var$settings)setting.addEventListener("change", (e)=>{
    $dae7bf804af6c1ca$var$calculateDamages($dae7bf804af6c1ca$var$collectSettings());
});
function $dae7bf804af6c1ca$var$collectSettings() {
    // Have default settings here
    const settings = {
        "minavgmax": "avg",
        "category": "none",
        "ability damage": 0,
        "level": 99,
        "potion": "elder overload",
        "two-handed weapon": "bow of the last guardian",
        "main-hand weapon": "blightbound",
        "off-hand weapon": "off-hand blightbound",
        "shield": 1,
        "defender": 1,
        "helmet": "elite dracolich helmet",
        "body": "elite dracolich top",
        "leg": "elite dracolich bottom",
        "gloves": "elite dracolich gloves",
        "boots": "elite dracolich boots",
        "necklace": "essence of finality amulet (or)",
        "ring": "reavers",
        "cape": "igneous kal-mor",
        "pocket slot": "grimoire",
        "reaper crew": true,
        "level 20 armour": true,
        "enchantment shadows": true,
        "enchantment dispelling": true,
        "hexhunter": false,
        //perks
        "precise": 6,
        "equilibrium": 0,
        "genocidal percent": 0,
        "spendthrift": 0,
        "ruthless rank": 0,
        "ruthless stacks": 0,
        "slayer perk": false,
        "biting": 4,
        "flanking": 0,
        "flanking position": false,
        "caroming rank": 0,
        "aura": "reckless",
        "split soul": true,
        "bonus": 0,
        "hitcap": 30000,
        "npc size": 1,
        "blocking": false,
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
        "swift": false,
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
        "Tokkul-zo": false
    };
    document.querySelectorAll(".js--setting").forEach((node)=>{
        let val = node.value;
        if (node.getAttribute("type") === "number") val = parseFloat(val);
        else if (node.getAttribute("type") === "checkbox") val = node.checked;
        settings[node.getAttribute("data-setting-name")] = val;
    });
    return settings;
}
function $dae7bf804af6c1ca$var$buildDamagesTable(abilities) {
    const table = document.querySelector(".js--damages-table");
    const template = document.querySelector("#damage-table-row");
    for (const [abilityKey, ability] of Object.entries(abilities)){
        const copy = template.content.cloneNode(true);
        copy.querySelector(".js--ability").setAttribute("data-ability-key", abilityKey);
        copy.querySelector(".js--ability-title").textContent = ability.title;
        copy.querySelector(".js--ability-icon").setAttribute("src", ability.icon);
        const weaponSelect = copy.querySelector(".js--ability-weapon");
        weaponSelect.addEventListener("change", (e)=>{
            $dae7bf804af6c1ca$var$calculateDamages($dae7bf804af6c1ca$var$collectSettings());
        });
        ability.weapons.forEach((item)=>{
            weaponSelect.add(new Option(item, item));
        });
        table.appendChild(copy);
    }
}
function $dae7bf804af6c1ca$var$calculateDamages(settings) {
    document.querySelectorAll(".js--damages-table tr").forEach((row)=>{
        const key = row.getAttribute("data-ability-key");
        const weapon = row.querySelector(".js--ability-weapon").value;
        settings["split soul"] = false;
        settings["swift"] = false;
        damages = (0, $dcc863388959c613$export$ed316e5830568bf6)[key].calc(weapon, settings, 1);
        row.querySelector(".js--ability-regular").textContent = damages[damages.length - 1];
        // Recalculate with split soul
        settings["split soul"] = true;
        settings["swift"] = false;
        damages = (0, $dcc863388959c613$export$ed316e5830568bf6)[key].calc(weapon, settings, 1);
        row.querySelector(".js--ability-splitsoul").textContent = damages[damages.length - 1];
        // Recalculate with swift
        settings["split soul"] = false;
        settings["swift"] = true;
        damages = (0, $dcc863388959c613$export$ed316e5830568bf6)[key].calc(weapon, settings, 1);
        row.querySelector(".js--ability-swift").textContent = damages[damages.length - 1];
        // Recalculate with swift and split soul
        settings["split soul"] = true;
        settings["swift"] = true;
        damages = (0, $dcc863388959c613$export$ed316e5830568bf6)[key].calc(weapon, settings, 1);
        row.querySelector(".js--ability-swift-ss").textContent = damages[damages.length - 1];
    });
}


