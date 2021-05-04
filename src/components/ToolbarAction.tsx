import React from 'react';
import { IonButtons, IonButton, IonIcon } from '@ionic/react';

const ToolbarAction: React.FC<{ link: string; icon: string }> = (props) => {
  return (
    <IonButtons slot="end">
      <IonButton color="dark" routerLink={props.link}>
        <IonIcon slot="icon-only" icon={props.icon} />
      </IonButton>
    </IonButtons>
  );
};

export default ToolbarAction;
