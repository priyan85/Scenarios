
@import sharedObjects.spec


= Placement =
    @on desktop
        
        planAndBookBlock :
            inside headerBar ~60px left
        manageYourBookingBlock :
            inside headerBar >200px left
        serviceBlock :
            inside headerBar >490px left
            
= Height and Width =
    @on desktop
        
        planAndBookBlock :
            height ~ 35px
            width > 100px
        manageYourBookingBlock :
            height > 30px
            width > 200px
            
        serviceBlock :
            height ~ 36px
            width > 90px

= Relative location =
    @on desktop
        
        planAndBookBlock :
            left-of manageYourBookingBlock 20px
        manageYourBookingBlock :
            left-of serviceBlock 20px
            right-of planAndBookBlock 20px          
        serviceBlock :
            right-of manageYourBookingBlock 20px
            
            
= Colour =
    @on desktop
        
        planAndBookBlock: 
            color-scheme  >50% white
        manageYourBookingBlock: 
            color-scheme  >50 % white       
        serviceBlock:
            color-scheme  >50% white
            
       
