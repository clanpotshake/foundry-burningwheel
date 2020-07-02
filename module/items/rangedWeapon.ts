import { CharacterData } from "module/actor";

export class RangedWeapon extends Item {
    prepareData() {
        if (this.actor && this.data.data.usePower) {
            const baseDmg = parseInt((this.actor.data as CharacterData).data.power.exp, 10)
                + parseInt(this.data.data.powerBonus, 10);
            this.data.data.incidental = Math.ceil(baseDmg / 2).toString();
            this.data.data.mark = baseDmg.toString();
            this.data.data.superb = Math.floor(baseDmg * 1.5).toString();
        }

        const incidentalRange = parseInt(this.data.data.incidentalRoll, 10);
        const markRange = parseInt(this.data.data.markRoll, 10);
        this.data.data.incidentalLabel = `1-${incidentalRange}`;
        this.data.data.markLabel = (markRange - 1 === incidentalRange) ? `${markRange}` : `${incidentalRange + 1}-${markRange}`;
        this.data.data.superbLabel = (markRange === 5 ) ? `6` : `${markRange + 1}-6`;
    }

    data: RangedWeaponRootData;
}

export interface RangedWeaponRootData extends BaseEntityData{
    data: RangedWeaponData
}

export interface RangedWeaponData {
    quality: string;
    hasGunpowder: boolean;
    usePower: boolean;
    powerBonus: string; // as number
    incidental: string; // as number
    incidentalRoll: string; // as number
    mark: string; // as number
    markRoll: string; // as number
    superb: string; // as number
    vsArmor: string; // as number
    optimalRange: string; // as number
    extremeRange: string; // as number
    maxRange: string;
    hadnedness: string;
    description: string;

    // derived data
    incidentalLabel?: string;
    markLabel?: string;
    superbLabel?: string;
}