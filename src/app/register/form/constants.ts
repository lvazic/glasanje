/** Enumerates content positions for PDF. */
export enum ContentType {
  FULL_NAME,
  DATE_OF_BIRTH,
  GENDER,
  PARENT_NAME,
  JMBG,
  PASSPORT_NUMBER,
  SERBIAN_ADDRESS,
  INTERNALLY_DISPLACED_ADDRESS,
  FOREIGN_COUNTRY,
  FOREIGN_ADDRESS,
  POLL_STATION,
  SIGN_PLACE,
  SIGN_DATE,
  SIGN_NAME,
  SIGNATURE,
  PHONE_EMAIL,
}

export type WriteType = 'text' | 'image';

/** Describes where and how a piece of content should be placed. */
export interface ContentWriteSpec {
  x: number;
  y: number;
  isAddress?: boolean,
}

export function getContentWriteSpec(contentType: ContentType) {
  switch (contentType) {
    case ContentType.FULL_NAME:
      return {x: 300, y: 615};
    case ContentType.DATE_OF_BIRTH:
      return {x: 300, y: 590};
    case ContentType.GENDER:
      return {x: 300, y: 565};
    case ContentType.PARENT_NAME:
      return {x: 300, y: 544};
    case ContentType.JMBG:
      return {x: 303, y: 525};
    case ContentType.PASSPORT_NUMBER:
      return {x: 300, y: 495};
    case ContentType.SERBIAN_ADDRESS:
      return {x: 300, y: 470, isAddress: true};
    case ContentType.INTERNALLY_DISPLACED_ADDRESS:
      return {x: 300, y: 435, isAddress: true};
    case ContentType.FOREIGN_COUNTRY:
      return {x: 300, y: 395};
    case ContentType.FOREIGN_ADDRESS:
      return {x: 300, y: 360, isAddress: true};
    case ContentType.POLL_STATION:
      return {x: 300, y: 320};
    case ContentType.SIGN_PLACE:
      return {x: 140, y: 265};
    case ContentType.SIGN_DATE:
      return {x: 240, y: 265};
    case ContentType.SIGN_NAME:
      return {x: 350, y: 215};
    case ContentType.SIGNATURE:
      return {x: 450, y: 200};
    case ContentType.PHONE_EMAIL:
      return {x: 359, y: 175};
  }

}


/** Describes a polling station. */
export interface PollingStation {
  label: string;
  labelCyr: string;
  embassy: string;
  embassyCyr: string;
  email: string;
}

/** Describes a country with polling stations. */
export interface VotingCountry {
  /** ISO alpha-2 country code. */
  countryCode: string;
  label: string;
  labelCyr: string;
}

