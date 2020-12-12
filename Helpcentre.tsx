import React, { useState } from 'react';

import { callOutline, mailOutline, chatbubbleOutline, informationCircleOutline } from 'ionicons/icons';
import { IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar, IonSearchbar, IonItem, IonLabel, IonDatetime, IonButton, IonIcon, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardSubtitle, IonCardContent, IonList, IonAvatar, IonImg, IonCardTitle, ViewItem, IonButtons, IonBackButton, IonInput, IonCheckbox } from '@ionic/react';
import './Helpcentre.css';

const Helpcentre: React.FC = () => {
    const [searchText, setSearchText] = useState('');
    return (
        <IonPage>

            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/Homepage" />
                    </IonButtons>
                    <IonTitle>Help Centre</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="box" fullscreen>
                <IonCard className="card">
                    <IonCardContent>

                        <IonGrid>
                            <IonRow>
                                <IonCol>
                                    <IonCard className="cardinside">
                                        <IonCardContent>
                                            <IonIcon className= "icon" size="large" icon={callOutline}> </IonIcon>
                                        
                                               <h3>Call Us at </h3> 
                                               <h3> +03 2344 9844</h3> 
                                          
                                          
                                        </IonCardContent>
                                    </IonCard>
                                </IonCol>


                                <IonCol>
                                    <IonCard className="cardinside">
                                        <IonCardContent>
                                            <IonIcon className= "icon" size="large" icon={mailOutline}> </IonIcon>
                                           
                                               <h3>cutnshave</h3> 
                                               <h3>@gmail.com</h3> 
                                        </IonCardContent>
                                    </IonCard>
                                </IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol>
                                    <IonCard className="cardinside">
                                        <IonCardContent>
                                            <IonIcon className= "icon" size="large" icon={chatbubbleOutline}> </IonIcon>
                                            <h3>Chat with</h3>
                                            <h3>Agent</h3>
                                        </IonCardContent>
                                    </IonCard>
                                </IonCol>


                                <IonCol>
                                    <IonCard className="cardinside">
                                        <IonCardContent>
                                            <IonIcon className= "icon" size="large" icon={informationCircleOutline}> </IonIcon>
                                            <h3>Contact Us</h3>
                                            <h3>Form</h3>
                                        </IonCardContent>
                                    </IonCard>
                                </IonCol>
                            </IonRow>
                        </IonGrid>

                        <IonGrid className="grid">
                            <IonRow>
                                <IonCol>
{/* <IonCardContent> 
    <IonButton className="buttoninside">

<IonIcon size="large" icon={chatbubbleOutline}> </IonIcon>
<h3>hello</h3>

</IonButton>
</IonCardContent>
                                   
                                </IonCol>
                                <IonCol>
<IonCardContent>
<IonButton className="buttoninside" >

<IonIcon size="large" icon={callOutline}> </IonIcon>
<h3>hello</h3>

</IonButton>
</IonCardContent> */}
                                   
                                </IonCol>
                            </IonRow>

                        </IonGrid>


                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    );
};
export default Helpcentre;
