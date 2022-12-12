import {Button, Text} from 'native-base';
import React from 'react';
import {StyleSheet, View} from 'react-native';
export type PrivacyPolicyProps = {
  onAccept?: () => void;
  onBack: () => void;
};
export const PrivacyPolicy = ({onAccept, onBack}: PrivacyPolicyProps) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingBottom: 70,
    },
    title: {fontWeight: 'bold', fontSize: 18},
    body: {fontSize: 16, marginTop: 10, marginBottom: 10},
  });
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Informativa sul trattamento dei dati personali
      </Text>
      <Text style={styles.body}>
        L’Università degli Studi di Milano-Bicocca si sta adoperando attivamente
        per il pieno adempimento alle nuove prescrizioni previste dal GDPR -
        Regolamento UE 2016/679.
      </Text>

      <Text style={styles.body}>
        A tal fine, si rende noto che ai sensi dell'art. 13 del GDPR è previsto
        l’obbligo di fornire agli interessati (le persone fisiche a cui si
        riferiscono i dati) specifiche informazioni in merito al trattamento dei
        loro dati personali al fine altresì di garantirne l’esercizio dei
        diritti di cui agli artt. 15 e ss. del GDPR.
      </Text>
      <Text style={styles.body}>
        I minorenni, prima di comunicare i propri dati all’Ateneo, dovranno
        leggere attentamente le informative insieme ai genitori, o a chi ne fa
        le veci. I genitori, o eventuali rappresentanti legali degli utenti
        minorenni, possono esercitare i diritti di cui agli artt. 15 e ss. del
        GDPR scrivendo al Titolare al seguente indirizzo di posta elettronica:
        rettorato@unimib.it, o PEC ateneo.bicocca@pec.unimib.it.
      </Text>
      <Text style={styles.body}>
        Di seguito sono raccolte le principali informative sui trattamenti dei
        dati personali effettuati dall'Università degli Studi di Milano-
        Bicocca, anche mediante strumenti automatizzati e applicazioni web.{' '}
      </Text>
      <Text style={styles.body}>
        Di seguito sono raccolte le principali informative sui trattamenti dei
        dati personali effettuati dall'Università degli Studi di Milano-
        Bicocca, anche mediante strumenti automatizzati e applicazioni web.{' '}
      </Text>
      {onAccept && (
        <Button onPress={onAccept}>HO LETTO, COMPRESO E ACCETTO</Button>
      )}
      <Button variant="link" onPress={onBack}>
        Indietro
      </Button>
    </View>
  );
};

export default PrivacyPolicy;