export const STATIONS_BY_COUNTRY: Map<VotingCountry, PollingStation[]> = new Map([
  [
    {
      countryCode: 'AF',
      label: 'Avganistan',
      labelCyr: 'Авганистан',
    }, [
    {
      label: 'Indija',
      labelCyr: 'Индија',
      embassy: 'Ambasada Srbije u Indiji',
      embassyCyr: 'Амбасада Србије у Индији',
      email: 'embassyofserbiadelhi@hotmail.com',
    }
  ],
  ],
  [
    {
      countryCode: 'AL',
      label: 'Albanija',
      labelCyr: 'Албанија',
    }, [
    {
      label: 'Albanija',
      labelCyr: 'Албанија',
      embassy: 'Ambasada Srbije u Albaniji',
      embassyCyr: 'Амбасада Србије у Албанији',
      email: 'ambatira@icc-al.org'
    },
  ],
  ],
  [
    {
      countryCode: 'DZ',
      label: 'Alžir',
      labelCyr: 'Алжир',
    }, [
    {
      label: 'Alžir',
      labelCyr: 'Алжир',
      embassy: 'Ambasada Srbije u Alžiru',
      embassyCyr: 'Амбасада Србије у Алжиру',
      email: 'ambasada@ambserbie-alger.com'
    },
  ],
  ],
  [
    {
      countryCode: 'AU',
      label: 'Australija',
      labelCyr: 'Аустралија',
    }, [
    {
      label: 'Australija',
      labelCyr: 'Аустралија',
      embassy: 'Ambasada Srbije u Australiji, Kanbera',
      embassyCyr: 'Амбасада Србије у Аустралији, Канбера',
      email: 'embassy.canberra@serbia.org.au',
    },
    {
      label: 'Australija',
      labelCyr: 'Аустралија',
      embassy: 'Konzulat Srbije u Australiji, Sidnej',
      embassyCyr: 'Конзулат Србије у Аустралији, Сиднеј',
      email: 'gkrssid@optusnet.com.au',
    },
  ],
  ],
  [
    {
      countryCode: 'AD',
      label: 'Andora',
      labelCyr: 'Андора',
    }, [
    {
      label: 'Andora',
      labelCyr: 'Андора',
      embassy: 'Ambasada Srbije u Španiji',
      embassyCyr: 'Амбасада Србије у Шпанији',
      email: 'konz.madrid@mfa.rs',
    },
  ],
  ],
  [
    {
      countryCode: 'AO',
      label: 'Angola',
      labelCyr: 'Ангола',
    }, [
    {
      label: 'Angola',
      labelCyr: 'Ангола',
      embassy: 'Ambasada Srbije u Angoli',
      embassyCyr: 'Амбасада Србије у Анголи',
      email: 'serbiaemb@netcabo.co.ao',
    },
  ],
  ],
  [
    {
      countryCode: 'AG',
      label: 'Antigva i Barbuda',
      labelCyr: 'Антигва и Барбуда',
    }, [
    {
      label: 'Antigva i Barbuda',
      labelCyr: 'Антигва и Барбуда',
      embassy: 'Ambasada Srbije u SAD, Vašington',
      embassyCyr: 'Амбасада Србије у САД, Вашингтон',
      email: 'consular@serbiaembusa.org',
    },
  ],
  ],
  [
    {
      countryCode: 'AR',
      label: 'Argentina',
      labelCyr: 'Аргентина',
    }, [
    {
      label: 'Argentina',
      labelCyr: 'Аргентина',
      embassy: 'Ambasada Srbije u Argentini',
      embassyCyr: 'Амбасада Србије у Аргентини',
      email: 'consulado@serbembaires.com.ar',
    },
  ],
  ],
  [
    {
      countryCode: 'АТ',
      label: 'Austrija',
      labelCyr: 'Аустрија',
    }, [
    {
      label: 'Austrija',
      labelCyr: 'Аустрија',
      embassy: 'Ambasada Srbije u Austriji, Beč',
      embassyCyr: 'Амбасада Србије у Аустрији, Беч',
      email: 'consulate.vienna@mfa.rs',
    },
    {
      label: 'Austrija',
      labelCyr: 'Аустрија',
      embassy: 'Konzulat Srbije u Austriji, Salcburg',
      embassyCyr: 'Конзулат Србије у Аустрији, Салцбург',
      email: 'genconsulate.salzburg@mfa.rs',
    },
  ],
  ],
  [
    {
      countryCode: 'AZ',
      label: 'Azerbejdžan',
      labelCyr: 'Азербејџан',
    }, [
    {
      label: 'Azerbejdžan',
      labelCyr: 'Азербејџан',
      embassy: 'Ambasada Srbije u Azerbejdžanu',
      embassyCyr: 'Амбасада Србије у Азербејџану',
      email: 'serbianembassy.baku@azeurotel.com',
    },
  ],
  ],
  [
    {
      countryCode: 'BS',
      label: 'Bahami',
      labelCyr: 'Бахами',
    }, [
    {
      label: 'Bahami',
      labelCyr: 'Бахами',
      embassy: 'Ambasada Srbije u Sjedinjenim Američkim Državama, Vašington',
      embassyCyr: 'Амбасада Србије у Сједињеним Америчким Државама, Вашингтон',
      email: 'consular@serbiaembusa.org',
    },
  ],
  ],
  [
    {
      countryCode: 'BH',
      label: 'Bahrein',
      labelCyr: 'Бахреин',
    }, [
    {
      label: 'Bahrein',
      labelCyr: 'Бахреин',
      embassy: 'Ambasada Srbije u Kuvajtu',
      embassyCyr: 'Амбасада Србије у Кувајту',
      email: 'serbkonzkw@gmail.com',
    },
  ],
  ],
  [
    {
      countryCode: 'BD',
      label: 'Bangladeš',
      labelCyr: 'Бангладеш',
    }, [
    {
      label: 'Bangladeš',
      labelCyr: 'Бангладеш',
      embassy: 'Ambasada Srbije u Indiji',
      embassyCyr: 'Амбасада Србије у Индији',
      email: 'embassyofserbiadelhi@hotmail.com',
    },
  ],
  ],
  [
    {
      countryCode: 'BB',
      label: 'Barbados',
      labelCyr: 'Барбадос',
    }, [
    {
      label: 'Barbados',
      labelCyr: 'Барбадос',
      embassy: 'Ambasada Srbije u Sjedinjenim Američkim Državama, Vašington',
      embassyCyr: 'Амбасада Србије у Сједињеним Америчким Државама, Вашингтон',
      email: 'consular@serbiaembusa.org',
    },
  ],
  ],
  [
    {
      countryCode: 'BE',
      label: 'Belgija',
      labelCyr: 'Белгија',
    }, [
    {
      label: 'Belgija',
      labelCyr: 'Белгија',
      embassy: 'Ambasada Srbije u Belgiji',
      embassyCyr: 'Амбасада Србије у Белгији',
      email: 'embassy.brussels@mfa.rs',
    },
  ],
  ],
  [
    {
      countryCode: 'BZ',
      label: 'Belize',
      labelCyr: 'Белизе',
    }, [
    {
      label: 'Belize',
      labelCyr: 'Белизе',
      embassy: 'Ambasada Srbije u Sjedinjenim Američkim Državama, Vašington',
      embassyCyr: 'Амбасада Србије у Сједињеним Америчким Државама, Вашингтон',
      email: 'consular@serbiaembusa.org',
    },
  ],
  ],
  [
    {
      countryCode: 'BY',
      label: 'Belorusija',
      labelCyr: 'Белорусија',
    }, [
    {
      label: 'Belorusija',
      labelCyr: 'Белорусија',
      embassy: 'Ambasada Srbije u Belorusiji',
      embassyCyr: 'Амбасада Србије у Белорусији',
      email: 'embassy.minsk@mfa.rs',
    },
  ],
  ],
  [
    {
      countryCode: 'BJ',
      label: 'Benin',
      labelCyr: 'Бенин',
    }, [
    {
      label: 'Benin',
      labelCyr: 'Бенин',
      embassy: 'Misija u UN - Njujork',
      embassyCyr: 'Мисија у УН - Њујорк',
      email: 'info@serbiamissionun.org',
    },
  ],
  ],
  [
    {
      countryCode: 'BW',
      label: 'Bocvana',
      labelCyr: 'Боцвана',
    }, [
    {
      label: 'Bocvana',
      labelCyr: 'Боцвана',
      embassy: 'Ambasada Srbije u Južnoafričkoj Republici',
      embassyCyr: 'Амбасада Србије у Јужноафричкој Републици',
      email: 'info@srbembassy.org.za',
    },
  ],
  ],
  [
    {
      countryCode: 'BO',
      label: 'Bolivija',
      labelCyr: 'Боливија',
    }, [
    {
      label: 'Bolivija',
      labelCyr: 'Боливија',
      embassy: 'Ambasada Srbije u Brazilu',
      embassyCyr: 'Амбасада Србије у Бразилу',
      email: 'embaixadaservia@terra.com.br',
    },
  ],
  ],
  [
    {
      countryCode: 'BA',
      label: 'Bosna i Hercegovina',
      labelCyr: 'Босна и Херцеговина',
    }, [
    {
      label: 'Bosna i Hercegovina',
      labelCyr: 'Босна и Херцеговина',
      embassy: 'Konzulat Srbije u Bosni i Hercegovini, Banja Luka',
      embassyCyr: 'Конзулат Србије у Босни и Херцеговини, Бања Лука',
      email: 'konzulat.bl@mfa.rs',
    },
    {
      label: 'Bosna i Hercegovina',
      labelCyr: 'Босна и Херцеговина',
      embassy: 'Konzulat Srbije u Bosni i Hercegovini, Drvar',
      embassyCyr: 'Конзулат Србије у Босни и Херцеговини, Дрвар',
      email: 'kk.rs-drvar@ktsara.net',
    }, {
      label: 'Bosna i Hercegovina',
      labelCyr: 'Босна и Херцеговина',
      embassy: 'Konzulat Srbije u Bosni i Hercegovini, Mostar',
      embassyCyr: 'Конзулат Србије у Босни и Херцеговини, Мостар',
      email: 'gk.mostar@mfa.rs',
    }, {
      label: 'Bosna i Hercegovina',
      labelCyr: 'Босна и Херцеговина',
      embassy: 'Konzulat Srbije u Bosni i Hercegovini, Trebinje',
      embassyCyr: 'Конзулат Србије у Босни и Херцеговини, Требиње',
      email: 'kk.trebinje@mfa.rs',
    }, {
      label: 'Bosna i Hercegovina',
      labelCyr: 'Босна и Херцеговина',
      embassy: 'Ambasada Srbije u Bosni i Hercegovini, Sarajevo',
      embassyCyr: 'Амбасада Србије у Босни и Херцеговини, Сарајево',
      email: 'srbamba@bih.net.ba',
    },
  ],
  ],
  [
    {
      countryCode: 'BR',
      label: 'Brazil',
      labelCyr: 'Бразил',
    }, [
    {
      label: 'Brazil',
      labelCyr: 'Бразил',
      embassy: 'Ambasada Srbije u Brazilu',
      embassyCyr: 'Амбасада Србије у Бразилу',
      email: 'embaixadaservia@terra.com.br',
    },
  ],
  ],
  [
    {
      countryCode: 'BN',
      label: 'Brunej Darusalam',
      labelCyr: 'Брунеј Дарусалам',
    }, [
    {
      label: 'Brunej Darusalam',
      labelCyr: 'Брунеј Дарусалам',
      embassy: 'Ambasada Srbije u Indoneziji',
      embassyCyr: 'Амбасада Србије у Индонезији',
      email: 'embjakarta@serbian-embassy.org',
    },
  ],
  ],
  [
    {
      countryCode: 'BG',
      label: 'Bugarska',
      labelCyr: 'Бугарска',
    }, [
    {
      label: 'Bugarska',
      labelCyr: 'Бугарска',
      embassy: 'Ambasada Srbije u Bugarskoj',
      embassyCyr: 'Амбасада Србије у Бугарској',
      email: 'sofia@emb-serbia.com',
    },
  ],
  ],
  [
    {
      countryCode: 'BF',
      label: 'Burkina Faso',
      labelCyr: 'Буркина Фасо',
    }, [
    {
      label: 'Burkina Faso',
      labelCyr: 'Буркина Фасо',
      embassy: 'Misija u UN - Njujork',
      embassyCyr: 'Мисија у УН - Њујорк',
      email: 'info@serbiamissionun.org',
    },
  ],
  ],
  [
    {
      countryCode: 'BI',
      label: 'Burundi',
      labelCyr: 'Бурунди',
    }, [
    {
      label: 'Burundi',
      labelCyr: 'Бурунди',
      embassy: 'Ambasada Srbije u Keniji',
      embassyCyr: 'Амбасада Србије у Кенији',
      email: 'nairobi@embassyofserbia.or.ke',
    },
  ],
  ],
  [
    {
      countryCode: 'BT',
      label: 'Butan',
      labelCyr: 'Бутан',
    }, [
    {
      label: 'Butan',
      labelCyr: 'Бутан',
      embassy: 'Ambasada Srbije u Indiji',
      embassyCyr: 'Амбасада Србије у Индији',
      email: 'embassyofserbiadelhi@hotmail.com',
    },
  ],
  ],
  [
    {
      countryCode: 'TD',
      label: 'Čad',
      labelCyr: 'Чад',
    }, [
    {
      label: 'Čad',
      labelCyr: 'Чад',
      embassy: 'Ambasada Srbije u Libiji',
      embassyCyr: 'Амбасада Србије у Либији',
      email: 'serbianembassy_tripoli@yahoo.com',
    },
  ],
  ],
  [
    {
      countryCode: 'CF',
      label: 'Centralnoafrička Republika',
      labelCyr: 'Централноафричка Република',
    }, [
    {
      label: 'Centralnoafrička Republika',
      labelCyr: 'Централноафричка Република',
      embassy: 'Misija u UN - Njujork',
      embassyCyr: 'Мисија у УН - Њујорк',
      email: 'info@serbiamissionun.org',
    },
  ],
  ],
  [
    {
      countryCode: 'CZ',
      label: 'Češka Republika',
      labelCyr: 'Чешка',
    }, [
    {
      label: 'Češka Republika',
      labelCyr: 'Чешка',
      embassy: 'Ambasada Srbije u Češkoj Republici',
      embassyCyr: 'Амбасада Србије у Чешкој Републици',
      email: 'konzularno.prag@mfa.rs',
    },
  ],
  ],
  [
    {
      countryCode: 'CL',
      label: 'Čile',
      labelCyr: 'Чиле',
    }, [
    {
      label: 'Čile',
      labelCyr: 'Чиле',
      embassy: 'Ambasada Srbije u Argentini',
      embassyCyr: 'Амбасада Србије у Аргентини',
      email: 'consulado@serbembaires.com.ar',
    },
  ],
  ],
  [
    {
      countryCode: 'ME',
      label: 'Crna Gora',
      labelCyr: 'Црна Гора',
    }, [
    {
      label: 'Crna Gora',
      labelCyr: 'Црна Гора',
      embassy: 'Konzulat Srbije u Crnoj Gori, Herceg Novi',
      embassyCyr: 'Конзулат Србије у Црној Гори, Херцег Нови',
      email: 'gkh.novi@mfa.rs',
    },
    {
      label: 'Crna Gora',
      labelCyr: 'Црна Гора',
      embassy: 'Ambasada Srbije u Crnoj Gori, Podgorica',
      embassyCyr: 'Амбасада Србије у Црној Гори, Подгорица',
      email: 'embassy.podgorica@mfa.rs',
    },
  ],
  ],
  [
    {
      countryCode: 'DK',
      label: 'Danska',
      labelCyr: 'Данска',
    }, [
    {
      label: 'Danska',
      labelCyr: 'Данска',
      embassy: 'Ambasada Srbije u Danskoj',
      embassyCyr: 'Амбасада Србије у Данској',
      email: 'serbianemb@city.dk',
    },
  ],
  ],
  [
    {
      countryCode: 'DM',
      label: 'Dominikana',
      labelCyr: 'Доминикана',
    }, [
    {
      label: 'Dominikana',
      labelCyr: 'Доминикана',
      embassy: 'Ambasada Srbije u Sjedinjenim Američkim Državama, Vašington',
      embassyCyr: 'Амбасада Србије у Сједињеним Америчким Државама, Вашингтон',
      email: 'consular@serbiaembusa.org',
    },
  ],
  ],
  [
    {
      countryCode: 'DO',
      label: 'Dominikanska Republika',
      labelCyr: 'Доминиканска Република',
    }, [
    {
      label: 'Dominikanska Republika',
      labelCyr: 'Доминиканска Република',
      embassy: 'Ambasada Srbije na Kubi',
      embassyCyr: 'Амбасада Србије на Куби',
      email: 'konzsrbhav@gmail.com',
    },
  ],
  ],
  [
    {
      countryCode: 'DJ',
      label: 'Džibuti',
      labelCyr: 'Џибути',
    }, [
    {
      label: 'Džibuti',
      labelCyr: 'Џибути',
      embassy: 'Ambasada Srbije u Etiopiji',
      embassyCyr: 'Амбасада Србије у Етиопији',
      email: 'serbambadis@yahoo.com',
    },
  ],
  ],
  [
    {
      countryCode: 'EG',
      label: 'Egipat',
      labelCyr: 'Египат',
    }, [
    {
      label: 'Egipat',
      labelCyr: 'Египат',
      embassy: 'Ambasada Srbije u Egiptu',
      embassyCyr: 'Амбасада Србије у Египту',
      email: 'konzul@serbiaeg.com',
    },
  ],
  ],
  [
    {
      countryCode: 'EC',
      label: 'Ekvador',
      labelCyr: 'Еквадор',
    }, [
    {
      label: 'Ekvador',
      labelCyr: 'Еквадор',
      embassy: 'Ambasada Srbije u Brazilu',
      embassyCyr: 'Амбасада Србије у Бразилу',
      email: 'embaixadaservia@terra.com.br',
    },
  ],
  ],
  [
    {
      countryCode: 'GQ',
      label: 'Ekvatorijalna Gvineja',
      labelCyr: 'Гвинеја',
    }, [
    {
      label: 'Ekvatorijalna Gvineja',
      labelCyr: 'Гвинеја',
      embassy: 'Ambasada Srbije u Angoli',
      embassyCyr: 'Амбасада Србије у Анголи',
      email: 'serbiaemb@netcabo.co.ao',
    },
  ],
  ],
  [
    {
      countryCode: 'ER',
      label: 'Eritreja',
      labelCyr: 'Еритреја',
    }, [
    {
      label: 'Eritreja',
      labelCyr: 'Еритреја',
      embassy: 'Ambasada Srbije u Keniji',
      embassyCyr: 'Амбасада Србије у Кенији',
      email: 'nairobi@embassyofserbia.or.ke',
    },
  ],
  ],
  [
    {
      countryCode: 'EE',
      label: 'Estonija',
      labelCyr: 'Естонија',
    }, [
    {
      label: 'Estonija',
      labelCyr: 'Естонија',
      embassy: 'Ambasada Srbije u Finskoj',
      embassyCyr: 'Амбасада Србије у Финској',
      email: 'serbia@kolumbus.fi',
    },
  ],
  ],
  [
    {
      countryCode: 'ET',
      label: 'Etiopija',
      labelCyr: 'Етиопија',
    }, [
    {
      label: 'Etiopija',
      labelCyr: 'Етиопија',
      embassy: 'Ambasada Srbije u Etiopiji',
      embassyCyr: 'Амбасада Србије у Етиопији',
      email: 'serbambadis@yahoo.com',
    },
  ],
  ],
  [
    {
      countryCode: 'FJ',
      label: 'Fidži',
      labelCyr: 'Фиџи',
    }, [
    {
      label: 'Fidži',
      labelCyr: 'Фиџи',
      embassy: 'Ambasada Srbije u Australiji, Kanbera',
      embassyCyr: 'Амбасада Србије у Аустралији, Канбера',
      email: 'embassy.canberra@serbia.org.au',
    },
  ],
  ],
  [
    {
      countryCode: 'PH',
      label: 'Filipini',
      labelCyr: 'Филипини',
    }, [
    {
      label: 'Filipini',
      labelCyr: 'Филипини',
      embassy: 'Ambasada Srbije u Indoneziji',
      embassyCyr: 'Амбасада Србије у Индонезији',
      email: 'embjakarta@serbian-embassy.org',
    },
  ],
  ],
  [
    {
      countryCode: 'FI',
      label: 'Finska',
      labelCyr: 'Финска',
    }, [
    {
      label: 'Finska',
      labelCyr: 'Финска',
      embassy: 'Ambasada Srbije u Finskoj',
      embassyCyr: 'Амбасада Србије у Финској',
      email: 'serbia@kolumbus.fi',
    },
  ],
  ],
  [
    {
      countryCode: 'FR',
      label: 'Francuska',
      labelCyr: 'Француска',
    }, [
    {
      label: 'Francuska',
      labelCyr: 'Француска',
      embassy: 'Ambasada Srbije u Francuskoj, Pariz',
      embassyCyr: 'Амбасада Србије у Француској, Париз',
      email: 'konzularno.pariz@mfa.rs',
    },
    {
      label: 'Francuska',
      labelCyr: 'Француска',
      embassy: 'Konzulat Srbije u Francuskoj, Strazbur',
      embassyCyr: 'Конзулат Србије у Француској, Стразбур',
      email: 'consulate.strasbourg@mfa.rs',
    },
  ],
  ],
  [
    {
      countryCode: 'GA',
      label: 'Gabon',
      labelCyr: 'Габон',
    }, [
    {
      label: 'Gabon',
      labelCyr: 'Габон',
      embassy: 'Ambasada Srbije u Angoli',
      embassyCyr: 'Амбасада Србије у Анголи',
      email: 'serbiaemb@netcabo.co.ao',
    },
  ],
  ],
  [
    {
      countryCode: 'GM',
      label: 'Gambija',
      labelCyr: 'Гамбија',
    }, [
    {
      label: 'Gambija',
      labelCyr: 'Гамбија',
      embassy: 'Misija u UN - Njujork',
      embassyCyr: 'Мисија у УН - Њујорк',
      email: 'info@serbiamissionun.org',
    },
  ],
  ],
  [
    {
      countryCode: 'GH',
      label: 'Gana',
      labelCyr: 'Гана',
    }, [
    {
      label: 'Gana',
      labelCyr: 'Гана',
      embassy: 'Ambasada Srbije u Nigeriji',
      embassyCyr: 'Амбасада Србије у Нигерији',
      email: 'serbconsabuja@gmail.com',
    },
  ],
  ],
  [
    {
      countryCode: 'GR',
      label: 'Grčka',
      labelCyr: 'Грчка',
    }, [
    {
      label: 'Grčka',
      labelCyr: 'Грчка',
      embassy: 'Ambasada Srbije u Grčkoj, Atina',
      embassyCyr: 'Амбасада Србије у Грчкој, Атина',
      email: 'embassy.athens.consular@mfa.rs',
    },
    {
      label: 'Grčka',
      labelCyr: 'Грчка',
      embassy: 'Konzulat Srbije u Grčkoj, Solun',
      embassyCyr: 'Конзулат Србије у Грчкој, Солун',
      email: 'srbcons@otenet.gr',
    },
  ],
  ],
  [
    {
      countryCode: 'GD',
      label: 'Grenada',
      labelCyr: 'Гренада',
    }, [
    {
      label: 'Grenada',
      labelCyr: 'Гренада',
      embassy: 'Ambasada Srbije u Sjedinjenim Američkim Državama, Vašington',
      embassyCyr: 'Амбасада Србије у Сједињеним Америчким Државама, Вашингтон',
      email: 'consular@serbiaembusa.org',
    },
  ],
  ],
  [
    {
      countryCode: 'GE',
      label: 'Gruzija',
      labelCyr: 'Грузија',
    }, [
    {
      label: 'Gruzija',
      labelCyr: 'Грузија',
      embassy: 'Ambasada Srbije u Ukrajini',
      embassyCyr: 'Амбасада Србије у Украјини',
      email: 'konzrs@ukr.net',
    },
  ],
  ],
  [
    {
      countryCode: 'GY',
      label: 'Gvajana',
      labelCyr: 'Гвајана',
    }, [
    {
      label: 'Gvajana',
      labelCyr: 'Гвајана',
      embassy: 'Ambasada Srbije u Sjedinjenim Američkim Državama, Vašington',
      embassyCyr: 'Амбасада Србије у Сједињеним Америчким Државама, Вашингтон',
      email: 'consular@serbiaembusa.org',
    },
  ],
  ],
  [
    {
      countryCode: 'GT',
      label: 'Gvatemala',
      labelCyr: 'Гватемала',
    }, [
    {
      label: 'Gvatemala',
      labelCyr: 'Гватемала',
      embassy: 'Ambasada Srbije u Meksiku',
      embassyCyr: 'Амбасада Србије у Мексику',
      email: 'embajadaserbia@alestra.net.mx',
    },
  ],
  ],
  [
    {
      countryCode: 'GN',
      label: 'Gvineja',
      labelCyr: 'Гвинеја',
    }, [
    {
      label: 'Gvineja',
      labelCyr: 'Гвинеја',
      embassy: 'Ambasada Srbije u Alžiru',
      embassyCyr: 'Амбасада Србије у Алжиру',
      email: 'ambasada@ambserbie-alger.com',
    },
  ],
  ],
  [
    {
      countryCode: 'GW',
      label: 'Gvineja Bisao',
      labelCyr: 'Гвинеја Бисао',
    }, [
    {
      label: 'Gvineja Bisao',
      labelCyr: 'Гвинеја Бисао',
      embassy: 'Ambasada Srbije u Alžiru',
      embassyCyr: 'Амбасада Србије у Алжиру',
      email: 'ambasada@ambserbie-alger.com',
    },
  ],
  ],
  [
    {
      countryCode: 'HT',
      label: 'Haiti',
      labelCyr: 'Хаити',
    }, [
    {
      label: 'Haiti',
      labelCyr: 'Хаити',
      embassy: 'Ambasada Srbije na Kubi',
      embassyCyr: 'Амбасада Србије на Куби',
      email: 'konzsrbhav@gmail.com',
    },
  ],
  ],
  [
    {
      countryCode: 'NL',
      label: 'Holandija/Nizozemska',
      labelCyr: 'Холандија/Низоземска',
    }, [
    {
      label: 'Holandija/Nizozemska',
      labelCyr: 'Холандија/Низоземска',
      embassy: 'Ambasada Srbije u Holandiji',
      embassyCyr: 'Амбасада Србије у Холандији',
      email: 'embassy.hague@mfa.rs',
    },
  ],
  ],
  [
    {
      countryCode: 'HN',
      label: 'Honduras',
      labelCyr: 'Хондурас',
    }, [
    {
      label: 'Honduras',
      labelCyr: 'Хондурас',
      embassy: 'Ambasada Srbije u Meksiku',
      embassyCyr: 'Амбасада Србије у Мексику',
      email: 'embajadaserbia@alestra.net.mx',
    },
  ],
  ],
  [
    {
      countryCode: 'HR',
      label: 'Hrvatska',
      labelCyr: 'Хрватска',
    }, [
    {
      label: 'Hrvatska',
      labelCyr: 'Хрватска',
      embassy: 'Konzulat Srbije u Hrvatskoj, Rijeka',
      embassyCyr: 'Конзулат Србије у Хрватској, Ријека',
      email: 'konzulat-rijeka@ri.t-com.hr',
    },
    {
      label: 'Hrvatska',
      labelCyr: 'Хрватска',
      embassy: 'Konzulat Srbije u Hrvatskoj, Vukovar',
      embassyCyr: 'Конзулат Србије у Хрватској, Вуковар',
      email: 'generalni.konzulat@gk-srbije-vukovar.hr',
    },
    {
      label: 'Hrvatska',
      labelCyr: 'Хрватска',
      embassy: 'Ambasada Srbije u Hrvatskoj, Zagreb',
      embassyCyr: 'Амбасада Србије у Хрватској, Загреб',
      email: 'embassy.zagreb@mfa.rs',
    },
  ],
  ],
  [
    {
      countryCode: 'IN',
      label: 'Indija',
      labelCyr: 'Индија',
    }, [
    {
      label: 'Indija',
      labelCyr: 'Индија',
      embassy: 'Ambasada Srbije u Indiji',
      embassyCyr: 'Амбасада Србије у Индији',
      email: 'embassyofserbiadelhi@hotmail.com',
    },
  ],
  ],
  [
    {
      countryCode: 'ID',
      label: 'Indonezija',
      labelCyr: 'Индонезија',
    }, [
    {
      label: 'Indonezija',
      labelCyr: 'Индонезија',
      embassy: 'Ambasada Srbije u Indoneziji',
      embassyCyr: 'Амбасада Србије у Индонезији',
      email: 'embjakarta@serbian-embassy.org',
    },
  ],
  ],
  [
    {
      countryCode: 'IQ',
      label: 'Irak',
      labelCyr: 'Ирак',
    }, [
    {
      label: 'Irak',
      labelCyr: 'Ирак',
      embassy: 'Ambasada Srbije u Iraku',
      embassyCyr: 'Амбасада Србије у Ираку',
      email: 'embsrbag@yahoo.com',
    },
  ],
  ],
  [
    {
      countryCode: 'IR',
      label: 'Iran',
      labelCyr: 'Иран',
    }, [
    {
      label: 'Iran',
      labelCyr: 'Иран',
      embassy: 'Ambasada Srbije u Iranu',
      embassyCyr: 'Амбасада Србије у Ирану',
      email: 'serbembteh@neda.net',
    },
  ],
  ],
  [
    {
      countryCode: 'IE',
      label: 'Irska',
      labelCyr: 'Ирска',
    }, [
    {
      label: 'Irska',
      labelCyr: 'Ирска',
      embassy: 'Ambasada Srbije u Velikoj Britaniji',
      embassyCyr: 'Амбасада Србије у Великој Британији',
      email: 'izbori2020@serbianembassy.org.uk',
    },
  ],
  ],
  [
    {
      countryCode: 'IS',
      label: 'Island',
      labelCyr: 'Исланд',
    }, [
    {
      label: 'Island',
      labelCyr: 'Исланд',
      embassy: 'Ambasada Srbije u Norveškoj',
      embassyCyr: 'Амбасада Србије у Норвешкој',
      email: 'ambasada@serbianembassy.no',
    },
  ],
  ],
  [
    {
      countryCode: 'TL',
      label: 'Istočni Timor',
      labelCyr: 'Источни Тимор',
    }, [
    {
      label: 'Istočni Timor',
      labelCyr: 'Источни Тимор',
      embassy: 'Ambasada Srbije u Indoneziji',
      embassyCyr: 'Амбасада Србије у Индонезији',
      email: 'embjakarta@serbian-embassy.org',
    },
  ],
  ],
  [
    {
      countryCode: 'IT',
      label: 'Italija',
      labelCyr: 'Италија',
    }, [
    {
      label: 'Italija',
      labelCyr: 'Италија',
      embassy: 'Konzulat Srbije u Italiji, Milano',
      embassyCyr: 'Конзулат Србије у Италији, Милано',
      email: 'info@gkrsmi.it',
    },
    {
      label: 'Italija',
      labelCyr: 'Италија',
      embassy: 'Ambasada Srbije u Italiji, Rim',
      embassyCyr: 'Амбасада Србије у Италији, Рим',
      email: 'ljubomir.merdovic@mfa.rs',
    },
    {
      label: 'Italija',
      labelCyr: 'Италија',
      embassy: 'Konzulat Srbije u Italiji, Trst',
      embassyCyr: 'Конзулат Србије у Италији, Трст',
      email: 'gkrstrst@spin.it',
    },
  ],
  ],
  [
    {
      countryCode: 'IL',
      label: 'Izrael',
      labelCyr: 'Израел',
    }, [
    {
      label: 'Izrael',
      labelCyr: 'Израел',
      embassy: 'Ambasada Srbije u Izraelu',
      embassyCyr: 'Амбасада Србије у Израелу',
      email: 'srbambil@netvision.net.il',
    },
  ],
  ],
  [
    {
      countryCode: 'JM',
      label: 'Jamajka',
      labelCyr: 'Јамајка',
    }, [
    {
      label: 'Jamajka',
      labelCyr: 'Јамајка',
      embassy: 'Ambasada Srbije na Kubi',
      embassyCyr: 'Амбасада Србије на Куби',
      email: 'konzsrbhav@gmail.com',
    },
  ],
  ],
  [
    {
      countryCode: 'JP',
      label: 'Japan',
      labelCyr: 'Јапан',
    }, [
    {
      label: 'Japan',
      labelCyr: 'Јапан',
      embassy: 'Ambasada Srbije u Japanu',
      embassyCyr: 'Амбасада Србије у Јапану',
      email: 'embassy.tokyo@mfa.rs',
    },
  ],
  ],
  [
    {
      countryCode: 'YE',
      label: 'Jemen',
      labelCyr: 'Јемен',
    }, [
    {
      label: 'Jemen',
      labelCyr: 'Јемен',
      embassy: 'Ambasada Srbije u Kuvajtu',
      embassyCyr: 'Амбасада Србије у Кувајту',
      email: 'serbkonzkw@gmail.com',
    },
  ],
  ],
  [
    {
      countryCode: 'AM',
      label: 'Jermenija',
      labelCyr: 'Јерменија',
    }, [
    {
      label: 'Jermenija',
      labelCyr: 'Јерменија',
      embassy: 'Ambasada Srbije u Grčkoj, Atina',
      embassyCyr: 'Амбасада Србије у Грчкој, Атина',
      email: 'embassy.athens.consular@mfa.rs',
    },
  ],
  ],
  [
    {
      countryCode: 'JO',
      label: 'Jordan',
      labelCyr: 'Јордан',
    }, [
    {
      label: 'Jordan',
      labelCyr: 'Јордан',
      embassy: 'Ambasada Srbije u Libanu',
      embassyCyr: 'Амбасада Србије у Либану',
      email: 'embassy@serbia-beirut.rs',
    },
  ],
  ],
  [
    {
      countryCode: 'KR',
      label: 'Južna Koreja',
      labelCyr: 'Јужна Кореја',
    }, [
    {
      label: 'Južna Koreja, Republika',
      labelCyr: 'Јужна Кореја, Република',
      embassy: 'Ambasada Srbije u Koreji, Republika',
      embassyCyr: 'Амбасада Србије у Кореји, Република',
      email: 'embserbseul@yahoo.com',
    },
  ],
  ],
  [
    {
      countryCode: 'ZA',
      label: 'Južnoafrička Republika',
      labelCyr: 'Јужноафричка Република',
    }, [
    {
      label: 'Južnoafrička Republika',
      labelCyr: 'Јужноафричка Република',
      embassy: 'Ambasada Srbije u Južnoafričkoj Republici',
      embassyCyr: 'Амбасада Србије у Јужној Африци',
      email: 'info@srbembassy.org.za',
    },
  ],
  ],
  [
    {
      countryCode: 'KH',
      label: 'Kambodža',
      labelCyr: 'Камбоџа',
    }, [
    {
      label: 'Kambodža',
      labelCyr: 'Камбоџа',
      embassy: 'Ambasada Srbije u Indoneziji',
      embassyCyr: 'Амбасада Србије у Индонезији',
      email: 'embjakarta@serbian-embassy.org',
    },
  ],
  ],
  [
    {
      countryCode: 'CM',
      label: 'Kamerun',
      labelCyr: 'Камерун',
    }, [
    {
      label: 'Kamerun',
      labelCyr: 'Камерун',
      embassy: 'Misija u UN - Njujork',
      embassyCyr: 'Мисија у УН - Њујорк',
      email: 'info@serbiamissionun.org',
    },
  ],
  ],
  [
    {
      countryCode: 'CA',
      label: 'Kanada',
      labelCyr: 'Канада',
    }, [
    {
      label: 'Kanada',
      labelCyr: 'Канада',
      embassy: 'Ambasada Srbije u Kanadi, Otava',
      embassyCyr: 'Амбасада Србије у Канади, Отава',
      email: 'diplomat@serbianembassy.ca',
    },
    {
      label: 'Kanada',
      labelCyr: 'Канада',
      embassy: 'Konzulat Srbije u Kanadi, Toronto',
      embassyCyr: 'Конзулат Србије у Канади, Торонто',
      email: 'gkrstoronto@rogers.com',
    },
  ],
  ],
  [
    {
      countryCode: 'QA',
      label: 'Katar',
      labelCyr: 'Катар',
    }, [
    {
      label: 'Katar',
      labelCyr: 'Катар',
      embassy: 'Ambasada Srbije u Kataru',
      embassyCyr: 'Амбасада Србије у Катару',
      email: 'embsrbqat@gmail.com',
    },
  ],
  ],
  [
    {
      countryCode: 'KZ',
      label: 'Kazahstan',
      labelCyr: 'Казахстан',
    }, [
    {
      label: 'Kazahstan',
      labelCyr: 'Казахстан',
      embassy: 'Ambasada Srbije u Kazahstanu',
      embassyCyr: 'Амбасада Србије у Казахстану',
      email: 'amb.astana@mail.ru',
    },
  ],
  ],
  [
    {
      countryCode: 'KE',
      label: 'Kenija',
      labelCyr: 'Кенија',
    }, [
    {
      label: 'Kenija',
      labelCyr: 'Кенија',
      embassy: 'Ambasada Srbije u Keniji',
      embassyCyr: 'Амбасада Србије у Кенији',
      email: 'nairobi@embassyofserbia.or.ke',
    },
  ],
  ],
  [
    {
      countryCode: 'CN',
      label: 'Kina',
      labelCyr: 'Кина',
    }, [
    {
      label: 'Kina',
      labelCyr: 'Кина',
      embassy: 'Ambasada Srbije u Kini, Narodna Republika, Peking',
      embassyCyr: 'Амбасада Србије у Кини, Народна Република, Пекинг',
      email: 'embserbia@embserbia.cn',
    },
    {
      label: 'Kina',
      labelCyr: 'Кина',
      embassy: 'Konzulat Srbije u Kini, Narodna Republika, Šangaj',
      embassyCyr: 'Конзулат Србије у Кини, Народна Република, Шангај',
      email: 'consulate@srbshanghai.org',
    },
  ],
  ],
  [
    {
      countryCode: 'CY',
      label: 'Kipar',
      labelCyr: 'Кипар',
    }, [
    {
      label: 'Kipar',
      labelCyr: 'Кипар',
      embassy: 'Ambasada Srbije na Kipru',
      embassyCyr: 'Амбасада Србије на Кипру',
      email: 'nicosia@serbia.org.cy',
    },
  ],
  ],
  [
    {
      countryCode: 'KG',
      label: 'Kirgistan',
      labelCyr: 'Киргистан',
    }, [
    {
      label: 'Kirgistan',
      labelCyr: 'Киргистан',
      embassy: 'Ambasada Srbije u Rusiji',
      embassyCyr: 'Амбасада Србије у Русији',
      email: 'konzularno.moskva@mfa.rs',
    },
  ],
  ],
  [
    {
      countryCode: 'CO',
      label: 'Kolumbija',
      labelCyr: 'Колумбија',
    }, [
    {
      label: 'Kolumbija',
      labelCyr: 'Колумбија',
      embassy: 'Ambasada Srbije u Sjedinjenim Američkim Državama, Vašington',
      embassyCyr: 'Амбасада Србије у Сједињеним Америчким Државама, Вашингтон',
      email: 'consular@serbiaembusa.org',
    },
  ],
  ],
  [
    {
      countryCode: 'KM',
      label: 'Komori',
      labelCyr: 'Комори',
    }, [
    {
      label: 'Komori',
      labelCyr: 'Комори',
      embassy: 'Ambasada Srbije u Keniji',
      embassyCyr: 'Амбасада Србије у Кенији',
      email: 'nairobi@embassyofserbia.or.ke',
    },
  ],
  ],
  [
    {
      countryCode: 'CD',
      label: 'Kongo, Demokratska Republika',
      labelCyr: 'Конго Демократска Република',
    }, [
    {
      label: 'Kongo, Demokratska Republika',
      labelCyr: 'Конго Демократска Република',
      embassy: 'Ambasada Srbije u Kongu, DR',
      embassyCyr: 'Амбасада Србије у Конгу, ДР',
      email: 'serbambakin@gmail.com',
    },
  ],
  ],
  [
    {
      countryCode: 'CG',
      label: 'Kongo',
      labelCyr: 'Конго',
    }, [
    {
      label: 'Kongo',
      labelCyr: 'Конго',
      embassy: 'Ambasada Srbije u Angoli',
      embassyCyr: 'Амбасада Србије у Анголи',
      email: 'serbiaemb@netcabo.co.ao',
    },
  ],
  ],
  [
    {
      countryCode: 'KP',
      label: 'Koreja, DNR',
      labelCyr: 'Кореја, ДНР',
    }, [
    {
      label: 'Koreja, DNR',
      labelCyr: 'Кореја, ДНР',
      embassy: 'Ambasada Srbije u Kini, Narodna Republika, Peking',
      embassyCyr: 'Амбасада Србије у Кини, Народна Република, Пекинг',
      email: 'embserbia@embserbia.cn',
    },
  ],
  ],
  [
    {
      countryCode: 'CR',
      label: 'Kostarika',
      labelCyr: 'Костарика',
    }, [
    {
      label: 'Kostarika',
      labelCyr: 'Костарика',
      embassy: 'Ambasada Srbije u Meksiku',
      embassyCyr: 'Амбасада Србије у Мексику',
      email: 'embajadaserbia@alestra.net.mx',
    },
  ],
  ],
  [
    {
      countryCode: 'CU',
      label: 'Kuba',
      labelCyr: 'Куба',
    }, [
    {
      label: 'Kuba',
      labelCyr: 'Куба',
      embassy: 'Ambasada Srbije na Kubi',
      embassyCyr: 'Амбасада Србије на Куби',
      email: 'konzsrbhav@gmail.com',
    },
  ],
  ],
  [
    {
      countryCode: 'KW',
      label: 'Kuvajt',
      labelCyr: 'Кувајт',
    }, [
    {
      label: 'Kuvajt',
      labelCyr: 'Кувајт',
      embassy: 'Ambasada Srbije u Kuvajtu',
      embassyCyr: 'Амбасада Србије у Кувајту',
      email: 'serbkonzkw@gmail.com',
    },
  ],
  ],
  [
    {
      countryCode: 'LA',
      label: 'Laos',
      labelCyr: 'Лаос',
    }, [
    {
      label: 'Laos',
      labelCyr: 'Лаос',
      embassy: 'Ambasada Srbije u Mjanmaru',
      embassyCyr: 'Амбасада Србије у Мјанмару',
      email: 'serbemb@yangon.net.mm',
    },
  ],
  ],
  [
    {
      countryCode: 'LS',
      label: 'Lesoto',
      labelCyr: 'Лесото',
    }, [
    {
      label: 'Lesoto',
      labelCyr: 'Лесото',
      embassy: 'Ambasada Srbije u Južnoafričkoj Republici',
      embassyCyr: 'Амбасада Србије у Јужноафричкој Републици',
      email: 'info@srbembassy.org.za',
    },
  ],
  ],
  [
    {
      countryCode: 'LV',
      label: 'Letonija',
      labelCyr: 'Летонија',
    }, [
    {
      label: 'Letonija',
      labelCyr: 'Летонија',
      embassy: 'Ambasada Srbije u Švedskoj',
      embassyCyr: 'Амбасада Србије у Шведској',
      email: 'serbiaemb@telia.com',
    },
  ],
  ],
  [
    {
      countryCode: 'LB',
      label: 'Liban',
      labelCyr: 'Либан',
    }, [
    {
      label: 'Liban',
      labelCyr: 'Либан',
      embassy: 'Ambasada Srbije u Libanu',
      embassyCyr: 'Амбасада Србије у Либану',
      email: 'embassy@serbia-beirut.rs',
    },
  ],
  ],
  [
    {
      countryCode: 'LR',
      label: 'Liberija',
      labelCyr: 'Либерија',
    }, [
    {
      label: 'Liberija',
      labelCyr: 'Либерија',
      embassy: 'Misija u UN - Njujork',
      embassyCyr: 'Мисија у УН - Њујорк',
      email: 'info@serbiamissionun.org',
    },
  ],
  ],
  [
    {
      countryCode: 'LY',
      label: 'Libija',
      labelCyr: 'Либија',
    }, [
    {
      label: 'Libija',
      labelCyr: 'Либија',
      embassy: 'Ambasada Srbije u Libiji',
      embassyCyr: 'Амбасада Србије у Либији',
      email: 'serbianembassy_tripoli@yahoo.com',
    },
  ],
  ],
  [
    {
      countryCode: 'LI',
      label: 'Lihtenštajn',
      labelCyr: 'Лихтенштајн',
    }, [
    {
      label: 'Lihtenštajn',
      labelCyr: 'Лихтенштајн',
      embassy: 'Ambasada Srbije u Švajcarskoj, Bern',
      embassyCyr: 'Амбасада Србије у Швајцарској, Берн',
      email: 'info@ambasadasrbije.ch',
    },
  ],
  ],
  [
    {
      countryCode: 'LT',
      label: 'Litvanija',
      labelCyr: 'Литванија',
    }, [
    {
      label: 'Litvanija',
      labelCyr: 'Литванија',
      embassy: 'Ambasada Srbije u Poljskoj',
      embassyCyr: 'Амбасада Србије у Пољској',
      email: 'embassy.warsaw@mfa.rs',
    },
  ],
  ],
  [
    {
      countryCode: 'LU',
      label: 'Luksemburg',
      labelCyr: 'Луксембург',
    }, [
    {
      label: 'Luksemburg',
      labelCyr: 'Луксембург',
      embassy: 'Ambasada Srbije u Belgiji',
      embassyCyr: 'Амбасада Србије у Белгији',
      email: 'embassy.brussels@mfa.rs',
    },
  ],
  ],
  [
    {
      countryCode: 'MG',
      label: 'Madagaskar',
      labelCyr: 'Мадагаскар',
    }, [
    {
      label: 'Madagaskar',
      labelCyr: 'Мадагаскар',
      embassy: 'Misija u UN - Njujork',
      embassyCyr: 'Мисија у УН - Њујорк',
      email: 'info@serbiamissionun.org',
    },
  ],
  ],
  [
    {
      countryCode: 'HU',
      label: 'Mađarska',
      labelCyr: 'Мађарска',
    }, [
    {
      label: 'Mađarska',
      labelCyr: 'Мађарска',
      embassy: 'Ambasada Srbije u Mađarskoj',
      embassyCyr: 'Амбасада Србије у Мађарској',
      email: 'budapest-consulat@serbiaemb.t-online.hu',
    },
  ],
  ],
  [
    {
      countryCode: 'MW',
      label: 'Malavi',
      labelCyr: 'Малави',
    }, [
    {
      label: 'Malavi',
      labelCyr: 'Малави',
      embassy: 'Ambasada Srbije u Južnoafričkoj Republici',
      embassyCyr: 'Амбасада Србије у Јужноафричкој Републици',
      email: 'info@srbembassy.org.za',
    },
  ],
  ],
  [
    {
      countryCode: 'MV',
      label: 'Maldivi',
      labelCyr: 'Малдиви',
    }, [
    {
      label: 'Maldivi',
      labelCyr: 'Малдиви',
      embassy: 'Ambasada Srbije u Indiji',
      embassyCyr: 'Амбасада Србије у Индији',
      email: 'embassyofserbiadelhi@hotmail.com',
    },
  ],
  ],
  [
    {
      countryCode: 'MY',
      label: 'Malezija',
      labelCyr: 'Малезија',
    }, [
    {
      label: 'Malezija',
      labelCyr: 'Малезија',
      embassy: 'Ambasada Srbije u Indoneziji',
      embassyCyr: 'Амбасада Србије у Индонезији',
      email: 'embjakarta@serbian-embassy.org',
    },
  ],
  ],
]);

