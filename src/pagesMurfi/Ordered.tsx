import React from 'react';
import { IonContent,IonThumbnail, IonList,IonImg, IonHeader, IonPage, IonTitle, IonToolbar, IonFooter, IonItem, IonInput,IonAlert, IonRoute, IonCard } from '@ionic/react';
import { IonButton, IonIcon, IonLabel, IonCheckbox } from '@ionic/react';
import { personCircle, search, star, ellipsisHorizontal, ellipsisVertical, lockClosedOutline, lockClosed } from 'ionicons/icons';
import {useState, useEffect} from 'react';
import './Ordered.css';

const checkboxList = [
  { val: 'Save credit card info', isChecked: true }
];

const Ordered: React.FC = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [text, setText] = useState<string>();
  const [text1, setText1] = useState<string>();
  
  
  
   function loginUser(){
    console.log ()
   }
   
    return (
      <IonPage>

        <IonContent id="content" fullscreen >
          <IonCard className="haha"  >
          <IonImg className="image" src= "assets/images/bebetul.png"></IonImg>
                    
          <h1 className="i"><b>Order Completed Successfully!</b></h1>
          <h3 className="x"><i>Thank you so much for your order</i> </h3>
          <IonButton  color= "dark" className="button"  
          type="submit" href="/OrderSummary">
            Back to Homepage</IonButton>
        
         </IonCard>

      </IonContent>
    </IonPage>
  );
};
export default Ordered;
