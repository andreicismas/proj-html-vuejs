new Vue({
    el: "#root",
    data: {
      
      navLinks:[
        {
          name: "HOME",
          link: "#",
          active: false,
          id:0,
        },
        {
          name: "MISSION",
          link: "#",
          active: false,
          id:1,


        },
        {
          name: "CAUSES",
          link: "#",
          active: false,
          id:2,


        },
        {
          name: "JOURNAL",
          link: "#",
          active: false,
          id:3,


        },
        {
          name: "DONATE",
          link: "#",
          active: false,
          id:4,


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

    valid:true,
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
   
    onClick(index){
      this.navLinks[index].active = !this.navLinks[index].active
    }

      
      
    },
  
    mounted() {
        
    },
  
  
  });