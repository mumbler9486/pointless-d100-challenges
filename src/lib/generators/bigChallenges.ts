import { pickRandom } from '../utils/random';

const additionalChallenges = [
	'reading fleet chat and complaining about how sodam skates',
	'going on fleet chat to tell everyone how you were able to do one thing differently and that saved you 1 second of time after only 1 attempt',
	'your mom is cleaning your room',
	'"Are ya winning son?"',
	'writing a love letter to your waifu',
	'bench pressing your mom',
	'drawing me like one of your anime waifus',
	'after coming back from a 4 month+ haitus',
	'while in class',
	'watching a video of a man/woman screaming at paint at an annoying volume',
	'every minute you must @ a discord moderator in UWU speak professing your love',
	'following a youtube guide exactly for the class from 3 years ago prior to PSO2 base game release in NA',
	'SC5 dance once every time you take damage',
	'while watching the episode oracle anime at 15x speed, every time Matoi takes a hit punched, take 1000 damage with genon',
	'everytime someone in fleet chat asks "when/is maint?", lookup the maint schedule in their timezone and reply with a discord timestamped message',
	'using all digits on your hands on a button'
];

export const generateBigChallenge = () => {
	return pickRandom(additionalChallenges);
};
