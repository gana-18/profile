let Bio = [
    {
        name:"Gana Sai Teja",
        college:"BIT Mesra",
        cgpa:8.4,
        course: [
          {
             major:"Production Engineering",
             minor:"Computer Science"
          }
        ]
    }
];
let bioElement = document.querySelector(".sub");
let bioJson = JSON.stringify(Bio, null, 2);
bioElement.textContent = bioJson;
