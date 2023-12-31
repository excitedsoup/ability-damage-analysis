
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

var $13ca988def28119e$exports = {};
var $cf22d726990bbcce$exports = {};
var $234d086b0a8408ee$exports = {};
const $234d086b0a8408ee$var$melee_construction = {
    "two-handed weapons": {
        "ek-zekkil": {
            "tier": 95,
            "weapondmg": 0
        },
        "zaros godsword": {
            "tier": 92,
            "weapondmg": 0
        },
        "masterwork spear of annihilation": {
            "tier": 92,
            "weapondmg": 0
        },
        "spear of annihilation": {
            "tier": 90,
            "weapondmg": 0
        },
        "noxious scythe": {
            "tier": 90,
            "weapondmg": 0
        },
        "annihilation": {
            "tier": 87,
            "weapondmg": 0
        },
        "mizurayi": {
            "tier": 85,
            "weapondmg": 0
        },
        "dragon rider lance": {
            "tier": 80,
            "weapondmg": 0
        },
        "masutas warspear": {
            "tier": 82,
            "weapondmg": 0
        },
        "terrasaur maul": {
            "tier": 80,
            "weapondmg": 0
        }
    },
    "main-hand weapons": {
        "dark shard of leng": {
            "tier": 95,
            "weapondmg": 0
        },
        "abyssal scourge": {
            "tier": 92,
            "weapondmg": 0
        },
        "khopesh of tumeken": {
            "tier": 92,
            "weapondmg": 0
        },
        "drygore weapon": {
            "tier": 90,
            "weapondmg": 0
        },
        "blade of nymora": {
            "tier": 80,
            "weapondmg": 0
        },
        "dark ice shard": {
            "tier": 88,
            "weapondmg": 0
        }
    },
    "off-hand weapons": {
        "dark sliver of leng": {
            "tier": 95,
            "weapondmg": 0
        },
        "khopesh of elidnis": {
            "tier": 92,
            "weapondmg": 0
        },
        "drygore weapon": {
            "tier": 88,
            "weapondmg": 0
        },
        "dark ice sliver": {
            "tier": 85,
            "weapondmg": 0
        },
        "blade of avaryss": {
            "tier": 80,
            "weapondmg": 0
        }
    },
    "shields": {},
    "defenders": {
        "kalphite defender": {
            "tier": 90,
            "weapondmg": 0
        },
        "ancient defender": {
            "tier": 80,
            "weapondmg": 0
        }
    },
    "helmets": {
        "vestments of havoc hood": {
            "bonus": 28
        },
        "trimmed masterwork helm": {
            "bonus": 24
        },
        "masterwork helm": {
            "bonus": 23.2
        },
        "jaws of the abyss": {
            "bonus": 21.6
        },
        "bandos helmet": {
            "bonus": 17.7
        }
    },
    "bodies": {
        "vestments of havoc robe top": {
            "bonus": 42
        },
        "trimmed masterwork platebody": {
            "bonus": 36
        },
        "masterwork platebody": {
            "bonus": 34.8
        },
        "bandos platebody": {
            "bonus": 26.5
        }
    },
    "legs": {
        "vestments of havoc robe bottom": {
            "bonus": 37
        },
        "trimmed masterwork platelegs": {
            "bonus": 29
        },
        "masterwork platelegs": {
            "bonus": 29.0
        },
        "bandos tassets": {
            "bonus": 22.1
        }
    },
    "boots": {
        "vestments of havoc boots": {
            "bonus": 19
        },
        "trimmed masterwork boots": {
            "bonus": 14.5
        },
        "masterwork boots": {
            "bonus": 15
        },
        "bandos boots": {
            "bonus": 11
        }
    },
    "gloves": {
        "trimmed masterwork gloves": {
            "bonus": 15
        },
        "masterwork gloves": {
            "bonus": 15
        },
        "bandos gloves": {
            "bonus": 11
        },
        "cinderbane gloves": {
            "bonus": 11
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
        }
    },
    "capes": {
        "igneous kal-ket": {
            "bonus": 43
        },
        "completionist": {
            "bonus": 31.5
        },
        "tokhaar-kal-ket": {
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
        "berserker": {
            "levels": 0.1,
            "boost": 0.1
        }
    },
    "prayers": {
        "malevolence": {
            "boost": 0.12
        },
        "turmoil": {
            "boost": 0.10
        },
        "piety": {
            "boost": 0.08
        },
        "chivalry": {
            "boost": 0.07
        },
        "ultimate strength": {
            "boost": 0.06
        },
        "superhuman strength": {
            "boost": 0.06
        },
        "burst of strength": {
            "boost": 0.02
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
        "extreme melee": {
            "levels": 3,
            "percent": 0.15
        },
        "super melee": {
            "levels": 2,
            "percent": 0.12
        },
        "melee potion": {
            "levels": 1,
            "percent": 0.08
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
        "auto attack": {
            "fixed percent": 0,
            "variable percent": 0,
            "on hit effects": true,
            "crit effects": true,
            "category": "auto attack"
        },
        "chaos roar": {
            "fixed percent": 0.75,
            "variable percent": 0.2,
            "on hit effects": true,
            "crit effects": true,
            "category": "basic"
        },
        "punish": {
            "fixed percent": 0.65,
            "variable percent": 0.2,
            "on hit effects": true,
            "crit effects": true,
            "category": "basic"
        },
        "kick": {
            "fixed percent": 0.55,
            "variable percent": 0.1,
            "on hit effects": true,
            "crit effects": true,
            "category": "basic"
        },
        "backhand": {
            "fixed percent": 0.55,
            "variable percent": 0.1,
            "on hit effects": true,
            "crit effects": true,
            "category": "basic"
        },
        "slice": {
            "fixed percent": 0.85,
            "variable percent": 0.2,
            "on hit effects": true,
            "crit effects": true,
            "category": "basic"
        },
        "havoc": {
            "fixed percent": 0.85,
            "variable percent": 0.2,
            "on hit effects": true,
            "crit effects": true,
            "category": "basic"
        },
        "smash": {
            "fixed percent": 0.85,
            "variable percent": 0.2,
            "on hit effects": true,
            "crit effects": true,
            "category": "basic"
        },
        "bladed dive": {
            "fixed percent": 0.65,
            "variable percent": 0.2,
            "on hit effects": true,
            "crit effects": true,
            "category": "basic"
        },
        "greater barge - 9t": {
            "fixed percent": 0.85,
            "variable percent": 0.2,
            "on hit effects": true,
            "crit effects": true,
            "category": "basic"
        },
        "fury": {
            "fixed percent": 0.4,
            "variable percent": 0.1,
            "on hit effects": true,
            "crit effects": true,
            "category": "basic"
        },
        "greater fury": {
            "fixed percent": 0.85,
            "variable percent": 0.2,
            "on hit effects": true,
            "crit effects": true,
            "category": "basic"
        },
        "decimate": {
            "fixed percent": 1,
            "variable percent": 0.2,
            "on hit effects": true,
            "crit effects": true,
            "category": "basic"
        },
        "cleave": {
            "fixed percent": 1,
            "variable percent": 0.2,
            "on hit effects": true,
            "crit effects": true,
            "category": "basic"
        },
        "sever": {
            "fixed percent": 1,
            "variable percent": 0.2,
            "on hit effects": true,
            "crit effects": true,
            "category": "basic"
        },
        "dismember": {
            "fixed percent": 0.25,
            "variable percent": 0.06,
            "on hit effects": false,
            "crit effects": false,
            "category": "basic"
        },
        "flurry": {
            "fixed percent": 0.6,
            "variable percent": 0.1,
            "on hit effects": true,
            "crit effects": true,
            "category": "basic"
        },
        "greater flurry": {
            "fixed percent": 0.9,
            "variable percent": 0.2,
            "on hit effects": true,
            "crit effects": true,
            "category": "threshold"
        },
        "stomp": {
            "fixed percent": 1.1,
            "variable percent": 0.2,
            "on hit effects": true,
            "crit effects": true,
            "category": "threshold"
        },
        "forceful backhand": {
            "fixed percent": 1.1,
            "variable percent": 0.2,
            "on hit effects": true,
            "crit effects": true,
            "category": "threshold"
        },
        "quake": {
            "fixed percent": 1.2,
            "variable percent": 0.3,
            "on hit effects": true,
            "crit effects": true,
            "category": "threshold"
        },
        "slaughter": {
            "fixed percent": 0.3,
            "variable percent": 0.1,
            "on hit effects": false,
            "crit effects": false,
            "category": "threshold"
        },
        "destroy": {
            "fixed percent": 1.1,
            "variable percent": 0.2,
            "on hit effects": true,
            "crit effects": true,
            "category": "threshold"
        },
        "assault": {
            "fixed percent": 1.15,
            "variable percent": 0.3,
            "on hit effects": true,
            "crit effects": true,
            "category": "threshold"
        },
        "hurricane 1": {
            "fixed percent": 1.1,
            "variable percent": 0.3,
            "on hit effects": true,
            "crit effects": true,
            "category": "threshold"
        },
        "hurricane 2": {
            "fixed percent": 1.25,
            "variable percent": 0.3,
            "on hit effects": true,
            "crit effects": true,
            "category": "threshold"
        },
        "blood tendrils": {
            "fixed percent": 0.5,
            "variable percent": 0.1,
            "on hit effects": false,
            "crit effects": false,
            "category": "threshold"
        },
        "overpower": {
            "fixed percent": 2.7,
            "variable percent": 0.6,
            "on hit effects": true,
            "crit effects": true,
            "category": "ultimate"
        },
        "pulverise": {
            "fixed percent": 2.7,
            "variable percent": 0.6,
            "on hit effects": true,
            "crit effects": true,
            "category": "ultimate"
        },
        "frenzy": {
            "fixed percent": 1.35,
            "variable percent": 0.3,
            "on hit effects": true,
            "crit effects": true,
            "category": "ultimate"
        },
        "massacre - initial hit": {
            "fixed percent": 1,
            "variable percent": 0.2,
            "on hit effects": true,
            "crit effects": true,
            "category": "ultimate"
        },
        "massacre - bleed hit": {
            "fixed percent": 0.65,
            "variable percent": 0,
            "on hit effects": false,
            "crit effects": false,
            "category": "dot"
        },
        "dragon claw 1": {
            "fixed percent": 1.8,
            "variable percent": 0.4,
            "on hit effects": true,
            "crit effects": true,
            "category": "spec"
        },
        "dragon claw 2": {
            "fixed percent": 0.9,
            "variable percent": 0.2,
            "on hit effects": true,
            "crit effects": true,
            "category": "spec"
        },
        "dragon claw 3": {
            "fixed percent": 0.45,
            "variable percent": 0.1,
            "on hit effects": true,
            "crit effects": true,
            "category": "spec"
        },
        "dragon claw 4": {
            "fixed percent": 0.45,
            "variable percent": 0.1,
            "on hit effects": true,
            "crit effects": true,
            "category": "spec"
        },
        "ezk - initial hit": {
            "fixed percent": 1.1,
            "variable percent": 0.3,
            "on hit effects": true,
            "crit effects": true,
            "category": "spec"
        },
        "ezk - bleed hit": {
            "fixed percent": 0.55,
            "variable percent": 0.2,
            "on hit effects": false,
            "crit effects": false,
            "category": "dot"
        },
        "granite maul": {
            "fixed percent": 1.0,
            "variable percent": 0.2,
            "on hit effects": true,
            "crit effects": true,
            "category": "spec"
        },
        "dragon longsword": {
            "fixed percent": 2.5,
            "variable percent": 0.4,
            "on hit effects": true,
            "crit effects": true,
            "category": "spec"
        }
    }
};
$234d086b0a8408ee$exports = $234d086b0a8408ee$var$melee_construction;


class $cf22d726990bbcce$var$AbilityDmg {
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
        if (settings["terrasaur"] === true && settings["two-handed weapon"] === "terrasaur maul" && type === "2h") {
            if (settings["enchantment savagery"] === true) AD += AD * 0.175;
            else AD += AD * 0.125;
        }
        if (settings["chaos roar"] === true) AD = 2 * AD;
        AD += Math.floor(AD * 0.06 * settings["Zamorak balance of power"]);
        AD += Math.floor(AD * 0.1 * settings["Raksha inner power"]);
        return AD;
    }
    calcBonus(settings) {
        let reaperCrew = 0;
        if (settings["Reaper crew"] === true) reaperCrew = 12;
        return $234d086b0a8408ee$exports.helmets[settings["helmet"]]["bonus"] + $234d086b0a8408ee$exports.bodies[settings["body"]]["bonus"] + $234d086b0a8408ee$exports.legs[settings["leg"]]["bonus"] + $234d086b0a8408ee$exports.boots[settings["boots"]]["bonus"] + $234d086b0a8408ee$exports.gloves[settings["gloves"]]["bonus"] + $234d086b0a8408ee$exports.necklaces[settings["necklace"]]["bonus"] + $234d086b0a8408ee$exports.rings[settings["ring"]]["bonus"] + $234d086b0a8408ee$exports.capes[settings["cape"]]["bonus"] + $234d086b0a8408ee$exports.pockets[settings["pocket slot"]]["bonus"] + reaperCrew;
    }
    calcLevel(settings) {
        let level = settings["level"];
        let percentBoost = $234d086b0a8408ee$exports.potions[settings["potion"]]["percent"] + $234d086b0a8408ee$exports.auras[settings["aura"]]["levels"];
        let flatBoost = $234d086b0a8408ee$exports.potions[settings["potion"]]["levels"];
        return Math.floor(level * (1 + percentBoost)) + flatBoost;
    }
    getTier(type, settings) {
        if (type === "two-hand") return $234d086b0a8408ee$exports["two-handed weapons"][settings["two-handed weapon"]]["tier"];
        else if (type === "main-hand") return $234d086b0a8408ee$exports["main-hand weapons"][settings["main-hand weapon"]]["tier"];
        else if (type === "shield") return $234d086b0a8408ee$exports.shields[settings["shield"]]["tier"];
        else if (type === "defender") return $234d086b0a8408ee$exports.defenders[settings["defender"]]["tier"];
        else if (type === "off-hand") return $234d086b0a8408ee$exports["off-hand weapons"][settings["off-hand weapon"]]["tier"];
    }
}
$cf22d726990bbcce$exports = $cf22d726990bbcce$var$AbilityDmg;


var $d879658d4e6779c8$exports = {};

class $d879658d4e6779c8$var$OnNPC {
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
    calcAura(dmg, settings) {
        if (settings["aura"] === "berserk" && (settings["berserk"] || settings["zaros god sword spec"] === true)) dmg;
        else dmg = Math.floor(dmg * (1 + $234d086b0a8408ee$exports.auras[settings["aura"]]["boost"]));
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
        dmg = this.calcAura(dmg, settings);
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
$d879658d4e6779c8$exports = $d879658d4e6779c8$var$OnNPC;


var $034a883ac1f2b0a0$exports = {};

class $034a883ac1f2b0a0$var$OnHit {
    calcScriptureOfFul(buff, pocket, flag) {
        if (pocket === "scripture of ful" && flag === true) buff = buff * 1.2;
        return Math.floor(buff);
    }
    calcStoneOfJas(buff, jas) {
        return Math.floor(buff * (1 + jas / 100));
    }
    calcBerserk(buff, flag) {
        if (flag === true) buff = Math.floor(buff * 2);
        return buff;
    }
    calcZGS(buff, flag) {
        if (flag === true) buff = Math.floor(buff * 1.25);
        return buff;
    }
    calcGOP(buff, flag, enchantment) {
        if (flag === true && enchantment === true) buff += Math.floor(buff * 0.16);
        else if (flag === true && enchantment === false) buff += Math.floor(buff * 0.1);
        return buff;
    }
    calcDBA(buff, flag) {
        if (flag === true) buff = Math.floor(buff * 1.2);
        return buff;
    }
    calcAnnihilation(buff, stacks) {
        return buff * (1 + stacks);
    }
    calcPrayer(buff, prayer) {
        return Math.floor(buff * (1 + $234d086b0a8408ee$exports.prayers[prayer]["boost"]));
    }
    calcExsanguinate(buff, stacks, category) {
        if (category === "basic") return buff += Math.floor(buff * 0.01 * stacks);
        return buff;
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
        return Math.floor(buff * (1 + $234d086b0a8408ee$exports.slayerHelmets[slayerHelmet]["boost"]));
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
            buff = this.calcBerserk(buff, settings["berserk"]);
            buff = this.calcZGS(buff, settings["zgs"]);
            buff = this.calcDBA(buff, settings["dragon battle axe spec"]);
            buff = this.calcGOP(buff, settings["gloves of passage"], settings["enchantment agony"]);
            buff = this.calcAnnihilation(buff, settings["annihilation stacks"]);
            buff = this.calcPrayer(buff, settings["prayer"]);
            buff = this.calcExsanguinate(buff, settings["exsanguinate stacks"], settings["category"]);
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
$034a883ac1f2b0a0$exports = $034a883ac1f2b0a0$var$OnHit;


var $8f9ba958af7e7dfc$exports = {};
class $8f9ba958af7e7dfc$var$Crit {
    calcFCritChance(settings) {
        let fcrit = 0.1 + 0.05 * settings["crit-i-kal"] + 0.01 * settings["kalgerion demon familiar"] + 0.02 * settings["biting"] + 0.05 * settings["fury stacks"];
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
$8f9ba958af7e7dfc$exports = $8f9ba958af7e7dfc$var$Crit;


var $c3c4ca91a8790f30$exports = {};
class $c3c4ca91a8790f30$var$meleeHelper {
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
$c3c4ca91a8790f30$exports = $c3c4ca91a8790f30$var$meleeHelper;


var $d5942e9fd7ce77f7$exports = {};


class $d5942e9fd7ce77f7$var$avgDmg {
    averageDamage(abil_val, dmg_list, critDmg_list, settings) {
        const CRIT_INS = new $8f9ba958af7e7dfc$exports();
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
        const CRIT_INS = new $8f9ba958af7e7dfc$exports();
        let critChance = 0;
        if ($234d086b0a8408ee$exports.abilities[abil_val]["crit effects"] === true) critChance = CRIT_INS.calcFCritChance(settings);
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
$d5942e9fd7ce77f7$exports = $d5942e9fd7ce77f7$var$avgDmg;




var $iTwOG = parcelRequire("iTwOG");
var $13ca988def28119e$require$channel = $iTwOG.channel;
function $13ca988def28119e$var$chaos_roar(type, settings, numberOfHits) {
    const AD_INS = new $cf22d726990bbcce$exports();
    const NPC_INS = new $d879658d4e6779c8$exports();
    const HIT_INS = new $034a883ac1f2b0a0$exports();
    const CRIT_INS = new $8f9ba958af7e7dfc$exports();
    const AVG_INS = new $d5942e9fd7ce77f7$exports();
    const Helper = new $c3c4ca91a8790f30$exports();
    let abil_val = "chaos roar";
    const fixedPercent = $234d086b0a8408ee$exports.abilities[abil_val]["fixed percent"];
    const variablePercent = $234d086b0a8408ee$exports.abilities[abil_val]["variable percent"];
    settings["category"] = $234d086b0a8408ee$exports.abilities[abil_val]["category"];
    const hits = [];
    for(var hitsplat = 0; hitsplat < numberOfHits; hitsplat++){
        const damageObject = Helper.damageObjectCreator(settings);
        //calculates ability damage
        let AD = AD_INS.calcAd(type, settings); //AD_INS.calcAd(type,settings);
        //sets fixed and variable damage
        let fixed = Math.floor(AD * fixedPercent);
        let variable = Math.floor(AD * variablePercent);
        //applies on-hit effects
        let onHit = HIT_INS.calcOnHit(fixed, variable, type, $234d086b0a8408ee$exports.abilities[abil_val]["on hit effects"], settings);
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
$13ca988def28119e$exports = $13ca988def28119e$var$chaos_roar;


var $edd3546eb2312840$exports = {};








var $iTwOG = parcelRequire("iTwOG");
var $edd3546eb2312840$require$channel = $iTwOG.channel;
function $edd3546eb2312840$var$punish(type, settings, numberOfHits) {
    const AD_INS = new $cf22d726990bbcce$exports();
    const NPC_INS = new $d879658d4e6779c8$exports();
    const HIT_INS = new $034a883ac1f2b0a0$exports();
    const CRIT_INS = new $8f9ba958af7e7dfc$exports();
    const AVG_INS = new $d5942e9fd7ce77f7$exports();
    const Helper = new $c3c4ca91a8790f30$exports();
    let abil_val = "punish";
    const fixedPercent = $234d086b0a8408ee$exports.abilities[abil_val]["fixed percent"];
    const variablePercent = $234d086b0a8408ee$exports.abilities[abil_val]["variable percent"];
    settings["category"] = $234d086b0a8408ee$exports.abilities[abil_val]["category"];
    const hits = [];
    for(var hitsplat = 0; hitsplat < numberOfHits; hitsplat++){
        const damageObject = Helper.damageObjectCreator(settings);
        //calculates ability damage
        let AD = AD_INS.calcAd(type, settings); //AD_INS.calcAd(type,settings);
        //sets fixed and variable damage
        let fixed = Math.floor(AD * fixedPercent);
        let variable = Math.floor(AD * variablePercent);
        //applies on-hit effects
        let onHit = HIT_INS.calcOnHit(fixed, variable, type, $234d086b0a8408ee$exports.abilities[abil_val]["on hit effects"], settings);
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
$edd3546eb2312840$exports = $edd3546eb2312840$var$punish;


var $cb97f80a6d68792a$exports = {};








var $iTwOG = parcelRequire("iTwOG");
var $cb97f80a6d68792a$require$channel = $iTwOG.channel;
function $cb97f80a6d68792a$var$kick(type, settings, numberOfHits) {
    const AD_INS = new $cf22d726990bbcce$exports();
    const NPC_INS = new $d879658d4e6779c8$exports();
    const HIT_INS = new $034a883ac1f2b0a0$exports();
    const CRIT_INS = new $8f9ba958af7e7dfc$exports();
    const AVG_INS = new $d5942e9fd7ce77f7$exports();
    const Helper = new $c3c4ca91a8790f30$exports();
    let abil_val = "kick";
    const fixedPercent = $234d086b0a8408ee$exports.abilities[abil_val]["fixed percent"];
    const variablePercent = $234d086b0a8408ee$exports.abilities[abil_val]["variable percent"];
    settings["category"] = $234d086b0a8408ee$exports.abilities[abil_val]["category"];
    const hits = [];
    for(var hitsplat = 0; hitsplat < numberOfHits; hitsplat++){
        const damageObject = Helper.damageObjectCreator(settings);
        //calculates ability damage
        let AD = AD_INS.calcAd(type, settings); //AD_INS.calcAd(type,settings);
        //sets fixed and variable damage
        let fixed = Math.floor(AD * fixedPercent);
        let variable = Math.floor(AD * variablePercent);
        //applies on-hit effects
        let onHit = HIT_INS.calcOnHit(fixed, variable, type, $234d086b0a8408ee$exports.abilities[abil_val]["on hit effects"], settings);
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
$cb97f80a6d68792a$exports = $cb97f80a6d68792a$var$kick;


var $bd652a4a22e81569$exports = {};








var $iTwOG = parcelRequire("iTwOG");
var $bd652a4a22e81569$require$channel = $iTwOG.channel;
function $bd652a4a22e81569$var$backhand(type, settings, numberOfHits) {
    const AD_INS = new $cf22d726990bbcce$exports();
    const NPC_INS = new $d879658d4e6779c8$exports();
    const HIT_INS = new $034a883ac1f2b0a0$exports();
    const CRIT_INS = new $8f9ba958af7e7dfc$exports();
    const AVG_INS = new $d5942e9fd7ce77f7$exports();
    const Helper = new $c3c4ca91a8790f30$exports();
    let abil_val = "backhand";
    const fixedPercent = $234d086b0a8408ee$exports.abilities[abil_val]["fixed percent"];
    const variablePercent = $234d086b0a8408ee$exports.abilities[abil_val]["variable percent"];
    settings["category"] = $234d086b0a8408ee$exports.abilities[abil_val]["category"];
    const hits = [];
    for(var hitsplat = 0; hitsplat < numberOfHits; hitsplat++){
        const damageObject = Helper.damageObjectCreator(settings);
        //calculates ability damage
        let AD = AD_INS.calcAd(type, settings); //AD_INS.calcAd(type,settings);
        //sets fixed and variable damage
        let fixed = Math.floor(AD * fixedPercent);
        let variable = Math.floor(AD * variablePercent);
        //applies on-hit effects
        let onHit = HIT_INS.calcOnHit(fixed, variable, type, $234d086b0a8408ee$exports.abilities[abil_val]["on hit effects"], settings);
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
$bd652a4a22e81569$exports = $bd652a4a22e81569$var$backhand;


var $304378cb4f434773$exports = {};








var $iTwOG = parcelRequire("iTwOG");
var $304378cb4f434773$require$channel = $iTwOG.channel;
function $304378cb4f434773$var$havoc(type, settings, numberOfHits) {
    const AD_INS = new $cf22d726990bbcce$exports();
    const NPC_INS = new $d879658d4e6779c8$exports();
    const HIT_INS = new $034a883ac1f2b0a0$exports();
    const CRIT_INS = new $8f9ba958af7e7dfc$exports();
    const AVG_INS = new $d5942e9fd7ce77f7$exports();
    const Helper = new $c3c4ca91a8790f30$exports();
    let abil_val = "havoc";
    const fixedPercent = $234d086b0a8408ee$exports.abilities[abil_val]["fixed percent"];
    const variablePercent = $234d086b0a8408ee$exports.abilities[abil_val]["variable percent"];
    settings["category"] = $234d086b0a8408ee$exports.abilities[abil_val]["category"];
    const hits = [];
    for(var hitsplat = 0; hitsplat < numberOfHits; hitsplat++){
        const damageObject = Helper.damageObjectCreator(settings);
        //calculates ability damage
        let AD = AD_INS.calcAd(type, settings); //AD_INS.calcAd(type,settings);
        //sets fixed and variable damage
        let fixed = Math.floor(AD * fixedPercent);
        let variable = Math.floor(AD * variablePercent);
        //applies on-hit effects
        let onHit = HIT_INS.calcOnHit(fixed, variable, type, $234d086b0a8408ee$exports.abilities[abil_val]["on hit effects"], settings);
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
$304378cb4f434773$exports = $304378cb4f434773$var$havoc;


var $1362d8fcd5458644$exports = {};








var $iTwOG = parcelRequire("iTwOG");
var $1362d8fcd5458644$require$channel = $iTwOG.channel;
function $1362d8fcd5458644$var$smash(type, settings, numberOfHits) {
    const AD_INS = new $cf22d726990bbcce$exports();
    const NPC_INS = new $d879658d4e6779c8$exports();
    const HIT_INS = new $034a883ac1f2b0a0$exports();
    const CRIT_INS = new $8f9ba958af7e7dfc$exports();
    const AVG_INS = new $d5942e9fd7ce77f7$exports();
    const Helper = new $c3c4ca91a8790f30$exports();
    let abil_val = "smash";
    const fixedPercent = $234d086b0a8408ee$exports.abilities[abil_val]["fixed percent"];
    const variablePercent = $234d086b0a8408ee$exports.abilities[abil_val]["variable percent"];
    settings["category"] = $234d086b0a8408ee$exports.abilities[abil_val]["category"];
    const hits = [];
    for(var hitsplat = 0; hitsplat < numberOfHits; hitsplat++){
        const damageObject = Helper.damageObjectCreator(settings);
        //calculates ability damage
        let AD = AD_INS.calcAd(type, settings); //AD_INS.calcAd(type,settings);
        //sets fixed and variable damage
        let fixed = Math.floor(AD * fixedPercent);
        let variable = Math.floor(AD * variablePercent);
        //applies on-hit effects
        let onHit = HIT_INS.calcOnHit(fixed, variable, type, $234d086b0a8408ee$exports.abilities[abil_val]["on hit effects"], settings);
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
$1362d8fcd5458644$exports = $1362d8fcd5458644$var$smash;


var $b8de942bdc86536f$exports = {};








var $iTwOG = parcelRequire("iTwOG");
var $b8de942bdc86536f$require$channel = $iTwOG.channel;
function $b8de942bdc86536f$var$bladed_dive(type, settings, numberOfHits) {
    const AD_INS = new $cf22d726990bbcce$exports();
    const NPC_INS = new $d879658d4e6779c8$exports();
    const HIT_INS = new $034a883ac1f2b0a0$exports();
    const CRIT_INS = new $8f9ba958af7e7dfc$exports();
    const AVG_INS = new $d5942e9fd7ce77f7$exports();
    const Helper = new $c3c4ca91a8790f30$exports();
    let abil_val = "bladed dive";
    const fixedPercent = $234d086b0a8408ee$exports.abilities[abil_val]["fixed percent"];
    const variablePercent = $234d086b0a8408ee$exports.abilities[abil_val]["variable percent"];
    settings["category"] = $234d086b0a8408ee$exports.abilities[abil_val]["category"];
    const hits = [];
    for(var hitsplat = 0; hitsplat < numberOfHits; hitsplat++){
        const damageObject = Helper.damageObjectCreator(settings);
        //calculates ability damage
        let AD = AD_INS.calcAd(type, settings); //AD_INS.calcAd(type,settings);
        //sets fixed and variable damage
        let fixed = Math.floor(AD * fixedPercent);
        let variable = Math.floor(AD * variablePercent);
        //applies on-hit effects
        let onHit = HIT_INS.calcOnHit(fixed, variable, type, $234d086b0a8408ee$exports.abilities[abil_val]["on hit effects"], settings);
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
$b8de942bdc86536f$exports = $b8de942bdc86536f$var$bladed_dive;


var $367b71b6f5ded8c8$exports = {};








var $iTwOG = parcelRequire("iTwOG");
var $367b71b6f5ded8c8$require$channel = $iTwOG.channel;
function $367b71b6f5ded8c8$var$greater_barge_9t(type, settings, numberOfHits) {
    const AD_INS = new $cf22d726990bbcce$exports();
    const NPC_INS = new $d879658d4e6779c8$exports();
    const HIT_INS = new $034a883ac1f2b0a0$exports();
    const CRIT_INS = new $8f9ba958af7e7dfc$exports();
    const AVG_INS = new $d5942e9fd7ce77f7$exports();
    const Helper = new $c3c4ca91a8790f30$exports();
    let abil_val = "greater barge - 9t";
    const fixedPercent = $234d086b0a8408ee$exports.abilities[abil_val]["fixed percent"];
    const variablePercent = $234d086b0a8408ee$exports.abilities[abil_val]["variable percent"];
    settings["category"] = $234d086b0a8408ee$exports.abilities[abil_val]["category"];
    const hits = [];
    for(var hitsplat = 0; hitsplat < numberOfHits; hitsplat++){
        const damageObject = Helper.damageObjectCreator(settings);
        //calculates ability damage
        let AD = AD_INS.calcAd(type, settings); //AD_INS.calcAd(type,settings);
        //sets fixed and variable damage
        let fixed = Math.floor(AD * fixedPercent);
        let variable = Math.floor(AD * variablePercent);
        //applies on-hit effects
        let onHit = HIT_INS.calcOnHit(fixed, variable, type, $234d086b0a8408ee$exports.abilities[abil_val]["on hit effects"], settings);
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
$367b71b6f5ded8c8$exports = $367b71b6f5ded8c8$var$greater_barge_9t;


var $6ced06e73c7f716a$exports = {};








var $iTwOG = parcelRequire("iTwOG");
var $6ced06e73c7f716a$require$channel = $iTwOG.channel;
function $6ced06e73c7f716a$var$fury(type, settings, numberOfHits) {
    const AD_INS = new $cf22d726990bbcce$exports();
    const NPC_INS = new $d879658d4e6779c8$exports();
    const HIT_INS = new $034a883ac1f2b0a0$exports();
    const CRIT_INS = new $8f9ba958af7e7dfc$exports();
    const AVG_INS = new $d5942e9fd7ce77f7$exports();
    const Helper = new $c3c4ca91a8790f30$exports();
    let abil_val = "fury";
    const fixedPercent = $234d086b0a8408ee$exports.abilities[abil_val]["fixed percent"];
    const variablePercent = $234d086b0a8408ee$exports.abilities[abil_val]["variable percent"];
    settings["category"] = $234d086b0a8408ee$exports.abilities[abil_val]["category"];
    const hits = [];
    numberOfHits = 3;
    for(var hitsplat = 0; hitsplat < numberOfHits; hitsplat++){
        const damageObject = Helper.damageObjectCreator(settings);
        //calculates ability damage
        let AD = AD_INS.calcAd(type, settings); //AD_INS.calcAd(type,settings);
        //sets fixed and variable damage
        let fixed = Math.floor(AD * fixedPercent);
        let variable = Math.floor(AD * variablePercent);
        //applies on-hit effects
        let onHit = HIT_INS.calcOnHit(fixed, variable, type, $234d086b0a8408ee$exports.abilities[abil_val]["on hit effects"], settings);
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
        settings["fury stacks"] += 1;
    }
    //calc total damage
    hits.push(Helper.totalDamageCalc(hits));
    return Helper.flooredList(hits);
}
$6ced06e73c7f716a$exports = $6ced06e73c7f716a$var$fury;


var $244cee27b6b6ee46$exports = {};








var $iTwOG = parcelRequire("iTwOG");
var $244cee27b6b6ee46$require$channel = $iTwOG.channel;
function $244cee27b6b6ee46$var$greater_fury(type, settings, numberOfHits) {
    const AD_INS = new $cf22d726990bbcce$exports();
    const NPC_INS = new $d879658d4e6779c8$exports();
    const HIT_INS = new $034a883ac1f2b0a0$exports();
    const CRIT_INS = new $8f9ba958af7e7dfc$exports();
    const AVG_INS = new $d5942e9fd7ce77f7$exports();
    const Helper = new $c3c4ca91a8790f30$exports();
    let abil_val = "greater fury";
    const fixedPercent = $234d086b0a8408ee$exports.abilities[abil_val]["fixed percent"];
    const variablePercent = $234d086b0a8408ee$exports.abilities[abil_val]["variable percent"];
    settings["category"] = $234d086b0a8408ee$exports.abilities[abil_val]["category"];
    const hits = [];
    for(var hitsplat = 0; hitsplat < numberOfHits; hitsplat++){
        const damageObject = Helper.damageObjectCreator(settings);
        //calculates ability damage
        let AD = AD_INS.calcAd(type, settings); //AD_INS.calcAd(type,settings);
        //sets fixed and variable damage
        let fixed = Math.floor(AD * fixedPercent);
        let variable = Math.floor(AD * variablePercent);
        //applies on-hit effects
        let onHit = HIT_INS.calcOnHit(fixed, variable, type, $234d086b0a8408ee$exports.abilities[abil_val]["on hit effects"], settings);
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
$244cee27b6b6ee46$exports = $244cee27b6b6ee46$var$greater_fury;


var $cfdcc77e2a2fbeb3$exports = {};








var $iTwOG = parcelRequire("iTwOG");
var $cfdcc77e2a2fbeb3$require$channel = $iTwOG.channel;
function $cfdcc77e2a2fbeb3$var$slice(type, settings, numberOfHits) {
    const AD_INS = new $cf22d726990bbcce$exports();
    const NPC_INS = new $d879658d4e6779c8$exports();
    const HIT_INS = new $034a883ac1f2b0a0$exports();
    const CRIT_INS = new $8f9ba958af7e7dfc$exports();
    const AVG_INS = new $d5942e9fd7ce77f7$exports();
    const Helper = new $c3c4ca91a8790f30$exports();
    let abil_val = "slice";
    const fixedPercent = $234d086b0a8408ee$exports.abilities[abil_val]["fixed percent"];
    const variablePercent = $234d086b0a8408ee$exports.abilities[abil_val]["variable percent"];
    settings["category"] = $234d086b0a8408ee$exports.abilities[abil_val]["category"];
    const hits = [];
    for(var hitsplat = 0; hitsplat < numberOfHits; hitsplat++){
        const damageObject = Helper.damageObjectCreator(settings);
        //calculates ability damage
        let AD = AD_INS.calcAd(type, settings); //AD_INS.calcAd(type,settings);
        //sets fixed and variable damage
        let fixed = Math.floor(AD * fixedPercent);
        let variable = Math.floor(AD * variablePercent);
        //applies on-hit effects
        let onHit = HIT_INS.calcOnHit(fixed, variable, type, $234d086b0a8408ee$exports.abilities[abil_val]["on hit effects"], settings);
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
$cfdcc77e2a2fbeb3$exports = $cfdcc77e2a2fbeb3$var$slice;


var $2fe87aa239360452$exports = {};








var $iTwOG = parcelRequire("iTwOG");
var $2fe87aa239360452$require$channel = $iTwOG.channel;
function $2fe87aa239360452$var$decimate(type, settings, numberOfHits) {
    const AD_INS = new $cf22d726990bbcce$exports();
    const NPC_INS = new $d879658d4e6779c8$exports();
    const HIT_INS = new $034a883ac1f2b0a0$exports();
    const CRIT_INS = new $8f9ba958af7e7dfc$exports();
    const AVG_INS = new $d5942e9fd7ce77f7$exports();
    const Helper = new $c3c4ca91a8790f30$exports();
    let abil_val = "decimate";
    const fixedPercent = $234d086b0a8408ee$exports.abilities[abil_val]["fixed percent"];
    const variablePercent = $234d086b0a8408ee$exports.abilities[abil_val]["variable percent"];
    settings["category"] = $234d086b0a8408ee$exports.abilities[abil_val]["category"];
    const hits = [];
    for(var hitsplat = 0; hitsplat < numberOfHits; hitsplat++){
        const damageObject = Helper.damageObjectCreator(settings);
        //calculates ability damage
        let AD = AD_INS.calcAd(type, settings); //AD_INS.calcAd(type,settings);
        //sets fixed and variable damage
        let fixed = Math.floor(AD * fixedPercent);
        let variable = Math.floor(AD * variablePercent);
        //applies on-hit effects
        let onHit = HIT_INS.calcOnHit(fixed, variable, type, $234d086b0a8408ee$exports.abilities[abil_val]["on hit effects"], settings);
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
$2fe87aa239360452$exports = $2fe87aa239360452$var$decimate;


var $9d46950e94d2c856$exports = {};








var $iTwOG = parcelRequire("iTwOG");
var $9d46950e94d2c856$require$channel = $iTwOG.channel;
function $9d46950e94d2c856$var$cleave(type, settings, numberOfHits) {
    const AD_INS = new $cf22d726990bbcce$exports();
    const NPC_INS = new $d879658d4e6779c8$exports();
    const HIT_INS = new $034a883ac1f2b0a0$exports();
    const CRIT_INS = new $8f9ba958af7e7dfc$exports();
    const AVG_INS = new $d5942e9fd7ce77f7$exports();
    const Helper = new $c3c4ca91a8790f30$exports();
    let abil_val = "cleave";
    const fixedPercent = $234d086b0a8408ee$exports.abilities[abil_val]["fixed percent"];
    const variablePercent = $234d086b0a8408ee$exports.abilities[abil_val]["variable percent"];
    settings["category"] = $234d086b0a8408ee$exports.abilities[abil_val]["category"];
    const hits = [];
    for(var hitsplat = 0; hitsplat < numberOfHits; hitsplat++){
        const damageObject = Helper.damageObjectCreator(settings);
        //calculates ability damage
        let AD = AD_INS.calcAd(type, settings); //AD_INS.calcAd(type,settings);
        //sets fixed and variable damage
        let fixed = Math.floor(AD * fixedPercent);
        let variable = Math.floor(AD * variablePercent);
        //applies on-hit effects
        let onHit = HIT_INS.calcOnHit(fixed, variable, type, $234d086b0a8408ee$exports.abilities[abil_val]["on hit effects"], settings);
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
$9d46950e94d2c856$exports = $9d46950e94d2c856$var$cleave;


var $fd438600bac090e7$exports = {};








var $iTwOG = parcelRequire("iTwOG");
var $fd438600bac090e7$require$channel = $iTwOG.channel;
function $fd438600bac090e7$var$sever(type, settings, numberOfHits) {
    const AD_INS = new $cf22d726990bbcce$exports();
    const NPC_INS = new $d879658d4e6779c8$exports();
    const HIT_INS = new $034a883ac1f2b0a0$exports();
    const CRIT_INS = new $8f9ba958af7e7dfc$exports();
    const AVG_INS = new $d5942e9fd7ce77f7$exports();
    const Helper = new $c3c4ca91a8790f30$exports();
    let abil_val = "sever";
    const fixedPercent = $234d086b0a8408ee$exports.abilities[abil_val]["fixed percent"];
    const variablePercent = $234d086b0a8408ee$exports.abilities[abil_val]["variable percent"];
    settings["category"] = $234d086b0a8408ee$exports.abilities[abil_val]["category"];
    const hits = [];
    for(var hitsplat = 0; hitsplat < numberOfHits; hitsplat++){
        const damageObject = Helper.damageObjectCreator(settings);
        //calculates ability damage
        let AD = AD_INS.calcAd(type, settings); //AD_INS.calcAd(type,settings);
        //sets fixed and variable damage
        let fixed = Math.floor(AD * fixedPercent);
        let variable = Math.floor(AD * variablePercent);
        //applies on-hit effects
        let onHit = HIT_INS.calcOnHit(fixed, variable, type, $234d086b0a8408ee$exports.abilities[abil_val]["on hit effects"], settings);
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
$fd438600bac090e7$exports = $fd438600bac090e7$var$sever;


var $51d28658e4bcf8aa$exports = {};








var $iTwOG = parcelRequire("iTwOG");
var $51d28658e4bcf8aa$require$channel = $iTwOG.channel;
function $51d28658e4bcf8aa$var$dismember(type, settings, numberOfHits) {
    const AD_INS = new $cf22d726990bbcce$exports();
    const NPC_INS = new $d879658d4e6779c8$exports();
    const HIT_INS = new $034a883ac1f2b0a0$exports();
    const CRIT_INS = new $8f9ba958af7e7dfc$exports();
    const AVG_INS = new $d5942e9fd7ce77f7$exports();
    const Helper = new $c3c4ca91a8790f30$exports();
    let abil_val = "dismember";
    const fixedPercent = $234d086b0a8408ee$exports.abilities[abil_val]["fixed percent"];
    const variablePercent = $234d086b0a8408ee$exports.abilities[abil_val]["variable percent"];
    settings["category"] = $234d086b0a8408ee$exports.abilities[abil_val]["category"];
    const hits = [];
    numberOfHits = 5;
    for(var hitsplat = 0; hitsplat < numberOfHits; hitsplat++){
        const damageObject = Helper.damageObjectCreator(settings);
        //calculates ability damage
        let AD = AD_INS.calcAd(type, settings); //AD_INS.calcAd(type,settings);
        //sets fixed and variable damage
        let fixed = Math.floor(AD * fixedPercent);
        let variable = Math.floor(AD * variablePercent);
        //applies on-hit effects
        let onHit = HIT_INS.calcOnHit(fixed, variable, type, $234d086b0a8408ee$exports.abilities[abil_val]["on hit effects"], settings);
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
$51d28658e4bcf8aa$exports = $51d28658e4bcf8aa$var$dismember;


var $8c2f6a17d3d51eb0$exports = {};








var $iTwOG = parcelRequire("iTwOG");
var $8c2f6a17d3d51eb0$require$channel = $iTwOG.channel;
function $8c2f6a17d3d51eb0$var$flurry(type, settings, numberOfHits) {
    const AD_INS = new $cf22d726990bbcce$exports();
    const NPC_INS = new $d879658d4e6779c8$exports();
    const HIT_INS = new $034a883ac1f2b0a0$exports();
    const CRIT_INS = new $8f9ba958af7e7dfc$exports();
    const AVG_INS = new $d5942e9fd7ce77f7$exports();
    const Helper = new $c3c4ca91a8790f30$exports();
    let abil_val = "flurry";
    const fixedPercent = $234d086b0a8408ee$exports.abilities[abil_val]["fixed percent"];
    const variablePercent = $234d086b0a8408ee$exports.abilities[abil_val]["variable percent"];
    settings["category"] = $234d086b0a8408ee$exports.abilities[abil_val]["category"];
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
        let onHit = HIT_INS.calcOnHit(fixed, variable, type, $234d086b0a8408ee$exports.abilities[abil_val]["on hit effects"], settings);
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
$8c2f6a17d3d51eb0$exports = $8c2f6a17d3d51eb0$var$flurry;


var $8571a5eef3d5120a$exports = {};








var $iTwOG = parcelRequire("iTwOG");
var $8571a5eef3d5120a$require$channel = $iTwOG.channel;
function $8571a5eef3d5120a$var$greater_flurry(type, settings, numberOfHits) {
    const AD_INS = new $cf22d726990bbcce$exports();
    const NPC_INS = new $d879658d4e6779c8$exports();
    const HIT_INS = new $034a883ac1f2b0a0$exports();
    const CRIT_INS = new $8f9ba958af7e7dfc$exports();
    const AVG_INS = new $d5942e9fd7ce77f7$exports();
    const Helper = new $c3c4ca91a8790f30$exports();
    let abil_val = "greater flurry";
    const fixedPercent = $234d086b0a8408ee$exports.abilities[abil_val]["fixed percent"];
    const variablePercent = $234d086b0a8408ee$exports.abilities[abil_val]["variable percent"];
    settings["category"] = $234d086b0a8408ee$exports.abilities[abil_val]["category"];
    const hits = [];
    for(var hitsplat = 0; hitsplat < numberOfHits; hitsplat++){
        const damageObject = Helper.damageObjectCreator(settings);
        //calculates ability damage
        let AD = AD_INS.calcAd(type, settings); //AD_INS.calcAd(type,settings);
        //sets fixed and variable damage
        let fixed = Math.floor(AD * fixedPercent);
        let variable = Math.floor(AD * variablePercent);
        //applies on-hit effects
        let onHit = HIT_INS.calcOnHit(fixed, variable, type, $234d086b0a8408ee$exports.abilities[abil_val]["on hit effects"], settings);
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
$8571a5eef3d5120a$exports = $8571a5eef3d5120a$var$greater_flurry;


var $d28fa176a0868c4e$exports = {};








var $iTwOG = parcelRequire("iTwOG");
var $d28fa176a0868c4e$require$channel = $iTwOG.channel;
function $d28fa176a0868c4e$var$stomp(type, settings, numberOfHits) {
    const AD_INS = new $cf22d726990bbcce$exports();
    const NPC_INS = new $d879658d4e6779c8$exports();
    const HIT_INS = new $034a883ac1f2b0a0$exports();
    const CRIT_INS = new $8f9ba958af7e7dfc$exports();
    const AVG_INS = new $d5942e9fd7ce77f7$exports();
    const Helper = new $c3c4ca91a8790f30$exports();
    let abil_val = "stomp";
    const fixedPercent = $234d086b0a8408ee$exports.abilities[abil_val]["fixed percent"];
    const variablePercent = $234d086b0a8408ee$exports.abilities[abil_val]["variable percent"];
    settings["category"] = $234d086b0a8408ee$exports.abilities[abil_val]["category"];
    const hits = [];
    for(var hitsplat = 0; hitsplat < numberOfHits; hitsplat++){
        const damageObject = Helper.damageObjectCreator(settings);
        //calculates ability damage
        let AD = AD_INS.calcAd(type, settings); //AD_INS.calcAd(type,settings);
        //sets fixed and variable damage
        let fixed = Math.floor(AD * fixedPercent);
        let variable = Math.floor(AD * variablePercent);
        //applies on-hit effects
        let onHit = HIT_INS.calcOnHit(fixed, variable, type, $234d086b0a8408ee$exports.abilities[abil_val]["on hit effects"], settings);
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
$d28fa176a0868c4e$exports = $d28fa176a0868c4e$var$stomp;


var $acaf640cafac0d7b$exports = {};








var $iTwOG = parcelRequire("iTwOG");
var $acaf640cafac0d7b$require$channel = $iTwOG.channel;
function $acaf640cafac0d7b$var$forceful_backhand(type, settings, numberOfHits) {
    const AD_INS = new $cf22d726990bbcce$exports();
    const NPC_INS = new $d879658d4e6779c8$exports();
    const HIT_INS = new $034a883ac1f2b0a0$exports();
    const CRIT_INS = new $8f9ba958af7e7dfc$exports();
    const AVG_INS = new $d5942e9fd7ce77f7$exports();
    const Helper = new $c3c4ca91a8790f30$exports();
    let abil_val = "forceful backhand";
    const fixedPercent = $234d086b0a8408ee$exports.abilities[abil_val]["fixed percent"];
    const variablePercent = $234d086b0a8408ee$exports.abilities[abil_val]["variable percent"];
    settings["category"] = $234d086b0a8408ee$exports.abilities[abil_val]["category"];
    const hits = [];
    for(var hitsplat = 0; hitsplat < numberOfHits; hitsplat++){
        const damageObject = Helper.damageObjectCreator(settings);
        //calculates ability damage
        let AD = AD_INS.calcAd(type, settings); //AD_INS.calcAd(type,settings);
        //sets fixed and variable damage
        let fixed = Math.floor(AD * fixedPercent);
        let variable = Math.floor(AD * variablePercent);
        //applies on-hit effects
        let onHit = HIT_INS.calcOnHit(fixed, variable, type, $234d086b0a8408ee$exports.abilities[abil_val]["on hit effects"], settings);
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
$acaf640cafac0d7b$exports = $acaf640cafac0d7b$var$forceful_backhand;


var $07a2acb8f7a82768$exports = {};








var $iTwOG = parcelRequire("iTwOG");
var $07a2acb8f7a82768$require$channel = $iTwOG.channel;
function $07a2acb8f7a82768$var$quake(type, settings, numberOfHits) {
    const AD_INS = new $cf22d726990bbcce$exports();
    const NPC_INS = new $d879658d4e6779c8$exports();
    const HIT_INS = new $034a883ac1f2b0a0$exports();
    const CRIT_INS = new $8f9ba958af7e7dfc$exports();
    const AVG_INS = new $d5942e9fd7ce77f7$exports();
    const Helper = new $c3c4ca91a8790f30$exports();
    let abil_val = "quake";
    const fixedPercent = $234d086b0a8408ee$exports.abilities[abil_val]["fixed percent"];
    const variablePercent = $234d086b0a8408ee$exports.abilities[abil_val]["variable percent"];
    settings["category"] = $234d086b0a8408ee$exports.abilities[abil_val]["category"];
    const hits = [];
    for(var hitsplat = 0; hitsplat < numberOfHits; hitsplat++){
        const damageObject = Helper.damageObjectCreator(settings);
        //calculates ability damage
        let AD = AD_INS.calcAd(type, settings); //AD_INS.calcAd(type,settings);
        //sets fixed and variable damage
        let fixed = Math.floor(AD * fixedPercent);
        let variable = Math.floor(AD * variablePercent);
        //applies on-hit effects
        let onHit = HIT_INS.calcOnHit(fixed, variable, type, $234d086b0a8408ee$exports.abilities[abil_val]["on hit effects"], settings);
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
$07a2acb8f7a82768$exports = $07a2acb8f7a82768$var$quake;


var $c2f17ada28d0956c$exports = {};








var $iTwOG = parcelRequire("iTwOG");
var $c2f17ada28d0956c$require$channel = $iTwOG.channel;
function $c2f17ada28d0956c$var$slaughter(type, settings, numberOfHits) {
    const AD_INS = new $cf22d726990bbcce$exports();
    const NPC_INS = new $d879658d4e6779c8$exports();
    const HIT_INS = new $034a883ac1f2b0a0$exports();
    const CRIT_INS = new $8f9ba958af7e7dfc$exports();
    const AVG_INS = new $d5942e9fd7ce77f7$exports();
    const Helper = new $c3c4ca91a8790f30$exports();
    let abil_val = "slaughter";
    const fixedPercent = $234d086b0a8408ee$exports.abilities[abil_val]["fixed percent"];
    const variablePercent = $234d086b0a8408ee$exports.abilities[abil_val]["variable percent"];
    settings["category"] = $234d086b0a8408ee$exports.abilities[abil_val]["category"];
    const hits = [];
    numberOfHits = 5;
    for(var hitsplat = 0; hitsplat < numberOfHits; hitsplat++){
        const damageObject = Helper.damageObjectCreator(settings);
        //calculates ability damage
        let AD = AD_INS.calcAd(type, settings); //AD_INS.calcAd(type,settings);
        //sets fixed and variable damage
        let fixed = Math.floor(AD * fixedPercent);
        let variable = Math.floor(AD * variablePercent);
        //applies on-hit effects
        let onHit = HIT_INS.calcOnHit(fixed, variable, type, $234d086b0a8408ee$exports.abilities[abil_val]["on hit effects"], settings);
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
$c2f17ada28d0956c$exports = $c2f17ada28d0956c$var$slaughter;


var $6c476bbdbed4a3ee$exports = {};








var $iTwOG = parcelRequire("iTwOG");
var $6c476bbdbed4a3ee$require$channel = $iTwOG.channel;
function $6c476bbdbed4a3ee$var$destroy(type, settings, numberOfHits) {
    const AD_INS = new $cf22d726990bbcce$exports();
    const NPC_INS = new $d879658d4e6779c8$exports();
    const HIT_INS = new $034a883ac1f2b0a0$exports();
    const CRIT_INS = new $8f9ba958af7e7dfc$exports();
    const AVG_INS = new $d5942e9fd7ce77f7$exports();
    const Helper = new $c3c4ca91a8790f30$exports();
    let abil_val = "destroy";
    const fixedPercent = $234d086b0a8408ee$exports.abilities[abil_val]["fixed percent"];
    const variablePercent = $234d086b0a8408ee$exports.abilities[abil_val]["variable percent"];
    settings["category"] = $234d086b0a8408ee$exports.abilities[abil_val]["category"];
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
        let onHit = HIT_INS.calcOnHit(fixed, variable, type, $234d086b0a8408ee$exports.abilities[abil_val]["on hit effects"], settings);
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
$6c476bbdbed4a3ee$exports = $6c476bbdbed4a3ee$var$destroy;


var $3d8881e7b9790489$exports = {};








var $iTwOG = parcelRequire("iTwOG");
var $3d8881e7b9790489$require$channel = $iTwOG.channel;
function $3d8881e7b9790489$var$assault(type, settings, numberOfHits) {
    const AD_INS = new $cf22d726990bbcce$exports();
    const NPC_INS = new $d879658d4e6779c8$exports();
    const HIT_INS = new $034a883ac1f2b0a0$exports();
    const CRIT_INS = new $8f9ba958af7e7dfc$exports();
    const AVG_INS = new $d5942e9fd7ce77f7$exports();
    const Helper = new $c3c4ca91a8790f30$exports();
    let abil_val = "assault";
    const fixedPercent = $234d086b0a8408ee$exports.abilities[abil_val]["fixed percent"];
    const variablePercent = $234d086b0a8408ee$exports.abilities[abil_val]["variable percent"];
    settings["category"] = $234d086b0a8408ee$exports.abilities[abil_val]["category"];
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
        let onHit = HIT_INS.calcOnHit(fixed, variable, type, $234d086b0a8408ee$exports.abilities[abil_val]["on hit effects"], settings);
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
$3d8881e7b9790489$exports = $3d8881e7b9790489$var$assault;


var $da97b356627a36e4$exports = {};

var $iTwOG = parcelRequire("iTwOG");
var $da97b356627a36e4$require$channel = $iTwOG.channel;
var $fceb280df66e07aa$exports = {};








var $iTwOG = parcelRequire("iTwOG");
var $fceb280df66e07aa$require$channel = $iTwOG.channel;
function $fceb280df66e07aa$var$hurricane_1(type, settings, numberOfHits) {
    const AD_INS = new $cf22d726990bbcce$exports();
    const NPC_INS = new $d879658d4e6779c8$exports();
    const HIT_INS = new $034a883ac1f2b0a0$exports();
    const CRIT_INS = new $8f9ba958af7e7dfc$exports();
    const AVG_INS = new $d5942e9fd7ce77f7$exports();
    const Helper = new $c3c4ca91a8790f30$exports();
    let abil_val = "hurricane 1";
    const fixedPercent = $234d086b0a8408ee$exports.abilities[abil_val]["fixed percent"];
    const variablePercent = $234d086b0a8408ee$exports.abilities[abil_val]["variable percent"];
    settings["category"] = $234d086b0a8408ee$exports.abilities[abil_val]["category"];
    const hits = [];
    for(var hitsplat = 0; hitsplat < numberOfHits; hitsplat++){
        const damageObject = Helper.damageObjectCreator(settings);
        //calculates ability damage
        let AD = AD_INS.calcAd(type, settings); //AD_INS.calcAd(type,settings);
        //sets fixed and variable damage
        let fixed = Math.floor(AD * fixedPercent);
        let variable = Math.floor(AD * variablePercent);
        //applies on-hit effects
        let onHit = HIT_INS.calcOnHit(fixed, variable, type, $234d086b0a8408ee$exports.abilities[abil_val]["on hit effects"], settings);
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
$fceb280df66e07aa$exports = $fceb280df66e07aa$var$hurricane_1;


var $26e5379ea0bcb659$exports = {};








var $iTwOG = parcelRequire("iTwOG");
var $26e5379ea0bcb659$require$channel = $iTwOG.channel;
function $26e5379ea0bcb659$var$hurricane_2(type, settings, numberOfHits) {
    const AD_INS = new $cf22d726990bbcce$exports();
    const NPC_INS = new $d879658d4e6779c8$exports();
    const HIT_INS = new $034a883ac1f2b0a0$exports();
    const CRIT_INS = new $8f9ba958af7e7dfc$exports();
    const AVG_INS = new $d5942e9fd7ce77f7$exports();
    const Helper = new $c3c4ca91a8790f30$exports();
    let abil_val = "hurricane 2";
    const fixedPercent = $234d086b0a8408ee$exports.abilities[abil_val]["fixed percent"];
    const variablePercent = $234d086b0a8408ee$exports.abilities[abil_val]["variable percent"];
    settings["category"] = $234d086b0a8408ee$exports.abilities[abil_val]["category"];
    const hits = [];
    for(var hitsplat = 0; hitsplat < numberOfHits; hitsplat++){
        const damageObject = Helper.damageObjectCreator(settings);
        //calculates ability damage
        let AD = AD_INS.calcAd(type, settings); //AD_INS.calcAd(type,settings);
        //sets fixed and variable damage
        let fixed = Math.floor(AD * fixedPercent);
        let variable = Math.floor(AD * variablePercent);
        //applies on-hit effects
        let onHit = HIT_INS.calcOnHit(fixed, variable, type, $234d086b0a8408ee$exports.abilities[abil_val]["on hit effects"], settings);
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
$26e5379ea0bcb659$exports = $26e5379ea0bcb659$var$hurricane_2;


function $da97b356627a36e4$var$hurricane(type, settings, numberOfHits) {
    const hitOne = $fceb280df66e07aa$exports(type, settings, 1);
    const hitTwo = $26e5379ea0bcb659$exports(type, settings, 1);
    return [
        hitOne[hitOne.length - 1] + hitTwo[hitTwo.length - 1]
    ];
}
$da97b356627a36e4$exports = $da97b356627a36e4$var$hurricane;


var $9fb3d96d82534706$exports = {};








var $iTwOG = parcelRequire("iTwOG");
var $9fb3d96d82534706$require$channel = $iTwOG.channel;
function $9fb3d96d82534706$var$blood_tendrils(type, settings, numberOfHits) {
    const AD_INS = new $cf22d726990bbcce$exports();
    const NPC_INS = new $d879658d4e6779c8$exports();
    const HIT_INS = new $034a883ac1f2b0a0$exports();
    const CRIT_INS = new $8f9ba958af7e7dfc$exports();
    const AVG_INS = new $d5942e9fd7ce77f7$exports();
    const Helper = new $c3c4ca91a8790f30$exports();
    let abil_val = "slice";
    const fixedPercent = $234d086b0a8408ee$exports.abilities[abil_val]["fixed percent"];
    const variablePercent = $234d086b0a8408ee$exports.abilities[abil_val]["variable percent"];
    settings["category"] = $234d086b0a8408ee$exports.abilities[abil_val]["category"];
    const hits = [];
    numberOfHits = 5;
    for(var hitsplat = 0; hitsplat < numberOfHits; hitsplat++){
        const damageObject = Helper.damageObjectCreator(settings);
        //calculates ability damage
        let AD = AD_INS.calcAd(type, settings); //AD_INS.calcAd(type,settings);
        //sets fixed and variable damage
        let fixed = Math.floor(AD * fixedPercent);
        let variable = Math.floor(AD * variablePercent);
        //applies on-hit effects
        let onHit = HIT_INS.calcOnHit(fixed, variable, type, $234d086b0a8408ee$exports.abilities[abil_val]["on hit effects"], settings);
        if (hitsplat === 1) {
            onHit[0] = 2 * onHit[0];
            onHit[1] = 2 * onHit[1];
        }
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
$9fb3d96d82534706$exports = $9fb3d96d82534706$var$blood_tendrils;


var $631f452cbc804779$exports = {};








var $iTwOG = parcelRequire("iTwOG");
var $631f452cbc804779$require$channel = $iTwOG.channel;
function $631f452cbc804779$var$overpower(type, settings, numberOfHits) {
    const AD_INS = new $cf22d726990bbcce$exports();
    const NPC_INS = new $d879658d4e6779c8$exports();
    const HIT_INS = new $034a883ac1f2b0a0$exports();
    const CRIT_INS = new $8f9ba958af7e7dfc$exports();
    const AVG_INS = new $d5942e9fd7ce77f7$exports();
    const Helper = new $c3c4ca91a8790f30$exports();
    let abil_val = "overpower";
    const fixedPercent = $234d086b0a8408ee$exports.abilities[abil_val]["fixed percent"];
    const variablePercent = $234d086b0a8408ee$exports.abilities[abil_val]["variable percent"];
    settings["category"] = $234d086b0a8408ee$exports.abilities[abil_val]["category"];
    const hits = [];
    if (settings["cape"] === "igneous kal-ket") numberOfHits = 2;
    for(var hitsplat = 0; hitsplat < numberOfHits; hitsplat++){
        const damageObject = Helper.damageObjectCreator(settings);
        //calculates ability damage
        let AD = AD_INS.calcAd(type, settings); //AD_INS.calcAd(type,settings);
        //sets fixed and variable damage
        let fixed = Math.floor(AD * fixedPercent);
        let variable = Math.floor(AD * variablePercent);
        //applies on-hit effects
        let onHit = HIT_INS.calcOnHit(fixed, variable, type, $234d086b0a8408ee$exports.abilities[abil_val]["on hit effects"], settings);
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
$631f452cbc804779$exports = $631f452cbc804779$var$overpower;


var $8fb83279d341a9a3$exports = {};








var $iTwOG = parcelRequire("iTwOG");
var $8fb83279d341a9a3$require$channel = $iTwOG.channel;
function $8fb83279d341a9a3$var$pulverise(type, settings, numberOfHits) {
    const AD_INS = new $cf22d726990bbcce$exports();
    const NPC_INS = new $d879658d4e6779c8$exports();
    const HIT_INS = new $034a883ac1f2b0a0$exports();
    const CRIT_INS = new $8f9ba958af7e7dfc$exports();
    const AVG_INS = new $d5942e9fd7ce77f7$exports();
    const Helper = new $c3c4ca91a8790f30$exports();
    let abil_val = "pulverise";
    const fixedPercent = $234d086b0a8408ee$exports.abilities[abil_val]["fixed percent"];
    const variablePercent = $234d086b0a8408ee$exports.abilities[abil_val]["variable percent"];
    settings["category"] = $234d086b0a8408ee$exports.abilities[abil_val]["category"];
    const hits = [];
    for(var hitsplat = 0; hitsplat < numberOfHits; hitsplat++){
        const damageObject = Helper.damageObjectCreator(settings);
        //calculates ability damage
        let AD = AD_INS.calcAd(type, settings); //AD_INS.calcAd(type,settings);
        //sets fixed and variable damage
        let fixed = Math.floor(AD * fixedPercent);
        let variable = Math.floor(AD * variablePercent);
        //applies on-hit effects
        let onHit = HIT_INS.calcOnHit(fixed, variable, type, $234d086b0a8408ee$exports.abilities[abil_val]["on hit effects"], settings);
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
$8fb83279d341a9a3$exports = $8fb83279d341a9a3$var$pulverise;


var $85313107f6bb83bb$exports = {};








var $iTwOG = parcelRequire("iTwOG");
var $85313107f6bb83bb$require$channel = $iTwOG.channel;
function $85313107f6bb83bb$var$frenzy(type, settings, numberOfHits) {
    const AD_INS = new $cf22d726990bbcce$exports();
    const NPC_INS = new $d879658d4e6779c8$exports();
    const HIT_INS = new $034a883ac1f2b0a0$exports();
    const CRIT_INS = new $8f9ba958af7e7dfc$exports();
    const AVG_INS = new $d5942e9fd7ce77f7$exports();
    const Helper = new $c3c4ca91a8790f30$exports();
    let abil_val = "frenzy";
    const fixedPercent = $234d086b0a8408ee$exports.abilities[abil_val]["fixed percent"];
    const variablePercent = $234d086b0a8408ee$exports.abilities[abil_val]["variable percent"];
    settings["category"] = $234d086b0a8408ee$exports.abilities[abil_val]["category"];
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
        let onHit = HIT_INS.calcOnHit(fixed, variable, type, $234d086b0a8408ee$exports.abilities[abil_val]["on hit effects"], settings);
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
$85313107f6bb83bb$exports = $85313107f6bb83bb$var$frenzy;


var $299c3fec1fef8ca3$exports = {};

var $iTwOG = parcelRequire("iTwOG");
var $299c3fec1fef8ca3$require$channel = $iTwOG.channel;
var $d3bced302b00a929$exports = {};








var $iTwOG = parcelRequire("iTwOG");
var $d3bced302b00a929$require$channel = $iTwOG.channel;
function $d3bced302b00a929$var$massacre_initial(type, settings, numberOfHits) {
    const AD_INS = new $cf22d726990bbcce$exports();
    const NPC_INS = new $d879658d4e6779c8$exports();
    const HIT_INS = new $034a883ac1f2b0a0$exports();
    const CRIT_INS = new $8f9ba958af7e7dfc$exports();
    const AVG_INS = new $d5942e9fd7ce77f7$exports();
    const Helper = new $c3c4ca91a8790f30$exports();
    let abil_val = "massacre - initial hit";
    const fixedPercent = $234d086b0a8408ee$exports.abilities[abil_val]["fixed percent"];
    const variablePercent = $234d086b0a8408ee$exports.abilities[abil_val]["variable percent"];
    settings["category"] = $234d086b0a8408ee$exports.abilities[abil_val]["category"];
    const hits = [];
    for(var hitsplat = 0; hitsplat < numberOfHits; hitsplat++){
        const damageObject = Helper.damageObjectCreator(settings);
        //calculates ability damage
        let AD = AD_INS.calcAd(type, settings); //AD_INS.calcAd(type,settings);
        //sets fixed and variable damage
        let fixed = Math.floor(AD * fixedPercent);
        let variable = Math.floor(AD * variablePercent);
        //applies on-hit effects
        let onHit = HIT_INS.calcOnHit(fixed, variable, type, $234d086b0a8408ee$exports.abilities[abil_val]["on hit effects"], settings);
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
$d3bced302b00a929$exports = $d3bced302b00a929$var$massacre_initial;


var $be25b6e2cf9de7ce$exports = {};








var $iTwOG = parcelRequire("iTwOG");
var $be25b6e2cf9de7ce$require$channel = $iTwOG.channel;
function $be25b6e2cf9de7ce$var$massacre_bleed(type, settings, numberOfHits) {
    const AD_INS = new $cf22d726990bbcce$exports();
    const NPC_INS = new $d879658d4e6779c8$exports();
    const HIT_INS = new $034a883ac1f2b0a0$exports();
    const CRIT_INS = new $8f9ba958af7e7dfc$exports();
    const AVG_INS = new $d5942e9fd7ce77f7$exports();
    const Helper = new $c3c4ca91a8790f30$exports();
    let abil_val = "massacre - bleed hit";
    const fixedPercent = $234d086b0a8408ee$exports.abilities[abil_val]["fixed percent"];
    const variablePercent = $234d086b0a8408ee$exports.abilities[abil_val]["variable percent"];
    settings["category"] = $234d086b0a8408ee$exports.abilities[abil_val]["category"];
    const hits = [];
    for(var hitsplat = 0; hitsplat < numberOfHits; hitsplat++){
        const damageObject = Helper.damageObjectCreator(settings);
        //calculates ability damage
        let AD = AD_INS.calcAd(type, settings); //AD_INS.calcAd(type,settings);
        //sets fixed and variable damage
        let fixed = Math.floor(AD * fixedPercent);
        let variable = Math.floor(AD * variablePercent);
        //applies on-hit effects
        let onHit = HIT_INS.calcOnHit(fixed, variable, type, $234d086b0a8408ee$exports.abilities[abil_val]["on hit effects"], settings);
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
$be25b6e2cf9de7ce$exports = $be25b6e2cf9de7ce$var$massacre_bleed;


function $299c3fec1fef8ca3$var$massacre(type, settings, numberOfHits) {
    const hitOne = $d3bced302b00a929$exports(type, settings, 1);
    const hitTwo = $be25b6e2cf9de7ce$exports(type, settings, 5);
    return [
        hitOne[hitOne.length - 1] + hitTwo[hitTwo.length - 1]
    ];
}
$299c3fec1fef8ca3$exports = $299c3fec1fef8ca3$var$massacre;


var $5a2eae2a28266b83$exports = {};

var $iTwOG = parcelRequire("iTwOG");
var $5a2eae2a28266b83$require$channel = $iTwOG.channel;
var $4b5d04baad46bc5c$exports = {};








var $iTwOG = parcelRequire("iTwOG");
var $4b5d04baad46bc5c$require$channel = $iTwOG.channel;
function $4b5d04baad46bc5c$var$dclaw_1(type, settings, numberOfHits) {
    const AD_INS = new $cf22d726990bbcce$exports();
    const NPC_INS = new $d879658d4e6779c8$exports();
    const HIT_INS = new $034a883ac1f2b0a0$exports();
    const CRIT_INS = new $8f9ba958af7e7dfc$exports();
    const AVG_INS = new $d5942e9fd7ce77f7$exports();
    const Helper = new $c3c4ca91a8790f30$exports();
    let abil_val = "dragon claw 1";
    const fixedPercent = $234d086b0a8408ee$exports.abilities[abil_val]["fixed percent"];
    const variablePercent = $234d086b0a8408ee$exports.abilities[abil_val]["variable percent"];
    settings["category"] = $234d086b0a8408ee$exports.abilities[abil_val]["category"];
    const hits = [];
    for(var hitsplat = 0; hitsplat < numberOfHits; hitsplat++){
        const damageObject = Helper.damageObjectCreator(settings);
        //calculates ability damage
        let AD = AD_INS.calcAd(type, settings); //AD_INS.calcAd(type,settings);
        //sets fixed and variable damage
        let fixed = Math.floor(AD * fixedPercent);
        let variable = Math.floor(AD * variablePercent);
        //applies on-hit effects
        let onHit = HIT_INS.calcOnHit(fixed, variable, type, $234d086b0a8408ee$exports.abilities[abil_val]["on hit effects"], settings);
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
$4b5d04baad46bc5c$exports = $4b5d04baad46bc5c$var$dclaw_1;


var $f4e93548aab9d0d1$exports = {};








var $iTwOG = parcelRequire("iTwOG");
var $f4e93548aab9d0d1$require$channel = $iTwOG.channel;
function $f4e93548aab9d0d1$var$dclaw_2(type, settings, numberOfHits) {
    const AD_INS = new $cf22d726990bbcce$exports();
    const NPC_INS = new $d879658d4e6779c8$exports();
    const HIT_INS = new $034a883ac1f2b0a0$exports();
    const CRIT_INS = new $8f9ba958af7e7dfc$exports();
    const AVG_INS = new $d5942e9fd7ce77f7$exports();
    const Helper = new $c3c4ca91a8790f30$exports();
    let abil_val = "dragon claw 2";
    const fixedPercent = $234d086b0a8408ee$exports.abilities[abil_val]["fixed percent"];
    const variablePercent = $234d086b0a8408ee$exports.abilities[abil_val]["variable percent"];
    settings["category"] = $234d086b0a8408ee$exports.abilities[abil_val]["category"];
    const hits = [];
    for(var hitsplat = 0; hitsplat < numberOfHits; hitsplat++){
        const damageObject = Helper.damageObjectCreator(settings);
        //calculates ability damage
        let AD = AD_INS.calcAd(type, settings); //AD_INS.calcAd(type,settings);
        //sets fixed and variable damage
        let fixed = Math.floor(AD * fixedPercent);
        let variable = Math.floor(AD * variablePercent);
        //applies on-hit effects
        let onHit = HIT_INS.calcOnHit(fixed, variable, type, $234d086b0a8408ee$exports.abilities[abil_val]["on hit effects"], settings);
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
$f4e93548aab9d0d1$exports = $f4e93548aab9d0d1$var$dclaw_2;


var $05ef46e123235d31$exports = {};








var $iTwOG = parcelRequire("iTwOG");
var $05ef46e123235d31$require$channel = $iTwOG.channel;
function $05ef46e123235d31$var$dclaw_3(type, settings, numberOfHits) {
    const AD_INS = new $cf22d726990bbcce$exports();
    const NPC_INS = new $d879658d4e6779c8$exports();
    const HIT_INS = new $034a883ac1f2b0a0$exports();
    const CRIT_INS = new $8f9ba958af7e7dfc$exports();
    const AVG_INS = new $d5942e9fd7ce77f7$exports();
    const Helper = new $c3c4ca91a8790f30$exports();
    let abil_val = "dragon claw 3";
    const fixedPercent = $234d086b0a8408ee$exports.abilities[abil_val]["fixed percent"];
    const variablePercent = $234d086b0a8408ee$exports.abilities[abil_val]["variable percent"];
    settings["category"] = $234d086b0a8408ee$exports.abilities[abil_val]["category"];
    const hits = [];
    for(var hitsplat = 0; hitsplat < numberOfHits; hitsplat++){
        const damageObject = Helper.damageObjectCreator(settings);
        //calculates ability damage
        let AD = AD_INS.calcAd(type, settings); //AD_INS.calcAd(type,settings);
        //sets fixed and variable damage
        let fixed = Math.floor(AD * fixedPercent);
        let variable = Math.floor(AD * variablePercent);
        //applies on-hit effects
        let onHit = HIT_INS.calcOnHit(fixed, variable, type, $234d086b0a8408ee$exports.abilities[abil_val]["on hit effects"], settings);
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
$05ef46e123235d31$exports = $05ef46e123235d31$var$dclaw_3;


var $39bce5d6fff62690$exports = {};








var $iTwOG = parcelRequire("iTwOG");
var $39bce5d6fff62690$require$channel = $iTwOG.channel;
function $39bce5d6fff62690$var$dclaw_4(type, settings, numberOfHits) {
    const AD_INS = new $cf22d726990bbcce$exports();
    const NPC_INS = new $d879658d4e6779c8$exports();
    const HIT_INS = new $034a883ac1f2b0a0$exports();
    const CRIT_INS = new $8f9ba958af7e7dfc$exports();
    const AVG_INS = new $d5942e9fd7ce77f7$exports();
    const Helper = new $c3c4ca91a8790f30$exports();
    let abil_val = "dragon claw 4";
    const fixedPercent = $234d086b0a8408ee$exports.abilities[abil_val]["fixed percent"];
    const variablePercent = $234d086b0a8408ee$exports.abilities[abil_val]["variable percent"];
    settings["category"] = $234d086b0a8408ee$exports.abilities[abil_val]["category"];
    const hits = [];
    for(var hitsplat = 0; hitsplat < numberOfHits; hitsplat++){
        const damageObject = Helper.damageObjectCreator(settings);
        //calculates ability damage
        let AD = AD_INS.calcAd(type, settings); //AD_INS.calcAd(type,settings);
        //sets fixed and variable damage
        let fixed = Math.floor(AD * fixedPercent);
        let variable = Math.floor(AD * variablePercent);
        //applies on-hit effects
        let onHit = HIT_INS.calcOnHit(fixed, variable, type, $234d086b0a8408ee$exports.abilities[abil_val]["on hit effects"], settings);
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
$39bce5d6fff62690$exports = $39bce5d6fff62690$var$dclaw_4;


function $5a2eae2a28266b83$var$dragon_claw(type, settings, numberOfHits) {
    const hitOne = $4b5d04baad46bc5c$exports(type, settings, 1);
    const hitTwo = $f4e93548aab9d0d1$exports(type, settings, 1);
    const hitThree = $05ef46e123235d31$exports(type, settings, 1);
    const hitFour = $39bce5d6fff62690$exports(type, settings, 1);
    return [
        hitOne[hitOne.length - 1] + hitTwo[hitTwo.length - 1] + hitThree[hitThree.length - 1] + hitFour[hitFour.length - 1]
    ];
}
$5a2eae2a28266b83$exports = $5a2eae2a28266b83$var$dragon_claw;


var $e22f7689f6e5c2af$exports = {};

var $iTwOG = parcelRequire("iTwOG");
var $e22f7689f6e5c2af$require$channel = $iTwOG.channel;
var $b2fd24288eaf369b$exports = {};








var $iTwOG = parcelRequire("iTwOG");
var $b2fd24288eaf369b$require$channel = $iTwOG.channel;
function $b2fd24288eaf369b$var$ezk_initial(type, settings, numberOfHits) {
    const AD_INS = new $cf22d726990bbcce$exports();
    const NPC_INS = new $d879658d4e6779c8$exports();
    const HIT_INS = new $034a883ac1f2b0a0$exports();
    const CRIT_INS = new $8f9ba958af7e7dfc$exports();
    const AVG_INS = new $d5942e9fd7ce77f7$exports();
    const Helper = new $c3c4ca91a8790f30$exports();
    let abil_val = "ezk - initial hit";
    const fixedPercent = $234d086b0a8408ee$exports.abilities[abil_val]["fixed percent"];
    const variablePercent = $234d086b0a8408ee$exports.abilities[abil_val]["variable percent"];
    settings["category"] = $234d086b0a8408ee$exports.abilities[abil_val]["category"];
    const hits = [];
    for(var hitsplat = 0; hitsplat < numberOfHits; hitsplat++){
        const damageObject = Helper.damageObjectCreator(settings);
        //calculates ability damage
        let AD = AD_INS.calcAd(type, settings); //AD_INS.calcAd(type,settings);
        //sets fixed and variable damage
        let fixed = Math.floor(AD * fixedPercent);
        let variable = Math.floor(AD * variablePercent);
        //applies on-hit effects
        let onHit = HIT_INS.calcOnHit(fixed, variable, type, $234d086b0a8408ee$exports.abilities[abil_val]["on hit effects"], settings);
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
$b2fd24288eaf369b$exports = $b2fd24288eaf369b$var$ezk_initial;


var $b1c8656fee37c5df$exports = {};








var $iTwOG = parcelRequire("iTwOG");
var $b1c8656fee37c5df$require$channel = $iTwOG.channel;
function $b1c8656fee37c5df$var$ezk_bleed(type, settings, numberOfHits) {
    const AD_INS = new $cf22d726990bbcce$exports();
    const NPC_INS = new $d879658d4e6779c8$exports();
    const HIT_INS = new $034a883ac1f2b0a0$exports();
    const CRIT_INS = new $8f9ba958af7e7dfc$exports();
    const AVG_INS = new $d5942e9fd7ce77f7$exports();
    const Helper = new $c3c4ca91a8790f30$exports();
    let abil_val = "ezk - bleed hit";
    let fixedPercent = $234d086b0a8408ee$exports.abilities[abil_val]["fixed percent"];
    let variablePercent = $234d086b0a8408ee$exports.abilities[abil_val]["variable percent"];
    settings["category"] = $234d086b0a8408ee$exports.abilities[abil_val]["category"];
    numberOfHits = Math.floor(settings["ezk bleed"]);
    //calculates ability damage
    let AD = AD_INS.calcAd(type, settings); //AD_INS.calcAd(type,settings);
    //sets fixed and variable damage
    let fixed = Math.floor(AD * fixedPercent);
    let variable = Math.floor(AD * variablePercent);
    const hits = [];
    for(var hitsplat = 0; hitsplat < numberOfHits; hitsplat++){
        const damageObject = Helper.damageObjectCreator(settings);
        //applies on-hit effects
        let onHit = HIT_INS.calcOnHit(fixed, variable, type, $234d086b0a8408ee$exports.abilities[abil_val]["on hit effects"], settings);
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
        fixed += Math.floor(fixed * 0.05);
        variable += Math.floor(variable * 0.05);
    }
    //calc total damage
    hits.push(Helper.totalDamageCalc(hits));
    return Helper.flooredList(hits);
}
$b1c8656fee37c5df$exports = $b1c8656fee37c5df$var$ezk_bleed;


function $e22f7689f6e5c2af$var$ezk(type, settings, numberOfHits) {
    let bleedCount = Math.floor(settings["ezk bleed"]);
    const hitOne = $b2fd24288eaf369b$exports(type, settings, 1);
    const hitTwo = $b1c8656fee37c5df$exports(type, settings, bleedCount);
    return [
        hitOne[hitOne.length - 1] + hitTwo[hitTwo.length - 1]
    ];
}
$e22f7689f6e5c2af$exports = $e22f7689f6e5c2af$var$ezk;


var $870110554f146d23$exports = {};








var $iTwOG = parcelRequire("iTwOG");
var $870110554f146d23$require$channel = $iTwOG.channel;
function $870110554f146d23$var$dragon_long(type, settings, numberOfHits) {
    const AD_INS = new $cf22d726990bbcce$exports();
    const NPC_INS = new $d879658d4e6779c8$exports();
    const HIT_INS = new $034a883ac1f2b0a0$exports();
    const CRIT_INS = new $8f9ba958af7e7dfc$exports();
    const AVG_INS = new $d5942e9fd7ce77f7$exports();
    const Helper = new $c3c4ca91a8790f30$exports();
    let abil_val = "dragon longsword";
    const fixedPercent = $234d086b0a8408ee$exports.abilities[abil_val]["fixed percent"];
    const variablePercent = $234d086b0a8408ee$exports.abilities[abil_val]["variable percent"];
    settings["category"] = $234d086b0a8408ee$exports.abilities[abil_val]["category"];
    const hits = [];
    for(var hitsplat = 0; hitsplat < numberOfHits; hitsplat++){
        const damageObject = Helper.damageObjectCreator(settings);
        //calculates ability damage
        let AD = AD_INS.calcAd(type, settings); //AD_INS.calcAd(type,settings);
        //sets fixed and variable damage
        let fixed = Math.floor(AD * fixedPercent);
        let variable = Math.floor(AD * variablePercent);
        //applies on-hit effects
        let onHit = HIT_INS.calcOnHit(fixed, variable, type, $234d086b0a8408ee$exports.abilities[abil_val]["on hit effects"], settings);
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
$870110554f146d23$exports = $870110554f146d23$var$dragon_long;


var $dbfb74b03d908258$exports = {};








var $iTwOG = parcelRequire("iTwOG");
var $dbfb74b03d908258$require$channel = $iTwOG.channel;
function $dbfb74b03d908258$var$granite_maul(type, settings, numberOfHits) {
    const AD_INS = new $cf22d726990bbcce$exports();
    const NPC_INS = new $d879658d4e6779c8$exports();
    const HIT_INS = new $034a883ac1f2b0a0$exports();
    const CRIT_INS = new $8f9ba958af7e7dfc$exports();
    const AVG_INS = new $d5942e9fd7ce77f7$exports();
    const Helper = new $c3c4ca91a8790f30$exports();
    let abil_val = "granite maul";
    const fixedPercent = $234d086b0a8408ee$exports.abilities[abil_val]["fixed percent"];
    const variablePercent = $234d086b0a8408ee$exports.abilities[abil_val]["variable percent"];
    settings["category"] = $234d086b0a8408ee$exports.abilities[abil_val]["category"];
    const hits = [];
    for(var hitsplat = 0; hitsplat < numberOfHits; hitsplat++){
        const damageObject = Helper.damageObjectCreator(settings);
        //calculates ability damage
        let AD = AD_INS.calcAd(type, settings); //AD_INS.calcAd(type,settings);
        //sets fixed and variable damage
        let fixed = Math.floor(AD * fixedPercent);
        let variable = Math.floor(AD * variablePercent);
        //applies on-hit effects
        let onHit = HIT_INS.calcOnHit(fixed, variable, type, $234d086b0a8408ee$exports.abilities[abil_val]["on hit effects"], settings);
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
$dbfb74b03d908258$exports = $dbfb74b03d908258$var$granite_maul;


const $273571dad557bd87$export$ed316e5830568bf6 = {
    "Slice": {
        title: "Slice",
        calc: $cfdcc77e2a2fbeb3$exports,
        icon: "https://i.imgur.com/6WFgj22.png",
        weapons: [
            "Dw",
            "2h",
            "Md",
            "Ms"
        ]
    },
    "Chaos roar": {
        title: "Chaos roar",
        calc: $13ca988def28119e$exports,
        icon: "https://i.imgur.com/y7hSu7B.png",
        weapons: [
            "Dw",
            "2h",
            "Md",
            "Ms"
        ]
    },
    "Punish": {
        title: "Punish",
        calc: $edd3546eb2312840$exports,
        icon: "https://i.imgur.com/fTfILfz.png",
        weapons: [
            "Dw",
            "2h",
            "Md",
            "Ms"
        ]
    },
    "Kick": {
        title: "Kick",
        calc: $cb97f80a6d68792a$exports,
        icon: "https://i.imgur.com/Cya3BGt.png",
        weapons: [
            "2h",
            "Dw",
            "Md",
            "Ms"
        ]
    },
    "Backhand": {
        title: "Backhand",
        calc: $bd652a4a22e81569$exports,
        icon: "https://i.imgur.com/BBg4gTg.png",
        weapons: [
            "Dw",
            "2h",
            "Md",
            "Ms"
        ]
    },
    "Haovc": {
        title: "Havoc",
        calc: $304378cb4f434773$exports,
        icon: "https://i.imgur.com/VSITfMt.png",
        weapons: [
            "Dw",
            "Md"
        ]
    },
    "Smash": {
        title: "Smash",
        calc: $1362d8fcd5458644$exports,
        icon: "https://i.imgur.com/OsPT7VD.png",
        weapons: [
            "2h"
        ]
    },
    "Bladed dive": {
        title: "Bladed dive",
        calc: $b8de942bdc86536f$exports,
        icon: "https://i.imgur.com/8mtMBwp.png",
        weapons: [
            "Dw",
            "2h",
            "Md",
            "Ms"
        ]
    },
    "Greater barge": {
        title: "Greater barge (9t)",
        calc: $367b71b6f5ded8c8$exports,
        icon: "https://i.imgur.com/FqidY8x.png",
        weapons: [
            "Dw",
            "2h",
            "Md",
            "Ms"
        ]
    },
    "Fury": {
        title: "Fury",
        calc: $6ced06e73c7f716a$exports,
        icon: "https://i.imgur.com/CcNJ0n9.png",
        weapons: [
            "Dw",
            "2h",
            "Md",
            "Ms"
        ]
    },
    "Greater fury": {
        title: "Greatery fury",
        calc: $244cee27b6b6ee46$exports,
        icon: "https://i.imgur.com/7wGyyol.png",
        weapons: [
            "Dw",
            "2h",
            "Md",
            "Ms"
        ]
    },
    "Decimate": {
        title: "Decimate",
        calc: $2fe87aa239360452$exports,
        icon: "https://i.imgur.com/Yy6d92a.png",
        weapons: [
            "Dw",
            "Md"
        ]
    },
    "Cleave": {
        title: "Cleave",
        calc: $9d46950e94d2c856$exports,
        icon: "https://i.imgur.com/92RTdk3.png",
        weapons: [
            "2h"
        ]
    },
    "Sever": {
        title: "Sever",
        calc: $fd438600bac090e7$exports,
        icon: "https://i.imgur.com/KnhZj1G.png",
        weapons: [
            "Dw",
            "2h",
            "Md",
            "Ms"
        ]
    },
    "Dismember": {
        title: "Dismember",
        calc: $51d28658e4bcf8aa$exports,
        icon: "https://i.imgur.com/edEuTFj.png",
        weapons: [
            "2h",
            "Dw",
            "Md",
            "Ms"
        ]
    },
    "Stomp": {
        title: "Stomp",
        calc: $d28fa176a0868c4e$exports,
        icon: "https://i.imgur.com/BJ2w8Jr.png",
        weapons: [
            "Dw",
            "2h",
            "Md",
            "Ms"
        ]
    },
    "Flurry": {
        title: "Flurry",
        calc: $8c2f6a17d3d51eb0$exports,
        icon: "https://i.imgur.com/EOdgNnR.png",
        weapons: [
            "Dw",
            "Md"
        ]
    },
    "Greater flurry": {
        title: "Greater flurry",
        calc: $8571a5eef3d5120a$exports,
        icon: "https://i.imgur.com/sGtFHwR.png",
        weapons: [
            "Dw",
            "Md"
        ]
    },
    "Forceful backhand": {
        title: "Forceful backhand",
        calc: $acaf640cafac0d7b$exports,
        icon: "https://i.imgur.com/Xp8aazI.png",
        weapons: [
            "Dw",
            "2h",
            "Md",
            "Ms"
        ]
    },
    "Quake": {
        title: "Quake",
        calc: $07a2acb8f7a82768$exports,
        icon: "https://i.imgur.com/9H3gcD5.png",
        weapons: [
            "2h"
        ]
    },
    "Slaughter": {
        title: "Slaughter",
        calc: $c2f17ada28d0956c$exports,
        icon: "https://i.imgur.com/ungyWll.png",
        weapons: [
            "2h",
            "Dw",
            "Md",
            "Ms"
        ]
    },
    "Destroy": {
        title: "Destroy",
        calc: $6c476bbdbed4a3ee$exports,
        icon: "https://i.imgur.com/FCL0msU.png",
        weapons: [
            "Dw",
            "Md"
        ]
    },
    "Assault": {
        title: "Assault",
        calc: $3d8881e7b9790489$exports,
        icon: "https://i.imgur.com/kbhPFCm.png",
        weapons: [
            "Dw",
            "2h",
            "Md",
            "Ms"
        ]
    },
    "Hurricane": {
        title: "Hurricane",
        calc: $da97b356627a36e4$exports,
        icon: "https://i.imgur.com/zurrG1S.png",
        weapons: [
            "Dw",
            "2h",
            "Md",
            "Ms"
        ]
    },
    "Blood tendrils": {
        title: "Blood tendrils",
        calc: $9fb3d96d82534706$exports,
        icon: "https://i.imgur.com/d1Yojp1.png",
        weapons: [
            "2h",
            "Dw",
            "Md",
            "Ms"
        ]
    },
    "Overpower": {
        title: "Overpower",
        calc: $631f452cbc804779$exports,
        icon: "https://i.imgur.com/99xE1pT.png",
        weapons: [
            "Dw",
            "2h",
            "Md",
            "Ms"
        ]
    },
    "Pulverise": {
        title: "Pulverise",
        calc: $8fb83279d341a9a3$exports,
        icon: "https://i.imgur.com/E6UxTqQ.png",
        weapons: [
            "2h"
        ]
    },
    "Frenzy": {
        title: "Frenzy",
        calc: $85313107f6bb83bb$exports,
        icon: "https://i.imgur.com/zxZmTjz.png",
        weapons: [
            "Dw",
            "Md"
        ]
    },
    "Massacre": {
        title: "Massacre",
        calc: $299c3fec1fef8ca3$exports,
        icon: "https://i.imgur.com/PQ0l2te.png",
        weapons: [
            "Dw",
            "Md"
        ]
    },
    "Ek-ZekKil Spec": {
        title: "Ek-ZekKil Spec",
        calc: $e22f7689f6e5c2af$exports,
        icon: "https://i.imgur.com/IbC2PCj.png",
        weapons: [
            "2h",
            "Dw",
            "Md",
            "Ms"
        ]
    },
    "Dragon Claw": {
        title: "Dragon Claw",
        calc: $5a2eae2a28266b83$exports,
        icon: "https://i.imgur.com/ikIIMnK.png",
        weapons: [
            "Dw",
            "2h",
            "Md",
            "Ms"
        ]
    },
    "Dragon Longsword": {
        title: "Dragon Longsword",
        calc: $870110554f146d23$exports,
        icon: "https://i.imgur.com/CnA1HKN.png",
        weapons: [
            "Dw",
            "2h",
            "Md",
            "Ms"
        ]
    },
    "Granite Maul": {
        title: "Granite Maul",
        calc: $dbfb74b03d908258$exports,
        icon: "https://i.imgur.com/vt0e9lV.png",
        weapons: [
            "Dw",
            "2h",
            "Md",
            "Ms"
        ]
    }
};


$d397ab0c4c0952ec$var$buildDamagesTable((0, $273571dad557bd87$export$ed316e5830568bf6));
$d397ab0c4c0952ec$var$calculateDamages($d397ab0c4c0952ec$var$collectSettings());
const $d397ab0c4c0952ec$var$settings = document.getElementsByClassName("js--setting");
for (let setting of $d397ab0c4c0952ec$var$settings)setting.addEventListener("change", (e)=>{
    $d397ab0c4c0952ec$var$calculateDamages($d397ab0c4c0952ec$var$collectSettings());
});
function $d397ab0c4c0952ec$var$collectSettings() {
    // Have default settings here
    const settings = {
        "minavgmax": "avg",
        "category": "none",
        "ability damage": 0,
        "level": 120,
        "potion": "elder overload",
        "two-handed weapon": "ek-zekkil",
        "main-hand weapon": "dark shard of leng",
        "off-hand weapon": "dark sliver of leng",
        "shield": 1,
        "defender": 1,
        "helmet": "vestments of havoc hood",
        "body": "vestments of havoc robe top",
        "leg": "vestments of havoc robe bottom",
        "gloves": "cinderbane gloves",
        "boots": "vestments of havoc boots",
        "necklace": "essence of finality amulet (or)",
        "ring": "reavers",
        "cape": "igneous kal-ket",
        "pocket slot": "grimoire",
        "reaper crew": true,
        "level 20 armour": true,
        "terrasaur": false,
        "enchantment savagery": true,
        "enchantment agony": true,
        "chaos roar": false,
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
        "inquisitor": false,
        //on-cast effects
        "flow stacks": 0,
        "Zamorak balance of power": 0,
        "Sophanem corrupted": 0,
        "Raksha inner power": 0,
        //on-hit effects
        //pre-shared effects
        "stone of jas": 0,
        //shared
        "revenge stacks": 0,
        "prayer": "affliction",
        "berserk": false,
        "zgs": false,
        "dragon battle axe spec": false,
        "annihilation stacks": 0,
        "gloves of passage": false,
        "ful": false,
        //pvn only
        "slayer helmet": "none",
        "fort forinthry guardhouse": false,
        "Salve amulet": false,
        "ripper demon passive": 0,
        //unknown order
        "berserkers fury": 0,
        "living death": false,
        "exsanguinate stacks": 0,
        //on-crit effects
        "smoke cloud": false,
        "kalgerion demon familiar": false,
        "crit-i-kal": false,
        "conc stacks": 0,
        "fury stacks": 0,
        //on-npc effects
        "vulnerability": false,
        "corrupted wounds": false,
        "slayer sigil": false,
        "metamorphosis": false,
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
        "haunted": false,
        "ezk bleed": 6
    };
    document.querySelectorAll(".js--setting").forEach((node)=>{
        let val = node.value;
        if (node.getAttribute("type") === "number") val = parseFloat(val);
        else if (node.getAttribute("type") === "checkbox") val = node.checked;
        settings[node.getAttribute("data-setting-name")] = val;
    });
    return settings;
}
function $d397ab0c4c0952ec$var$buildDamagesTable(abilities) {
    const table = document.querySelector(".js--damages-table");
    const template = document.querySelector("#damage-table-row");
    for (const [abilityKey, ability] of Object.entries(abilities)){
        const copy = template.content.cloneNode(true);
        copy.querySelector(".js--ability").setAttribute("data-ability-key", abilityKey);
        copy.querySelector(".js--ability-title").textContent = ability.title;
        copy.querySelector(".js--ability-icon").setAttribute("src", ability.icon);
        const weaponSelect = copy.querySelector(".js--ability-weapon");
        weaponSelect.addEventListener("change", (e)=>{
            $d397ab0c4c0952ec$var$calculateDamages($d397ab0c4c0952ec$var$collectSettings());
        });
        ability.weapons.forEach((item)=>{
            weaponSelect.add(new Option(item, item));
        });
        table.appendChild(copy);
    }
}
function $d397ab0c4c0952ec$var$calculateDamages(settings) {
    document.querySelectorAll(".js--damages-table tr").forEach((row)=>{
        const weapon = row.querySelector(".js--ability-weapon").value;
        const key = row.getAttribute("data-ability-key");
        settings["berserk"] = false;
        settings["zgs"] = false;
        damages = (0, $273571dad557bd87$export$ed316e5830568bf6)[key].calc(weapon, settings, 1);
        row.querySelector(".js--ability-regular").textContent = damages[damages.length - 1];
        // Recalculate with sun
        settings["zgs"] = true;
        settings["berserk"] = false;
        damages = (0, $273571dad557bd87$export$ed316e5830568bf6)[key].calc(weapon, settings, 1);
        row.querySelector(".js--ability-zgs").textContent = damages[damages.length - 1];
        // Recalculate with meta
        settings["berserk"] = true;
        settings["zgs"] = false;
        damages = (0, $273571dad557bd87$export$ed316e5830568bf6)[key].calc(weapon, settings, 1);
        row.querySelector(".js--ability-berserk").textContent = damages[damages.length - 1];
    });
}


