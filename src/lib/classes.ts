export enum PlayerClass {
	Erper = 'Erper (*wildcard)',
	Hunter = 'Hunter',
	Fighter = 'Fighter',
	Ranger = 'Ranger',
	Gunner = 'Gunner',
	Force = 'Force',
	Techer = 'Techer',
	Braver = 'Braver',
	Bouncer = 'Bouncer',
	Summoner = 'Summoner',
	Hero = 'Hero',
	Phantom = 'Phantom',
	Etoile = 'Etoile',
	Luster = 'Luster'
}

export const scionClasses = [
	PlayerClass.Hero,
	PlayerClass.Phantom,
	PlayerClass.Etoile,
	PlayerClass.Luster
];

export const normalClasses = [
	PlayerClass.Hunter,
	PlayerClass.Fighter,
	PlayerClass.Ranger,
	PlayerClass.Gunner,
	PlayerClass.Force,
	PlayerClass.Techer,
	PlayerClass.Braver,
	PlayerClass.Bouncer,
	PlayerClass.Summoner
];

export const classes = [PlayerClass.Erper, ...normalClasses, ...scionClasses];
