import { IonBackButton, IonButton, IonCol, IonContent, IonGrid,IonHeader,
  IonLabel, IonCard,  IonCardHeader, IonPage, IonIcon,IonRadioGroup,IonRadio,IonList,IonItem,IonAlert,
IonRow, IonTitle, IonToolbar,IonInput, IonCardContent } from '@ionic/react';
import React from "react";
import {useState} from 'react';
import { useForm } from "react-hook-form";

import { personCircle, lockClosed } from 'ionicons/icons';
import './Lancar.css';

export const  Lancar: React.FC = () => {

 
const { register, errors, watch, handleSubmit } = useForm({
  criteriaMode: "all"
});

const onSubmit = (data: any) => console.log(data);
const watchShowAge = watch("showAge", false);

const [showAlert2, setShowAlert2] = useState(false);

return (
  <IonPage ><IonContent  >

    <IonHeader >
      <IonToolbar>
     
    <IonToolbar>
      <IonGrid>
        <IonRow>
    <IonBackButton color='dark' defaultHref="/Tab2" />
    <IonTitle>REGISTER</IonTitle>
    </IonRow>
    </IonGrid>
        </IonToolbar>
       
      </IonToolbar>
    </IonHeader>

  
  
    <IonGrid>
      <IonRow>
      <IonCol>
       
       <IonCardHeader >
       
<form onSubmit={handleSubmit(onSubmit)}>

  
  <IonCard>
    <IonCardContent>
       
        
            <IonItem lines ="full">
            
            <IonLabel position="floating"><IonIcon slot="icon-only"  color = 'dark' icon={personCircle} />Name</IonLabel>
<IonInput  type="text" name="text1" ref={register({ required: true})}></IonInput>
</IonItem>
{errors?.text1?.types?.required && <p className="err">*This field is required</p>}
            
<IonItem lines ="full"> 
            <IonLabel position="floating" ><IonIcon slot="icon-only"  color = 'dark' icon={lockClosed} /> Password
               
            </IonLabel>     
<IonInput  type="text" name="text2" ref={register({ required: true})}>
          </IonInput>
          </IonItem>
{errors?.text2?.types?.required && <p className="err">*This field is required</p>}
            
          </IonCardContent> 
          </IonCard>
          

        <IonGrid class="ion-text-center ion-margin">
          <IonRow>
            <IonCol> 
            <input onClick ={() => setShowAlert2(true)} type="submit" className="T"/>
            <IonAlert
          isOpen={showAlert2}
          onDidDismiss={() => setShowAlert2(false)}
          cssClass='my-custom-class'
          header={'Successful'}
          subHeader={''}
          message={'You have submitted the info'}
          buttons ={['Done']} 
        />
             </IonCol> 
        </IonRow> 
     </IonGrid>
        
     
       </form>

    </IonCardHeader>          
        </IonCol>
      </IonRow>
    </IonGrid>  
    
    </IonContent>
  </IonPage>
  
);
};

export default Lancar;