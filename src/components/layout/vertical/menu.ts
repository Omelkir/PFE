const menu: any = [
  {
    label: 'Dashboard',
    path: '/',
    icon: 'ri-dashboard-fill'
  },
  {
    label: 'Patient',
    path: '/cc',
    icon: 'ri-user-fill',
    subMenu: [
      { label: 'Historique médical', path: '/cal', icon: 'ri-history-fill' },
      {
        label: 'Ordonnances',
        path: '/de',
        icon: 'ri-file-line'
      }
    ]
  },
  {
    label: 'Rendez-vous',
    path: '/ren',
    icon: 'ri-time-fill',
    subMenu: [
      { label: 'Calendrier', path: '/cal', icon: 'ri-calendar-fill' },
      {
        label: 'Demandes de rendez-vous',
        path: '/de',
        icon: 'ri-file-list-fill'
      }
    ]
  },
  {
    label: 'Rapport',
    path: '/ren',
    icon: 'ri-file-fill'
  },
  {
    label: 'Paramètres & Profil',
    path: '/ren',
    icon: 'ri-settings-fill'
  },
  {
    label: 'Déconnexion',
    path: '/ren',
    icon: 'ri-logout-circle-line'
  }
]
export default menu
