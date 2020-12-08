import React from 'react';
import { IonContent,IonGrid,IonCol,IonRow, IonList,IonImg, IonCardHeader, IonPage, IonTitle, IonItem, IonInput,IonAlert, IonCardContent, IonCard } from '@ionic/react';
import { IonButton, IonIcon, IonLabel, IonCheckbox } from '@ionic/react';
import { personCircle, search, star, ellipsisHorizontal, ellipsisVertical, lockClosedOutline, lockClosed } from 'ionicons/icons';
import {useState, useEffect} from 'react';
import { useForm } from "react-hook-form";
import './Login.css';
import './Signup.tsx';
import './User.tsx';



const Login: React.FC = () => {
const { register, errors, watch, handleSubmit } = useForm({criteriaMode: "all"});
const onSubmit = (data: any) => console.log(data);
const watchShowAge = watch("showAge", false);
const [showAlert2, setShowAlert2] = useState(false);



 function loginUser(){
  console.log ()
 }
 
return (
<IonPage>
      
<IonContent id="content" fullscreen>
        
  <IonCard className="haha" >
        <IonImg className="image" src= "assets/img/ha.png"></IonImg>
{/* <div className="ion-padding">
  <form className="ion-padding"> */}
  
  
          {/* <IonItem className="wrap-input">
          <IonButton color='light' >
          <IonIcon slot="icon-only"  color = 'dark' icon={personCircle} />
          </IonButton>
            <IonInput value={text}  placeholder="Username" onIonChange={e => setText(e.detail.value!)}></IonInput>
            
        
          </IonItem>
          <IonItem className="wrap-input">
          <IonButton color='light'>
          <IonIcon slot="icon-only"  color = 'dark' icon={lockClosed} />
          </IonButton>
            <IonInput value={text1}  placeholder="Password" onIonChange={e => setText1(e.detail.value!)}></IonInput>
            </IonItem>
      
       <IonButton   color='dark' onClick= {loginUser} 
       >Login
       </IonButton> */}


    <IonGrid>
      <IonRow>
        <IonCol>
       
        <IonCardHeader >
       
          <form onSubmit={handleSubmit(onSubmit)}>

            <IonCardContent>  

              <IonItem lines ="full">
                <IonLabel position="floating"><IonIcon slot="icon-only"  color = 'dark' icon={personCircle} />Name</IonLabel>
                <IonInput  type="text" name="text1" ref={register({ required: true})}></IonInput>
              </IonItem>
                {errors?.text1?.types?.required && <p className="err">*This field is required</p>}
            
              <IonItem lines ="full"> 
                <IonLabel position="floating" ><IonIcon slot="icon-only"  color = 'dark' icon={lockClosed} /> Password</IonLabel>     
                <IonInput  type="text" name="text2" ref={register({ required: true})}></IonInput>
              </IonItem>
                {errors?.text2?.types?.required && <p className="err">*This field is required</p>}

              <IonTitle className="ion-text-center" size="small">Don't Have Account? < a href="/Signup" >Sign Up Here </a></IonTitle>
          
              <IonGrid class="ion-text-center ion-margin">
                <IonRow>
                  <IonCol> 
                    <input onClick ={() => 
                      setShowAlert2(true)} type="submit" className="T"/>
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
            </IonCardContent>  

          </form>
        </IonCardHeader>  

        </IonCol>
      </IonRow>
    </IonGrid>
      
       {/* </form>
       </div> */}
  </IonCard>
        
        
</IonContent>    
</IonPage>
);
};

export default Login;

