// ES6 module syntax
import LocalizedStrings from 'react-localization';

export default new LocalizedStrings({
  fr: {
    header: {
      home: 'Home',
      about: 'About',
      users: 'Users',
      menuTittle: 'BASE MÉDIA',
      collection: 'Ma sélection',
      welcome: 'BONJOUR {userName}',
    },
    footer: {
      copyright: 'copyright - Nexity - 2020',
      aide: 'Besoins d’aide ? - FAQ',
      contact: 'Gestion de la base - Contacter l’administrateur',
    },
    counter: {
      numbers: 'Numbers: {number}',
    },
    listCategories: {
      tittle: 'CATÉGORIES',
    },
  },
});
