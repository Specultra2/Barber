import React, {useState, MouseEvent, useEffect} from 'react';
import { menuController } from '@ionic/core';

import { calendarSharp,timeSharp, star , menuSharp, chatbubbleEllipsesSharp} from 'ionicons/icons';
import { IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar, IonSearchbar, IonItem, IonLabel, IonDatetime, IonButton, IonIcon, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardSubtitle, IonCardContent, IonList, IonAvatar, IonImg, IonCardTitle, ViewItem, IonMenu, IonRouterOutlet, IonMenuButton, IonButtons } from '@ionic/react';
import './Tab1.css';
import Card from '../components/Card'

import Results from '../components/Results';

const Tab1 = () => {
  const [searchText, setSearchText] = useState('');
  const [searchService, setService] = useState(false);
  
  const handleService = (e) => {
      setService(true);
  }

  useEffect(() => {
    console.log('Changed')    
  }, [searchService])

  const handleSearch =  (e) => {
    setSearchText(() => e.target.value)
  }
  return (
    <IonPage>
       <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          
        </IonToolbar>
      </IonHeader>
      <IonContent id="content" >
        <Card 
        searchText={searchText}
        searchService={searchService}
        onIonChange={handleSearch}
        onClick={handleService}
        />
        {searchService === true ? 
        <Results  /> 
        : <h1>Loading...</h1> }
      </IonContent>
    </IonPage>
  );
};

export default Tab1;












 {/* <div className="header"> */}
        {/* <IonIcon className = 'hamburger' icon = {menuSharp}></IonIcon> */}
        
        {/* <IonIcon className = 'chatbox' icon = {chatbubbleEllipsesSharp}></IonIcon> */}
        {/* </div> */}
        
        {/* <IonToolbar className="title" >
          <IonTitle>CUT 'N' SHAVE</IonTitle>
        </IonToolbar> */}