new Vue({
    el: "#root",
    data: {
      
      navLinks:[
        {
          name: "HOME",
          link: "#",
        },
        {
          name: "MISSION",
          link: "#",
        },
        {
          name: "CAUSES",
          link: "#",
        },
        {
          name: "JOURNAL",
          link: "#",
        },
        {
          name: "DONATE",
          link: "#",
        },

      ],

      myImages: [
        { file: 'public/images/avada-charity-shelter-featured-400x300.jpg' },
        { file: 'public/images/avada-charity-farming-featured-400x300.jpg' },
        { file: 'public/images/avada-charity-shelter-featured-400x300.jpg' },
        { file: 'public/images/avada-charity-vaccines-featured-400x300.jpg' },
        { file: 'public/images/avada-charity-fair-trade-featured-400x300.jpg' },
        { file: 'public/images/avada-charity-farming-featured-400x300.jpg' },
        { file: 'public/images/avada-charity-shelter-featured-400x300.jpg' },
        { file: 'public/images/avada-charity-vaccines-featured-400x300.jpg' },

    ],

  
    
    socialLinkList:[
      {
          text: "-facebook-f", 
          link: "https://www.facebook.com/"
      }, 
      {
          text: "-twitter", 
          link: "https://www.twitter.com"
      }, 
      {
          text: "-youtube", 
          link: "https://www.youtube.com"
      }, 
      {
          text: "-instagram", 
          link: "https://www.instagram.com"
      }, 
  ],
  

    
    imgDefault:0, 
    intervalImg: null,
    counterImg: 0,
    },

    
    
    methods: {
      
      rightClick(){
  
        let newIndex = this.imgDefault + 1
        let limite = (this.myImages.length -1)
  
        if(newIndex > limite){
         newIndex = 0
        }
        this.imgDefault = newIndex
     },
        
    leftClick(){
        
         let newIndex = this.imgDefault - 1
         let limite = 0
  
         if(newIndex < limite ){
            newIndex = (this.myImages.length - 1)
         }
         this.imgDefault = newIndex     
    },
    setTimer(){
      this.counterImg += 1

      if (this.counterImg % 2 !== 0){
          this.intervalImg = setInterval(this.rightClick, 2000);
      } else{
          clearInterval(this.intervalImg)
      }
  },
      
      
    },
  
    mounted() {
        
    },
  
  
  });