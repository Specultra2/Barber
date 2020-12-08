import {
    IonContent,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonListHeader,
    IonMenu,
    IonMenuToggle,
    IonNote,
  } from '@ionic/react';
   
  import React from 'react';
  import { useLocation } from 'react-router-dom';
  import {  personOutline, bookmarkOutline, informationCircleOutline,fileTrayOutline } from 'ionicons/icons';
   
  interface AppPage {
    url: string;
    iosIcon: string;
    mdIcon: string;
    title: string;
  }
   
  const appPages: AppPage[] = [
    {
      title: 'My Profile',
      url: '/page/Profile',
      iosIcon: personOutline,
      mdIcon: personOutline
    },
    {
      title: 'My Bookings',
      url: '/page/Bookings',
      iosIcon: bookmarkOutline,
      mdIcon: bookmarkOutline
    },
    {
        title: 'Transaction History',
        url: '/page/History',
        iosIcon: fileTrayOutline,
        mdIcon: fileTrayOutline
      },
    {
      title: 'Help Center',
      url: '/page/Help',
      iosIcon: informationCircleOutline,
      mdIcon: informationCircleOutline
    },
   
  ];
  
  
   
  const Menu: React.FC = () => {
    const location = useLocation();
   
    return (
      <IonMenu contentId="main" type="overlay">
        <IonContent>
          <IonList id="inbox-list">
            <IonListHeader>Hi, Nor Ilyana</IonListHeader>
            <IonNote>norilyana0123@gmail.com</IonNote>
            {appPages.map((appPage, index) => {
              return (
                <IonMenuToggle key={index} autoHide={false}>
                  <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                    <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                    <IonLabel>{appPage.title}</IonLabel>
                  </IonItem>
                </IonMenuToggle>
              );
            })}
          </IonList>
   
          
        </IonContent>
      </IonMenu>
    );
  };
   
  export default Menu;
  