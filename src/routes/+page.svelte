<script lang="ts">
	let generatedChallenges: string[] = [];

	const modifier = ['no', 'only', 'once a minute', '1x', '2x', '3x', '69x', ''];

	const modifiableChallenges = [
		'unitless',
		'ilgrants',
		'rivalate units',
		'one hand tied behind your back',
		'drinking mountain dew through your nose',
		'no skillful adept',
		'with no sub class',
		'brissa units',
		'weapon action',
		'switching to altas ex',
		'tanking blizzard',
		'sleep deprived',
		'with sound off',
		'with gshade shaders obnoxiously on',
		'smart pa',
		'shift kugel',
		'zanverse',
		'megiverse',
		'marron',
		'streaming while providing commentary with zero viewers',
		'cosplaying as a NPC',
		'trailblazer units',
		'trailblazer weapon',
		'genon',
		'using your feet',
		'controller',
		'your ring finger is tied down on your left hand',
		"you have a thick juicy bandaid on the joint of your left hand's finger",
		'your mom',
		'imaginary girlfriend is sitting on your lap',
		'mismatched elements',
		'premium weakpoint drink',
		'tree-buff',
		'taking matoi-buff',
		'million storm',
		'steady shot',
		'grenade round',
		'moai head',
		'spending a FULL scrape doll',
		'using a cosmos atomizor',
		'weaponless (fists)',
		"with a weapon camo you havn't ran with before",
		'switch to another 15* weapon on phase change',
		'using 1 PA from an all class weapon',
		'using a 1* weapon',
		'using croesus',
		'using novel',
		'using a 14* weapon',
		'while wearing booba upgrade',
		'gsoul but it is on a brissa unit',
		'phrase decay on your weapon but you cannot apply jellen to the boss ever',
		'always attacking sodam from behind',
		'wearing a bread mask',
		'your cat controls the right joy stick/mouse movement',
		'publishing a gif on tenor every time you fail to make it to gomo d100 phase',
		'intentionally skip final flaps',
		'finish exactly 1 second off from the timeout',
		'(htpd only) everyone starts NOT in the gateway ship',
		'(htpd only) no ranger weakbullets',
		'if you fail quest, delete account',
		'only allowed to use tech PAs via jet boots activation',
		'100% uptime on shifted massen',
		'might boost on all weapons and units',
		'at least 1 noble, 1 elegant, 1 graceful, and 1 grand augment spread on your units/weapons',
		'maximum weapon pot level is 1',
		'(htpd only) everyone uses the same weapon, use all class if you have to',
		'recover PP using ONLY normals',
		'(htpd only) everyone must stand in the same spot regardless of ranged/tech/mel type class',
		'ringless run',
		'change to a different weapon (weapon cannot be used for the rest of the run) every time you take a hit',
		'delete one of your best units for every quest fail',
		'(htpd only) every time your teammate says "brb" immediately start the quest or next phase while they\'re AFK'
	];

	const additonalConditions = [
		'skipping wind phase',
		'every triple slam you must take damage',
		'pool diving',
		'reading fleet chat and complaining about how sodam skates',
		'going on fleet chat to tell everyone how you were able to do one thing differently and that saved you 1 second of time after only 1 attempt',
		'getting all goddess buffs',
		'your mom is cleaning your room',
		'"are you winning son?"',
		'always walking towards tornado',
		'writing a love letter to your waifu',
		'bench pressing your mom',
		'drawing me like one of your anime waifus',
		'attempting the run at 6969 hours total play time',
		'after coming back from a 4 month+ haitus',
		'while in class',
		'every minute you must @ a discord moderator in UWU speak professing your love',
		'minimizing the number of jumps used (including PAs that put you in the air)',
		'standing completely still',
		'absolutely no dodging (but iframes are ok)',
		'absolutely no iframes (but dodges are ok)',
		'absolutely no counters',
		'whenever sodam is stunned take 1000 damage using genon, no healing for 1 minute',
		'even though te buff is not allowed in d100 (I know, I know), go to expedition and have someone te buff you with a deband ONLY for no reason every time you start the quest',
		'following a youtube guide for the class from 3 years ago prior to NGS release in NA',
		'sc5 dance once every time sodam does the 2 swipes attack',
		'while watching the episode oracle anime at 15x speed, every time Matoi takes a hit punched, take 1000 damage with genon',
		'everytime someone in fleet chat asks "when/is maint?", lookup the maint schedule in their timezone and reply with a discord timestamped message'
	];

	const classes = [
		'erper',
		'normal holder',
		'Hunter',
		'Fighter',
		'Ranger',
		'Gunner',
		'Force',
		'Techer',
		'Braver',
		'Bouncer',
		'Bouncer',
		'Hero',
		'Phantom',
		'Etoile',
		'Luster',
		'Summoner'
	];

	const randInt = (min: number, max: number) => {
		//min and max inclusive
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min;
	};

	const pickRandom = <TValue>(list: TValue[]) => {
		const index = randInt(0, list.length - 1);
		return list[index];
	};

	const pickAFewRandom = <TValue>(list: TValue[], count: number) => {
		const result = [];
		for (let i = 0; i < count; i++) {
			result.push(pickRandom(list));
		}
		return result;
	};

	const generateChallenge = () => {
		const challengeList = pickAFewRandom(modifiableChallenges, randInt(2, 6));

		const additionalChal = pickRandom(additonalConditions);

		const modifiedChal = [] as string[];
		challengeList.forEach((x) => {
			if (randInt(1, 6) < 3) {
				modifiedChal.push(x);
				return;
			}
			const modi = pickRandom(modifier);
			modifiedChal.push(`${modi} ${x}`);
		});

		const asClasses = pickAFewRandom(classes, 2);
		const challengeString = `${modifiedChal.join(
			', '
		)} WHILE ${additionalChal}, as: [${asClasses.join('/')}]`;

		generatedChallenges.push(challengeString);
		generatedChallenges = generatedChallenges;
	};

	const generateChallengeXTimes = (x: number) => {
		for (let i = 0; i < x; i++) {
			generateChallenge();
		}
	};
</script>

<main>
	<h1>Pointless D100/HTPD Challenge Generator</h1>
	<p>
		If I had a meseta for everytime someone says they'll attempt D100/HTPD with some made up
		challenge...
	</p>
	<p />
	<div class="card">
		<button on:click={generateChallenge}>Challenge Me Bitch</button>
		<button on:click={() => generateChallengeXTimes(10)}> Challenge Me Bitch (10x)</button>

		<ol>
			{#each generatedChallenges as challenge, i}
				<li>{challenge}</li>
			{/each}
		</ol>
	</div>
	<div />
</main>

<style>
	.logo {
		height: 6em;
		padding: 1.5em;
		will-change: filter;
	}
	.logo:hover {
		filter: drop-shadow(0 0 2em #646cffaa);
	}
	.logo.svelte:hover {
		filter: drop-shadow(0 0 2em #ff3e00aa);
	}
	.read-the-docs {
		color: #888;
	}
	li {
		margin-top: 2rem;
	}
	p {
		color: gray;
		font-size: 12px;
	}
</style>
