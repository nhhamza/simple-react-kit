// ES6 module syntax
import LocalizedStrings from 'react-localization';

export default new LocalizedStrings({
  fr: {
    header: {
      home: 'Home',
      about: 'About',
      users: 'Users',
    },
    counter: {
      numbers: 'Numbers: {number}',
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
