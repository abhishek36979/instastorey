var arr = [
  {
    dp: "https://th.bing.com/th/id/OIP.dEXsRFoeVZdB1jMNlFnrhgAAAA?rs=1&pid=ImgDetMain",
    story: "https://i0.wp.com/wallpaperaccess.com/full/2398062.jpg",
  },
   {
    dp: "https://images.hdqwalls.com/download/anime-girl-portrait-4k-r8-2160x3840.jpg",
    story: "https://i1.wp.com/p4.wallpaperbetter.com/wallpaper/675/394/504/anime-anime-girls-digital-art-artwork-2d-hd-wallpaper-preview.jpg",
  },
   {
    dp: "https://cdn.wallpapersafari.com/14/20/J1uwXP.jpg",
    story: "https://wallpapers.com/images/hd/4k-anime-iphone-fierce-armed-girl-hcmwch0etaiafgxc.jpg",
  },
  {
    dp: "https://i0.wp.com/p4.wallpaperbetter.com/wallpaper/186/251/662/anime-anime-girls-digital-art-artwork-portrait-display-hd-wallpaper-preview.jpg",
    story: "https://th.bing.com/th/id/OIP.3F_3a9p-zcI6QiqwIJAezQHaLH?rs=1&pid=ImgDetMain",
  },
  {
    dp: "https://th.bing.com/th/id/OIP.dEXsRFoeVZdB1jMNlFnrhgAAAA?rs=1&pid=ImgDetMain",
    story: "https://i0.wp.com/wallpaperaccess.com/full/2398062.jpg",
  },
];

var clutter = ""

arr.forEach(function(elem,index){
    clutter += `<div class="story">
<img src="${elem.dp}" alt="">

            </div>`
})
document.querySelector(".stories").innerHTML = clutter

document.querySelectorAll('.story').forEach((e, index) => {
  e.addEventListener('click', function() {
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = 0;
    overlay.style.left = 0;
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.background = 'rgba(0,0,0,0.9)';
    overlay.style.display = 'flex';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';
    
    overlay.innerHTML = `<img src="${arr[index].story}" style="max-height:90%; max-width:90%; border-radius:10px;">`;
    overlay.addEventListener('click', () => overlay.remove() );
    document.body.appendChild(overlay);
    
  });
});
 const card = document.querySelector(".card")
// var btn = document.querySelector(".btn")
// btn.addEventListener("click",function () {
//   card.style.background
//   ="white";
  
  
// })

const btn = document.querySelector(".btn");
const stories =document.querySelector(".stories")

btn.addEventListener("click", function () {
  // Toggle light class on body
  document.body.classList.toggle("light-mode");

  if (document.body.classList.contains("light-mode")) {
    btn.textContent = "DARK";
    btn.style.backgroundColor = "black";
    btn.style.color = "white";
    card.style.backgroundColor="white"
    stories.style.backgroundColor="white"
    
  } else {
    btn.textContent = "LIGHT";
    btn.style.backgroundColor = "white";
    btn.style.color = "black";
    card.style.backgroundColor="black"
    stories.style.backgroundColor="black"
  }
});
