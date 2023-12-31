
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

var $81be895847e1958b$exports = {};
var $54f3d4785e603164$exports = {};
var $39fdf858fd784a44$exports = {};
const $39fdf858fd784a44$var$magic_construction = {
    "two-handed weapons": {
        "fractured staff of armadyl": {
            "tier": 95,
            "weapondmg": 0
        },
        "staff of sliske": {
            "tier": 92,
            "weapondmg": 0
        },
        "noxious staff": {
            "tier": 90,
            "weapondmg": 0
        },
        "superior zuriels staff": {
            "tier": 88,
            "weapondmg": 0
        },
        "obliteration": {
            "tier": 87,
            "weapondmg": 0
        },
        "noxious staff": {
            "tier": 90,
            "weapondmg": 0
        },
        "camel staff": {
            "tier": 85,
            "weapondmg": 0
        },
        "staff of darkness": {
            "tier": 85,
            "weapondmg": 0
        },
        "limitless staff": {
            "tier": 82,
            "weapondmg": 0
        },
        "inquisitor staff": {
            "tier": 80,
            "weapondmg": 0
        },
        "chaotic staff": {
            "tier": 80,
            "weapondmg": 0
        }
    },
    "main-hand weapons": {
        "wand of the praesul": {
            "tier": 92,
            "weapondmg": 0
        },
        "seismic wand": {
            "tier": 90,
            "weapondmg": 0
        },
        "elite seasinger kiba": {
            "tier": 88,
            "weapondmg": 0
        },
        "seasinger kiba": {
            "tier": 85,
            "weapondmg": 0
        },
        "wand of the cywir elders": {
            "tier": 80,
            "weapondmg": 0
        }
    },
    "off-hand weapons": {
        "imperium core": {
            "tier": 92,
            "weapondmg": 0
        },
        "singularity": {
            "tier": 90,
            "weapondmg": 0
        },
        "elite seasinger makigai": {
            "tier": 88,
            "weapondmg": 0
        },
        "seasinger makigai": {
            "tier": 85,
            "weapondmg": 0
        },
        "orb of the cywir elders": {
            "tier": 80,
            "weapondmg": 0
        }
    },
    "shields": {
        "merciless kiteshield": {
            "tier": 90,
            "weapondmg": 0
        },
        "spectral shield": {
            "tier": 75,
            "weapondmg": 0
        }
    },
    "defenders": {
        "kalphite rebounder": {
            "tier": 90,
            "weapondmg": 0
        },
        "ancient lantern": {
            "tier": 80,
            "weapondmg": 0
        }
    },
    "helmets": {
        "elite tectonic mask": {
            "bonus": 24
        },
        "tectonic mask": {
            "bonus": 23.2
        },
        "superior zuriels hood": {
            "bonus": 22.4
        },
        "refined anima core helm of seren": {
            "bonus": 21.6
        },
        "anima core helm of seren": {
            "bonus": 20.3
        },
        "virtus mask": {
            "bonus": 20.3
        },
        "sliske helm": {
            "bonus": 0
        }
    },
    "bodies": {
        "elite tectonic robe top": {
            "bonus": 36
        },
        "tectonic robe top": {
            "bonus": 34.8
        },
        "superior zuriels robe top": {
            "bonus": 33.6
        },
        "refined anima core body of seren": {
            "bonus": 32.5
        },
        "anima core body of seren": {
            "bonus": 30.5
        },
        "virtus robe top": {
            "bonus": 30.5
        },
        "sliske body": {
            "bonus": 0
        }
    },
    "legs": {
        "elite tectonic robe bottom": {
            "bonus": 31
        },
        "tectonic robe bottom": {
            "bonus": 29
        },
        "superior zuriels robe bottom": {
            "bonus": 28
        },
        "refined anima core legs of seren": {
            "bonus": 27.1
        },
        "anima core legs of seren": {
            "bonus": 25.4
        },
        "virtus robe legs": {
            "bonus": 25.4
        },
        "sliske legs": {
            "bonus": 0
        }
    },
    "boots": {
        "enhanced blast diffusion boots": {
            "bonus": 14.5
        },
        "hailfire boots": {
            "bonus": 14.5
        },
        "virtus boots": {
            "bonus": 12.7
        }
    },
    "gloves": {
        "enhanced kerapacs wrist wraps": {
            "bonus": 14.5
        },
        "kerapacs wrist wraps": {
            "bonus": 13.5
        },
        "deathtouch": {
            "bonus": 14.5
        },
        "celestial handwraps": {
            "bonus": 13.5
        },
        "virtus gloves": {
            "bonus": 12.7
        },
        "cinderbane": {
            "bonus": 11
        },
        "none gloves": {
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
        }
    },
    "rings": {
        "reavers": {
            "bonus": 27.7
        },
        "channelers": {
            "bonus": 30.4
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
        "igneous kal-mej": {
            "bonus": 43
        },
        "completionist": {
            "bonus": 31.5
        },
        "tokhaar-kal-mej": {
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
        "maniacal": {
            "levels": 0.1,
            "boost": 0.1
        }
    },
    "prayers": {
        "affliction": {
            "boost": 0.12
        },
        "torment": {
            "boost": 0.10
        },
        "augury": {
            "boost": 0.08
        },
        "overcharge": {
            "boost": 0.06
        },
        "super charge": {
            "boost": 0.06
        },
        "charge": {
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
        "extreme magic": {
            "levels": 3,
            "percent": 0.15
        },
        "super magic": {
            "levels": 2,
            "percent": 0.12
        },
        "magic potion": {
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
        "wrack": {
            "fixed percent": 0.8,
            "variable percent": 0.2,
            "on hit effects": true,
            "crit effects": true,
            "category": "basic"
        },
        "wrack bound": {
            "fixed percent": 1.04,
            "variable percent": 0.26,
            "on hit effects": true,
            "crit effects": true,
            "category": "basic"
        },
        "wrack and ruin": {
            "fixed percent": 1.6,
            "variable percent": 0.4,
            "on hit effects": true,
            "crit effects": true,
            "category": "basic"
        },
        "wrack and ruin bound": {
            "fixed percent": 2.2,
            "variable percent": 0.4,
            "on hit effects": true,
            "crit effects": true,
            "category": "basic"
        },
        "magma tempest": {
            "fixed percent": 0.15,
            "variable percent": 0.04,
            "on hit effects": true,
            "crit effects": false,
            "category": "basic"
        },
        "impact": {
            "fixed percent": 0.55,
            "variable percent": 0.1,
            "on hit effects": true,
            "crit effects": true,
            "category": "basic"
        },
        "chain": {
            "fixed percent": 0.55,
            "variable percent": 0.1,
            "on hit effects": true,
            "crit effects": true,
            "category": "basic"
        },
        "sonic wave": {
            "fixed percent": 0.85,
            "variable percent": 0.2,
            "on hit effects": true,
            "crit effects": true,
            "category": "basic"
        },
        "greater sonic wave": {
            "fixed percent": 1.05,
            "variable percent": 0.2,
            "on hit effects": true,
            "crit effects": true,
            "category": "basic"
        },
        "concentrated blast 1": {
            "fixed percent": 0.4,
            "variable percent": 0.1,
            "on hit effects": true,
            "crit effects": true,
            "category": "basic"
        },
        "concentrated blast 2": {
            "fixed percent": 0.4,
            "variable percent": 0.1,
            "on hit effects": true,
            "crit effects": true,
            "category": "basic"
        },
        "concentrated blast 3": {
            "fixed percent": 0.4,
            "variable percent": 0.1,
            "on hit effects": true,
            "crit effects": true,
            "category": "basic"
        },
        "greater concentrated blast 1": {
            "fixed percent": 0.42,
            "variable percent": 0.1,
            "on hit effects": true,
            "crit effects": true,
            "category": "basic"
        },
        "greater concentrated blast 2": {
            "fixed percent": 0.42,
            "variable percent": 0.1,
            "on hit effects": true,
            "crit effects": true,
            "category": "basic"
        },
        "greater concentrated blast 3": {
            "fixed percent": 0.42,
            "variable percent": 0.1,
            "on hit effects": true,
            "crit effects": true,
            "category": "basic"
        },
        "dragon breath": {
            "fixed percent": 1,
            "variable percent": 0.2,
            "on hit effects": true,
            "crit effects": true,
            "category": "basic"
        },
        "combust": {
            "fixed percent": 0.313,
            "variable percent": 0.075,
            "on hit effects": false,
            "crit effects": false,
            "category": "basic"
        },
        "corruption blast": {
            "fixed percent": 0.12,
            "variable percent": 0.04,
            "on hit effects": false,
            "crit effects": false,
            "category": "abil"
        },
        "deep impact": {
            "fixed percent": 1.1,
            "variable percent": 0.2,
            "on hit effects": true,
            "crit effects": true,
            "category": "threshold"
        },
        "detonate": {
            "fixed percent": 1,
            "variable percent": 2.5,
            "on hit effects": true,
            "crit effects": true,
            "category": "threshold"
        },
        "smoke tendrils 1": {
            "fixed percent": 0.55,
            "variable percent": 0.1,
            "on hit effects": true,
            "crit effects": true,
            "category": "threshold"
        },
        "smoke tendrils 2": {
            "fixed percent": 0.65,
            "variable percent": 0.1,
            "on hit effects": true,
            "crit effects": true,
            "category": "threshold"
        },
        "smoke tendrils 3": {
            "fixed percent": 0.75,
            "variable percent": 0.1,
            "on hit effects": true,
            "crit effects": true,
            "category": "threshold"
        },
        "smoke tendrils 4": {
            "fixed percent": 0.85,
            "variable percent": 0.1,
            "on hit effects": true,
            "crit effects": true,
            "category": "threshold"
        },
        "asphyxiate": {
            "fixed percent": 1,
            "variable percent": 0.2,
            "on hit effects": true,
            "crit effects": true,
            "category": "threshold"
        },
        "wild magic": {
            "fixed percent": 1.15,
            "variable percent": 0.3,
            "on hit effects": true,
            "crit effects": true,
            "category": "threshold"
        },
        "tsunami": {
            "fixed percent": 2.25,
            "variable percent": 0.5,
            "on hit effects": true,
            "crit effects": true,
            "category": "ultimate"
        },
        "omnipower": {
            "fixed percent": 2.7,
            "variable percent": 0.6,
            "on hit effects": true,
            "crit effects": true,
            "category": "ultimate"
        },
        "igneous omnipower": {
            "fixed percent": 0.9,
            "variable percent": 0.9,
            "on hit effects": true,
            "crit effects": true,
            "category": "ultimate"
        },
        "sunshine dot": {
            "fixed percent": 0.1,
            "variable percent": 0.1,
            "on hit effects": false,
            "crit effects": false,
            "category": "dot"
        },
        "guthix staff": {
            "fixed percent": 1.4,
            "variable percent": 1.6,
            "on hit effects": true,
            "crit effects": true,
            "category": "special attack"
        },
        "frost surge": {
            "fixed percent": 0.1,
            "variable percent": 0.5,
            "on hit effects": true,
            "crit effects": true,
            "category": "basic"
        },
        "time strike": {
            "fixed percent": 0.8,
            "variable percent": 0.2,
            "on hit effects": true,
            "crit effects": true,
            "category": "basic"
        },
        "armadyl battlestaff": {
            "fixed percent": 0.5,
            "variable percent": 0.1,
            "on hit effects": true,
            "crit effects": true,
            "category": "special attack"
        }
    }
};
$39fdf858fd784a44$exports = $39fdf858fd784a44$var$magic_construction;


class $54f3d4785e603164$var$AbilityDmg {
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
        AD = Math.floor(AD * (1 + settings["flow stacks"] / 100));
        if (settings["inquisitor"] === true && settings["two-handed weapon"] === "inquisitor staff" && type === "2h") {
            if (settings["enchantment affliction"] === true) AD += AD * 0.175;
            else AD += AD * 0.125;
        }
        AD += Math.floor(AD * 0.06 * settings["Zamorak balance of power"]);
        AD += Math.floor(AD * 0.1 * settings["Raksha inner power"]);
        return AD;
    }
    calcBonus(settings) {
        let reaperCrew = 0;
        if (settings["Reaper crew"] === true) reaperCrew = 12;
        return $39fdf858fd784a44$exports.helmets[settings["helmet"]]["bonus"] + $39fdf858fd784a44$exports.bodies[settings["body"]]["bonus"] + $39fdf858fd784a44$exports.legs[settings["leg"]]["bonus"] + $39fdf858fd784a44$exports.boots[settings["boots"]]["bonus"] + $39fdf858fd784a44$exports.gloves[settings["gloves"]]["bonus"] + $39fdf858fd784a44$exports.necklaces[settings["necklace"]]["bonus"] + $39fdf858fd784a44$exports.rings[settings["ring"]]["bonus"] + $39fdf858fd784a44$exports.capes[settings["cape"]]["bonus"] + $39fdf858fd784a44$exports.pockets[settings["pocket slot"]]["bonus"] + reaperCrew;
    }
    calcLevel(settings) {
        let level = settings["level"];
        let percentBoost = $39fdf858fd784a44$exports.potions[settings["potion"]]["percent"] + $39fdf858fd784a44$exports.auras[settings["aura"]]["levels"];
        let flatBoost = $39fdf858fd784a44$exports.potions[settings["potion"]]["levels"];
        return Math.floor(level * (1 + percentBoost)) + flatBoost;
    }
    getTier(type, settings) {
        if (type === "two-hand") return $39fdf858fd784a44$exports["two-handed weapons"][settings["two-handed weapon"]]["tier"];
        else if (type === "main-hand") return $39fdf858fd784a44$exports["main-hand weapons"][settings["main-hand weapon"]]["tier"];
        else if (type === "shield") return $39fdf858fd784a44$exports.shields[settings["shield"]]["tier"];
        else if (type === "defender") return $39fdf858fd784a44$exports.defenders[settings["defender"]]["tier"];
        else if (type === "off-hand") return $39fdf858fd784a44$exports["off-hand weapons"][settings["off-hand weapon"]]["tier"];
    }
}
$54f3d4785e603164$exports = $54f3d4785e603164$var$AbilityDmg;


var $ac31842db484346f$exports = {};

class $ac31842db484346f$var$OnNPC {
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
        if (settings["aura"] === "maniacal" && (settings["sunshine"] === true || settings["metamorphosis"] === true)) dmg;
        else dmg = Math.floor(dmg * (1 + $39fdf858fd784a44$exports.auras[settings["aura"]]["boost"]));
        return dmg;
    }
    calcMeta(dmg, flag) {
        if (flag === true) dmg = Math.floor(dmg * 1.625);
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
    calcNope(dmg, flag) {
        if (flag === true) dmg += Math.floor(dmg * 0.03);
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
    calcOnNpc(dmg, settings, AD, category) {
        //buffs applied in order of operations
        dmg = this.calcVuln(dmg, settings["vulnerability"]);
        dmg = this.calcSlayerPerk(dmg, settings["slayer perk"]);
        dmg = this.calcSlayerSigil(dmg, settings["slayer sigil"]);
        dmg = this.calcAura(dmg, settings);
        //unknown order of buffs
        dmg = this.calcMeta(dmg, settings["metamorphosis"]);
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
$ac31842db484346f$exports = $ac31842db484346f$var$OnNPC;


var $75f5ed54a44423a4$exports = {};

class $75f5ed54a44423a4$var$OnHit {
    calcScriptureOfFul(buff, pocket, flag) {
        console.log(pocket);
        console.log(flag);
        if (pocket === "scripture of ful" && flag === true) {
            buff = Math.floor(buff * 1.2);
            console.log(buff);
        }
        return buff;
    }
    calcStoneOfJas(buff, jas) {
        return Math.floor(buff * (1 + jas / 100));
    }
    calcPrayer(buff, prayer) {
        return Math.floor(buff * (1 + $39fdf858fd784a44$exports.prayers[prayer]["boost"]));
    }
    calcSun(buff, flag) {
        if (flag === true) buff = Math.floor(buff * 1.5);
        return buff;
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
        return Math.floor(buff * (1 + $39fdf858fd784a44$exports.slayerHelmets[slayerHelmet]["boost"]));
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
            buff = this.calcSun(buff, settings["sunshine"]);
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
$75f5ed54a44423a4$exports = $75f5ed54a44423a4$var$OnHit;


var $379f2d8d8fe101e8$exports = {};
class $379f2d8d8fe101e8$var$Crit {
    calcFCritChance(settings, concStacks, channellerStacks) {
        let fcrit = 0.1 + 0.05 * settings["crit-i-kal"] + 0.01 * settings["kalgerion demon familiar"] + 0.04 * channellerStacks + 0.05 * concStacks;
        if (settings["ring"] === "reavers") fcrit += 0.05;
        if (settings["pocket slot"] === "grimoire") fcrit += 0.12;
        if (settings["tuska might"] === true) {
            if (settings["helmet"] === "sliske helm" && settings["body"] === "sliske body" && settings["leg"] === "sliske legs") fcrit += 0.06;
        }
        if (settings["level 20 armour"] === true) fcrit += 0.022 * settings["biting"];
        else if (settings["level 20 armour"] === false) fcrit += 0.02 * settings["biting"];
        return fcrit;
    }
    critDmgBuff(dmg, settings, channellerStacks) {
        let modifier = 0.2;
        modifier += 0.05 * Math.floor(settings["level"] - 10) / 10;
        if (settings["enchantment metaphysics"] === true) modifier += 0.025 * channellerStacks;
        if (settings["smoke cloud"] === true) modifier += 0.15;
        return Math.floor(dmg * (1 + modifier));
    }
    critDamageList(dmgList, settings, channellerStacks) {
        const critDamage = [];
        for (const i of dmgList)critDamage.push(this.critDmgBuff(i, settings, channellerStacks));
        return critDamage;
    }
}
$379f2d8d8fe101e8$exports = $379f2d8d8fe101e8$var$Crit;


var $ea81c9af3bdd4a61$exports = {};
class $ea81c9af3bdd4a61$var$magicHelper {
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
$ea81c9af3bdd4a61$exports = $ea81c9af3bdd4a61$var$magicHelper;


var $d8b93a0f4fdd9c13$exports = {};


class $d8b93a0f4fdd9c13$var$avgDmg {
    averageDamage(abil_val, dmg_list, critDmg_list, settings, concStacks, channellerStacks) {
        const CRIT_INS = new $379f2d8d8fe101e8$exports();
        //calc average damage
        var regTotal = 0;
        for(var i = 0; i < dmg_list.length; i++)regTotal += dmg_list[i];
        var avgReg = regTotal / dmg_list.length;
        var critTotal = 0;
        for(var i = 0; i < critDmg_list.length; i++)critTotal += critDmg_list[i];
        var avgCrit = critTotal / critDmg_list.length;
        let fCritChance = 0;
        if ($39fdf858fd784a44$exports[abil_val]["crit effects"] === true) fCritChance = CRIT_INS.calcFCritChance(settings, concStacks, channellerStacks);
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
    dmgObjectProbabilityCalc(dmgObject, settings, abil_val, concStacks, channellerStacks) {
        const CRIT_INS = new $379f2d8d8fe101e8$exports();
        let critChance = 0;
        if ($39fdf858fd784a44$exports["abilities"][abil_val]["crit effects"] === true) critChance = CRIT_INS.calcFCritChance(settings, concStacks, channellerStacks);
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
    returnDecider(dmgObject, settings, abil_val, concStacks, channellerStacks) {
        dmgObject = this.dmgObjectProbabilityCalc(dmgObject, settings, abil_val, concStacks, channellerStacks);
        if (settings["minavgmax"] === "min") return "min";
        else if (settings["minavgmax"] === "max") return "max";
        else if (settings["minavgmax"] === "avg") return this.averageDamageObject(dmgObject);
    }
}
$d8b93a0f4fdd9c13$exports = $d8b93a0f4fdd9c13$var$avgDmg;


var $f428335242e58899$exports = {};








var $iTwOG = parcelRequire("iTwOG");
var $f428335242e58899$require$channel = $iTwOG.channel;
function $f428335242e58899$var$time_strike(type, settings, numberOfHits) {
    const AD_INS = new $54f3d4785e603164$exports();
    const NPC_INS = new $ac31842db484346f$exports();
    const HIT_INS = new $75f5ed54a44423a4$exports();
    const CRIT_INS = new $379f2d8d8fe101e8$exports();
    const AVG_INS = new $d8b93a0f4fdd9c13$exports();
    const Helper = new $ea81c9af3bdd4a61$exports();
    let abil_val = "time strike";
    const fixedPercent = $39fdf858fd784a44$exports.abilities[abil_val]["fixed percent"];
    const variablePercent = $39fdf858fd784a44$exports.abilities[abil_val]["variable percent"];
    settings["category"] = $39fdf858fd784a44$exports.abilities[abil_val]["category"];
    let concStacks = 0;
    let channellerStacks = 0;
    const hits = [];
    for(var hitsplat = 0; hitsplat < numberOfHits; hitsplat++){
        const damageObject = Helper.damageObjectCreator(settings);
        //calculates ability damage
        let AD = AD_INS.calcAd(type, settings); //AD_INS.calcAd(type,settings);
        //sets fixed and variable damage
        let fixed = Math.floor(AD * fixedPercent);
        let variable = Math.floor(AD * variablePercent);
        //applies on-hit effects
        let onHit = HIT_INS.calcOnHit(fixed, variable, type, $39fdf858fd784a44$exports.abilities[abil_val]["on hit effects"], settings);
        //sets up for further calculations
        damageObject["non-crit"]["list"] = Helper.baseDamageListCreator(onHit[0], onHit[1]);
        //apply crit dmg
        damageObject["crit"]["list"] = CRIT_INS.critDamageList(damageObject["non-crit"]["list"], settings, channellerStacks);
        //apply on-npc effects and hitcaps
        damageObject["non-crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["non-crit"]["list"], settings, AD);
        damageObject["crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["crit"]["list"], settings, AD);
        //apply hit caps
        damageObject["non-crit"]["list"] = Helper.hitCapDmgList(damageObject["non-crit"]["list"], settings);
        damageObject["crit"]["list"] = Helper.hitCapDmgList(damageObject["crit"]["list"], settings);
        //calc min, avg, or max depending on request
        hits.push(AVG_INS.returnDecider(damageObject, settings, abil_val, concStacks, channellerStacks));
    }
    //calc total damage
    hits.push(Helper.totalDamageCalc(hits));
    return Helper.flooredList(hits);
}
$f428335242e58899$exports = $f428335242e58899$var$time_strike;




var $iTwOG = parcelRequire("iTwOG");
var $81be895847e1958b$require$channel = $iTwOG.channel;
function $81be895847e1958b$var$wrack(type, settings, numberOfHits) {
    const AD_INS = new $54f3d4785e603164$exports();
    const NPC_INS = new $ac31842db484346f$exports();
    const HIT_INS = new $75f5ed54a44423a4$exports();
    const CRIT_INS = new $379f2d8d8fe101e8$exports();
    const AVG_INS = new $d8b93a0f4fdd9c13$exports();
    const Helper = new $ea81c9af3bdd4a61$exports();
    let abil_val = "wrack";
    const fixedPercent = $39fdf858fd784a44$exports.abilities[abil_val]["fixed percent"];
    const variablePercent = $39fdf858fd784a44$exports.abilities[abil_val]["variable percent"];
    settings["category"] = $39fdf858fd784a44$exports.abilities[abil_val]["category"];
    let concStacks = 0;
    let channellerStacks = 0;
    if (type === "Dw") concStacks = settings["conc stacks"];
    const hits = [];
    for(var hitsplat = 0; hitsplat < numberOfHits; hitsplat++){
        const damageObject = Helper.damageObjectCreator(settings);
        //calculates ability damage
        let AD = AD_INS.calcAd(type, settings); //AD_INS.calcAd(type,settings);
        //sets fixed and variable damage
        let fixed = Math.floor(AD * fixedPercent);
        let variable = Math.floor(AD * variablePercent);
        //applies on-hit effects
        let onHit = HIT_INS.calcOnHit(fixed, variable, type, $39fdf858fd784a44$exports.abilities[abil_val]["on hit effects"], settings);
        //sets up for further calculations
        damageObject["non-crit"]["list"] = Helper.baseDamageListCreator(onHit[0], onHit[1]);
        //apply crit dmg
        damageObject["crit"]["list"] = CRIT_INS.critDamageList(damageObject["non-crit"]["list"], settings, channellerStacks);
        //apply on-npc effects and hitcaps
        damageObject["non-crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["non-crit"]["list"], settings, AD);
        damageObject["crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["crit"]["list"], settings, AD);
        //apply hit caps
        damageObject["non-crit"]["list"] = Helper.hitCapDmgList(damageObject["non-crit"]["list"], settings);
        damageObject["crit"]["list"] = Helper.hitCapDmgList(damageObject["crit"]["list"], settings);
        //fsoa
        let proc = 0;
        if (settings["fsoa"] === true) {
            let fcrit = CRIT_INS.calcFCritChance(settings, concStacks, channellerStacks);
            proc = $f428335242e58899$exports(type, settings, 1);
            fsoa = proc[0] * fcrit;
            hits.push(fsoa);
        }
        //calc min, avg, or max depending on request
        hits.push(AVG_INS.returnDecider(damageObject, settings, abil_val, concStacks, channellerStacks));
    }
    //calc total damage
    hits.push(Helper.totalDamageCalc(hits));
    return Helper.flooredList(hits);
}
$81be895847e1958b$exports = $81be895847e1958b$var$wrack;


var $9645a7aacb98bed4$exports = {};









var $iTwOG = parcelRequire("iTwOG");
var $9645a7aacb98bed4$require$channel = $iTwOG.channel;
function $9645a7aacb98bed4$var$wrack_bound(type, settings, numberOfHits) {
    const AD_INS = new $54f3d4785e603164$exports();
    const NPC_INS = new $ac31842db484346f$exports();
    const HIT_INS = new $75f5ed54a44423a4$exports();
    const CRIT_INS = new $379f2d8d8fe101e8$exports();
    const AVG_INS = new $d8b93a0f4fdd9c13$exports();
    const Helper = new $ea81c9af3bdd4a61$exports();
    let abil_val = "wrack bound";
    const fixedPercent = $39fdf858fd784a44$exports.abilities[abil_val]["fixed percent"];
    const variablePercent = $39fdf858fd784a44$exports.abilities[abil_val]["variable percent"];
    settings["category"] = $39fdf858fd784a44$exports.abilities[abil_val]["category"];
    let concStacks = 0;
    let channellerStacks = 0;
    if (type === "Dw") concStacks = settings["conc stacks"];
    const hits = [];
    for(var hitsplat = 0; hitsplat < numberOfHits; hitsplat++){
        const damageObject = Helper.damageObjectCreator(settings);
        //calculates ability damage
        let AD = AD_INS.calcAd(type, settings); //AD_INS.calcAd(type,settings);
        //sets fixed and variable damage
        let fixed = Math.floor(AD * fixedPercent);
        let variable = Math.floor(AD * variablePercent);
        //applies on-hit effects
        let onHit = HIT_INS.calcOnHit(fixed, variable, type, $39fdf858fd784a44$exports.abilities[abil_val]["on hit effects"], settings);
        //sets up for further calculations
        damageObject["non-crit"]["list"] = Helper.baseDamageListCreator(onHit[0], onHit[1]);
        //apply crit dmg
        damageObject["crit"]["list"] = CRIT_INS.critDamageList(damageObject["non-crit"]["list"], settings, channellerStacks);
        //apply on-npc effects and hitcaps
        damageObject["non-crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["non-crit"]["list"], settings, AD);
        damageObject["crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["crit"]["list"], settings, AD);
        //apply hit caps
        damageObject["non-crit"]["list"] = Helper.hitCapDmgList(damageObject["non-crit"]["list"], settings);
        damageObject["crit"]["list"] = Helper.hitCapDmgList(damageObject["crit"]["list"], settings);
        //fsoa
        let proc = 0;
        if (settings["fsoa"] === true) {
            let fcrit = CRIT_INS.calcFCritChance(settings, concStacks, channellerStacks);
            proc = $f428335242e58899$exports(type, settings, 1);
            fsoa = proc[0] * fcrit;
            hits.push(fsoa);
        }
        //calc min, avg, or max depending on request
        hits.push(AVG_INS.returnDecider(damageObject, settings, abil_val, concStacks, channellerStacks));
    }
    //calc total damage
    hits.push(Helper.totalDamageCalc(hits));
    return Helper.flooredList(hits);
}
$9645a7aacb98bed4$exports = $9645a7aacb98bed4$var$wrack_bound;


var $9a7c1adaa0ad3df6$exports = {};









var $iTwOG = parcelRequire("iTwOG");
var $9a7c1adaa0ad3df6$require$channel = $iTwOG.channel;
function $9a7c1adaa0ad3df6$var$wrack_and_ruin(type, settings, numberOfHits) {
    const AD_INS = new $54f3d4785e603164$exports();
    const NPC_INS = new $ac31842db484346f$exports();
    const HIT_INS = new $75f5ed54a44423a4$exports();
    const CRIT_INS = new $379f2d8d8fe101e8$exports();
    const AVG_INS = new $d8b93a0f4fdd9c13$exports();
    const Helper = new $ea81c9af3bdd4a61$exports();
    let abil_val = "wrack and ruin";
    const fixedPercent = $39fdf858fd784a44$exports.abilities[abil_val]["fixed percent"];
    const variablePercent = $39fdf858fd784a44$exports.abilities[abil_val]["variable percent"];
    settings["category"] = $39fdf858fd784a44$exports.abilities[abil_val]["category"];
    let concStacks = 0;
    let channellerStacks = 0;
    if (type === "Dw") concStacks = settings["conc stacks"];
    const hits = [];
    for(var hitsplat = 0; hitsplat < numberOfHits; hitsplat++){
        const damageObject = Helper.damageObjectCreator(settings);
        //calculates ability damage
        let AD = AD_INS.calcAd(type, settings); //AD_INS.calcAd(type,settings);
        //sets fixed and variable damage
        let fixed = Math.floor(AD * fixedPercent);
        let variable = Math.floor(AD * variablePercent);
        //applies on-hit effects
        let onHit = HIT_INS.calcOnHit(fixed, variable, type, $39fdf858fd784a44$exports.abilities[abil_val]["on hit effects"], settings);
        //sets up for further calculations
        damageObject["non-crit"]["list"] = Helper.baseDamageListCreator(onHit[0], onHit[1]);
        //apply crit dmg
        damageObject["crit"]["list"] = CRIT_INS.critDamageList(damageObject["non-crit"]["list"], settings, channellerStacks);
        //apply on-npc effects and hitcaps
        damageObject["non-crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["non-crit"]["list"], settings, AD);
        damageObject["crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["crit"]["list"], settings, AD);
        //apply hit caps
        damageObject["non-crit"]["list"] = Helper.hitCapDmgList(damageObject["non-crit"]["list"], settings);
        damageObject["crit"]["list"] = Helper.hitCapDmgList(damageObject["crit"]["list"], settings);
        //fsoa
        let proc = 0;
        if (settings["fsoa"] === true) {
            let fcrit = CRIT_INS.calcFCritChance(settings, concStacks, channellerStacks);
            proc = $f428335242e58899$exports(type, settings, 1);
            fsoa = proc[0] * fcrit;
            hits.push(fsoa);
        }
        //calc min, avg, or max depending on request
        hits.push(AVG_INS.returnDecider(damageObject, settings, abil_val, concStacks, channellerStacks));
    }
    //calc total damage
    hits.push(Helper.totalDamageCalc(hits));
    return Helper.flooredList(hits);
}
$9a7c1adaa0ad3df6$exports = $9a7c1adaa0ad3df6$var$wrack_and_ruin;


var $5190b3b0e767f444$exports = {};









var $iTwOG = parcelRequire("iTwOG");
var $5190b3b0e767f444$require$channel = $iTwOG.channel;
function $5190b3b0e767f444$var$wrack_and_ruin_bound(type, settings, numberOfHits) {
    const AD_INS = new $54f3d4785e603164$exports();
    const NPC_INS = new $ac31842db484346f$exports();
    const HIT_INS = new $75f5ed54a44423a4$exports();
    const CRIT_INS = new $379f2d8d8fe101e8$exports();
    const AVG_INS = new $d8b93a0f4fdd9c13$exports();
    const Helper = new $ea81c9af3bdd4a61$exports();
    let abil_val = "wrack and ruin bound";
    const fixedPercent = $39fdf858fd784a44$exports.abilities[abil_val]["fixed percent"];
    const variablePercent = $39fdf858fd784a44$exports.abilities[abil_val]["variable percent"];
    settings["category"] = $39fdf858fd784a44$exports.abilities[abil_val]["category"];
    let concStacks = 0;
    let channellerStacks = 0;
    if (type === "Dw") concStacks = settings["conc stacks"];
    const hits = [];
    for(var hitsplat = 0; hitsplat < numberOfHits; hitsplat++){
        const damageObject = Helper.damageObjectCreator(settings);
        //calculates ability damage
        let AD = AD_INS.calcAd(type, settings); //AD_INS.calcAd(type,settings);
        //sets fixed and variable damage
        let fixed = Math.floor(AD * fixedPercent);
        let variable = Math.floor(AD * variablePercent);
        //applies on-hit effects
        let onHit = HIT_INS.calcOnHit(fixed, variable, type, $39fdf858fd784a44$exports.abilities[abil_val]["on hit effects"], settings);
        //sets up for further calculations
        damageObject["non-crit"]["list"] = Helper.baseDamageListCreator(onHit[0], onHit[1]);
        //apply crit dmg
        damageObject["crit"]["list"] = CRIT_INS.critDamageList(damageObject["non-crit"]["list"], settings, channellerStacks);
        //apply on-npc effects and hitcaps
        damageObject["non-crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["non-crit"]["list"], settings, AD);
        damageObject["crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["crit"]["list"], settings, AD);
        //apply hit caps
        damageObject["non-crit"]["list"] = Helper.hitCapDmgList(damageObject["non-crit"]["list"], settings);
        damageObject["crit"]["list"] = Helper.hitCapDmgList(damageObject["crit"]["list"], settings);
        //fsoa
        let proc = 0;
        if (settings["fsoa"] === true) {
            let fcrit = CRIT_INS.calcFCritChance(settings, concStacks, channellerStacks);
            proc = $f428335242e58899$exports(type, settings, 1);
            fsoa = proc[0] * fcrit;
            hits.push(fsoa);
        }
        //calc min, avg, or max depending on request
        hits.push(AVG_INS.returnDecider(damageObject, settings, abil_val, concStacks, channellerStacks));
    }
    //calc total damage
    hits.push(Helper.totalDamageCalc(hits));
    return Helper.flooredList(hits);
}
$5190b3b0e767f444$exports = $5190b3b0e767f444$var$wrack_and_ruin_bound;


var $15764cef746bdac7$exports = {};








var $iTwOG = parcelRequire("iTwOG");
var $15764cef746bdac7$require$channel = $iTwOG.channel;
function $15764cef746bdac7$var$magma_tempest(type, settings, numberOfHits) {
    const AD_INS = new $54f3d4785e603164$exports();
    const NPC_INS = new $ac31842db484346f$exports();
    const HIT_INS = new $75f5ed54a44423a4$exports();
    const CRIT_INS = new $379f2d8d8fe101e8$exports();
    const AVG_INS = new $d8b93a0f4fdd9c13$exports();
    const Helper = new $ea81c9af3bdd4a61$exports();
    let abil_val = "magma tempest";
    const fixedPercent = $39fdf858fd784a44$exports.abilities[abil_val]["fixed percent"];
    const variablePercent = $39fdf858fd784a44$exports.abilities[abil_val]["variable percent"];
    settings["category"] = $39fdf858fd784a44$exports.abilities[abil_val]["category"];
    let concStacks = 0;
    let channellerStacks = 0;
    if (type === "Dw") concStacks = settings["conc stacks"];
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
        let onHit = HIT_INS.calcOnHit(fixed, variable, type, $39fdf858fd784a44$exports.abilities[abil_val]["on hit effects"], settings);
        //sets up for further calculations
        damageObject["non-crit"]["list"] = Helper.baseDamageListCreator(onHit[0], onHit[1]);
        //apply crit dmg
        damageObject["crit"]["list"] = CRIT_INS.critDamageList(damageObject["non-crit"]["list"], settings, channellerStacks);
        //apply on-npc effects and hitcaps
        damageObject["non-crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["non-crit"]["list"], settings, AD);
        damageObject["crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["crit"]["list"], settings, AD);
        //apply hit caps
        damageObject["non-crit"]["list"] = Helper.hitCapDmgList(damageObject["non-crit"]["list"], settings);
        damageObject["crit"]["list"] = Helper.hitCapDmgList(damageObject["crit"]["list"], settings);
        //calc min, avg, or max depending on request
        hits.push(AVG_INS.returnDecider(damageObject, settings, abil_val, concStacks, channellerStacks));
    }
    //calc total damage
    hits.push(Helper.totalDamageCalc(hits));
    return Helper.flooredList(hits);
}
$15764cef746bdac7$exports = $15764cef746bdac7$var$magma_tempest;


var $5df52224c870c752$exports = {};









var $iTwOG = parcelRequire("iTwOG");
var $5df52224c870c752$require$channel = $iTwOG.channel;
function $5df52224c870c752$var$impact(type, settings, numberOfHits) {
    const AD_INS = new $54f3d4785e603164$exports();
    const NPC_INS = new $ac31842db484346f$exports();
    const HIT_INS = new $75f5ed54a44423a4$exports();
    const CRIT_INS = new $379f2d8d8fe101e8$exports();
    const AVG_INS = new $d8b93a0f4fdd9c13$exports();
    const Helper = new $ea81c9af3bdd4a61$exports();
    let abil_val = "impact";
    let fixedPercent = $39fdf858fd784a44$exports.abilities[abil_val]["fixed percent"];
    let variablePercent = $39fdf858fd784a44$exports.abilities[abil_val]["variable percent"];
    settings["category"] = $39fdf858fd784a44$exports.abilities[abil_val]["category"];
    let concStacks = 0;
    let channellerStacks = 0;
    if (type === "Dw") concStacks = settings["conc stacks"];
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
        let onHit = HIT_INS.calcOnHit(fixed, variable, type, $39fdf858fd784a44$exports.abilities[abil_val]["on hit effects"], settings);
        //sets up for further calculations
        damageObject["non-crit"]["list"] = Helper.baseDamageListCreator(onHit[0], onHit[1]);
        //apply crit dmg
        damageObject["crit"]["list"] = CRIT_INS.critDamageList(damageObject["non-crit"]["list"], settings, channellerStacks);
        //apply on-npc effects and hitcaps
        damageObject["non-crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["non-crit"]["list"], settings, AD);
        damageObject["crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["crit"]["list"], settings, AD);
        //apply hit caps
        damageObject["non-crit"]["list"] = Helper.hitCapDmgList(damageObject["non-crit"]["list"], settings);
        damageObject["crit"]["list"] = Helper.hitCapDmgList(damageObject["crit"]["list"], settings);
        //fsoa
        let proc = 0;
        if (settings["fsoa"] === true) {
            let fcrit = CRIT_INS.calcFCritChance(settings, concStacks, channellerStacks);
            proc = $f428335242e58899$exports(type, settings, 1);
            fsoa = proc[0] * fcrit;
            hits.push(fsoa);
        }
        //calc min, avg, or max depending on request
        hits.push(AVG_INS.returnDecider(damageObject, settings, abil_val, concStacks, channellerStacks));
    }
    //calc total damage
    hits.push(Helper.totalDamageCalc(hits));
    return Helper.flooredList(hits);
}
$5df52224c870c752$exports = $5df52224c870c752$var$impact;


var $2218f5e2f7ee2e2c$exports = {};









var $iTwOG = parcelRequire("iTwOG");
var $2218f5e2f7ee2e2c$require$channel = $iTwOG.channel;
function $2218f5e2f7ee2e2c$var$chain(type, settings, numberOfHits) {
    const AD_INS = new $54f3d4785e603164$exports();
    const NPC_INS = new $ac31842db484346f$exports();
    const HIT_INS = new $75f5ed54a44423a4$exports();
    const CRIT_INS = new $379f2d8d8fe101e8$exports();
    const AVG_INS = new $d8b93a0f4fdd9c13$exports();
    const Helper = new $ea81c9af3bdd4a61$exports();
    let abil_val = "chain";
    const fixedPercent = $39fdf858fd784a44$exports.abilities[abil_val]["fixed percent"];
    const variablePercent = $39fdf858fd784a44$exports.abilities[abil_val]["variable percent"];
    settings["category"] = $39fdf858fd784a44$exports.abilities[abil_val]["category"];
    let concStacks = 0;
    let channellerStacks = 0;
    if (type === "Dw") concStacks = settings["conc stacks"];
    const hits = [];
    for(var hitsplat = 0; hitsplat < numberOfHits; hitsplat++){
        const damageObject = Helper.damageObjectCreator(settings);
        //calculates ability damage
        let AD = AD_INS.calcAd(type, settings); //AD_INS.calcAd(type,settings);
        //sets fixed and variable damage
        let fixed = Math.floor(AD * fixedPercent);
        let variable = Math.floor(AD * variablePercent);
        //applies on-hit effects
        let onHit = HIT_INS.calcOnHit(fixed, variable, type, $39fdf858fd784a44$exports.abilities[abil_val]["on hit effects"], settings);
        //sets up for further calculations
        damageObject["non-crit"]["list"] = Helper.baseDamageListCreator(onHit[0], onHit[1]);
        //apply crit dmg
        damageObject["crit"]["list"] = CRIT_INS.critDamageList(damageObject["non-crit"]["list"], settings, channellerStacks);
        //apply on-npc effects and hitcaps
        damageObject["non-crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["non-crit"]["list"], settings, AD);
        damageObject["crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["crit"]["list"], settings, AD);
        //apply hit caps
        damageObject["non-crit"]["list"] = Helper.hitCapDmgList(damageObject["non-crit"]["list"], settings);
        damageObject["crit"]["list"] = Helper.hitCapDmgList(damageObject["crit"]["list"], settings);
        //fsoa
        let proc = 0;
        if (settings["fsoa"] === true) {
            let fcrit = CRIT_INS.calcFCritChance(settings, concStacks, channellerStacks);
            proc = $f428335242e58899$exports(type, settings, 1);
            fsoa = proc[0] * fcrit;
            hits.push(fsoa);
        }
        //calc min, avg, or max depending on request
        hits.push(AVG_INS.returnDecider(damageObject, settings, abil_val, concStacks, channellerStacks));
    }
    //calc total damage
    hits.push(Helper.totalDamageCalc(hits));
    return Helper.flooredList(hits);
}
$2218f5e2f7ee2e2c$exports = $2218f5e2f7ee2e2c$var$chain;


var $38c85cc3dc517581$exports = {};









var $iTwOG = parcelRequire("iTwOG");
var $38c85cc3dc517581$require$channel = $iTwOG.channel;
function $38c85cc3dc517581$var$sonic_wave(type, settings, numberOfHits) {
    const AD_INS = new $54f3d4785e603164$exports();
    const NPC_INS = new $ac31842db484346f$exports();
    const HIT_INS = new $75f5ed54a44423a4$exports();
    const CRIT_INS = new $379f2d8d8fe101e8$exports();
    const AVG_INS = new $d8b93a0f4fdd9c13$exports();
    const Helper = new $ea81c9af3bdd4a61$exports();
    let abil_val = "sonic wave";
    const fixedPercent = $39fdf858fd784a44$exports.abilities[abil_val]["fixed percent"];
    const variablePercent = $39fdf858fd784a44$exports.abilities[abil_val]["variable percent"];
    settings["category"] = $39fdf858fd784a44$exports.abilities[abil_val]["category"];
    let concStacks = 0;
    let channellerStacks = 0;
    const hits = [];
    for(var hitsplat = 0; hitsplat < numberOfHits; hitsplat++){
        const damageObject = Helper.damageObjectCreator(settings);
        //calculates ability damage
        let AD = AD_INS.calcAd(type, settings); //AD_INS.calcAd(type,settings);
        //sets fixed and variable damage
        let fixed = Math.floor(AD * fixedPercent);
        let variable = Math.floor(AD * variablePercent);
        //applies on-hit effects
        let onHit = HIT_INS.calcOnHit(fixed, variable, type, $39fdf858fd784a44$exports.abilities[abil_val]["on hit effects"], settings);
        //sets up for further calculations
        damageObject["non-crit"]["list"] = Helper.baseDamageListCreator(onHit[0], onHit[1]);
        //apply crit dmg
        damageObject["crit"]["list"] = CRIT_INS.critDamageList(damageObject["non-crit"]["list"], settings, channellerStacks);
        //apply on-npc effects and hitcaps
        damageObject["non-crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["non-crit"]["list"], settings, AD);
        damageObject["crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["crit"]["list"], settings, AD);
        //apply hit caps
        damageObject["non-crit"]["list"] = Helper.hitCapDmgList(damageObject["non-crit"]["list"], settings);
        damageObject["crit"]["list"] = Helper.hitCapDmgList(damageObject["crit"]["list"], settings);
        //fsoa
        let proc = 0;
        if (settings["fsoa"] === true) {
            let fcrit = CRIT_INS.calcFCritChance(settings, concStacks, channellerStacks);
            proc = $f428335242e58899$exports(type, settings, 1);
            fsoa = proc[0] * fcrit;
            hits.push(fsoa);
        }
        //calc min, avg, or max depending on request
        hits.push(AVG_INS.returnDecider(damageObject, settings, abil_val, concStacks, channellerStacks));
    }
    //calc total damage
    hits.push(Helper.totalDamageCalc(hits));
    return Helper.flooredList(hits);
}
$38c85cc3dc517581$exports = $38c85cc3dc517581$var$sonic_wave;


var $9486c6cab45a46c5$exports = {};









var $iTwOG = parcelRequire("iTwOG");
var $9486c6cab45a46c5$require$channel = $iTwOG.channel;
function $9486c6cab45a46c5$var$greater_sonic_wave(type, settings, numberOfHits) {
    const AD_INS = new $54f3d4785e603164$exports();
    const NPC_INS = new $ac31842db484346f$exports();
    const HIT_INS = new $75f5ed54a44423a4$exports();
    const CRIT_INS = new $379f2d8d8fe101e8$exports();
    const AVG_INS = new $d8b93a0f4fdd9c13$exports();
    const Helper = new $ea81c9af3bdd4a61$exports();
    let abil_val = "greater sonic wave";
    const fixedPercent = $39fdf858fd784a44$exports.abilities[abil_val]["fixed percent"];
    const variablePercent = $39fdf858fd784a44$exports.abilities[abil_val]["variable percent"];
    settings["category"] = $39fdf858fd784a44$exports.abilities[abil_val]["category"];
    let concStacks = 0;
    let channellerStacks = 0;
    const hits = [];
    for(var hitsplat = 0; hitsplat < numberOfHits; hitsplat++){
        const damageObject = Helper.damageObjectCreator(settings);
        //calculates ability damage
        let AD = AD_INS.calcAd(type, settings); //AD_INS.calcAd(type,settings);
        //sets fixed and variable damage
        let fixed = Math.floor(AD * fixedPercent);
        let variable = Math.floor(AD * variablePercent);
        //applies on-hit effects
        let onHit = HIT_INS.calcOnHit(fixed, variable, type, $39fdf858fd784a44$exports.abilities[abil_val]["on hit effects"], settings);
        //sets up for further calculations
        damageObject["non-crit"]["list"] = Helper.baseDamageListCreator(onHit[0], onHit[1]);
        //apply crit dmg
        damageObject["crit"]["list"] = CRIT_INS.critDamageList(damageObject["non-crit"]["list"], settings, channellerStacks);
        //apply on-npc effects and hitcaps
        damageObject["non-crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["non-crit"]["list"], settings, AD);
        damageObject["crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["crit"]["list"], settings, AD);
        //apply hit caps
        damageObject["non-crit"]["list"] = Helper.hitCapDmgList(damageObject["non-crit"]["list"], settings);
        damageObject["crit"]["list"] = Helper.hitCapDmgList(damageObject["crit"]["list"], settings);
        //fsoa
        let proc = 0;
        if (settings["fsoa"] === true) {
            let fcrit = CRIT_INS.calcFCritChance(settings, concStacks, channellerStacks);
            proc = $f428335242e58899$exports(type, settings, 1);
            fsoa = proc[0] * fcrit;
            hits.push(fsoa);
        }
        //calc min, avg, or max depending on request
        hits.push(AVG_INS.returnDecider(damageObject, settings, abil_val, concStacks, channellerStacks));
    }
    //calc total damage
    hits.push(Helper.totalDamageCalc(hits));
    return Helper.flooredList(hits);
}
$9486c6cab45a46c5$exports = $9486c6cab45a46c5$var$greater_sonic_wave;


var $9cff9f9a572f65b8$exports = {};









var $iTwOG = parcelRequire("iTwOG");
var $9cff9f9a572f65b8$require$channel = $iTwOG.channel;
function $9cff9f9a572f65b8$var$concentrated_blast(type, settings, numberOfHits) {
    const AD_INS = new $54f3d4785e603164$exports();
    const NPC_INS = new $ac31842db484346f$exports();
    const HIT_INS = new $75f5ed54a44423a4$exports();
    const CRIT_INS = new $379f2d8d8fe101e8$exports();
    const AVG_INS = new $d8b93a0f4fdd9c13$exports();
    const Helper = new $ea81c9af3bdd4a61$exports();
    let abil_val = "concentrated blast 1";
    const fixedPercent = $39fdf858fd784a44$exports.abilities[abil_val]["fixed percent"];
    const variablePercent = $39fdf858fd784a44$exports.abilities[abil_val]["variable percent"];
    settings["category"] = $39fdf858fd784a44$exports.abilities[abil_val]["category"];
    let concStacks = 0;
    let channellerStacks = 0;
    if (settings["ring"] === "channelers") channellerStacks += 1;
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
        let onHit = HIT_INS.calcOnHit(fixed, variable, type, $39fdf858fd784a44$exports.abilities[abil_val]["on hit effects"], settings);
        //sets up for further calculations
        damageObject["non-crit"]["list"] = Helper.baseDamageListCreator(onHit[0], onHit[1]);
        //apply crit dmg
        damageObject["crit"]["list"] = CRIT_INS.critDamageList(damageObject["non-crit"]["list"], settings, channellerStacks);
        //apply on-npc effects and hitcaps
        damageObject["non-crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["non-crit"]["list"], settings, AD);
        damageObject["crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["crit"]["list"], settings, AD);
        //apply hit caps
        damageObject["non-crit"]["list"] = Helper.hitCapDmgList(damageObject["non-crit"]["list"], settings);
        damageObject["crit"]["list"] = Helper.hitCapDmgList(damageObject["crit"]["list"], settings);
        //fsoa
        let proc = 0;
        if (settings["fsoa"] === true) {
            let fcrit = CRIT_INS.calcFCritChance(settings, concStacks, channellerStacks);
            proc = $f428335242e58899$exports(type, settings, 1);
            fsoa = proc[0] * fcrit;
            hits.push(fsoa);
        }
        //calc min, avg, or max depending on request
        hits.push(AVG_INS.returnDecider(damageObject, settings, abil_val, concStacks, channellerStacks));
        concStacks += 1;
        if (settings["ring"] === "channelers") channellerStacks += 1;
    }
    //calc total damage
    hits.push(Helper.totalDamageCalc(hits));
    return Helper.flooredList(hits);
}
$9cff9f9a572f65b8$exports = $9cff9f9a572f65b8$var$concentrated_blast;


var $a22bbe50ee135838$exports = {};









var $iTwOG = parcelRequire("iTwOG");
var $a22bbe50ee135838$require$channel = $iTwOG.channel;
function $a22bbe50ee135838$var$greater_concentrated_blast(type, settings, numberOfHits) {
    const AD_INS = new $54f3d4785e603164$exports();
    const NPC_INS = new $ac31842db484346f$exports();
    const HIT_INS = new $75f5ed54a44423a4$exports();
    const CRIT_INS = new $379f2d8d8fe101e8$exports();
    const AVG_INS = new $d8b93a0f4fdd9c13$exports();
    const Helper = new $ea81c9af3bdd4a61$exports();
    let abil_val = "greater concentrated blast 1";
    const fixedPercent = $39fdf858fd784a44$exports.abilities[abil_val]["fixed percent"];
    const variablePercent = $39fdf858fd784a44$exports.abilities[abil_val]["variable percent"];
    settings["category"] = $39fdf858fd784a44$exports.abilities[abil_val]["category"];
    let concStacks = 0;
    let channellerStacks = 0;
    if (settings["ring"] === "channelers") channellerStacks += 1;
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
        let onHit = HIT_INS.calcOnHit(fixed, variable, type, $39fdf858fd784a44$exports.abilities[abil_val]["on hit effects"], settings);
        //sets up for further calculations
        damageObject["non-crit"]["list"] = Helper.baseDamageListCreator(onHit[0], onHit[1]);
        //apply crit dmg
        damageObject["crit"]["list"] = CRIT_INS.critDamageList(damageObject["non-crit"]["list"], settings, channellerStacks);
        //apply on-npc effects and hitcaps
        damageObject["non-crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["non-crit"]["list"], settings, AD);
        damageObject["crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["crit"]["list"], settings, AD);
        //apply hit caps
        damageObject["non-crit"]["list"] = Helper.hitCapDmgList(damageObject["non-crit"]["list"], settings);
        damageObject["crit"]["list"] = Helper.hitCapDmgList(damageObject["crit"]["list"], settings);
        //fsoa
        let proc = 0;
        if (settings["fsoa"] === true) {
            let fcrit = CRIT_INS.calcFCritChance(settings, concStacks, channellerStacks);
            proc = $f428335242e58899$exports(type, settings, 1);
            fsoa = proc[0] * fcrit;
            hits.push(fsoa);
        }
        //calc min, avg, or max depending on request
        hits.push(AVG_INS.returnDecider(damageObject, settings, abil_val, concStacks, channellerStacks));
        concStacks += 1;
        if (settings["ring"] === "channelers") channellerStacks += 1;
    }
    //calc total damage
    hits.push(Helper.totalDamageCalc(hits));
    return Helper.flooredList(hits);
}
$a22bbe50ee135838$exports = $a22bbe50ee135838$var$greater_concentrated_blast;


var $745b24c1be9319c3$exports = {};









var $iTwOG = parcelRequire("iTwOG");
var $745b24c1be9319c3$require$channel = $iTwOG.channel;
function $745b24c1be9319c3$var$dragon_breath(type, settings, numberOfHits) {
    const AD_INS = new $54f3d4785e603164$exports();
    const NPC_INS = new $ac31842db484346f$exports();
    const HIT_INS = new $75f5ed54a44423a4$exports();
    const CRIT_INS = new $379f2d8d8fe101e8$exports();
    const AVG_INS = new $d8b93a0f4fdd9c13$exports();
    const Helper = new $ea81c9af3bdd4a61$exports();
    let abil_val = "dragon breath";
    const fixedPercent = $39fdf858fd784a44$exports.abilities[abil_val]["fixed percent"];
    const variablePercent = $39fdf858fd784a44$exports.abilities[abil_val]["variable percent"];
    settings["category"] = $39fdf858fd784a44$exports.abilities[abil_val]["category"];
    let concStacks = 0;
    let channellerStacks = 0;
    if (type === "Dw") concStacks = settings["conc stacks"];
    const hits = [];
    for(var hitsplat = 0; hitsplat < numberOfHits; hitsplat++){
        const damageObject = Helper.damageObjectCreator(settings);
        //calculates ability damage
        let AD = AD_INS.calcAd(type, settings); //AD_INS.calcAd(type,settings);
        //sets fixed and variable damage
        let fixed = Math.floor(AD * fixedPercent);
        let variable = Math.floor(AD * variablePercent);
        //applies on-hit effects
        let onHit = HIT_INS.calcOnHit(fixed, variable, type, $39fdf858fd784a44$exports.abilities[abil_val]["on hit effects"], settings);
        //sets up for further calculations
        damageObject["non-crit"]["list"] = Helper.baseDamageListCreator(onHit[0], onHit[1]);
        //apply crit dmg
        damageObject["crit"]["list"] = CRIT_INS.critDamageList(damageObject["non-crit"]["list"], settings, channellerStacks);
        //apply on-npc effects and hitcaps
        damageObject["non-crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["non-crit"]["list"], settings, AD);
        damageObject["crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["crit"]["list"], settings, AD);
        //apply hit caps
        damageObject["non-crit"]["list"] = Helper.hitCapDmgList(damageObject["non-crit"]["list"], settings);
        damageObject["crit"]["list"] = Helper.hitCapDmgList(damageObject["crit"]["list"], settings);
        //fsoa
        let proc = 0;
        if (settings["fsoa"] === true) {
            let fcrit = CRIT_INS.calcFCritChance(settings, concStacks, channellerStacks);
            proc = $f428335242e58899$exports(type, settings, 1);
            fsoa = proc[0] * fcrit;
            hits.push(fsoa);
        }
        //calc min, avg, or max depending on request
        hits.push(AVG_INS.returnDecider(damageObject, settings, abil_val, concStacks, channellerStacks));
    }
    //calc total damage
    hits.push(Helper.totalDamageCalc(hits));
    return Helper.flooredList(hits);
}
$745b24c1be9319c3$exports = $745b24c1be9319c3$var$dragon_breath;


var $ad3bf80bfe2ebd28$exports = {};








var $iTwOG = parcelRequire("iTwOG");
var $ad3bf80bfe2ebd28$require$channel = $iTwOG.channel;
function $ad3bf80bfe2ebd28$var$combust(type, settings, numberOfHits) {
    const AD_INS = new $54f3d4785e603164$exports();
    const NPC_INS = new $ac31842db484346f$exports();
    const HIT_INS = new $75f5ed54a44423a4$exports();
    const CRIT_INS = new $379f2d8d8fe101e8$exports();
    const AVG_INS = new $d8b93a0f4fdd9c13$exports();
    const Helper = new $ea81c9af3bdd4a61$exports();
    let abil_val = "combust";
    const fixedPercent = $39fdf858fd784a44$exports.abilities[abil_val]["fixed percent"];
    const variablePercent = $39fdf858fd784a44$exports.abilities[abil_val]["variable percent"];
    settings["category"] = $39fdf858fd784a44$exports.abilities[abil_val]["category"];
    let concStacks = 0;
    let channellerStacks = 0;
    if (type === "Dw") concStacks = settings["conc stacks"];
    const hits = [];
    numberOfHits = 6;
    for(var hitsplat = 0; hitsplat < numberOfHits; hitsplat++){
        const damageObject = Helper.damageObjectCreator(settings);
        //calculates ability damage
        let AD = AD_INS.calcAd(type, settings); //AD_INS.calcAd(type,settings);
        //sets fixed and variable damage
        let fixed = Math.floor(AD * fixedPercent);
        let variable = Math.floor(AD * variablePercent);
        //applies on-hit effects
        let onHit = HIT_INS.calcOnHit(fixed, variable, type, $39fdf858fd784a44$exports.abilities[abil_val]["on hit effects"], settings);
        //sets up for further calculations
        damageObject["non-crit"]["list"] = Helper.baseDamageListCreator(onHit[0], onHit[1]);
        //apply crit dmg
        damageObject["crit"]["list"] = CRIT_INS.critDamageList(damageObject["non-crit"]["list"], settings, channellerStacks);
        //apply on-npc effects and hitcaps
        damageObject["non-crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["non-crit"]["list"], settings, AD);
        damageObject["crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["crit"]["list"], settings, AD);
        //apply hit caps
        damageObject["non-crit"]["list"] = Helper.hitCapDmgList(damageObject["non-crit"]["list"], settings);
        damageObject["crit"]["list"] = Helper.hitCapDmgList(damageObject["crit"]["list"], settings);
        //calc min, avg, or max depending on request
        hits.push(AVG_INS.returnDecider(damageObject, settings, abil_val, concStacks, channellerStacks));
    }
    //calc total damage
    hits.push(Helper.totalDamageCalc(hits));
    return Helper.flooredList(hits);
}
$ad3bf80bfe2ebd28$exports = $ad3bf80bfe2ebd28$var$combust;


var $c69eb8259fb2b09d$exports = {};








var $iTwOG = parcelRequire("iTwOG");
var $c69eb8259fb2b09d$require$channel = $iTwOG.channel;
function $c69eb8259fb2b09d$var$corruption_blast(type, settings, numberOfHits) {
    const AD_INS = new $54f3d4785e603164$exports();
    const NPC_INS = new $ac31842db484346f$exports();
    const HIT_INS = new $75f5ed54a44423a4$exports();
    const CRIT_INS = new $379f2d8d8fe101e8$exports();
    const AVG_INS = new $d8b93a0f4fdd9c13$exports();
    const Helper = new $ea81c9af3bdd4a61$exports();
    let abil_val = "corruption blast";
    const fixedPercent = $39fdf858fd784a44$exports.abilities[abil_val]["fixed percent"];
    const variablePercent = $39fdf858fd784a44$exports.abilities[abil_val]["variable percent"];
    settings["category"] = $39fdf858fd784a44$exports.abilities[abil_val]["category"];
    let concStacks = 0;
    let channellerStacks = 0;
    if (type === "Dw") concStacks = settings["conc stacks"];
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
        let onHit = HIT_INS.calcOnHit(fixed, variable, type, $39fdf858fd784a44$exports.abilities[abil_val]["on hit effects"], settings);
        //sets up for further calculations
        damageObject["non-crit"]["list"] = Helper.baseDamageListCreator(onHit[0], onHit[1]);
        //apply crit dmg
        damageObject["crit"]["list"] = CRIT_INS.critDamageList(damageObject["non-crit"]["list"], settings, channellerStacks);
        //apply on-npc effects and hitcaps
        damageObject["non-crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["non-crit"]["list"], settings, AD);
        damageObject["crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["crit"]["list"], settings, AD);
        //apply hit caps
        damageObject["non-crit"]["list"] = Helper.hitCapDmgList(damageObject["non-crit"]["list"], settings);
        damageObject["crit"]["list"] = Helper.hitCapDmgList(damageObject["crit"]["list"], settings);
        //calc min, avg, or max depending on request
        hits.push(AVG_INS.returnDecider(damageObject, settings, abil_val, concStacks, channellerStacks));
        hitCount += 1;
    }
    //calc total damage
    hits.push(Helper.totalDamageCalc(hits));
    return Helper.flooredList(hits);
}
$c69eb8259fb2b09d$exports = $c69eb8259fb2b09d$var$corruption_blast;


var $c43b08946b923498$exports = {};









var $iTwOG = parcelRequire("iTwOG");
var $c43b08946b923498$require$channel = $iTwOG.channel;
function $c43b08946b923498$var$deep_impact(type, settings, numberOfHits) {
    const AD_INS = new $54f3d4785e603164$exports();
    const NPC_INS = new $ac31842db484346f$exports();
    const HIT_INS = new $75f5ed54a44423a4$exports();
    const CRIT_INS = new $379f2d8d8fe101e8$exports();
    const AVG_INS = new $d8b93a0f4fdd9c13$exports();
    const Helper = new $ea81c9af3bdd4a61$exports();
    let abil_val = "deep impact";
    const fixedPercent = $39fdf858fd784a44$exports.abilities[abil_val]["fixed percent"];
    const variablePercent = $39fdf858fd784a44$exports.abilities[abil_val]["variable percent"];
    settings["category"] = $39fdf858fd784a44$exports.abilities[abil_val]["category"];
    let concStacks = 0;
    let channellerStacks = 0;
    if (type === "Dw") concStacks = settings["conc stacks"];
    const hits = [];
    for(var hitsplat = 0; hitsplat < numberOfHits; hitsplat++){
        const damageObject = Helper.damageObjectCreator(settings);
        //calculates ability damage
        let AD = AD_INS.calcAd(type, settings); //AD_INS.calcAd(type,settings);
        //sets fixed and variable damage
        let fixed = Math.floor(AD * fixedPercent);
        let variable = Math.floor(AD * variablePercent);
        //applies on-hit effects
        let onHit = HIT_INS.calcOnHit(fixed, variable, type, $39fdf858fd784a44$exports.abilities[abil_val]["on hit effects"], settings);
        //sets up for further calculations
        damageObject["non-crit"]["list"] = Helper.baseDamageListCreator(onHit[0], onHit[1]);
        //apply crit dmg
        damageObject["crit"]["list"] = CRIT_INS.critDamageList(damageObject["non-crit"]["list"], settings, channellerStacks);
        //apply on-npc effects and hitcaps
        damageObject["non-crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["non-crit"]["list"], settings, AD);
        damageObject["crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["crit"]["list"], settings, AD);
        //apply hit caps
        damageObject["non-crit"]["list"] = Helper.hitCapDmgList(damageObject["non-crit"]["list"], settings);
        damageObject["crit"]["list"] = Helper.hitCapDmgList(damageObject["crit"]["list"], settings);
        //fsoa
        let proc = 0;
        if (settings["fsoa"] === true) {
            let fcrit = CRIT_INS.calcFCritChance(settings, concStacks, channellerStacks);
            proc = $f428335242e58899$exports(type, settings, 1);
            fsoa = proc[0] * fcrit;
            hits.push(fsoa);
        }
        //calc min, avg, or max depending on request
        hits.push(AVG_INS.returnDecider(damageObject, settings, abil_val, concStacks, channellerStacks));
    }
    //calc total damage
    hits.push(Helper.totalDamageCalc(hits));
    return Helper.flooredList(hits);
}
$c43b08946b923498$exports = $c43b08946b923498$var$deep_impact;


var $c41a83d6a80ecdd5$exports = {};









var $iTwOG = parcelRequire("iTwOG");
var $c41a83d6a80ecdd5$require$channel = $iTwOG.channel;
function $c41a83d6a80ecdd5$var$detonate(type, settings, numberOfHits) {
    const AD_INS = new $54f3d4785e603164$exports();
    const NPC_INS = new $ac31842db484346f$exports();
    const HIT_INS = new $75f5ed54a44423a4$exports();
    const CRIT_INS = new $379f2d8d8fe101e8$exports();
    const AVG_INS = new $d8b93a0f4fdd9c13$exports();
    const Helper = new $ea81c9af3bdd4a61$exports();
    let abil_val = "detonate";
    const fixedPercent = $39fdf858fd784a44$exports.abilities[abil_val]["fixed percent"];
    const variablePercent = $39fdf858fd784a44$exports.abilities[abil_val]["variable percent"];
    settings["category"] = $39fdf858fd784a44$exports.abilities[abil_val]["category"];
    let concStacks = 0;
    let channellerStacks = 0;
    if (type === "Dw") concStacks = settings["conc stacks"];
    const hits = [];
    for(var hitsplat = 0; hitsplat < numberOfHits; hitsplat++){
        const damageObject = Helper.damageObjectCreator(settings);
        //calculates ability damage
        let AD = AD_INS.calcAd(type, settings); //AD_INS.calcAd(type,settings);
        //sets fixed and variable damage
        let fixed = Math.floor(AD * fixedPercent);
        let variable = Math.floor(AD * variablePercent);
        //applies on-hit effects
        let onHit = HIT_INS.calcOnHit(fixed, variable, type, $39fdf858fd784a44$exports.abilities[abil_val]["on hit effects"], settings);
        //sets up for further calculations
        damageObject["non-crit"]["list"] = Helper.baseDamageListCreator(onHit[0], onHit[1]);
        //apply crit dmg
        damageObject["crit"]["list"] = CRIT_INS.critDamageList(damageObject["non-crit"]["list"], settings, channellerStacks);
        //apply on-npc effects and hitcaps
        damageObject["non-crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["non-crit"]["list"], settings, AD);
        damageObject["crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["crit"]["list"], settings, AD);
        //apply hit caps
        damageObject["non-crit"]["list"] = Helper.hitCapDmgList(damageObject["non-crit"]["list"], settings);
        damageObject["crit"]["list"] = Helper.hitCapDmgList(damageObject["crit"]["list"], settings);
        //fsoa
        let proc = 0;
        if (settings["fsoa"] === true) {
            let fcrit = CRIT_INS.calcFCritChance(settings, concStacks, channellerStacks);
            proc = $f428335242e58899$exports(type, settings, 1);
            fsoa = proc[0] * fcrit;
            hits.push(fsoa);
        }
        //calc min, avg, or max depending on request
        hits.push(AVG_INS.returnDecider(damageObject, settings, abil_val, concStacks, channellerStacks));
    }
    //calc total damage
    hits.push(Helper.totalDamageCalc(hits));
    return Helper.flooredList(hits);
}
$c41a83d6a80ecdd5$exports = $c41a83d6a80ecdd5$var$detonate;


var $1f2e700447d15354$exports = {};

var $iTwOG = parcelRequire("iTwOG");
var $1f2e700447d15354$require$channel = $iTwOG.channel;
var $e59507fe48a7aa16$exports = {};









var $iTwOG = parcelRequire("iTwOG");
var $e59507fe48a7aa16$require$channel = $iTwOG.channel;
function $e59507fe48a7aa16$var$smoke_tendrils_1(type, settings, numberOfHits) {
    const AD_INS = new $54f3d4785e603164$exports();
    const NPC_INS = new $ac31842db484346f$exports();
    const HIT_INS = new $75f5ed54a44423a4$exports();
    const CRIT_INS = new $379f2d8d8fe101e8$exports();
    const AVG_INS = new $d8b93a0f4fdd9c13$exports();
    const Helper = new $ea81c9af3bdd4a61$exports();
    let abil_val = "smoke tendrils 1";
    const fixedPercent = $39fdf858fd784a44$exports.abilities[abil_val]["fixed percent"];
    const variablePercent = $39fdf858fd784a44$exports.abilities[abil_val]["variable percent"];
    settings["category"] = $39fdf858fd784a44$exports.abilities[abil_val]["category"];
    let concStacks = 0;
    let channellerStacks = 0;
    if (type === "Dw") concStacks = settings["conc stacks"];
    if (settings["ring"] === "channelers") channellerStacks += 1;
    const hits = [];
    for(var hitsplat = 0; hitsplat < numberOfHits; hitsplat++){
        const damageObject = Helper.damageObjectCreator(settings);
        //calculates ability damage
        let AD = AD_INS.calcAd(type, settings); //AD_INS.calcAd(type,settings);
        //sets fixed and variable damage
        let fixed = Math.floor(AD * fixedPercent);
        let variable = Math.floor(AD * variablePercent);
        //applies on-hit effects
        let onHit = HIT_INS.calcOnHit(fixed, variable, type, $39fdf858fd784a44$exports.abilities[abil_val]["on hit effects"], settings);
        //sets up for further calculations
        damageObject["non-crit"]["list"] = Helper.baseDamageListCreator(onHit[0], onHit[1]);
        //apply crit dmg
        damageObject["crit"]["list"] = CRIT_INS.critDamageList(damageObject["non-crit"]["list"], settings, channellerStacks);
        //apply on-npc effects and hitcaps
        damageObject["non-crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["non-crit"]["list"], settings, AD);
        damageObject["crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["crit"]["list"], settings, AD);
        //apply hit caps
        damageObject["non-crit"]["list"] = Helper.hitCapDmgList(damageObject["non-crit"]["list"], settings);
        damageObject["crit"]["list"] = Helper.hitCapDmgList(damageObject["crit"]["list"], settings);
        //fsoa
        let proc = 0;
        if (settings["fsoa"] === true) {
            let fcrit = CRIT_INS.calcFCritChance(settings, concStacks, channellerStacks);
            proc = $f428335242e58899$exports(type, settings, 1);
            fsoa = proc[0] * fcrit;
            hits.push(fsoa);
        }
        //calc min, avg, or max depending on request
        hits.push(AVG_INS.returnDecider(damageObject, settings, abil_val, concStacks, channellerStacks));
    }
    //calc total damage
    hits.push(Helper.totalDamageCalc(hits));
    return Helper.flooredList(hits);
}
$e59507fe48a7aa16$exports = $e59507fe48a7aa16$var$smoke_tendrils_1;


var $70ed1661416d17ba$exports = {};









var $iTwOG = parcelRequire("iTwOG");
var $70ed1661416d17ba$require$channel = $iTwOG.channel;
function $70ed1661416d17ba$var$smoke_tendrils_2(type, settings, numberOfHits) {
    const AD_INS = new $54f3d4785e603164$exports();
    const NPC_INS = new $ac31842db484346f$exports();
    const HIT_INS = new $75f5ed54a44423a4$exports();
    const CRIT_INS = new $379f2d8d8fe101e8$exports();
    const AVG_INS = new $d8b93a0f4fdd9c13$exports();
    const Helper = new $ea81c9af3bdd4a61$exports();
    let abil_val = "smoke tendrils 2";
    const fixedPercent = $39fdf858fd784a44$exports.abilities[abil_val]["fixed percent"];
    const variablePercent = $39fdf858fd784a44$exports.abilities[abil_val]["variable percent"];
    settings["category"] = $39fdf858fd784a44$exports.abilities[abil_val]["category"];
    let concStacks = 0;
    let channellerStacks = 0;
    if (settings["ring"] === "channelers") channellerStacks += 2;
    const hits = [];
    for(var hitsplat = 0; hitsplat < numberOfHits; hitsplat++){
        const damageObject = Helper.damageObjectCreator(settings);
        //calculates ability damage
        let AD = AD_INS.calcAd(type, settings); //AD_INS.calcAd(type,settings);
        //sets fixed and variable damage
        let fixed = Math.floor(AD * fixedPercent);
        let variable = Math.floor(AD * variablePercent);
        //applies on-hit effects
        let onHit = HIT_INS.calcOnHit(fixed, variable, type, $39fdf858fd784a44$exports.abilities[abil_val]["on hit effects"], settings);
        //sets up for further calculations
        damageObject["non-crit"]["list"] = Helper.baseDamageListCreator(onHit[0], onHit[1]);
        //apply crit dmg
        damageObject["crit"]["list"] = CRIT_INS.critDamageList(damageObject["non-crit"]["list"], settings, channellerStacks);
        //apply on-npc effects and hitcaps
        damageObject["non-crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["non-crit"]["list"], settings, AD);
        damageObject["crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["crit"]["list"], settings, AD);
        //apply hit caps
        damageObject["non-crit"]["list"] = Helper.hitCapDmgList(damageObject["non-crit"]["list"], settings);
        damageObject["crit"]["list"] = Helper.hitCapDmgList(damageObject["crit"]["list"], settings);
        //fsoa
        let proc = 0;
        if (settings["fsoa"] === true) {
            let fcrit = CRIT_INS.calcFCritChance(settings, concStacks, channellerStacks);
            proc = $f428335242e58899$exports(type, settings, 1);
            fsoa = proc[0] * fcrit;
            hits.push(fsoa);
        }
        //calc min, avg, or max depending on request
        hits.push(AVG_INS.returnDecider(damageObject, settings, abil_val, concStacks, channellerStacks));
    }
    //calc total damage
    hits.push(Helper.totalDamageCalc(hits));
    return Helper.flooredList(hits);
}
$70ed1661416d17ba$exports = $70ed1661416d17ba$var$smoke_tendrils_2;


var $785065f307c06fc8$exports = {};









var $iTwOG = parcelRequire("iTwOG");
var $785065f307c06fc8$require$channel = $iTwOG.channel;
function $785065f307c06fc8$var$smoke_tendrils_3(type, settings, numberOfHits) {
    const AD_INS = new $54f3d4785e603164$exports();
    const NPC_INS = new $ac31842db484346f$exports();
    const HIT_INS = new $75f5ed54a44423a4$exports();
    const CRIT_INS = new $379f2d8d8fe101e8$exports();
    const AVG_INS = new $d8b93a0f4fdd9c13$exports();
    const Helper = new $ea81c9af3bdd4a61$exports();
    let abil_val = "smoke tendrils 3";
    const fixedPercent = $39fdf858fd784a44$exports.abilities[abil_val]["fixed percent"];
    const variablePercent = $39fdf858fd784a44$exports.abilities[abil_val]["variable percent"];
    settings["category"] = $39fdf858fd784a44$exports.abilities[abil_val]["category"];
    let concStacks = 0;
    let channellerStacks = 0;
    if (settings["ring"] === "channelers") channellerStacks += 3;
    const hits = [];
    for(var hitsplat = 0; hitsplat < numberOfHits; hitsplat++){
        const damageObject = Helper.damageObjectCreator(settings);
        //calculates ability damage
        let AD = AD_INS.calcAd(type, settings); //AD_INS.calcAd(type,settings);
        //sets fixed and variable damage
        let fixed = Math.floor(AD * fixedPercent);
        let variable = Math.floor(AD * variablePercent);
        //applies on-hit effects
        let onHit = HIT_INS.calcOnHit(fixed, variable, type, $39fdf858fd784a44$exports.abilities[abil_val]["on hit effects"], settings);
        //sets up for further calculations
        damageObject["non-crit"]["list"] = Helper.baseDamageListCreator(onHit[0], onHit[1]);
        //apply crit dmg
        damageObject["crit"]["list"] = CRIT_INS.critDamageList(damageObject["non-crit"]["list"], settings, channellerStacks);
        //apply on-npc effects and hitcaps
        damageObject["non-crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["non-crit"]["list"], settings, AD);
        damageObject["crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["crit"]["list"], settings, AD);
        //apply hit caps
        damageObject["non-crit"]["list"] = Helper.hitCapDmgList(damageObject["non-crit"]["list"], settings);
        damageObject["crit"]["list"] = Helper.hitCapDmgList(damageObject["crit"]["list"], settings);
        //fsoa
        let proc = 0;
        if (settings["fsoa"] === true) {
            let fcrit = CRIT_INS.calcFCritChance(settings, concStacks, channellerStacks);
            proc = $f428335242e58899$exports(type, settings, 1);
            fsoa = proc[0] * fcrit;
            hits.push(fsoa);
        }
        //calc min, avg, or max depending on request
        hits.push(AVG_INS.returnDecider(damageObject, settings, abil_val, concStacks, channellerStacks));
    }
    //calc total damage
    hits.push(Helper.totalDamageCalc(hits));
    return Helper.flooredList(hits);
}
$785065f307c06fc8$exports = $785065f307c06fc8$var$smoke_tendrils_3;


var $5ec335d8e7a45b02$exports = {};









var $iTwOG = parcelRequire("iTwOG");
var $5ec335d8e7a45b02$require$channel = $iTwOG.channel;
function $5ec335d8e7a45b02$var$smoke_tendrils_4(type, settings, numberOfHits) {
    const AD_INS = new $54f3d4785e603164$exports();
    const NPC_INS = new $ac31842db484346f$exports();
    const HIT_INS = new $75f5ed54a44423a4$exports();
    const CRIT_INS = new $379f2d8d8fe101e8$exports();
    const AVG_INS = new $d8b93a0f4fdd9c13$exports();
    const Helper = new $ea81c9af3bdd4a61$exports();
    let abil_val = "smoke tendrils 4";
    const fixedPercent = $39fdf858fd784a44$exports.abilities[abil_val]["fixed percent"];
    const variablePercent = $39fdf858fd784a44$exports.abilities[abil_val]["variable percent"];
    settings["category"] = $39fdf858fd784a44$exports.abilities[abil_val]["category"];
    let concStacks = 0;
    let channellerStacks = 0;
    if (settings["ring"] === "channelers") channellerStacks += 4;
    const hits = [];
    for(var hitsplat = 0; hitsplat < numberOfHits; hitsplat++){
        const damageObject = Helper.damageObjectCreator(settings);
        //calculates ability damage
        let AD = AD_INS.calcAd(type, settings); //AD_INS.calcAd(type,settings);
        //sets fixed and variable damage
        let fixed = Math.floor(AD * fixedPercent);
        let variable = Math.floor(AD * variablePercent);
        //applies on-hit effects
        let onHit = HIT_INS.calcOnHit(fixed, variable, type, $39fdf858fd784a44$exports.abilities[abil_val]["on hit effects"], settings);
        //sets up for further calculations
        damageObject["non-crit"]["list"] = Helper.baseDamageListCreator(onHit[0], onHit[1]);
        //apply crit dmg
        damageObject["crit"]["list"] = CRIT_INS.critDamageList(damageObject["non-crit"]["list"], settings, channellerStacks);
        //apply on-npc effects and hitcaps
        damageObject["non-crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["non-crit"]["list"], settings, AD);
        damageObject["crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["crit"]["list"], settings, AD);
        //apply hit caps
        damageObject["non-crit"]["list"] = Helper.hitCapDmgList(damageObject["non-crit"]["list"], settings);
        damageObject["crit"]["list"] = Helper.hitCapDmgList(damageObject["crit"]["list"], settings);
        //fsoa
        let proc = 0;
        if (settings["fsoa"] === true) {
            let fcrit = CRIT_INS.calcFCritChance(settings, concStacks, channellerStacks);
            proc = $f428335242e58899$exports(type, settings, 1);
            fsoa = proc[0] * fcrit;
            hits.push(fsoa);
        }
        //calc min, avg, or max depending on request
        hits.push(AVG_INS.returnDecider(damageObject, settings, abil_val, concStacks, channellerStacks));
    }
    //calc total damage
    hits.push(Helper.totalDamageCalc(hits));
    return Helper.flooredList(hits);
}
$5ec335d8e7a45b02$exports = $5ec335d8e7a45b02$var$smoke_tendrils_4;


function $1f2e700447d15354$var$shadow_tendrils(type, settings, numberOfHits) {
    const hitOne = $e59507fe48a7aa16$exports(type, settings, 1);
    const hitTwo = $70ed1661416d17ba$exports(type, settings, 1);
    const hitThree = $785065f307c06fc8$exports(type, settings, 1);
    const hitFour = $5ec335d8e7a45b02$exports(type, settings, 1);
    return [
        hitOne[hitOne.length - 1] + hitTwo[hitTwo.length - 1] + hitThree[hitThree.length - 1] + hitFour[hitFour.length - 1]
    ];
}
$1f2e700447d15354$exports = $1f2e700447d15354$var$shadow_tendrils;


var $0858b3c4e9eb518d$exports = {};









var $iTwOG = parcelRequire("iTwOG");
var $0858b3c4e9eb518d$require$channel = $iTwOG.channel;
function $0858b3c4e9eb518d$var$asphyxiate(type, settings, numberOfHits) {
    const AD_INS = new $54f3d4785e603164$exports();
    const NPC_INS = new $ac31842db484346f$exports();
    const HIT_INS = new $75f5ed54a44423a4$exports();
    const CRIT_INS = new $379f2d8d8fe101e8$exports();
    const AVG_INS = new $d8b93a0f4fdd9c13$exports();
    const Helper = new $ea81c9af3bdd4a61$exports();
    let abil_val = "asphyxiate";
    let fixedPercent = $39fdf858fd784a44$exports.abilities[abil_val]["fixed percent"];
    let variablePercent = $39fdf858fd784a44$exports.abilities[abil_val]["variable percent"];
    settings["category"] = $39fdf858fd784a44$exports.abilities[abil_val]["category"];
    let concStacks = 0;
    let channellerStacks = 0;
    if (type === "Dw") concStacks = settings["conc stacks"];
    if (settings["ring"] === "channelers") channellerStacks += 1;
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
        let onHit = HIT_INS.calcOnHit(fixed, variable, type, $39fdf858fd784a44$exports.abilities[abil_val]["on hit effects"], settings);
        //sets up for further calculations
        damageObject["non-crit"]["list"] = Helper.baseDamageListCreator(onHit[0], onHit[1]);
        //apply crit dmg
        damageObject["crit"]["list"] = CRIT_INS.critDamageList(damageObject["non-crit"]["list"], settings, channellerStacks);
        //apply on-npc effects and hitcaps
        damageObject["non-crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["non-crit"]["list"], settings, AD);
        damageObject["crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["crit"]["list"], settings, AD);
        //apply hit caps
        damageObject["non-crit"]["list"] = Helper.hitCapDmgList(damageObject["non-crit"]["list"], settings);
        damageObject["crit"]["list"] = Helper.hitCapDmgList(damageObject["crit"]["list"], settings);
        //fsoa
        let proc = 0;
        if (settings["fsoa"] === true) {
            let fcrit = CRIT_INS.calcFCritChance(settings, concStacks, channellerStacks);
            proc = $f428335242e58899$exports(type, settings, 1);
            fsoa = proc[0] * fcrit;
            hits.push(fsoa);
        }
        //calc min, avg, or max depending on request
        hits.push(AVG_INS.returnDecider(damageObject, settings, abil_val, concStacks, channellerStacks));
        if (settings["ring"] === "channelers") channellerStacks += 1;
    }
    //calc total damage
    hits.push(Helper.totalDamageCalc(hits));
    return Helper.flooredList(hits);
}
$0858b3c4e9eb518d$exports = $0858b3c4e9eb518d$var$asphyxiate;


var $427a2a00f3ec73cc$exports = {};









var $iTwOG = parcelRequire("iTwOG");
var $427a2a00f3ec73cc$require$channel = $iTwOG.channel;
function $427a2a00f3ec73cc$var$wild_magic(type, settings, numberOfHits) {
    const AD_INS = new $54f3d4785e603164$exports();
    const NPC_INS = new $ac31842db484346f$exports();
    const HIT_INS = new $75f5ed54a44423a4$exports();
    const CRIT_INS = new $379f2d8d8fe101e8$exports();
    const AVG_INS = new $d8b93a0f4fdd9c13$exports();
    const Helper = new $ea81c9af3bdd4a61$exports();
    let abil_val = "wild magic";
    let fixedPercent = $39fdf858fd784a44$exports.abilities[abil_val]["fixed percent"];
    let variablePercent = $39fdf858fd784a44$exports.abilities[abil_val]["variable percent"];
    settings["category"] = $39fdf858fd784a44$exports.abilities[abil_val]["category"];
    let concStacks = 0;
    let channellerStacks = 0;
    if (type === "Dw") concStacks = settings["conc stacks"];
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
        let onHit = HIT_INS.calcOnHit(fixed, variable, type, $39fdf858fd784a44$exports.abilities[abil_val]["on hit effects"], settings);
        //sets up for further calculations
        damageObject["non-crit"]["list"] = Helper.baseDamageListCreator(onHit[0], onHit[1]);
        //apply crit dmg
        damageObject["crit"]["list"] = CRIT_INS.critDamageList(damageObject["non-crit"]["list"], settings, channellerStacks);
        //apply on-npc effects and hitcaps
        damageObject["non-crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["non-crit"]["list"], settings, AD);
        damageObject["crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["crit"]["list"], settings, AD);
        //apply hit caps
        damageObject["non-crit"]["list"] = Helper.hitCapDmgList(damageObject["non-crit"]["list"], settings);
        damageObject["crit"]["list"] = Helper.hitCapDmgList(damageObject["crit"]["list"], settings);
        //fsoa
        let proc = 0;
        if (settings["fsoa"] === true) {
            let fcrit = CRIT_INS.calcFCritChance(settings, concStacks, channellerStacks);
            proc = $f428335242e58899$exports(type, settings, 1);
            fsoa = proc[0] * fcrit;
            hits.push(fsoa);
        }
        //calc min, avg, or max depending on request
        hits.push(AVG_INS.returnDecider(damageObject, settings, abil_val, concStacks, channellerStacks));
    }
    //calc total damage
    hits.push(Helper.totalDamageCalc(hits));
    return Helper.flooredList(hits);
}
$427a2a00f3ec73cc$exports = $427a2a00f3ec73cc$var$wild_magic;


var $93f57c8d2f036d95$exports = {};









var $iTwOG = parcelRequire("iTwOG");
var $93f57c8d2f036d95$require$channel = $iTwOG.channel;
function $93f57c8d2f036d95$var$tsunami(type, settings, numberOfHits) {
    const AD_INS = new $54f3d4785e603164$exports();
    const NPC_INS = new $ac31842db484346f$exports();
    const HIT_INS = new $75f5ed54a44423a4$exports();
    const CRIT_INS = new $379f2d8d8fe101e8$exports();
    const AVG_INS = new $d8b93a0f4fdd9c13$exports();
    const Helper = new $ea81c9af3bdd4a61$exports();
    let abil_val = "tsunami";
    const fixedPercent = $39fdf858fd784a44$exports.abilities[abil_val]["fixed percent"];
    const variablePercent = $39fdf858fd784a44$exports.abilities[abil_val]["variable percent"];
    settings["category"] = $39fdf858fd784a44$exports.abilities[abil_val]["category"];
    let concStacks = 0;
    let channellerStacks = 0;
    if (type === "Dw") concStacks = settings["conc stacks"];
    const hits = [];
    for(var hitsplat = 0; hitsplat < numberOfHits; hitsplat++){
        const damageObject = Helper.damageObjectCreator(settings);
        //calculates ability damage
        let AD = AD_INS.calcAd(type, settings); //AD_INS.calcAd(type,settings);
        //sets fixed and variable damage
        let fixed = Math.floor(AD * fixedPercent);
        let variable = Math.floor(AD * variablePercent);
        //applies on-hit effects
        let onHit = HIT_INS.calcOnHit(fixed, variable, type, $39fdf858fd784a44$exports.abilities[abil_val]["on hit effects"], settings);
        //sets up for further calculations
        damageObject["non-crit"]["list"] = Helper.baseDamageListCreator(onHit[0], onHit[1]);
        //apply crit dmg
        damageObject["crit"]["list"] = CRIT_INS.critDamageList(damageObject["non-crit"]["list"], settings, channellerStacks);
        //apply on-npc effects and hitcaps
        damageObject["non-crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["non-crit"]["list"], settings, AD);
        damageObject["crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["crit"]["list"], settings, AD);
        //apply hit caps
        damageObject["non-crit"]["list"] = Helper.hitCapDmgList(damageObject["non-crit"]["list"], settings);
        damageObject["crit"]["list"] = Helper.hitCapDmgList(damageObject["crit"]["list"], settings);
        //fsoa
        let proc = 0;
        if (settings["fsoa"] === true) {
            let fcrit = CRIT_INS.calcFCritChance(settings, concStacks, channellerStacks);
            proc = $f428335242e58899$exports(type, settings, 1);
            fsoa = proc[0] * fcrit;
            hits.push(fsoa);
        }
        //calc min, avg, or max depending on request
        hits.push(AVG_INS.returnDecider(damageObject, settings, abil_val, concStacks, channellerStacks));
    }
    //calc total damage
    hits.push(Helper.totalDamageCalc(hits));
    return Helper.flooredList(hits);
}
$93f57c8d2f036d95$exports = $93f57c8d2f036d95$var$tsunami;


var $c762c845d09a225b$exports = {};

var $iTwOG = parcelRequire("iTwOG");
var $c762c845d09a225b$require$channel = $iTwOG.channel;
var $d593620564bcb2ee$exports = {};









var $iTwOG = parcelRequire("iTwOG");
var $d593620564bcb2ee$require$channel = $iTwOG.channel;
function $d593620564bcb2ee$var$omnipower_normal(type, settings, numberOfHits) {
    const AD_INS = new $54f3d4785e603164$exports();
    const NPC_INS = new $ac31842db484346f$exports();
    const HIT_INS = new $75f5ed54a44423a4$exports();
    const CRIT_INS = new $379f2d8d8fe101e8$exports();
    const AVG_INS = new $d8b93a0f4fdd9c13$exports();
    const Helper = new $ea81c9af3bdd4a61$exports();
    let abil_val = "omnipower";
    const fixedPercent = $39fdf858fd784a44$exports.abilities[abil_val]["fixed percent"];
    const variablePercent = $39fdf858fd784a44$exports.abilities[abil_val]["variable percent"];
    settings["category"] = $39fdf858fd784a44$exports.abilities[abil_val]["category"];
    let concStacks = 0;
    let channellerStacks = 0;
    if (type === "Dw") concStacks = settings["conc stacks"];
    const hits = [];
    for(var hitsplat = 0; hitsplat < numberOfHits; hitsplat++){
        const damageObject = Helper.damageObjectCreator(settings);
        //calculates ability damage
        let AD = AD_INS.calcAd(type, settings); //AD_INS.calcAd(type,settings);
        //sets fixed and variable damage
        let fixed = Math.floor(AD * fixedPercent);
        let variable = Math.floor(AD * variablePercent);
        //applies on-hit effects
        let onHit = HIT_INS.calcOnHit(fixed, variable, type, $39fdf858fd784a44$exports.abilities[abil_val]["on hit effects"], settings);
        //sets up for further calculations
        damageObject["non-crit"]["list"] = Helper.baseDamageListCreator(onHit[0], onHit[1]);
        //apply crit dmg
        damageObject["crit"]["list"] = CRIT_INS.critDamageList(damageObject["non-crit"]["list"], settings, channellerStacks);
        //apply on-npc effects and hitcaps
        damageObject["non-crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["non-crit"]["list"], settings, AD);
        damageObject["crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["crit"]["list"], settings, AD);
        //apply hit caps
        damageObject["non-crit"]["list"] = Helper.hitCapDmgList(damageObject["non-crit"]["list"], settings);
        damageObject["crit"]["list"] = Helper.hitCapDmgList(damageObject["crit"]["list"], settings);
        //fsoa
        let proc = 0;
        if (settings["fsoa"] === true) {
            let fcrit = CRIT_INS.calcFCritChance(settings, concStacks, channellerStacks);
            proc = $f428335242e58899$exports(type, settings, 1);
            fsoa = proc[0] * fcrit;
            hits.push(fsoa);
        }
        //calc min, avg, or max depending on request
        hits.push(AVG_INS.returnDecider(damageObject, settings, abil_val, concStacks, channellerStacks));
    }
    //calc total damage
    hits.push(Helper.totalDamageCalc(hits));
    return Helper.flooredList(hits);
}
$d593620564bcb2ee$exports = $d593620564bcb2ee$var$omnipower_normal;


var $c5917aee1ba1a1d5$exports = {};









var $iTwOG = parcelRequire("iTwOG");
var $c5917aee1ba1a1d5$require$channel = $iTwOG.channel;

function $c5917aee1ba1a1d5$var$omnipower_igneous(type, settings, numberOfHits) {
    const AD_INS = new $54f3d4785e603164$exports();
    const NPC_INS = new $ac31842db484346f$exports();
    const HIT_INS = new $75f5ed54a44423a4$exports();
    const CRIT_INS = new $379f2d8d8fe101e8$exports();
    const AVG_INS = new $d8b93a0f4fdd9c13$exports();
    const Helper = new $ea81c9af3bdd4a61$exports();
    let abil_val = "igneous omnipower";
    const fixedPercent = $39fdf858fd784a44$exports.abilities[abil_val]["fixed percent"];
    const variablePercent = $39fdf858fd784a44$exports.abilities[abil_val]["variable percent"];
    settings["category"] = $39fdf858fd784a44$exports.abilities[abil_val]["category"];
    let concStacks = 0;
    let channellerStacks = 0;
    if (type === "Dw") concStacks = settings["conc stacks"];
    const hits = [];
    for(var hitsplat = 0; hitsplat < numberOfHits; hitsplat++){
        const damageObject = Helper.damageObjectCreator(settings);
        //calculates ability damage
        let AD = AD_INS.calcAd(type, settings); //AD_INS.calcAd(type,settings);
        //sets fixed and variable damage
        let fixed = Math.floor(AD * fixedPercent);
        let variable = Math.floor(AD * variablePercent);
        //applies on-hit effects
        let onHit = HIT_INS.calcOnHit(fixed, variable, type, $39fdf858fd784a44$exports.abilities[abil_val]["on hit effects"], settings);
        //sets up for further calculations
        damageObject["non-crit"]["list"] = Helper.baseDamageListCreator(onHit[0], onHit[1]);
        //apply crit dmg
        damageObject["crit"]["list"] = CRIT_INS.critDamageList(damageObject["non-crit"]["list"], settings, channellerStacks);
        //apply on-npc effects and hitcaps
        damageObject["non-crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["non-crit"]["list"], settings, AD);
        damageObject["crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["crit"]["list"], settings, AD);
        //apply hit caps
        damageObject["non-crit"]["list"] = Helper.hitCapDmgList(damageObject["non-crit"]["list"], settings);
        damageObject["crit"]["list"] = Helper.hitCapDmgList(damageObject["crit"]["list"], settings);
        //fsoa
        let proc = 0;
        if (settings["fsoa"] === true) {
            let fcrit = CRIT_INS.calcFCritChance(settings, concStacks, channellerStacks);
            proc = $f428335242e58899$exports(type, settings, 1);
            fsoa = proc[0] * fcrit;
            hits.push(fsoa);
        }
        //calc min, avg, or max depending on request
        hits.push(AVG_INS.returnDecider(damageObject, settings, abil_val, concStacks, channellerStacks));
    }
    //calc total damage
    hits.push(Helper.totalDamageCalc(hits));
    return Helper.flooredList(hits);
}
$c5917aee1ba1a1d5$exports = $c5917aee1ba1a1d5$var$omnipower_igneous;


function $c762c845d09a225b$var$omnipower(type, settings, numberOfHits) {
    const normal = $d593620564bcb2ee$exports(type, settings, 1);
    const igneous = $c5917aee1ba1a1d5$exports(type, settings, 4);
    if (settings["cape"] === "igneous kal-mej") return igneous;
    else return normal;
}
$c762c845d09a225b$exports = $c762c845d09a225b$var$omnipower;


var $3e0449269e4110ad$exports = {};









var $iTwOG = parcelRequire("iTwOG");
var $3e0449269e4110ad$require$channel = $iTwOG.channel;
function $3e0449269e4110ad$var$guthix_staff(type, settings, numberOfHits) {
    const AD_INS = new $54f3d4785e603164$exports();
    const NPC_INS = new $ac31842db484346f$exports();
    const HIT_INS = new $75f5ed54a44423a4$exports();
    const CRIT_INS = new $379f2d8d8fe101e8$exports();
    const AVG_INS = new $d8b93a0f4fdd9c13$exports();
    const Helper = new $ea81c9af3bdd4a61$exports();
    let abil_val = "guthix staff";
    const fixedPercent = $39fdf858fd784a44$exports.abilities[abil_val]["fixed percent"];
    const variablePercent = $39fdf858fd784a44$exports.abilities[abil_val]["variable percent"];
    settings["category"] = $39fdf858fd784a44$exports.abilities[abil_val]["category"];
    let concStacks = 0;
    let channellerStacks = 0;
    if (type === "Dw") concStacks = settings["conc stacks"];
    const hits = [];
    for(var hitsplat = 0; hitsplat < numberOfHits; hitsplat++){
        const damageObject = Helper.damageObjectCreator(settings);
        //calculates ability damage
        let AD = AD_INS.calcAd(type, settings); //AD_INS.calcAd(type,settings);
        //sets fixed and variable damage
        let fixed = Math.floor(AD * fixedPercent);
        let variable = Math.floor(AD * variablePercent);
        //applies on-hit effects
        let onHit = HIT_INS.calcOnHit(fixed, variable, type, $39fdf858fd784a44$exports.abilities[abil_val]["on hit effects"], settings);
        //sets up for further calculations
        damageObject["non-crit"]["list"] = Helper.baseDamageListCreator(onHit[0], onHit[1]);
        //apply crit dmg
        damageObject["crit"]["list"] = CRIT_INS.critDamageList(damageObject["non-crit"]["list"], settings, channellerStacks);
        //apply on-npc effects and hitcaps
        damageObject["non-crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["non-crit"]["list"], settings, AD);
        damageObject["crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["crit"]["list"], settings, AD);
        //apply hit caps
        damageObject["non-crit"]["list"] = Helper.hitCapDmgList(damageObject["non-crit"]["list"], settings);
        damageObject["crit"]["list"] = Helper.hitCapDmgList(damageObject["crit"]["list"], settings);
        //fsoa
        let proc = 0;
        if (settings["fsoa"] === true) {
            let fcrit = CRIT_INS.calcFCritChance(settings, concStacks, channellerStacks);
            proc = $f428335242e58899$exports(type, settings, 1);
            fsoa = proc[0] * fcrit;
            hits.push(fsoa);
        }
        //calc min, avg, or max depending on request
        hits.push(AVG_INS.returnDecider(damageObject, settings, abil_val, concStacks, channellerStacks));
    }
    //calc total damage
    hits.push(Helper.totalDamageCalc(hits));
    return Helper.flooredList(hits);
}
$3e0449269e4110ad$exports = $3e0449269e4110ad$var$guthix_staff;


var $7c20f6825a5b0b06$exports = {};









var $iTwOG = parcelRequire("iTwOG");
var $7c20f6825a5b0b06$require$channel = $iTwOG.channel;
function $7c20f6825a5b0b06$var$frost_surge(type, settings, numberOfHits) {
    const AD_INS = new $54f3d4785e603164$exports();
    const NPC_INS = new $ac31842db484346f$exports();
    const HIT_INS = new $75f5ed54a44423a4$exports();
    const CRIT_INS = new $379f2d8d8fe101e8$exports();
    const AVG_INS = new $d8b93a0f4fdd9c13$exports();
    const Helper = new $ea81c9af3bdd4a61$exports();
    let abil_val = "frost surge";
    const fixedPercent = $39fdf858fd784a44$exports.abilities[abil_val]["fixed percent"];
    const variablePercent = $39fdf858fd784a44$exports.abilities[abil_val]["variable percent"];
    settings["category"] = $39fdf858fd784a44$exports.abilities[abil_val]["category"];
    let concStacks = 0;
    let channellerStacks = 0;
    if (type === "Dw") concStacks = settings["conc stacks"];
    const hits = [];
    for(var hitsplat = 0; hitsplat < numberOfHits; hitsplat++){
        const damageObject = Helper.damageObjectCreator(settings);
        //calculates ability damage
        let AD = AD_INS.calcAd(type, settings); //AD_INS.calcAd(type,settings);
        //sets fixed and variable damage
        let fixed = Math.floor(AD * fixedPercent);
        let variable = Math.floor(AD * variablePercent);
        //applies on-hit effects
        let onHit = HIT_INS.calcOnHit(fixed, variable, type, $39fdf858fd784a44$exports.abilities[abil_val]["on hit effects"], settings);
        //sets up for further calculations
        damageObject["non-crit"]["list"] = Helper.baseDamageListCreator(onHit[0], onHit[1]);
        //apply crit dmg
        damageObject["crit"]["list"] = CRIT_INS.critDamageList(damageObject["non-crit"]["list"], settings, channellerStacks);
        //apply on-npc effects and hitcaps
        damageObject["non-crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["non-crit"]["list"], settings, AD);
        damageObject["crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["crit"]["list"], settings, AD);
        //apply hit caps
        damageObject["non-crit"]["list"] = Helper.hitCapDmgList(damageObject["non-crit"]["list"], settings);
        damageObject["crit"]["list"] = Helper.hitCapDmgList(damageObject["crit"]["list"], settings);
        //fsoa
        let proc = 0;
        if (settings["fsoa"] === true) {
            let fcrit = CRIT_INS.calcFCritChance(settings, concStacks, channellerStacks);
            proc = $f428335242e58899$exports(type, settings, 1);
            fsoa = proc[0] * fcrit;
            hits.push(fsoa);
        }
        //calc min, avg, or max depending on request
        hits.push(AVG_INS.returnDecider(damageObject, settings, abil_val, concStacks, channellerStacks));
    }
    //calc total damage
    hits.push(Helper.totalDamageCalc(hits));
    return Helper.flooredList(hits);
}
$7c20f6825a5b0b06$exports = $7c20f6825a5b0b06$var$frost_surge;



var $717c03212053f1a4$exports = {};









var $iTwOG = parcelRequire("iTwOG");
var $717c03212053f1a4$require$channel = $iTwOG.channel;
function $717c03212053f1a4$var$armadyl_battlestaff(type, settings, numberOfHits) {
    const AD_INS = new $54f3d4785e603164$exports();
    const NPC_INS = new $ac31842db484346f$exports();
    const HIT_INS = new $75f5ed54a44423a4$exports();
    const CRIT_INS = new $379f2d8d8fe101e8$exports();
    const AVG_INS = new $d8b93a0f4fdd9c13$exports();
    const Helper = new $ea81c9af3bdd4a61$exports();
    let abil_val = "armadyl battlestaff";
    let fixedPercent = $39fdf858fd784a44$exports.abilities[abil_val]["fixed percent"];
    let variablePercent = $39fdf858fd784a44$exports.abilities[abil_val]["variable percent"];
    settings["category"] = $39fdf858fd784a44$exports.abilities[abil_val]["category"];
    let concStacks = 0;
    let channellerStacks = 0;
    if (type === "Dw") concStacks = settings["conc stacks"];
    if (settings["ring"] === "channelers") channellerStacks += 1;
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
        let onHit = HIT_INS.calcOnHit(fixed, variable, type, $39fdf858fd784a44$exports.abilities[abil_val]["on hit effects"], settings);
        //sets up for further calculations
        damageObject["non-crit"]["list"] = Helper.baseDamageListCreator(onHit[0], onHit[1]);
        //apply crit dmg
        damageObject["crit"]["list"] = CRIT_INS.critDamageList(damageObject["non-crit"]["list"], settings, channellerStacks);
        //apply on-npc effects and hitcaps
        damageObject["non-crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["non-crit"]["list"], settings, AD);
        damageObject["crit"]["list"] = NPC_INS.onNpcDamageList(damageObject["crit"]["list"], settings, AD);
        //apply hit caps
        damageObject["non-crit"]["list"] = Helper.hitCapDmgList(damageObject["non-crit"]["list"], settings);
        damageObject["crit"]["list"] = Helper.hitCapDmgList(damageObject["crit"]["list"], settings);
        //fsoa
        let proc = 0;
        if (settings["fsoa"] === true) {
            let fcrit = CRIT_INS.calcFCritChance(settings, concStacks, channellerStacks);
            proc = $f428335242e58899$exports(type, settings, 1);
            fsoa = proc[0] * fcrit;
            hits.push(fsoa);
        }
        //calc min, avg, or max depending on request
        hits.push(AVG_INS.returnDecider(damageObject, settings, abil_val, concStacks, channellerStacks));
        if (settings["ring"] === "channelers") channellerStacks += 1;
    }
    //calc total damage
    hits.push(Helper.totalDamageCalc(hits));
    return Helper.flooredList(hits);
}
$717c03212053f1a4$exports = $717c03212053f1a4$var$armadyl_battlestaff;


const $741d320f34accf57$export$ed316e5830568bf6 = {
    "Wrack": {
        title: "Wrack",
        calc: $81be895847e1958b$exports,
        icon: "https://i.imgur.com/1SokTxR.png",
        weapons: [
            "2h",
            "Dw",
            "Md",
            "Ms"
        ]
    },
    "Wrack bound": {
        title: "Wrack bound",
        calc: $9645a7aacb98bed4$exports,
        icon: "https://i.imgur.com/1SokTxR.png",
        weapons: [
            "2h",
            "Dw",
            "Md",
            "Ms"
        ]
    },
    "Wrack and ruin": {
        title: "Wrack and ruin",
        calc: $9a7c1adaa0ad3df6$exports,
        icon: "https://i.imgur.com/ARdyBBp.png",
        weapons: [
            "2h",
            "Dw",
            "Md",
            "Ms"
        ]
    },
    "Wrack and ruin bound": {
        title: "Wrack and ruin bound",
        calc: $5190b3b0e767f444$exports,
        icon: "https://i.imgur.com/ARdyBBp.png",
        weapons: [
            "2h",
            "Dw",
            "Md",
            "Ms"
        ]
    },
    "Magma tempest": {
        title: "Magma tempest",
        calc: $15764cef746bdac7$exports,
        icon: "https://i.imgur.com/NCmGpc2.png",
        weapons: [
            "2h"
        ]
    },
    "Impact": {
        title: "impact",
        calc: $5df52224c870c752$exports,
        icon: "https://i.imgur.com/etm6PDI.png",
        weapons: [
            "2h",
            "Dw",
            "Md",
            "Ms"
        ]
    },
    "Chain": {
        title: "chain",
        calc: $2218f5e2f7ee2e2c$exports,
        icon: "https://i.imgur.com/C45quRI.png",
        weapons: [
            "2h",
            "Dw",
            "Md",
            "Ms"
        ]
    },
    "Sonic wave": {
        title: "Sonic wave",
        calc: $9a7c1adaa0ad3df6$exports,
        icon: "https://i.imgur.com/m66Ac4V.png",
        weapons: [
            "2h"
        ]
    },
    "Greater sonic wave": {
        title: "Greater sonic wave",
        calc: $9486c6cab45a46c5$exports,
        icon: "https://i.imgur.com/wJ7qEjx.png",
        weapons: [
            "2h"
        ]
    },
    "Concentrated blast": {
        title: "Concentrated blast",
        calc: $9cff9f9a572f65b8$exports,
        icon: "https://i.imgur.com/UJYcqg0.png",
        weapons: [
            "Dw",
            "Md"
        ]
    },
    "Greater concentrated blast": {
        title: "Greater concentrated blast",
        calc: $a22bbe50ee135838$exports,
        icon: "https://i.imgur.com/3Xhdk2t.png",
        weapons: [
            "Dw",
            "Md"
        ]
    },
    "Dragon breath": {
        title: "Dragon breath",
        calc: $745b24c1be9319c3$exports,
        icon: "https://i.imgur.com/oNghEbN.png",
        weapons: [
            "2h",
            "Dw",
            "Md",
            "Ms"
        ]
    },
    "Combust": {
        title: "Combust",
        calc: $ad3bf80bfe2ebd28$exports,
        icon: "https://i.imgur.com/nEpQ5hu.png",
        weapons: [
            "2h",
            "Dw",
            "Md",
            "Ms"
        ]
    },
    "Corruption blast": {
        title: "Corruption blast",
        calc: $c69eb8259fb2b09d$exports,
        icon: "https://i.imgur.com/4Art6Hf.png",
        weapons: [
            "2h",
            "Dw",
            "Md",
            "Ms"
        ]
    },
    "Deep impact": {
        title: "Deep impact",
        calc: $c43b08946b923498$exports,
        icon: "https://i.imgur.com/5AHnrTj.png",
        weapons: [
            "2h",
            "Dw",
            "Md",
            "Ms"
        ]
    },
    "Detonate": {
        title: "Detonate",
        calc: $c41a83d6a80ecdd5$exports,
        icon: "https://i.imgur.com/Pmmg5uQ.png",
        weapons: [
            "2h",
            "Dw",
            "Md",
            "Ms"
        ]
    },
    "Smoke tendrils": {
        title: "Smoke tendrils",
        calc: $1f2e700447d15354$exports,
        icon: "https://i.imgur.com/i87uOaX.png",
        weapons: [
            "2h",
            "Dw",
            "Md",
            "Ms"
        ]
    },
    "Asphyxiate": {
        title: "Asphyxiate",
        calc: $0858b3c4e9eb518d$exports,
        icon: "https://i.imgur.com/ji1SENd.png",
        weapons: [
            "2h",
            "Dw",
            "Md",
            "Ms"
        ]
    },
    "Wild magic": {
        title: "Wild magic",
        calc: $427a2a00f3ec73cc$exports,
        icon: "https://i.imgur.com/4Jb6sAB.png",
        weapons: [
            "2h",
            "Dw",
            "Md",
            "Ms"
        ]
    },
    "Tsunami": {
        title: "Tsunami",
        calc: $93f57c8d2f036d95$exports,
        icon: "https://i.imgur.com/nS7EqoG.png",
        weapons: [
            "2h",
            "Dw",
            "Md",
            "Ms"
        ]
    },
    "Omnipower": {
        title: "Omnipower",
        calc: $c762c845d09a225b$exports,
        icon: "https://i.imgur.com/rIaeB6U.png",
        weapons: [
            "2h",
            "Dw",
            "Md",
            "Ms"
        ]
    },
    "Guthix staff": {
        title: "Guthix staff",
        calc: $3e0449269e4110ad$exports,
        icon: "https://i.imgur.com/sOXLRLp.png",
        weapons: [
            "2h",
            "Dw",
            "Md",
            "Ms"
        ]
    },
    "Frost Surge": {
        title: "Frost Surge",
        calc: $7c20f6825a5b0b06$exports,
        icon: "https://i.imgur.com/w8RvYQh.png",
        weapons: [
            "2h",
            "Dw",
            "Md",
            "Ms"
        ]
    },
    "Time Strike": {
        title: "Time Strike",
        calc: $f428335242e58899$exports,
        icon: "https://i.imgur.com/vhktD3Y.png",
        weapons: [
            "2h",
            "Dw",
            "Md",
            "Ms"
        ]
    },
    "Armadyl Battlestaff": {
        title: "Armadyl Battlestaff",
        calc: $717c03212053f1a4$exports,
        icon: "https://i.imgur.com/KG47SN8.png",
        weapons: [
            "2h",
            "Dw",
            "Md",
            "Ms"
        ]
    }
};


$4e83a4c9723101d5$var$buildDamagesTable((0, $741d320f34accf57$export$ed316e5830568bf6));
$4e83a4c9723101d5$var$calculateDamages($4e83a4c9723101d5$var$collectSettings());
const $4e83a4c9723101d5$var$settings = document.getElementsByClassName("js--setting");
for (let setting of $4e83a4c9723101d5$var$settings)setting.addEventListener("change", (e)=>{
    $4e83a4c9723101d5$var$calculateDamages($4e83a4c9723101d5$var$collectSettings());
});
function $4e83a4c9723101d5$var$collectSettings() {
    // Have default settings here
    const settings = {
        "minavgmax": "avg",
        "category": "none",
        "ability damage": 0,
        "level": 120,
        "potion": "elder overload",
        "two-handed weapon": "fractured staff of armadyl",
        "main-hand weapon": "wand of the praesul",
        "off-hand weapon": "imperium core",
        "shield": "merciless kiteshield",
        "defender": "kalphite rebounder",
        "helmet": "elite tectonic mask",
        "body": "elite tectonic robe top",
        "leg": "elite tectonic robe bottom",
        "gloves": "enhanced kerapacs wrist wraps",
        "boots": "enhanced blast diffusion boots",
        "necklace": "essence of finality amulet (or)",
        "ring": "reavers",
        "cape": "igneous kal-mej",
        "pocket slot": "grimoire",
        "reaper crew": true,
        "level 20 armour": true,
        "tuska might": false,
        "fsoa": false,
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
        "enchantment flames": true,
        "enchantment affliction": true,
        "enchantment metaphysics": true,
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
        "sunshine": false,
        "kww": false,
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
        "channeller stacks": 0,
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
function $4e83a4c9723101d5$var$buildDamagesTable(abilities) {
    const table = document.querySelector(".js--damages-table");
    const template = document.querySelector("#damage-table-row");
    for (const [abilityKey, ability] of Object.entries(abilities)){
        const copy = template.content.cloneNode(true);
        copy.querySelector(".js--ability").setAttribute("data-ability-key", abilityKey);
        copy.querySelector(".js--ability-title").textContent = ability.title;
        copy.querySelector(".js--ability-icon").setAttribute("src", ability.icon);
        const weaponSelect = copy.querySelector(".js--ability-weapon");
        weaponSelect.addEventListener("change", (e)=>{
            $4e83a4c9723101d5$var$calculateDamages($4e83a4c9723101d5$var$collectSettings());
        });
        ability.weapons.forEach((item)=>{
            weaponSelect.add(new Option(item, item));
        });
        table.appendChild(copy);
    }
}
function $4e83a4c9723101d5$var$calculateDamages(settings) {
    document.querySelectorAll(".js--damages-table tr").forEach((row)=>{
        const weapon = row.querySelector(".js--ability-weapon").value;
        const key = row.getAttribute("data-ability-key");
        settings["sunshine"] = false;
        settings["metamorphosis"] = false;
        damages = (0, $741d320f34accf57$export$ed316e5830568bf6)[key].calc(weapon, settings, 1);
        row.querySelector(".js--ability-regular").textContent = damages[damages.length - 1];
        // Recalculate with sun
        settings["sunshine"] = true;
        damages = (0, $741d320f34accf57$export$ed316e5830568bf6)[key].calc(weapon, settings, 1);
        row.querySelector(".js--ability-sunshine").textContent = damages[damages.length - 1];
        // Recalculate with meta
        settings["metamorphosis"] = true;
        settings["sunshine"] = false;
        damages = (0, $741d320f34accf57$export$ed316e5830568bf6)[key].calc(weapon, settings, 1);
        row.querySelector(".js--ability-metamorphosis").textContent = damages[damages.length - 1];
    });
}


