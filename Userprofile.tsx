import React, {useState} from 'react';

import { } from 'ionicons/icons';
import { IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar, IonSearchbar, IonItem, IonLabel, IonDatetime, IonButton, IonIcon, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardSubtitle, IonCardContent, IonList, IonAvatar, IonImg, IonCardTitle, ViewItem, IonButtons, IonBackButton, IonInput, IonCheckbox } from '@ionic/react';
import './Userprofile.css';

const Userprofile: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  return (
      <IonPage>
 <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton defaultHref="/Homepage" />
        </IonButtons>
          <IonTitle>My Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <IonCard>
          <IonCardContent>
          <div className="box">
            <IonImg className="image" src= "assets/images/editprofile.png"></IonImg>
            
          </div>
          
          </IonCardContent>
          
        
      <form className="ion-padding">
  <IonItem>
    <IonLabel position="floating">Username</IonLabel>
    <IonInput />
  </IonItem>
  <IonItem>
    <IonLabel position="floating">Password</IonLabel>
    <IonInput type="password" />
  </IonItem>
  <IonItem>
    <IonLabel position="floating">Email</IonLabel>
    <IonInput type="email" />
  </IonItem>
  <IonItem>
    <IonLabel position="floating">Contact No.</IonLabel>
    <IonInput type="tel" />
  </IonItem>
  
  <IonItem>
    <IonLabel position="floating">Location</IonLabel>
    <IonInput type="text" />
  </IonItem>
  {/* <IonItem lines="none">
    <IonLabel>Remember me</IonLabel>
    <IonCheckbox defaultChecked={true} slot="start" />
  </IonItem> */}
  <IonButton  color= "dark" className="ion-margin-top" type="submit" expand="block">
    Update Profile
  </IonButton>
</form>
      </IonCard>
      </IonContent>
      </IonPage>
  );
};
export default Userprofile;
  