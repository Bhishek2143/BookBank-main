const menuBtn = document.querySelector(".menu-icon span");
const searchBtn = document.querySelector(".search-icon");
const cancelBtn = document.querySelector(".cancel-icon");
const items = document.querySelector(".nav-items");
const form = document.querySelector("form");



menuBtn.onclick = ()=>{
  items.classList.add("active");
  menuBtn.classList.add("hide");
  searchBtn.classList.add("hide");
  cancelBtn.classList.add("show");
}



cancelBtn.onclick = ()=>{
  items.classList.remove("active");
  menuBtn.classList.remove("hide");
  searchBtn.classList.remove("hide");
  cancelBtn.classList.remove("show");
  form.classList.remove("active");
  cancelBtn.style.color = "#ff3d00";
}



searchBtn.onclick = ()=>{
  form.classList.add("active");
  searchBtn.classList.add("hide");
  cancelBtn.classList.add("show");
}




const BOOKS_DATA = [
   {
     id: 1,
     sem: '1',
     items: [
       {
         id: 1,
       },
       {
         id: 2,
       },
       {
         id: 3,
       },
       {
        id: 4,
       },
       {
        id: 5,
       },
       {
        id: 6,
       },
       {
           id: 7,
       },
       {
           id: 8,
       },
       {
           id: 9,

       },
     {
         id: 10,
     },
     {
         id: 11,
     },
     {
         id: 12,
     },
    ]
  },
     {
     id: 2,
     sem: '2',
     items: [
       {
           id: 13,
       },
       {
           id: 14,
       },
       {
           id: 15,
       },
       {
           id: 16,
       },
       {
           id: 17,
       },
       {
           id: 18,
       },
       {
           id: 19,
       },
       {
         id: 20,
       },
       {
        id: 21,
      },
      {
        id: 22,
      },
      {
        id: 23,
      },
      {
        id: 24,
      },
      {
        id: 25,
      },
     ]
   },
//   {
//     id: 3,
//     sem: '3',
//     items: [
//       {
//         id: 18,
//         name: 'bookname',
//         Url: 'drive ka url likh diyo aise hr jagah',
//         category: 'subject ka naam likh diyo aise hr jagah'
//       },
//       {
//         id: 19,
//         name: 'bookname',
//         Url: 'drive ka url likh diyo aise hr jagah',
//         category: 'subject ka naam likh diyo aise hr jagah'
//       },
//       {
//         id: 20,
//         name: 'bookname',
//           Url: 'drive ka url likh diyo aise hr jagah',
//           category: 'subject ka naam likh diyo aise hr jagah'
//       },
//       {
//         id: 21,
//         name: 'bookname',
//           Url: 'drive ka url likh diyo aise hr jagah',
//           category: 'subject ka naam likh diyo aise hr jagah'
//       },
//       {
//         id: 22,
//         name: 'bookname',
//           Url: 'drive ka url likh diyo aise hr jagah',
//           category: 'subject ka naam likh diyo aise hr jagah'
//       }
//     ]
//   },
//   {
//     id: 4,
//     sem : '4',
//     items: [
//       {
//         id: 23,
//         name: 'bookname',
//           Url: 'drive ka url likh diyo aise hr jagah',
//           category: 'subject ka naam likh diyo aise hr jagah'
//       },
//       {
//         id: 24,
//         name: 'bookname',
//         Url: 'drive ka url likh diyo aise hr jagah',
//         category: 'subject ka naam likh diyo aise hr jagah'
//       },
//       {
//         id: 25,
//         name: 'bookname',
//           Url: 'drive ka url likh diyo aise hr jagah',
//           category: 'subject ka naam likh diyo aise hr jagah'
//       },
//       {
//         id: 26,
//         name: 'bookname',
//         Url: 'drive ka url likh diyo aise hr jagah',
//         category: 'subject ka naam likh diyo aise hr jagah'
//       },
//       {
//         id: 27,
//         name: 'bookname',
//         Url: 'drive ka url likh diyo aise hr jagah',
//         category: 'subject ka naam likh diyo aise hr jagah'
//       },
//       {
//         id: 28,
//         name: 'bookname',
//         Url: 'drive ka url likh diyo aise hr jagah',
//         category: 'subject ka naam likh diyo aise hr jagah'
//       },
//       {
//         id: 29,
//         name: 'bookname',
//           Url: 'drive ka url likh diyo aise hr jagah',
//           category: 'subject ka naam likh diyo aise hr jagah'
//       }
//     ]
//   },
//   {
//     id: 5,
//     sem: '5',
//     items: [
//       {
//         id: 30,
//         name: 'bookname',
//         Url: 'drive ka url likh diyo aise hr jagah',
//         category: 'subject ka naam likh diyo aise hr jagah'
//       },
//       {
//         id: 31,
//         name: 'bookname',
//           Url: 'drive ka url likh diyo aise hr jagah',
//           category: 'subject ka naam likh diyo aise hr jagah'
//       },
//       {
//         id: 32,
//         name: 'bookname',
//           Url: 'drive ka url likh diyo aise hr jagah',
//           category: 'subject ka naam likh diyo aise hr jagah'
//       },
//       {
//         id: 33,
//         name: 'bookname',
//         Url: 'drive ka url likh diyo aise hr jagah',
//         category: 'subject ka naam likh diyo aise hr jagah'
//       },
//       {
//         id: 34,
//         name: 'bookname',
//           Url: 'drive ka url likh diyo aise hr jagah',
//           category: 'subject ka naam likh diyo aise hr jagah'
//       },
//       {
//         id: 35,
//         name: 'bookname',
//           Url: 'drive ka url likh diyo aise hr jagah',
//           category: 'subject ka naam likh diyo aise hr jagah'
//       }
//     ]
//   }
// ];


// function myFunction() 
// {
//   // Declare variables
//   var input, filter, ul, li, a, i, txtValue;
//   search = document.getElementsByClassName('search-data');
//   filter = input.value.toUpperCase();
//   container = document.getElementsByClassName("container-fluid");
//   div = container.getElementsByTagName('div');

//   // Loop through all list items, and hide those who don't match the search query
//   for (i = 0; i < div.length; i++) 
//     {
//     a = div[i].getElementsByTagName("a")[0];
//     txtValue = a.textContent || a.innerText;
//     if (txtValue.toUpperCase().indexOf(filter) > -1) 
//       {
//       div[i].style.display = "";
//       } 
//     else 
//       {
//       div[i].style.display = "none";
//       }
//     }
// }
  ]