export const POLLING_STATIONS: PollingStation[] = [
  {
    label: 'Ambasada Srbije u Nemačkoj, Berlin',
    labelCyr: 'Амбасада Србије у Немачкој, Берлин',
    embassy: 'Ambasada Srbije u Nemačkoj, Berlin',
    embassyCyr: 'Амбасада Србије у Немачкој, Берлин',
    email: 'info@botschaft-serbien.de',
  }, {
    label: 'Ambasada Srbije u Švajcarskoj, Bern',
    labelCyr: 'Амбасада Србије у Швајцарској, Берн',
    embassy: 'Ambasada Srbije u Švajcarskoj, Bern',
    embassyCyr: 'Амбасада Србије у Швајцарској, Берн',
    email: 'info@ambasadasrbije.ch',
  }, {
    label: 'Čile (pokriva Ambasada Srbije u Argentini)',
    labelCyr: 'Чиле (покрива Амбасада Србије у Аргентини)',
    embassy: 'Ambasada Srbije u Argentini',
    embassyCyr: 'Амбасада Србије у Аргентини',
    email: 'consulado@serbembaires.com.ar',
  }, {
    label: 'Crna Gora, Herceg Novi (konzulat)',
    labelCyr: 'Црна Гора, Херцег Нови (конзулат)',
    embassy: 'Konzulat Srbije u Crnoj Gori, Herceg Novi',
    embassyCyr: 'Конзулат Србије у Црној Гори, Херцег Нови',
    email: 'gkh.novi@mfa.rs',
  }, {
    label: 'Crna Gora, Podgorica',
    labelCyr: 'Црна Гора, Подгорица',
    embassy: 'Ambasada Srbije u Crnoj Gori, Podgorica',
    embassyCyr: 'Амбасада Србије у Црној Гори, Подгорица',
    email: 'embassy.podgorica@mfa.rs',
  }, {
    label: 'Danska',
    labelCyr: 'Данска',
    embassy: 'Ambasada Srbije u Danskoj',
    embassyCyr: 'Амбасада Србије у Данској',
    email: 'serbianemb@city.dk',
  }, {
    label: 'Dominikana (pokriva Ambasada Srbije u SAD, Vašington)',
    labelCyr: 'Доминикана (покрива Амбасада Србије у САД, Вашингтон)',
    embassy: 'Ambasada Srbije u Sjedinjenim Američkim Državama, Vašington',
    embassyCyr: 'Амбасада Србије у Сједињеним Америчким Државама, Васхингтон',
    email: 'consular@serbiaembusa.org',
  }, {
    label: 'Dominikanska Republika (pokriva Ambasada Srbije na Kubi)',
    labelCyr: 'Доминиканска Република (покрива Амбасада Србије на Куби)',
    embassy: 'Ambasada Srbije na Kubi',
    embassyCyr: 'Амбасада Србије на Куби',
    email: 'konzsrbhav@gmail.com',
  }, {
    label: 'Džibuti (pokriva Ambasada Srbije u Etiopiji)',
    labelCyr: 'Џибути (покрива Амбасада Србије у Етиопији)',
    embassy: 'Ambasada Srbije u Etiopiji',
    embassyCyr: 'Амбасада Србије у Етиопији',
    email: 'serbambadis@yahoo.com',
  }, {
    label: 'Egipat',
    labelCyr: 'Египат',
    embassy: 'Ambasada Srbije u Egipatu',
    embassyCyr: 'Амбасада Србије у Египату',
    email: 'konzul@serbiaeg.com',
  }, {
    label: 'Ekvador (pokriva Ambasada Srbije u Brazilu)',
    labelCyr: 'Еквадор (покрива Амбасада Србије у Бразилу)',
    embassy: 'Ambasada Srbije u Brazilu',
    embassyCyr: 'Амбасада Србије у Бразилу',
    email: 'embaixadaservia@terra.com.br',
  }, {
    label: 'Ekvatorijalna Gvineja (pokriva Ambasada Srbije u Angoli)',
    labelCyr: 'Гвинеја (покрива Амбасада Србије у Анголи)',
    embassy: 'Ambasada Srbije u Angoli',
    embassyCyr: 'Амбасада Србије у Анголи',
    email: 'serbiaemb@netcabo.co.ao',
  }, {
    label: 'Eritreja (pokriva Ambasada Srbije u Keniji)',
    labelCyr: 'Еритреја (поклопци Амбасада Србије у Кенији)',
    embassy: 'Ambasada Srbije u Keniji',
    embassyCyr: 'Амбасада Србије у Кенији',
    email: 'nairobi@embassyofserbia.or.ke',
  }, {
    label: 'Estonija (pokriva Ambasada Srbije u Finskoj)',
    labelCyr: 'Естонија (покрива Амбасада Србије у Финској)',
    embassy: 'Ambasada Srbije u Finskoj',
    embassyCyr: 'Амбасада Србије у Финској',
    email: 'serbia@kolumbus.fi',
  }, {
    label: 'Etiopija',
    labelCyr: 'Етиопија',
    embassy: 'Ambasada Srbije u Etiopiji',
    embassyCyr: 'Амбасада Србије у Етиопији',
    email: 'serbambadis@yahoo.com',
  }, {
    label: 'Fidži (pokriva Ambasada Srbije u Australiji, Kanbera)',
    labelCyr: 'Фиџи (покрива Амбасада Србије у Аустралији, Канбера)',
    embassy: 'Ambasada Srbije u Australiji, Kanbera',
    embassyCyr: 'Амбасада Србије у Аустралији, Канбера',
    email: 'embassy.canberra@serbia.org.au',
  }, {
    label: 'Filipini (pokriva Ambasada Srbije u Indoneziji)',
    labelCyr: 'Филипини (покрива Амбасада Србије у Индонезији)',
    embassy: 'Ambasada Srbije u Indoneziji',
    embassyCyr: 'Амбасада Србије у Индонезији',
    email: 'embjakarta@serbian-embassy.org',
  }, {
    label: 'Finska',
    labelCyr: 'Финска',
    embassy: 'Ambasada Srbije u Finskoj',
    embassyCyr: 'Амбасада Србије у Финској',
    email: 'serbia@kolumbus.fi',
  }, {
    label: 'Francuska, Pariz',
    labelCyr: 'Француска, Париз',
    embassy: 'Ambasada Srbije u Francuskoj, Pariz',
    embassyCyr: 'Амбасада Србије у Француској, Париз',
    email: 'konzularno.pariz@mfa.rs',
  }, {
    label: 'Francuska, Strazbur (konzulat)',
    labelCyr: 'Француска, Стразбур (конзулат)',
    embassy: 'Konzulat Srbije u Francuskoj, Strazbur',
    embassyCyr: 'Конзулат Србије у Француској, Стразбур',
    email: 'consulate.strasbourg@mfa.rs',
  }, {
    label: 'Gabon (pokriva Ambasada Srbije u Angoli)',
    labelCyr: 'Габон (покрива Амбасада Србије у Анголи)',
    embassy: 'Ambasada Srbije u Angoli',
    embassyCyr: 'Амбасада Србије у Анголи',
    email: 'serbiaemb@netcabo.co.ao',
  }, {
    label: 'Gambija (pokriva UN - Njujork)',
    labelCyr: 'Гамбија (покривен од стране УН - Нев Иорк)',
    embassy: 'UN - Njujork',
    embassyCyr: 'УН-а - Њујорк',
    email: 'info@serbiamissionun.org',
  }, {
    label: 'Gana (pokriva Ambasada Srbije u Nigeriji)',
    labelCyr: 'Гана (покрива Амбасада Србије у Нигерији)',
    embassy: 'Ambasada Srbije u Nigeriji',
    embassyCyr: 'Амбасада Србије у Нигерији',
    email: 'serbconsabuja@gmail.com',
  }, {
    label: 'Grčka, Atina',
    labelCyr: 'Грчка, Атина',
    embassy: 'Ambasada Srbije u Grčkoj, Atina',
    embassyCyr: 'Амбасада Србије у Грчкој, Атина',
    email: 'embassy.athens.consular@mfa.rs',
  }, {
    label: 'Grčka, Solun (konzulat)',
    labelCyr: 'Грчка, Солун (конзулат)',
    embassy: 'Konzulat Srbije u Grčkoj, Solun',
    embassyCyr: 'Конзулат Србије у Грчкој, Солун',
    email: 'srbcons@otenet.gr',
  }, {
    label: 'Grenada (pokriva Ambasada Srbije u SAD, Vašington)',
    labelCyr: 'Гренада (покрива Амбасада Србије у САД, Вашингтон)',
    embassy: 'Ambasada Srbije u Sjedinjenim Američkim Državama, Vašington',
    embassyCyr: 'Амбасада Србије у Сједињеним Америчким Државама, Васхингтон',
    email: 'consular@serbiaembusa.org',
  }, {
    label: 'Gruzija (pokriva Ambasada Srbije u Ukrajini)',
    labelCyr: 'Грузија (покрива Амбасада Србије у Украјини)',
    embassy: 'Ambasada Srbije u Ukrajini',
    embassyCyr: 'Амбасада Србије у Украјини',
    email: 'konzrs@ukr.net',
  }, {
    label: 'Gvajana (pokriva Ambasada Srbije u SAD, Vašington)',
    labelCyr: 'Гвајана (поклопци Амбасада Србије у Сједињеним Америчким Државама, Вашингтон)',
    embassy: 'Ambasada Srbije u Sjedinjenim Američkim Državama, Vašington',
    embassyCyr: 'Амбасада Србије у Сједињеним Америчким Државама, Васхингтон',
    email: 'consular@serbiaembusa.org',
  }, {
    label: 'Gvatemala (pokriva Ambasada Srbije u Meksiku)',
    labelCyr: 'Гватемала (покрива Амбасада Србије у Мексику)',
    embassy: 'Ambasada Srbije u Meksiku',
    embassyCyr: 'Амбасада Србије у Мексику',
    email: 'embajadaserbia@alestra.net.mx',
  }, {
    label: 'Gvineja (pokriva Ambasada Srbije u Alžiru)',
    labelCyr: 'Гвинеја (покрива Амбасада Србије у Алжиру)',
    embassy: 'Ambasada Srbije u Alžiru',
    embassyCyr: 'Амбасада Србије у Алжиру',
    email: 'ambasada@ambserbie-alger.com',
  }, {
    label: 'Gvineja Bisao (pokriva Ambasada Srbije u Alžiru)',
    labelCyr: 'Гвинеја Бисао (покрива Амбасада Србије у Алжиру)',
    embassy: 'Ambasada Srbije u Alžiru',
    embassyCyr: 'Амбасада Србије у Алжиру',
    email: 'ambasada@ambserbie-alger.com',
  }, {
    label: 'Haiti (pokriva Ambasada Srbije na Kubi)',
    labelCyr: 'Хаити (покрива Амбасада Србије на Куби)',
    embassy: 'Ambasada Srbije na Kubi',
    embassyCyr: 'Амбасада Србије на Куби',
    email: 'konzsrbhav@gmail.com',
  }, {
    label: 'Holandija',
    labelCyr: 'Низоземска',
    embassy: 'Ambasada Srbije u Holandiji',
    embassyCyr: 'Амбасада Србије у Холандији',
    email: 'embassy.hague@mfa.rs',
  }, {
    label: 'Honduras (pokriva Ambasada Srbije u Meksiku)',
    labelCyr: 'Хондурас (покрива Амбасада Србије у Мексику)',
    embassy: 'Ambasada Srbije u Meksiku',
    embassyCyr: 'Амбасада Србије у Мексику',
    email: 'embajadaserbia@alestra.net.mx',
  }, {
    label: 'Hrvatska, Rijeka (konzulat)',
    labelCyr: 'Хрватска, Ријека (конзулат)',
    embassy: 'Konzulat Srbije u Hrvatskoj, Rijeka',
    embassyCyr: 'Конзулат Србије у Хрватској, Ријека',
    email: 'konzulat-rijeka@ri.t-com.hr',
  }, {
    label: 'Hrvatska, Vukovar (konzulat)',
    labelCyr: 'Хрватска, Вуковар (конзулат)',
    embassy: 'Konzulat Srbije u Hrvatskoj, Vukovar',
    embassyCyr: 'Конзулат Србије у Хрватској, Вуковар',
    email: 'generalni.konzulat@gk-srbije-vukovar.hr',
  }, {
    label: 'Hrvatska, Zagreb',
    labelCyr: 'Хрватска, Загреб',
    embassy: 'Ambasada Srbije u Hrvatskoj, Zagreb',
    embassyCyr: 'Амбасада Србије у Хрватској, Загреб',
    email: 'embassy.zagreb@mfa.rs',
  }, {
    label: 'Indija',
    labelCyr: 'Индија',
    embassy: 'Ambasada Srbije u Indiji',
    embassyCyr: 'Амбасада Србије у Индији',
    email: 'embassyofserbiadelhi@hotmail.com',
  }, {
    label: 'Indonezija',
    labelCyr: 'Индонезија',
    embassy: 'Ambasada Srbije u Indoneziji',
    embassyCyr: 'Амбасада Србије у Индонезији',
    email: 'embjakarta@serbian-embassy.org',
  }, {
    label: 'Irak',
    labelCyr: 'Ирак',
    embassy: 'Ambasada Srbije u Iraku',
    embassyCyr: 'Амбасада Србије у Ираку',
    email: 'embsrbag@yahoo.com',
  }, {
    label: 'Iran',
    labelCyr: 'Иран',
    embassy: 'Ambasada Srbije u Iranu',
    embassyCyr: 'Амбасада Србије у Ирану',
    email: 'serbembteh@neda.net',
  }, {
    label: 'Irska (pokriva Ambasada Srbije u Velikoj Britaniji)',
    labelCyr: 'Ирска (покрива Амбасада Србије у Великој Британији)',
    embassy: 'Ambasada Srbije u Velikoj Britaniji',
    embassyCyr: 'Амбасада Србије у Великој Британији',
    email: 'izbori2020@serbianembassy.org.uk',
  }, {
    label: 'Island (preko Ambasada Srbije u Norveškoj)',
    labelCyr: 'Исланд (преко Амбасада Србије у Норвешкој)',
    embassy: 'Ambasada Srbije u Norveškoj',
    embassyCyr: 'Амбасада Србије у Норвешкој',
    email: 'ambasada@serbianembassy.no',
  }, {
    label: 'Istočni Timor (pokriva Ambasada Srbije u Indoneziji)',
    labelCyr: 'Источни Тимор (покрива Амбасада Србије у Индонезији)',
    embassy: 'Ambasada Srbije u Indoneziji',
    embassyCyr: 'Амбасада Србије у Индонезији',
    email: 'embjakarta@serbian-embassy.org',
  }, {
    label: 'Italija, Milano (konzulat)',
    labelCyr: 'Италија, Милано (конзулат)',
    embassy: 'Konzulat Srbije u Italiji, Milano',
    embassyCyr: 'Конзулат Србије у Италији, Милано',
    email: 'info@gkrsmi.it',
  }, {
    label: 'Italija, Rim',
    labelCyr: 'Италија, Рим',
    embassy: 'Ambasada Srbije u Italiji, Rim',
    embassyCyr: 'Амбасада Србије у Италији, Рим',
    email: 'ljubomir.merdovic@mfa.rs',
  }, {
    label: 'Italija, Trst (konzulat)',
    labelCyr: 'Италија, Трст (конзулат)',
    embassy: 'Konzulat Srbije u Italiji, Trst',
    embassyCyr: 'Конзулат Србије у Италији, Трст',
    email: 'gkrstrst@spin.it',
  }, {
    label: 'Izrael',
    labelCyr: 'Израел',
    embassy: 'Ambasada Srbije u Izraelu',
    embassyCyr: 'Амбасада Србије у Израелу',
    email: 'srbambil@netvision.net.il',
  }, {
    label: 'Jamajka (pokriva Ambasada Srbije na Kubi)',
    labelCyr: 'Јамајка (покрива Амбасада Србије на Куби)',
    embassy: 'Ambasada Srbije na Kubi',
    embassyCyr: 'Амбасада Србије на Куби',
    email: 'konzsrbhav@gmail.com',
  }, {
    label: 'Japan',
    labelCyr: 'Јапан',
    embassy: 'Ambasada Srbije u Japanu',
    embassyCyr: 'Амбасада Србије у Јапану',
    email: 'embassy.tokyo@mfa.rs',
  }, {
    label: 'Jemen (pokriva Ambasada Srbije u Kuvajtu)',
    labelCyr: 'Јемен (покрива Амбасада Србије у Кувајту)',
    embassy: 'Ambasada Srbije u Kuvajtu',
    embassyCyr: 'Амбасада Србије у Кувајту',
    email: 'serbkonzkw@gmail.com',
  }, {
    label: 'Jermenija (pokriva Ambasada Srbije u Grčkoj, Atina)',
    labelCyr: 'Јерменија (покрива Амбасада Србије у Грчкој, Атина)',
    embassy: 'Ambasada Srbije u Grčkoj, Atina',
    embassyCyr: 'Амбасада Србије у Грчкој, Атина',
    email: 'embassy.athens.consular@mfa.rs',
  }, {
    label: 'Jordan (pokriva Ambasada Srbije u Libanu)',
    labelCyr: 'Јордан (покрива Амбасада Србије у Либану)',
    embassy: 'Ambasada Srbije u Libanu',
    embassyCyr: 'Амбасада Србије у Либану',
    email: 'embassy@serbia-beirut.rs',
  }, {
    label: 'Južna Koreja, Republika',
    labelCyr: 'Јужна Кореја, Република',
    embassy: 'Ambasada Srbije u Koreji, Republika',
    embassyCyr: 'Амбасада Србије у Кореји, Република',
    email: 'embserbseul@yahoo.com',
  }, {
    label: 'Južnoafrička Republika',
    labelCyr: 'Република, Јужна',
    embassy: 'Ambasada Srbije u Južnoafričkoj Republici',
    embassyCyr: 'Амбасада Србије у Јужној Африци',
    email: 'info@srbembassy.org.za',
  }, {
    label: 'Kambodža (pokriva Ambasada Srbije u Indoneziji)',
    labelCyr: 'Камбоџа (покрива Амбасада Србије у Индонезији)',
    embassy: 'Ambasada Srbije u Indoneziji',
    embassyCyr: 'Амбасада Србије у Индонезији',
    email: 'embjakarta@serbian-embassy.org',
  }, {
    label: 'Kamerun (pokriva UN - Njujork)',
    labelCyr: 'Камерун (покрива Уједињене нације - Њујорк)',
    embassy: 'UN - Njujork',
    embassyCyr: 'УН-а - Њујорк',
    email: 'info@serbiamissionun.org',
  }, {
    label: 'Kanada, Otava',
    labelCyr: 'Канада, Велика кола',
    embassy: 'Ambasada Srbije u Kanadi, Otava',
    embassyCyr: 'Амбасада Србије у Канади, Отава',
    email: 'diplomat@serbianembassy.ca',
  }, {
    label: 'Kanada, Toronto (konzulat)',
    labelCyr: 'Канада, Торонто (конзулат)',
    embassy: 'Konzulat Srbije u Kanadi, Toronto',
    embassyCyr: 'Конзулат Србије у Канади, Торонто',
    email: 'gkrstoronto@rogers.com',
  }, {
    label: 'Katar',
    labelCyr: 'катар',
    embassy: 'Ambasada Srbije u Kataru',
    embassyCyr: 'Амбасада Србије у Катару',
    email: 'embsrbqat@gmail.com',
  }, {
    label: 'Kazahstan',
    labelCyr: 'Казахстан',
    embassy: 'Ambasada Srbije u Kazahstanu',
    embassyCyr: 'Амбасада Србије у Казахстану',
    email: 'amb.astana@mail.ru',
  }, {
    label: 'Kenija',
    labelCyr: 'Кенија',
    embassy: 'Ambasada Srbije u Keniji',
    embassyCyr: 'Амбасада Србије у Кенији',
    email: 'nairobi@embassyofserbia.or.ke',
  }, {
    label: 'Kina, Narodna Republika, Peking',
    labelCyr: 'Кина, Народна Република, Пекинг',
    embassy: 'Ambasada Srbije u Kini, Narodna Republika, Peking',
    embassyCyr: 'Амбасада Србије у Кини, Народна Република, Пекинг',
    email: 'embserbia@embserbia.cn',
  }, {
    label: 'Kina, Narodna Republika, Šangaj (konzulat)',
    labelCyr: 'Кина, Народна Република, Шангај (конзулат)',
    embassy: 'Konzulat Srbije u Kini, Narodna Republika, Šangaj',
    embassyCyr: 'Конзулат Србије у Кини, Народна Република, Шангај',
    email: 'consulate@srbshanghai.org',
  }, {
    label: 'Kipar',
    labelCyr: 'вајар',
    embassy: 'Ambasada Srbije na Kipru',
    embassyCyr: 'Амбасада Србије на Кипру',
    email: 'nicosia@serbia.org.cy',
  }, {
    label: 'Kirgistan (pokriva Ambasada Srbije u Rusiji)',
    labelCyr: 'Киргистан (покрива Амбасада Србије у Русији)',
    embassy: 'Ambasada Srbije u Rusiji',
    embassyCyr: 'Амбасада Србије у Русији',
    email: 'konzularno.moskva@mfa.rs',
  }, {
    label: 'Kolumbija (pokriva Ambasada Srbije u SAD, Vašington)',
    labelCyr: 'Колумбија (покрива Амбасада Србије у САД, Вашингтон)',
    embassy: 'Ambasada Srbije u Sjedinjenim Američkim Državama, Vašington',
    embassyCyr: 'Амбасада Србије у Сједињеним Америчким Државама, Васхингтон',
    email: 'consular@serbiaembusa.org',
  }, {
    label: 'Komori (pokriva Ambasada Srbije u Keniji)',
    labelCyr: 'Комори (покрива Амбасада Србије у Кенији)',
    embassy: 'Ambasada Srbije u Keniji',
    embassyCyr: 'Амбасада Србије у Кенији',
    email: 'nairobi@embassyofserbia.or.ke',
  }, {
    label: 'Kondo, DR',
    labelCyr: 'Кондо ДР',
    embassy: 'Ambasada Srbije u Kongu, DR',
    embassyCyr: 'Амбасада Србије у Конгу, ДР',
    email: 'serbambakin@gmail.com',
  }, {
    label: 'Kongo (pokriva Ambasada Srbije u Angoli)',
    labelCyr: 'Конго (покрива Амбасада Србије у Анголи)',
    embassy: 'Ambasada Srbije u Angoli',
    embassyCyr: 'Амбасада Србије у Анголи',
    email: 'serbiaemb@netcabo.co.ao',
  }, {
    label: 'Koreja, DNR (pokriva Ambasada Srbije u Kini, Narodna Republika, Peking)',
    labelCyr: 'Кореја, ДНР (покрива Амбасада Србије у Кини, Народна Република, Пекинг)',
    embassy: 'Ambasada Srbije u Kini, Narodna Republika, Peking',
    embassyCyr: 'Амбасада Србије у Кини, Народна Република, Пекинг',
    email: 'embserbia@embserbia.cn',
  }, {
    label: 'Kostarika (pokriva Ambasada Srbije u Meksiku)',
    labelCyr: 'Костарика (покрива амбасада Србије у Мексику)',
    embassy: 'Ambasada Srbije u Meksiku',
    embassyCyr: 'Амбасада Србије у Мексику',
    email: 'embajadaserbia@alestra.net.mx',
  }, {
    label: 'Kuba',
    labelCyr: 'куба',
    embassy: 'Ambasada Srbije na Kubi',
    embassyCyr: 'Амбасада Србије на Куби',
    email: 'konzsrbhav@gmail.com',
  }, {
    label: 'Kuvajt',
    labelCyr: 'Кувајт',
    embassy: 'Ambasada Srbije u Kuvajtu',
    embassyCyr: 'Амбасада Србије у Кувајту',
    email: 'serbkonzkw@gmail.com',
  }, {
    label: 'Laos (pokriva Ambasada Srbije u Mjanmaru)',
    labelCyr: 'Лаос (покрива Амбасада Србије у Мјанмару)',
    embassy: 'Ambasada Srbije u Mjanmaru',
    embassyCyr: 'Амбасада Србије у Мјанмару',
    email: 'serbemb@yangon.net.mm',
  }, {
    label: 'Lesoto (pokriva Ambasada Srbije u Južnoafričkoj Republici)',
    labelCyr: 'Лесото (покрива Амбасада Србије у Републици Јужној Африци)',
    embassy: 'Ambasada Srbije u Južnoafričkoj Republici',
    embassyCyr: 'Амбасада Србије у Јужној Африци',
    email: 'info@srbembassy.org.za',
  }, {
    label: 'Letonija (pokriva Ambasada Srbije u Švedskoj)',
    labelCyr: 'Летонија (покрива Амбасада Србије у Шведској)',
    embassy: 'Ambasada Srbije u Švedskoj',
    embassyCyr: 'Амбасада Србије у Шведској',
    email: 'serbiaemb@telia.com',
  }, {
    label: 'Liban',
    labelCyr: 'Либан',
    embassy: 'Ambasada Srbije u Libanu',
    embassyCyr: 'Амбасада Србије у Либану',
    email: 'embassy@serbia-beirut.rs',
  }, {
    label: 'Liberija (pokriva UN - Njujork)',
    labelCyr: 'Либерија (покрива Уједињених нација - Нев Иорк)',
    embassy: 'UN - Njujork',
    embassyCyr: 'УН-а - Њујорк',
    email: 'info@serbiamissionun.org',
  }, {
    label: 'Libija',
    labelCyr: 'Либија',
    embassy: 'Ambasada Srbije u Libiji',
    embassyCyr: 'Амбасада Србије у Либији',
    email: 'serbianembassy_tripoli@yahoo.com',
  }, {
    label: 'Lihtenštajn (pokriva Ambasada Srbije u Švajcarskoj, Bern)',
    labelCyr: 'Лихтенштајн (поклопци Амбасада Србије у Швајцарској, Берн)',
    embassy: 'Ambasada Srbije u Švajcarskoj, Bern',
    embassyCyr: 'Амбасада Србије у Швајцарској, Берн',
    email: 'info@ambasadasrbije.ch',
  }, {
    label: 'Litvanija (pokriva Ambasada Srbije u Poljskoj)',
    labelCyr: 'Литванија (покрива Амбасада Србије у Пољској)',
    embassy: 'Ambasada Srbije u Poljskoj',
    embassyCyr: 'Амбасада Србије у Пољској',
    email: 'embassy.warsaw@mfa.rs',
  }, {
    label: 'Luksemburg (pokriva Ambasada Srbije u Belgiji)',
    labelCyr: 'Луксембург (покрива Амбасада Србије у Белгији)',
    embassy: 'Ambasada Srbije u Belgiji',
    embassyCyr: 'Амбасада Србије у Белгији',
    email: 'embassy.brussels@mfa.rs',
  }, {
    label: 'Madagaskar (pokriva UN - Njujork)',
    labelCyr: 'Мадагаскар (покрива Уједињене нације - Њујорк)',
    embassy: 'UN - Njujork',
    embassyCyr: 'УН-а - Њујорк',
    email: 'info@serbiamissionun.org',
  }, {
    label: 'Mađarska',
    labelCyr: 'Мађарска',
    embassy: 'Ambasada Srbije u Mađarskoj',
    embassyCyr: 'Амбасада Србије у Мађарској',
    email: 'budapest-consulat@serbiaemb.t-online.hu',
  }, {
    label: 'Malavi (pokriva Ambasada Srbije u Južnoafričkoj Republici)',
    labelCyr: 'Малави (покрива Амбасада Србије у Републици Јужној Африци)',
    embassy: 'Ambasada Srbije u Južnoafričkoj Republici',
    embassyCyr: 'Амбасада Србије у Јужној Африци',
    email: 'info@srbembassy.org.za',
  }, {
    label: 'Maldivi (pokriva Ambasada Srbije u Indiji)',
    labelCyr: 'Малдивес (поклопци Амбасада Србије у Индији)',
    embassy: 'Ambasada Srbije u Indiji',
    embassyCyr: 'Амбасада Србије у Индији',
    email: 'embassyofserbiadelhi@hotmail.com',
  }, {
    label: 'Malezija (pokriva Ambasada Srbije u Indoneziji)',
    labelCyr: 'Малезија (покрива Амбасада Србије у Индонезији)',
    embassy: 'Ambasada Srbije u Indoneziji',
    embassyCyr: 'Амбасада Србије у Индонезији',
    email: 'embjakarta@serbian-embassy.org',
  }, {
    label: 'Mali (pokriva Ambasada Srbije u Alžiru)',
    labelCyr: 'Мали (покрива Амбасада Србије у Алжиру)',
    embassy: 'Ambasada Srbije u Alžiru',
    embassyCyr: 'Амбасада Србије у Алжиру',
    email: 'ambasada@ambserbie-alger.com',
  }, {
    label: 'Malta (pokriva Ambasada Srbije u Italiji, Rim',
    labelCyr: 'Малта (покрива Амбасада Србије у Италији, Рим',
    embassy: 'Ambasada Srbije u Italiji, Rim',
    embassyCyr: 'Амбасада Србије у Италији, Рим',
    email: 'ljubomir.merdovic@mfa.rs',
  }, {
    label: 'Maroko',
    labelCyr: 'Мароко',
    embassy: 'Ambasada Srbije u Maroku',
    embassyCyr: 'Амбасада Србије у Мароку',
    email: 'ambrsrabat@gmail.com',
  }, {
    label: 'Mauricijus (pokriva Ambasada Srbije u Južnoafričkoj Republici)',
    labelCyr: 'Маурицијус (покрива Амбасада Србије у Јужноафричкој Републици)',
    embassy: 'Ambasada Srbije u Južnoafričkoj Republici',
    embassyCyr: 'Амбасада Србије у Јужној Африци',
    email: 'info@srbembassy.org.za',
  }, {
    label: 'Mauritanija (pokriva Ambasada Srbije u Maroku)',
    labelCyr: 'Мауританија (покрива Амбасада Србије у Мароку)',
    embassy: 'Ambasada Srbije u Maroku',
    embassyCyr: 'Амбасада Србије у Мароку',
    email: 'ambrsrabat@gmail.com',
  }, {
    label: 'Meksiko',
    labelCyr: 'Мексико',
    embassy: 'Ambasada Srbije u Meksiku',
    embassyCyr: 'Амбасада Србије у Мексику',
    email: 'embajadaserbia@alestra.net.mx',
  }, {
    label: 'Mjanmar',
    labelCyr: 'Мијанмар',
    embassy: 'Ambasada Srbije u Mjanmaru',
    embassyCyr: 'Амбасада Србије у Мјанмару',
    email: 'serbemb@yangon.net.mm',
  }, {
    label: 'Moldavija (pokriva Ambasada Srbije u Rumuniji)',
    labelCyr: 'Молдавија (покрива Амбасада Србије у Румунији)',
    embassy: 'Ambasada Srbije u Rumuniji, Bukurešt',
    embassyCyr: 'Амбасада Србије у Румунији, Букурешт',
    email: 'info@ambserbia.ro',
  }, {
    label: 'Monako (pokriva Ambasada Srbije u Francuskoj, Pariz)',
    labelCyr: 'Монако (покрива Амбасада Србије у Француској, Париз)',
    embassy: 'Ambasada Srbije u Francuskoj, Pariz',
    embassyCyr: 'Амбасада Србије у Француској, Париз',
    email: 'konzularno.pariz@mfa.rs',
  }, {
    label: 'Mongolija (pokriva Ambasada Srbije u Kini, Narodna Republika, Peking)',
    labelCyr: 'Монголија (покрива Амбасада Србије у Кини, Народна Република, Пекинг)',
    embassy: 'Ambasada Srbije u Kini, Narodna Republika, Peking',
    embassyCyr: 'Амбасада Србије у Кини, Народна Република, Пекинг',
    email: 'embserbia@embserbia.cn',
  }, {
    label: 'Mozambik (pokriva Ambasada Srbije u Južnoafričkoj Republici)',
    labelCyr: 'Мозамбик (покрива Амбасада Србије у Републици Јужној Африци)',
    embassy: 'Ambasada Srbije u Južnoafričkoj Republici',
    embassyCyr: 'Амбасада Србије у Јужној Африци',
    email: 'info@srbembassy.org.za',
  }, {
    label: 'Namibija (pokriva Ambasada Srbije u Južnoafričkoj Republici)',
    labelCyr: 'Намибија (покрива Амбасада Србије у Републици Јужној Африци)',
    embassy: 'Ambasada Srbije u Južnoafričkoj Republici',
    embassyCyr: 'Амбасада Србије у Јужној Африци',
    email: 'info@srbembassy.org.za',
  }, {
    label: 'Nemačka, Diseldorf (konzulat)',
    labelCyr: 'Немачка, Диселдорф (конзулат)',
    embassy: 'Konzulat Srbije u Nemačkoj, Diseldorf',
    embassyCyr: 'Конзулат Србије у Немачкој, Диселдорф',
    email: 'info@gksrbijedis.de',
  }, {
    label: 'Nemačka, Frankfurt (konzulat)',
    labelCyr: 'Немачка, Франкфурт (конзулат)',
    embassy: 'Konzulat Srbije u Nemačkoj, Frankfurt',
    embassyCyr: 'Конзулат Србије у Немачкој, Франкфурт',
    email: 'info@gksrbfra.de',
  }, {
    label: 'Nemačka, Hamburg (konzulat)',
    labelCyr: 'Немачка, Хамбург (конзулат)',
    embassy: 'Konzulat Srbije u Nemačkoj, Hamburg',
    embassyCyr: 'Конзулат Србије у Немачкој, Хамбург',
    email: 'gk_hamburg@web.de',
  }, {
    label: 'Nemačka, Minhen (konzulat)',
    labelCyr: 'Немачка, Минхен (конзулат)',
    embassy: 'Konzulat Srbije u Nemačkoj, Minhen',
    embassyCyr: 'Конзулат Србије у Немачкој, Минхену',
    email: 'gk.muenchen@mfa.rs',
  }, {
    label: 'Nemačka, Štutgart (konzulat)',
    labelCyr: 'Немачка, Штутгарт (конзулат)',
    embassy: 'Konzulat Srbije u Nemačkoj, Štutgart',
    embassyCyr: 'Конзулат Србије у Немачкој, Стуттгарт',
    email: 'gk-stutgart@t-online.de',
  }, {
    label: 'Nepal (pokriva Ambasada Srbije u Indiji)',
    labelCyr: 'Непал (покрива Амбасада Србије у Индији)',
    embassy: 'Ambasada Srbije u Indiji',
    embassyCyr: 'Амбасада Србије у Индији',
    email: 'embassyofserbiadelhi@hotmail.com',
  }, {
    label: 'Niger (pokriva UN - Njujork)',
    labelCyr: 'Нигер (покрива Уједињених нација - Нев Иорк)',
    embassy: 'UN - Njujork',
    embassyCyr: 'УН-а - Њујорк',
    email: 'info@serbiamissionun.org',
  }, {
    label: 'Nigerija',
    labelCyr: 'Нигерија',
    embassy: 'Ambasada Srbije u Nigeriji',
    embassyCyr: 'Амбасада Србије у Нигерији',
    email: 'serbconsabuja@gmail.com',
  }, {
    label: 'Nikaragva (pokriva Ambasada Srbije u Meksiku)',
    labelCyr: 'Никарагва (покрива Амбасада Србије у Мексику)',
    embassy: 'Ambasada Srbije u Meksiku',
    embassyCyr: 'Амбасада Србије у Мексику',
    email: 'embajadaserbia@alestra.net.mx',
  }, {
    label: 'Norveška',
    labelCyr: 'Норвешка',
    embassy: 'Ambasada Srbije u Norveškoj',
    embassyCyr: 'Амбасада Србије у Норвешкој',
    email: 'ambasada@serbianembassy.no',
  }, {
    label: 'Novi Zeland (pokriva Ambasada Srbije u Australiji, Kanbera)',
    labelCyr: 'Нови Зеланд (покрива Амбасада Србије у Аустралији, Канбера)',
    embassy: 'Ambasada Srbije u Australiji, Kanbera',
    embassyCyr: 'Амбасада Србије у Аустралији, Канбера',
    email: 'embassy.canberra@serbia.org.au',
  }, {
    label: 'Obala Slonovače (pokriva UN - Njujork)',
    labelCyr: 'Обала Слоноваче (покрива Уједињене нације - Њујорк)',
    embassy: 'UN - Njujork',
    embassyCyr: 'УН-а - Њујорк',
    email: 'info@serbiamissionun.org',
  }, {
    label: 'Oman (pokriva Ambasada Srbije u Egipatu)',
    labelCyr: 'Оман (покрива Амбасада Србије у Египату)',
    embassy: 'Ambasada Srbije u Egipatu',
    embassyCyr: 'Амбасада Србије у Египату',
    email: 'konzul@serbiaeg.com',
  }, {
    label: 'Pakistan (pokriva Ambasada Srbije u Iranu)',
    labelCyr: 'Пакистан (покрива Амбасада Србије у Ирану)',
    embassy: 'Ambasada Srbije u Iranu',
    embassyCyr: 'Амбасада Србије у Ирану',
    email: 'serbembteh@neda.net',
  }, {
    label: 'Palestina (pokriva Ambasada Srbije u Egipatu)',
    labelCyr: 'Палестина (покрива Амбасада Србије у Египату)',
    embassy: 'Ambasada Srbije u Egipatu',
    embassyCyr: 'Амбасада Србије у Египату',
    email: 'konzul@serbiaeg.com',
  }, {
    label: 'Panama (pokriva Ambasada Srbije u Meksiku)',
    labelCyr: 'Панама (покрива амбасада Србије у Мексику)',
    embassy: 'Ambasada Srbije u Meksiku',
    embassyCyr: 'Амбасада Србије у Мексику',
    email: 'embajadaserbia@alestra.net.mx',
  }, {
    label: 'Papua Nova Gvineja (pokriva Ambasada Srbije u Australiji, Kanbera)',
    labelCyr: 'Папуа Нова Гвинеја (покрива Амбасада Србије у Аустралији, Канбера)',
    embassy: 'Ambasada Srbije u Australiji, Kanbera',
    embassyCyr: 'Амбасада Србије у Аустралији, Канбера',
    email: 'embassy.canberra@serbia.org.au',
  }, {
    label: 'Paragvaj (pokriva Ambasada Srbije u Argentini)',
    labelCyr: 'Парагвај (покрива Амбасада Србије у Аргентини)',
    embassy: 'Ambasada Srbije u Argentini',
    embassyCyr: 'Амбасада Србије у Аргентини',
    email: 'consulado@serbembaires.com.ar',
  }, {
    label: 'Peru (pokriva Ambasada Srbije u Argentini)',
    labelCyr: 'Перу (покрива Амбасада Србије у Аргентини)',
    embassy: 'Ambasada Srbije u Argentini',
    embassyCyr: 'Амбасада Србије у Аргентини',
    email: 'consulado@serbembaires.com.ar',
  }, {
    label: 'Poljska',
    labelCyr: 'Пољска',
    embassy: 'Ambasada Srbije u Poljskoj',
    embassyCyr: 'Амбасада Србије у Пољској',
    email: 'embassy.warsaw@mfa.rs',
  }, {
    label: 'Portugal',
    labelCyr: 'Португалија',
    embassy: 'Ambasada Srbije u Portugalu',
    embassyCyr: 'Амбасада Србије у Португалу',
    email: 'serviaemba@netcabo.pt',
  }, {
    label: 'Ruanda (pokriva Ambasada Srbije u Keniji)',
    labelCyr: 'Руанда (покрива Амбасада Србије у Кенији)',
    embassy: 'Ambasada Srbije u Keniji',
    embassyCyr: 'Амбасада Србије у Кенији',
    email: 'nairobi@embassyofserbia.or.ke',
  }, {
    label: 'Rumunija',
    labelCyr: 'Румунија',
    embassy: 'Ambasada Srbije u Rumuniji, Bukurešt',
    embassyCyr: 'Амбасада Србије у Румунији, Букурешт',
    email: 'info@ambserbia.ro',
  }, {
    label: 'Rumunija, Temišvar (konzulat)',
    labelCyr: 'Румунија, Тимисоара (конзулат)',
    embassy: 'Konzulat Srbije u Rumuniji, Temišvar',
    embassyCyr: 'Конзулат Србије у Румунији, Темишвар',
    email: 'gktemisvar@gmail.com',
  }, {
    label: 'Rusija',
    labelCyr: 'Русија',
    embassy: 'Ambasada Srbije u Rusiji',
    embassyCyr: 'Амбасада Србије у Русији',
    email: 'konzularno.moskva@mfa.rs',
  }, {
    label: 'SAD, Čikago (konzulat)',
    labelCyr: 'УСА, Цхицаго (конзулат)',
    embassy: 'Konzulat Srbije u Sjedinjenim Američkim Državama, Čikago',
    embassyCyr: 'Конзулат Србије у Сједињеним Америчким Државама, Цхицаго',
    email: 'info@scgchicago.org',
  }, {
    label: 'SAD, Njujork (konzulat)',
    labelCyr: 'САД, Њујорк (конзулат)',
    embassy: 'Konzulat Srbije u Sjedinjenim Američkim Državama, Njujork',
    embassyCyr: 'Конзулат Србије у Сједињеним Америчким Државама, Нев Иорк',
    email: 'izbori.njujork2020@mfa.rs',
  }, {
    label: 'SAD, Vašington',
    labelCyr: 'САД, Вашингтон',
    embassy: 'Ambasada Srbije u Sjedinjenim Američkim Državama, Vašington',
    embassyCyr: 'Амбасада Србије у Сједињеним Америчким Државама, Васхингтон',
    email: 'consular@serbiaembusa.org',
  }, {
    label: 'Salvadaor (pokriva Ambasada Srbije u Meksiku)',
    labelCyr: 'Салвадаор (покрива Амбасада Србије у Мексику)',
    embassy: 'Ambasada Srbije u Meksiku',
    embassyCyr: 'Амбасада Србије у Мексику',
    email: 'embajadaserbia@alestra.net.mx',
  }, {
    label: 'Samoa (pokriva Ambasada Srbije u Australiji, Kanbera)',
    labelCyr: 'Самоа (покрива Амбасада Србије у Аустралији, Канбера)',
    embassy: 'Ambasada Srbije u Australiji, Kanbera',
    embassyCyr: 'Амбасада Србије у Аустралији, Канбера',
    email: 'embassy.canberra@serbia.org.au',
  }, {
    label: 'San Marino (pokriva Ambasada Srbije u Italiji, Rim)',
    labelCyr: 'Сан Марино (покрива Амбасада Србије у Италији, Рим)',
    embassy: 'Ambasada Srbije u Italiji, Rim',
    embassyCyr: 'Амбасада Србије у Италији, Рим',
    email: 'ljubomir.merdovic@mfa.rs',
  }, {
    label: 'Sao Tome i Principe (pokriva UN - Njujork)',
    labelCyr: 'Сао Томе и Принципе (покрива Уједињене нације - Њујорк)',
    embassy: 'UN - Njujork',
    embassyCyr: 'УН-а - Њујорк',
    email: 'info@serbiamissionun.org',
  }, {
    label: 'Saudijska Arabija',
    labelCyr: 'Саудијска Арабија',
    embassy: 'Ambasada Srbije u Saudijskoj Arabiji',
    embassyCyr: 'Амбасада Србије у Саудијској Арабији',
    email: 'embsrb.riyadh@yahoo.com',
  }, {
    label: 'Sejšeli (pokriva Ambasada Srbije u Etiopiji)',
    labelCyr: 'Сејшели (покрива Амбасада Србије у Етиопији)',
    embassy: 'Ambasada Srbije u Etiopiji',
    embassyCyr: 'Амбасада Србије у Етиопији',
    email: 'serbambadis@yahoo.com',
  }, {
    label: 'Senegal (pokriva Ambasada Srbije u Maroku)',
    labelCyr: 'Сенегал (покрива Амбасада Србије у Мароку)',
    embassy: 'Ambasada Srbije u Maroku',
    embassyCyr: 'Амбасада Србије у Мароку',
    email: 'ambrsrabat@gmail.com',
  }, {
    label: 'Sent Kits i Nevis (pokriva Ambasada Srbije u SAD, Vašington)',
    labelCyr: 'Сент Китс и Невис (покрива Амбасада Србије у САД, Вашингтон)',
    embassy: 'Ambasada Srbije u Sjedinjenim Američkim Državama, Vašington',
    embassyCyr: 'Амбасада Србије у Сједињеним Америчким Државама, Васхингтон',
    email: 'consular@serbiaembusa.org',
  }, {
    label: 'Sent Vinsent i Grenadini (pokriva Ambasada Srbije u SAD, Vašington)',
    labelCyr: 'Сент Винсент и Гренадини (покрива Амбасада Србије у САД, Вашингтон)',
    embassy: 'Ambasada Srbije u Sjedinjenim Američkim Državama, Vašington',
    embassyCyr: 'Амбасада Србије у Сједињеним Америчким Државама, Васхингтон',
    email: 'consular@serbiaembusa.org',
  }, {
    label: 'Severna Makedonija',
    labelCyr: 'Северна Македонија',
    embassy: 'Ambasada Srbije u Severnoj Makedoniji',
    embassyCyr: 'Амбасада Србије у Северна Македонија',
    email: 'srbamb@unet.com.mk',
  }, {
    label: 'Sijera Leone (pokriva UN - Njujork)',
    labelCyr: 'Сијера Леоне (покрива УН - Њујорк)',
    embassy: 'UN - Njujork',
    embassyCyr: 'УН-а - Њујорк',
    email: 'info@serbiamissionun.org',
  }, {
    label: 'Singapur (pokriva Ambasada Srbije u Indoneziji)',
    labelCyr: 'Сингапур (покрива Амбасада Србије у Индонезији)',
    embassy: 'Ambasada Srbije u Indoneziji',
    embassyCyr: 'Амбасада Србије у Индонезији',
    email: 'embjakarta@serbian-embassy.org',
  }, {
    label: 'Sirija',
    labelCyr: 'Сирија',
    embassy: 'Ambasada Srbije u Siriji',
    embassyCyr: 'Амбасада Србије у Сирији',
    email: 'ambasada@srbija-damask.org',
  }, {
    label: 'Slovačka',
    labelCyr: 'Словачка',
    embassy: 'Ambasada Srbije u Slovačkoj',
    embassyCyr: 'Амбасада Србије у Словачкој',
    email: 'embassy.bratislava@mfa.rs',
  }, {
    label: 'Slovenija',
    labelCyr: 'Словенија',
    embassy: 'Ambasada Srbije u Sloveniji',
    embassyCyr: 'Амбасада Србије у Словенији',
    email: 'embassy.ljubljana@mfa.rs',
  }, {
    label: 'Somalija (pokriva Ambasada Srbije u Keniji)',
    labelCyr: 'Сомалија (покрива Амбасада Србије у Кенији)',
    embassy: 'Ambasada Srbije u Keniji',
    embassyCyr: 'Амбасада Србије у Кенији',
    email: 'nairobi@embassyofserbia.or.ke',
  }, {
    label: 'Španija',
    labelCyr: 'Шпанија',
    embassy: 'Ambasada Srbije u Španiji',
    embassyCyr: 'Амбасада Србије у Шпанији',
    email: 'konz.madrid@mfa.rs',
  }, {
    label: 'Šri Lanka (pokriva Ambasada Srbije u Indiji)',
    labelCyr: 'Шри Ланка (покрива Амбасада Србије у Индији)',
    embassy: 'Ambasada Srbije u Indiji',
    embassyCyr: 'Амбасада Србије у Индији',
    email: 'embassyofserbiadelhi@hotmail.com',
  }, {
    label: 'Sudan (pokriva Ambasada Srbije u Egipatu)',
    labelCyr: 'Судан (покрива Амбасада Србије у Египату)',
    embassy: 'Ambasada Srbije u Egipatu',
    embassyCyr: 'Амбасада Србије у Египату',
    email: 'konzul@serbiaeg.com',
  }, {
    label: 'Surinam (pokriva Ambasada Srbije u SAD, Vašington)',
    labelCyr: 'Суринам (покрива Амбасада Србије у САД, Вашингтон)',
    embassy: 'Ambasada Srbije u Sjedinjenim Američkim Državama, Vašington',
    embassyCyr: 'Амбасада Србије у Сједињеним Америчким Државама, Васхингтон',
    email: 'consular@serbiaembusa.org',
  }, {
    label: 'Švajcarska, Cirih (konzulat)',
    labelCyr: 'Свитзерланд, Зурицх (конзулат)',
    embassy: 'Konzulat Srbije u Švajcarskoj, Cirih',
    embassyCyr: 'Конзулат Србије у Швајцарској, Цириху',
    email: 'info@konzulat.ch',
  }, {
    label: 'Svazilend (pokriva Ambasada Srbije u Južnoafričkoj Republici)',
    labelCyr: 'Свазиленд (покрива Амбасада Србије у Републици Јужној Африци)',
    embassy: 'Ambasada Srbije u Južnoafričkoj Republici',
    embassyCyr: 'Амбасада Србије у Јужној Африци',
    email: 'info@srbembassy.org.za',
  }, {
    label: 'Švedska',
    labelCyr: 'Шведска',
    embassy: 'Ambasada Srbije u Švedskoj',
    embassyCyr: 'Амбасада Србије у Шведској',
    email: 'serbiaemb@telia.com',
  }, {
    label: 'Sveta Lucija (pokriva Ambasada Srbije u SAD, Vašington)',
    labelCyr: 'Света Луција (поклопци Амбасада Србије у Сједињеним Америчким Државама, Вашингтон)',
    embassy: 'Ambasada Srbije u Sjedinjenim Američkim Državama, Vašington',
    embassyCyr: 'Амбасада Србије у Сједињеним Америчким Државама, Васхингтон',
    email: 'consular@serbiaembusa.org',
  }, {
    label: 'Tadžikistan (pokriva Ambasada Srbije u Etiopiji)',
    labelCyr: 'Таџикистан (покрива Амбасада Србије у Етиопији)',
    embassy: 'Ambasada Srbije u Etiopiji',
    embassyCyr: 'Амбасада Србије у Етиопији',
    email: 'serbambadis@yahoo.com',
  }, {
    label: 'Tajland (pokriva Ambasada Srbije u Indoneziji)',
    labelCyr: 'Тајланд (покрива Амбасада Србије у Индонезији)',
    embassy: 'Ambasada Srbije u Indoneziji',
    embassyCyr: 'Амбасада Србије у Индонезији',
    email: 'embjakarta@serbian-embassy.org',
  }, {
    label: 'Tanzanija (pokriva Ambasada Srbije u Rusiji)',
    labelCyr: 'Танзанија (поклопци Амбасада Србије у Русији)',
    embassy: 'Ambasada Srbije u Rusiji',
    embassyCyr: 'Амбасада Србије у Русији',
    email: 'konzularno.moskva@mfa.rs',
  }, {
    label: 'Togo (pokriva UN - Njujork)',
    labelCyr: 'Того (покрива Уједињених нација - Нев Иорк)',
    embassy: 'UN - Njujork',
    embassyCyr: 'УН-а - Њујорк',
    email: 'info@serbiamissionun.org',
  }, {
    label: 'Tonga (pokriva Ambasada Srbije u Australiji, Kanbera)',
    labelCyr: 'Тонга (покрива Амбасада Србије у Аустралији, Канбера)',
    embassy: 'Ambasada Srbije u Australiji, Kanbera',
    embassyCyr: 'Амбасада Србије у Аустралији, Канбера',
    email: 'embassy.canberra@serbia.org.au',
  }, {
    label: 'Trinidad i Tobago (pokriva Ambasada Srbije u SAD, Vašington)',
    labelCyr: 'Тринидад и Тобаго (поклопци Амбасада Србије у Сједињеним Америчким Државама, Вашингтон)',
    embassy: 'Ambasada Srbije u Sjedinjenim Američkim Državama, Vašington',
    embassyCyr: 'Амбасада Србије у Сједињеним Америчким Државама, Васхингтон',
    email: 'consular@serbiaembusa.org',
  }, {
    label: 'Tunis',
    labelCyr: 'Тунис',
    embassy: 'Ambasada Srbije u Tunisu',
    embassyCyr: 'Амбасада Србије у Тунису',
    email: 'amb.serbia@gnet.tn',
  }, {
    label: 'Turkmenistan (pokriva Ambasada Srbije u Rusiji)',
    labelCyr: 'Туркменистан (покрива Амбасада Србије у Русији)',
    embassy: 'Ambasada Srbije u Rusiji',
    embassyCyr: 'Амбасада Србије у Русији',
    email: 'konzularno.moskva@mfa.rs',
  }, {
    label: 'Turksa, Ankara',
    labelCyr: 'Турци, Анкари',
    embassy: 'Ambasada Srbije u Turskoj, Ankara',
    embassyCyr: 'Амбасада Србије у Турској, Анкара',
    email: 'embserank@gmail.com',
  }, {
    label: 'Turska, Istanbul (konzulat)',
    labelCyr: 'Турска, Истанбул (конзулат)',
    embassy: 'Konzulat Srbije u Turskoj, Istanbul',
    embassyCyr: 'Конзулат Србије у Турској, Истанбул',
    email: 'konzulat.istanbul@mfa.rs',
  }, {
    label: 'Uganda (pokriva Ambasada Srbije u Keniji)',
    labelCyr: 'Уганда (поклопци Амбасада Србије у Кенији)',
    embassy: 'Ambasada Srbije u Keniji',
    embassyCyr: 'Амбасада Србије у Кенији',
    email: 'nairobi@embassyofserbia.or.ke',
  }, {
    label: 'Ujedinjeni Arapski Emirati',
    labelCyr: 'Уједињени Арапски Емирати',
    embassy: 'Ambasada Srbije u Ujedinjenim Arapskim Emiratima',
    embassyCyr: 'Амбасада Србије у Уједињеним Арапским Емиратима',
    email: 'embassy.abudhabi@mfa.rs',
  }, {
    label: 'Ukrajina',
    labelCyr: 'Украјина',
    embassy: 'Ambasada Srbije u Ukrajini',
    embassyCyr: 'Амбасада Србије у Украјини',
    email: 'konzrs@ukr.net',
  }, {
    label: 'Urugvaj (pokriva Ambasada Srbije u Argentini)',
    labelCyr: 'Уругвај (покрива Амбасада Србије у Аргентини)',
    embassy: 'Ambasada Srbije u Argentini',
    embassyCyr: 'Амбасада Србије у Аргентини',
    email: 'consulado@serbembaires.com.ar',
  }, {
    label: 'Uzbekistan (pokriva Ambasada Srbije u Rusiji)',
    labelCyr: 'Узбекистан (покрива Амбасада Србије у Русији)',
    embassy: 'Ambasada Srbije u Rusiji',
    embassyCyr: 'Амбасада Србије у Русији',
    email: 'konzularno.moskva@mfa.rs',
  }, {
    label: 'Vanuatu (pokriva Ambasada Srbije u Australiji, Kanbera',
    labelCyr: 'Вануату (покрива Амбасада Србије у Аустралији, Канбера',
    embassy: 'Ambasada Srbije u Australiji, Kanbera',
    embassyCyr: 'Амбасада Србије у Аустралији, Канбера',
    email: 'embassy.canberra@serbia.org.au',
  }, {
    label: 'Vatikan',
    labelCyr: 'Ватикан',
    embassy: 'Ambasada Srbije u Vatikanu',
    embassyCyr: 'Амбасада Србије у Ватикану',
    email: 'amb.serbia.vatican@ambroma.com',
  }, {
    label: 'Velika Britanija',
    labelCyr: 'Велика Британија',
    embassy: 'Ambasada Srbije u Velikoj Britaniji',
    embassyCyr: 'Амбасада Србије у Великој Британији',
    email: 'izbori2020@serbianembassy.org.uk',
  }, {
    label: 'Venecuela (pokriva Ambasada Srbije na Kubi)',
    labelCyr: 'Венецуела (покрива Амбасада Србије на Куби)',
    embassy: 'Ambasada Srbije na Kubi',
    embassyCyr: 'Амбасада Србије на Куби',
    email: 'konzsrbhav@gmail.com',
  }, {
    label: 'Vijetnam (pokriva Ambasada Srbije u Indoneziji)',
    labelCyr: 'Вијетнам (покрива Амбасада Србије у Индонезији)',
    embassy: 'Ambasada Srbije u Indoneziji',
    embassyCyr: 'Амбасада Србије у Индонезији',
    email: 'embjakarta@serbian-embassy.org',
  }, {
    label: 'Zambija',
    labelCyr: 'Замбија',
    embassy: 'Ambasada Srbije u Zambiji',
    embassyCyr: 'Амбасада Србије у Замбији',
    email: 'serbia.lusaka@iconnect.zm',
  }, {
    label: 'Zambija (pokriva Ambasada Srbije u Južnoafričkoj Republici)',
    labelCyr: 'Замбија (покрива Амбасада Србије у Републици Јужној Африци)',
    embassy: 'Ambasada Srbije u Južnoafričkoj Republici',
    embassyCyr: 'Амбасада Србије у Јужној Африци',
    email: 'info@srbembassy.org.za',
  }, {
    label: 'Zelenortska ostrva (pokriva Ambasada Srbije u Južnoafričkoj Republici)',
    labelCyr: 'Капе Верде (покрива Амбасада Србије у Републици Јужној Африци)',
    embassy: 'Ambasada Srbije u Južnoafričkoj Republici',
    embassyCyr: 'Амбасада Србије у Јужној Африци',
    email: 'info@srbembassy.org.za',
  }, {
    label: 'Zimbabve (pokriva Ambasada Srbije u Portugalu)',
    labelCyr: 'Зимбабве (покрива Амбасада Србије у Португалу)',
    embassy: 'Ambasada Srbije u Portugalu',
    embassyCyr: 'Амбасада Србије у Португалу',
    email: 'serviaemba@netcabo.pt',
  }
];
