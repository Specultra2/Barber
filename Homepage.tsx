import React, {useState} from 'react';

import { calendarSharp,timeSharp} from 'ionicons/icons';
import { IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar, IonSearchbar, IonItem, IonLabel, IonDatetime, IonButton, IonIcon, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardSubtitle, IonCardContent, IonList, IonAvatar, IonImg, IonCardTitle, ViewItem, IonMenu, IonMenuButton } from '@ionic/react';
import './Homepage.css';


const Homepage: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  return (
    
    <IonPage>
      <IonHeader> 
        <IonToolbar>
          
           <IonButton fill= "outline"> <IonMenuButton slot= "start"/></IonButton>
          
          
        </IonToolbar>
      </IonHeader>
      <IonContent id="content" fullscreen>
      <div className="box">
            <IonImg className= "logoo" src = "assets/Images/logo3.jpeg"></IonImg>
            
            
          </div>

          
        <IonGrid className="ion-no-padding grid">
          <IonRow>
            <IonCol>
              <IonSearchbar inputmode = "search" className="bar" value={searchText} onIonChange={e => setSearchText(e.detail.value!)} placeholder="Search Location" animated></IonSearchbar>
            </IonCol>
          </IonRow>
          <IonRow className="second">
            <IonCol>
              <IonItem className="date">

                <IonLabel className="label">
                  <IonIcon className= "icon" icon={calendarSharp}></IonIcon> </IonLabel>

                <IonDatetime display-format="DD/MM/YYYY"  placeholder="Select Date" > </IonDatetime>
              </IonItem >

            </IonCol>
            <IonCol >
              <IonItem className="time">
                <IonLabel className="label"><IonIcon className= "icon" icon={timeSharp}></IonIcon></IonLabel>
                <IonDatetime display-format="h:mm A" pickerFormat="h:mm A" minuteValues="0,15,30,45" hourValues="1,2,3,4,5,6,7,8,9,10,11,12" placeholder="Select Time" > </IonDatetime>
              </IonItem>

            </IonCol>
          </IonRow>
          
        <IonButton  expand="full" className="service" href= "/Tab3">Select Service</IonButton>
     
      </IonGrid>
<IonContent id= "content2">
  {/* <IonItem>
        <IonLabel>
        <br/>
        <h3>
        No outdoor during pandemic? 
        <br/>
        Cut 'N' Shave will come to your house
        <br/></h3>
      </IonLabel>
         </IonItem> */}
         <IonItem><IonTitle className = "hm">
        Barbers available in your location
        
        </IonTitle></IonItem>
       
        <IonCard className= "result">
       <IonCardHeader>
         
         <IonCardContent>
           
             <IonItem className="flexContainer">
               <IonAvatar className = "avtr" slot = "start">
                 <IonImg src= "assets/Images/barber.jpeg">

                 </IonImg>

               </IonAvatar>
              
               <IonLabel className = "fontsize"> 
               <h2>Imran Syafiq
               <br/>
                Male
                <br/>
                Cheras, Selangor
                <br/></h2>
                <IonButton color = "dark" className="viewBtn" href="/Tab2">VIEW</IonButton> 

               </IonLabel>
             </IonItem>
             {/* <div className="wrap">
                
                
                </div> */}

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

      </IonContent>
    </IonPage>
  );
};

export default Homepage;
