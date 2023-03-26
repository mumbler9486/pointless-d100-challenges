import { publish } from 'gh-pages';

const username = 'mumbler9486';
const repositoryName = 'pointless-d100-challenges';

console.log(`Deploying to gh-pages ${username}/${repositoryName}`);
publish(
	'build',
	{
		branch: 'gh-pages',
		repo: `https://github.com/${username}/${repositoryName}.git`,
		user: {
			name: username
		},
		dotfiles: true
	},
	() => {
		const ghPageUrl = `https://${username}.github.io/${repositoryName}`;
		console.log('Deploy Complete!');
		console.log('Remote URL: ' + ghPageUrl);
	}
);
