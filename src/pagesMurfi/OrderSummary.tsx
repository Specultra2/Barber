import React, { useState } from 'react';
import { pencil,cart} from 'ionicons/icons';
import { IonButton, IonCard, IonPopover, 
  IonCardHeader,  IonCol, IonContent, 
  IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonListHeader, 
  IonPage, IonRow, IonThumbnail, IonTitle, IonToolbar, IonDatetime, 
   IonRadio, IonRadioGroup, IonItemDivider, IonCheckbox, IonButtons, IonBackButton} from '@ionic/react';
import './OrderSummary.css';
import { object, string} from 'yup';
import { useForm } from "react-hook-form";
import { RouteComponentProps } from 'react-router';

const checkboxList = [
  { val: 'Affin Bank', isChecked: false },
  { val: 'Alliance Bank', isChecked: false },
  { val: 'AmBank', isChecked: false },
  { val: 'Bank Islam', isChecked: false },
  { val: 'Bank Rakyat', isChecked: false },
  { val: 'Bank Muamalat', isChecked: false },
  { val: 'BSN', isChecked: false },
  { val: 'CIMB Bank', isChecked: false },
  { val: 'Hong Leong Bank', isChecked: false },
  { val: 'HSBC', isChecked: false },
  { val: 'Maybank', isChecked: false },
  { val: 'Public Bank', isChecked: false },
  { val: 'RHB Bank', isChecked: false }
];

export const  OrderSummary: React.FC <RouteComponentProps> = ({history}) => {
  const [selected, setSelected] = useState<string>('cash');
  const [showPopover, setShowPopover] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string>('2020-07-15T15:30:20.789');
  const validationSchema = object().shape({
    email: string().required().email(),
    fullName: string().required().min(5).max(32),
    password: string().required().min(8),
  });
  
  const { register, errors, handleSubmit } = useForm({
    // by setting validateCriteriaMode to 'all', 
    // all validation errors for single field will display at once
    criteriaMode: "all"
  });
  const onSubmit = (data: any) => console.log(data);

  return (
    <IonPage >
      
      <IonHeader>

        <IonToolbar>
        
        <IonButtons slot="start">
        

        <IonBackButton defaultHref="" />
        </IonButtons>
      
          <IonTitle  >Order Summary</IonTitle>
          
        </IonToolbar>

      </IonHeader>

      <IonContent className="page" fullscreen class = "ion-padding">

      <IonListHeader >
      <IonLabel>Barber In Charge</IonLabel>
    </IonListHeader>

     <IonItem>
      <IonThumbnail slot="start">
        <img src="https://vignette.wikia.nocookie.net/hogwarts-life/images/8/82/Draco_Malfoy.jpg/revision/latest?cb=20170112183355" />
      </IonThumbnail>
      <IonLabel className = "b"> Draco Malfoy <br/> dracocoon@gmail.com <br/> 012-010039232 </IonLabel>
    </IonItem>
    
    <>
    
      
   </>
  
    <IonListHeader>
      <IonLabel>Order Summary</IonLabel>
    </IonListHeader>
   
    <IonList>
      <IonItem>
        <IonLabel >Barber Cut</IonLabel>
        <IonLabel className="n">RM 15.00</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Beard Trim</IonLabel>
        <IonLabel className="n">RM 10.00</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Hair Coloring</IonLabel>
        <IonLabel className="n">RM 30.00</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Total Services</IonLabel>
        <IonLabel className="n"> 3 </IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Subtotal </IonLabel>
        <IonLabel className="n">RM 55.00</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Service Tax <br/>(6%) </IonLabel>
        <IonLabel className="n">RM 3.30</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel className="t">Total <br/> (Incl. service tax) </IonLabel>
        <IonLabel className="n">RM 58.30</IonLabel>
      </IonItem>
    </IonList>
    
    
    <IonListHeader>
      <IonLabel>Customer Details</IonLabel>
    </IonListHeader>
    <form onSubmit={handleSubmit(onSubmit)}>
    <IonCard>
      <IonGrid>
        <IonRow>
        <IonCol>
         
         <IonCardHeader>
            
            <IonLabel className="h"><b>Home </b> <IonIcon size="big" icon={pencil}></IonIcon></IonLabel>
           
           
              <input className="input"
                 type="string"
                 name="Home"
                 ref={register({ required: true})}
              />
              {errors?.Home?.types?.required && <p className="err">*This field is required</p>}
      
             
      
               
          </IonCardHeader>
        
      
          </IonCol>
        </IonRow>
      </IonGrid>  
        </IonCard>
    
        

        <IonCard>
      <IonGrid>
        <IonRow>
        <IonCol>
            <IonCardHeader>
            <IonLabel className="h"><b>Contact Info </b> <IonIcon size="big" icon={pencil}></IonIcon></IonLabel>
            
      <input className="input"
        type="email"
        name="contactinfo"
        ref={register({ required: true})}
      />
      {errors?.contactinfo?.types?.required && <p className="err">*This field is required</p>}
      
      
      
    
          
            </IonCardHeader>
        
          </IonCol>
        </IonRow>
      </IonGrid>
        </IonCard>

        <IonCard>
      <IonGrid>
        <IonRow>
        <IonCol>
          
            <IonCardHeader>
            <IonLabel className="h"><b>Time</b> <IonIcon size="big" icon={pencil}></IonIcon></IonLabel>
            <IonItem>
          <IonDatetime displayFormat="DDDD MMM D, YYYY H:mm" 
          min="2020" max="2025" value={selectedDate} onIonChange={e => setSelectedDate(e.detail.value!)}></IonDatetime>
        </IonItem>
          </IonCardHeader>
          </IonCol>
        </IonRow>
      </IonGrid>
        </IonCard>
        
      
        <IonPopover 
        isOpen={showPopover}
        cssClass = "fullscreen"
        onDidDismiss={e => setShowPopover(false)}
      > <IonList>
      
      <IonItemDivider>FPX</IonItemDivider>

      {checkboxList.map(({ val, isChecked }, i) => (
        <IonItem key={i}>
          <IonLabel>{val}</IonLabel>
          <IonCheckbox slot="end" value={val} checked={isChecked} />
        </IonItem>
      ))}
    </IonList></IonPopover>
      
      
       <IonListHeader>
      <IonLabel>Payment Method</IonLabel>
    </IonListHeader>
        <IonList>
          <IonRadioGroup value={selected} onIonChange={e => setSelected(e.detail.value)}  >
    
            <IonItem>
              <IonLabel>Cash</IonLabel>
              <IonRadio slot="start" color="dark"  value="cash" />
              
            </IonItem>

            <IonItem>
              
              <IonRadio slot="start" color="dark" value="card" /> <a href = "/Tab4"><IonLabel color ="dark" >Credit or debit card</IonLabel></a>
            
            </IonItem>

            <IonItem>
              <IonLabel>Online Banking</IonLabel>
              <IonRadio slot="start"color="dark" value="fpx" onClick={() => setShowPopover(true) } />
               
            </IonItem>
          </IonRadioGroup>
        </IonList>
        
      <IonButton type="submit" color="dark" > Place Your Order</IonButton> 
    
        </form>  
  

      </IonContent>
     
    </IonPage>
  );
};

export default OrderSummary;
