import hit_damage_calculation from "./damage_calc";
import calc_damage_object from "./damage_calc";

function wrack(a, b) {
    // temp hard override of settings
    const settingss = {
        'user value': 'mean',

        'weapon type': 'two-hand', // 'two-hand' or 'main-hand'
        'main_style': 'ranged',
        'ability': 'wrack',
        'magic level': 99,
        'strength level': 95,
        'ranged level': 90,
        'necromancy level': 110,
        'hit chance': 100,
        

        // gear
        'two-hand weapon': 'bow of the last guardian',
        'main-hand weapon': 'wand of the praesul',
        'off-hand weapon': 'imperium core',
        'aura': 'none',
        'necklace': 'none',
        'pocket': 'none',

        // perks
        'eruptive': 0,
        'ruthless stacks': 0,
        'ruthless rank': 0,
        'precise': 3,
        'genocidal': 0.5, // percent gained from genocidal

        // AD buffs
        'flow stacks': 4,
        'chaos roar': false,
        'icy precision': 4,

        // additive boosts
        'stone of jas': 0,
        'void gear': 'none',
        'enduring ruin - hit': false,
        'ruby aurora': 0,
        'gravitate': 0,

        // multiplicative boosts
        // shared
        // magic specific
        'prayer': 'affliction',
        'sunshine': false,
        'blood tithe': 0,

        // all styles
        'revenge stacks': 0,

        // PvE only
        // magic specific

        // all styles
        'slayer helm': 'corrupted slayer helmet',
        'guardhouse task': 1,
        'guardhouse low hp': 0,

        // bonus damage
        'frostblades': false,

        // core boosts
        'berserkers fury': 1,

        // on-npc boosts
        'haunted AD': 1000,
        'vulnerability': 'vulnerability',
        'enduring ruin - bleed': 0,


        'nopenopenope': 0,
        'anachronia slayer lodge buff': 0,

        // bolg
        'bolg spec': true,
        'bolg stacks': 3,
    };

    let damage = hit_damage_calculation(settingss);
    return damage;
}

export default wrack;
