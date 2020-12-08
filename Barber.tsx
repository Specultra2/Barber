import React from 'react';
import { IonBackButton, IonLabel, IonButton, IonButtons, IonItem, IonNav, IonCard, IonCardContent, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonIcon, IonImg, IonPage, IonText, IonTitle, IonToolbar, IonList,IonRadio, IonRadioGroup, IonListHeader, IonItemDivider, IonCheckbox } from '@ionic/react';
import  {starSharp, chatbubblesOutline, locationSharp} from 'ionicons/icons';

import './Barber.css';

const Barber: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton defaultHref="/Homepage" />
        </IonButtons>
          <IonTitle>Barber's Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        
        <IonCard className="content">
          <IonCardContent>
          <div className="box">
            <IonImg className="image" src= "assets/images/barber.jpeg"></IonImg>
            
          </div>

          <div className="item-icon">

          <div className="item-div-icon">
          <IonIcon className="icon" size="large" icon={starSharp} ></IonIcon>
          <IonCardSubtitle>5.0 out of 5</IonCardSubtitle>
          </div>
          <div className="item-div-icon">
          <IonIcon className="icon" size="large" icon={locationSharp}></IonIcon>
          <IonCardSubtitle>Cheras, Selangor </IonCardSubtitle>
          </div>
          </div>
          
          </IonCardContent>
          
        </IonCard>
        <IonCard className="content-2">
        < IonCardContent>
          <IonCardTitle className="tajuk"><h2><b>ABOUT ME</b></h2></IonCardTitle>
          <div>
            <IonText> <i><br/>Hi I’m Imran and I’m Flagship Head Barber here at Cheras. I would describe my barbering style as traditional and natural. I enjoy planning the hair cut, creating the shape and then seeing the style develop. I used to prefer working with longer hairstyles, but since being at Cheras and learning from extremely talented barbers. I am as comfortable with short, sharp haircuts as well.</i></IonText>
          </div>
          </IonCardContent>
        </IonCard>

        <IonItem>
          
        <IonButton  color= "light"> <b>Schedule Through Chat </b> <IonIcon className= "chat" icon= {chatbubblesOutline}></IonIcon></IonButton>
        
          </IonItem>
          
          <IonCard>
          
          <IonCardContent>
          <IonCardTitle className="tajuk"><h2><b>SELECT SERVICE</b></h2></IonCardTitle>
          
            <IonList>
              <IonItem>
            <IonLabel><h2>Men's Haircut- RM20.00</h2>  </IonLabel>
                <IonCheckbox color="primary" ></IonCheckbox>
                </IonItem>
                <IonItem>
            <IonLabel><h2>Women's Haircut- RM20.00</h2>  </IonLabel>
                <IonCheckbox color="primary" ></IonCheckbox>
                </IonItem>
                <IonItem>
            <IonLabel><h2>Kid's Haircut- RM15.00</h2>  </IonLabel>
                <IonCheckbox color="primary" ></IonCheckbox>
                </IonItem>
                <IonItem>
            <IonLabel><h2>Beard Trim/ Shaving- RM18.00</h2>  </IonLabel>
                <IonCheckbox color="primary" ></IonCheckbox>
                </IonItem>
                <IonItem>
            <IonLabel><h2>Hair Coloring- RM98.00</h2>  </IonLabel>
                <IonCheckbox color="primary" ></IonCheckbox>
                </IonItem>
                </IonList>
      </IonCardContent> 
      

          </IonCard>
          
        


        <IonCard>
        < IonCardContent>
          <IonCardSubtitle className="tajuk"><h2>FeedBack</h2></IonCardSubtitle>
          <div>
            
          </div>
          </IonCardContent>
        </IonCard>
        
        {/* <IonButton  color = "dark" expand="full" size= "large" type = "submit" className = "button">View Order Summary</IonButton>  */}
        {/* <IonButton  color= "dark" className="ion-margin-top" type="submit" expand="block">
    View Order Summary
  </IonButton> */}
  <IonButton color = "dark">View Order Summary</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Barber;
