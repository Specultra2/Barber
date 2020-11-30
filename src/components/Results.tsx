import { IonAvatar, IonButton, IonCard, IonCardContent, IonCardHeader, IonContent, IonImg, IonItem, IonLabel, IonTitle } from '@ionic/react'
import React, { Fragment } from 'react'

 const Results = () => {

  


  return(
    <Fragment>
    <IonContent id= "content2">

   <IonItem><IonTitle className = "hm">
  Barbers available in your location
  
  </IonTitle></IonItem>
 
  <IonCard className= "result">
 <IonCardHeader>
   
   <IonCardContent>
     
       <IonItem className="flexContainer">
         <IonAvatar className = "avtr" slot = "start">
           <IonImg src= "assets/images/images/girl.jpg">

           </IonImg>

         </IonAvatar>
        
         <IonLabel className = "fontsize"> 
         <h2>Imran Syafiq
         <br/>
          Male
          <br/>
          Cheras, Selangor
          <br/></h2>
        

         </IonLabel>
       </IonItem>
       <div className="wrap">
          <IonButton fill="outline" className="viewBtn" href="/Tab2">VIEW</IonButton> 
          
          </div>

   </IonCardContent>
 </IonCardHeader>

  </IonCard>


  <IonCard className= "result">
 <IonCardHeader>
   
   <IonCardContent>
     
       <IonItem>
         <IonAvatar className = "avtr" slot = "start">
           <IonImg src= "assets/images/images/girl.jpg">

           </IonImg>

         </IonAvatar>
         
         <IonLabel>
          <h2>Kamarul Syamil
           <br/>
          Male
          <br/>
          Bangi, Selangor
          <br/></h2>
         
         
         </IonLabel>
         
       </IonItem>
       <div className="wrap">
          <IonButton fill="outline" className="viewBtn" href="/Tab2">VIEW</IonButton> 
          
         
         </div>

   </IonCardContent>
 </IonCardHeader>

  </IonCard>

 
  </IonContent>
    </Fragment>
  )
}

export default Results

