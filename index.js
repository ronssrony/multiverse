//prevent right button menu from website 
document.addEventListener('contextmenu',function(e){
  e.preventDefault(); 
}) ;

 console.log("Hello merge");



//showcase of product 
var addproduct = [
  {prodName:"Titan Watch" , prodPrice:"15,000" ,prodImg:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  {prodName:"Sunglass" , prodPrice:"7,500" ,prodImg:"https://images.unsplash.com/photo-1509695507497-903c140c43b0?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  {prodName:"Bingo Headphone" , prodPrice:"10,000" ,prodImg:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  {prodName:"Sneaker" , prodPrice:"30,700" ,prodImg:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  {prodName:"Kariz Natural" , prodPrice:"4,500" ,prodImg:"https://images.unsplash.com/photo-1599360889420-da1afaba9edc?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  {prodName:"Boxed Water" , prodPrice:"9,000" ,prodImg:"https://images.unsplash.com/photo-1627483262273-01fd51e8b225?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  {prodName:"Polaroid camera" , prodPrice:"10,500" ,prodImg:"https://images.unsplash.com/photo-1516962126636-27ad087061cc?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  {prodName:"Toy Car" , prodPrice:"9,000" ,prodImg:"https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  {prodName:"White Shoe" , prodPrice:"15,000" ,prodImg:"https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  {prodName:"Classic Watch" , prodPrice:"7,500" ,prodImg:"https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  {prodName:"Sneaker" , prodPrice:"25,000" ,prodImg:"https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  {prodName:"By-cycle" , prodPrice:"27,000" ,prodImg:"https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?q=80&w=2022&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  {prodName:"Leather Shoe" , prodPrice:"22,000" ,prodImg:"https://images.unsplash.com/photo-1560343090-f0409e92791a?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  {prodName:"Coke" , prodPrice:"100" ,prodImg:"https://images.unsplash.com/photo-1554866585-cd94860890b7?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  {prodName:"Smartwatch g4" , prodPrice:"15,999" ,prodImg:"https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  {prodName:"Jenuin" , prodPrice:"700" ,prodImg:"https://images.unsplash.com/photo-1570831739435-6601aa3fa4fb?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  {prodName:"Mark Watch" , prodPrice:"5,750" ,prodImg:"https://images.unsplash.com/photo-1522115174737-2497162f69ec?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fHByb2R1Y3R8ZW58MHx8MHx8fDI%3D"},
  {prodName:"Alexa" , prodPrice:"12,000" ,prodImg:"https://images.unsplash.com/photo-1543512214-318c7553f230?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  {prodName:"Asus 15cu05" , prodPrice:"70,000" ,prodImg:"https://images.unsplash.com/photo-1542598953-41310c43f54b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  {prodName:"Sneaker Blue" , prodPrice:"10,000" ,prodImg:"https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} 
]



//shuffle
var shuficon= document.querySelector('#shuficon') ;
shuficon.addEventListener('click',function(){
      for(let i = addproduct.length-1 ; i>0 ; i--)
      {
        let k = Math.floor(Math.random()*(i+1)) ;
        let e = addproduct[i] ;
        addproduct[i] = addproduct[k] ;
        addproduct[k] = e ;
      }
      addProduct() ;
      
})  


//sorted by name
var sortedbyName = document.querySelector('#atob') ;
sortedbyName.addEventListener('click',function(){
    addproduct.sort(function(a,b){
         if(a.prodName>b.prodName){return 1}  ;
         if(a.prodName<b.prodName){return -1} ;
         return 0; 
    })
   
    addProduct(); 
})


//shorted by price
var sortedbyPrice =document.querySelector('#minitomax') ; 
sortedbyPrice.addEventListener('click',function(){
  addproduct.sort(function(a,b){
    let x = Number(a.prodPrice.replace(',','')) ;
    let y = Number(b.prodPrice.replace(',','')) ;
    return x-y ;
})

addProduct(); 
})

//wheel event on showcase
var Showcase = document.querySelector('#showcase') ;
Showcase.addEventListener('wheel',function(item){
    if(item.deltaY>0)
    {
      let startelement = addproduct[0] ;
      addproduct.shift() ;
      addproduct.push(startelement); 
    }
    else {
      let e=addproduct.length; 
      let startelement = addproduct[e-1] ;
      addproduct.pop() ;
      addproduct.unshift(startelement); 
    }
    var clutter = ` <div id="showitem">
    <img src="${addproduct[0].prodImg}" alt="">
    <div id="detail">
      <p style="font-weight:600;">${addproduct[0].prodName}</p>
      <p>&#36; ${addproduct[0].prodPrice}</p>
    </div>
 </div>`
  document.querySelector('#clutter').innerHTML=clutter ;  

      addProduct() ;
})


//zoom_in_out
var clutter = document.querySelector('#clutter') ;
var sum =1 ;
clutter.addEventListener('wheel',function(item){
     var img = document.querySelector('#clutter img') ;
     
      sum = sum+(item.deltaY * -0.001) ;
      if(sum>1.4)
        {
          sum=1.4
        }
      else if(sum<.7)
      {
        sum = .7 ;
      }
      img.style.transform =`scale(${sum})` ;
      img.style.transition = '.4s'
})


//add product in showcase
var quantity = new Object() ;
function addProduct(){
  var Showcase = document.querySelector('#showcase') ;
var clutter = "" ;
addproduct.forEach(function(obj,ind){
clutter +=` <div id="${ind}" class="item">
           <div id="itemimg">
            <img name="${obj.prodName}" price="${obj.prodPrice}" src="${obj.prodImg}" alt="">
           </div>
           <div id="price">
              <p>&#36; ${obj.prodPrice}</p>
              <button id="${ind}">+</button>
           </div>
         </div>`
})
Showcase.innerHTML =clutter ;



}
addProduct() ;




//suggetion bar
var focusbar = document.querySelector('#additems form input') ;
console.log(focusbar)
focusbar.addEventListener('input',function(){
    var searchbar = addproduct.filter(function(item){
         return item.prodName.toLocaleLowerCase().includes(`${focusbar.value}`)
    })
        var searchitems = ''
    searchbar.forEach(function(item){
        searchitems +=`<div id="result">
             <div id="resultimg">
                  <img src="${item.prodImg}" alt="">
             </div>
             <p>${item.prodName}</p>
          </div>`
    })
    if(focusbar.value)
    {
      document.querySelector('#resultwrapper').innerHTML = searchitems ;
    }
    else
    {
      document.querySelector('#resultwrapper').innerHTML=`` ;
    }

}
)


//to hide sideimage
document.querySelector('#shoppinglist').addEventListener('click',function(item){
     if(item.target.getAttribute('id')=='shoppinglist')
     {
      document.querySelector('#clutter').style.display ='none' ;
   
     }
})
document.querySelector("#additems").addEventListener('click',function(){
  document.querySelector('#clutter').style.display ='none' ;
})

//addtocart from suggetionbar
var searchbar = document.querySelector('#searchbar') ; 
searchbar.addEventListener('click',function(item){
  document.querySelector('#resultwrapper').innerHTML=`` ;
  document.querySelector('#textarea').value = ``; 
      if(item.target.nodeName='div')
      {  
      
        var content=item.target.children[1].textContent ;
        if(content)
          {
          var itemname = document.createElement('h2') ;
          itemname.innerHTML=content ;
          
          if(! quantity[content])
          {
            quantity[content]=0 ;
            var parent = document.querySelector('#item')
            var button = document.createElement('button') ;
            button.innerHTML = 'Delete' ; 
            var div = document.createElement('div') ;
            div.id = 'lineitem' ; 
            var contentclass=content.split(' ').join("") ;
            div.setAttribute('class',contentclass) ;
            var volume = document.createElement('p') ;
            var contentclass=content.split(' ').join("") ;
            div.append(itemname) ;
            div.append(volume) ;
            div.append(button) ;
            parent.append(div) ; 
            quantity[content]++ ;
          }
          else
          { 
            var contentclass=content.split(' ').join("") ;
             var volume =document.querySelector(`.${contentclass} p`);
            quantity[content]++ ;
            volume.innerHTML =`<i class="ri-close-fill"></i>${quantity[content]}` ;
            itemname.after(volume);
          }
         
        } 
      }
      var delbuttons = document.querySelectorAll('#lineitem button') ; 

      for(let e of delbuttons)
      {
        e.addEventListener('click',function(){
           e.parentNode.remove()  ;
           
           quantity[e.previousElementSibling.previousElementSibling.innerHTML] = NaN ;
        })
      }


})


//to show image at sidebar
var addtocart = document.querySelector('#showcase') ;
addtocart.addEventListener('click',function(item){
        if(item.target.nodeName=='IMG')
        {
         
          var clutter = ` <div id="showitem">
            <img src="${item.target.getAttribute('src')}" alt="">
            <div id="detail">
              <p style="font-weight:600;">${item.target.getAttribute('name')}</p>
              <p>&#36; ${item.target.getAttribute('price')}</p>
            </div>
         </div>`
          document.querySelector('#clutter').innerHTML=clutter ;
          document.querySelector('#clutter').style.display ='block' ;
        }
        else {
          document.querySelector('#clutter').style.display ='none' ;
        }
      
})


//addtocart from showcase button
addtocart.addEventListener('click',function(item){
     if(item.target.nodeName=='BUTTON') 
      {
       var content = item.target.parentNode.previousElementSibling.firstElementChild.getAttribute('name') ;
      
       if(content)
        {
        var itemname = document.createElement('h2') ;
        itemname.innerHTML=content ;
        
        if(! quantity[content])
        {
          quantity[content]=0 ;
          var parent = document.querySelector('#item')
          var button = document.createElement('button') ;
          button.innerHTML = 'Delete' ; 
          var div = document.createElement('div') ;
          div.id = 'lineitem' ; 
          var contentclass=content.split(' ').join("") ;
          div.setAttribute('class',contentclass) ;
          var volume = document.createElement('p') ;
          var contentclass=content.split(' ').join("") ;
          div.append(itemname) ;
          div.append(volume) ;
          div.append(button) ;
          parent.append(div) ; 
          quantity[content]++ ;
        }
        else
        { 
          var contentclass=content.split(' ').join("") ;
           var volume =document.querySelector(`.${contentclass} p`);
          quantity[content]++ ;
          volume.innerHTML =`<i class="ri-close-fill"></i>${quantity[content]}` ;
          itemname.after(volume);
        }
       
      } 
    }
    
    var delbuttons = document.querySelectorAll('#lineitem button') ; 

       for(let e of delbuttons)
       {
         e.addEventListener('click',function(){
            e.parentNode.remove()  ;
            
            quantity[e.previousElementSibling.previousElementSibling.innerHTML] = NaN ;
         })
       }
})


//addtocart from input
var shoppinglist = document.querySelector('#submit') ;

shoppinglist.addEventListener('click',function(event)

{    
  document.querySelector('#resultwrapper').innerHTML=`` ;
    event.preventDefault();
    document.querySelector('#textarea').focus()
    var content= document.querySelector('#textarea').value ; 
    if(content)
    {
    var itemname = document.createElement('h2') ;
    itemname.innerHTML=content ;
    
    if(! quantity[content])
    {
      quantity[content]=0 ;
      var parent = document.querySelector('#item')
      var button = document.createElement('button') ;
      button.innerHTML = 'Delete' ; 
      var div = document.createElement('div') ;
      div.id = 'lineitem' ; 
      div.setAttribute('class',content) ;
      var volume = document.createElement('p') ;
      div.append(itemname) ;
      div.append(volume) ;
      div.append(button) ;
      parent.append(div) ; 
      console.log(div)
      quantity[content]++ ;
    }
    else
    {
      var volume = document.querySelector(`.${content} p`) ;
      quantity[content]++ ;
      volume.innerHTML =`<i class="ri-close-fill"></i>${quantity[content]}` ;
      itemname.after(volume);
    }
   
 
   
    document.querySelector('#textarea').value = ``; 
    }
 
    var delbuttons = document.querySelectorAll('#lineitem button') ; 
    console.log(delbuttons)
       for(let e of delbuttons)
       {
         e.addEventListener('click',function(){
            e.parentNode.remove()  ;

            quantity[e.previousElementSibling.previousElementSibling.innerHTML] = NaN ;
         })
       }
 
})

//wheel event on suggetion bar
var exhibition = document.querySelector('#searchbar') ;
var slidesearch = 0 ;
exhibition.addEventListener('wheel',function(wheel){
  var wrapper = document.querySelector('#resultwrapper') ;
            if(wheel.deltaY>0)
            {
              slidesearch += wheel.deltaY*.5 ; 
              if(slidesearch>383)
              {
                slidesearch=383 ;
              }
             wrapper.style.transform =  `translateY(-${slidesearch}px)` ;
             wrapper.style.transition='.5s'
             
            }
            else 
            {
              if(slidesearch<0)
              {
                slidesearch=0 ;
              }
            slidesearch -= wheel.deltaY*-.5 ; 
             wrapper.style.transform =  `translateY(-${slidesearch}px)` ;
             wrapper.style.transition='.5s'
           
            }
})




//navigate among links 

var navlinks = document.querySelectorAll('nav ul li') ;
var border = null ;
var divlink = document.querySelectorAll('.links') ;
navlinks.forEach(function(e){
     e.addEventListener('click',function(){          
       var selelinks = e.getAttribute('value') ; 
       divlink.forEach(function(el){
          if(el.getAttribute('id')!=selelinks)
          {
            el.style.display = 'none'; 
            
          }
          else 
          {
            if(border){
              border.style.color='black' ;
            }
            el.style.display = 'block' ;
            if(el.id!='mixcards')
            {
              el.style.display ='flex'; 
            }
            e.firstChild.style.color = 'crimson'
            border = e.firstChild; 
           
          }
       })
    })
})



///Select payment Methods

document.getElementById('payment-method').addEventListener('change', function() {
    var selectElement = document.getElementById('payment-method');
    var selectedValue = selectElement.value; 
    var methods = document.querySelectorAll('.payments'); 

    for(let e of methods)
    {
        if(e.getAttribute('id')!=selectedValue)
        {
       
            e.style.display = 'none'; 
        }
        else 
        {  
            e.style.display = 'block'; 
           e.style.display ='flex';
        }
    }
})



//Music play pause 

var musiclists = document.querySelectorAll('.namelist li a') ;
var currentMusic = null ;
var nextcurrent = null ;
var playMusic = null ;
var currentlement = null ; 
var musicicon = document.querySelector('#pause i') ;
var musicimage = document.querySelector('#musicimage'); 

var musicname = null ;
musiclists.forEach(function(e) {
  e.addEventListener('click', function() {
      var selectedMusic = e.innerHTML;
       currentlement = e ;
       playMusic = new Audio(`musics/${selectedMusic}.mp3`);
      once:true ;
      if (currentMusic) {
        currentMusic.pause();    
       
      }
      musicname = selectedMusic ;
      musicimage.firstElementChild.setAttribute('src',`photos/${musicname}.jpg`)
      document.querySelector('.playpause h4').innerHTML =musicname ;
      playMusic.play();
     musicicon.setAttribute('class','ri-pause-line'); 
      currentMusic = playMusic; 

  });
});
  var pause = document.querySelector('#pause') ;
  var play = document.querySelector('#play') ; 
  var next =document.querySelector('#forward') ;
  var previous = document.querySelector('#back') ;


next.addEventListener('click',function(){
   
    var nextmusic = new Audio(`musics/${currentlement.parentNode.nextSibling.nextSibling.textContent}.mp3`);
    if(currentMusic){
      currentMusic.pause() ;
    } 
      musicname=currentlement.parentNode.nextSibling.nextSibling.textContent ;
      musicimage.firstElementChild.setAttribute('src',`photos/${musicname}.jpg`)
      document.querySelector('.playpause h4').innerHTML =musicname ;
      currentlement =currentlement.parentNode.nextSibling.nextSibling.firstChild ;
      currentMusic = nextmusic ; 
      playMusic = nextmusic ;
      musicicon.setAttribute('class','ri-pause-line');
      nextmusic.play() ;
    
 })
 previous.addEventListener('click',function(){
  
  var prevmusic = new Audio(`musics/${currentlement.parentNode.previousSibling.previousSibling.textContent}.mp3`)  ;
  if(currentMusic){
    currentMusic.pause() ;
  }
   musicname =currentlement.parentNode.previousSibling.previousSibling.textContent; 
   musicimage.firstElementChild.setAttribute('src',`photos/${musicname}.jpg`); 
   document.querySelector('.playpause h4').innerHTML =musicname ;
    currentlement =currentlement.parentNode.previousSibling.previousSibling.firstChild ;
    currentMusic = prevmusic ; 
    playMusic = prevmusic ;
    musicicon.setAttribute('class','ri-pause-line');
    prevmusic.play() ;
  
}
)
   pause.addEventListener('click',function(){

    if(musicicon.getAttribute('class')=='ri-pause-line')
    {
      playMusic.pause() ;
      musicicon.setAttribute('class','ri-play-line');
    }
    else 
    {
      playMusic.play() ;
      musicicon.setAttribute('class','ri-pause-line') ;
    }

   }) ;




//----------------Feture Cards------------------ 
//right  one
var tap = document.querySelector('.like') ; 
var like = document.querySelector('.like i') ;
tap.addEventListener('dblclick',function(){
   like.style.opacity = '.8'; 
   like.style.transform = 'scale(1)'

setTimeout(function(){
    like.style.opacity='0'; 
  }, 400);
setTimeout(function() {
  like.style.transform = 'scale(0)'; 
}, 1000);
})

//left  one
var addbutton = document.querySelector('.request button') ; 

addbutton.addEventListener('click', function(){ 
  if( document.querySelector('#status').innerHTML=='Friend')
  {
    document.querySelector('#status').innerHTML = 'Unknown';
   
      addbutton.innerHTML= 'Add Friend' ;
      addbutton.style.backgroundColor= 'cornflowerblue'; 
      document.querySelector('.ri-user-follow-line').setAttribute('class' ,'ri-user-add-line') ;

  
  }
  else
  {
    document.querySelector('#status').innerHTML = 'Friend';
   
    addbutton.innerHTML = 'Remove Friend';  
    addbutton.style.backgroundColor= 'crimson'; 
    document.querySelector('.ri-user-add-line').setAttribute('class' ,'ri-user-follow-line') ; 
  }
})




//--------------------Mixcardss----------------------------

//box1
var react = document.querySelector('#reactbox') ;
var box1 = document.querySelector('#box1'); 
var reactbutton= document.querySelector('#reacbutton') ;
reactbutton.addEventListener('mouseenter' ,function(){

    react.style.display ='block' ; 
    reactcard.style.display = 'none' ;
})
box1.addEventListener('mouseleave',function(){
  react.style.display ='none' ;

})


var reactions= document.querySelectorAll('.react') ;
var reactcounter = 0 ; 

reactions.forEach(function(rec){
     rec.addEventListener('click',function(){
         reactcounter++ ; 
         document.querySelector('#countbutton').innerHTML = reactcounter ;
     })
})

var countbutton = document.querySelector('#countbutton'); 
var reactcard =  document.querySelector('#reactcard') ;
countbutton.addEventListener('click', function(){
   reactcard.style.display = 'block' ;
   react.style.display ='none' ;

})

box1.addEventListener('mouseleave' ,function(){
  reactcard.style.display = 'none' ;
})



//reactcards 

var obj = {
          like: 0 ,
          haha: 0 , 
          love: 0 ,
          care: 0 ,
          sad: 0 ,
          angry: 0,
          wow: 0 
}

reactions.forEach(function(rec){
          rec.addEventListener('click',function(){ 
          obj[rec.firstElementChild.getAttribute('value')]++ ; 
         if(obj[rec.firstElementChild.getAttribute('value')]==1)
         {
            var reactcard = document.querySelector('#reactcard') ; 
            var perclick = document.createElement('div') ;
            perclick.setAttribute('class', 'perclick') ; 
            var imgicon = document.createElement('div') ;
            imgicon.setAttribute('class','imgicon') ;
            var img = document.createElement('img') ;
            img.src = `photos/${rec.firstElementChild.getAttribute('value')}.png` ;
            var p = document.createElement('p') ;
            p.setAttribute('id',`${rec.firstElementChild.getAttribute('value')}`)
            p.innerHTML = `${obj[rec.firstElementChild.getAttribute('value')]}` ;
            imgicon.appendChild(img) ;
            imgicon.appendChild(p) ;
            perclick.appendChild(imgicon) ;
            if(rec.firstElementChild.getAttribute('value')=='like')
            {
              reactcard.prepend(perclick); 
            }
            else
            {
              reactcard.appendChild(perclick) ;
            }
           
         }
         else 
         {
           var p  = document.querySelector(`#${rec.firstElementChild.getAttribute('value')}`);
           p.innerHTML =  obj[rec.firstElementChild.getAttribute('value')] ;
         }
          

          })
})


var exhibition = document.querySelector('#images') ;
var slide = 0 ;
exhibition.addEventListener('wheel',function(wheel){
  var wrapper = document.querySelector('.wrapper') ;
            
            if(wheel.deltaY>0)
            {
              slide += wheel.deltaY*.7 ; 
              
               if(slide>652)
              {
                slide = 652 ;
              }
             wrapper.style.transform =  `translate(-${slide}px)` ;
             wrapper.style.transition='.5s'
             
            }
            else 
            {
              slide -= wheel.deltaY*-.7 ; 
              if(slide<0)
              {
                slide = 0;
              }
             wrapper.style.transform =  `translate(-${slide}px)` ;
             wrapper.style.transition='.5s'
            }
})


var sectionimg = ''
for(let e = 0 ;e<9 ;e++)
{
      
     sectionimg += ` <div id="barsimg">
                      <img src="${addproduct[e].prodImg}" alt="">
                  </div> `
}

var sections = document.querySelectorAll('.sections') ;
sections.forEach(function(item){
    item.innerHTML = sectionimg ;
})

//about reverse scroll transiton 
var about = document.querySelector('#about') ;
console.log('hi')
var sectionbars = -280 ; 
var middleslide= 4  ;
about.addEventListener('wheel',function(item){
        item.preventDefault(); 
        var sidebars = document.querySelectorAll('#bars1') ;
        var middlebar = document.querySelector('#bars') ; 
        if(item.deltaY>0)
        {
           sectionbars += (item.deltaY*.3) ;
           middleslide +=(item.deltaY*-.3); 
           if(middleslide<-290){middleslide=-280}; 
           if(sectionbars>4){sectionbars=4}; 

           sidebars[0].style.transform = `translateY(${sectionbars}vw)`
            sidebars[1].style.transform = `translateY(${sectionbars}vw)`
            middlebar.style.transform =`translateY(${middleslide}vw)`
            middlebar.style.transition = `.6s`
            sidebars[0].style.transition = `.6s`
            sidebars[1].style.transition = `.6s`
        }
        else 
        { 
           sectionbars -= (item.deltaY*-0.3) ;
           middleslide +=(item.deltaY*-.3); 
           if(sectionbars<-280){sectionbars=-280}; 
           if(middleslide>4){middleslide=4}; 
           sidebars[0].style.transform = `translateY(${sectionbars}vw)`
           sidebars[1].style.transform = `translateY(${sectionbars}vw)`
           middlebar.style.transform =`translateY(${middleslide}vw)`
           middlebar.style.transition = `.6s`
           sidebars[0].style.transition = `.6s`
           sidebars[1].style.transition = `.6s`
        

        }
})

about.addEventListener('dblclick',function(){
     about.style.display = 'none' ;

     document.querySelector('#shoppinglist').style.display = 'flex';

   document.querySelector('li[value="about"] a').style.color='black'
}) ; 


