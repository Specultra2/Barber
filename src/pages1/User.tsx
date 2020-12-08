import { IonBackButton, IonButton, IonCol, IonContent, IonGrid,IonHeader,
  IonLabel, IonCard,  IonCardHeader, IonPage, IonIcon,IonRadioGroup,IonRadio,IonList,IonItem,IonAlert,
IonRow, IonTitle, IonToolbar, IonCardContent } from '@ionic/react';
import React from "react";
import {useState} from 'react';
import { useForm } from "react-hook-form";
import { chevronUpOutline, homeOutline, manOutline, womanOutline } from 'ionicons/icons';
import './User.css';

export const  User: React.FC = () => {

 
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
    <IonTitle>REGISTER USER</IonTitle>
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
       
        <IonLabel className="h">Fullname</IonLabel>
         
            <input className="input i"
               type="string"
               name="string"
               ref={register({ required: true})}
            />
            {errors?.string?.types?.required && <p className="err">*This field is required</p>}
            
    
            
            
            <IonLabel className="h">Username</IonLabel>
         
            <input className="input i"
               type="string"
               name="string2"
               ref={register({ required: true})}
            />
            {errors?.string2?.types?.required && <p className="err">*This field is required</p>}
            

          
            <IonLabel className="h">Address</IonLabel>
         
            <input className="input i"
               type="string"
               name="string3"
               ref={register({ required: true})}
            />
            {errors?.string3?.types?.required && <p className="err">*This field is required</p>}
            

           
            <IonLabel className="h">Password</IonLabel>
            <input className="input"
               type="string"
               name="string3"
               ref={register({ required: true, minLength: 5, pattern:/^[A-Za-z]+$/i})}
            />
            {errors?.string3?.types?.required && <p className="err">*This field is required</p>}
            {errors?.string3?.types?.minLength && <p className="err">*Minimum length 5</p>}
            {errors?.string3?.types?.pattern && <p className="err">*Must include...</p>}
            

                 
                 
        <IonLabel className="h">Phone Number</IonLabel>
            <input className="input"
               type="number"
               name="number1"
               ref={register({ required: true, minLength: 10, maxLength:10})}
            />
            {errors?.number1?.types?.required && <p className="err">*This field is required</p>}
            {errors?.number1?.types?.minLength && <p className="err">*Must have 10 digits</p>}
            {errors?.number1?.types?.maxLength && <p className="err">*Must have 10 digits</p>}         
                  
             
            
        <IonItem className="option">
          <IonLabel>Gender</IonLabel>
            <IonList >
            <IonRadioGroup value="Female">
          <IonItem>
            <IonLabel><IonIcon slot="icon-only" icon={manOutline} />Male
            </IonLabel>
            <IonRadio slot="start" color="success" value="Male"></IonRadio>
          </IonItem>

          <IonItem>
            <IonLabel> <IonIcon slot="icon-only" icon={womanOutline} />Female 
            </IonLabel>
            <IonRadio slot="start" color="tertiary" value="Female"></IonRadio>
          </IonItem>
        </IonRadioGroup>
        </IonList>
          </IonItem>
          
          <IonLabel>Profile Photo</IonLabel>
          <input className='h'
          type ="file" 
          accept="png"
          >
          </input>
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
export default User;