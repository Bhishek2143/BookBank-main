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
         name: 'Introduction to Electrodynamics(3rd-Edition) by David-J-Griffith',
         Url: 'https://drive.google.com/file/d/0B6eUQ5fyKy1FNWFiQ1FYdTJTS28/view?usp=sharing&resourcekey=0-hfxjjwj8BWhbJ6pjb7XWrw',
         category: 'Applied Physics - 01'
       },
       {
         id: 2,
         name: 'Optics by Ajay Ghatak',
         Url: 'https://drive.google.com/file/d/0B6eUQ5fyKy1FVjZhQmtRSjRJMjg/view?usp=sharing&resourcekey=0-k1hzufkhRg-drum5RpSLLg',
         category: 'Applied Physics - 01'
       },
       {
         id: 3,
         name: 'The Physics of Vibrations and Waves(6th-Edition) by H.J. Pain',
         Url: 'https://drive.google.com/file/d/0B6eUQ5fyKy1Fc1R3cE11UHVXQVE/view?usp=sharing&resourcekey=0-MXX5gd7_9UpjAnW5IYZvMA',
         category: 'Applied Physics - 01'
       },
       {
        id: 4,
        name: 'C-The Complete Reference by Herbert Schildt',
        Url: 'https://drive.google.com/file/d/0B6eUQ5fyKy1Fem1GSEVaaWZDM1U/view?usp=sharing&resourcekey=0-9LRKGHCYS47nEndAS81IIg',
        category: 'Computer Programming'
       },
       {
        id: 5,
        name: 'Let-Us-C by Yashwant Kanetkar',
        Url: 'https://drive.google.com/file/d/0B2y0Hk5queJBdU9rdlYwZ04xNHc/view?usp=sharing&resourcekey=0-SyhFHhOtL-dI_QArIdatAA',
        category: 'Computer Programming'
       },
       {
        id: 6,
        name: 'The C-Programming-Language By Brian W. Kernighan and Dennis M. Ritchie',
        Url: 'https://drive.google.com/file/d/0B2y0Hk5queJBaGZyMUFNbTU4aVk/view?usp=sharing&resourcekey=0-TmSSTHWRCz0kk_jwqnaOGw',
        category: 'Computer Programming'
       },
       {
           id: 7,
           name: 'Advanced Engineering Mathematics by Erwin Kreyszig',
           Url: 'https://drive.google.com/file/d/0B6eUQ5fyKy1FMGp4SWN3RnR0ZGs/view?usp=sharing&resourcekey=0-JanAMTWcndO8EinRtijxXw',
           category: 'Applied Mathematics - 01'
       },
       {
           id: 8,
           name: 'Calculus-Unlimited by Jerrold-Marsden & Alan-Weinstein',
           Url: 'https://drive.google.com/file/d/0B6eUQ5fyKy1FVFU2cE9SdUVJRms/view?usp=sharing&resourcekey=0-XxS927NK_g0b1UGrT6ZyNg',
           category: 'Applied Mathematics - 01'
       },
       {
           id: 9,
           name: 'Thomas Calculus(11th-Edition) by Rana Adnan',
           Url: 'https://drive.google.com/file/d/0B6eUQ5fyKy1FUXkwNFg2RC00M0k/view?usp=sharing&resourcekey=0-bzmuEdzPDzErdUtlf0TgnQ',
           category: 'Applied Mathematics - 01'
       },
     {
         id: 10,
         name: 'Electrical-Technology(Vol.1) by B.L.Thareja & A.K.Thareja',
         Url: 'https://drive.google.com/file/d/0B6eUQ5fyKy1Fd1IyT1VnVUJsdTA/view?usp=sharing&resourcekey=0-_Y585teCgmm-3cfWEM2OTw',
         category: 'Basic Electrical Engineering'
     },
     {
         id: 11,
         name: 'Basic-ELectrical-Engineering(4th Edition) by C.L.Wadhwa',
         Url: 'https://drive.google.com/file/d/0B6eUQ5fyKy1FaWkzcmxrN3B1V28/view?usp=sharing&resourcekey=0-YyyLe_bWyvAewP3JMinSNQ',
         category: 'Basic Electrical Engineering'
     },
     {
         id: 12,
         name: 'Engineering-Electronics by McGrawl Hill',
         Url: 'https://drive.google.com/file/d/0B6eUQ5fyKy1FdnlMRm9JZEtSMXM/view?usp=sharing&resourcekey=0-6mI3SdMGq4eOR28UNh6Deg',
         category: 'Basic Electrical Engineering'
     },
    ]
  },
     {
     id: 2,
     sem: '2',
     items: [
       {
           id: 13,
           name: 'Concept of Modern Physics(6th Edition) by Arthur Beiser',
           Url: 'https://drive.google.com/file/d/0B6eUQ5fyKy1FZ1NBSy1SYTlPZUU/view?usp=sharing&resourcekey=0-k_A5ptAP8Lok6gkOwbjUuQ',
           category: 'Applied Physics - 02'
       },
       {
           id: 14,
           name: 'The Physics of Vibrations and Waves(6th-Edition) by H.J. Pain',
           Url: 'https://drive.google.com/file/d/0B6eUQ5fyKy1Fc1R3cE11UHVXQVE/view?usp=sharing&resourcekey=0-MXX5gd7_9UpjAnW5IYZvMA',
           category: 'Applied Physics - 02'
       },
       {
           id: 15,
           name: 'Waves and Oscillations by Mathew Jones',
           Url: 'https://drive.google.com/file/d/0B6eUQ5fyKy1FX3dJNVdUU3RaUmc/view?usp=sharing&resourcekey=0-W31anS-tJkp4Q6I6qYsN_Q',
           category: 'Applied Physics - 02'
       },
       {
           id: 16,
           name: 'Advanced Engineering Mathematics by Erwin Kreyszig',
           Url: 'https://drive.google.com/file/d/0B6eUQ5fyKy1FMGp4SWN3RnR0ZGs/view?usp=sharing&resourcekey=0-JanAMTWcndO8EinRtijxXw',
           category: 'Applied Mathematics - 02'
       },
       {
           id: 17,
           name: 'Engineering Chemistry by Jain&Jain Brothers',
           Url: 'https://drive.google.com/file/d/0B6eUQ5fyKy1FUXdXc1JPZ1B5Mms/view?usp=sharing&resourcekey=0-WaCM7vCSh8ygUXalTLwWig',
           category: 'Applied Chemistry'
       },
       {
           id: 18,
           name: 'Schaums College Chemistry(8th-Edition)',
           Url: 'https://drive.google.com/file/d/0B6eUQ5fyKy1FVkdUTTloYWQ4Q0E/view?usp=sharing&resourcekey=0-M_Ti4gsmnP1IQvYefJUtgA',
           category: 'Applied Chemistry'
       },
       {
           id: 19,
           name: 'Quantitative Chemical Analysis(5th-Edition)',
           Url: 'https://drive.google.com/file/d/0B6eUQ5fyKy1FX3lDbG9GajcwWlk/view?usp=sharing&resourcekey=0-lbm2TymtIljRYCzzkOm7Rg',
           category: 'Applied Chemistry'
       },
       {
         id: 20,
         name: 'Fluid Mechanics & Hydraulic Machines by R.K. Bansal',
         Url: 'https://drive.google.com/file/d/0B6eUQ5fyKy1FSEpGNUpGaXhyR1U/view?usp=sharing&resourcekey=0-S5uoeBPQIjJQeVnl_MFS-Q',
         category: 'Basic Mechanical Engineering'
       },
       {
        id: 21,
        name: 'Engineering Thermodynamics by P.K.NAG',
        Url: 'https://drive.google.com/file/d/0B6eUQ5fyKy1FT2QzMXRocGJIWjA/view?usp=sharing&resourcekey=0-y8mXVeLdNI0Tq_ugg7lJLA',
        category: 'Basic Mechanical Engineering'
      },
      {
        id: 22,
        name: 'Fundamentals of Thermodynamics by Claus Borgnakke',
        Url: 'https://drive.google.com/file/d/0B6eUQ5fyKy1FQVlOYzg5VmRMOGs/view?usp=sharing&resourcekey=0-FE96MmTmPP6WjyIDfEj5lQ',
        category: 'Basic Mechanical Engineering'
      },
      {
        id: 23,
        name: 'Introduction to Basic Manufacturing Processes & Workshop Technology by Rajendra Singh',
        Url: 'https://drive.google.com/file/d/0B6eUQ5fyKy1FTFZyUmRGNmZtWms/view?usp=sharing&resourcekey=0-dmd-c3gsQILX3CM7C6xyww',
        category: 'Workshop Practice'
      },
      {
        id: 24,
        name: 'Engineering Metrology & Instrumentation',
        Url: 'https://drive.google.com/file/d/0B6eUQ5fyKy1FT2daUEhuNXlqN0U/view?usp=sharing&resourcekey=0-gESZ1uokFQpI94iWHFYwfw',
        category: 'Workshop Practice'
      },
      {
        id: 25,
        name: 'Workshop Manuals',
        Url: 'https://drive.google.com/drive/folders/1_5GOXzpgzCHRbhlg0oO2Dka0tfHFmnjR?usp=sharing',
        category: 'Workshop Practice'
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
