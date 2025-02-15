export const menuMed = [
  {
    label: 'Dashboard Med',
    path: '/',
    icon: 'ri-dashboard-fill'
  }
]
export const menulabo = [
  {
    label: 'Dashboard Labo',
    path: '/',
    icon: 'ri-dashboard-fill'
  }
]
export const menuAdmin = [
  {
    label: 'Dashboard admin',
    path: '/',
    icon: 'ri-dashboard-fill'
  },
  {
    label: 'patient',
    path: '/patient',
    icon: 'ri-user-fill',
    subMenu: [
      { label: 'Historique médical', path: '/cal', icon: 'ri-history-fill' },
      { label: 'Ordonnances', path: '/de', icon: 'ri-file-line' },
      { label: 'patient', path: '/patient', icon: 'ri-file-line' }
    ]
  }
  // Autres éléments du menu
]
