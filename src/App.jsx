
import { RecoilRoot, useRecoilValue } from 'recoil'
import { jobsAtom, messagingAtom, networkAtom, notificationAtom } from './assets/atom' // Ensure this is correctly defined

function App() {
  return (
    <>
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
    </>
    
  )
}

function MainApp() {
  const networkNotification = useRecoilValue(networkAtom)
  const jobAtomCount = useRecoilValue(jobsAtom)
  const NotificationAtomCount = useRecoilValue(notificationAtom)
  const messagingAtomCount = useRecoilValue(messagingAtom)
  
  return (
    <>
      <button> HOME </button>
      <button> MY NETWORK ({networkNotification >= 100 ? "99+" : networkNotification}) </button>
      <button> JOBS {jobAtomCount}</button>
      <button> MESSAGING {messagingAtomCount} </button>
      <button> NOTIFICATION {NotificationAtomCount} </button>
      <button> ME </button>
    </>
  )
}

export default App
