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
    },
  },
});
