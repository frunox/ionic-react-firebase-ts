import React from 'react';
import { IonFab, IonFabButton, IonIcon } from '@ionic/react';

const FixedBottomFab: React.FC<{ icon: string; link: string }> = (props) => {
  return (
    <IonFab vertical="bottom" horizontal="end" slot="fixed">
      <IonFabButton routerLink={props.link}>
        <IonIcon icon={props.icon} />
      </IonFabButton>
    </IonFab>
  );
};

export default FixedBottomFab;
