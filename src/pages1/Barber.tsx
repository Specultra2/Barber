import { IonBackButton, IonButton, IonCol, IonContent, IonGrid,IonHeader,
  IonLabel, IonCard,  IonCardHeader, IonPage, IonIcon,IonRadioGroup,IonRadio,IonList,IonItem,
IonRow, IonTitle, IonToolbar, IonCardContent } from '@ionic/react';
import React from "react";
import { useForm } from "react-hook-form";
import { chevronUpOutline, homeOutline, manOutline, womanOutline } from 'ionicons/icons';
import './Barber.css';

export const  Tab5: React.FC = () => {

 
const { register, errors, watch, handleSubmit } = useForm({
  criteriaMode: "all"
});
const onSubmit = (data: any) => console.log(data);
const watchShowAge = watch("showAge", false);


return (
  <IonPage><IonContent className='background1'>

    <IonHeader>
      <IonToolbar>
     
    <IonToolbar>
    <IonGrid>
        <IonRow>
    <IonBackButton color='dark' defaultHref="/Tab2" />
    <IonTitle>REGISTER BARBER</IonTitle>
    </IonRow>
    </IonGrid>

        </IonToolbar>
       </IonToolbar>
    </IonHeader>

  
  
    <IonGrid>
      <IonRow>
      <IonCol>
       
       <IonCardHeader>
<form onSubmit={handleSubmit(onSubmit)}>




  <IonCard className = "ya">

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
          
          <IonLabel>Certification</IonLabel>
          <input className='h'
          type ="file" 
          accept="png"
          ></input>
          
          

          
     
     </IonCardContent>
  </IonCard>
  <IonGrid class="ion-text-center ion-margin">
          <IonRow>
            <IonCol> 
            <input type="submit" className="T"/>
            
              
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
export default Tab5;