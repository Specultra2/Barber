import React from 'react';
import { IonAvatar, IonButton, IonCard, IonCardContent, IonCardHeader, IonCol, IonContent, IonDatetime, IonGrid, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonPage, IonRow, IonSearchbar, IonTitle, IonToolbar } from '@ionic/react';

import { calendarSharp, timeSharp } from 'ionicons/icons';
import { type } from 'os';



const Card = (props) => {
  return (
   <>
    <IonGrid className="ion-no-padding grid">
    <IonRow>
      <IonCol>
        <IonSearchbar inputmode = "search" className="bar" value={props.searchText} onIonChange={props.onIonChange} placeholder="Search Location" animated></IonSearchbar>
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
    
  <IonButton  expand="full" className="service" onClick={props.onClick}>Select Service</IonButton>

</IonGrid>

  </>
  );
};

export default Card;
