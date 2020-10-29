import React from 'react';
import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonIcon, IonImg, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import  {star,location} from 'ionicons/icons';

import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton defaultHref="/Tab1" />
        </IonButtons>
          <IonTitle>View</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonCard className="content">
          <IonCardContent>
          <div className="box">
            <IonImg className="image" src="assets/images/images/profile.jpg"></IonImg>
            
          </div>

          <div className="item-icon">

          <div className="item-div-icon">
          <IonIcon className="icon" size="large" icon={star} ></IonIcon>
          <IonCardSubtitle>5.0 out of 5</IonCardSubtitle>
          </div>
          <div className="item-div-icon">
          <IonIcon className="icon" size="large" icon={location}></IonIcon>
          <IonCardSubtitle>Cheras, Selangor </IonCardSubtitle>
          </div>
          </div>
          
          </IonCardContent>
          
        </IonCard>
        <IonCard className="content-2">
        < IonCardContent>
          <IonCardTitle className="tajuk">Bio</IonCardTitle>
          <div>
            <IonText> <i>My Carft allows me to connect with a diverse group of people, all while leaving them all feeling their absolute best. From volunteering at homeless shelters to grooming the gents at high brow members only events, every person I groom leaves with a piece of me as leave with a piece of them.</i></IonText>
          </div>
          </IonCardContent>
        </IonCard>
        <IonCard className="content">
        < IonCardContent>
          <IonCardTitle className="tajuk">FeedBack</IonCardTitle>
          <div>
            
          </div>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
