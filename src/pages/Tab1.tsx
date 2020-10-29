import React, {useState} from 'react';

import { calendar,time, star } from 'ionicons/icons';
import { IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar, IonSearchbar, IonItem, IonLabel, IonDatetime, IonButton, IonIcon, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardSubtitle, IonCardContent, IonList, IonAvatar, IonImg, IonCardTitle, ViewItem } from '@ionic/react';
import './Tab1.css';

const Tab1: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="title" >
          <IonTitle>CUT 'N' SHAVE</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent id="content" fullscreen>




        <IonGrid className="ion-no-padding grid">
          <IonRow>
            <IonCol>
              <IonSearchbar inputmode = "search" className="bar" value={searchText} onIonChange={e => setSearchText(e.detail.value!)} placeholder="Select Your Location" animated></IonSearchbar>
            </IonCol>
          </IonRow>
          <IonRow className="second">
            <IonCol>
              <IonItem className="item">

                <IonLabel className="label"><IonIcon icon={calendar}></IonIcon> </IonLabel>

                <IonDatetime display-format="DD/MM/YYYY"  placeholder="Select Date"> </IonDatetime>
              </IonItem >

            </IonCol>
            <IonCol >
              <IonItem className="item1">
                <IonLabel className="label"><IonIcon icon={time}></IonIcon></IonLabel>
                <IonDatetime display-format="h:mm A" pickerFormat="h:mm A" minuteValues="0,15,30,45" hourValues="1,2,3,4,5,6,7,8,9,10,11,12" placeholder="Select Time"> </IonDatetime>
              </IonItem>

            </IonCol>
          </IonRow>
          
      
      <IonButton  expand="full" className="service" href= "/Tab3">Select Service</IonButton>
      </IonGrid>
<IonContent id= "content2">
  
       <IonTitle className = "hm">
        Barbers available in your location
      </IonTitle> 
        <IonCard className= "result">
       <IonCardHeader>
         
         <IonCardContent>
           
             <IonItem className="flexContainer">
               <IonAvatar className = "avtr" slot = "start">
                 <IonImg src= "assets/images/images/girl.jpg">

                 </IonImg>

               </IonAvatar>
              
               <IonLabel> 
               Imran Syafiq
               <br/>
                Male
                <br/>
                Cheras
                <br/>
               
                <div className="wrap">
                <IonButton fill="outline" className="viewBtn" href="/Tab2">VIEW</IonButton> 
                </div>
                

                
                

               </IonLabel>
             </IonItem>
           

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
                 Imran Syafiq
               </IonLabel>
             </IonItem>
           

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
                 Imran Syafiq
               </IonLabel>
             </IonItem>
           

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
                 Imran Syafiq
               </IonLabel>
             </IonItem>
           

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
                 Imran Syafiq
               </IonLabel>
             </IonItem>
           

         </IonCardContent>
       </IonCardHeader>

        </IonCard>
        <IonCard className= "result">
       <IonCardHeader>
         
         <IonCardContent>
           
             <IonItem>
               <IonAvatar className = "avtr" slot = "start">
                 <IonImg src= "assets/images/girl.jpg">

                 </IonImg>

               </IonAvatar>
               
               <IonLabel>
                 Imran Syafiq
               </IonLabel>
             </IonItem>
           

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
                 Imran Syafiq
               </IonLabel>  
             </IonItem>
           

         </IonCardContent>
       </IonCardHeader>

        </IonCard>
        </IonContent>

      </IonContent>
    </IonPage>
  );
};

export default Tab1;
