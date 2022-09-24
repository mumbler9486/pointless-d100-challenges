export interface WeaponRestriction {
  name: string;
  slots: number,
  restrictions: string[];
}

export enum WeaponType {
  Sword,
  WiredLance,
  Partisan,
  TwinDaggers,
  DoubleSabers,
  Knuckles,
  Katana,
  SoaringBlades,
  Gunblade,
  AssaultRifle,
  Launcher,
  TwinMachineGuns,
  Bow,
  Rod,
  Talis,
  Wand,
  JetBoots,
  Harmonizer,
  NoWeapon,
}

export const weaponTypeLabelMap = {
  [WeaponType.Sword]: "Sword",
  [WeaponType.WiredLance]: "Wired Lance",
  [WeaponType.Partisan]: "Partisan",
  [WeaponType.TwinDaggers]: "Twin Daggers",
  [WeaponType.DoubleSabers]: "Double Sabers",
  [WeaponType.Knuckles]: "Knuckles",
  [WeaponType.Katana]: "Katana",
  [WeaponType.SoaringBlades]: "Soaring Blades",
  [WeaponType.Gunblade]: "Gunblade",
  [WeaponType.AssaultRifle]: "Assault Rifle",
  [WeaponType.Launcher]: "Launcher",
  [WeaponType.TwinMachineGuns]: "Twin Machine Guns",
  [WeaponType.Bow]: "Bow",
  [WeaponType.Rod]: "Rod",
  [WeaponType.Talis]: "Talis",
  [WeaponType.Wand]: "Wand",
  [WeaponType.JetBoots]: "Jet Boots",
  [WeaponType.Harmonizer]: "Harmonizer",
  [WeaponType.NoWeapon]: "No Weapon",
}