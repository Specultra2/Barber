import { IonBackButton, IonButtons, IonCol, IonContent, IonGrid,IonHeader,
    IonLabel, IonCard, IonItem, IonCardHeader, IonPage, IonImg, IonRow
  , IonTitle, IonToolbar, IonCheckbox} from '@ionic/react';
import React from "react";
import { useForm } from "react-hook-form";
import './Card.css';
export const  Card: React.FC = () => {
  const { register, errors, watch, handleSubmit } = useForm({
    criteriaMode: "all"
  });
  const checkboxList = [
    { val: 'Save credit card info', isChecked: true }
  ];
  
  const onSubmit = (data: any) => console.log(data);
  const watchShowAge = watch("showAge", false);
  return (
   <IonPage ><IonContent>
<form onSubmit={handleSubmit(onSubmit)}>
      <IonHeader>
     

       
      <IonToolbar>
        <IonButtons slot="start" >
          <IonBackButton defaultHref="/OrderSummary" />
        </IonButtons>
      <IonTitle>Add a card</IonTitle>
  
          </IonToolbar>
         
      </IonHeader>

    <IonCard>
      <IonGrid>
        <IonRow>
        <IonCol>
         
         <IonCardHeader>

          <IonLabel className="h">Name on Card</IonLabel>
           
              <input className="input i"
                 type="string"
                 name="noc"
                 ref={register({ required: true, pattern:/^[A-Za-z]+$/i })}
              />
              {errors?.noc?.types?.required && <p className="err">*This field is required</p>}
              {errors?.noc?.types?.pattern && <p className="err">*Alphabets only!</p>}
               
</IonCardHeader></IonCol></IonRow></IonGrid></IonCard>

<IonCard>
      <IonGrid>
        <IonRow>
        <IonCol>
         
         <IonCardHeader>
          <IonLabel className="h">Card Number</IonLabel>
              <input className="input"
                 type="number"
                 name="cardno"
                 ref={register({ required: true, minLength: 16, maxLength:16})}
              />
              {errors?.cardno?.types?.required && <p className="err">*This field is required</p>}
              {errors?.cardno?.types?.minLength && <p className="err">*Must have 16 digits</p>}
              {errors?.cardno?.types?.maxLength && <p className="err">*Must have 16 digits</p>}
              </IonCardHeader></IonCol></IonRow></IonGrid></IonCard>

              <IonCard>
      <IonGrid>
        <IonRow>
        <IonCol>
         
         <IonCardHeader>

               <IonGrid>
            <IonRow>
              <IonCol>
              <IonLabel className="h">MM/YY</IonLabel>
              <input className="input"
                 type="number"
                 name="mmyy"
                 ref={register({ required: true, minLength: 4, maxLength:4})}
              />
              {errors?.mmyy?.types?.required && <p className="err">*This field is required</p>}
              {errors?.mmyy?.types?.minLength && <p className="err">*Must have 4 digits</p>}
              {errors?.mmyy?.types?.maxLength && <p className="err">*Must have 4 digits</p>}
              
             
              </IonCol>

              <IonCol>
              <IonLabel className="h">CVC</IonLabel>
              <input className="input"
                 type="number"
                 name="cvc"
                 ref={register({ required: true, minLength: 3, maxLength:3})}
              />
              {errors?.cvc?.types?.required && <p className="err">*This field is required</p>}
              {errors?.cvc?.types?.minLength && <p className="err">*Must have 3 digits</p>}
              {errors?.cvc?.types?.maxLength && <p className="err">*Must have 3 digits</p>}
              
              </IonCol>
            </IonRow>
          </IonGrid>
      </IonCardHeader>        
          </IonCol>
        </IonRow>
      </IonGrid>  
        </IonCard>

        
     
              {checkboxList.map(({ val, isChecked }, i) => (
  <IonItem key={i}>
    <IonLabel>{val}</IonLabel>
    <IonCheckbox slot="end" value={val} checked={isChecked} color="dark" />
  </IonItem>
))}
         
       
       <input type="submit" value="Continue"  className="B"  /></form> 
    
      </IonContent> </IonPage>
    
  );
};
export default Card;