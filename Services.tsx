import React from 'react';

import { IonApp, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCheckbox, IonContent, IonHeader, IonImg, IonItem, IonList, IonPage, IonTitle, IonToolbar , IonItemDivider, IonButton } from '@ionic/react';

import './Services.css';

const Services: React.FC = () => {
  return (

    <IonApp>
      <IonHeader translucent>
        <IonToolbar>
          <IonTitle>Hair Services</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      
      

        <IonList>
          <IonItem>
            <IonCard>
              <IonCardContent>
                
                <IonCheckbox color="primary" ></IonCheckbox>
                <h1 className= "pic">Men's Haircut</h1>
                
                
                <IonImg src="assets/Images/men.jpeg" className="picture"></IonImg>
                <IonCardHeader>
                  {/* <IonCardSubtitle>Description</IonCardSubtitle> */}
                  <IonCardContent>
                      Detailed clipper work and tight razor edging from your preference barbers. Those who using scissors, they can also opt for a precision cut by a talented hairstylist.
                     </IonCardContent>
                </IonCardHeader>
              </IonCardContent>
            </IonCard>
          </IonItem>
          <IonItem>
            <IonCard>
              <IonCardContent>
                <IonCheckbox color="primary"  ></IonCheckbox>
                <h1 className= "pic">Women's Haircut</h1>
                <IonImg src="assets/Images/women.jpeg" className="picture women"></IonImg>
                <IonCardHeader>
                  
                  <IonCardContent>
                    Many types of hairstyles provided by our verified hairstylists to satisfy you in the most gorgeous precision cutting. Opt for short, medium, and long hair.
                     </IonCardContent>
                </IonCardHeader>
              </IonCardContent>
            </IonCard>
          </IonItem>
          <IonItem>
            <IonCard>
              <IonCardContent>
                <IonCheckbox color="primary" ></IonCheckbox>
                <h1 className= "pic">Kid's Haircut</h1>
                <IonImg src="assets/Images/kids.jpeg" className="picture"></IonImg>
                <IonCardHeader>
                  
                  <IonCardContent>
                      For ages 5-11 years old. Suitable for kids with the freshest look at school.
                     </IonCardContent>
                </IonCardHeader>
              </IonCardContent>
            </IonCard>
          </IonItem>
          <IonItem>
            <IonCard>
              <IonCardContent>
                <IonCheckbox color="primary" ></IonCheckbox>
                <h1 className= "pic">  Men's Shaving</h1>
                <IonImg src="assets/Images/shave.jpeg" className="picture"></IonImg>
                <IonCardHeader>
                  
                  <IonCardContent>
                    Removal of facial hair by using razor according to your styles, to boost your confidence!
                     </IonCardContent>
                </IonCardHeader>
              </IonCardContent>
            </IonCard>
          </IonItem>
          <IonItem>
            <IonCard>
              <IonCardContent>
                <IonCheckbox color="primary" ></IonCheckbox>
                <h1 className= "pic">Hair Coloring</h1>
                <IonImg src="assets/Images/colour.jpeg" className="picture women"></IonImg>
                <IonCardHeader>
                  
                  <IonCardContent>
                    Professional colouring by a premier barber or hairstylists. Many options are available.
                     </IonCardContent>
                </IonCardHeader>
              </IonCardContent>
            </IonCard>
          </IonItem>
        </IonList>
        {/* <IonButton href= "/Tab1" color = "dark" expand="full" size= "large" type = "submit" className = "button">Search Barber</IonButton>  */}
        <IonButton href= "/Homepage" color= "dark" className="ion-margin-top" type="submit" expand="block">
    Search Barber
  </IonButton>
      </IonContent>
    </IonApp>
  );
};

export default Services;
