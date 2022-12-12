import {Center, Heading, Image, Text} from 'native-base';
import React, {useMemo, useState} from 'react';
import {StyleSheet} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {ScreenWrapper} from '../../components/Layout';
import {OnboardingType} from '../../model/category';
import NavigationService from '../../navigation/NavigationService';

const styles = StyleSheet.create({
  image: {
    width: 280,
    height: 280,
  },
  slide: {},
  title: {},
  text: {},
  buttonCircle: {},
  activeButtonCircle: {},
});
const slidesOnboarding = [
  {
    key: '1',
    title: 'Concilizione lavoro e vita privata',
    text: "L'equilibrio tra lavoro e vita privata è la percezione individuale che le attività lavorative ed extra lavorative siano bilanciate e compatibili con le priorità di vita della persona, in modo da sostenere il suo sviluppo personale.",
    image: require('../../assets/images/wlb_1.png'),
    imageStyle: styles.image,
    backgroundColor: '#59b2ab',
  },
  {
    key: '2',
    title: '',
    text: 'Tipiacamente, si crede che con “attività extra lavorative” si intendano unicamente gli aspetti legati alla vita familiare. Sicuramente, questo tema è molto importante nella vita di ognuno, tuttavia, le priorità per un individuo possono riguardare anche: la salute, il tempo libero, la formazione, le relazioni amicali, le relazioni romantiche e la gestione della casa.',
    image: require('../../assets/images/undraw-partying-re-at7f-11.png'),
    imageStyle: styles.image,
    backgroundColor: '#febe29',
  },
  {
    key: '3',
    title: '',
    text: 'L’obiettivo da cui nasce questa app è quello di creare una rete di contatto, in modo da potervi supportare e aiutare a vicenda su queste tematiche. Questo perché un buon bilanciamento di vita-lavoro, da un lato, può ridurre l’esaurimento emotivo, lo stress, l’ansia e la depressione; dall’altro lato, favorisce la soddisfazione di vita e migliora la propria soddisfazione lavorativa e le proprie prestazioni a lavoro.',
    image: require('../../assets/images/undraw-partying-re-at7f-11.png'),
    imageStyle: styles.image,
    backgroundColor: '#22bcb5',
  },
];
const slidesHouse = [
  {
    key: '1',
    title: 'Casa',
    text: 'La categoria dedicata alla gestione delle attività domestiche ed extra domestiche. Diverse sono le attività domestiche, quindi, è utile ottimizzarle e/o farsi aiutare da qualcuno che possa collaborare con noi.  ',
    image: require('../../assets/images/wlb_1.png'),
    imageStyle: styles.image,
    backgroundColor: '#59b2ab',
  },
  {
    key: '2',
    title: '',
    text: 'Qui potrai trovare consigli e spunti da parte di altri tuoi colleghi con le tue stesse problematiche o difficoltà, per gestire al meglio le questioni domestiche, difficili da conciliare con la vita di tutti i giorni. Attraverso il portale WeMi, il Comune di Milano propone una serie di iniziative a supporto della manutenzione casalinga ed extra casalinga.',
    image: require('../../assets/images/undraw-partying-re-at7f-11.png'),
    imageStyle: styles.image,
    backgroundColor: '#febe29',
  },
  {
    key: '3',
    title: '',
    text: ' Ecco quali: Servizi di spesa a domicilio, farmaci a domicilio, Ritiro di ricette e referti medici, Servizi di igiene domestica (stiratura abiti e biancheria a domicilio, pulizia casa), Servizio di disbrigo pratiche amministrative e legali, Ricerca di colf',
    image: require('../../assets/images/undraw-partying-re-at7f-11.png'),
    imageStyle: styles.image,
    backgroundColor: '#22bcb5',
  },
  {
    key: '4',
    title: '',
    text: 'Soprattutto durante il Covid sono state sempre di più le app adibite a servizi quali spesa online e consegna a domicilio, tra le più famose: Supermercato24, Esselunga, Cortilia, Amazon Pantry',
    image: require('../../assets/images/undraw-partying-re-at7f-11.png'),
    imageStyle: styles.image,
    backgroundColor: '#22bcb5',
  },
];
const slidesHealth = [
  {
    key: '1',
    title: 'Cura',
    text: 'La categoria dedicata al supporto della salute e dell’assistenza alla persona. Le preoccupazioni più importanti molto spesso derivano da questioni legate allo stato di salute. Bilanciare gli impegni lavorativi con il tempo dedicato a prenderci cura della nostra salute o a quella dei nostri cari, spesso, può risultare complesso. ',
    image: require('../../assets/images/wlb_1.png'),
    imageStyle: styles.image,
    backgroundColor: '#59b2ab',
  },
  {
    key: '2',
    title: '',
    text: 'In questa sezione potrai trovare consigli e spunti per la cura della tua salute o quella dei tuoi cari. Il portale WeMi del Comune di Milano, a questo proposito, propone servizi di assitenza sanitaria per la cura e il benessere di adulti, anziani e bambini.',
    image: require('../../assets/images/undraw-partying-re-at7f-11.png'),
    imageStyle: styles.image,
    backgroundColor: '#febe29',
  },
  {
    key: '3',
    title: '',
    text: 'Tra cui: Assistenza domiciliar, Assistenza post ricovero, Fisioterapia e logopedia, Consulenza pediatrica e psico-pedagogica, Ricerca badanti',
    image: require('../../assets/images/undraw-partying-re-at7f-11.png'),
    imageStyle: styles.image,
    backgroundColor: '#22bcb5',
  },
  {
    key: '4',
    title: '',
    text: 'Esistono delle applicazioni che ti permettono di individuare il medico specialista più adatto alle tue esigenze o a quelle dei tuoi cari, la più consigliata è MioDottore. Invece, l’applicazione Unobravo - Psicologi Online ti metterà in contatto con psicologi e psicoterapeuti che seguiranno il tuo benessere psicologico.',
    image: require('../../assets/images/undraw-partying-re-at7f-11.png'),
    imageStyle: styles.image,
    backgroundColor: '#22bcb5',
  },
];
const slidesHobby = [
  {
    key: '1',
    title: 'Svago',
    text: 'Per vivere meglio il bilanciamento vita-lavoro è giusto dare spazio anche al tempo libero! Ecco qui un po’ di idee e servizi utili per gestire anche il tempo non adibito al lavoro o alla famiglia. Il comune di Milano, attraverso il portale WeMi, organizza diverse attività per dare la possibilità sia ad adulti che bambini di coltivare la creatività e il divertimento.',
    image: require('../../assets/images/wlb_1.png'),
    imageStyle: styles.image,
    backgroundColor: '#59b2ab',
  },
  {
    key: '2',
    title: '',
    text: 'Diverse sono le iniziative promosse in questo senso: Uscite alla scoperta della città, Visite a musei e mostre, Merende in compagnia, Arte-terapia, Corsi di diversi sport: basket, danza, tennis',
    image: require('../../assets/images/undraw-partying-re-at7f-11.png'),
    imageStyle: styles.image,
    backgroundColor: '#febe29',
  },
  {
    key: '3',
    title: '',
    text: 'Esistono anche delle applicazioni gratuite per tenere traccia per esempio degli allenamenti giornalieri, le più consigliate sono NTC o Tribesports (facilmente scaricabili sia su Android che su iOS).',
    image: require('../../assets/images/undraw-partying-re-at7f-11.png'),
    imageStyle: styles.image,
    backgroundColor: '#22bcb5',
  },
];
const slidesFamily = [
  {
    key: '1',
    title: 'Famiglia',
    text: 'La categoria dedicata al supporto alla genitorialità.       In questa sezione potra trovare degli spunti e/o consigli per migliorare la tua gestione familiare in modo da ottimizzare il bilanciamento tra vita lavorativa e ruolo genitoriale.',
    image: require('../../assets/images/wlb_1.png'),
    imageStyle: styles.image,
    backgroundColor: '#59b2ab',
  },
  {
    key: '2',
    title: '',
    text: 'L’obiettivo è quello di mettere in contatto voi genitori con una serie di informazioni in merito a servizi disponibili nelle zone circostanti e di vostro interesse. Il comune di Milano, attraverso il portale WeMi, aggrega l’offerta di servizi welfare erogati in città grazie ad una rete qualificata di associazioni, cooperative e imprese sociali del territorio.',
    image: require('../../assets/images/undraw-partying-re-at7f-11.png'),
    imageStyle: styles.image,
    backgroundColor: '#febe29',
  },
  {
    key: '3',
    title: '',
    text: 'Tipologia di servizi erogati: Ricerca di baby-sitter, Servizi di supporto allo studio, doposcuola, sostegno ai compiti, Servizi di accompagnamento con mezzo adibito, Gruppi di mutuo aiuto tra genitori',
    image: require('../../assets/images/undraw-partying-re-at7f-11.png'),
    imageStyle: styles.image,
    backgroundColor: '#22bcb5',
  },
  {
    key: '4',
    title: '',
    text: 'Cozy Family Organizer è un’applicazione gratuita creata per ottimizzare l’organizzazione familiare poiché permette di pianificare e tener traccia di: appuntamenti, impegni, imprevisti per tutti i componenti del nucleo familiare.',
    image: require('../../assets/images/undraw-partying-re-at7f-11.png'),
    imageStyle: styles.image,
    backgroundColor: '#22bcb5',
  },
];
const Onboarding = ({route}: any) => {
  const {onboardingType} = route.params;

  const onDone = () => {
    NavigationService.goBack();
  };

  const [slides, setSlides] = useState(slidesOnboarding);

  useMemo(() => {
    switch (onboardingType) {
      case OnboardingType.Family:
        setSlides(slidesFamily);
        break;
      case OnboardingType.Health:
        setSlides(slidesHealth);
        break;
      case OnboardingType.Hobby:
        setSlides(slidesHobby);
        break;
      case OnboardingType.House:
        setSlides(slidesHouse);
        break;

      default:
        break;
    }
  }, [onboardingType]);

  const renderItem = ({item}: any) => {
    return (
      <ScreenWrapper withScrollView>
        <Center mb={10} flex={1}>
          <Image
            alt="image"
            size={'xl'}
            resizeMode="contain"
            source={item.image}
          />
          <Heading
            px={'5'}
            textAlign={'center'}
            fontWeight={'normal'}
            size={'lg'}
            bold
            my={'5'}>
            {item.title}
          </Heading>
          <Text fontSize={'md'} px={'5'}>
            {item.text}
          </Text>
        </Center>
      </ScreenWrapper>
    );
  };

  return (
    <AppIntroSlider
      data={slides}
      renderItem={renderItem}
      bottomButton={true}
      nextLabel="PROSEGUI"
      doneLabel="FINE"
      dotStyle={styles.buttonCircle}
      onDone={onDone}
      activeDotStyle={styles.activeButtonCircle}
    />
  );
};

export default Onboarding;
