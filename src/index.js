import Swal from 'sweetalert2';

const firstName = 'Gray';
const lastName = 'Monk';
const userAge = 44;

// use template string
let result = `${firstName} ${lastName} is ${userAge} now`;
Swal.fire(result);

// Swal.fire({
//   title: 'Submit your Github username',
//   input: 'text',
//   inputAttributes: {
//     autocapitalize: 'off'
//   },
//   showCancelButton: true,
//   confirmButtonText: 'Look up',
//   showLoaderOnConfirm: true,
//   preConfirm: login => {
//     return fetch(`//api.github.com/users/${login}`)
//       .then(response => {
//         if (!response.ok) {
//           throw new Error(response.statusText);
//         }
//         return response.json();
//       })
//       .catch(error => {
//         Swal.showValidationMessage(`Request failed: ${error}`);
//       });
//   },
//   allowOutsideClick: () => !Swal.isLoading()
// }).then(result => {
//   if (result.value) {
//     Swal.fire({
//       title: `${result.value.login}'s avatar`,
//       imageUrl: result.value.avatar_url
//     });
//   }
// });
