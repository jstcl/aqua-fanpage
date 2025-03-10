import App from './App.svelte';

const app = new App({
  target: document.body,
  props: {
    name: {
      en: 'Minato Aqua',
      jp: '湊あくあ',
      cn: '湊-阿库娅',
    },
    fanName: {
      en: 'Aqua Crew',
      jp: 'あくあクルー',
    },
    inRealBirthdate: 'December 01',
    firstDebut: 'August 8, 2018',
    generation: 'hololive 2nd Gen',
    height: '148cm',
    weight: '4x.x kg',
    oshiMark: '⚓',
    introductionWords: 'KonAqua! Minato Aqua desu!',
    greetingsWord: {
      en: 'KonAqua!',
      jp: 'こんあくあ～',
    },
    hobby: ['Gaming', 'Singing'],
    likeThings: ['Anime', 'Manga', 'Omurice'],
    goals: 'To be the number one idol in the galaxy!',
    uniqueSkill: 'Able to identify shampoo brand just by smells',
  },
});

export default app;
