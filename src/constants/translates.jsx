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
    fileUploader: {
      textAreaDescription:
        'Glissez vos média ici  ou  Seletionnnez   des fichiers',
      fileAddedMessage: 'Le fichier {fileName} a été ajouté avec succès.',
      fileLimitExceedMessage:
        'Vous avez dépassé le nombre maximum autorisé de fichiers. Seulement {filesLimit} permis.',
      fileRemovedMessage: 'Le fichier {fileName} a été supprimée.',
      dropRejectMessage: 'Le fichier {fileName} a été rejeté.',
    },
  },
});
