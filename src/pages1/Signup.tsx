import React, {Component} from 'react';
import { IonContent,IonCol, IonHeader, IonImg, IonPage,IonGrid, IonTitle, IonToolbar,IonBackButton, IonCard, IonLabel, IonRow   } from '@ionic/react';
import { IonButton, IonIcon, } from '@ionic/react';
import { manOutline, cutOutline} from 'ionicons/icons';
import './Signup.css';
import './User.tsx';
import './Login.tsx';



const Signup: React.FC = () => {
  

  return (
    <IonPage className="content4">
      <IonHeader className="content2">
      <IonToolbar>
    <IonGrid>
        <IonRow>
    <IonBackButton color='dark' defaultHref="/Login" />
    <IonTitle>Sign Up</IonTitle>
    </IonRow>
    </IonGrid>

        </IonToolbar>
      </IonHeader>
      
     

     

     
      <IonContent id="content2" fullscreen>
      
      
      {/* <IonHeader>
      
      <IonTitle className ="ion-text-center " color='light'>Choose The  Form </IonTitle> 
      </IonHeader> */}

<IonCard className="haha1" >
<IonImg className="image" src= "assets/img/ha.png"></IonImg>
<IonGrid className="Hai">
  <IonRow>
  <IonCol>
      <IonButton href="/User" color = "dark" >Customer
        
          <IonIcon slot="icon-only" icon={manOutline} /> 
          
        </IonButton>
        </IonCol>
      <IonCol>
        <IonButton href="/Barber" color = "dark" >Barber
        
          <IonIcon slot="icon-only"  icon={cutOutline} /> 
          
        </IonButton>
        </IonCol>
        </IonRow>
</IonGrid>

</IonCard>
          </IonContent>
          
          
          
    </IonPage>
  
  );
};

export default Signup;
