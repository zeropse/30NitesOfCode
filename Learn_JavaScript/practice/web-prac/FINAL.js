const memeArray = [
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.UvnCE3rFETTrHEF70xkUQQHaFE%26pid%3DApi&f=1&ipt=93b4526a8ef8dd64a934262064f8de5fc542cfa04f4ca7e7fb7b3291d50f88f3&ipo=images",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.UwzSzrQjalSvWAhFQVWxqQHaHo%26pid%3DApi&f=1&ipt=4b3ef9b471e31b9f8b88fe13d08a2b594c9f6f3ac6b1a77cf0c8e2e94173d911&ipo=images",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.AX7cvMbVhIirubvT7KnGcQHaHa%26pid%3DApi&f=1&ipt=b43b2d85171513ccb1e8093f382e664cc61e415f680ed6d2f225d32547dc2ade&ipo=images",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.tDNTdGLHOc4aTXmA2b4KkgHaHa%26pid%3DApi&f=1&ipt=ce2e7f2d39ccec1bdcafd389d0f054517f1cf73eface7b2cba9f16f344173df7&ipo=images"
  ];
  
  
  
  
  const captionsArray = [
    "Life is short. Smile while you still have teeth.",
    "I’m on a seafood diet. I see food and I eat it.",
    "If we were on a sinking ship, I’d want to be on the lifeboat with you.",
    "I’m not arguing, I’m just explaining why I’m right.",
    "I’m not lazy, I’m on energy-saving mode.",
    "Do I run? Yes, out of time, patience, and money.",
    "I’d agree with you, but then we’d both be wrong.",
    "You couldn’t handle me even if I came with instructions.",
    "I’m not a morning person. I’m a coffee person.",
    "I’m not great at the advice. Can I interest you in a sarcastic comment?"
  ];


let img = document.getElementById("random-meme");

let h2 = document.getElementById("random-caption");

let btn = document.getElementById("generator-button");

btn.addEventListener("click", function(){
    let randomIndex = Math.floor(Math.random() * captionsArray.length);
    let randomCaption = captionsArray[randomIndex];
    h2.innerText = randomCaption;
    
    let randomIndexImg = Math.floor(Math.random() * memeArray.length);
    let randomMeme = memeArray[randomIndexImg];
    
    img.src = randomMeme;

});