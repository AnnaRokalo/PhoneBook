import { CREATE_PHONE, DELETE_PHONE  } from '../actions/index';


const localStoragePhoneBook = JSON.parse(window.localStorage.getItem('phoneBook'));

const INITIAL_STATE = localStoragePhoneBook ? localStoragePhoneBook.phones :  {
    all: [
      {id: 1, Name: 'Harry Potter', phoneNumber: '+375-29-390-00-69', img: '/images/users-avatars/boy-with-glasses.svg'},
      {id: 2, Name: 'Hanry Swan', phoneNumber: '+375-29-393-30-63', img: '/images/users-avatars/boy.svg'},
      {id: 3, Name: 'Marta Jones', phoneNumber: '+375-29-490-03-19', img: ''},
      {id: 4, Name: 'Jassica Jane', phoneNumber: '+375-29-391-13-60', img: '/images/users-avatars/girl-with-bangs.svg'},
      {id: 5, Name: 'Mike Low', phoneNumber: '+375-29-777-00-00', img: '/images/users-avatars/boy-in-hat.svg'},
      {id: 6, Name: 'Nick Reeksby', phoneNumber: '+375-29-676-70-69', img: '/images/users-avatars/man.svg'},
      {id: 7, Name: 'Jhoan Alba', phoneNumber: '+375-29-370-20-12', img: '/images/users-avatars/girl.svg'}
    ]
  };



export default function (state = INITIAL_STATE, action) {
  switch(action.type) {

    case CREATE_PHONE: {
      let id = new Date().getUTCMilliseconds();
      let addPhone = {
        id: id,
        Name: action.payload.contactName,
        phoneNumber: action.payload.phoneNumber,
        img: action.payload.img
      };
      let phones = state.all.concat(addPhone);

      return {...state, all: phones};
    }

    case DELETE_PHONE: {
      let phones = state.all.slice();
      for( let i=0; i <  phones.length; i++) {
        if(phones[i].id === +action.payload) {
          phones.splice(i, 1);
          return {...state, all: phones};
        }
      }
      return {...state, all: phones};
    }

    default:
      return state;
  }
}