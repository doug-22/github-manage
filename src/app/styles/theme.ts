export default {
  grid: {
    container: '130rem',
    gutter: '3.2rem',
  },
  border: {
    radius: '0.4rem',
  },
  font: {
    family:
      "Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    light: 300,
    normal: 400,
    bold: 600,
    sizes: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      xxlarge: '2.8rem',
      huge: '5.2rem',
    },
  },
  fontPrimary: {
    family: 'Righteous, cursive',
    normal: 100,
    sizes: {
      sidebar: '14px',
      header: '24px',
      body1: '1.6rem',
      body2: '1.4rem',
      body3: '1.2rem',
      bodyBold3: '1.2rem',
    },
  },
  fontSecondary: {
    family: 'Roboto',
    regular: 300,
    medium: 500,
    bold: 'bold',
    sizes: {
      tabTitle: '18px',
      tableHeader: '15px',
      tableBody: '14px',
      placeholder: '16px',
      pagination: '12px',
      titlePage: '18px',
      body1: '1.6rem',
      body2: '1.4rem',
      body3: '1.2rem',
      bodyBold3: '1.2rem',
    },
  },
  // TODO -> definir todas as cores
  colors: {
    primary: '#37BAB0',
    black: '#000000',
    blackTransparent: 'rgba(0, 0, 0, 0.05)',
    red: '#eb3f3f',
    redHover: '#d81616',
    green: '#5eaf9b',
    greenHover: '#397365',
    greenAccordion: '#effffb',
    blue: '#8cc0de',
    blueHover: '#54a1ce',
    disabled: '#F6F6F8',
    description: '#616462',
    legend: '#244F44',
    backgroundIndicator: '#FAF9F9',
    successIndicator: '#76D8C0',
    warningIndicator: '#ECB4B4',
    infoIndicator: '#8CC0DE',
    disabledDark: '#B3B4B6',
    divider: '#D9D9D9',
    borderInput: '#08236d',
    modalBackground: 'rgba(0, 0, 0, 0.2)',
    whiteTransparent: 'rgba(255, 255, 255, 0.7);',
    backgroundPassword: '#ebf1f4',
    gray: '#f5f5f5',
    titleAccordion: '#333333',
    fieldAccordion: '#40444d',
    titleGreen: '#7AD3BD',
    titleBrown: '#8e8e8e',
    backgroundTitleModal: '#E4FFF8',
    orangeStatus: '#FC8625',
    blueStatus: '#2196F3',
    greenStatus: '#00A57C',
    link: '#1976D2',

    secondColor: '#90C59A',
    supportColor: '#6F6C99',
    activeCard: '#F0F2F5',
    hoverCards: '#F5F6F6',
    error: '#EC3137',
    danger: '#F6555F',
    dark: '#515151',

    background: '#f8f7f7',
    backgroundHome: '#e9e9e9',
    shadow: 'rgba(0, 0, 0, 0.5)',
    blueDark: '#002868',
    placeholder: '#000000',
    white: '#FFFFFF',
  },
  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem',
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50,
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out',
  },
} as const
