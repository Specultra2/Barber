import React, {useState} from 'react';

import { } from 'ionicons/icons';
import { IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar, IonSearchbar, IonItem, IonLabel, IonDatetime, IonButton, IonIcon, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardSubtitle, IonCardContent, IonList, IonAvatar, IonImg, IonCardTitle, ViewItem, IonButtons, IonBackButton, IonInput, IonCheckbox } from '@ionic/react';
import './ContactUs.css';
import { Form } from "../components/Form";
import { Field } from "../components/Field";
const ContactUs: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  return (
      <IonPage>
 <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton defaultHref="/Tab1" />
        </IonButtons>
          <IonTitle>Contact Us Form</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
          <IonCard>
              <IonLabel></IonLabel>
          </IonCard>
      <Form
      action="http://localhost:4351/api/contactus"
      render={() => (
        <React.Fragment>
          <div className="alert alert-info" role="alert">
            Enter the information below and we'll get back to you as soon as we
            can.
          </div>
          <Field id="name" label="Name" />
          <Field id="email" label="Email" />
          <Field
            id="reason"
            label="Reason"
            editor="dropdown"
            options={["", "Marketing", "Support", "Feedback", "Jobs"]}
          />
          <Field id="notes" label="Notes" editor="multilinetextbox" />
        </React.Fragment>
      )}
    />
          
         
      </IonContent>
      </IonPage>
  );
};
export default ContactUs;
  